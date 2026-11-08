/* Recorrido de la semana de descarga a tamaño iPhone. node tests/descarga.e2e.js [respaldo.json] */
'use strict';
const { chromium, devices } = require('playwright');
const path = require('path');
const BASE = 'http://localhost:8765/mis-rutinas/';
const SALIDA = path.join(__dirname, 'salida');
const respaldo = process.argv[2] || path.join(__dirname, '..', 'semilla', 'semilla-hoy-migrada.json');
let fallos = 0;
function ok(c, m){ console.log((c ? 'OK   ' : 'FALLO') + ' ' + m); if (!c) fallos++; }
const quieto = p => p.waitForFunction(() => !document.querySelector('.card.loading'));
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ ...devices['iPhone 13'], locale: 'es-CO', timezoneId: 'America/Bogota' });
  const page = await ctx.newPage();
  const errores = []; page.on('pageerror', e => errores.push(e.message)); page.on('console', m => { if (m.type() === 'error') errores.push(m.text()); });
  await page.goto(BASE, { waitUntil: 'load' }); await quieto(page);
  await page.click('.bottomnav [data-t="progreso"]'); await page.click('[data-a="open-datos"]');
  await page.setInputFiles('[data-f="resp-file"]', respaldo); await page.waitForSelector('[data-a="resp-restaurar-ok"]');
  await Promise.all([page.waitForNavigation({ waitUntil: 'load' }), page.click('[data-a="resp-restaurar-ok"]')]);
  await quieto(page); await page.waitForTimeout(600);

  // con los datos reales la racha es 0: la semana del 26 oct tuvo 2 sesiones y la del 19 oct ninguna
  await page.click('.bottomnav [data-t="tipos"]'); await page.click('[data-a="open-ciclocfg"]'); await page.waitForSelector('[data-f="equipo"][data-p="descargaCada"]');
  const txt = await page.locator('.vbody').innerText();
  ok(/Racha: 0 semanas/.test(txt), 'con los datos reales la racha es 0 (una semana floja la reinicia)');
  await page.click('[data-a="back"]'); await page.click('.bottomnav [data-t="semana"]'); await page.waitForTimeout(300);
  ok(await page.locator('[data-a="descarga-armar"]').count() === 0, 'sin aviso de descarga con racha 0');

  // se completan las semanas del 19 y 26 oct con sesiones anotadas (copias de un día hecho) para tener racha 5
  await page.evaluate(async () => {
    const r = await window.RutinasRuntime.abrir();
    const base = (await r.db.doc('dias/2026-11-02').get()).data();
    for (const f of ['2026-10-20', '2026-10-22', '2026-10-24', '2026-10-28', '2026-10-30']) { const d = JSON.parse(JSON.stringify(base)); d.fecha = f; delete d.rev; delete d.base; await r.db.doc('dias/' + f).set(d); }
  });
  await page.waitForTimeout(800);
  await page.click('.bottomnav [data-t="tipos"]'); await page.click('[data-a="open-ciclocfg"]'); await page.waitForSelector('[data-f="equipo"][data-p="descargaCada"]');
  ok(/Racha: 5 semanas/.test(await page.locator('.vbody').innerText()), 'con esas semanas la racha sube a 5');
  await page.click('[data-a="back"]'); await page.click('.bottomnav [data-t="semana"]'); await page.waitForTimeout(300);
  ok(await page.locator('[data-a="descarga-armar"]').count() === 0, 'con 5 de 6 todavía no hay aviso');

  // con descarga cada 2 semanas aparece el aviso
  await page.click('.bottomnav [data-t="tipos"]'); await page.click('[data-a="open-ciclocfg"]'); await page.waitForSelector('[data-f="equipo"][data-p="descargaCada"]');
  await page.fill('[data-f="equipo"][data-p="descargaCada"]', '2'); await page.dispatchEvent('[data-f="equipo"][data-p="descargaCada"]', 'change');
  await page.waitForFunction(() => { const c = window.RutinasRuntime._pruebas.estado.cols.ciclo.principal; return c && c.descargaCada === 2; }, null, { timeout: 5000 }).catch(() => {});
  const cfg = await page.evaluate(() => window.RutinasRuntime._pruebas.estado.cols.ciclo.principal);
  ok(cfg && cfg.descargaCada === 2 && cfg.factorDescarga === 0.6, 'el ajuste se guarda en el documento del ciclo');
  await page.click('[data-a="back"]'); await page.click('.bottomnav [data-t="semana"]'); await page.waitForTimeout(300);
  const aviso = await page.locator('.banner.pend:has([data-a="descarga-armar"])').innerText().catch(() => '');
  ok(/semanas seguidas de progresión/.test(aviso), 'aparece el aviso de descarga: ' + aviso.replace(/\n/g, ' ').slice(0, 90));
  await page.screenshot({ path: path.join(SALIDA, 'd1-aviso.png'), fullPage: true });

  // armar la próxima en descarga
  await page.click('[data-a="descarga-armar"]'); await page.waitForSelector('[data-a="ciclo-ok"]');
  ok(await page.isChecked('[data-a="ciclo-descarga"]'), 'el interruptor de descarga viene marcado');
  await page.screenshot({ path: path.join(SALIDA, 'd2-armar-descarga.png'), fullPage: true });
  await page.click('[data-a="ciclo-ok"]'); await page.waitForTimeout(800);
  const cab = await page.locator('.weeksub').innerText();
  ok(/Descarga/.test(cab), 'la semana queda marcada como descarga: ' + cab.replace(/\n/g, ' '));
  const pills = await page.locator('.daycard .pill').allInnerTexts();
  ok(pills.filter(t => t === 'Descarga').length >= 2 && !pills.some(t => /sube/.test(t)), 'los días llevan la etiqueta Descarga y sin propuestas de subir: ' + pills.join(', '));
  await page.screenshot({ path: path.join(SALIDA, 'd3-semana-descarga.png'), fullPage: true });
  await page.locator('.daycard:not(.muted)[data-a="open-dia"]').first().click(); await page.waitForSelector('.excard');
  const sets = await page.locator('.excard input[data-f="item"][data-p="sets"]').evaluateAll(els => els.map(e => +e.value));
  ok(sets.length && sets.every(n => n <= 3) && sets.some(n => n === 2), 'las series bajaron al 60% (' + sets.join(', ') + ')');
  ok(await page.locator('.sugbar').count() === 0, 'sin marcas de subir en la semana de descarga');
  await page.click('[data-a="back"]'); await page.waitForTimeout(300);
  ok(await page.locator('[data-a="descarga-armar"]').count() === 0, 'el aviso desaparece una vez armada la descarga');
  await page.click('[data-a="wk-prev"]'); await page.waitForTimeout(300);
  ok(await page.locator('[data-a="descarga-armar"]').count() === 0, 'tampoco aparece en la semana actual');

  // el respaldo conserva la marca y se restaura
  const marca = await page.evaluate(() => Object.values(window.RutinasRuntime._pruebas.estado.cols.dias).filter(d => d.descarga === true).length);
  ok(marca >= 2, 'los días de descarga quedan guardados con su marca (' + marca + ')');
  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await browser.close();
  console.log(fallos ? fallos + ' fallo(s)' : 'todo en orden'); process.exit(fallos ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
