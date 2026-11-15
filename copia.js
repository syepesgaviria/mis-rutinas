/* Mis rutinas: copia automática de los datos en un repositorio privado de GitHub.
   Cada documento queda como un archivo JSON, datos/<colección>/<id>.json, con las claves ordenadas: así el historial
   de git muestra solo lo que cambió, y Claude lo lee para analizar los entrenamientos. La app solo escribe dentro de
   datos/ (lo demás del repositorio no se toca) y las fotos no se copian. La llave de acceso se guarda solo en este
   dispositivo, nunca en el archivo de respaldo.
   Partes: funciones puras (archivos, sha de git, cambios, mensaje), la copia contra la API de GitHub (fetch
   inyectable, para probarla sin red) y un motor que programa las copias (tras cada cambio, al abrir la app y al
   volver a ella) y recuerda cómo salió la última. */
(function(){
'use strict';
var CARPETA = 'datos';
var API = 'https://api.github.com';
var ESPERA_CAMBIO = 20000;                        /* ms desde el último cambio hasta subir */
var ESPERA_MAXIMA = 60000;                        /* con cambios seguidos, sube a más tardar al minuto */
var REINTENTOS = [60000, 120000, 300000, 600000]; /* sin conexión o con GitHub caído */
var REVISAR_CADA = 600000;                        /* al volver a la app, revisa si pasaron 10 min */
var REINTENTABLE = { red: true, limite: true, conflicto: true, github: true };
var LEEME = '# Mis rutinas: datos\n\nCopia automática de los datos de la app Mis rutinas. La app escribe solo en `datos/`: un archivo JSON por documento (`datos/<colección>/<id>.json`), con las claves ordenadas. No edites esos archivos a mano, porque la app los reemplaza en la siguiente copia. Las fotos no se copian; van solo en el archivo de respaldo de la app.\n';

function own(o, k){ return Object.prototype.hasOwnProperty.call(o, k); }
function fallo(code, message){ return { code: code, message: message }; }

/* JSON estable: claves ordenadas en todos los niveles y dos espacios, con salto de línea final */
function ordenar(v){
  if (Array.isArray(v)) return v.map(ordenar);
  if (v && typeof v === 'object') { var o = {}; Object.keys(v).sort().forEach(function(k){ if (v[k] !== undefined) o[k] = ordenar(v[k]); }); return o; }
  return v;
}
function texto(doc){ return JSON.stringify(ordenar(doc), null, 2) + '\n'; }

/* nombre de archivo de un documento: letras, números, guion y guion bajo tal cual; lo demás como %XX */
function nombreDe(id){
  return String(id).replace(/[^A-Za-z0-9_-]/gu, function(c){ var e = encodeURIComponent(c); return e.charAt(0) === '%' ? e : '%' + c.charCodeAt(0).toString(16).toUpperCase(); }) + '.json';
}
/* { ruta: texto } con todos los documentos de todas las colecciones */
function archivos(cols){
  var out = {};
  Object.keys(cols || {}).sort().forEach(function(c){
    var o = cols[c] || {};
    Object.keys(o).sort().forEach(function(id){ var d = o[id]; if (d && typeof d === 'object' && !Array.isArray(d)) out[CARPETA + '/' + c + '/' + nombreDe(id)] = texto(d); });
  });
  return out;
}
/* { ruta: sha } de lo que hay en el repositorio dentro de datos/ */
function remotosDe(arbol){
  var o = {};
  ((arbol && arbol.tree) || []).forEach(function(e){ if (e.type === 'blob' && e.path.indexOf(CARPETA + '/') === 0) o[e.path] = e.sha; });
  return o;
}
/* entradas del árbol nuevo: lo nuevo o distinto con su contenido, y lo que ya no existe con sha null (se borra) */
function cambios(locales, shas, remotos){
  var out = [];
  Object.keys(locales).sort().forEach(function(r){ if (remotos[r] !== shas[r]) out.push({ path: r, mode: '100644', type: 'blob', content: locales[r] }); });
  Object.keys(remotos).sort().forEach(function(r){ if (!own(locales, r)) out.push({ path: r, mode: '100644', type: 'blob', sha: null }); });
  return out;
}
/* mensaje del commit: título corto con lo que cambió y, si son varios, la lista completa debajo */
function mensaje(cs){
  var corto = function(c){ return c.path.slice(CARPETA.length + 1).replace(/\.json$/, ''); };
  var lista = cs.map(function(c){ return (c.sha === null ? '- ' : '+ ') + corto(c); });
  if (cs.length === 1) return 'Copia: ' + (cs[0].sha === null ? 'borra ' : '') + corto(cs[0]);
  var titulo = 'Copia: ' + cs.length + ' cambios', nombres = cs.map(corto).join(', ');
  if (titulo.length + nombres.length + 3 <= 72) titulo += ' (' + nombres + ')';
  return titulo + '\n\n' + lista.join('\n');
}
/* sha de un blob de git: sha1 de «blob <bytes>\0<contenido>» */
function utf8(s){ return new TextEncoder().encode(s); }
function hexDe(buf){ var a = new Uint8Array(buf), s = ''; for (var i = 0; i < a.length; i++) s += (a[i] < 16 ? '0' : '') + a[i].toString(16); return s; }
function shaBlob(s, sutil){
  var cuerpo = utf8(s), cab = utf8('blob ' + cuerpo.length + '\0'), todo = new Uint8Array(cab.length + cuerpo.length);
  todo.set(cab, 0); todo.set(cuerpo, cab.length);
  return sutil.digest('SHA-1', todo).then(hexDe);
}
function base64(s){
  var b = utf8(s), bin = '';
  for (var i = 0; i < b.length; i += 0x8000) bin += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000));
  return btoa(bin);
}
function repoValido(r){ return /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,38})\/[A-Za-z0-9._-]{1,100}$/.test(String(r || '')) && !/\/\.\.?$/.test(String(r)); }
function ramaValida(r){ return /^[A-Za-z0-9._\/-]{1,200}$/.test(String(r || '')) && String(r).indexOf('..') < 0; }
/* repositorio escrito de cualquier forma razonable: usuario/nombre, con o sin https://github.com/ y .git */
function limpiarRepo(r){ return String(r || '').trim().replace(/^https?:\/\/(www\.)?github\.com\//i, '').replace(/^github\.com\//i, '').replace(/\/+$/, '').replace(/\.git$/i, ''); }

/* respuesta de error de GitHub → código y explicación para la pantalla */
function errorDe(estado, cuerpo){
  var m = cuerpo && cuerpo.message ? String(cuerpo.message) : '';
  if (estado === 401) return fallo('llave', 'GitHub no reconoce la llave: puede estar mal copiada, vencida o borrada');
  if (estado === 429 || (estado === 403 && /rate limit/i.test(m))) return fallo('limite', 'GitHub pidió esperar un poco antes de seguir');
  if (estado === 403) return fallo('permiso', 'la llave no tiene permiso para escribir en el repositorio (en GitHub, Contents debe estar en «Read and write»)');
  if (estado === 404) return fallo('no-existe', 'no se encontró el repositorio, o la llave no tiene acceso a él');
  if (estado === 409 && /empty/i.test(m)) return fallo('vacio', 'el repositorio está vacío');
  if (estado === 409 || estado === 422) return fallo('conflicto', 'el repositorio cambió mientras se subía la copia' + (m ? ' (' + m + ')' : ''));
  return fallo('github', 'GitHub respondió ' + estado + (m ? ': ' + m : ''));
}
/* petición a la API: solo Authorization, Accept y Content-Type, que GitHub acepta desde el navegador (CORS) */
function cliente(token, f){
  return function(metodo, ruta, cuerpo){
    var h = { 'Accept': 'application/vnd.github+json', 'Authorization': 'Bearer ' + token }, op = { method: metodo, headers: h };
    if (cuerpo !== undefined) { h['Content-Type'] = 'application/json'; op.body = JSON.stringify(cuerpo); }
    var p;
    try { p = f(API + ruta, op); } catch (e) { return Promise.reject(fallo('red', 'no hubo conexión con GitHub')); }
    return Promise.resolve(p).then(function(r){
      return r.text().then(function(t){ var j = null; try { j = t ? JSON.parse(t) : null; } catch (e) {} if (!r.ok) throw errorDe(r.status, j); return j; });
    }).catch(function(e){ throw e && e.code ? e : fallo('red', 'no hubo conexión con GitHub'); });
  };
}
function entorno(op){
  var f = op.fetch || (typeof fetch === 'function' ? fetch : null), c = op.subtle || (typeof crypto !== 'undefined' && crypto.subtle ? crypto.subtle : null);
  if (!f) throw fallo('red', 'este navegador no puede conectarse con GitHub');
  if (!c) throw fallo('github', 'este navegador no puede calcular las huellas de los archivos');
  return { pedir: cliente(op.token, function(u, o){ return f(u, o); }), sutil: c };
}

/* el repositorio existe, la llave lo ve y es privado; devuelve su rama principal */
function revisarRepo(cfg, op){
  var e = entorno({ fetch: op && op.fetch, subtle: op && op.subtle, token: cfg.token });
  return e.pedir('GET', '/repos/' + cfg.repo).then(function(r){
    if (!r || r.private !== true) throw fallo('publico', 'el repositorio es público: cualquiera vería tus datos. Hazlo privado en GitHub (Settings, Change visibility) o crea uno privado');
    var rama = r.default_branch || 'main';
    if (!ramaValida(rama)) throw fallo('github', 'la rama principal del repositorio tiene un nombre que la app no maneja');
    return { rama: rama };
  });
}

/* una copia: compara los archivos de la app con los de la rama y, si algo cambió, hace un commit con solo eso.
   cache: lo que dejó la copia anterior ({ commit, arbol, remotos }); si la rama sigue en ese commit no hace falta
   volver a leer el árbol. Devuelve el nuevo estado y cuántos archivos cambiaron. */
function sincronizar(cfg, cols, op){
  op = op || {};
  var e;
  try { e = entorno({ fetch: op.fetch, subtle: op.subtle, token: cfg.token }); } catch (x) { return Promise.reject(x); }
  if (!repoValido(cfg.repo) || !ramaValida(cfg.rama || 'main')) return Promise.reject(fallo('no-existe', 'el nombre del repositorio no es válido'));
  var pedir = e.pedir, repo = '/repos/' + cfg.repo, rama = cfg.rama || 'main', locales = archivos(cols), rutas = Object.keys(locales);
  return Promise.all(rutas.map(function(r){ return shaBlob(locales[r], e.sutil); })).then(function(lista){
    var shas = {}; rutas.forEach(function(r, i){ shas[r] = lista[i]; });
    var cache = op.cache || null, iniciado = false;
    function intento(n){
      /* el parámetro t evita que el navegador devuelva una referencia guardada en caché */
      return pedir('GET', repo + '/git/ref/heads/' + rama + '?t=' + Date.now()).catch(function(x){ if (x && x.code === 'no-existe') x.enRama = true; throw x; }).then(function(ref){
        var padre = ref && ref.object && ref.object.sha;
        if (!padre) throw fallo('github', 'GitHub no devolvió la rama ' + rama);
        var listado = cache && cache.commit === padre ? Promise.resolve(cache) : pedir('GET', repo + '/git/commits/' + padre).then(function(c){
          return pedir('GET', repo + '/git/trees/' + c.tree.sha + '?recursive=1').then(function(a){
            if (a.truncated) throw fallo('github', 'el repositorio tiene demasiados archivos para revisarlos de una vez');
            return { commit: padre, arbol: c.tree.sha, remotos: remotosDe(a) };
          });
        });
        return listado.then(function(est){
          var cs = cambios(locales, shas, est.remotos);
          if (!cs.length) return { commit: padre, arbol: est.arbol, remotos: shas, cambios: 0, archivos: rutas.length };
          var arbol;
          return pedir('POST', repo + '/git/trees', { base_tree: est.arbol, tree: cs }).then(function(t){
            arbol = t.sha;
            return pedir('POST', repo + '/git/commits', { message: mensaje(cs), tree: t.sha, parents: [padre] });
          }).then(function(c){
            return pedir('PATCH', repo + '/git/refs/heads/' + rama, { sha: c.sha, force: false }).then(function(){
              return { commit: c.sha, arbol: arbol, remotos: shas, cambios: cs.length, archivos: rutas.length };
            });
          });
        });
      }).catch(function(x){
        /* repositorio vacío (GitHub responde 409, o 404 al pedir la rama): un primer commit con el README, porque la
           API de árboles no funciona sin commits. Si el README ya existe, el repositorio no estaba vacío: falta la rama */
        if (x && (x.code === 'vacio' || x.enRama) && !iniciado) {
          iniciado = true; cache = null;
          return pedir('PUT', repo + '/contents/README.md', { message: 'Mis rutinas: repositorio de datos', content: base64(LEEME) }).then(function(){ return intento(n); }, function(y){
            if (y && y.code === 'conflicto') throw fallo('no-existe', 'el repositorio no tiene la rama ' + rama);
            throw y;
          });
        }
        /* alguien más movió la rama, o el árbol guardado ya no sirve: se vuelve a leer todo, hasta tres veces */
        if (x && x.code === 'conflicto' && n < 3) { cache = null; return intento(n + 1); }
        throw x;
      });
    }
    return intento(1);
  });
}

/* MOTOR: programa las copias y guarda la configuración y el resultado en el meta del runtime (este dispositivo).
   rt: { datos: { instantanea, alCambiar }, meta: { get, set } }. op.alCambiar: avisa a la app para refrescar. */
function motor(rt, op){
  op = op || {};
  var espera = op.espera || ESPERA_CAMBIO, esperaMax = Math.max(espera, op.esperaMaxima || ESPERA_MAXIMA);
  var reintentos = op.reintentos || REINTENTOS, ahora = op.ahora || function(){ return Date.now(); };
  var e = { timer: null, limite: 0, corriendo: null, otraVez: false, sucio: false, cache: null, reintento: 0, ultimoIntento: 0, quitar: null, iniciado: false };
  function cfg(){ var c = rt.meta.get('copiaGithub'); return c && typeof c.token === 'string' && c.token && repoValido(c.repo) ? c : null; }
  function info(){ return rt.meta.get('copiaEstado') || {}; }
  function guardar(cambio){ var i = info(); Object.keys(cambio).forEach(function(k){ i[k] = cambio[k]; }); return Promise.resolve(rt.meta.set('copiaEstado', i)); }
  function avisar(){ if (op.alCambiar) { try { op.alCambiar(); } catch (x) {} } }
  function programar(ms){
    if (!cfg()) return;
    var t = ahora(), cuando = t + ms;
    if (e.timer && e.limite && cuando > e.limite) cuando = e.limite;
    if (!e.timer) e.limite = t + Math.max(ms, esperaMax);
    clearTimeout(e.timer);
    e.timer = setTimeout(function(){ e.timer = null; e.limite = 0; correr().catch(function(){}); }, Math.max(0, cuando - t));
  }
  /* una sola copia a la vez; lo que cambie mientras tanto sube en la siguiente */
  function envolver(p){
    e.corriendo = p.then(function(r){ fin(false); return r; }, function(x){ fin(true); throw x; });
    avisar();
    return e.corriendo;
  }
  function fin(fallo){
    e.corriendo = null;
    var otra = e.otraVez; e.otraVez = false;
    /* tras un fallo, el reintento (si aplica) ya quedó programado */
    if (!fallo && (otra || e.sucio)) programar(2000);
    avisar();
  }
  function correr(){
    var c = cfg();
    if (!c) return Promise.resolve(null);
    if (e.corriendo) { e.otraVez = true; return e.corriendo; }
    clearTimeout(e.timer); e.timer = null; e.limite = 0;
    e.sucio = false; e.ultimoIntento = ahora();
    return envolver(sincronizar(c, rt.datos.instantanea(), { cache: e.cache, fetch: op.fetch, subtle: op.subtle }).then(function(r){
      e.cache = { commit: r.commit, arbol: r.arbol, remotos: r.remotos }; e.reintento = 0;
      return guardar({ ok: new Date(ahora()).toISOString(), commit: r.commit, archivos: r.archivos, cambios: r.cambios, error: null }).then(function(){ return r; });
    }, function(x){
      e.cache = null; e.sucio = true;
      var err = { code: x && x.code || 'github', message: x && x.message || String(x), cuando: new Date(ahora()).toISOString() };
      return guardar({ error: err }).then(function(){
        if (REINTENTABLE[err.code] && cfg()) programar(reintentos[Math.min(e.reintento++, reintentos.length - 1)]);
        throw x;
      });
    }));
  }
  function alCambio(){ if (!cfg()) return; e.sucio = true; programar(espera); }
  /* al irse a segundo plano se intenta subir lo pendiente enseguida (la app guarda lo último justo antes);
     al volver, se sube lo pendiente o se revisa si hace rato que no se revisa */
  function alVolver(){
    if (!cfg()) return;
    if (typeof document !== 'undefined' && document.visibilityState === 'hidden') { setTimeout(function(){ if (e.sucio || e.timer) correr().catch(function(){}); }, 400); return; }
    if (e.sucio || ahora() - e.ultimoIntento > REVISAR_CADA) programar(1500);
  }
  function alConectar(){ if (e.sucio && cfg()) programar(1000); }
  return {
    iniciar: function(){
      if (e.iniciado) return;
      e.iniciado = true;
      e.quitar = rt.datos.alCambiar(alCambio);
      if (typeof document !== 'undefined' && document.addEventListener) document.addEventListener('visibilitychange', alVolver);
      if (typeof window !== 'undefined' && window.addEventListener) window.addEventListener('online', alConectar);
      if (cfg()) programar(op.esperaInicio != null ? op.esperaInicio : 3000);
    },
    /* revisa el repositorio y sube la primera copia con la llave nueva; solo si todo sale bien queda guardada */
    conectar: function(repo, token){
      repo = limpiarRepo(repo); token = String(token || '').trim();
      if (!repoValido(repo)) return Promise.reject(fallo('repo', 'escribe el repositorio como usuario/nombre'));
      if (!token) return Promise.reject(fallo('llave', 'pega la llave que creaste en GitHub'));
      var antes = e.corriendo ? e.corriendo.catch(function(){}) : Promise.resolve();
      clearTimeout(e.timer); e.timer = null; e.limite = 0;
      var c = { repo: repo, token: token, rama: 'main' };
      return envolver(antes.then(function(){ e.sucio = false; return revisarRepo(c, op); }).then(function(r){
        c.rama = r.rama;
        return sincronizar(c, rt.datos.instantanea(), { fetch: op.fetch, subtle: op.subtle });
      }).then(function(r){
        c.desde = new Date(ahora()).toISOString();
        e.cache = { commit: r.commit, arbol: r.arbol, remotos: r.remotos }; e.reintento = 0; e.ultimoIntento = ahora();
        return Promise.resolve(rt.meta.set('copiaGithub', c)).then(function(){
          return Promise.resolve(rt.meta.set('copiaEstado', { ok: c.desde, commit: r.commit, archivos: r.archivos, cambios: r.cambios, error: null }));
        }).then(function(){ return r; });
      }));
    },
    desconectar: function(){
      clearTimeout(e.timer); e.timer = null; e.limite = 0; e.cache = null; e.sucio = false;
      return Promise.all([rt.meta.set('copiaGithub', null), rt.meta.set('copiaEstado', null)]).then(function(){ avisar(); });
    },
    subirAhora: function(){ return correr(); },
    estado: function(){
      var c = cfg(), i = info();
      if (!c) return { activa: false, corriendo: !!e.corriendo };
      return { activa: true, repo: c.repo, rama: c.rama || 'main', desde: c.desde || null, llave: c.token.slice(-4), corriendo: !!e.corriendo, pendiente: e.sucio || !!e.timer, ok: i.ok || null, error: i.error || null, archivos: i.archivos || 0, commit: i.commit || null };
    }
  };
}

var Copia = { CARPETA: CARPETA, texto: texto, nombreDe: nombreDe, archivos: archivos, remotosDe: remotosDe, cambios: cambios, mensaje: mensaje, shaBlob: shaBlob, base64: base64, repoValido: repoValido, limpiarRepo: limpiarRepo, errorDe: errorDe, revisarRepo: revisarRepo, sincronizar: sincronizar, motor: motor };
if (typeof window !== 'undefined') window.Copia = Copia;
if (typeof module !== 'undefined' && module.exports) module.exports = Copia;
})();
