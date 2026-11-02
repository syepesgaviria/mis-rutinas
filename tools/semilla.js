#!/usr/bin/env node
/* Construye un archivo de respaldo (formato mis-rutinas-respaldo-1) a partir de una exportación de la base del
   artefacto: una carpeta con <coleccion>/<id>.json y una carpeta de fotos <id>.<ext>.
   node tools/semilla.js <carpeta-db> <carpeta-fotos> <salida.json> */
'use strict';
const fs = require('fs');
const path = require('path');
const [, , dirDb, dirFotos, salida] = process.argv;
if (!dirDb || !salida) { console.error('uso: node tools/semilla.js <carpeta-db> <carpeta-fotos> <salida.json>'); process.exit(1); }
const COLECCIONES = ['dias', 'semanas', 'diasTipo', 'pesos', 'medidas', 'perfil', 'ejercicios', 'migracion'];
const tipos = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.gif': 'image/gif' };
const doc = { formato: 'mis-rutinas-respaldo-1', exportado: new Date().toISOString(), app: 'semilla', colecciones: {}, fotos: {} };
let n = 0;
for (const c of COLECCIONES) {
  doc.colecciones[c] = {};
  const d = path.join(dirDb, c);
  if (!fs.existsSync(d)) continue;
  for (const f of fs.readdirSync(d).filter(x => x.endsWith('.json')).sort()) {
    doc.colecciones[c][f.slice(0, -5)] = JSON.parse(fs.readFileSync(path.join(d, f), 'utf8'));
    n++;
  }
}
if (dirFotos && fs.existsSync(dirFotos)) for (const f of fs.readdirSync(dirFotos).sort()) {
  const ext = path.extname(f).toLowerCase(); if (!tipos[ext]) continue;
  doc.fotos[path.basename(f, ext)] = { type: tipos[ext], datos: fs.readFileSync(path.join(dirFotos, f)).toString('base64') };
}
fs.writeFileSync(salida, JSON.stringify(doc));
console.log(salida + ': ' + n + ' documentos, ' + Object.keys(doc.fotos).length + ' fotos');
