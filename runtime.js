/* Mis rutinas: almacenamiento local.
   Reemplaza la base de datos y el almacén de fotos del runtime de artefactos de Claude por IndexedDB en este
   dispositivo, con la misma interfaz que la app ya usa (collection/onSnapshot/where/get, doc/set/get/delete/acquire,
   assets.upload). Todo se carga en memoria al abrir y cada escritura se persiste antes de confirmarse.
   También implementa el respaldo: un archivo JSON con todas las colecciones y las fotos, y su restauración. */
(function(){
'use strict';
var VERSION = '1.0.0';
var DB_NAME = 'mis-rutinas', DB_VERSION = 1;
var COLECCIONES = ['dias', 'semanas', 'diasTipo', 'pesos', 'medidas', 'perfil', 'ejercicios', 'migracion', 'ciclo'];
var FORMATO_RESPALDO = 'mis-rutinas-respaldo-1';
var MAX_FOTO = 5 * 1024 * 1024;
var DIAS_RECORDATORIO = 14;

var st = { idb: null, cols: {}, fotos: {}, urls: {}, meta: {}, subs: {}, leases: {}, abriendo: null };
COLECCIONES.forEach(function(c){ st.cols[c] = {}; st.subs[c] = []; });

function clone(v){ return v === undefined ? undefined : JSON.parse(JSON.stringify(v)); }
function own(o, k){ return Object.prototype.hasOwnProperty.call(o, k); }
function err(code, msg){ return { code: code, message: msg || code }; }
function errDe(e){
  var n = e && e.name;
  if (n === 'QuotaExceededError') return err('quota_exceeded', 'sin espacio');
  return err('unavailable', e && e.message ? String(e.message) : 'almacenamiento no disponible');
}
function hex(n){ var out = '', a = new Uint8Array(n); (window.crypto || {}).getRandomValues ? window.crypto.getRandomValues(a) : a.forEach(function(_, i){ a[i] = Math.floor(Math.random() * 256); }); for (var i = 0; i < n; i++) out += (a[i] < 16 ? '0' : '') + a[i].toString(16); return out; }

/* IndexedDB */
function abrirIdb(){
  return new Promise(function(resolve, reject){
    var idb = window.indexedDB;
    if (!idb) return reject(err('sin-indexeddb', 'este navegador no ofrece IndexedDB'));
    var req;
    try { req = idb.open(DB_NAME, DB_VERSION); } catch (e) { return reject(errDe(e)); }
    req.onupgradeneeded = function(){
      var d = req.result;
      if (!d.objectStoreNames.contains('docs')) d.createObjectStore('docs', { keyPath: ['col', 'id'] });
      if (!d.objectStoreNames.contains('fotos')) d.createObjectStore('fotos', { keyPath: 'id' });
      if (!d.objectStoreNames.contains('meta')) d.createObjectStore('meta', { keyPath: 'k' });
    };
    req.onsuccess = function(){ var d = req.result; d.onversionchange = function(){ d.close(); }; resolve(d); };
    req.onerror = function(){ reject(errDe(req.error)); };
    req.onblocked = function(){ reject(err('bloqueada', 'otra pestaña mantiene la base abierta')); };
  });
}
function tx(stores, mode, fn){
  return new Promise(function(resolve, reject){
    var t;
    try { t = st.idb.transaction(stores, mode); } catch (e) { return reject(errDe(e)); }
    var out;
    t.oncomplete = function(){ resolve(out); };
    t.onerror = function(){ reject(errDe(t.error)); };
    t.onabort = function(){ reject(errDe(t.error)); };
    try { out = fn(t); } catch (e) { try { t.abort(); } catch (x) {} reject(errDe(e)); }
  });
}
function leerTodo(store){
  return tx([store], 'readonly', function(t){ var rows = []; t.objectStore(store).openCursor().onsuccess = function(e){ var c = e.target.result; if (c) { rows.push(c.value); c.continue(); } }; return rows; });
}
function cargar(){
  return Promise.all([leerTodo('docs'), leerTodo('fotos'), leerTodo('meta')]).then(function(r){
    r[0].forEach(function(row){ if (own(st.cols, row.col)) st.cols[row.col][row.id] = row.data; });
    r[1].forEach(function(f){ st.fotos[f.id] = { type: f.type, blob: f.blob }; try { st.urls[f.id] = URL.createObjectURL(f.blob); } catch (e) {} });
    r[2].forEach(function(m){ st.meta[m.k] = m.v; });
  });
}
function guardarMeta(k, v){ st.meta[k] = v; return tx(['meta'], 'readwrite', function(t){ t.objectStore('meta').put({ k: k, v: v }); }).catch(function(){}); }
function marcarCambio(){ if (st.meta.cambiosDesdeRespaldo !== true) guardarMeta('cambiosDesdeRespaldo', true); }

/* instantáneas y suscripciones */
function docSnap(id, data){ return { id: id, exists: data !== undefined, data: function(){ return clone(data); }, metadata: { fromCache: false, hasPendingWrites: false } }; }
function pasa(data, filtros){
  for (var i = 0; i < filtros.length; i++) {
    var f = filtros[i], v = data == null ? undefined : data[f.campo];
    if (f.op === '==' && !(v === f.valor)) return false;
    if (f.op === '!=' && !(v !== f.valor)) return false;
    if (f.op === '>=' && !(v >= f.valor)) return false;
    if (f.op === '<=' && !(v <= f.valor)) return false;
    if (f.op === '>' && !(v > f.valor)) return false;
    if (f.op === '<' && !(v < f.valor)) return false;
  }
  return true;
}
function snapDe(col, filtros){
  var o = st.cols[col], docs = [];
  Object.keys(o).sort().forEach(function(id){ if (pasa(o[id], filtros)) docs.push(docSnap(id, o[id])); });
  return { docs: docs, metadata: { fromCache: false, hasPendingWrites: false } };
}
function emitir(col){
  st.subs[col].slice().forEach(function(s){ if (s.activa) { try { s.cb(snapDe(col, s.filtros)); } catch (e) { setTimeout(function(){ throw e; }, 0); } } });
}
function consulta(col, filtros){
  return {
    where: function(campo, op, valor){ return consulta(col, filtros.concat([{ campo: campo, op: op, valor: valor }])); },
    onSnapshot: function(cb, onErr){
      var s = { cb: cb, filtros: filtros, activa: true };
      st.subs[col].push(s);
      setTimeout(function(){ if (s.activa) { try { cb(snapDe(col, filtros)); } catch (e) { setTimeout(function(){ throw e; }, 0); } } }, 0);
      return function(){ s.activa = false; var i = st.subs[col].indexOf(s); if (i >= 0) st.subs[col].splice(i, 1); };
    },
    get: function(){ return Promise.resolve(snapDe(col, filtros)); }
  };
}
function partir(path){
  var p = String(path).split('/');
  if (p.length !== 2 || !own(st.cols, p[0]) || !p[1]) throw err('invalid_argument', 'ruta no válida: ' + path);
  return { col: p[0], id: p[1] };
}
function docRef(path){
  var r = partir(path), col = r.col, id = r.id;
  return {
    set: function(v){
      if (v === undefined || v === null || typeof v !== 'object' || Array.isArray(v)) return Promise.reject(err('invalid_argument', 'el documento debe ser un objeto'));
      var data = clone(v);
      return tx(['docs'], 'readwrite', function(t){ t.objectStore('docs').put({ col: col, id: id, data: data }); }).then(function(){ st.cols[col][id] = data; marcarCambio(); emitir(col); });
    },
    get: function(){ var o = st.cols[col]; return Promise.resolve(docSnap(id, own(o, id) ? o[id] : undefined)); },
    delete: function(){
      return tx(['docs'], 'readwrite', function(t){ t.objectStore('docs').delete([col, id]); }).then(function(){ delete st.cols[col][id]; marcarCambio(); emitir(col); });
    },
    /* arriendo exclusivo: en un solo dispositivo basta con recordar quién lo tiene y hasta cuándo */
    acquire: function(opts){
      opts = opts || {};
      var key = col + '/' + id, now = Date.now(), l = st.leases[key];
      if (l && l.holder !== opts.holder && l.hasta > now) return Promise.resolve({ acquired: false, expiresAt: new Date(l.hasta).toISOString() });
      var ttl = typeof opts.ttlMs === 'number' && opts.ttlMs > 0 ? opts.ttlMs : 60000;
      st.leases[key] = { holder: opts.holder, hasta: now + ttl };
      return Promise.resolve({ acquired: true, expiresAt: new Date(now + ttl).toISOString() });
    }
  };
}
var db = { collection: function(col){ if (!own(st.cols, col)) throw err('invalid_argument', 'colección desconocida: ' + col); return consulta(col, []); }, doc: docRef };

/* fotos */
var assets = {
  upload: function(blob, opts){
    opts = opts || {};
    if (!blob || typeof blob.size !== 'number') return Promise.reject(err('unsupported_type', 'no es un archivo'));
    var type = opts.type || blob.type || '';
    if (!/^image\/(jpeg|png|webp|gif)$/.test(type)) return Promise.reject(err('unsupported_type', type));
    if (blob.size > MAX_FOTO) return Promise.reject(err('too_large', 'la foto supera 5 MB'));
    var id = hex(16);
    return tx(['fotos'], 'readwrite', function(t){ t.objectStore('fotos').put({ id: id, type: type, blob: blob }); }).then(function(){
      st.fotos[id] = { type: type, blob: blob };
      try { st.urls[id] = URL.createObjectURL(blob); } catch (e) {}
      marcarCambio();
      return { id: id };
    }, function(e){ throw e && e.code === 'quota_exceeded' ? err('quota_or_state', 'sin espacio') : e; });
  }
};
function fotoUrl(id){ return id && own(st.urls, id) ? st.urls[id] : ''; }

/* respaldo */
function blobABase64(blob){
  return new Promise(function(resolve, reject){
    var fr = new FileReader();
    fr.onload = function(){ var s = String(fr.result || ''); resolve(s.slice(s.indexOf(',') + 1)); };
    fr.onerror = function(){ reject(err('lectura', 'no se pudo leer la foto')); };
    fr.readAsDataURL(blob);
  });
}
function base64ABlob(b64, type){
  var bin = atob(b64), a = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i);
  return new Blob([a], { type: type });
}
function fechaHoy(){ var d = new Date(), p = function(n){ return (n < 10 ? '0' : '') + n; }; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); }
function contar(){ var n = {}; COLECCIONES.forEach(function(c){ n[c] = Object.keys(st.cols[c]).length; }); n.fotos = Object.keys(st.fotos).length; return n; }
function crearRespaldo(){
  var ids = Object.keys(st.fotos);
  return Promise.all(ids.map(function(id){ return blobABase64(st.fotos[id].blob).then(function(b64){ return { id: id, type: st.fotos[id].type, datos: b64 }; }); })).then(function(fotos){
    var doc = { formato: FORMATO_RESPALDO, exportado: new Date().toISOString(), app: VERSION, colecciones: {}, fotos: {} };
    COLECCIONES.forEach(function(c){ doc.colecciones[c] = clone(st.cols[c]); });
    fotos.forEach(function(f){ doc.fotos[f.id] = { type: f.type, datos: f.datos }; });
    var texto = JSON.stringify(doc), blob = new Blob([texto], { type: 'application/json' });
    return { blob: blob, nombre: 'mis-rutinas-' + fechaHoy() + '.json', resumen: contar() };
  });
}
function respaldoHecho(){ return Promise.all([guardarMeta('ultimoRespaldo', new Date().toISOString()), guardarMeta('cambiosDesdeRespaldo', false)]); }
function validarRespaldo(doc){
  if (!doc || typeof doc !== 'object') throw err('formato', 'el archivo no es un respaldo de Mis rutinas');
  if (doc.formato !== FORMATO_RESPALDO) throw err('formato', 'el archivo no es un respaldo de Mis rutinas (formato ' + String(doc.formato) + ')');
  if (!doc.colecciones || typeof doc.colecciones !== 'object') throw err('formato', 'el respaldo no tiene colecciones');
  var cols = {};
  COLECCIONES.forEach(function(c){
    var o = doc.colecciones[c];
    cols[c] = {};
    if (o == null) return;
    if (typeof o !== 'object' || Array.isArray(o)) throw err('formato', 'la colección ' + c + ' no tiene el formato esperado');
    Object.keys(o).forEach(function(id){ if (o[id] && typeof o[id] === 'object' && !Array.isArray(o[id])) cols[c][id] = o[id]; });
  });
  var fotos = {};
  if (doc.fotos && typeof doc.fotos === 'object') Object.keys(doc.fotos).forEach(function(id){
    var f = doc.fotos[id];
    if (f && typeof f.datos === 'string' && /^image\/(jpeg|png|webp|gif)$/.test(f.type) && /^[A-Za-z0-9_-]{1,128}$/.test(id)) fotos[id] = f;
  });
  return { cols: cols, fotos: fotos, exportado: typeof doc.exportado === 'string' ? doc.exportado : null };
}
function leerArchivo(file){
  return new Promise(function(resolve, reject){
    var fr = new FileReader();
    fr.onload = function(){ resolve(String(fr.result || '')); };
    fr.onerror = function(){ reject(err('lectura', 'no se pudo leer el archivo')); };
    fr.readAsText(file);
  });
}
/* resumen de un archivo antes de restaurarlo, para confirmar con conocimiento de causa */
function inspeccionarRespaldo(file){
  return leerArchivo(file).then(function(texto){
    var doc; try { doc = JSON.parse(texto); } catch (e) { throw err('formato', 'el archivo no es un JSON válido'); }
    var v = validarRespaldo(doc), n = {};
    COLECCIONES.forEach(function(c){ n[c] = Object.keys(v.cols[c]).length; }); n.fotos = Object.keys(v.fotos).length;
    return { exportado: v.exportado, resumen: n, _v: v };
  });
}
/* restaurar reemplaza TODO lo guardado por el contenido del archivo, en una sola transacción */
function restaurar(v){
  var blobs = {};
  Object.keys(v.fotos).forEach(function(id){ try { blobs[id] = base64ABlob(v.fotos[id].datos, v.fotos[id].type); } catch (e) {} });
  return tx(['docs', 'fotos', 'meta'], 'readwrite', function(t){
    var d = t.objectStore('docs'), f = t.objectStore('fotos'), m = t.objectStore('meta');
    d.clear(); f.clear();
    COLECCIONES.forEach(function(c){ Object.keys(v.cols[c]).forEach(function(id){ d.put({ col: c, id: id, data: v.cols[c][id] }); }); });
    Object.keys(blobs).forEach(function(id){ f.put({ id: id, type: v.fotos[id].type, blob: blobs[id] }); });
    m.put({ k: 'ultimoRespaldo', v: v.exportado || new Date().toISOString() });
    m.put({ k: 'cambiosDesdeRespaldo', v: false });
    m.put({ k: 'restauradoEn', v: new Date().toISOString() });
  });
}
function infoRespaldo(){
  var ult = st.meta.ultimoRespaldo || null, cambios = st.meta.cambiosDesdeRespaldo === true, dias = null;
  if (ult) { var t = Date.parse(ult); if (!isNaN(t)) dias = Math.floor((Date.now() - t) / 86400000); }
  var vacio = COLECCIONES.every(function(c){ return !Object.keys(st.cols[c]).length; });
  return { ultimo: ult, diasDesde: dias, cambios: cambios, vacio: vacio, recomendar: !vacio && cambios && (dias == null || dias >= DIAS_RECORDATORIO), conteo: contar() };
}
/* entregar el archivo: hoja de compartir del sistema (iOS la ofrece para guardar en Archivos) o descarga */
function entregar(blob, nombre){
  var file = null;
  try { file = new File([blob], nombre, { type: 'application/json' }); } catch (e) {}
  if (file && navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
    return navigator.share({ files: [file], title: 'Respaldo de Mis rutinas' }).then(function(){ return 'compartido'; }, function(e){ if (e && e.name === 'AbortError') return 'cancelado'; throw e; });
  }
  var url = URL.createObjectURL(blob), a = document.createElement('a');
  a.href = url; a.download = nombre; a.rel = 'noopener'; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(function(){ URL.revokeObjectURL(url); }, 2000);
  return Promise.resolve('descargado');
}

function abrir(){
  if (st.abriendo) return st.abriendo;
  st.abriendo = abrirIdb().then(function(d){ st.idb = d; return cargar(); }).then(function(){ return { db: db, assets: assets }; });
  st.abriendo.catch(function(){ st.abriendo = null; });
  return st.abriendo;
}
function borrarTodo(){
  COLECCIONES.forEach(function(c){ st.cols[c] = {}; });
  Object.keys(st.urls).forEach(function(id){ try { URL.revokeObjectURL(st.urls[id]); } catch (e) {} });
  st.fotos = {}; st.urls = {}; st.meta = {};
  return tx(['docs', 'fotos', 'meta'], 'readwrite', function(t){ t.objectStore('docs').clear(); t.objectStore('fotos').clear(); t.objectStore('meta').clear(); });
}

window.RutinasRuntime = {
  version: VERSION,
  abrir: abrir,
  fotoUrl: fotoUrl,
  respaldo: { crear: crearRespaldo, entregar: entregar, hecho: respaldoHecho, inspeccionar: inspeccionarRespaldo, restaurar: function(insp){ return restaurar(insp._v); }, info: infoRespaldo },
  _pruebas: { borrarTodo: borrarTodo, estado: st, validar: validarRespaldo, COLECCIONES: COLECCIONES }
};
})();
