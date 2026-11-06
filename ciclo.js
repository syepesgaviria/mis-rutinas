/* Mis rutinas: ciclo de días tipo con rotación.
   Funciones puras sobre datos simples, sin tocar el estado de la app, para poder probarlas aparte.
   El ciclo es un orden de días tipo (por ejemplo Pierna A, Torso B, Pierna B, Torso A) que no se reinicia cada
   semana: continúa donde quedó el último día que de verdad se hizo. */
(function(){
'use strict';

/* días de la semana por defecto (0 = lunes) según el número de sesiones */
var DIAS_POR_DEFECTO = { 1: [0], 2: [0, 3], 3: [0, 2, 4], 4: [0, 3, 4, 6], 5: [0, 1, 3, 4, 6], 6: [0, 1, 2, 4, 5, 6], 7: [0, 1, 2, 3, 4, 5, 6] };

function unicos(a){ var v = {}, out = []; a.forEach(function(x){ if (!v[x]) { v[x] = 1; out.push(x); } }); return out; }
function diasValidos(a){ return unicos((Array.isArray(a) ? a : []).map(function(x){ return +x; }).filter(function(x){ return x >= 0 && x <= 6 && x === Math.floor(x); })).sort(function(a, b){ return a - b; }); }

/* normaliza el documento guardado; lo que falte se completa con los valores por defecto */
function normalizar(doc){
  var o = doc && typeof doc === 'object' ? doc : {};
  var orden = unicos((Array.isArray(o.orden) ? o.orden : []).filter(function(x){ return typeof x === 'string' && x; }));
  var dias = {};
  for (var n = 1; n <= 7; n++) {
    var d = o.dias && diasValidos(o.dias[n]);
    dias[n] = d && d.length === n ? d : DIAS_POR_DEFECTO[n].slice();
  }
  return { orden: orden, dias: dias };
}
function diasPara(cfg, n){ n = Math.min(7, Math.max(1, +n || 0)); return (cfg && cfg.dias && cfg.dias[n] || DIAS_POR_DEFECTO[n]).slice(); }

/* posición de partida: el día tipo del último día hecho que pertenezca al ciclo, mirando hacia atrás en el historial.
   historial: lista de { fecha, tipo, hecho } en cualquier orden. Devuelve el índice del siguiente paso y de dónde salió */
function partida(orden, historial){
  if (!orden.length) return { idx: 0, desde: null };
  var hechos = (historial || []).filter(function(h){ return h && h.hecho && typeof h.fecha === 'string'; }).sort(function(a, b){ return a.fecha < b.fecha ? 1 : a.fecha > b.fecha ? -1 : 0; });
  for (var i = 0; i < hechos.length; i++) {
    var p = orden.indexOf(hechos[i].tipo);
    if (p >= 0) return { idx: (p + 1) % orden.length, desde: { fecha: hechos[i].fecha, tipo: hechos[i].tipo } };
  }
  return { idx: 0, desde: null };
}

/* asignación de una semana vacía: N pasos del ciclo en los días elegidos (ordenados); el resto descansa */
function armar(orden, idx, diasSel){
  var sel = diasValidos(diasSel), out = [], p = idx;
  for (var i = 0; i < 7; i++) {
    if (orden.length && sel.indexOf(i) >= 0) { out.push({ i: i, accion: 'tipo', tipo: orden[p % orden.length] }); p++; }
    else out.push({ i: i, accion: 'descanso' });
  }
  return { dias: out, siguiente: orden.length ? p % orden.length : 0 };
}

/* reorganizar una semana con plan. dias: [{ i, tipo, hecho, pasado, contenido }] (contenido = tiene algo planeado).
   Los días hechos no se tocan y mueven el puntero del ciclo. Los días pasados sin hacer quedan en descanso.
   Los días elegidos (hoy o futuros) reciben los pasos siguientes; los demás futuros pasan a descanso.
   idxAntes: posición del ciclo calculada con el historial anterior a esta semana */
function reorganizar(orden, idxAntes, dias, diasSel){
  var sel = diasValidos(diasSel), p = idxAntes, out = [], reemplazados = [];
  var porDia = {}; (dias || []).forEach(function(d){ porDia[d.i] = d; });
  for (var i = 0; i < 7; i++) {
    var d = porDia[i] || { i: i, tipo: null, hecho: false, pasado: false, contenido: false };
    if (d.hecho) {
      out.push({ i: i, accion: 'mantener', tipo: d.tipo || null });
      var k = orden.indexOf(d.tipo); if (k >= 0) p = (k + 1) % orden.length;
      continue;
    }
    if (d.pasado || sel.indexOf(i) < 0 || !orden.length) {
      if (d.contenido) reemplazados.push(i);
      out.push({ i: i, accion: 'descanso' });
      continue;
    }
    var tipo = orden[p % orden.length]; p++;
    if (d.contenido && d.tipo !== tipo) reemplazados.push(i);
    out.push({ i: i, accion: d.contenido && d.tipo === tipo ? 'mantener' : 'tipo', tipo: tipo });
  }
  return { dias: out, reemplazados: reemplazados, siguiente: orden.length ? p % orden.length : 0 };
}

/* mover un elemento del orden: dir -1 sube, +1 baja */
function mover(orden, i, dir){
  var o = orden.slice(), j = i + dir;
  if (i < 0 || i >= o.length || j < 0 || j >= o.length) return o;
  var t = o[i]; o[i] = o[j]; o[j] = t; return o;
}

window.Ciclo = { DIAS_POR_DEFECTO: DIAS_POR_DEFECTO, normalizar: normalizar, diasPara: diasPara, partida: partida, armar: armar, reorganizar: reorganizar, mover: mover, diasValidos: diasValidos };
})();
