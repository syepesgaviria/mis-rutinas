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
  var equipo = o.equipo && typeof o.equipo === 'object' ? JSON.parse(JSON.stringify(o.equipo)) : {};
  var extra = {}; ['bloque', 'correcciones'].forEach(function(k){ if (o[k] !== undefined) extra[k] = JSON.parse(JSON.stringify(o[k])); });
  /* cardio aparte: un día tipo (solo cardio) que se carga en ciertos días de descanso al armar la semana */
  var cd = o.cardio && typeof o.cardio === 'object' ? o.cardio : null;
  extra.cardio = { tipo: cd && typeof cd.tipo === 'string' && cd.tipo ? cd.tipo : null, dias: cd && Array.isArray(cd.dias) ? diasValidos(cd.dias) : [2, 5], configurado: !!cd };
  var dc = parseInt(o.descargaCada, 10); extra.descargaCada = dc >= 2 && dc <= 20 ? dc : 6;
  var df = parseFloat(o.factorDescarga); extra.factorDescarga = df >= 0.3 && df <= 0.9 ? Math.round(df * 100) / 100 : 0.6;
  var out = { orden: orden, dias: dias, equipo: equipo };
  Object.keys(extra).forEach(function(k){ out[k] = extra[k]; });
  return out;
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

/* cardio aparte: los días de descanso del plan que caen en los días de cardio reciben el día tipo de cardio.
   pasados: índices que no se tocan (días ya pasados). yaTenia: índices que ya tenían ese mismo día tipo */
function conCardio(plan, cardio, pasados, yaTenia){
  if (!cardio || !cardio.tipo || !cardio.dias.length) return plan;
  plan.dias.forEach(function(x){
    if (x.accion !== 'descanso' || cardio.dias.indexOf(x.i) < 0 || (pasados || []).indexOf(x.i) >= 0) return;
    x.accion = 'tipo'; x.tipo = cardio.tipo; x.cardio = true;
    if (plan.reemplazados && (yaTenia || []).indexOf(x.i) >= 0) plan.reemplazados = plan.reemplazados.filter(function(i){ return i !== x.i; });
  });
  return plan;
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

/* DESCARGA. semanas: [{ ws, sesiones, descarga }] en cualquier orden, solo semanas ya pasadas o en curso.
   Racha = semanas seguidas, de la más reciente hacia atrás, con al menos minSesiones anotadas; una semana de descarga
   o una semana floja (menos sesiones) la corta, porque ya sirvió de descanso. */
function rachaDescarga(semanas, minSesiones){
  var min = minSesiones || 3, lista = (semanas || []).slice().sort(function(a, b){ return a.ws < b.ws ? 1 : a.ws > b.ws ? -1 : 0; }), n = 0;
  for (var i = 0; i < lista.length; i++) {
    var s = lista[i];
    if (s.descarga) break;
    if ((s.sesiones || 0) < min) break;
    n++;
  }
  return n;
}
function descargaRecomendada(semanas, cada, minSesiones){ var r = rachaDescarga(semanas, minSesiones); return { racha: r, cada: cada, recomendar: r >= (cada || 6) }; }
/* series de descarga: factor sobre las planeadas, redondeando hacia abajo, nunca menos de 2 (o de 1 si solo había 1) */
function seriesDescarga(sets, factor){ var n = +sets || 0; if (n <= 0) return n; return Math.max(Math.min(2, n), Math.floor(n * (factor || 0.6))); }

/* mover un elemento del orden: dir -1 sube, +1 baja */
function mover(orden, i, dir){
  var o = orden.slice(), j = i + dir;
  if (i < 0 || i >= o.length || j < 0 || j >= o.length) return o;
  var t = o[i]; o[i] = o[j]; o[j] = t; return o;
}

window.Ciclo = { DIAS_POR_DEFECTO: DIAS_POR_DEFECTO, normalizar: normalizar, diasPara: diasPara, partida: partida, armar: armar, reorganizar: reorganizar, mover: mover, conCardio: conCardio, diasValidos: diasValidos, rachaDescarga: rachaDescarga, descargaRecomendada: descargaRecomendada, seriesDescarga: seriesDescarga };
})();
