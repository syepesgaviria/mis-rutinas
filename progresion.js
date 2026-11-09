/* Mis rutinas: progresión de cargas.
   Funciones puras: cargas posibles con los discos de la barra, siguiente carga según el equipo y evaluación de la
   última sesión ("llegó al tope del rango en todas las series"). La app decide cuándo aplicarlas. */
(function(){
'use strict';

/* equipo por defecto: la barra y los discos de Santiago, mancuernas de 2,5 en 2,5 hasta 25, polea de 2 en 2 */
var EQUIPO = { barra: 15, barraEz: 10, discos: [5, 6.8, 10, 15.9], pasoMancuerna: 2.5, mancuernaMax: 25, pasoPolea: 2 };

function numOk(v, min){ var n = typeof v === 'number' ? v : parseFloat(String(v == null ? '' : v).replace(',', '.')); return isFinite(n) && n >= (min == null ? 0 : min) ? Math.round(n * 100) / 100 : null; }
function normalizarEquipo(o){
  o = o && typeof o === 'object' ? o : {};
  var discos = (Array.isArray(o.discos) ? o.discos : []).map(function(x){ return numOk(x, 0.1); }).filter(function(x){ return x != null; });
  return {
    barra: numOk(o.barra, 1) != null ? numOk(o.barra, 1) : EQUIPO.barra,
    barraEz: numOk(o.barraEz, 1) != null ? numOk(o.barraEz, 1) : EQUIPO.barraEz,
    discos: discos.length ? discos.sort(function(a, b){ return a - b; }) : EQUIPO.discos.slice(),
    pasoMancuerna: numOk(o.pasoMancuerna, 0.5) || EQUIPO.pasoMancuerna,
    mancuernaMax: numOk(o.mancuernaMax, 1) || EQUIPO.mancuernaMax,
    pasoPolea: numOk(o.pasoPolea, 0.5) || EQUIPO.pasoPolea
  };
}
function r1(n){ return Math.round(n * 10) / 10; }

/* todas las cargas que se pueden armar: barra más dos de cada disco elegido (un par por lado), ordenadas */
function cargasBarra(barra, discos){
  var sumas = { 0: true };
  (discos || []).forEach(function(d){ Object.keys(sumas).forEach(function(k){ sumas[r1(+k + d)] = true; }); });
  return Object.keys(sumas).map(function(k){ return r1(barra + 2 * (+k)); }).sort(function(a, b){ return a - b; });
}

/* siguiente carga por encima de kg según la modalidad del ejercicio; null cuando no hay un número que proponer
   (peso corporal sin lastre, mancuerna más pesada ya alcanzada) */
function siguiente(modalidad, kg, eq){
  eq = normalizarEquipo(eq); kg = +kg || 0;
  var paso;
  if (modalidad === 'dos') { paso = 2 * eq.pasoMancuerna; var d2 = r1(kg + paso); return d2 <= 2 * eq.mancuernaMax + 0.01 ? d2 : null; }
  if (modalidad === 'una') { var d1 = r1(kg + eq.pasoMancuerna); return d1 <= eq.mancuernaMax + 0.01 ? d1 : null; }
  if (modalidad === 'barra' || modalidad === 'barraez') {
    var cargas = cargasBarra(modalidad === 'barra' ? eq.barra : eq.barraEz, eq.discos);
    for (var i = 0; i < cargas.length; i++) if (cargas[i] > kg + 0.05) return cargas[i];
    return null;
  }
  if (modalidad === 'polea') return r1(kg + eq.pasoPolea);
  if (modalidad === 'kettlebell') return r1(kg + 4);
  if (modalidad === 'corporal') return kg > 0 ? r1(kg + 2.5) : null;
  return null;
}

/* evaluación de la última sesión. L: { sets: [{ kg, reps, sinKg }], n, reps: [], time }, top: tope del rango,
   needSets: series planeadas hoy. Estados: sin (nada que evaluar), incompleto, distintos, mantener, sube */
function evaluar(L, top, needSets){
  if (!L || !top || !L.reps || !L.reps.length || !L.sets || !L.sets.length) return { estado: 'sin' };
  if (L.time) {
    var needT = needSets || L.n || L.reps.length, w = L.sets.filter(function(x){ return x.kg === L.kg; });
    return { estado: L.reps.length >= needT && w.every(function(x){ return x.reps >= top; }) ? 'sube' : 'mantener', need: needT, w0: L.kg, time: true };
  }
  var need = Math.max(L.n || 0, needSets || 0) || L.reps.length, w0 = L.sets[0].kg;
  var full = L.sets.length >= need;
  var uni = L.sets.every(function(x){ return x.kg === w0 && !x.sinKg === !L.sets[0].sinKg; });
  var reached = L.sets.every(function(x){ return x.reps >= top; });
  return { estado: !full ? 'incompleto' : !uni ? 'distintos' : !reached ? 'mantener' : 'sube', need: need, w0: w0, hechas: L.sets.length };
}

/* corrección de cargas: suma delta (negativo para restar) al peso planeado, a cada serie anotada con peso propio y a la
   propuesta guardada. fmt escribe el número como lo guarda la app. Devuelve cuántos valores cambió */
function corregirItem(it, delta, fmt){
  var n = 0, num = function(v){ var x = parseFloat(String(v == null ? '' : v).replace(',', '.')); return isFinite(x) ? x : null; };
  var ajustar = function(v){ var x = num(v); if (x == null || x <= 0) return null; return fmt(Math.max(0, Math.round((x + delta) * 10) / 10)); };
  var kg = ajustar(it.kg); if (kg != null) { it.kg = kg; n++; }
  if (it.hk) { var partes = String(it.hk).split('|').map(function(v){ var a = String(v).trim() === '' ? null : ajustar(v); if (a != null) { n++; return a; } return v; }); it.hk = partes.join('|'); }
  var sg = leerSug(it.sug); if (sg) { it.sug = escribirSug(Math.max(0, sg.de + delta), Math.max(0, sg.a + delta)); n++; }
  return n;
}

/* qué discos poner por lado para una carga: la combinación (un par de cada disco) que más se acerque; empates, la de
   menos discos. Devuelve { porLado, total, exacto } o null si la carga está por debajo de la barra o no hay discos */
function discosPara(kg, eq, modalidad){
  eq = normalizarEquipo(eq); kg = +kg || 0;
  var barra = modalidad === 'barraez' ? eq.barraEz : eq.barra, discos = eq.discos.slice().sort(function(a, b){ return b - a; });
  if (kg < barra - 0.05) return null;
  var mejor = null, n = discos.length;
  for (var mask = 0; mask < (1 << n); mask++) {
    var lado = [], suma = 0;
    for (var i = 0; i < n; i++) if (mask & (1 << i)) { lado.push(discos[i]); suma += discos[i]; }
    var total = r1(barra + 2 * suma), dif = Math.abs(total - kg);
    if (!mejor || dif < mejor.dif - 0.001 || (Math.abs(dif - mejor.dif) <= 0.001 && lado.length < mejor.porLado.length)) mejor = { porLado: lado, total: total, dif: dif };
  }
  return { porLado: mejor.porLado, total: mejor.total, exacto: mejor.dif <= 0.05 };
}

/* texto corto de una propuesta guardada en el ítem: "20>22.5" → { de: 20, a: 22.5 } */
function leerSug(s){ var m = String(s || '').split('>'); if (m.length !== 2) return null; var de = parseFloat(m[0]), a = parseFloat(m[1]); return isFinite(de) && isFinite(a) ? { de: de, a: a } : null; }
function escribirSug(de, a){ return String(r1(de)) + '>' + String(r1(a)); }

window.Progresion = { EQUIPO: EQUIPO, normalizarEquipo: normalizarEquipo, cargasBarra: cargasBarra, siguiente: siguiente, evaluar: evaluar, leerSug: leerSug, escribirSug: escribirSug, corregirItem: corregirItem, discosPara: discosPara };
})();
