/* Recorrido del ajuste único de Torso B del 15 nov 2026 a tamaño iPhone, con un respaldo mínimo armado aquí (no usa
   datos personales): las triseries A y B pasan a superseries, el tercero de cada una forma la superserie D al final,
   A y D quedan con 1:30 de descanso, B y C como estaban. Cambia el día tipo y el día de la semana siguiente; no toca el
   día de hoy ya anotado ni un día pasado. Recargar no lo repite.
   node tests/torsob1115.e2e.js   (requiere el servidor: node tools/servir.js 8765 /mis-rutinas) */
'use strict';
const { chromium, devices } = require('playwright');
const path = require('path');
const fs = require('fs');
const BASE = 'http://localhost:8765/mis-rutinas/';
const SALIDA = path.join(__dirname, 'salida');
let fallos = 0;
function ok(c, m){ console.log((c ? 'OK   ' : 'FALLO') + ' ' + m); if (!c) fallos++; }
const quieto = p => p.waitForFunction(() => !document.querySelector('.card.loading'));

/* Torso B como estaba antes del ajuste: triserie A, triserie B y superserie C */
const torsoB = (k, log) => [
  { k: k + '1', ex: 'inclinado', sets: '3', reps: '8-12', kg: '35', rest: '0:30', g: 'A', hr: log ? '10,10,9' : '' },
  { k: k + '2', ex: 'laterales', sets: '3', reps: '12-15', kg: '15', rest: '0:30', g: 'A', hr: log ? '15,14,13' : '' },
  { k: k + '3', ex: 'jaloncuerda', sets: '3', reps: '8-12', kg: '40', rest: '0:30', g: 'A', note: 'Sentado en el piso', sug: log ? '' : '38>40', hr: log ? '12,11,10' : '' },
  { k: k + '4', ex: 'fondos', sets: '3', reps: '8-12', kg: '', rest: '1:00', g: 'B', hr: log ? '9,8,7' : '' },
  { k: k + '5', ex: 'remomanc', sets: '3', reps: '8-12', kg: '20', rest: '1:00', g: 'B', hr: log ? '12,12,10' : '' },
  { k: k + '6', ex: 'rueda', sets: '3', reps: '6-10', kg: '', rest: '1:00', g: 'B', hr: log ? '8,7,6' : '' },
  { k: k + '7', ex: 'facepull', sets: '3', reps: '12-15', kg: '20', rest: '0:30', g: 'C' },
  { k: k + '8', ex: 'martillo', sets: '3', reps: '8-12', kg: '20', rest: '0:30', g: 'C' }
];
const uno = (k, ex) => [{ k: k, ex: ex, sets: '3', reps: '8-12', kg: '', rest: '1:30' }];
const dia = (fecha, items) => ({ esquema: 1, fecha: fecha, name: 'Torso B', rest: false, tipo: 'tb', items: items });
const respaldo = {
  formato: 'mis-rutinas-respaldo-1', exportado: '2026-11-15T12:00:00.000Z', app: 'prueba', fotos: {},
  colecciones: {
    migracion: { 'dias-1': { esquema: 1, id: 'dias-1', estado: 'completa', inicio: '2026-11-05T12:00:00.000Z', fin: '2026-11-05T12:01:00.000Z' } },
    diasTipo: {
      pa: { name: 'Pierna A', items: uno('pa1', 'sentadilla'), ejemplo: false, updatedAt: '2026-11-10T12:00:00.000Z' },
      tb: { name: 'Torso B', items: torsoB('t', false), ejemplo: false, updatedAt: '2026-11-10T12:00:00.000Z' },
      pb: { name: 'Pierna B', items: uno('pb1', 'hipthrust'), ejemplo: false, updatedAt: '2026-11-10T12:00:00.000Z' },
      ta: { name: 'Torso A', items: uno('ta1', 'banca'), ejemplo: false, updatedAt: '2026-11-10T12:00:00.000Z' }
    },
    ciclo: { principal: { orden: ['pa', 'tb', 'pb', 'ta'], ajustes: ['plan-2026-11-10'], cardio: { tipo: null, dias: [2, 5] }, updatedAt: '2026-11-10T12:00:00.000Z' } },
    dias: {
      '2026-11-12': dia('2026-11-12', torsoB('p', false)), /* jueves pasado, sin hacer: no se toca */
      '2026-11-15': dia('2026-11-15', torsoB('h', true)),  /* hoy, con las triseries ya anotadas: no se toca */
      '2026-11-22': dia('2026-11-22', torsoB('s', false))  /* domingo siguiente, planeado: cambia */
    }
  }
};
const ORDEN_NUEVO = 'inclinado:A,laterales:A,fondos:B,remomanc:B,facepull:C,martillo:C,jaloncuerda:D,rueda:D';
const ORDEN_VIEJO = 'inclinado:A,laterales:A,jaloncuerda:A,fondos:B,remomanc:B,rueda:B,facepull:C,martillo:C';
const forma = items => items.map(i => i.ex + ':' + i.g).join(',');
const descansos = items => items.map(i => i.rest).join(',');

(async () => {
  fs.mkdirSync(SALIDA, { recursive: true });
  const archivo = path.join(SALIDA, 'torsob-respaldo.json');
  fs.writeFileSync(archivo, JSON.stringify(respaldo));
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ ...devices['iPhone 13'], locale: 'es-CO', timezoneId: 'America/Bogota' });
  const page = await ctx.newPage();
  await page.clock.setSystemTime(new Date('2026-11-15T12:30:00-05:00'));
  const errores = []; page.on('pageerror', e => errores.push(e.message)); page.on('console', m => { if (m.type() === 'error') errores.push(m.text()); });
  await page.goto(BASE, { waitUntil: 'load' }); await quieto(page);
  await page.click('.bottomnav [data-t="progreso"]'); await page.click('[data-a="open-datos"]');
  await page.setInputFiles('[data-f="resp-file"]', archivo); await page.waitForSelector('[data-a="resp-restaurar-ok"]');
  await Promise.all([page.waitForNavigation({ waitUntil: 'load' }), page.click('[data-a="resp-restaurar-ok"]')]);
  await quieto(page);
  const estado = () => page.evaluate(() => JSON.parse(JSON.stringify(window.RutinasRuntime._pruebas.estado.cols)));
  const aplicado = await page.waitForFunction(() => { const e = window.RutinasRuntime._pruebas.estado.cols; return !!(e.ciclo.principal && (e.ciclo.principal.ajustes || []).indexOf('torsob-2026-11-15') >= 0); }, null, { timeout: 8000 }).then(() => true, () => false);

  // 1. al abrir, el ajuste se aplica una vez y avisa
  ok(aplicado, 'el ajuste de Torso B queda registrado en el ciclo');
  const aviso = await page.locator('.toast').innerText().catch(() => '');
  ok(/cuatro superseries/.test(aviso) && /Jalón con cuerda y Rueda abdominal pasaron a la D/.test(aviso) && /1:30/.test(aviso), 'el aviso dice qué cambió: ' + aviso);
  await page.screenshot({ path: path.join(SALIDA, 'tb1-aviso.png') });
  await page.waitForTimeout(800);
  let e = await estado();
  const tipo = Object.values(e.diasTipo).find(t => t.name === 'Torso B');
  ok(forma(tipo.items) === ORDEN_NUEVO, 'día tipo: A y B quedan de dos y la D lleva jalón y rueda al final: ' + forma(tipo.items));
  ok(descansos(tipo.items) === '1:30,1:30,1:00,1:00,0:30,0:30,1:30,1:30', 'descansos: A y D en 1:30, B y C como estaban: ' + descansos(tipo.items));
  const jt = tipo.items.find(i => i.ex === 'jaloncuerda');
  ok(jt.kg === '40' && jt.note === 'Sentado en el piso' && jt.sets === '3', 'el jalón conserva su peso, series y nota');
  ok(['Pierna A', 'Pierna B', 'Torso A'].every(n => Object.values(e.diasTipo).find(t => t.name === n).items.length === 1), 'los otros días tipo no se tocan');

  // 2. días: el siguiente cambia; hoy (anotado) y el jueves pasado no
  const sig = e.dias['2026-11-22'], hoy = e.dias['2026-11-15'], jue = e.dias['2026-11-12'];
  ok(forma(sig.items) === ORDEN_NUEVO && descansos(sig.items) === '1:30,1:30,1:00,1:00,0:30,0:30,1:30,1:30', 'el domingo siguiente queda igual que el día tipo');
  ok(sig.items.find(i => i.ex === 'jaloncuerda').sug === '38>40', 'y conserva la propuesta de subir del jalón');
  ok(forma(hoy.items) === ORDEN_VIEJO && descansos(hoy.items) === '0:30,0:30,0:30,1:00,1:00,1:00,0:30,0:30' && hoy.items[0].hr === '10,10,9', 'hoy, ya anotado, queda como se hizo (triseries)');
  ok(forma(jue.items) === ORDEN_VIEJO, 'el jueves pasado sin hacer no se toca');

  // 3. en pantalla: el día del domingo siguiente muestra cuatro superseries
  await page.click('.bottomnav [data-t="semana"]'); await page.click('[data-a="wk-next"]'); await page.waitForTimeout(600);
  await page.locator('.daycard:not(.muted)[data-a="open-dia"]:has-text("Torso B")').first().click(); await page.waitForSelector('.excard');
  const cuerpo = await page.locator('.vbody').innerText();
  ok(['A', 'B', 'C', 'D'].every(l => new RegExp('Superserie ' + l).test(cuerpo)) && !/Triserie/.test(cuerpo), 'el día muestra las superseries A, B, C y D, sin triseries');
  const dHead = await page.locator('[data-f="grest"][data-g="D"]').inputValue().catch(() => null);
  const aHead = await page.locator('[data-f="grest"][data-g="A"]').inputValue().catch(() => null);
  ok(dHead === '1:30' && aHead === '1:30', 'el encabezado de A y de D dice 1:30 (' + aHead + ', ' + dHead + ')');
  const dCards = await page.evaluate(() => { const h = Array.from(document.querySelectorAll('.grphead')).find(x => /Superserie D/.test(x.innerText)); const out = []; let n = h && h.nextElementSibling; while (n && n.classList.contains('excard')) { out.push(n.innerText.split('\n').find(t => /Jalón|Rueda/.test(t)) || n.innerText.slice(0, 30)); n = n.nextElementSibling; } return out; });
  ok(dCards.length === 2 && /Jalón con cuerda/.test(dCards[0]) && /Rueda abdominal/.test(dCards[1]), 'bajo la D van el jalón con cuerda y la rueda abdominal: ' + JSON.stringify(dCards));
  await page.screenshot({ path: path.join(SALIDA, 'tb2-dia-siguiente.png'), fullPage: true });

  // 4. el día de hoy sigue con sus triseries
  await page.click('[data-a="back"]'); await page.click('[data-a="wk-prev"]'); await page.waitForTimeout(600);
  await page.locator('.daycard[data-a="open-dia"]:has-text("Torso B")').last().click(); await page.waitForSelector('.excard');
  const cuerpoHoy = await page.locator('.vbody').innerText();
  ok(/Triserie A/.test(cuerpoHoy) && /Triserie B/.test(cuerpoHoy) && !/Superserie D/.test(cuerpoHoy), 'el día de hoy muestra lo que se hizo: triseries A y B');
  await page.click('[data-a="back"]');

  // 5. el día tipo en Días tipo
  await page.click('.bottomnav [data-t="tipos"]'); await page.locator('[data-a="open-tipo"]:has-text("Torso B"), .tipocard:has-text("Torso B")').first().click(); await page.waitForSelector('.excard');
  const cuerpoTipo = await page.locator('.vbody').innerText();
  ok(/Superserie D/.test(cuerpoTipo) && !/Triserie/.test(cuerpoTipo), 'el día tipo Torso B muestra la superserie D y ninguna triserie');
  await page.screenshot({ path: path.join(SALIDA, 'tb3-dia-tipo.png'), fullPage: true });
  await page.click('[data-a="back"]');

  // 6. recargar no lo aplica dos veces ni vuelve a avisar
  await page.reload({ waitUntil: 'load' }); await quieto(page); await page.waitForTimeout(1200);
  e = await estado();
  const t2 = Object.values(e.diasTipo).find(t => t.name === 'Torso B');
  ok(forma(t2.items) === ORDEN_NUEVO && e.ciclo.principal.ajustes.filter(a => a === 'torsob-2026-11-15').length === 1, 'tras recargar nada cambia y el ajuste figura una sola vez');
  ok(!/superseries/.test(await page.locator('.toast').innerText().catch(() => '')), 'y no vuelve a avisar');

  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await browser.close();
  console.log(fallos ? fallos + ' fallos' : 'Todo bien');
  process.exit(fallos ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
