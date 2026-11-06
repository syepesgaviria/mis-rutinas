/* Pruebas del cronómetro (cronometro.js): lectura de descansos y cuenta por hora de fin. node tests/cronometro.test.js */
'use strict';
const assert = require('assert');
const fs = require('fs');
const path = require('path');
global.window = global;
const nodos = [];
global.document = { createElement: () => ({ setAttribute(){}, addEventListener(){}, style: {}, hidden: true, innerHTML: '', className: '' }), body: { appendChild(n){ nodos.push(n); } }, addEventListener(){}, querySelectorAll: () => [], visibilityState: 'visible' };
Object.defineProperty(global, 'navigator', { value: {}, configurable: true });
global.innerHeight = 800;
new Function(fs.readFileSync(path.join(__dirname, '..', 'cronometro.js'), 'utf8'))();
const C = window.Cronometro;
let n = 0;
function prueba(nombre, fn){ try { fn(); n++; console.log('OK    ' + nombre); } catch (e) { console.log('FALLO ' + nombre + ': ' + e.message); process.exitCode = 1; } }

prueba('parse lee los formatos de descanso que usa la app', () => {
  assert.strictEqual(C.parse('1:30'), 90);
  assert.strictEqual(C.parse('0:30'), 30);
  assert.strictEqual(C.parse('2:00'), 120);
  assert.strictEqual(C.parse('45 s'), 45);
  assert.strictEqual(C.parse('2 min'), 120);
  assert.strictEqual(C.parse('90'), 90, 'un número grande son segundos');
  assert.strictEqual(C.parse('2'), 120, 'un número pequeño son minutos');
  assert.strictEqual(C.parse('1.5'), 90);
  assert.strictEqual(C.parse(''), null);
  assert.strictEqual(C.parse('mucho'), null);
});

prueba('fmt escribe m:ss', () => {
  assert.strictEqual(C.fmt(90), '1:30'); assert.strictEqual(C.fmt(5), '0:05'); assert.strictEqual(C.fmt(0), '0:00'); assert.strictEqual(C.fmt(-3), '0:00');
});

prueba('iniciar, pausar, continuar, sumar y cerrar llevan la cuenta por hora de fin', () => {
  const ahora = Date.now;
  let t = 1000000; Date.now = () => t;
  try {
    C.iniciar(90, 'Sentadilla');
    assert.ok(C.activo()); assert.ok(Math.abs(C.restante() - 90) < 0.01);
    t += 30000; assert.ok(Math.abs(C.restante() - 60) < 0.01, 'pasados 30 s quedan 60');
    C.pausar(); t += 60000; assert.ok(Math.abs(C.restante() - 60) < 0.01, 'en pausa no avanza');
    C.continuar(); t += 10000; assert.ok(Math.abs(C.restante() - 50) < 0.01, 'al continuar sigue desde donde quedó');
    C.mas(15); assert.ok(Math.abs(C.restante() - 65) < 0.01, '+15 s');
    C.cerrar(); assert.ok(!C.activo()); assert.strictEqual(C.restante(), 0);
    C.iniciar('abc'); assert.ok(Math.abs(C.restante() - 90) < 0.01, 'sin duración válida usa 90 s'); C.cerrar();
  } finally { Date.now = ahora; }
});

console.log(n + ' pruebas pasadas' + (process.exitCode ? ', con fallos' : ''));
