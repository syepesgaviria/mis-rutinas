/* Service worker de Mis rutinas. Generado por tools/build-sw.js: no editar a mano.
   Precachea la app completa (código, fuentes, íconos e imágenes del catálogo) para que funcione sin conexión. */
'use strict';
var VERSION = '63872b7e7d82';
var CACHE = 'mis-rutinas-' + VERSION;
var ARCHIVOS = ["index.html","app.css","app.js","runtime.js","ciclo.js","progresion.js","manifest.webmanifest","fonts/archivo-latin-400-normal.woff2","fonts/archivo-latin-500-normal.woff2","fonts/archivo-latin-600-normal.woff2","fonts/archivo-latin-700-normal.woff2","fonts/archivo-latin-800-normal.woff2","fonts/archivo.css","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","img/abductora.jpg","img/abductora_0.jpg","img/abductora_1.jpg","img/aperturas.jpg","img/aperturas_0.jpg","img/aperturas_1.jpg","img/aperturasmanc.jpg","img/aperturasmanc_0.jpg","img/aperturasmanc_1.jpg","img/arnold.jpg","img/arnold_0.jpg","img/arnold_1.jpg","img/banca.jpg","img/banca_0.jpg","img/banca_1.jpg","img/bancacerrado.jpg","img/bancacerrado_0.jpg","img/bancacerrado_1.jpg","img/bancamanc.jpg","img/bancamanc_0.jpg","img/bancamanc_1.jpg","img/bici.jpg","img/bici_0.jpg","img/bici_1.jpg","img/buenosdias.jpg","img/buenosdias_0.jpg","img/buenosdias_1.jpg","img/bulgara.jpg","img/bulgara_0.jpg","img/bulgara_1.jpg","img/caminadora.jpg","img/caminadora_0.jpg","img/caminadora_1.jpg","img/correr.jpg","img/correr_0.jpg","img/correr_1.jpg","img/crunch.jpg","img/crunch_0.jpg","img/crunch_1.jpg","img/crunchpolea.jpg","img/crunchpolea_0.jpg","img/crunchpolea_1.jpg","img/curlbarra.jpg","img/curlbarra_0.jpg","img/curlbarra_1.jpg","img/curlcuerda.jpg","img/curlcuerda_0.jpg","img/curlcuerda_1.jpg","img/curlmanc.jpg","img/curlmanc_0.jpg","img/curlmanc_1.jpg","img/curlpolea.jpg","img/curlpolea_0.jpg","img/curlpolea_1.jpg","img/deadbug.jpg","img/deadbug_0.jpg","img/deadbug_1.jpg","img/dividida.jpg","img/dividida_0.jpg","img/dividida_1.jpg","img/dominadas.jpg","img/dominadas_0.jpg","img/dominadas_1.jpg","img/elevcolgado.jpg","img/elevcolgado_0.jpg","img/elevcolgado_1.jpg","img/elevpiernas.jpg","img/elevpiernas_0.jpg","img/elevpiernas_1.jpg","img/eliptica.jpg","img/eliptica_0.jpg","img/eliptica_1.jpg","img/escaladora.jpg","img/escaladora_0.jpg","img/escaladora_1.jpg","img/extcuad.jpg","img/extcuad_0.jpg","img/extcuad_1.jpg","img/extcuerda.jpg","img/extcuerda_0.jpg","img/extcuerda_1.jpg","img/extnuca.jpg","img/extnuca_0.jpg","img/extnuca_1.jpg","img/extpolea.jpg","img/extpolea_0.jpg","img/extpolea_1.jpg","img/facepull.jpg","img/facepull_0.jpg","img/facepull_1.jpg","img/femoral.jpg","img/femoral_0.jpg","img/femoral_1.jpg","img/femoralsent.jpg","img/femoralsent_0.jpg","img/femoralsent_1.jpg","img/flexdeclinadas.jpg","img/flexdeclinadas_0.jpg","img/flexdeclinadas_1.jpg","img/flexiones.jpg","img/flexiones_0.jpg","img/flexiones_1.jpg","img/fondos.jpg","img/fondos_0.jpg","img/fondos_1.jpg","img/fondosbanco.jpg","img/fondosbanco_0.jpg","img/fondosbanco_1.jpg","img/frances.jpg","img/frances_0.jpg","img/frances_1.jpg","img/frontal.jpg","img/frontal_0.jpg","img/frontal_1.jpg","img/frontales.jpg","img/frontales_0.jpg","img/frontales_1.jpg","img/goblet.jpg","img/goblet_0.jpg","img/goblet_1.jpg","img/hack.jpg","img/hack_0.jpg","img/hack_1.jpg","img/hiperext.jpg","img/hiperext_0.jpg","img/hiperext_1.jpg","img/hipthrust.jpg","img/hipthrust_0.jpg","img/hipthrust_1.jpg","img/inclinado.jpg","img/inclinado_0.jpg","img/inclinado_1.jpg","img/inclinadobarra.jpg","img/inclinadobarra_0.jpg","img/inclinadobarra_1.jpg","img/jalon.jpg","img/jalon_0.jpg","img/jalon_1.jpg","img/jaloncuerda.jpg","img/jaloncuerda_0.jpg","img/jaloncuerda_1.jpg","img/laterales.jpg","img/laterales_0.jpg","img/laterales_1.jpg","img/lazo.jpg","img/lazo_0.jpg","img/lazo_1.jpg","img/martillo.jpg","img/martillo_0.jpg","img/martillo_1.jpg","img/militar.jpg","img/militar_0.jpg","img/militar_1.jpg","img/pajaros.jpg","img/pajaros_0.jpg","img/pajaros_1.jpg","img/pantorrilla.jpg","img/pantorrilla_0.jpg","img/pantorrilla_1.jpg","img/pantorrillasent.jpg","img/pantorrillasent_0.jpg","img/pantorrillasent_1.jpg","img/patada.jpg","img/patada_0.jpg","img/patada_1.jpg","img/patadatri.jpg","img/patadatri_0.jpg","img/patadatri_1.jpg","img/pecdeck.jpg","img/pecdeck_0.jpg","img/pecdeck_1.jpg","img/pesomuerto.jpg","img/pesomuerto_0.jpg","img/pesomuerto_1.jpg","img/plancha.jpg","img/plancha_0.jpg","img/plancha_1.jpg","img/planchalat.jpg","img/planchalat_0.jpg","img/planchalat_1.jpg","img/pmr.jpg","img/pmr1.jpg","img/pmr1_0.jpg","img/pmr1_1.jpg","img/pmr_0.jpg","img/pmr_1.jpg","img/pmrmanc.jpg","img/pmrmanc_0.jpg","img/pmrmanc_1.jpg","img/predicador.jpg","img/predicador_0.jpg","img/predicador_1.jpg","img/prensa.jpg","img/prensa_0.jpg","img/prensa_1.jpg","img/pressmanc.jpg","img/pressmanc_0.jpg","img/pressmanc_1.jpg","img/puente.jpg","img/puente1p.jpg","img/puente1p_0.jpg","img/puente1p_1.jpg","img/puente_0.jpg","img/puente_1.jpg","img/pullover.jpg","img/pullover_0.jpg","img/pullover_1.jpg","img/pullthrough.jpg","img/pullthrough_0.jpg","img/pullthrough_1.jpg","img/remo.jpg","img/remo_0.jpg","img/remo_1.jpg","img/remoergo.jpg","img/remoergo_0.jpg","img/remoergo_1.jpg","img/remoinclmanc.jpg","img/remoinclmanc_0.jpg","img/remoinclmanc_1.jpg","img/remoinvertido.jpg","img/remoinvertido_0.jpg","img/remoinvertido_1.jpg","img/remomanc.jpg","img/remomanc_0.jpg","img/remomanc_1.jpg","img/remopolea.jpg","img/remopolea_0.jpg","img/remopolea_1.jpg","img/renegade.jpg","img/renegade_0.jpg","img/renegade_1.jpg","img/rueda.jpg","img/rueda_0.jpg","img/rueda_1.jpg","img/russian.jpg","img/russian_0.jpg","img/russian_1.jpg","img/sentadilla.jpg","img/sentadilla_0.jpg","img/sentadilla_1.jpg","img/stepup.jpg","img/stepup_0.jpg","img/stepup_1.jpg","img/trote.jpg","img/trote_0.jpg","img/trote_1.jpg","img/zancadaatras.jpg","img/zancadaatras_0.jpg","img/zancadaatras_1.jpg","img/zancadas.jpg","img/zancadas_0.jpg","img/zancadas_1.jpg"];

function urlDe(p){ return new URL(p, self.registration.scope).href; }

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){
    /* en lotes, para no abrir cientos de conexiones a la vez */
    var lotes = [], n = 20;
    for (var i = 0; i < ARCHIVOS.length; i += n) lotes.push(ARCHIVOS.slice(i, i + n));
    return lotes.reduce(function(p, lote){ return p.then(function(){ return c.addAll(lote.map(urlDe)); }); }, Promise.resolve());
  }).then(function(){ return self.skipWaiting(); }));
});

self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k.indexOf('mis-rutinas-') === 0 && k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }).then(function(){
    return self.clients.matchAll({ type: 'window' }).then(function(cs){ cs.forEach(function(c){ c.postMessage({ tipo: 'sw-activo', version: VERSION }); }); });
  }));
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  /* navegación: la app es una sola página; se sirve index.html desde la caché */
  if (req.mode === 'navigate') {
    e.respondWith(caches.match(urlDe('index.html')).then(function(r){ return r || fetch(req); }));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(function(r){
    if (r) return r;
    return fetch(req).then(function(resp){
      if (resp && resp.ok && url.pathname.indexOf('/img/') >= 0) { var copia = resp.clone(); caches.open(CACHE).then(function(c){ c.put(req, copia); }); }
      return resp;
    });
  }));
});

self.addEventListener('message', function(e){ if (e.data && e.data.tipo === 'version') { e.source && e.source.postMessage({ tipo: 'version', version: VERSION }); } });
