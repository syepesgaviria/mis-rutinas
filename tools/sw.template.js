/* Service worker de Mis rutinas. Generado por tools/build-sw.js: no editar a mano.
   Precachea la app completa (código, fuentes, íconos e imágenes del catálogo) para que funcione sin conexión. */
'use strict';
var VERSION = '__VERSION__';
var CACHE = 'mis-rutinas-' + VERSION;
var ARCHIVOS = __ARCHIVOS__;

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
