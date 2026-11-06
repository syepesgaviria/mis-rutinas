/* Mis rutinas: cronómetro de descanso.
   Cuenta regresiva por hora de fin (no por conteo), así sigue bien si la pantalla se apaga. Dibuja su propia barra
   fija encima del pie de la pantalla, avisa con sonido y parpadeo al terminar, y mantiene la pantalla encendida
   mientras corre cuando el navegador lo permite. La app solo llama a iniciar(). */
(function(){
'use strict';

/* "1:30" → 90, "45 s" → 45, "2 min" → 120, "90" → 90, "2" → 120 (un número pequeño se lee como minutos) */
function parse(txt){
  var t = String(txt == null ? '' : txt).trim().toLowerCase().replace(',', '.');
  if (!t) return null;
  var m = t.match(/^(\d+)\s*[:'](\d{1,2})\s*(s|seg|")?$/); if (m) return (+m[1]) * 60 + (+m[2]);
  m = t.match(/^(\d+(?:\.\d+)?)\s*(s|seg|segundos?)$/); if (m) return Math.round(+m[1]);
  m = t.match(/^(\d+(?:\.\d+)?)\s*(m|min|minutos?)$/); if (m) return Math.round(+m[1] * 60);
  m = t.match(/^(\d+(?:\.\d+)?)$/); if (m) { var n = +m[1]; return n <= 10 ? Math.round(n * 60) : Math.round(n); }
  return null;
}
function fmt(seg){ seg = Math.max(0, Math.round(seg)); var mi = Math.floor(seg / 60), s = seg % 60; return mi + ':' + (s < 10 ? '0' : '') + s; }

var st = { fin: 0, dur: 0, pausado: null, etiqueta: '', tick: null, el: null, audio: null, lock: null, terminado: false, avisado: false };

function el(){
  if (st.el) return st.el;
  var d = document.createElement('div');
  d.id = 'cronometro'; d.setAttribute('role', 'status'); d.setAttribute('aria-live', 'polite'); d.hidden = true;
  d.addEventListener('click', function(e){
    var b = e.target.closest('[data-c]'); if (!b) return;
    var a = b.dataset.c;
    if (a === 'pausa') { if (st.pausado != null) continuar(); else pausar(); }
    else if (a === 'mas') mas(15);
    else if (a === 'saltar' || a === 'cerrar') cerrar();
  });
  document.body.appendChild(d); st.el = d;
  document.addEventListener('visibilitychange', function(){ if (document.visibilityState === 'visible') { pedirLock(); tick(); } });
  return d;
}
function restante(){ return st.pausado != null ? st.pausado : Math.max(0, (st.fin - Date.now()) / 1000); }
function activo(){ return !!st.fin && !st.terminado; }

/* posición: encima del pie de la vista (vfoot) o de la barra de pestañas, lo que esté visible */
function colocar(){
  var d = st.el, pie = null, cands = document.querySelectorAll('.vfoot, .bottomnav');
  for (var i = cands.length - 1; i >= 0; i--) { var r = cands[i].getBoundingClientRect(); if (r.height > 0 && r.bottom > window.innerHeight - 2 && r.top < window.innerHeight) { pie = r; break; } }
  d.style.bottom = (pie ? Math.max(0, window.innerHeight - pie.top) + 8 : 16) + 'px';
}
function dibujar(){
  var d = el(); if (!st.fin) { d.hidden = true; return; }
  var r = restante(), pct = st.dur ? Math.max(0, Math.min(100, 100 * (1 - r / st.dur))) : 0;
  d.hidden = false; d.className = (st.terminado ? 'fin' : '') + (st.pausado != null ? ' pausa' : '');
  d.innerHTML = '<span class="cbarra" style="width:' + pct.toFixed(1) + '%"></span>' +
    '<span class="ctxt"><b>' + (st.terminado ? 'Descanso terminado' : fmt(r)) + '</b><small>' + (st.etiqueta || 'Descanso') + (st.pausado != null ? ' · en pausa' : '') + '</small></span>' +
    (st.terminado ? '<button type="button" class="cbtn" data-c="cerrar">Listo</button>' :
      '<button type="button" class="cbtn" data-c="pausa" aria-label="' + (st.pausado != null ? 'Continuar' : 'Pausar') + '">' + (st.pausado != null ? '&#9654;' : '&#10074;&#10074;') + '</button><button type="button" class="cbtn" data-c="mas">+15 s</button><button type="button" class="cbtn" data-c="saltar" aria-label="Saltar">&#10005;</button>');
  colocar();
}
function tick(){
  if (!st.fin) return;
  if (!st.terminado && st.pausado == null && Date.now() >= st.fin) terminar();
  dibujar();
}
function terminar(){
  st.terminado = true; soltarLock();
  if (!st.avisado) { st.avisado = true; sonar(); }
  clearInterval(st.tick); st.tick = null;
  setTimeout(function(){ if (st.terminado) cerrar(); }, 12000);
}
function cerrar(){ clearInterval(st.tick); st.tick = null; st.fin = 0; st.terminado = false; st.pausado = null; soltarLock(); dibujar(); }
function iniciar(seg, etiqueta){
  seg = +seg || 90;
  st.fin = Date.now() + seg * 1000; st.dur = seg; st.pausado = null; st.etiqueta = etiqueta || ''; st.terminado = false; st.avisado = false;
  prepararAudio(); pedirLock();
  clearInterval(st.tick); st.tick = setInterval(tick, 250);
  dibujar();
}
function pausar(){ if (!activo() || st.pausado != null) return; st.pausado = restante(); soltarLock(); dibujar(); }
function continuar(){ if (!activo() || st.pausado == null) return; st.fin = Date.now() + st.pausado * 1000; st.pausado = null; pedirLock(); dibujar(); }
function mas(seg){ if (!activo()) return; if (st.pausado != null) st.pausado += seg; else st.fin += seg * 1000; st.dur += seg; dibujar(); }

/* sonido: tres pitidos cortos con Web Audio; el contexto se crea en el toque que inicia el cronómetro, como exige iOS */
function prepararAudio(){
  try { var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return; if (!st.audio) st.audio = new AC(); if (st.audio.state === 'suspended') st.audio.resume(); } catch (e) {}
}
function sonar(){
  try {
    var ac = st.audio; if (!ac) return;
    if (ac.state === 'suspended') ac.resume();
    var t0 = ac.currentTime;
    for (var i = 0; i < 3; i++) {
      var o = ac.createOscillator(), g = ac.createGain();
      o.type = 'sine'; o.frequency.value = 880; g.gain.value = 0.0001;
      o.connect(g); g.connect(ac.destination);
      var t = t0 + i * 0.35;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.4, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
      o.start(t); o.stop(t + 0.3);
    }
  } catch (e) {}
}
/* pantalla encendida mientras corre (Safari desde iOS 16.4); si no se puede, no pasa nada */
function pedirLock(){
  if (!activo() || st.pausado != null || !navigator.wakeLock || st.lock) return;
  navigator.wakeLock.request('screen').then(function(l){ st.lock = l; l.addEventListener('release', function(){ st.lock = null; }); }).catch(function(){});
}
function soltarLock(){ if (st.lock) { try { st.lock.release(); } catch (e) {} st.lock = null; } }

window.Cronometro = { parse: parse, fmt: fmt, iniciar: iniciar, pausar: pausar, continuar: continuar, mas: mas, cerrar: cerrar, activo: activo, restante: restante, colocar: function(){ if (st.el && !st.el.hidden) colocar(); }, _estado: st };
})();
