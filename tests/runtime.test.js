/* Pruebas de la capa de datos local (runtime.js) con una IndexedDB simulada. node tests/runtime.test.js */
'use strict';
const assert = require('assert');
const fs = require('fs');
const path = require('path');
require('fake-indexeddb/auto');
const { Blob, File } = require('buffer');

/* entorno mínimo de navegador */
global.window = global;
global.Blob = Blob; global.File = File;
Object.defineProperty(global, "navigator", { value: {}, configurable: true });
global.document = { createElement: () => ({ click(){}, remove(){} }), body: { appendChild(){} } };
global.URL.createObjectURL = () => 'blob:prueba';
global.URL.revokeObjectURL = () => {};
global.FileReader = class {
  readAsDataURL(b){ b.arrayBuffer().then(a => { this.result = 'data:' + b.type + ';base64,' + Buffer.from(a).toString('base64'); this.onload(); }); }
  readAsText(b){ b.text().then(t => { this.result = t; this.onload(); }); }
};
/* crypto ya existe en Node 22 */
new Function(fs.readFileSync(path.join(__dirname, '..', 'runtime.js'), 'utf8'))();
const rt = window.RutinasRuntime;
const esperar = ms => new Promise(r => setTimeout(r, ms));
let pasadas = 0;
async function prueba(nombre, fn){ try { await fn(); pasadas++; console.log('OK    ' + nombre); } catch (e) { console.log('FALLO ' + nombre + ': ' + (e && e.message)); process.exitCode = 1; } }

(async () => {
  const { db, assets } = await rt.abrir();

  await prueba('set, get y delete persisten y devuelven copias', async () => {
    await db.doc('pesos/2026-01-05').set({ fecha: '2026-01-05', kg: 80 });
    const s = await db.doc('pesos/2026-01-05').get();
    assert.strictEqual(s.exists, true); assert.deepStrictEqual(s.data(), { fecha: '2026-01-05', kg: 80 });
    s.data().kg = 1; assert.strictEqual((await db.doc('pesos/2026-01-05').get()).data().kg, 80);
    await db.doc('pesos/2026-01-05').delete();
    assert.strictEqual((await db.doc('pesos/2026-01-05').get()).exists, false);
  });

  await prueba('onSnapshot emite al suscribirse y en cada cambio, y se puede cancelar', async () => {
    const vistas = [];
    const off = db.collection('diasTipo').onSnapshot(s => vistas.push(s.docs.map(d => d.id)));
    await esperar(5);
    await db.doc('diasTipo/t_a').set({ name: 'A', items: [] });
    await db.doc('diasTipo/t_b').set({ name: 'B', items: [] });
    off();
    await db.doc('diasTipo/t_c').set({ name: 'C', items: [] });
    assert.deepStrictEqual(vistas, [[], ['t_a'], ['t_a', 't_b']]);
    assert.strictEqual(vistas[0] && vistas[0].fromCache, undefined);
  });

  await prueba('where filtra por rango de fecha y get() devuelve la consulta', async () => {
    for (const f of ['2026-01-05', '2026-02-02', '2026-03-02']) await db.doc('dias/' + f).set({ fecha: f, items: [] });
    const q = db.collection('dias').where('fecha', '>=', '2026-01-10').where('fecha', '<=', '2026-02-28');
    const s = await q.get();
    assert.deepStrictEqual(s.docs.map(d => d.id), ['2026-02-02']);
    assert.strictEqual(s.metadata.fromCache, false);
    const todos = await db.collection('dias').get();
    assert.strictEqual(todos.docs.length, 3);
  });

  await prueba('acquire concede el arriendo y lo niega a otro titular mientras dure', async () => {
    const ref = db.doc('migracion/principal');
    assert.strictEqual((await ref.acquire({ holder: 'a', ttlMs: 1000 })).acquired, true);
    assert.strictEqual((await ref.acquire({ holder: 'b', ttlMs: 1000 })).acquired, false);
    assert.strictEqual((await ref.acquire({ holder: 'a', ttlMs: 1000 })).acquired, true);
  });

  await prueba('set rechaza valores que no son objetos y rutas inválidas', async () => {
    await assert.rejects(db.doc('pesos/x').set('texto'), e => e.code === 'invalid_argument');
    assert.throws(() => db.doc('otra/x'), e => e.code === 'invalid_argument');
    assert.throws(() => db.collection('otra'), e => e.code === 'invalid_argument');
  });

  await prueba('upload guarda la foto, valida tipo y tamaño y la expone por URL', async () => {
    const r = await assets.upload(new Blob([Buffer.alloc(100)], { type: 'image/jpeg' }), { type: 'image/jpeg' });
    assert.match(r.id, /^[0-9a-f]{32}$/);
    assert.strictEqual(rt.fotoUrl(r.id), 'blob:prueba');
    assert.strictEqual(rt.fotoUrl('nada'), '');
    await assert.rejects(assets.upload(new Blob(['x'], { type: 'text/plain' }), { type: 'text/plain' }), e => e.code === 'unsupported_type');
    await assert.rejects(assets.upload(new Blob([Buffer.alloc(6 * 1024 * 1024)], { type: 'image/png' }), { type: 'image/png' }), e => e.code === 'too_large');
  });

  await prueba('el respaldo contiene todo y se restaura exactamente', async () => {
    const antes = JSON.stringify(rt._pruebas.estado.cols);
    const r = await rt.respaldo.crear();
    assert.match(r.nombre, /^mis-rutinas-\d{4}-\d{2}-\d{2}\.json$/);
    const texto = await r.blob.text();
    const doc = JSON.parse(texto);
    assert.strictEqual(doc.formato, 'mis-rutinas-respaldo-1');
    assert.strictEqual(Object.keys(doc.fotos).length, 1);
    assert.strictEqual(doc.colecciones.dias['2026-02-02'].fecha, '2026-02-02');
    const insp = await rt.respaldo.inspeccionar(new File([texto], r.nombre, { type: 'application/json' }));
    assert.strictEqual(insp.resumen.dias, 3); assert.strictEqual(insp.resumen.fotos, 1);
    await rt._pruebas.borrarTodo();
    assert.strictEqual(Object.keys(rt._pruebas.estado.cols.dias).length, 0);
    await rt.respaldo.restaurar(insp);
    /* la restauración escribe en IndexedDB; se recarga en memoria como haría la app al reabrirse */
    rt._pruebas.estado.abriendo = null; rt._pruebas.estado.idb.close(); rt._pruebas.estado.idb = null;
    await rt.abrir();
    assert.strictEqual(JSON.stringify(rt._pruebas.estado.cols), antes);
    assert.strictEqual(Object.keys(rt._pruebas.estado.fotos).length, 1);
    const info = rt.respaldo.info();
    assert.strictEqual(info.cambios, false); assert.strictEqual(info.recomendar, false);
  });

  await prueba('un archivo que no es respaldo se rechaza con mensaje claro', async () => {
    await assert.rejects(rt.respaldo.inspeccionar(new File(['{"hola":1}'], 'x.json')), e => e.code === 'formato');
    await assert.rejects(rt.respaldo.inspeccionar(new File(['no json'], 'x.json')), e => e.code === 'formato');
    assert.throws(() => rt._pruebas.validar({ formato: 'mis-rutinas-respaldo-1', colecciones: { dias: [1] } }), e => e.code === 'formato');
  });

  await prueba('el recordatorio de respaldo aparece con cambios y sin respaldo reciente', async () => {
    await db.doc('pesos/2026-05-05').set({ fecha: '2026-05-05', kg: 79 });
    await esperar(5);
    let info = rt.respaldo.info();
    assert.strictEqual(info.cambios, true);
    assert.strictEqual(info.recomendar, false, 'respaldo reciente: todavía no se recomienda');
    rt._pruebas.estado.meta.ultimoRespaldo = new Date(Date.now() - 20 * 86400000).toISOString();
    info = rt.respaldo.info();
    assert.strictEqual(info.recomendar, true);
    assert.strictEqual(info.diasDesde, 20);
    await rt.respaldo.hecho();
    assert.strictEqual(rt.respaldo.info().cambios, false);
  });

  console.log(pasadas + ' pruebas pasadas' + (process.exitCode ? ', con fallos' : ''));
})().catch(e => { console.error(e); process.exit(2); });
