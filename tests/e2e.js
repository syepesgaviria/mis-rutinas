/* Prueba de extremo a extremo a tamaño iPhone: arranque vacío, restauración del respaldo, navegación, sin conexión.
   node tests/e2e.js [respaldo.json]   (requiere el servidor: node tools/servir.js 8765 /mis-rutinas) */
'use strict';
const { chromium, devices } = require('playwright');
const path = require('path');
const fs = require('fs');
const BASE = 'http://localhost:8765/mis-rutinas/';
const SALIDA = path.join(__dirname, 'salida');
const respaldo = process.argv[2] || path.join(__dirname, '..', 'semilla', 'semilla-hoy-migrada.json');
let fallos = 0;
function ok(cond, msg){ console.log((cond ? 'OK   ' : 'FALLO') + ' ' + msg); if (!cond) fallos++; }

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ ...devices['iPhone 13'], locale: 'es-CO', timezoneId: 'America/Bogota' });
  const page = await ctx.newPage();
  /* fecha fija: los recorridos asumen que la semilla es "hoy" (domingo 8 nov 2026); el reloj sigue corriendo desde ahí */
  await page.clock.setSystemTime(new Date('2026-11-08T12:00:00-05:00'));
  const errores = [];
  page.on('pageerror', e => errores.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errores.push('console: ' + m.text()); });

  await page.goto(BASE, { waitUntil: 'load' });
  await page.waitForFunction(() => !document.querySelector('.card.loading'), null, { timeout: 10000 }).catch(() => {});
  await page.screenshot({ path: path.join(SALIDA, '01-vacio.png'), fullPage: true });
  ok(await page.locator('.bottomnav').count() === 1, 'barra inferior presente');
  ok(await page.locator('text=Sin acceso al guardado').count() === 0, 'sin aviso de nube');
  ok(errores.length === 0, 'sin errores de consola al arrancar' + (errores.length ? ': ' + errores.join(' | ') : ''));

  // Progreso > Datos y respaldo
  await page.click('.bottomnav [data-t="progreso"]');
  await page.waitForSelector('[data-a="open-datos"]');
  await page.click('[data-a="open-datos"]');
  await page.waitForSelector('[data-f="resp-file"]');
  await page.screenshot({ path: path.join(SALIDA, '02-datos-vacio.png'), fullPage: true });

  // restaurar la semilla
  await page.setInputFiles('[data-f="resp-file"]', respaldo);
  await page.waitForSelector('[data-a="resp-restaurar-ok"]');
  await page.screenshot({ path: path.join(SALIDA, '03-confirmar-restauracion.png'), fullPage: true });
  await Promise.all([page.waitForNavigation({ waitUntil: 'load' }), page.click('[data-a="resp-restaurar-ok"]')]);
  await page.waitForFunction(() => !document.querySelector('.card.loading'), null, { timeout: 10000 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SALIDA, '04-semana-actual.png'), fullPage: true });
  const semanaTxt = await page.locator('#app').innerText();
  ok(/Pierna|Torso/.test(semanaTxt), 'la semana actual muestra días con plan');

  // semana anterior
  await page.click('[data-a="wk-prev"]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(SALIDA, '05-semana-anterior.png'), fullPage: true });

  // abrir un día
  const dia = page.locator(".daycard:not(.muted)[data-a=\"open-dia\"]:not(:has-text(\"Hecho\"))").first();
  await dia.click();
  await page.waitForSelector('.excard');
  await page.screenshot({ path: path.join(SALIDA, '06-dia.png'), fullPage: true });
  const n = await page.locator('.excard').count();
  ok(n > 0, 'el día abre con ' + n + ' ejercicios');
  // editar un campo y comprobar que sobrevive a una recarga
  const campo = page.locator('.excard input[data-f="item"][data-p="kg"]').first();
  const kId = await campo.getAttribute('data-k');
  await campo.fill('33');
  await campo.dispatchEvent('input'); await campo.dispatchEvent('change');
  await page.waitForFunction(() => /Guardado/.test((document.querySelector('[data-live="save"]') || {}).textContent || ''), null, { timeout: 8000 }).catch(() => {});
  const estadoGuardado = await page.locator('[data-live="save"]').innerText().catch(() => '');
  ok(/Guardado/.test(estadoGuardado), 'el editor confirma el guardado (' + estadoGuardado + ')');
  await page.click('[data-a="back"]');
  await page.reload({ waitUntil: 'load' });
  await page.waitForFunction(() => !document.querySelector('.card.loading'));
  await page.waitForTimeout(400);
  await page.click('[data-a="wk-prev"]'); await page.waitForTimeout(300);
  await page.locator(".daycard:not(.muted)[data-a=\"open-dia\"]:not(:has-text(\"Hecho\"))").first().click();
  await page.waitForSelector('.excard');
  const valor = await page.locator('.excard input[data-f="item"][data-p="kg"][data-k="' + kId + '"]').inputValue();
  ok(valor === '33', 'el cambio persiste tras recargar (kg = ' + valor + ')');
  await page.click('[data-a="back"]');

  // ejercicios: foto propia
  await page.click('.bottomnav [data-t="ejercicios"]');
  await page.waitForTimeout(300);
  const propio = page.locator('text=Pantorrilla a una pierna').first();
  ok(await propio.count() === 1, 'el ejercicio propio aparece en la biblioteca');
  await propio.click();
  await page.waitForSelector('.media img');
  const fotoOk = await page.evaluate(() => { const i = document.querySelector('.media img'); return i && i.src.startsWith('blob:') && i.naturalWidth > 0; });
  ok(fotoOk, 'la foto del ejercicio propio carga desde el almacenamiento local');
  await page.screenshot({ path: path.join(SALIDA, '07-ejercicio-propio.png'), fullPage: true });
  await page.click('[data-a="back"]');

  // progreso con datos
  await page.click('.bottomnav [data-t="progreso"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(SALIDA, '08-progreso.png'), fullPage: true });
  const prog = await page.locator('#app').innerText();
  ok(/kg/.test(prog), 'progreso muestra pesajes');

  // sin conexión: recarga servida por el service worker
  await page.waitForFunction(() => navigator.serviceWorker && navigator.serviceWorker.controller, null, { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1500);
  await ctx.setOffline(true);
  let offlineOk = false;
  try { await page.reload({ waitUntil: 'load' }); await page.waitForFunction(() => !document.querySelector('.card.loading'), null, { timeout: 10000 }); offlineOk = (await page.locator('.bottomnav').count()) === 1; } catch (e) { offlineOk = false; }
  ok(offlineOk, 'la app abre sin conexión');
  if (offlineOk) {
    const imgOk = await page.evaluate(async () => { const r = await fetch('img/sentadilla.jpg'); return r.ok; });
    ok(imgOk, 'imágenes del catálogo disponibles sin conexión');
    await page.screenshot({ path: path.join(SALIDA, '09-sin-conexion.png'), fullPage: true });
  }
  await ctx.setOffline(false);

  // respaldo: el archivo generado contiene lo mismo que se cargó
  const resumen = await page.evaluate(async () => { const r = await window.RutinasRuntime.respaldo.crear(); const txt = await r.blob.text(); const d = JSON.parse(txt); return { nombre: r.nombre, cols: Object.fromEntries(Object.entries(d.colecciones).map(([k, v]) => [k, Object.keys(v).length])), fotos: Object.keys(d.fotos).length, bytes: txt.length }; });
  const orig = JSON.parse(fs.readFileSync(respaldo, 'utf8'));
  // la app puede haber armado sola la semana en curso al abrir (hasta 7 días nuevos); todo lo demás debe coincidir exacto
  const iguales = Object.keys(orig.colecciones).every(c => { const n = Object.keys(orig.colecciones[c]).length; return c === 'dias' ? resumen.cols[c] >= n && resumen.cols[c] <= n + 7 : n === resumen.cols[c]; });
  ok(iguales && resumen.fotos === Object.keys(orig.fotos).length, 'el respaldo generado conserva todos los documentos y fotos (' + JSON.stringify(resumen.cols) + ', ' + resumen.fotos + ' fotos, ' + Math.round(resumen.bytes / 1024) + ' KB)');

  ok(errores.length === 0, 'sin errores de consola en todo el recorrido' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await browser.close();
  console.log(fallos ? fallos + ' fallo(s)' : 'todo en orden');
  process.exit(fallos ? 1 : 0);
})().catch(e => { console.error('error en la prueba:', e); process.exit(2); });
