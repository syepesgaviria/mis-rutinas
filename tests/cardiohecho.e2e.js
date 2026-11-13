/* Recorrido del cardio marcado como hecho a tamaño iPhone. node tests/cardiohecho.e2e.js [respaldo.json]
   Santiago terminó un día de solo cardio (13 nov 2026) y la app lo dejaba pendiente: solo marcaba hecho un día con
   series anotadas. Ahora el cardio lleva su marca de hecho en el día. */
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
  /* fecha fija: los recorridos asumen que la semilla es "hoy" (domingo 8 nov 2026); el reloj sigue corriendo desde ahí */
  await page.clock.setSystemTime(new Date('2026-11-08T12:00:00-05:00'));
  const errores = []; page.on('pageerror', e => errores.push(e.message)); page.on('console', m => { if (m.type() === 'error') errores.push(m.text()); });
  await page.goto(BASE, { waitUntil: 'load' }); await quieto(page);
  await page.click('.bottomnav [data-t="progreso"]'); await page.click('[data-a="open-datos"]');
  await page.setInputFiles('[data-f="resp-file"]', respaldo); await page.waitForSelector('[data-a="resp-restaurar-ok"]');
  await Promise.all([page.waitForNavigation({ waitUntil: 'load' }), page.click('[data-a="resp-restaurar-ok"]')]);
  await quieto(page);
  /* el día tipo Cardio lo crea la app la primera vez (cardio aparte) */
  await page.waitForFunction(() => { const e = window.RutinasRuntime._pruebas.estado.cols; return !!e.ciclo.principal && !!e.ciclo.principal.cardio && !!e.ciclo.principal.cardio.tipo; }, null, { timeout: 8000 }).catch(() => {});
  await page.waitForTimeout(600);
  const dia = f => page.evaluate(f => window.RutinasRuntime._pruebas.estado.cols.dias[f] || null, f);
  const minCardio = async () => { const t = (await page.locator('.strip .stat b').nth(2).innerText()).replace(/\s/g, ''); const m = t.split('/'); return { hecho: Number(m[0].replace(',', '.')), plan: Number(m[1].replace(',', '.')) }; };
  const diasHechos = async () => Number((await page.locator('.strip .stat b').nth(0).innerText()).split('/')[0]);
  const tarjeta = i => page.locator('.daylist [data-a="open-dia"][data-i="' + i + '"]');
  const abrir = async i => { await tarjeta(i).click(); await page.waitForSelector('.vbody'); await page.waitForTimeout(250); };
  const volver = async () => { await page.click('[data-a="back"]'); await page.waitForTimeout(300); };

  // 1. un día de fuerza hecho con cardio: el cardio cuenta solo y la marca viene puesta; quitarla lo descuenta
  await page.click('.bottomnav [data-t="semana"]'); await page.waitForSelector('.strip');
  const base = await minCardio(), basedias = await diasHechos();
  await abrir(0);
  ok(await page.locator('[data-f="cardiook"]').count() === 1 && await page.isChecked('[data-f="cardiook"]'), 'Pierna A del lun 2 (con series) trae el cardio marcado como hecho');
  await page.uncheck('[data-f="cardiook"]'); await page.waitForTimeout(700);
  ok((await dia('2026-11-02')).cardioOk === false, 'quitar la marca en un día con series queda guardado como false');
  await volver();
  let m = await minCardio();
  ok(m.hecho === base.hecho - 20 && await tarjeta(0).locator('.pill.good').count() === 1, 'la franja descuenta los 20 min y el día sigue Hecho por sus series: ' + base.hecho + ' a ' + m.hecho);
  await abrir(0); await page.check('[data-f="cardiook"]'); await page.waitForTimeout(700); await volver();
  ok((await minCardio()).hecho === base.hecho && (await dia('2026-11-02')).cardioOk === true, 'volver a marcarlo lo cuenta de nuevo');

  // 2. un día de solo cardio (sáb 7, ya pasó): sin marca no está hecho; con la marca sí
  await abrir(5);
  await page.click('[data-a="cargar"]'); await page.waitForTimeout(300);
  await page.locator('[data-a="cargar-pick"]').filter({ has: page.locator('b', { hasText: /^Cardio$/ }) }).first().click(); await page.waitForTimeout(600);
  ok(await page.locator('[data-f="cardiook"]').count() === 1 && !(await page.isChecked('[data-f="cardiook"]')), 'el día de cardio muestra la marca Hecho sin poner');
  await volver();
  ok(await tarjeta(5).locator('.pill.good').count() === 0 && /Cardio/.test(await tarjeta(5).innerText()), 'sin la marca, la tarjeta del sábado no dice Hecho');
  await abrir(5); await page.check('[data-f="cardiook"]'); await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(SALIDA, 'h1-dia-cardio.png'), fullPage: true });
  await volver();
  m = await minCardio();
  ok(await tarjeta(5).locator('.pill.good').count() === 1, 'con la marca, la tarjeta del sábado dice Hecho');
  ok(m.hecho === base.hecho + 30 && m.plan === base.plan + 30 && await diasHechos() === basedias, 'la franja suma los 30 min hechos y los días de fuerza no cambian: ' + JSON.stringify(m));
  ok((await dia('2026-11-07')).cardioOk === true, 'la marca queda guardada en el día');
  await page.screenshot({ path: path.join(SALIDA, 'h2-semana.png'), fullPage: true });

  // 3. el resumen lo muestra hecho
  await page.click('[data-a="open-resumen"]'); await page.waitForSelector('.cardiorow');
  const fila = page.locator('.cardiorow:has-text("Sábado")');
  ok(await fila.count() === 1 && await fila.locator('.pill.good').count() === 1 && !(await fila.getAttribute('class')).includes('pend'), 'en el resumen el cardio del sábado sale Hecho');
  await volver();

  // 4. reorganizar no toca el día de cardio hecho (antes un día pasado sin series quedaba en descanso)
  await page.click('[data-a="open-reorg"]'); await page.waitForSelector('[data-a="ciclo-ok"]');
  const sab = page.locator('.daylist .daycard').nth(5), txt = (await sab.innerText()).replace(/\n/g, ' ');
  ok(/Cardio/.test(txt) && /Hecho/.test(txt) && !/Quita el plan/.test(txt), 'en la vista previa el sábado sigue en Cardio con Hecho: ' + txt);
  await page.click('[data-a="ciclo-ok"]'); await page.waitForTimeout(1000);
  const d7 = await dia('2026-11-07');
  ok(!!d7 && !d7.rest && d7.items.length === 1 && d7.items[0].ex === 'correr' && d7.cardioOk === true, 'tras reorganizar, el sábado conserva su cardio y la marca');

  // 5. tras recargar sigue todo; quitar la marca en un día sin series no deja rastro
  await page.reload({ waitUntil: 'load' }); await quieto(page); await page.waitForTimeout(600);
  await page.click('.bottomnav [data-t="semana"]'); await page.waitForSelector('.strip');
  ok(await tarjeta(5).locator('.pill.good').count() === 1 && (await dia('2026-11-02')).cardioOk === true, 'tras recargar, el sábado sigue Hecho y la marca del lunes también');
  await abrir(5); await page.uncheck('[data-f="cardiook"]'); await page.waitForTimeout(700); await volver();
  const d7b = await dia('2026-11-07');
  ok(!!d7b && !('cardioOk' in d7b) && await tarjeta(5).locator('.pill.good').count() === 0, 'quitar la marca en un día de solo cardio la borra y vuelve a pendiente');

  // 6. un día de cardio futuro no tiene marca: muestra el resumen de minutos
  await page.click('[data-a="wk-next"]'); await page.waitForTimeout(800);
  await page.waitForFunction(() => !!window.RutinasRuntime._pruebas.estado.cols.dias['2026-11-11'], null, { timeout: 8000 }).catch(() => {});
  await abrir(2);
  ok(await page.locator('[data-f="cardiook"]').count() === 0 && /30 min/.test(await page.locator('[data-live="cmeta"]').innerText()), 'el miércoles 11 (futuro) no trae la marca, solo los minutos');

  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await browser.close();
  console.log(fallos ? fallos + ' fallos' : 'Todo bien');
  process.exit(fallos ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
