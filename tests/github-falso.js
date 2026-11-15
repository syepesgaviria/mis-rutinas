/* GitHub simulado para las pruebas de la copia automática (copia.js): un repositorio en memoria con blobs, árboles,
   commits y ramas, y las respuestas y errores de la API REST que usa la app. Los sha de los blobs se calculan como en
   git, para que las comparaciones de la app valgan igual que contra GitHub. Sirve para las pruebas unitarias (fetch)
   y para los recorridos con Playwright (manejar). */
'use strict';
const crypto = require('crypto');
const sha1 = b => crypto.createHash('sha1').update(b).digest('hex');
const shaBlob = t => { const b = Buffer.from(t, 'utf8'); return sha1(Buffer.concat([Buffer.from('blob ' + b.length + '\0'), b])); };
/* cabeceras que GitHub deja enviar desde el navegador (CORS), además de las que el navegador siempre permite */
const PERMITIDAS = ['authorization', 'content-type', 'if-match', 'if-modified-since', 'if-none-match', 'if-unmodified-since', 'x-github-otp', 'x-requested-with'];
const SEGURAS = ['accept', 'accept-language', 'content-language'];

class GitHubFalso {
  constructor(op = {}){
    this.dueno = op.dueno || 'syepesgaviria';
    this.nombre = op.nombre || 'mis-rutinas-datos';
    this.privado = op.privado !== false;
    this.rama = op.rama || 'main';
    this.vacioCon404 = !!op.vacioCon404;   /* imita a un GitHub que responde 404 (no 409) al pedir la rama de un repositorio vacío */
    /* llave → 'escribir' | 'leer' | 'sin-acceso'; cualquier otra no existe (401) */
    this.llaves = op.llaves || { 'github_pat_buena': 'escribir' };
    this.blobs = new Map(); this.arboles = new Map(); this.commits = new Map(); this.refs = new Map();
    this.peticiones = []; this.fallos = []; this.redCaida = false; this.cabecerasMalas = [];
    if (op.conReadme) this.commitDirecto({ 'README.md': '# datos\n' }, 'Initial commit');
  }
  get repo(){ return this.dueno + '/' + this.nombre; }
  /* estado del repositorio, para las pruebas */
  cabeza(){ return this.refs.get(this.rama) || null; }
  archivos(){ const h = this.cabeza(); if (!h) return {}; const a = this.arboles.get(this.commits.get(h).arbol), o = {}; for (const [p, s] of Object.entries(a)) o[p] = this.blobs.get(s); return o; }
  historial(){ const out = []; let h = this.cabeza(); while (h) { const c = this.commits.get(h); out.push({ sha: h, mensaje: c.mensaje }); h = c.padres[0]; } return out; }
  /* cambios hechos "desde otro lado", como si alguien editara el repositorio */
  commitDirecto(cambios, mensaje = 'Edición externa'){
    const h = this.cabeza(), base = h ? Object.assign({}, this.arboles.get(this.commits.get(h).arbol)) : {};
    for (const [p, t] of Object.entries(cambios)) { if (t === null) delete base[p]; else base[p] = this.guardarBlob(t); }
    const arbol = this.guardarArbol(base), c = this.guardarCommit(arbol, h ? [h] : [], mensaje);
    this.refs.set(this.rama, c); return c;
  }
  guardarBlob(t){ const s = shaBlob(t); this.blobs.set(s, t); return s; }
  guardarArbol(plano){ const orden = {}; Object.keys(plano).sort().forEach(k => { orden[k] = plano[k]; }); const s = sha1('tree ' + JSON.stringify(orden)); this.arboles.set(s, orden); return s; }
  guardarCommit(arbol, padres, mensaje){ const s = sha1('commit ' + arbol + padres.join(',') + mensaje + Math.random()); this.commits.set(s, { arbol, padres, mensaje }); return s; }
  ancestro(a, b){ /* ¿a es ancestro de b (o igual)? */ const pila = [b], vistos = new Set(); while (pila.length) { const x = pila.pop(); if (x === a) return true; if (vistos.has(x)) continue; vistos.add(x); const c = this.commits.get(x); if (c) pila.push(...c.padres); } return false; }
  listado(arbol){
    const plano = this.arboles.get(arbol), dirs = new Set(), out = [];
    for (const p of Object.keys(plano)) { const partes = p.split('/'); for (let i = 1; i < partes.length; i++) dirs.add(partes.slice(0, i).join('/')); }
    for (const d of dirs) out.push({ path: d, mode: '040000', type: 'tree', sha: sha1('dir ' + arbol + d) });
    for (const [p, s] of Object.entries(plano)) out.push({ path: p, mode: '100644', type: 'blob', sha: s, size: Buffer.byteLength(this.blobs.get(s)) });
    return out.sort((x, y) => x.path < y.path ? -1 : 1);
  }
  /* una petición: devuelve { status, body } o lanza un TypeError si la red está caída */
  manejar(metodo, url, cabeceras = {}, cuerpo = null){
    if (this.redCaida) throw new TypeError('Failed to fetch');
    const u = new URL(url), ruta = u.pathname, h = {};
    for (const [k, v] of Object.entries(cabeceras)) h[k.toLowerCase()] = v;
    this.peticiones.push({ metodo, ruta, query: u.search });
    const malas = Object.keys(h).filter(k => !PERMITIDAS.includes(k) && !SEGURAS.includes(k) && !/^(sec-|user-agent$|origin$|referer$|accept-encoding$|connection$|host$|content-length$|cookie$)/.test(k));
    if (malas.length) this.cabecerasMalas.push(...malas);
    const i = this.fallos.findIndex(f => f.metodo === metodo && f.ruta.test(ruta));
    if (i >= 0) { const f = this.fallos.splice(i, 1)[0]; if (f.antes) f.antes(); if (f.estado) return { status: f.estado, body: f.cuerpo || { message: 'Error simulado' } }; }
    const auth = String(h.authorization || ''), llave = auth.replace(/^(Bearer|token)\s+/i, '');
    const acceso = this.llaves[llave];
    if (!acceso) return { status: 401, body: { message: 'Bad credentials' } };
    const base = '/repos/' + this.repo;
    if (!ruta.startsWith(base + '/') && ruta !== base) return { status: 404, body: { message: 'Not Found' } };
    if (acceso === 'sin-acceso') return { status: 404, body: { message: 'Not Found' } };
    const resto = ruta.slice(base.length), datos = cuerpo ? JSON.parse(cuerpo) : null, escribe = metodo !== 'GET';
    if (escribe && acceso !== 'escribir') return { status: 403, body: { message: 'Resource not accessible by personal access token' } };
    if (metodo === 'GET' && resto === '') return { status: 200, body: { full_name: this.repo, private: this.privado, default_branch: this.rama } };
    let m;
    if (metodo === 'GET' && (m = resto.match(/^\/git\/ref\/heads\/(.+)$/))) {
      if (!this.refs.size) return this.vacioCon404 ? { status: 404, body: { message: 'Not Found' } } : { status: 409, body: { message: 'Git Repository is empty.' } };
      const s = this.refs.get(m[1]); if (!s) return { status: 404, body: { message: 'Not Found' } };
      return { status: 200, body: { ref: 'refs/heads/' + m[1], object: { sha: s, type: 'commit' } } };
    }
    if (metodo === 'GET' && (m = resto.match(/^\/git\/commits\/([0-9a-f]{40})$/))) {
      const c = this.commits.get(m[1]); if (!c) return { status: 404, body: { message: 'Not Found' } };
      return { status: 200, body: { sha: m[1], message: c.mensaje, tree: { sha: c.arbol }, parents: c.padres.map(sha => ({ sha })) } };
    }
    if (metodo === 'GET' && (m = resto.match(/^\/git\/trees\/([0-9a-f]{40})$/))) {
      if (!this.arboles.has(m[1])) return { status: 404, body: { message: 'Not Found' } };
      return { status: 200, body: { sha: m[1], tree: this.listado(m[1]), truncated: false } };
    }
    if (metodo === 'POST' && resto === '/git/trees') {
      if (!this.refs.size) return { status: 409, body: { message: 'Git Repository is empty.' } };
      let plano = {};
      if (datos.base_tree) { if (!this.arboles.has(datos.base_tree)) return { status: 422, body: { message: 'Invalid tree info' } }; plano = Object.assign({}, this.arboles.get(datos.base_tree)); }
      for (const e of datos.tree || []) {
        if (e.content !== undefined && e.sha !== undefined) return { status: 422, body: { message: 'Use either sha or content' } };
        if (e.mode !== '100644' || e.type !== 'blob') return { status: 422, body: { message: 'Invalid tree info' } };
        if (e.content !== undefined) plano[e.path] = this.guardarBlob(e.content);
        else if (e.sha === null) { if (!(e.path in plano)) return { status: 422, body: { message: 'GitRPC::BadObjectState' } }; delete plano[e.path]; }
        else { if (!this.blobs.has(e.sha)) return { status: 422, body: { message: 'Invalid tree info' } }; plano[e.path] = e.sha; }
      }
      const s = this.guardarArbol(plano);
      return { status: 201, body: { sha: s, tree: this.listado(s), truncated: false } };
    }
    if (metodo === 'POST' && resto === '/git/commits') {
      if (!this.arboles.has(datos.tree)) return { status: 422, body: { message: 'Tree SHA does not exist' } };
      if ((datos.parents || []).some(p => !this.commits.has(p))) return { status: 422, body: { message: 'Parent SHA does not exist or is not a commit object' } };
      const s = this.guardarCommit(datos.tree, datos.parents || [], datos.message);
      return { status: 201, body: { sha: s, tree: { sha: datos.tree }, message: datos.message } };
    }
    if (metodo === 'PATCH' && (m = resto.match(/^\/git\/refs\/heads\/(.+)$/))) {
      const actual = this.refs.get(m[1]); if (!actual) return { status: 422, body: { message: 'Reference does not exist' } };
      if (!this.commits.has(datos.sha)) return { status: 422, body: { message: 'Object does not exist' } };
      if (!datos.force && !this.ancestro(actual, datos.sha)) return { status: 422, body: { message: 'Update is not a fast forward' } };
      this.refs.set(m[1], datos.sha);
      return { status: 200, body: { ref: 'refs/heads/' + m[1], object: { sha: datos.sha, type: 'commit' } } };
    }
    if (metodo === 'PUT' && (m = resto.match(/^\/contents\/(.+)$/))) {
      const p = decodeURIComponent(m[1]), texto = Buffer.from(datos.content, 'base64').toString('utf8');
      if (this.refs.size && (p in this.archivos()) && !datos.sha) return { status: 422, body: { message: 'Invalid request.\n\n"sha" wasn\'t supplied.' } };
      const c = this.commitDirecto({ [p]: texto }, datos.message);
      return { status: this.refs.size ? 201 : 201, body: { content: { path: p }, commit: { sha: c } } };
    }
    return { status: 404, body: { message: 'Not Found (simulado: ' + metodo + ' ' + resto + ')' } };
  }
  /* fetch para las pruebas en Node */
  fetch(){
    return (url, op = {}) => new Promise((resolve, reject) => {
      let r;
      try { r = this.manejar(op.method || 'GET', url, op.headers || {}, op.body || null); } catch (e) { reject(e); return; }
      const texto = r.body == null ? '' : JSON.stringify(r.body);
      setTimeout(() => resolve({ ok: r.status >= 200 && r.status < 300, status: r.status, text: () => Promise.resolve(texto) }), 0);
    });
  }
  /* manejador de rutas para Playwright: page.route('https://api.github.com/**', gh.ruta()) */
  ruta(){
    return async route => {
      const req = route.request(), cors = { 'access-control-allow-origin': '*' };
      if (req.method() === 'OPTIONS') {
        return route.fulfill({ status: 204, headers: Object.assign(cors, { 'access-control-allow-headers': PERMITIDAS.join(', '), 'access-control-allow-methods': 'GET, POST, PATCH, PUT, DELETE', 'access-control-max-age': '86400' }) });
      }
      let r;
      try { r = this.manejar(req.method(), req.url(), req.headers(), req.postData()); } catch (e) { return route.abort('internetdisconnected'); }
      return route.fulfill({ status: r.status, headers: cors, contentType: 'application/json; charset=utf-8', body: r.body == null ? '' : JSON.stringify(r.body) });
    };
  }
}
module.exports = { GitHubFalso, shaBlob };
