/* Ejecuta la migración de la app (semanas antiguas a días independientes) sobre un respaldo y guarda el resultado
   como nuevo respaldo. node tests/migrar.js <entrada.json> <salida.json> */
'use strict';
const { chromium, devices } = require('playwright');
const path = require('path');
const fs = require('fs');
const BASE = 'http://localhost:8765/mis-rutinas/';
const SALIDA = path.join(__dirname, 'salida');
const [, , entrada, salida] = process.argv;
if (!entrada || !salida) { console.error('uso: node tests/migrar.js <entrada.json> <salida.json>'); process.exit(1); }

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ ...devices['iPhone 13'], locale: 'es-CO', timezoneId: 'America/Bogota' });
  const page = await ctx.newPage();
  const errores = [];
  page.on('pageerror', e => errores.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errores.push('console: ' + m.text()); });
  await page.goto(BASE, { waitUntil: 'load' });
  await page.waitForFunction(() => !document.querySelector('.card.loading'));
  await page.click('.bottomnav [data-t="progreso"]');
  await page.click('[data-a="open-datos"]');
  await page.setInputFiles('[data-f="resp-file"]', entrada);
  await page.waitForSelector('[data-a="resp-restaurar-ok"]');
  await Promise.all([page.waitForNavigation({ waitUntil: 'load' }), page.click('[data-a="resp-restaurar-ok"]')]);
  await page.waitForFunction(() => !document.querySelector('.card.loading'));
  await page.waitForTimeout(500);
  await page.click('[data-a="open-mig"]');
  await page.waitForSelector('[data-a="mig-ensayo"]');
  await page.click('[data-a="mig-ensayo"]');
  await page.waitForFunction(() => document.querySelector('[data-a="mig-ejecutar"]') && !document.querySelector('[data-a="mig-ejecutar"]').disabled, null, { timeout: 15000 });
  await page.screenshot({ path: path.join(SALIDA, 'mig-01-ensayo.png'), fullPage: true });
  console.log(await page.locator('.vbody .hint.small').nth(2).innerText().catch(() => ''));
  await page.fill('#mig-copia', 'respaldo previo: ' + path.basename(entrada));
  await page.check('#mig-clientes');
  await page.click('[data-a="mig-ejecutar"]');
  await page.waitForFunction(() => /Estado:\s*(completa|incompleta|detenida)/.test(document.querySelector('.vbody').innerText), null, { timeout: 60000 });
  await page.screenshot({ path: path.join(SALIDA, 'mig-02-ejecutada.png'), fullPage: true });
  const estado = await page.locator('.vbody .card').first().innerText();
  console.log(estado);
  const acta = await page.inputValue('#mig-acta');
  fs.writeFileSync(path.join(SALIDA, 'migracion-acta.json'), acta);
  const r = await page.evaluate(async () => { const r = await window.RutinasRuntime.respaldo.crear(); return { nombre: r.nombre, texto: await r.blob.text() }; });
  fs.writeFileSync(salida, r.texto);
  const d = JSON.parse(r.texto);
  console.log('guardado ' + salida + ': ' + Object.entries(d.colecciones).map(([k, v]) => k + '=' + Object.keys(v).length).join(', ') + ', fotos=' + Object.keys(d.fotos).length);
  if (errores.length) console.log('errores de consola: ' + errores.join(' | '));
  await browser.close();
})().catch(e => { console.error(e); process.exit(2); });
