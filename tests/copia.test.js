/* Pruebas de la copia automática en GitHub (copia.js) contra un GitHub simulado. node tests/copia.test.js */
'use strict';
const assert = require('assert');
const path = require('path');
const C = require(path.join(__dirname, '..', 'copia.js'));
const { GitHubFalso, shaBlob } = require('./github-falso.js');
let pasadas = 0;
async function prueba(nombre, fn){ try { await fn(); pasadas++; console.log('OK    ' + nombre); } catch (e) { console.log('FALLO ' + nombre + ': ' + (e && (e.stack || e.message || JSON.stringify(e)))); process.exitCode = 1; } }
const esperar = ms => new Promise(r => setTimeout(r, ms));
const BUENA = 'github_pat_buena';
const cfg = (gh, token = BUENA) => ({ repo: gh.repo, token, rama: 'main' });
const datos = () => ({
  dias: {
    '2026-11-09': { fecha: '2026-11-09', name: 'Pierna A', items: [{ ex: 'sentadilla', kg: '48,6', hr: '12,12,10,10' }] },
    '2026-11-15': { name: 'Torso B', fecha: '2026-11-15', items: [{ ex: 'inclinado', kg: '35', hr: '10,10,9' }] }
  },
  pesos: { '2026-11-09': { fecha: '2026-11-09', kg: 72.4 } },
  ciclo: { principal: { orden: ['pa', 'tb', 'pb', 'ta'], dias: { 4: [0, 3, 4, 6], 2: [0, 3] } } },
  perfil: {}, semanas: {}, diasTipo: {}, medidas: {}, ejercicios: {}, migracion: {}
});

(async () => {
  await prueba('el texto de un documento no depende del orden de sus claves', () => {
    const a = C.texto({ b: 1, a: { d: [3, { z: 1, y: 2 }], c: 'x' }, u: undefined });
    const b = C.texto({ a: { c: 'x', d: [3, { y: 2, z: 1 }] }, b: 1 });
    assert.strictEqual(a, b);
    assert.ok(a.endsWith('}\n') && a.indexOf('  "a": {') > 0, 'dos espacios y salto de línea final');
    assert.ok(a.indexOf('"u"') < 0, 'lo indefinido no aparece');
  });

  await prueba('nombres de archivo seguros para cualquier id', () => {
    assert.strictEqual(C.nombreDe('2026-11-15'), '2026-11-15.json');
    assert.strictEqual(C.nombreDe('t_torso_a'), 't_torso_a.json');
    assert.strictEqual(C.nombreDe('a/b'), 'a%2Fb.json');
    assert.strictEqual(C.nombreDe('..'), '%2E%2E.json');
    assert.strictEqual(C.nombreDe('ñ (1)'), '%C3%B1%20%281%29.json');
    assert.strictEqual(C.nombreDe('💪'), '%F0%9F%92%AA.json');
  });

  await prueba('un archivo por documento, dentro de datos/', () => {
    const a = C.archivos(datos());
    assert.deepStrictEqual(Object.keys(a), ['datos/ciclo/principal.json', 'datos/dias/2026-11-09.json', 'datos/dias/2026-11-15.json', 'datos/pesos/2026-11-09.json']);
    assert.deepStrictEqual(JSON.parse(a['datos/dias/2026-11-15.json']), datos().dias['2026-11-15']);
    assert.deepStrictEqual(C.archivos({ dias: { x: null, y: [1], z: 'texto' } }), {}, 'lo que no es un documento no se copia');
  });

  await prueba('el sha de un blob coincide con el de git', async () => {
    assert.strictEqual(await C.shaBlob('hello', crypto.subtle), 'b6fc4c620b67d95f953a5c1c1230aaab5db5a1b0');
    assert.strictEqual(await C.shaBlob('ñandú\n', crypto.subtle), '9d14c190d1959b13bb88fb09dd72f184e09e0ce3');
    const t = C.texto(datos().dias['2026-11-15']);
    assert.strictEqual(await C.shaBlob(t, crypto.subtle), shaBlob(t));
  });

  await prueba('cambios: nuevo, distinto, igual y borrado; lo de fuera de datos/ no cuenta', () => {
    const loc = { 'datos/a.json': 'A', 'datos/b.json': 'B2', 'datos/c.json': 'C' };
    const shas = { 'datos/a.json': '1', 'datos/b.json': '2b', 'datos/c.json': '3' };
    const rem = C.remotosDe({ tree: [
      { path: 'README.md', type: 'blob', sha: 'r' }, { path: 'analisis/n.md', type: 'blob', sha: 'n' }, { path: 'datos', type: 'tree', sha: 't' },
      { path: 'datos/a.json', type: 'blob', sha: '1' }, { path: 'datos/b.json', type: 'blob', sha: '2' }, { path: 'datos/viejo.json', type: 'blob', sha: '9' }
    ] });
    assert.deepStrictEqual(Object.keys(rem), ['datos/a.json', 'datos/b.json', 'datos/viejo.json']);
    const cs = C.cambios(loc, shas, rem);
    assert.deepStrictEqual(cs.map(c => c.path + ':' + (c.sha === null ? 'borra' : c.content)), ['datos/b.json:B2', 'datos/c.json:C', 'datos/viejo.json:borra']);
    assert.ok(cs.every(c => c.mode === '100644' && c.type === 'blob'));
  });

  await prueba('mensajes de commit cortos y con la lista completa', () => {
    const e = (p, borra) => borra ? { path: 'datos/' + p + '.json', sha: null } : { path: 'datos/' + p + '.json', content: 'x' };
    assert.strictEqual(C.mensaje([e('dias/2026-11-15')]), 'Copia: dias/2026-11-15');
    assert.strictEqual(C.mensaje([e('dias/2026-11-14', true)]), 'Copia: borra dias/2026-11-14');
    assert.strictEqual(C.mensaje([e('dias/2026-11-15'), e('pesos/2026-11-16')]), 'Copia: 2 cambios (dias/2026-11-15, pesos/2026-11-16)\n\n+ dias/2026-11-15\n+ pesos/2026-11-16');
    const muchos = C.mensaje(Array.from({ length: 30 }, (_, i) => e('dias/2026-10-' + String(i + 1).padStart(2, '0'))));
    assert.ok(muchos.startsWith('Copia: 30 cambios\n\n+ dias/2026-10-01\n') && muchos.split('\n').length === 32, muchos.split('\n')[0]);
  });

  await prueba('repositorio escrito de distintas formas', () => {
    assert.strictEqual(C.limpiarRepo(' https://github.com/syepesgaviria/mis-rutinas-datos.git/ '), 'syepesgaviria/mis-rutinas-datos');
    assert.strictEqual(C.limpiarRepo('github.com/syepesgaviria/mis-rutinas-datos'), 'syepesgaviria/mis-rutinas-datos');
    assert.ok(C.repoValido('syepesgaviria/mis-rutinas-datos'));
    for (const malo of ['', 'solo-nombre', 'a/b/c', '-a/b', 'a/..', 'a b/c']) assert.ok(!C.repoValido(malo), malo);
  });

  await prueba('repositorio vacío: primer commit con el README y luego los datos', async () => {
    const gh = new GitHubFalso();
    const r = await C.sincronizar(cfg(gh), datos(), { fetch: gh.fetch() });
    const f = gh.archivos();
    assert.ok(f['README.md'] && f['README.md'].startsWith('# Mis rutinas: datos'));
    assert.deepStrictEqual(Object.keys(f).filter(p => p.startsWith('datos/')).sort(), Object.keys(C.archivos(datos())));
    assert.deepStrictEqual(JSON.parse(f['datos/ciclo/principal.json']), datos().ciclo.principal);
    assert.strictEqual(r.cambios, 4); assert.strictEqual(r.archivos, 4); assert.strictEqual(r.commit, gh.cabeza());
    assert.deepStrictEqual(gh.historial().map(h => h.mensaje.split('\n')[0]), ['Copia: 4 cambios', 'Mis rutinas: repositorio de datos']);
    assert.deepStrictEqual(gh.cabecerasMalas, [], 'solo cabeceras que GitHub acepta desde el navegador');
  });

  await prueba('repositorio vacío que responde 404 al pedir la rama: también crea el primer commit', async () => {
    const gh = new GitHubFalso({ vacioCon404: true });
    const r = await C.sincronizar(cfg(gh), datos(), { fetch: gh.fetch() });
    assert.ok(gh.archivos()['README.md'] && r.cambios === 4 && r.commit === gh.cabeza());
  });

  await prueba('rama que no existe en un repositorio con commits: error claro, sin tocar nada', async () => {
    const gh = new GitHubFalso({ conReadme: true }), n = gh.historial().length;
    await assert.rejects(C.sincronizar(Object.assign(cfg(gh), { rama: 'otra' }), datos(), { fetch: gh.fetch() }), e => e.code === 'no-existe' && /rama otra/.test(e.message));
    assert.strictEqual(gh.historial().length, n);
  });

  await prueba('sin cambios no hay commit; un cambio sube solo ese archivo; un borrado lo quita', async () => {
    const gh = new GitHubFalso({ conReadme: true }), d = datos();
    let r = await C.sincronizar(cfg(gh), d, { fetch: gh.fetch() });
    const tras1 = gh.historial().length;
    r = await C.sincronizar(cfg(gh), d, { fetch: gh.fetch() });
    assert.strictEqual(r.cambios, 0); assert.strictEqual(gh.historial().length, tras1, 'sin commit nuevo');
    d.dias['2026-11-15'].items[0].hr = '10,10,10';
    r = await C.sincronizar(cfg(gh), d, { fetch: gh.fetch() });
    assert.strictEqual(r.cambios, 1);
    assert.strictEqual(gh.historial()[0].mensaje, 'Copia: dias/2026-11-15');
    assert.strictEqual(JSON.parse(gh.archivos()['datos/dias/2026-11-15.json']).items[0].hr, '10,10,10');
    delete d.pesos['2026-11-09'];
    r = await C.sincronizar(cfg(gh), d, { fetch: gh.fetch() });
    assert.strictEqual(gh.historial()[0].mensaje, 'Copia: borra pesos/2026-11-09');
    assert.ok(!('datos/pesos/2026-11-09.json' in gh.archivos()) && 'README.md' in gh.archivos(), 'se borra solo eso; el README sigue');
  });

  await prueba('con la caché de la copia anterior no vuelve a leer el árbol', async () => {
    const gh = new GitHubFalso({ conReadme: true }), d = datos();
    const r1 = await C.sincronizar(cfg(gh), d, { fetch: gh.fetch() });
    gh.peticiones = [];
    d.pesos['2026-11-16'] = { fecha: '2026-11-16', kg: 72.1 };
    const r2 = await C.sincronizar(cfg(gh), d, { fetch: gh.fetch(), cache: r1 });
    assert.deepStrictEqual(gh.peticiones.map(p => p.metodo + ' ' + p.ruta.split('/').slice(4, 6).join('/')), ['GET git/ref', 'POST git/trees', 'POST git/commits', 'PATCH git/refs']);
    assert.ok(gh.peticiones[0].query.startsWith('?t='), 'la referencia se pide sin caché del navegador');
    assert.strictEqual(r2.cambios, 1);
  });

  await prueba('lo que alguien más agrega fuera de datos/ se conserva, y la caché vieja no estorba', async () => {
    const gh = new GitHubFalso({ conReadme: true }), d = datos();
    const r1 = await C.sincronizar(cfg(gh), d, { fetch: gh.fetch() });
    gh.commitDirecto({ 'analisis/2026-11-15.md': '# Semana\n' }, 'Análisis de la semana');
    d.dias['2026-11-15'].nota = 'pesado';
    await C.sincronizar(cfg(gh), d, { fetch: gh.fetch(), cache: r1 });
    const f = gh.archivos();
    assert.strictEqual(f['analisis/2026-11-15.md'], '# Semana\n');
    assert.strictEqual(JSON.parse(f['datos/dias/2026-11-15.json']).nota, 'pesado');
  });

  await prueba('si la rama se mueve en medio de la copia, reintenta y no pierde nada', async () => {
    const gh = new GitHubFalso({ conReadme: true }), d = datos();
    await C.sincronizar(cfg(gh), d, { fetch: gh.fetch() });
    gh.fallos.push({ metodo: 'PATCH', ruta: /git\/refs/, antes: () => gh.commitDirecto({ 'notas.md': 'hola\n' }), estado: 422, cuerpo: { message: 'Update is not a fast forward' } });
    d.pesos['2026-11-16'] = { fecha: '2026-11-16', kg: 72 };
    const r = await C.sincronizar(cfg(gh), d, { fetch: gh.fetch() });
    const f = gh.archivos();
    assert.ok(f['notas.md'] && f['datos/pesos/2026-11-16.json'], 'quedan los dos cambios');
    assert.strictEqual(r.commit, gh.cabeza());
  });

  await prueba('errores con su código: llave mala, sin permiso, sin acceso, sin red, GitHub caído', async () => {
    const gh = new GitHubFalso({ conReadme: true, llaves: { [BUENA]: 'escribir', 'github_pat_leer': 'leer', 'github_pat_otro': 'sin-acceso' } });
    const codigo = p => p.then(() => 'sin error', e => e.code);
    assert.strictEqual(await codigo(C.sincronizar(cfg(gh, 'github_pat_mala'), datos(), { fetch: gh.fetch() })), 'llave');
    assert.strictEqual(await codigo(C.sincronizar(cfg(gh, 'github_pat_leer'), datos(), { fetch: gh.fetch() })), 'permiso');
    assert.strictEqual(await codigo(C.sincronizar(cfg(gh, 'github_pat_otro'), datos(), { fetch: gh.fetch() })), 'no-existe');
    gh.redCaida = true;
    assert.strictEqual(await codigo(C.sincronizar(cfg(gh), datos(), { fetch: gh.fetch() })), 'red');
    gh.redCaida = false;
    gh.fallos.push({ metodo: 'GET', ruta: /git\/ref\//, estado: 502, cuerpo: { message: 'Server Error' } });
    assert.strictEqual(await codigo(C.sincronizar(cfg(gh), datos(), { fetch: gh.fetch() })), 'github');
    gh.fallos.push({ metodo: 'GET', ruta: /git\/ref\//, estado: 403, cuerpo: { message: 'API rate limit exceeded for user' } });
    assert.strictEqual(await codigo(C.sincronizar(cfg(gh), datos(), { fetch: gh.fetch() })), 'limite');
    assert.strictEqual(await codigo(C.sincronizar(cfg(gh), datos(), { fetch: gh.fetch() })), 'sin error');
  });

  await prueba('revisar el repositorio: rechaza uno público y devuelve la rama principal', async () => {
    const pub = new GitHubFalso({ privado: false });
    await assert.rejects(C.revisarRepo(cfg(pub), { fetch: pub.fetch() }), e => e.code === 'publico');
    const otra = new GitHubFalso({ rama: 'datos' });
    assert.deepStrictEqual(await C.revisarRepo(cfg(otra), { fetch: otra.fetch() }), { rama: 'datos' });
  });

  /* motor con un runtime de mentiras: colecciones en memoria, avisos de cambio y meta local */
  function rtFalso(){
    const cols = datos(), meta = {}, oyentes = [];
    return {
      cols, meta,
      datos: { instantanea: () => JSON.parse(JSON.stringify(cols)), alCambiar: f => { oyentes.push(f); return () => {}; } },
      cambiar(fn){ fn(cols); oyentes.forEach(f => f()); }
    };
  }
  function conMeta(rt){ rt.meta = { get: k => rt._m[k] === undefined ? undefined : JSON.parse(JSON.stringify(rt._m[k])), set: (k, v) => { rt._m[k] = v; return Promise.resolve(); } }; rt._m = {}; return rt; }

  await prueba('motor: conectar valida, guarda la llave solo si la primera copia sale bien', async () => {
    const gh = new GitHubFalso(), rt = conMeta(rtFalso());
    const m = C.motor(rt, { fetch: gh.fetch(), espera: 30, esperaInicio: 0 });
    m.iniciar();
    await assert.rejects(m.conectar(gh.repo, 'github_pat_mala'), e => e.code === 'llave');
    assert.strictEqual(m.estado().activa, false); assert.strictEqual(rt._m.copiaGithub, undefined);
    await assert.rejects(m.conectar('no es un repo', BUENA), e => e.code === 'repo');
    const r = await m.conectar('https://github.com/' + gh.repo, BUENA);
    assert.strictEqual(r.archivos, 4);
    const e = m.estado();
    assert.ok(e.activa && e.repo === gh.repo && e.rama === 'main' && e.llave === 'uena' && e.ok && !e.error && e.archivos === 4, JSON.stringify(e));
    assert.strictEqual(rt._m.copiaGithub.token, BUENA);
  });

  await prueba('motor: un cambio sube solo al rato, y varios seguidos van en un solo commit', async () => {
    const gh = new GitHubFalso(), rt = conMeta(rtFalso());
    const m = C.motor(rt, { fetch: gh.fetch(), espera: 60, esperaInicio: 0 });
    m.iniciar(); await m.conectar(gh.repo, BUENA);
    const antes = gh.historial().length;
    rt.cambiar(c => { c.pesos['2026-11-16'] = { fecha: '2026-11-16', kg: 72 }; });
    await esperar(20);
    rt.cambiar(c => { c.pesos['2026-11-18'] = { fecha: '2026-11-18', kg: 71.8 }; });
    assert.strictEqual(m.estado().pendiente, true);
    await esperar(150);
    assert.strictEqual(gh.historial().length, antes + 1, 'un solo commit');
    assert.strictEqual(gh.historial()[0].mensaje.split('\n')[0], 'Copia: 2 cambios (pesos/2026-11-16, pesos/2026-11-18)');
    assert.strictEqual(m.estado().pendiente, false);
  });

  await prueba('motor: sin red guarda el error y reintenta solo; con la llave mala no insiste', async () => {
    const gh = new GitHubFalso(), rt = conMeta(rtFalso());
    const m = C.motor(rt, { fetch: gh.fetch(), espera: 20, esperaInicio: 0, reintentos: [60] });
    m.iniciar(); await m.conectar(gh.repo, BUENA);
    gh.redCaida = true;
    rt.cambiar(c => { c.pesos['2026-11-16'] = { fecha: '2026-11-16', kg: 72 }; });
    await esperar(50);
    assert.strictEqual(m.estado().error && m.estado().error.code, 'red');
    gh.redCaida = false;
    await esperar(120);
    assert.ok(!m.estado().error && 'datos/pesos/2026-11-16.json' in gh.archivos(), 'el reintento lo subió');
    delete gh.llaves[BUENA];
    rt.cambiar(c => { c.pesos['2026-11-17'] = { fecha: '2026-11-17', kg: 72 }; });
    await esperar(60);
    assert.strictEqual(m.estado().error.code, 'llave');
    const n = gh.peticiones.length;
    await esperar(150);
    assert.strictEqual(gh.peticiones.length, n, 'no reintenta con una llave que no sirve');
  });

  await prueba('motor: al iniciar con la llave guardada sube lo que falte; desconectar la borra', async () => {
    const gh = new GitHubFalso(), rt = conMeta(rtFalso());
    const m1 = C.motor(rt, { fetch: gh.fetch(), espera: 20, esperaInicio: 0 });
    m1.iniciar(); await m1.conectar(gh.repo, BUENA);
    gh.commitDirecto({ 'datos/dias/2026-11-09.json': null }, 'borrado por error');
    const m2 = C.motor(rt, { fetch: gh.fetch(), espera: 20, esperaInicio: 10 });
    m2.iniciar();
    await esperar(80);
    assert.ok('datos/dias/2026-11-09.json' in gh.archivos(), 'al abrir, la copia vuelve a quedar igual a la app');
    await m2.desconectar();
    assert.strictEqual(m2.estado().activa, false); assert.strictEqual(rt._m.copiaGithub, null);
    const n = gh.historial().length;
    rt.cambiar(c => { c.pesos['2026-11-20'] = { fecha: '2026-11-20', kg: 71 }; });
    await esperar(60);
    assert.strictEqual(gh.historial().length, n, 'desconectado no sube nada');
  });

  console.log(pasadas + ' pruebas pasadas');
})();
