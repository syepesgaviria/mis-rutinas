#!/usr/bin/env node
/* Genera sw.js con la lista de archivos a precachear y una versión derivada de su contenido.
   Se ejecuta antes de publicar: node tools/build-sw.js */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const raiz = path.resolve(__dirname, '..');
const fijos = ['index.html', 'app.css', 'app.js', 'runtime.js', 'manifest.webmanifest'];
const carpetas = ['fonts', 'icons', 'img'];

function listar(dir){
  return fs.readdirSync(path.join(raiz, dir)).filter(f => !f.startsWith('.') && !f.endsWith('.txt')).sort().map(f => dir + '/' + f);
}
const archivos = fijos.concat(...carpetas.map(listar));
const hash = crypto.createHash('sha256');
for (const a of archivos) hash.update(a).update(fs.readFileSync(path.join(raiz, a)));
const version = hash.digest('hex').slice(0, 12);

const plantilla = fs.readFileSync(path.join(__dirname, 'sw.template.js'), 'utf8');
const salida = plantilla.replace('__VERSION__', version).replace('__ARCHIVOS__', JSON.stringify(archivos, null, 0));
fs.writeFileSync(path.join(raiz, 'sw.js'), salida);
console.log('sw.js: versión ' + version + ', ' + archivos.length + ' archivos');
