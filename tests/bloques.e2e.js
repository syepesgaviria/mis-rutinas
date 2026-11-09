/* Recorrido de calentamiento y estiramiento a tamaño iPhone. node tests/bloques.e2e.js [respaldo.json] */
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
  await quieto(page); await page.waitForTimeout(600);
  const estado = () => page.evaluate(() => window.RutinasRuntime._pruebas.estado.cols);

  // 1. día tipo sin bloques: ofrece el sugerido según el nombre
  await page.click('.bottomnav [data-t="tipos"]'); await page.locator('[data-a="open-tipo"]:has-text("Pierna B"), .tipocard:has-text("Pierna B")').first().click(); await page.waitForSelector('.bloque[data-sec="calent"]');
  ok(await page.locator('.bloque[data-sec="calent"] [data-a="bloque-def"][data-q="pierna"]').count() === 1, 'en Pierna B el calentamiento sugerido es el de pierna');
  ok(await page.locator('.bloque[data-sec="estir"]').count() === 1, 'hay sección de estiramiento al final');
  await page.click('.bloque[data-sec="calent"] [data-a="bloque-def"][data-q="pierna"]'); await page.waitForTimeout(200);
  await page.click('.bloque[data-sec="estir"] [data-a="bloque-def"][data-q="pierna"]'); await page.waitForTimeout(700);
  let cols = await estado(); let tipo = Object.values(cols.diasTipo).find(t => t.name === 'Pierna B');
  ok(tipo.calent && tipo.calent.length === 8 && tipo.estir && tipo.estir.length === 5, 'el día tipo guarda 8 pasos de calentamiento y 5 de estiramiento');
  ok(await page.locator('.bloque[data-sec="calent"] .brow').count() === 8, 'en el día tipo los pasos se editan en filas');
  // editar un paso y quitar otro
  await page.fill('[data-f="bloque"][data-s="calent"][data-i="1"][data-p="t"]', '12/lado'); await page.waitForTimeout(700);
  await page.click('[data-a="bloque-del"][data-s="estir"][data-i="4"]'); await page.waitForTimeout(700);
  await page.click('[data-a="bloque-add"][data-s="estir"]'); await page.fill('[data-f="bloque"][data-s="estir"][data-i="4"][data-p="n"]', 'Aductores sentado'); await page.fill('[data-f="bloque"][data-s="estir"][data-i="4"][data-p="t"]', '30 s'); await page.waitForTimeout(700);
  cols = await estado(); tipo = Object.values(cols.diasTipo).find(t => t.name === 'Pierna B');
  ok(tipo.calent[1].t === '12/lado' && tipo.estir.length === 5 && tipo.estir[4].n === 'Aductores sentado', 'editar, quitar y agregar pasos se guarda: ' + JSON.stringify(tipo.estir[4]));
  await page.screenshot({ path: path.join(SALIDA, 'w1-tipo-bloques.png'), fullPage: true });

  // 2. un día nuevo armado con ese día tipo trae los bloques; se leen como lista y se marcan hechos
  await page.click('[data-a="back"]'); await page.click('.bottomnav [data-t="semana"]'); await page.click('[data-a="wk-next"]'); await page.waitForTimeout(400);
  const dia = page.locator('.daycard:not(.muted)[data-a="open-dia"]:has-text("Pierna B")').first();
  await dia.click(); await page.waitForSelector('.excard');
  if (await page.locator('.bsteps').count() === 0) { await page.click('[data-a="cargar"]'); await page.waitForTimeout(300); await page.locator('[data-a="cargar-pick"]:has-text("Pierna B")').first().click(); await page.waitForTimeout(600); }
  ok(await page.locator('.bloque[data-sec="calent"] .bsteps li').count() === 8, 'el día lee el calentamiento como lista de 8 pasos');
  ok(/Aductores sentado/.test(await page.locator('.bloque[data-sec="estir"]').innerText()), 'el estiramiento del día es el del día tipo ya editado');
  ok(await page.locator('.bloque .brow').count() === 0, 'en el día no hay campos de edición hasta tocar Editar');
  await page.check('[data-f="bloqueok"][data-s="calent"]'); await page.waitForTimeout(700);
  ok(await page.locator('.bloque[data-sec="calent"].ok').count() === 1, 'marcar Hecho atenúa el bloque');
  cols = await estado(); const d = Object.values(cols.dias).find(x => x.calentOk === true);
  ok(!!d && Array.isArray(d.calent) && d.calent.length === 8 && !d.estirOk, 'el día guarda sus pasos y la marca de hecho del calentamiento: ' + (d && d.fecha));
  await page.click('[data-a="bloque-edit"][data-s="estir"]'); await page.waitForTimeout(200);
  ok(await page.locator('.bloque[data-sec="estir"] .brow').count() === 5, 'Editar en el día muestra las filas');
  await page.screenshot({ path: path.join(SALIDA, 'w2-dia-bloques.png'), fullPage: true });

  // 3. recarga: todo sigue ahí
  await page.reload({ waitUntil: 'load' }); await quieto(page); await page.waitForTimeout(500);
  await page.click('.bottomnav [data-t="semana"]'); await page.click('[data-a="wk-next"]'); await page.waitForTimeout(400);
  await page.locator('.daycard:not(.muted)[data-a="open-dia"]:has-text("Pierna B")').first().click(); await page.waitForSelector('.excard');
  ok(await page.isChecked('[data-f="bloqueok"][data-s="calent"]') && await page.locator('.bloque[data-sec="estir"] .bsteps li').count() === 5, 'tras recargar, la marca y los pasos siguen');

  // 4. un día tipo de torso sugiere el de torso; un día viejo sin bloques sigue abriendo igual
  await page.click('[data-a="back"]'); await page.click('.bottomnav [data-t="tipos"]'); await page.locator('[data-a="open-tipo"]:has-text("Torso A"), .tipocard:has-text("Torso A")').first().click(); await page.waitForSelector('.bloque[data-sec="calent"]');
  ok(await page.locator('.bloque[data-sec="calent"] [data-a="bloque-def"][data-q="torso"]').count() === 1, 'en Torso A el sugerido es el de torso');
  await page.click('[data-a="back"]'); await page.click('.bottomnav [data-t="semana"]'); await page.click('[data-a="wk-prev"]'); await page.waitForTimeout(400);
  await page.locator('.daycard:not(.muted)[data-a="open-dia"]:has-text("Hecho")').first().click(); await page.waitForTimeout(500);
  ok(errores.length === 0, 'un día hecho sin bloques abre sin errores');

  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await browser.close();
  console.log(fallos ? fallos + ' fallos' : 'Todo bien');
  process.exit(fallos ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
