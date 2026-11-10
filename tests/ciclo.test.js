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

prueba('la racha de descarga cuenta semanas seguidas con 3 o más sesiones y la corta una descarga o una semana floja', () => {
  const s = (ws, sesiones, descarga) => ({ ws, sesiones, descarga: !!descarga });
  assert.strictEqual(C.rachaDescarga([s('2026-09-28', 4), s('2026-10-05', 3), s('2026-10-12', 4)]), 3);
  assert.strictEqual(C.rachaDescarga([s('2026-09-28', 4), s('2026-10-05', 2), s('2026-10-12', 4)]), 1, 'la semana de 2 sesiones corta la racha');
  assert.strictEqual(C.rachaDescarga([s('2026-09-28', 4), s('2026-10-05', 4, true), s('2026-10-12', 4)]), 1, 'la descarga corta la racha');
  assert.strictEqual(C.rachaDescarga([s('2026-10-12', 4, true)]), 0);
  assert.strictEqual(C.rachaDescarga([]), 0);
  const r = C.descargaRecomendada([s('2026-09-07', 3), s('2026-09-14', 3), s('2026-09-21', 3), s('2026-09-28', 3), s('2026-10-05', 3), s('2026-10-12', 3)], 6);
  assert.deepStrictEqual(r, { racha: 6, cada: 6, recomendar: true });
  assert.strictEqual(C.descargaRecomendada([s('2026-10-12', 3)], 6).recomendar, false);
});

prueba('las series de descarga bajan al 60% con mínimo 2', () => {
  assert.strictEqual(C.seriesDescarga(4, 0.6), 2);
  assert.strictEqual(C.seriesDescarga(3, 0.6), 2);
  assert.strictEqual(C.seriesDescarga(5, 0.6), 3);
  assert.strictEqual(C.seriesDescarga(1, 0.6), 1);
  assert.strictEqual(C.seriesDescarga(0, 0.6), 0);
  assert.strictEqual(C.seriesDescarga(4, 0.5), 2);
});

prueba('normalizar lee descargaCada y factorDescarga con límites', () => {
  assert.strictEqual(C.normalizar({}).descargaCada, 6);
  assert.strictEqual(C.normalizar({ descargaCada: '8' }).descargaCada, 8);
  assert.strictEqual(C.normalizar({ descargaCada: 99 }).descargaCada, 6);
  assert.strictEqual(C.normalizar({ factorDescarga: 0.5 }).factorDescarga, 0.5);
  assert.strictEqual(C.normalizar({ factorDescarga: 2 }).factorDescarga, 0.6);
});

prueba('cardio aparte: los descansos de los días de cardio reciben el día tipo de cardio, menos los pasados', () => {
  const plan = C.armar(['a', 'b', 'c', 'd'], 0, [0, 3, 4, 6]);
  C.conCardio(plan, { tipo: 'cardio', dias: [2, 5] }, [2], []);
  assert.strictEqual(plan.dias[2].accion, 'descanso', 'el miércoles ya pasó: se queda en descanso');
  assert.deepStrictEqual(plan.dias[5], { i: 5, accion: 'tipo', tipo: 'cardio', cardio: true });
  assert.strictEqual(plan.dias[1].accion, 'descanso', 'el martes no es día de cardio');
  assert.strictEqual(plan.dias[0].accion, 'tipo', 'los días de fuerza no cambian');
  const sin = C.armar(['a', 'b'], 0, [0, 3]); C.conCardio(sin, { tipo: null, dias: [2, 5] }); assert.strictEqual(sin.dias[2].accion, 'descanso', 'sin día tipo de cardio no pasa nada');
  const re = C.reorganizar(['a', 'b'], 0, [{ i: 5, tipo: 'cardio', hecho: false, pasado: false, contenido: true }], [0, 3]);
  assert.deepStrictEqual(re.reemplazados, [5], 'reorganizar marcaría el sábado como reemplazado');
  C.conCardio(re, { tipo: 'cardio', dias: [5] }, [], [5]);
  assert.deepStrictEqual(re.reemplazados, [], 'pero si ya tenía el cardio no se avisa como reemplazo');
  const cfg = C.normalizar({ cardio: { tipo: 't1', dias: [5, 2, 9] } });
  assert.deepStrictEqual(cfg.cardio, { tipo: 't1', dias: [2, 5], configurado: true });
  assert.deepStrictEqual(C.normalizar({}).cardio, { tipo: null, dias: [2, 5], configurado: false }, 'por defecto miércoles y sábado, sin día tipo');
});

console.log(n + ' pruebas pasadas' + (process.exitCode ? ', con fallos' : ''));
