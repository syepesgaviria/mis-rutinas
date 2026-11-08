/* Mis rutinas: cronómetro de descanso.
   Cuenta regresiva por hora de fin (no por conteo), así sigue bien si la pantalla se apaga. Dibuja su propia barra
   fija encima del pie de la pantalla, avisa con sonido y parpadeo al terminar, y mantiene la pantalla encendida
   mientras corre cuando el navegador lo permite. La app solo llama a iniciar().
   El aviso con el teléfono bloqueado: iOS congela las apps web al bloquear, pero deja seguir el audio que ya suena
   como si fuera música. Por eso el descanso se reproduce como una pista (silencio del largo del descanso y los
   pitidos al final) y se anuncia en la pantalla de bloqueo con el nombre del ejercicio y el tiempo. Si la pista no
   puede sonar, quedan los pitidos con Web Audio de siempre. */
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

var st = { fin: 0, dur: 0, pausado: null, etiqueta: '', tick: null, el: null, audio: null, lock: null, terminado: false, avisado: false, pista: null, pistaUrl: null, pistaOk: false, posT: 0 };

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
  if (!st.terminado && st.pausado == null && Date.now() - st.posT > 1000) { st.posT = Date.now(); posicionMedia(); }
  dibujar();
}
function terminar(){
  st.terminado = true; soltarLock();
  if (!st.avisado) { st.avisado = true; if (!st.pistaOk) sonar(); }
  sesionMedia('fin');
  clearInterval(st.tick); st.tick = null;
  setTimeout(function(){ if (st.terminado) cerrar(); }, 12000);
}
function cerrar(){ clearInterval(st.tick); st.tick = null; st.fin = 0; st.terminado = false; st.pausado = null; soltarLock(); pararPista(); sesionMedia('cerrar'); dibujar(); }
function iniciar(seg, etiqueta){
  seg = +seg || 90;
  st.fin = Date.now() + seg * 1000; st.dur = seg; st.pausado = null; st.etiqueta = etiqueta || ''; st.terminado = false; st.avisado = false;
  prepararAudio(); pedirLock(); sonarPista(seg); sesionMedia('inicio');
  clearInterval(st.tick); st.tick = setInterval(tick, 250);
  dibujar();
}
function pausar(){ if (!activo() || st.pausado != null) return; st.pausado = restante(); soltarLock(); pararPista(); sesionMedia('pausa'); dibujar(); }
function continuar(){ if (!activo() || st.pausado == null) return; st.fin = Date.now() + st.pausado * 1000; st.pausado = null; pedirLock(); sonarPista(restante()); sesionMedia('inicio'); dibujar(); }
function mas(seg){ if (!activo()) return; if (st.pausado != null) st.pausado += seg; else { st.fin += seg * 1000; sonarPista(restante()); } st.dur += seg; sesionMedia('inicio'); dibujar(); }

/* PISTA DE AUDIO. WAV mono de 8 bits a 8 kHz: silencio del largo pedido y tres pitidos de 880 Hz al final */
function wavDescanso(segSilencio){
  var sr = 8000, pitidos = [0, 0.35, 0.7], largo = 0.18, cola = 1.3, base = Math.max(0, Math.round(sr * segSilencio)), n = base + Math.round(sr * cola);
  var buf = new ArrayBuffer(44 + n), v = new DataView(buf), u = new Uint8Array(buf, 44);
  function txt(o, t){ for (var i = 0; i < t.length; i++) v.setUint8(o + i, t.charCodeAt(i)); }
  txt(0, 'RIFF'); v.setUint32(4, 36 + n, true); txt(8, 'WAVE'); txt(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, sr, true); v.setUint32(28, sr, true); v.setUint16(32, 1, true); v.setUint16(34, 8, true); txt(36, 'data'); v.setUint32(40, n, true);
  u.fill(128);
  pitidos.forEach(function(p){ var s0 = base + Math.round(sr * p), len = Math.round(sr * largo); for (var i = 0; i < len && s0 + i < n; i++) { var env = Math.min(1, i / (sr * 0.01), (len - i) / (sr * 0.04)); u[s0 + i] = 128 + Math.round(110 * env * Math.sin(2 * Math.PI * 880 * i / sr)); } });
  return new Blob([buf], { type: 'audio/wav' });
}
function pararPista(){
  if (st.pista) { try { st.pista.pause(); st.pista.removeAttribute('src'); st.pista.load(); } catch (e) {} st.pista = null; }
  if (st.pistaUrl) { try { URL.revokeObjectURL(st.pistaUrl); } catch (e) {} st.pistaUrl = null; }
  st.pistaOk = false;
}
/* hay que llamarla dentro del toque del usuario: iOS solo deja empezar audio así */
function sonarPista(seg){
  pararPista();
  try {
    if (typeof Audio !== 'function' || typeof URL === 'undefined' || !URL.createObjectURL) return;
    var a = new Audio(); st.pistaUrl = URL.createObjectURL(wavDescanso(seg)); a.src = st.pistaUrl; a.preload = 'auto';
    a.addEventListener('ended', function(){ if (st.pista === a) { tick(); } });
    st.pista = a;
    var p = a.play();
    if (p && p.then) { st.pistaOk = true; p.catch(function(){ if (st.pista === a) st.pistaOk = false; }); } else st.pistaOk = true;
  } catch (e) { st.pistaOk = false; }
}
/* pantalla de bloqueo: la pista se anuncia como "Descanso · ejercicio" con el tiempo que va; los botones de ahí pausan o siguen */
function sesionMedia(modo){
  var ms = navigator.mediaSession; if (!ms) return;
  try {
    if (modo === 'cerrar') { ms.metadata = null; ms.playbackState = 'none'; return; }
    if (modo === 'inicio' || modo === 'pausa') {
      ms.metadata = new MediaMetadata({ title: 'Descanso ' + fmt(st.dur), artist: st.etiqueta || 'Mis rutinas', album: 'Mis rutinas', artwork: [{ src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' }] });
      ms.setActionHandler('pause', function(){ pausar(); });
      ms.setActionHandler('play', function(){ continuar(); });
      ms.setActionHandler('stop', function(){ cerrar(); });
      try { ms.setActionHandler('seekforward', function(){ mas(15); }); } catch (e) {}
    }
    ms.playbackState = modo === 'pausa' ? 'paused' : modo === 'fin' ? 'none' : 'playing';
    if (modo === 'fin') ms.metadata = new MediaMetadata({ title: 'Descanso terminado', artist: st.etiqueta || 'Mis rutinas', album: 'Mis rutinas' });
    posicionMedia();
  } catch (e) {}
}
function posicionMedia(){
  var ms = navigator.mediaSession; if (!ms || !ms.setPositionState || !st.fin) return;
  try { ms.setPositionState({ duration: Math.max(1, st.dur), playbackRate: 1, position: Math.max(0, Math.min(st.dur, st.dur - restante())) }); } catch (e) {}
}

/* sonido de reserva: tres pitidos cortos con Web Audio cuando la pista no pudo sonar; el contexto se crea en el toque que inicia el cronómetro, como exige iOS */
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

window.Cronometro = { parse: parse, fmt: fmt, wavDescanso: wavDescanso, iniciar: iniciar, pausar: pausar, continuar: continuar, mas: mas, cerrar: cerrar, activo: activo, restante: restante, colocar: function(){ if (st.el && !st.el.hidden) colocar(); }, _estado: st };
})();
