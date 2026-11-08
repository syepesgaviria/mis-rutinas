/* Pruebas de la lógica de progresión (progresion.js). node tests/progresion.test.js */
'use strict';
const assert = require('assert');
const fs = require('fs');
const path = require('path');
global.window = global;
new Function(fs.readFileSync(path.join(__dirname, '..', 'progresion.js'), 'utf8'))();
const P = window.Progresion;
let n = 0;
function prueba(nombre, fn){ try { fn(); n++; console.log('OK    ' + nombre); } catch (e) { console.log('FALLO ' + nombre + ': ' + e.message); process.exitCode = 1; } }

prueba('las cargas de la barra salen de combinar un par de cada disco', () => {
  const c = P.cargasBarra(20, [5, 6.8, 10, 15.9]);
  assert.deepStrictEqual(c.slice(0, 6), [20, 30, 33.6, 40, 43.6, 50]);
  assert.strictEqual(c[c.length - 1], 95.4, 'todos los discos: 20 + 2 × 37,7');
  assert.deepStrictEqual(P.cargasBarra(15, [5, 6.8, 10, 15.9]).slice(0, 4), [15, 25, 28.6, 35]);
  assert.strictEqual(c.length, 16, '2^4 combinaciones, sin repetidos');
  assert.deepStrictEqual(P.cargasBarra(20, []), [20]);
});

prueba('siguiente carga con barra: la siguiente que se puede armar, no un paso fijo', () => {
  assert.strictEqual(P.siguiente('barra', 40, { barra: 20 }), 43.6);
  assert.strictEqual(P.siguiente('barra', 43.6, { barra: 20 }), 50);
  assert.strictEqual(P.siguiente('barra', 20, { barra: 20 }), 30);
  assert.strictEqual(P.siguiente('barra', 0, { barra: 20 }), 20, 'sin carga anotada propone la barra sola');
  assert.strictEqual(P.siguiente('barra', 95.4, { barra: 20 }), null, 'con todos los discos no hay siguiente');
  assert.strictEqual(P.siguiente('barra', 45, {}), 46.8, 'con la barra real de 15: 15, 25, 28.6, 35, 38.6, 45, 46.8 (15 + 2 × 15,9)');
  assert.strictEqual(P.siguiente('barraez', 10, {}), 20, 'la barra EZ usa su propio peso');
  assert.strictEqual(P.siguiente('barra', 40, { barra: 15 }), 45, 'con barra de 15 las cargas son 15, 25, 28.6, 35, 38.6, 45...: por encima de 40 viene 45');
});

prueba('mancuernas suben de 2,5 por mancuerna y se detienen en la más pesada', () => {
  assert.strictEqual(P.siguiente('dos', 20, {}), 25, 'dos mancuernas: 5 kg en total');
  assert.strictEqual(P.siguiente('una', 12.5, {}), 15);
  assert.strictEqual(P.siguiente('dos', 50, {}), null, '2 × 25 es el máximo');
  assert.strictEqual(P.siguiente('una', 25, {}), null);
  assert.strictEqual(P.siguiente('dos', 20, { pasoMancuerna: 2 }), 24);
});

prueba('polea, kettlebell y peso corporal', () => {
  assert.strictEqual(P.siguiente('polea', 30, {}), 32, 'la torre va de 2 en 2');
  assert.strictEqual(P.siguiente('polea', 30, { pasoPolea: 5 }), 35);
  assert.strictEqual(P.siguiente('kettlebell', 16, {}), 20);
  assert.strictEqual(P.siguiente('corporal', 0, {}), null, 'sin lastre no hay número');
  assert.strictEqual(P.siguiente('corporal', 10, {}), 12.5, 'con lastre sube 2,5');
  assert.strictEqual(P.siguiente(null, 10, {}), null);
});

prueba('normalizarEquipo completa y limpia', () => {
  const e = P.normalizarEquipo({ barra: '15', discos: ['5', 'x', 2.5], pasoMancuerna: 0 });
  assert.strictEqual(e.barra, 15); assert.deepStrictEqual(e.discos, [2.5, 5]); assert.strictEqual(e.pasoMancuerna, 2.5);
  assert.deepStrictEqual(P.normalizarEquipo(null), P.EQUIPO);
  assert.strictEqual(P.EQUIPO.barra, 15); assert.strictEqual(P.EQUIPO.pasoPolea, 2);
});

prueba('evaluar: sube solo con todas las series anotadas, mismo peso y todas al tope', () => {
  const L = (sets, n) => ({ sets, n, reps: sets.map(s => s.reps), time: false, kg: sets[0] && sets[0].kg });
  const s = (kg, reps) => ({ kg, reps, sinKg: false });
  assert.strictEqual(P.evaluar(L([s(40, 12), s(40, 12), s(40, 12)], 3), 12, 3).estado, 'sube');
  assert.strictEqual(P.evaluar(L([s(40, 12), s(40, 11), s(40, 12)], 3), 12, 3).estado, 'mantener');
  assert.strictEqual(P.evaluar(L([s(40, 12), s(40, 12)], 3), 12, 3).estado, 'incompleto');
  assert.strictEqual(P.evaluar(L([s(40, 12), s(40, 12), s(40, 12)], 3), 12, 4).estado, 'incompleto', 'si hoy se planean 4 series, 3 no bastan');
  assert.strictEqual(P.evaluar(L([s(40, 12), s(35, 12), s(40, 12)], 3), 12, 3).estado, 'distintos');
  assert.strictEqual(P.evaluar(null, 12, 3).estado, 'sin');
  assert.strictEqual(P.evaluar(L([s(40, 12)], 1), 0, 1).estado, 'sin', 'sin tope de rango no se evalúa');
  const ev = P.evaluar(L([s(40, 12), s(40, 12), s(40, 12)], 3), 12, 3); assert.strictEqual(ev.w0, 40);
});

prueba('evaluar con series por tiempo', () => {
  const L = { sets: [{ kg: 0, reps: 40 }, { kg: 0, reps: 40 }], n: 2, reps: [40, 40], time: true, kg: 0 };
  assert.strictEqual(P.evaluar(L, 40, 2).estado, 'sube');
  assert.strictEqual(P.evaluar(L, 45, 2).estado, 'mantener');
});

prueba('la propuesta se guarda como texto y se lee de vuelta', () => {
  assert.strictEqual(P.escribirSug(40, 43.6), '40>43.6');
  assert.deepStrictEqual(P.leerSug('40>43.6'), { de: 40, a: 43.6 });
  assert.strictEqual(P.leerSug('basura'), null);
});

prueba('corregirItem resta a lo planeado, a cada serie con peso propio y a la propuesta', () => {
  const fmt = x => String(x).replace('.', ',');
  const it = { kg: '50', hk: '50||45|', hr: '12,12,12', sug: '50>53.6' };
  const n = P.corregirItem(it, -5, fmt);
  assert.deepStrictEqual(it, { kg: '45', hk: '45||40|', hr: '12,12,12', sug: '45>48.6' });
  assert.strictEqual(n, 4);
  const vacio = { kg: '', hk: '' }; assert.strictEqual(P.corregirItem(vacio, -5, fmt), 0); assert.strictEqual(vacio.kg, '');
  const bajo = { kg: '3' }; P.corregirItem(bajo, -5, fmt); assert.strictEqual(bajo.kg, '0', 'nunca queda negativo');
});

console.log(n + ' pruebas pasadas' + (process.exitCode ? ', con fallos' : ''));
