/* Recorrido de la sentadilla en la pared a tamaño iPhone, con un respaldo mínimo armado aquí (no usa datos personales):
   cambiar zancadas por la pared en el día y en su día tipo, el rango pasa a segundos, la ilustración carga, se vuelve
   por la zancada hacia atrás con repeticiones y al agregarla desde la biblioteca llega en segundos.
   node tests/pared.e2e.js   (requiere el servidor: node tools/servir.js 8765 /mis-rutinas) */
'use strict';
const { chromium, devices } = require('playwright');
const path = require('path');
const fs = require('fs');
const BASE = 'http://localhost:8765/mis-rutinas/';
const SALIDA = path.join(__dirname, 'salida');
let fallos = 0;
function ok(c, m){ console.log((c ? 'OK   ' : 'FALLO') + ' ' + m); if (!c) fallos++; }
const quieto = p => p.waitForFunction(() => !document.querySelector('.card.loading'));

/* lunes 9 nov 2026: Pierna B con hip thrust y zancadas, con propuesta de subir en las zancadas */
const items = k => [
  { k: k + '1', ex: 'hipthrust', sets: '3', reps: '8-12', kg: '60', rest: '1:30' },
  { k: k + '2', ex: 'zancadas', sets: '3', reps: '8-12', kg: '25', rest: '2:00', sug: '20>25' }
];
const respaldo = {
  formato: 'mis-rutinas-respaldo-1', exportado: '2026-11-09T12:00:00.000Z', app: 'prueba', fotos: {},
  colecciones: {
    migracion: { 'dias-1': { esquema: 1, id: 'dias-1', estado: 'completa', inicio: '2026-11-05T12:00:00.000Z', fin: '2026-11-05T12:01:00.000Z' } },
    diasTipo: { pb: { name: 'Pierna B', items: items('t'), ejemplo: false, updatedAt: '2026-11-08T12:00:00.000Z' } },
    dias: { '2026-11-09': { esquema: 1, fecha: '2026-11-09', name: 'Pierna B', rest: false, tipo: 'pb', items: items('d') } }
  }
};

(async () => {
  fs.mkdirSync(SALIDA, { recursive: true });
  const archivo = path.join(SALIDA, 'pared-respaldo.json');
  fs.writeFileSync(archivo, JSON.stringify(respaldo));
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ ...devices['iPhone 13'], locale: 'es-CO', timezoneId: 'America/Bogota' });
  const page = await ctx.newPage();
  await page.clock.setSystemTime(new Date('2026-11-09T18:30:00-05:00'));
  const errores = []; page.on('pageerror', e => errores.push(e.message)); page.on('console', m => { if (m.type() === 'error') errores.push(m.text()); });
  await page.goto(BASE, { waitUntil: 'load' }); await quieto(page);
  await page.click('.bottomnav [data-t="progreso"]'); await page.click('[data-a="open-datos"]');
  await page.setInputFiles('[data-f="resp-file"]', archivo); await page.waitForSelector('[data-a="resp-restaurar-ok"]');
  await Promise.all([page.waitForNavigation({ waitUntil: 'load' }), page.click('[data-a="resp-restaurar-ok"]')]);
  await quieto(page); await page.waitForTimeout(600);

  // el día de hoy, con las zancadas
  await page.locator('.daycard:not(.muted)[data-a="open-dia"]').first().click(); await page.waitForSelector('.excard');
  const zancadas = page.locator('.excard', { hasText: 'Zancadas' }).first();
  ok(await zancadas.count() === 1, 'el día trae las zancadas');
  await zancadas.locator('[data-a="swap-open"]').click(); await page.waitForSelector('.swaprow');
  const primera = page.locator('.liblist').first().locator('.swaprow').first();
  const txt = await primera.innerText();
  ok(/Sentadilla en la pared/.test(txt) && /si molesta la rodilla/.test(txt), 'la primera recomendada es la sentadilla en la pared: ' + txt.replace(/\s+/g, ' '));
  await page.screenshot({ path: path.join(SALIDA, 'p1-recomendadas.png') });
  await primera.locator('[data-a="swap-pick"]').click();
  const tambien = page.locator('[data-a="swap-do"][data-all="1"]');
  ok(/También en Pierna B/.test(await tambien.innerText()), 'ofrece cambiarla también en el día tipo');
  await tambien.click(); await page.waitForSelector('.excard');

  const pared = page.locator('.excard', { hasText: 'Sentadilla en la pared' }).first();
  ok(await pared.count() === 1 && await page.locator('.excard', { hasText: 'Zancadas' }).count() === 0, 'en el día quedó la pared en lugar de las zancadas');
  ok(await pared.locator('[data-p="reps"]').inputValue() === '30-45s', 'el rango pasó a segundos: ' + await pared.locator('[data-p="reps"]').inputValue());
  ok(/Tiempo/.test(await pared.locator('.fld').nth(1).innerText()), 'la casilla dice Tiempo en lugar de Reps');
  ok(await pared.locator('[data-p="kg"]').inputValue() === '' && await pared.locator('.sugbar').count() === 0, 'sin peso ni propuesta de subir heredada de las zancadas');
  ok(await pared.locator('[data-p="sets"]').inputValue() === '3' && await pared.locator('[data-p="rest"]').inputValue() === '2:00', 'conserva series y descanso del ejercicio que reemplazó');
  await page.screenshot({ path: path.join(SALIDA, 'p2-dia.png'), fullPage: true });

  // la ilustración: miniatura, inicio y final
  const fotos = await page.evaluate(async () => Promise.all(['img/pared.jpg', 'img/pared_0.jpg', 'img/pared_1.jpg'].map(u => fetch(u).then(r => r.ok && r.headers.get('content-type')))));
  ok(fotos.every(t => /jpeg/.test(t || '')), 'las tres imágenes se sirven: ' + fotos.join(', '));
  await pared.locator('[data-a="open-det"]').click(); await page.waitForSelector('#det-img');
  await page.waitForFunction(() => { const i = document.getElementById('det-img'); return i && i.complete && i.naturalWidth > 0; });
  const det = await page.evaluate(() => ({ src: document.getElementById('det-img').getAttribute('src'), alt: document.getElementById('det-img').alt, txt: document.querySelector('.view:last-of-type, .vbody').innerText }));
  ok(/img\/pared_[01]\.jpg/.test(det.src) && /^Ilustración de Sentadilla en la pared/.test(det.alt), 'el detalle muestra la ilustración: ' + det.src + ' · ' + det.alt);
  ok(/esquemática/.test(await page.locator('.credit').innerText()), 'el crédito la marca como ilustración esquemática');
  ok(/rodilla molesta/.test(await page.locator('body').innerText()), 'los pasos dicen qué hacer si la rodilla molesta');
  await page.screenshot({ path: path.join(SALIDA, 'p3-detalle.png'), fullPage: true });
  await page.locator('[data-a="back"]').last().click(); await page.waitForSelector('.excard');

  // queda guardado tras recargar, también en el día tipo
  await page.reload({ waitUntil: 'load' }); await quieto(page); await page.waitForTimeout(400);
  await page.click('.bottomnav [data-t="tipos"]'); await page.locator('[data-a="open-tipo"]', { hasText: 'Pierna B' }).first().click(); await page.waitForSelector('.excard');
  const enTipo = page.locator('.excard', { hasText: 'Sentadilla en la pared' }).first();
  ok(await enTipo.count() === 1 && await enTipo.locator('[data-p="reps"]').inputValue() === '30-45s', 'el día tipo Pierna B quedó con la pared en segundos');

  // volver a moverse: desde la pared, la zancada hacia atrás vuelve a repeticiones (solo en el día tipo)
  await enTipo.locator('[data-a="swap-open"]').click(); await page.waitForSelector('.swaprow');
  const vuelta = page.locator('.liblist').first().locator('.swaprow', { hasText: 'Zancada hacia atrás' }).first();
  ok(await vuelta.count() === 1, 'la zancada hacia atrás está entre las recomendadas de la pared');
  await vuelta.locator('[data-a="swap-pick"]').click();
  const cambiar = page.locator('[data-a="swap-do"]').first();
  if (await cambiar.count()) await cambiar.click();
  await page.waitForSelector('.excard');
  const atras = page.locator('.excard', { hasText: 'Zancada hacia atrás' }).first();
  ok(await atras.count() === 1 && await atras.locator('[data-p="reps"]').inputValue() === '8-12', 'al salir de la pared el rango vuelve a 8-12');
  ok(/Reps/.test(await atras.locator('.fld').nth(1).innerText()), 'y la casilla vuelve a decir Reps');

  // agregada desde la biblioteca llega en segundos
  await page.click('[data-a="open-lib"]'); await page.waitForSelector('#liblist');
  await page.fill('#lib-q', 'pared'); await page.waitForTimeout(250);
  await page.check('input[data-f="libsel"][data-id="pared"]'); await page.click('[data-a="lib-add"]'); await page.waitForSelector('.excard');
  const nueva = page.locator('.excard', { hasText: 'Sentadilla en la pared' }).last();
  ok(await nueva.count() === 1 && await nueva.locator('[data-p="reps"]').inputValue() === '30-45s', 'agregada desde la biblioteca trae 30-45s');
  await page.screenshot({ path: path.join(SALIDA, 'p4-tipo.png'), fullPage: true });

  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await browser.close();
  console.log(fallos ? 'FALLARON ' + fallos : 'TODO OK');
  process.exit(fallos ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
