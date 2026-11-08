/* Recorrido del cronómetro de descanso a tamaño iPhone. node tests/cronometro.e2e.js [respaldo.json] */
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

  await page.locator('.daycard:not(.muted)[data-a="open-dia"]').first().click(); await page.waitForSelector('.excard');
  const botones = await page.locator('.restbtn').allInnerTexts();
  ok(botones.length >= 3, 'cada ejercicio de fuerza tiene su botón de descanso: ' + botones.join(', '));
  const grupo = await page.evaluate(() => { const c = Array.from(document.querySelectorAll('.excard')).find(x => x.querySelector('.glab, .gtag') || x.classList.contains('ing')); return c ? { rest: c.closest('.exlist') && (c.closest('.exlist').querySelector('[data-f="grest"]') || {}).value, btn: (c.querySelector('.restbtn') || {}).textContent } : null; });
  ok(grupo && grupo.btn && grupo.rest && grupo.btn.trim() === grupo.rest.trim(), 'un ejercicio en superserie usa el descanso del grupo (' + JSON.stringify(grupo) + ')');
  // el encabezado del grupo también tiene un botón grande "Iniciar" al lado del descanso
  const gstart = page.locator('.grphead .restbtn.gstart').first();
  ok(await gstart.count() === 1 && /Iniciar/.test(await gstart.innerText()), 'el encabezado del grupo tiene el botón Iniciar');
  await gstart.click(); await page.waitForTimeout(400);
  const etq = await page.locator('#cronometro .ctxt small').innerText();
  ok(/serie [A-F]/i.test(etq), 'desde el grupo el cronómetro lleva el nombre del grupo: ' + etq);
  const pista = await page.evaluate(() => { const e = window.Cronometro._estado; return { ok: e.pistaOk, tipo: e.pista && e.pista.tagName, dur: e.pista && e.pista.duration, pausado: e.pista && e.pista.paused, ms: navigator.mediaSession && navigator.mediaSession.metadata && navigator.mediaSession.metadata.title }; });
  ok(pista.ok && pista.tipo === 'AUDIO' && pista.pausado === false, 'el descanso suena como pista de audio: ' + JSON.stringify(pista));
  await page.click('#cronometro [data-c="saltar"]'); await page.waitForTimeout(300);
  ok(await page.locator('#cronometro:not([hidden])').count() === 0 && await page.evaluate(() => !window.Cronometro._estado.pista), 'saltar cierra la barra y para la pista');
  await page.locator('.restbtn:not(.gstart)').first().click(); await page.waitForTimeout(400);
  ok(await page.locator('#cronometro:not([hidden])').count() === 1, 'al tocar aparece la barra del cronómetro');
  const t1 = await page.locator('#cronometro .ctxt b').innerText();
  await page.screenshot({ path: path.join(SALIDA, 't1-cronometro.png') });
  const pos = await page.evaluate(() => { const c = document.getElementById('cronometro').getBoundingClientRect(), f = document.querySelector('.vfoot').getBoundingClientRect(); return { cb: c.bottom, ft: f.top }; });
  ok(pos.cb <= pos.ft + 1, 'la barra queda encima del pie de la pantalla (' + Math.round(pos.cb) + ' sobre ' + Math.round(pos.ft) + ')');
  await page.waitForTimeout(1300);
  const t2 = await page.locator('#cronometro .ctxt b').innerText();
  ok(t1 !== t2, 'la cuenta avanza: ' + t1 + ' → ' + t2);
  await page.click('#cronometro [data-c="pausa"]'); await page.waitForTimeout(300);
  const tp = await page.locator('#cronometro .ctxt b').innerText(); await page.waitForTimeout(1200);
  ok(await page.locator('#cronometro .ctxt b').innerText() === tp, 'en pausa no avanza (' + tp + ')');
  await page.click('#cronometro [data-c="pausa"]'); await page.click('#cronometro [data-c="mas"]'); await page.waitForTimeout(300);
  const tm = await page.locator('#cronometro .ctxt b').innerText();
  ok(/^\d+:\d\d$/.test(tm), 'tras continuar y +15 s sigue mostrando mm:ss (' + tm + ')');
  // el fin: se adelanta la hora de fin para no esperar
  await page.evaluate(() => { window.Cronometro._estado.fin = Date.now() + 300; });
  await page.waitForTimeout(900);
  ok(await page.locator('#cronometro.fin').count() === 1 && /terminado/.test(await page.locator('#cronometro').innerText()), 'al terminar la barra cambia a "Descanso terminado"');
  await page.screenshot({ path: path.join(SALIDA, 't2-terminado.png') });
  await page.click('#cronometro [data-c="cerrar"]'); await page.waitForTimeout(200);
  ok(await page.locator('#cronometro:not([hidden])').count() === 0, 'Listo cierra la barra');
  // al volver a la semana la barra desaparece de la vista pero un cronómetro activo sigue encima de la barra de pestañas
  await page.locator('.restbtn').first().click(); await page.waitForTimeout(200);
  await page.click('[data-a="back"]'); await page.waitForTimeout(400);
  const pos2 = await page.evaluate(() => { const c = document.getElementById('cronometro').getBoundingClientRect(), n = document.querySelector('.bottomnav').getBoundingClientRect(); return { cb: c.bottom, nt: n.top }; });
  ok(pos2.cb <= pos2.nt + 1, 'en la semana la barra queda encima de las pestañas');
  await page.click('#cronometro [data-c="saltar"]');
  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await browser.close();
  console.log(fallos ? fallos + ' fallo(s)' : 'todo en orden'); process.exit(fallos ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
