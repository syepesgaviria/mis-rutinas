/* Recorrido de la progresión automática a tamaño iPhone. node tests/progresion.e2e.js [respaldo.json] */
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

  // 1. equipo: la pantalla del ciclo muestra las cargas posibles de la barra con los discos de Santiago
  await page.click('.bottomnav [data-t="tipos"]'); await page.click('[data-a="open-ciclocfg"]'); await page.waitForSelector('[data-f="equipo"][data-p="barra"]');
  const cargas = await page.locator('.vbody').innerText();
  ok(/20, 30, 33,6, 40, 43,6, 50/.test(cargas), 'cargas posibles con barra 20 y discos 5, 6.8, 10, 15.9');
  await page.fill('[data-f="equipo"][data-p="barra"]', '15'); await page.dispatchEvent('[data-f="equipo"][data-p="barra"]', 'change'); await page.waitForTimeout(300);
  ok(/15, 25, 28,6, 35/.test(await page.locator('.vbody').innerText()), 'al cambiar la barra a 15 se recalculan las cargas');
  await page.fill('[data-f="equipo"][data-p="barra"]', '20'); await page.dispatchEvent('[data-f="equipo"][data-p="barra"]', 'change'); await page.waitForTimeout(500);
  const eq = await page.evaluate(() => window.RutinasRuntime._pruebas.estado.cols.ciclo.principal.equipo);
  ok(eq && eq.barra === 20 && eq.discos.join() === '5,6.8,10,15.9', 'el equipo queda guardado en el documento del ciclo');
  await page.screenshot({ path: path.join(SALIDA, 'p1-equipo.png'), fullPage: true });
  await page.click('[data-a="back"]');

  // 2. en el lunes hecho (Pierna A) se anota un ejercicio con barra al tope en todas las series
  await page.click('.bottomnav [data-t="semana"]'); await page.waitForTimeout(300);
  await page.locator('.daycard:has(.pill.good)').first().click(); await page.waitForSelector('.excard');
  const info = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.excard'));
    for (const c of cards) {
      const k = c.dataset.k, hr = c.querySelectorAll('[data-f="hr"]'), reps = c.querySelector('[data-f="item"][data-p="reps"]');
      const nombre = c.querySelector('.exname b').textContent;
      if (hr.length && reps && /-/.test(reps.value) && /barra/i.test(nombre)) return { k, n: hr.length, top: Math.max(...reps.value.match(/\d+/g).map(Number)), nombre, kg: c.querySelector('[data-f="item"][data-p="kg"]').value };
    }
    return null;
  });
  ok(!!info, 'hay un ejercicio con barra para anotar: ' + (info && info.nombre + ', ' + info.n + ' series, tope ' + info.top + ', ' + info.kg + ' kg'));
  const kgBase = 40;
  for (let i = 0; i < info.n; i++) {
    const hk = `[data-f="hk"][data-k="${info.k}"][data-i="${i}"]`, hr = `[data-f="hr"][data-k="${info.k}"][data-i="${i}"]`;
    await page.fill(hk, String(kgBase)); await page.dispatchEvent(hk, 'input'); await page.dispatchEvent(hk, 'change');
    await page.fill(hr, String(info.top)); await page.dispatchEvent(hr, 'input'); await page.dispatchEvent(hr, 'change');
  }
  await page.waitForTimeout(600);
  const guardado = await page.locator('[data-live="save"]').innerText().catch(() => '');
  ok(/Guardado/.test(guardado), 'las series anotadas quedan guardadas (' + guardado + ')');
  await page.click('[data-a="back"]'); await page.waitForTimeout(300);

  // 3. la semana siguiente se rearma: el mismo ejercicio llega con 43,6 y la marca "Sube"
  await page.click('[data-a="wk-next"]'); await page.waitForTimeout(400);
  await page.click('[data-a="open-reorg"]'); await page.waitForSelector('[data-a="ciclo-ok"]');
  await page.click('[data-a="ciclo-n"][data-n="4"]'); await page.waitForTimeout(150);
  await page.click('[data-a="ciclo-ok"]'); await page.waitForTimeout(800);
  const pill = await page.locator('.daycard .pill.accent').allInnerTexts();
  ok(pill.some(t => /sube/.test(t)), 'la semana muestra cuántos ejercicios suben: ' + pill.join(' | '));
  await page.screenshot({ path: path.join(SALIDA, 'p2-semana-sube.png'), fullPage: true });
  const diaPA = page.locator('.daycard:has(.nm:text-is("Pierna A"))').first();
  await diaPA.click(); await page.waitForSelector('.excard');
  const card = page.locator('.excard').filter({ has: page.locator('.exname b', { hasText: info.nombre.replace(/^[A-Z]\d/, '') }) }).first();
  const sug = await card.locator('.sugbar').innerText();
  ok(/Sube de 40 a 43,6/.test(sug), 'el editor muestra la propuesta con la siguiente carga de la barra: ' + sug.replace(/\n/g, ' '));
  const kgNuevo = await card.locator('[data-f="item"][data-p="kg"]').inputValue();
  ok(kgNuevo === '43,6' || kgNuevo === '43.6', 'el peso viene precargado con la propuesta (' + kgNuevo + ')');
  const otras = await page.locator('.sugbar').allInnerTexts();
  ok(otras.length >= 1, 'propuestas en el día: ' + otras.map(t => t.replace(/\n/g, ' ').split(':')[0]).join(' | '));
  await page.screenshot({ path: path.join(SALIDA, 'p3-editor-sube.png'), fullPage: true });
  const antes = await page.locator('.sugbar').count();
  await card.locator('[data-a="sug-undo"]').click(); await page.waitForTimeout(400);
  const kgVuelto = await card.locator('[data-f="item"][data-p="kg"]').inputValue();
  ok(kgVuelto === '40' && await page.locator('.sugbar').count() === antes - 1, 'tras "Dejar en 40" el peso vuelve a 40 y desaparece esa marca');
  // editar el peso a mano quita la marca de otro ejercicio
  const otro = page.locator('.excard:has(.sugbar:not([hidden])) [data-f="item"][data-p="kg"]').first();
  if (await otro.count()) { await otro.fill('99'); await otro.dispatchEvent('input'); await page.waitForTimeout(200); ok(await page.locator('.sugbar:not([hidden])').count() === antes - 2, 'editar el peso a mano quita la marca'); }
  await page.click('[data-a="back"]'); await page.waitForTimeout(300);

  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await browser.close();
  console.log(fallos ? fallos + ' fallo(s)' : 'todo en orden'); process.exit(fallos ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
