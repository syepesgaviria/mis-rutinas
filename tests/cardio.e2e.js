/* Recorrido del cardio aparte a tamaño iPhone. node tests/cardio.e2e.js [respaldo.json] */
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
  const estado = () => page.evaluate(() => { const e = window.RutinasRuntime._pruebas.estado.cols; const id = Object.keys(e.diasTipo).find(k => e.diasTipo[k].name === 'Cardio'), t = id ? Object.assign({ id: id }, e.diasTipo[id]) : null; return { tipo: t, cfg: e.ciclo.principal && e.ciclo.principal.cardio, dias: Object.values(e.dias).filter(d => t && d.tipo === t.id).map(d => d.fecha).sort() }; });

  // 1. primera vez: la app crea el día tipo Cardio y lo deja para miércoles y sábado
  const esperaTipo = () => page.waitForFunction(() => { const e = window.RutinasRuntime._pruebas.estado.cols; const id = Object.keys(e.diasTipo).find(k => e.diasTipo[k].name === 'Cardio'); return !!id && !!e.ciclo.principal && e.ciclo.principal.cardio && e.ciclo.principal.cardio.tipo === id; }, null, { timeout: 8000 }).catch(() => {});
  await esperaTipo();
  let e = await estado();
  ok(!!e.tipo && e.tipo.items.length === 1 && e.tipo.items[0].ex === 'correr' && e.tipo.items[0].min === '30', 'se creó el día tipo Cardio con 30 min: ' + JSON.stringify(e.tipo && e.tipo.items[0]));
  ok(e.cfg && e.cfg.tipo === e.tipo.id && JSON.stringify(e.cfg.dias) === '[2,5]', 'el ciclo lo tiene configurado para mié y sáb: ' + JSON.stringify(e.cfg));
  ok(e.dias.length === 0, 'la semana en curso (ya pasaron mié y sáb) no recibe cardio');

  // 2. la semana siguiente se arma sola con cardio en mié y sáb
  await page.click('.bottomnav [data-t="semana"]'); await page.click('[data-a="wk-next"]'); await page.waitForTimeout(600);
  await page.waitForFunction(() => !!window.RutinasRuntime._pruebas.estado.cols.dias['2026-11-14'], null, { timeout: 8000 }).catch(() => {});
  const cards = (await page.locator('.daycard').allInnerTexts()).map(x => x.replace(/\n/g, ' '));
  ok(/^MIÉ 11 Cardio/.test(cards[2]) && /^SÁB 14 Cardio/.test(cards[5]) && /30 min/.test(cards[2]), 'mié 11 y sáb 14 traen Cardio: ' + cards[2] + ' / ' + cards[5]);
  ok(/Torso B/.test(cards[0]) && /Pierna B/.test(cards[3]) && /Descanso/.test(cards[1]), 'los días de pesas y el martes de descanso siguen igual');
  e = await estado();
  ok(JSON.stringify(e.dias) === '["2026-11-11","2026-11-14"]', 'los días de cardio quedan guardados: ' + JSON.stringify(e.dias));
  await page.screenshot({ path: path.join(SALIDA, 'x1-semana-cardio.png'), fullPage: true });

  // 3. reorganizar con 3 días conserva el cardio y no lo cuenta como reemplazo
  await page.click('[data-a="open-reorg"]'); await page.waitForSelector('[data-a="ciclo-ok"]');
  await page.click('[data-a="ciclo-n"][data-n="3"]'); await page.waitForTimeout(150);
  const prev = (await page.locator('.daylist .daycard').allInnerTexts()).map(x => x.replace(/\n/g, ' '));
  ok(/Cardio/.test(prev[5]) && !/Reemplaza/.test(prev[5]), 'en la vista previa el sábado sigue en Cardio sin aviso de reemplazo: ' + prev[5]);
  await page.click('[data-a="ciclo-ok"]'); await page.waitForTimeout(1000);
  e = await estado();
  ok(e.dias.indexOf('2026-11-14') >= 0, 'tras reorganizar el sábado sigue con cardio');
  ok(await page.locator('.daycard:has-text("Cardio")').count() >= 1, 'la semana muestra el cardio');

  // 4. ajustes: cambiar un día y quitar el día tipo
  await page.click('.bottomnav [data-t="tipos"]'); await page.click('[data-a="open-ciclocfg"]'); await page.waitForSelector('#cardio-tipo');
  ok(await page.locator('#cardio-tipo').inputValue() === e.tipo.id, 'la pantalla Ciclo muestra el día tipo Cardio elegido');
  await page.click('[data-a="cc-cardio-dia"][data-i="1"]'); await page.waitForTimeout(600);
  e = await estado(); ok(JSON.stringify(e.cfg.dias) === '[1,2,5]', 'marcar el martes se guarda: ' + JSON.stringify(e.cfg.dias));
  await page.selectOption('#cardio-tipo', ''); await page.waitForTimeout(600);
  e = await estado(); ok(e.cfg.tipo === null, 'elegir Ninguno quita el cardio aparte');
  await page.reload({ waitUntil: 'load' }); await quieto(page); await page.waitForTimeout(600);
  e = await estado(); ok(e.cfg.tipo === null && e.tipo, 'tras recargar no se vuelve a crear ni a configurar solo');
  await page.screenshot({ path: path.join(SALIDA, 'x2-ciclo-cardio.png'), fullPage: true });

  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await browser.close();
  console.log(fallos ? fallos + ' fallos' : 'Todo bien');
  process.exit(fallos ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
