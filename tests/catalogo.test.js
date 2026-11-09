/* Coherencia del catálogo de app.js: ids únicos, cada ejercicio con su miniatura y sus dos fotos (inicio y final) con
   las proporciones que espera la app, alternativas que apuntan a ejercicios que existen y ejercicios por tiempo bien
   declarados. node tests/catalogo.test.js */
'use strict';
const fs = require('fs');
const path = require('path');
const raiz = path.join(__dirname, '..');
const lineas = fs.readFileSync(path.join(raiz, 'app.js'), 'utf8').split('\n');
let fallos = 0, pruebas = 0;
function ok(c, m){ pruebas++; if (!c) { fallos++; console.log('FALLO ' + m); } }

function json(pre){
  const l = lineas.find(x => x.startsWith(pre));
  if (!l) throw new Error('no se encontró ' + pre);
  return JSON.parse(l.slice(pre.length, l.lastIndexOf(';')));
}
function objeto(pre){
  const l = lineas.find(x => x.startsWith(pre));
  if (!l) throw new Error('no se encontró ' + pre);
  return Function('return ' + l.slice(pre.length, l.lastIndexOf(';')))();
}
/* tamaño de un JPEG leyendo su marcador SOF, sin dependencias */
function medidas(file){
  const b = fs.readFileSync(file);
  if (b[0] !== 0xFF || b[1] !== 0xD8) return null;
  let i = 2;
  while (i < b.length) {
    if (b[i] !== 0xFF) { i++; continue; }
    const m = b[i + 1], len = b.readUInt16BE(i + 2);
    if (m >= 0xC0 && m <= 0xCF && m !== 0xC4 && m !== 0xC8 && m !== 0xCC) return { w: b.readUInt16BE(i + 7), h: b.readUInt16BE(i + 5) };
    i += 2 + len;
  }
  return null;
}

const LIB = json('var LIB = '), ALT = json('var ALT = ');
const HOLD = objeto('var HOLD = '), ILUS = objeto('var ILUS = '), UNI = objeto('var UNI = ');
const ids = new Set(LIB.map(e => e.id));
const esTiempo = s => /\d\s*s\b|seg/i.test(String(s || ''));   // misma regla que isTime en app.js

ok(ids.size === LIB.length, 'ids únicos en el catálogo');
for (const e of LIB) {
  ok(e.n && e.t && e.g && Array.isArray(e.s) && e.e && Array.isArray(e.p) && e.p.length >= 2, e.id + ': ficha completa');
  const mini = medidas(path.join(raiz, 'img', e.id + '.jpg'));
  ok(mini && mini.w === mini.h, e.id + ': miniatura cuadrada (' + JSON.stringify(mini) + ')');
  for (const k of [0, 1]) {
    const f = medidas(path.join(raiz, 'img', e.id + '_' + k + '.jpg'));
    ok(f && f.w * 2 === f.h * 3, e.id + '_' + k + ': foto en 3:2 (' + JSON.stringify(f) + ')');
  }
}
for (const [id, lista] of Object.entries(ALT)) {
  ok(ids.has(id) || id.startsWith('c_'), 'alternativas de un ejercicio que existe: ' + id);   // c_: ejercicio propio
  for (const a of lista) ok(ids.has(a.id) || a.id.startsWith('c_'), id + ' → ' + a.id + ' existe');
  ok(new Set(lista.map(a => a.id)).size === lista.length && !lista.some(a => a.id === id), id + ': alternativas sin repetir ni a sí mismo');
}
for (const [id, r] of Object.entries(HOLD)) {
  ok(ids.has(id), 'ejercicio por tiempo en el catálogo: ' + id);
  ok(esTiempo(r), id + ': su rango por defecto está en segundos (' + r + ')');
  ok(!UNI[id], id + ': por tiempo y a dos piernas');
}
for (const id of Object.keys(ILUS)) ok(ids.has(id), 'ilustración de un ejercicio que existe: ' + id);

/* la sentadilla en la pared: lo que se agregó el 9 nov 2026 */
const pared = LIB.find(e => e.id === 'pared');
ok(pared && pared.g === 'Cuádriceps' && pared.e === 'Peso corporal', 'sentadilla en la pared en Cuádriceps, peso corporal');
ok(ALT.zancadas[0].id === 'pared' && ALT.bulgara[0].id === 'pared', 'es la primera alternativa de zancadas y búlgara');
ok(ALT.pared.some(a => a.id === 'zancadaatras'), 'desde la pared se vuelve por la zancada hacia atrás');

/* el service worker precachea las fotos nuevas (requiere npm run build) */
const sw = fs.readFileSync(path.join(raiz, 'sw.js'), 'utf8');
for (const f of ['img/pared.jpg', 'img/pared_0.jpg', 'img/pared_1.jpg']) ok(sw.includes('"' + f + '"'), 'sw.js precachea ' + f);

console.log((fallos ? 'FALLARON ' + fallos : 'OK') + ' · catálogo: ' + pruebas + ' comprobaciones, ' + LIB.length + ' ejercicios');
process.exit(fallos ? 1 : 0);
