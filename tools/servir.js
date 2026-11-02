#!/usr/bin/env node
/* Servidor estático mínimo para probar la app en local: node tools/servir.js [puerto] [prefijo]
   El prefijo (por ejemplo /mis-rutinas) imita la ruta de GitHub Pages. */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const raiz = path.resolve(__dirname, '..');
const puerto = +(process.argv[2] || 8765);
const prefijo = process.argv[3] || '';
const tipos = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8' };
http.createServer((req, res) => {
  let u = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (prefijo) { if (u === prefijo) { res.writeHead(302, { Location: prefijo + '/' }); return res.end(); } if (!u.startsWith(prefijo + '/')) { res.writeHead(404); return res.end('fuera del prefijo'); } u = u.slice(prefijo.length); }
  if (u.endsWith('/')) u += 'index.html';
  const f = path.join(raiz, u);
  if (!f.startsWith(raiz) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end('no encontrado'); }
  res.writeHead(200, { 'Content-Type': tipos[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
  fs.createReadStream(f).pipe(res);
}).listen(puerto, () => console.log('http://localhost:' + puerto + prefijo + '/'));
