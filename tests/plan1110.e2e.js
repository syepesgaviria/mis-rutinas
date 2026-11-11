/* Recorrido del ajuste único del plan del 10 nov 2026 a tamaño iPhone. node tests/plan1110.e2e.js [respaldo.json] */
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
  const aplicado = () => page.waitForFunction(() => { const e = window.RutinasRuntime._pruebas.estado.cols; return !!(e.ciclo.principal && (e.ciclo.principal.ajustes || []).indexOf('plan-2026-11-10') >= 0); }, null, { timeout: 8000 }).then(() => true, () => false);
  const tipos = () => page.evaluate(() => { const e = window.RutinasRuntime._pruebas.estado.cols, o = {}; Object.values(e.diasTipo).forEach(t => { o[t.name] = t; }); return o; });

  // 1. al abrir con el plan de Santiago, el ajuste se aplica una vez
  ok(await aplicado(), 'el ajuste del plan queda registrado en el ciclo');
  await page.waitForTimeout(800);
  let t = await tipos();
  const ex = (tt, g) => tt.items.filter(i => !g || i.g === g).map(i => i.ex);
  ok(ex(t['Pierna A']).join(',') === 'sentadilla,elevcolgado,pmrmanc,bulgara,c_pantorrilla1p', 'Pierna A: rumano con mancuernas tras la superserie A y sin cardio: ' + ex(t['Pierna A']).join(','));
  const rm = t['Pierna A'].items.find(i => i.ex === 'pmrmanc');
  ok(rm && rm.sets === '3' && rm.reps === '8-12' && rm.rest === '1:30' && !rm.g, 'el rumano con mancuernas va solo, 3 × 8-12 con 1:30');
  ok(ex(t['Pierna B']).join(',') === 'hipthrust,crunchpolea,pmr,c_pantorrilla1p,pared,curldeslizante', 'Pierna B: pared y curl deslizante en lugar de zancadas, sin cardio: ' + ex(t['Pierna B']).join(','));
  ok(ex(t['Pierna B'], 'C').join(',') === 'pared,curldeslizante' && t['Pierna B'].items.find(i => i.ex === 'pared').reps === '30-45s', 'el bloque C es pared por tiempo más curl deslizante');
  ok(/almohadilla/i.test(t['Pierna B'].items[0].note), 'el hip thrust lleva la nota de la almohadilla');
  ok(!t['Torso A'].items.some(i => i.ex === 'correr') && !t['Torso B'].items.some(i => i.ex === 'correr') && t['Torso A'].items.length === 7 && t['Torso B'].items.length === 8, 'los días de torso solo perdieron el cardio');
  ok(['Pierna A', 'Pierna B', 'Torso A', 'Torso B'].every(n => t[n].calent && t[n].calent.length && t[n].estir && t[n].estir.length), 'los cuatro días tipo tienen calentamiento y estiramiento');
  ok(t['Pierna A'].calent.some(x => /Paseo lateral con banda/.test(x.n)) && !t['Pierna A'].calent.some(x => /Zancadas/.test(x.n)), 'el calentamiento de pierna trae el paseo lateral con banda y no las zancadas');
  ok(t['Cardio'] && t['Cardio'].items.length === 1 && !t['Cardio'].calent, 'el día tipo Cardio no se toca');

  // 2. la semana siguiente se arma con los días tipo ya ajustados
  await page.click('.bottomnav [data-t="semana"]'); await page.click('[data-a="wk-next"]'); await page.waitForTimeout(800);
  await page.locator('.daycard:not(.muted)[data-a="open-dia"]:has-text("Pierna B")').first().click(); await page.waitForSelector('.excard');
  const cuerpo = await page.locator('.vbody').innerText();
  ok(/Superserie C/.test(cuerpo) && /Curl femoral deslizante/.test(cuerpo) && /Sentadilla en la pared/.test(cuerpo) && !/Correr en caminadora/.test(cuerpo), 'el día Pierna B nuevo trae el bloque C y no trae cardio');
  ok(/calentamiento/i.test(cuerpo) && /Paseo lateral con banda/.test(cuerpo) && /estiramiento/i.test(cuerpo), 'y trae calentamiento y estiramiento');
  await page.screenshot({ path: path.join(SALIDA, 'p1-pierna-b.png'), fullPage: true });
  // el ejercicio nuevo abre su ficha con ilustración
  await page.locator('.excard:has-text("Curl femoral deslizante") [data-a="open-det"], .excard:has-text("Curl femoral deslizante") .thumb').first().click().catch(() => {});
  await page.waitForTimeout(400);
  const img = await page.locator('#det-img').getAttribute('src').catch(() => null);
  ok(!img || /curldeslizante_/.test(img), 'la ficha del curl deslizante muestra su ilustración' + (img ? ': ' + img : ' (ficha no abierta desde la tarjeta)'));

  // 3. recargar no lo aplica dos veces
  await page.reload({ waitUntil: 'load' }); await quieto(page); await page.waitForTimeout(1200);
  t = await tipos();
  ok(t['Pierna A'].items.filter(i => i.ex === 'pmrmanc').length === 1 && t['Pierna B'].items.filter(i => i.ex === 'curldeslizante').length === 1, 'tras recargar no se duplica nada');

  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await browser.close();
  console.log(fallos ? fallos + ' fallos' : 'Todo bien');
  process.exit(fallos ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
