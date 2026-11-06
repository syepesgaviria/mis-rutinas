/* Pruebas de la lógica del ciclo (ciclo.js). node tests/ciclo.test.js */
'use strict';
const assert = require('assert');
const fs = require('fs');
const path = require('path');
global.window = global;
new Function(fs.readFileSync(path.join(__dirname, '..', 'ciclo.js'), 'utf8'))();
const C = window.Ciclo;
const ORDEN = ['pa', 'tb', 'pb', 'ta'];
let n = 0;
function prueba(nombre, fn){ try { fn(); n++; console.log('OK    ' + nombre); } catch (e) { console.log('FALLO ' + nombre + ': ' + e.message); process.exitCode = 1; } }

prueba('normalizar completa lo que falta y descarta basura', () => {
  const c = C.normalizar({ orden: ['pa', 'pa', 3, 'tb'], dias: { 3: [4, 2, 0, 9], 4: [1, 1] } });
  assert.deepStrictEqual(c.orden, ['pa', 'tb']);
  assert.deepStrictEqual(c.dias[3], [0, 2, 4]);
  assert.deepStrictEqual(c.dias[4], [0, 3, 4, 6], 'un listado con menos días de los que dice cae al valor por defecto');
  assert.deepStrictEqual(C.normalizar(null).orden, []);
  assert.deepStrictEqual(C.diasPara(c, 2), [0, 3]);
});

prueba('la partida es el siguiente al último día hecho del ciclo, aunque no sea el más reciente', () => {
  const h = [
    { fecha: '2026-10-26', tipo: 'pa', hecho: true },
    { fecha: '2026-10-29', tipo: 'tb', hecho: true },
    { fecha: '2026-10-30', tipo: 'pb', hecho: false },
    { fecha: '2026-11-01', tipo: 'ta', hecho: false },
    { fecha: '2026-11-02', tipo: 'cardio_solo', hecho: true }
  ];
  const p = C.partida(ORDEN, h);
  assert.strictEqual(p.idx, 2, 'después de Torso B viene Pierna B');
  assert.deepStrictEqual(p.desde, { fecha: '2026-10-29', tipo: 'tb' });
  assert.deepStrictEqual(C.partida(ORDEN, []), { idx: 0, desde: null });
  assert.strictEqual(C.partida(ORDEN, [{ fecha: '2026-11-01', tipo: 'ta', hecho: true }]).idx, 0, 'tras el último del ciclo vuelve al primero');
});

prueba('armar reparte N pasos en los días elegidos y deja el resto en descanso', () => {
  const a = C.armar(ORDEN, 2, [0, 3, 4, 6]);
  assert.deepStrictEqual(a.dias.map(d => d.accion === 'tipo' ? d.tipo : '-'), ['pb', '-', '-', 'ta', 'pa', '-', 'tb']);
  assert.strictEqual(a.siguiente, 2);
  const b = C.armar(ORDEN, 0, [3, 0]);
  assert.deepStrictEqual(b.dias.filter(d => d.accion === 'tipo').map(d => d.i + ':' + d.tipo), ['0:pa', '3:tb'], 'los días se ordenan antes de asignar');
  const c5 = C.armar(ORDEN, 0, [0, 1, 3, 4, 6]);
  assert.deepStrictEqual(c5.dias.filter(d => d.accion === 'tipo').map(d => d.tipo), ['pa', 'tb', 'pb', 'ta', 'pa'], 'con 5 sesiones el ciclo da la vuelta');
  assert.strictEqual(c5.siguiente, 1);
});

prueba('reorganizar conserva lo hecho, descansa lo pasado y sigue el ciclo en lo elegido', () => {
  /* miércoles: lunes Pierna A hecha, martes Torso B planeado y no hecho (pasado), resto planeado */
  const dias = [
    { i: 0, tipo: 'pa', hecho: true, pasado: true, contenido: true },
    { i: 1, tipo: 'tb', hecho: false, pasado: true, contenido: true },
    { i: 2, tipo: null, hecho: false, pasado: false, contenido: false },
    { i: 3, tipo: 'pb', hecho: false, pasado: false, contenido: true },
    { i: 4, tipo: 'ta', hecho: false, pasado: false, contenido: true },
    { i: 5, tipo: null, hecho: false, pasado: false, contenido: false },
    { i: 6, tipo: null, hecho: false, pasado: false, contenido: false }
  ];
  const r = C.reorganizar(ORDEN, 3, dias, [3, 5]);
  assert.deepStrictEqual(r.dias.map(d => d.accion + (d.tipo ? ':' + d.tipo : '')), ['mantener:pa', 'descanso', 'descanso', 'tipo:tb', 'descanso', 'tipo:pb', 'descanso']);
  assert.deepStrictEqual(r.reemplazados, [1, 3, 4], 'avisa de los días con plan que cambian o se quitan');
  assert.strictEqual(r.siguiente, 3);
});

prueba('reorganizar no marca como reemplazado un día que recibe el mismo tipo que ya tenía', () => {
  const dias = [
    { i: 0, tipo: 'pa', hecho: true, pasado: true, contenido: true },
    { i: 3, tipo: 'tb', hecho: false, pasado: false, contenido: true },
    { i: 4, tipo: 'pb', hecho: false, pasado: false, contenido: true }
  ];
  const r = C.reorganizar(ORDEN, 0, dias, [3, 4]);
  assert.deepStrictEqual(r.dias.filter(d => d.i === 3 || d.i === 4).map(d => d.accion), ['mantener', 'mantener']);
  assert.deepStrictEqual(r.reemplazados, []);
});

prueba('reorganizar con un día hecho a mitad de semana continúa desde ese día', () => {
  const dias = [
    { i: 0, tipo: 'pa', hecho: true, pasado: true, contenido: true },
    { i: 2, tipo: 'ta', hecho: true, pasado: true, contenido: true }
  ];
  const r = C.reorganizar(ORDEN, 1, dias, [4, 6]);
  assert.deepStrictEqual(r.dias.filter(d => d.accion === 'tipo').map(d => d.i + ':' + d.tipo), ['4:pa', '6:tb'], 'tras Torso A hecha el miércoles sigue Pierna A');
});

prueba('mover sube y baja dentro del orden sin salirse', () => {
  assert.deepStrictEqual(C.mover(ORDEN, 1, -1), ['tb', 'pa', 'pb', 'ta']);
  assert.deepStrictEqual(C.mover(ORDEN, 3, 1), ORDEN);
  assert.deepStrictEqual(C.mover(ORDEN, 0, -1), ORDEN);
});

console.log(n + ' pruebas pasadas' + (process.exitCode ? ', con fallos' : ''));
