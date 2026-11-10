/* Recorrido del ciclo a tamaño iPhone: semana vacía con "Usar el ciclo", reorganizar la semana actual, editar el ciclo.
   node tests/ciclo.e2e.js [respaldo.json] */
'use strict';
const { chromium, devices } = require('playwright');
const path = require('path');
const BASE = 'http://localhost:8765/mis-rutinas/';
const SALIDA = path.join(__dirname, 'salida');
const respaldo = process.argv[2] || path.join(__dirname, '..', 'semilla', 'semilla-hoy-migrada.json');
let fallos = 0;
function ok(c, m){ console.log((c ? 'OK   ' : 'FALLO') + ' ' + m); if (!c) fallos++; }
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ ...devices['iPhone 13'], locale: 'es-CO', timezoneId: 'America/Bogota' });
  const page = await ctx.newPage();
  /* fecha fija: los recorridos asumen que la semilla es "hoy" (domingo 8 nov 2026); el reloj sigue corriendo desde ahí */
  await page.clock.setSystemTime(new Date('2026-11-08T12:00:00-05:00'));
  const errores = []; page.on('pageerror', e => errores.push(e.message)); page.on('console', m => { if (m.type() === 'error') errores.push(m.text()); });
  await page.goto(BASE, { waitUntil: 'load' }); await page.waitForFunction(() => !document.querySelector('.card.loading'));
  await page.click('.bottomnav [data-t="progreso"]'); await page.click('[data-a="open-datos"]');
  await page.setInputFiles('[data-f="resp-file"]', respaldo); await page.waitForSelector('[data-a="resp-restaurar-ok"]');
  await Promise.all([page.waitForNavigation({ waitUntil: 'load' }), page.click('[data-a="resp-restaurar-ok"]')]);
  await page.waitForFunction(() => !document.querySelector('.card.loading')); await page.waitForTimeout(500);

  // Días tipo: tarjeta del ciclo deducida de los nombres
  await page.click('.bottomnav [data-t="tipos"]'); await page.waitForSelector('[data-a="open-ciclocfg"]');
  const cicloTxt = await page.locator('[data-a="open-ciclocfg"]').innerText();
  ok(/Pierna A → Torso B → Pierna B → Torso A/.test(cicloTxt), 'el ciclo se deduce de los nombres: ' + cicloTxt.replace(/\n/g, ' '));
  await page.click('[data-a="open-ciclocfg"]'); await page.waitForSelector('[data-a="cc-mover"]');
  await page.screenshot({ path: path.join(SALIDA, 'c1-ciclo-cfg.png'), fullPage: true });
  // mover el segundo arriba y volver a bajarlo: queda igual y el documento se guarda
  await page.click('[data-a="cc-mover"][data-i="1"][data-dir="-1"]'); await page.waitForTimeout(100);
  await page.click('[data-a="cc-mover"][data-i="0"][data-dir="1"]'); await page.waitForTimeout(700);
  const guardado = await page.evaluate(() => window.RutinasRuntime._pruebas.estado.cols.ciclo.principal);
  ok(guardado && guardado.orden.length === 4 && guardado.dias[3].join() === '0,2,4', 'el ciclo editado se guarda en la colección ciclo');
  await page.click('[data-a="back"]');

  // semana siguiente vacía: Usar el ciclo
  await page.click('.bottomnav [data-t="semana"]'); await page.waitForTimeout(200);
  await page.click('[data-a="wk-next"]'); await page.waitForTimeout(600);
  // la semana siguiente se arma sola con el ciclo (mismos días que la anterior)
  // (los días de Cardio aparte no son sesiones de fuerza: se dejan fuera)
  const autoNombres = (await page.locator('.daycard:not(.muted) .nm').allInnerTexts()).filter(n => n !== 'Cardio');
  ok(autoNombres.length >= 2 && autoNombres.every(n => /Pierna|Torso/.test(n)), 'la semana siguiente se armó sola con el ciclo: ' + autoNombres.join(', '));
  await page.screenshot({ path: path.join(SALIDA, 'c2a-auto.png'), fullPage: true });
  // dos semanas adelante no hay armado automático: ahí se prueba la opción manual
  await page.click('[data-a="wk-next"]'); await page.waitForTimeout(500);
  ok(await page.locator('[data-a="new-ciclo"]').count() === 1, 'la semana vacía ofrece "Usar el ciclo"');
  const resumen = await page.locator('[data-a="new-ciclo"] small').innerText();
  ok(/Sigue en|Empieza en/.test(resumen), 'resumen de partida: ' + resumen);
  await page.click('[data-a="new-ciclo"]'); await page.waitForSelector('[data-a="ciclo-ok"]');
  await page.click('[data-a="ciclo-n"][data-n="3"]'); await page.waitForTimeout(150);
  const prev = (await page.locator('.daycard:not(.muted)').allInnerTexts()).filter(x => !/Cardio/.test(x));
  ok(prev.length === 3, 'con 3 días la vista previa muestra 3 sesiones: ' + prev.map(x => x.replace(/\n/g, ' ')).join(' | '));
  await page.screenshot({ path: path.join(SALIDA, 'c2-armar.png'), fullPage: true });
  await page.click('[data-a="ciclo-ok"]'); await page.waitForTimeout(800);
  const nombres = (await page.locator('.daycard:not(.muted) .nm').allInnerTexts()).filter(n => n !== 'Cardio');
  ok(nombres.length === 3 && nombres.every(n => /Pierna|Torso/.test(n)), 'la semana quedó armada: ' + nombres.join(', '));
  const dias = await page.evaluate(() => Object.keys(window.RutinasRuntime._pruebas.estado.cols.dias).length);
  await page.screenshot({ path: path.join(SALIDA, 'c3-semana-armada.png'), fullPage: true });

  // semana actual: reorganizar a 2 días, el lunes hecho no se toca
  await page.click('[data-a="wk-prev"]'); await page.waitForTimeout(300); await page.click('[data-a="wk-prev"]'); await page.waitForTimeout(300);
  const hechoAntes = await page.locator('.daycard:has(.pill.good)').count();
  ok(await page.locator('[data-a="open-reorg"]').count() === 1, 'la semana con plan ofrece "Reorganizar"');
  await page.click('[data-a="open-reorg"]'); await page.waitForSelector('[data-a="ciclo-ok"]');
  await page.click('[data-a="ciclo-n"][data-n="2"]'); await page.waitForTimeout(150);
  const deshab = await page.locator('.daycard:disabled').count();
  ok(deshab >= 1, 'los días hechos o pasados no se pueden elegir (' + deshab + ' bloqueados)');
  await page.screenshot({ path: path.join(SALIDA, 'c4-reorganizar.png'), fullPage: true });
  await page.click('[data-a="ciclo-ok"]'); await page.waitForTimeout(800);
  const hechoDespues = await page.locator('.daycard:has(.pill.good)').count();
  ok(hechoDespues === hechoAntes, 'los días hechos siguen igual tras reorganizar (' + hechoDespues + ')');
  await page.screenshot({ path: path.join(SALIDA, 'c5-reorganizada.png'), fullPage: true });

  // el respaldo incluye el ciclo y restaura
  const r = await page.evaluate(async () => { const r = await window.RutinasRuntime.respaldo.crear(); const d = JSON.parse(await r.blob.text()); return Object.keys(d.colecciones.ciclo).length; });
  ok(r === 1, 'el respaldo incluye la colección ciclo');
  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await browser.close();
  console.log(fallos ? fallos + ' fallo(s)' : 'todo en orden'); process.exit(fallos ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
