/* Recorrido de la proyección del ciclo (21 nov 2026) a tamaño iPhone, con un respaldo mínimo armado aquí (no usa datos
   personales). Sábado 21: lunes a viernes hechos y el domingo 22 con Pierna A planeada; la semana del 23 estaba armada
   solo con lo hecho (arrancaba en Pierna A). Al abrir, se rearma con lo planeado: Torso B, Pierna B, Torso A, Pierna A.
   El lunes 23, si el domingo no se hizo, se recalcula sola y vuelve a arrancar en Pierna A; si se hizo, no cambia.
   Una semana vacía se arma sola ya con lo planeado.
   node tests/proyeccion.e2e.js   (requiere el servidor: node tools/servir.js 8765 /mis-rutinas) */
'use strict';
const { chromium, devices } = require('playwright');
const path = require('path');
const fs = require('fs');
const BASE = 'http://localhost:8765/mis-rutinas/';
const SALIDA = path.join(__dirname, 'salida');
let fallos = 0;
function ok(c, m){ console.log((c ? 'OK   ' : 'FALLO') + ' ' + m); if (!c) fallos++; }
const quieto = p => p.waitForFunction(() => !document.querySelector('.card.loading'));

const NOMBRES = { pa: 'Pierna A', tb: 'Torso B', pb: 'Pierna B', ta: 'Torso A', cd: 'Cardio' };
const EX = { pa: 'sentadilla', tb: 'inclinado', pb: 'hipthrust', ta: 'banca' };
const uno = (k, ex, log) => [{ k: k, ex: ex, sets: '3', reps: '8-12', kg: '20', rest: '1:30', hr: log ? '10,10,9' : '' }];
const dia = (fecha, tipo, log) => ({ esquema: 1, fecha: fecha, name: NOMBRES[tipo], rest: false, tipo: tipo, items: tipo === 'cd' ? [{ k: 'c' + fecha, ex: 'correr', min: '30' }] : uno('k' + fecha, EX[tipo], log) });
function respaldo(semanaSiguiente){
  const dias = {
    '2026-11-16': dia('2026-11-16', 'tb', true),
    '2026-11-18': dia('2026-11-18', 'cd', false),
    '2026-11-19': dia('2026-11-19', 'pb', true),
    '2026-11-20': dia('2026-11-20', 'ta', true),
    '2026-11-21': dia('2026-11-21', 'cd', false),
    '2026-11-22': dia('2026-11-22', 'pa', false)
  };
  if (semanaSiguiente) Object.keys(semanaSiguiente).forEach(f => { dias[f] = dia(f, semanaSiguiente[f], false); });
  return {
    formato: 'mis-rutinas-respaldo-1', exportado: '2026-11-21T12:00:00.000Z', app: 'prueba', fotos: {},
    colecciones: {
      migracion: { 'dias-1': { esquema: 1, id: 'dias-1', estado: 'completa', inicio: '2026-11-05T12:00:00.000Z', fin: '2026-11-05T12:01:00.000Z' } },
      diasTipo: Object.fromEntries(['pa', 'tb', 'pb', 'ta'].map(t => [t, { name: NOMBRES[t], items: uno(t + '1', EX[t], false), ejemplo: false, updatedAt: '2026-11-10T12:00:00.000Z' }]).concat([['cd', { name: 'Cardio', items: [{ k: 'cd1', ex: 'correr', min: '30' }], ejemplo: false, updatedAt: '2026-11-10T12:00:00.000Z' }]])),
      ciclo: { principal: { orden: ['pa', 'tb', 'pb', 'ta'], ajustes: ['plan-2026-11-10', 'torsob-2026-11-15'], cardio: { tipo: 'cd', dias: [2, 5] }, updatedAt: '2026-11-10T12:00:00.000Z' } },
      dias: dias
    }
  };
}
/* semana del 23 como la armaba antes la app: solo con lo hecho, arrancando en Pierna A */
const VIEJA = { '2026-11-23': 'pa', '2026-11-25': 'cd', '2026-11-26': 'tb', '2026-11-27': 'pb', '2026-11-28': 'cd', '2026-11-29': 'ta' };
const semana23 = e => ['23', '24', '25', '26', '27', '28', '29'].map(d => { const x = e.dias['2026-11-' + d]; return x && !x.rest && x.tipo ? x.tipo : '-'; }).join(',');

async function abrir(browser, archivo, fecha){
  const ctx = await browser.newContext({ ...devices['iPhone 13'], locale: 'es-CO', timezoneId: 'America/Bogota' });
  const page = await ctx.newPage();
  await page.clock.setSystemTime(new Date(fecha));
  const errores = []; page.on('pageerror', e => errores.push(e.message)); page.on('console', m => { if (m.type() === 'error') errores.push(m.text()); });
  await page.goto(BASE, { waitUntil: 'load' }); await quieto(page);
  await page.click('.bottomnav [data-t="progreso"]'); await page.click('[data-a="open-datos"]');
  await page.setInputFiles('[data-f="resp-file"]', archivo); await page.waitForSelector('[data-a="resp-restaurar-ok"]');
  await Promise.all([page.waitForNavigation({ waitUntil: 'load' }), page.click('[data-a="resp-restaurar-ok"]')]);
  await quieto(page);
  return { ctx, page, errores };
}
const estado = page => page.evaluate(() => JSON.parse(JSON.stringify(window.RutinasRuntime._pruebas.estado.cols)));
const esperar = (page, fn, arg) => page.waitForFunction(fn, arg, { timeout: 8000 }).then(() => true, () => false);

(async () => {
  fs.mkdirSync(SALIDA, { recursive: true });
  const browser = await chromium.launch();

  // 1. sábado 21: la semana del 23 ya armada desde lo hecho se rearma con lo planeado
  const a1 = path.join(SALIDA, 'proy-respaldo-1.json'); fs.writeFileSync(a1, JSON.stringify(respaldo(VIEJA)));
  let { ctx, page, errores } = await abrir(browser, a1, '2026-11-21T10:00:00-05:00');
  let listo = await esperar(page, () => { const c = window.RutinasRuntime._pruebas.estado.cols.ciclo.principal; return !!(c && (c.ajustes || []).indexOf('proyeccion-2026-11-21') >= 0); });
  ok(listo, 'el ajuste único de la proyección queda registrado');
  await page.waitForTimeout(800);
  let e = await estado(page);
  ok(semana23(e) === 'tb,-,cd,pb,ta,cd,pa', 'semana del 23 rearmada con lo planeado (Torso B → Pierna B → Torso A → Pierna A): ' + semana23(e));
  ok(e.ciclo.principal.proyeccion && e.ciclo.principal.proyeccion['2026-11-23'] && e.ciclo.principal.proyeccion['2026-11-23'].idx === 1, 'la proyección queda anotada en el ciclo');
  const aviso1 = await page.locator('.toast').innerText().catch(() => '');
  ok(/se rearmó con lo planeado: arranca con Torso B, después de Pierna A del dom 22 nov/.test(aviso1), 'aviso: ' + aviso1);
  // la semana siguiente ofrece reorganizar y la vista lo explica
  await page.click('.bottomnav [data-t="semana"]'); await page.waitForTimeout(200);
  await page.click('[data-a="wk-next"]'); await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(SALIDA, 'proy1-semana23.png') });
  await page.click('[data-a="open-reorg"]'); await page.waitForSelector('[data-a="ciclo-ok"]');
  const hint = await page.locator('.hint.small').first().innerText();
  ok(/último planeado es Pierna A el dom 22/.test(hint) && /recalcula/.test(hint), 'la vista del ciclo explica la partida: ' + hint);
  await page.click('[data-a="back"]');
  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));

  // 2. lunes 23 sin haber hecho la Pierna A del domingo: se recalcula sola
  await page.clock.setSystemTime(new Date('2026-11-23T07:00:00-05:00'));
  await page.reload({ waitUntil: 'load' }); await quieto(page);
  listo = await esperar(page, () => { const c = window.RutinasRuntime._pruebas.estado.cols.ciclo.principal; return !c.proyeccion; });
  await page.waitForTimeout(800);
  e = await estado(page);
  ok(listo, 'la proyección se suelta tras recalcular (ya no depende de nada planeado)');
  ok(semana23(e) === 'pa,-,cd,tb,pb,cd,ta', 'saltada la Pierna A del domingo, la semana vuelve a arrancar en Pierna A: ' + semana23(e));
  const aviso2 = await page.locator('.toast').innerText().catch(() => '');
  ok(/se recalculó: arranca con Pierna A/.test(aviso2) && /Torso A/.test(aviso2), 'aviso: ' + aviso2);
  await page.screenshot({ path: path.join(SALIDA, 'proy2-saltada.png') });
  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await ctx.close();

  // 3. si la Pierna A del domingo se hizo, el lunes no cambia nada y la proyección se suelta
  const NUEVA = { '2026-11-23': 'tb', '2026-11-25': 'cd', '2026-11-26': 'pb', '2026-11-27': 'ta', '2026-11-28': 'cd', '2026-11-29': 'pa' };
  const r3 = respaldo(NUEVA); r3.colecciones.dias['2026-11-22'] = dia('2026-11-22', 'pa', true);
  r3.colecciones.ciclo.principal.ajustes.push('proyeccion-2026-11-21');
  r3.colecciones.ciclo.principal.proyeccion = { '2026-11-23': { idx: 1, tipos: { 0: 'tb', 3: 'pb', 4: 'ta', 6: 'pa' } } };
  const a3 = path.join(SALIDA, 'proy-respaldo-3.json'); fs.writeFileSync(a3, JSON.stringify(r3));
  ({ ctx, page, errores } = await abrir(browser, a3, '2026-11-23T07:00:00-05:00'));
  listo = await esperar(page, () => { const c = window.RutinasRuntime._pruebas.estado.cols.ciclo.principal; return !!c && !c.proyeccion; });
  await page.waitForTimeout(500);
  e = await estado(page);
  ok(listo, 'con el domingo hecho la proyección se suelta');
  ok(semana23(e) === 'tb,-,cd,pb,ta,cd,pa', 'la semana sigue arrancando en Torso B: ' + semana23(e));
  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await ctx.close();

  // 3b. semana proyectada cambiada a mano: el lunes no se toca aunque el domingo no se haya hecho
  const r3b = respaldo(Object.assign({}, NUEVA, { '2026-11-26': 'ta', '2026-11-27': 'pb' }));
  r3b.colecciones.ciclo.principal.ajustes.push('proyeccion-2026-11-21');
  r3b.colecciones.ciclo.principal.proyeccion = r3.colecciones.ciclo.principal.proyeccion;
  const a3b = path.join(SALIDA, 'proy-respaldo-3b.json'); fs.writeFileSync(a3b, JSON.stringify(r3b));
  ({ ctx, page, errores } = await abrir(browser, a3b, '2026-11-23T07:00:00-05:00'));
  listo = await esperar(page, () => { const c = window.RutinasRuntime._pruebas.estado.cols.ciclo.principal; return !!c && !c.proyeccion; });
  await page.waitForTimeout(500);
  e = await estado(page);
  ok(listo && semana23(e) === 'tb,-,cd,ta,pb,cd,pa', 'cambiada a mano, la semana no se toca: ' + semana23(e));
  await ctx.close();

  // 4. semana del 23 vacía: se arma sola ya con lo planeado
  const a2 = path.join(SALIDA, 'proy-respaldo-2.json'); fs.writeFileSync(a2, JSON.stringify(respaldo(null)));
  ({ ctx, page, errores } = await abrir(browser, a2, '2026-11-21T10:00:00-05:00'));
  await page.click('.bottomnav [data-t="semana"]'); await page.waitForTimeout(200);
  await page.click('[data-a="wk-next"]'); await page.waitForTimeout(800);
  e = await estado(page);
  ok(semana23(e) === 'tb,-,cd,pb,ta,cd,pa', 'la semana vacía se arma con lo planeado: ' + semana23(e));
  const aviso4 = await page.locator('.toast').innerText().catch(() => '');
  ok(/sigue en Torso B, después de Pierna A del dom 22/.test(aviso4), 'aviso: ' + aviso4);
  ok(e.ciclo.principal.proyeccion && e.ciclo.principal.proyeccion['2026-11-23'], 'la proyección queda anotada');
  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await ctx.close();

  await browser.close();
  console.log(fallos ? fallos + ' fallo(s)' : 'todo en orden'); process.exit(fallos ? 1 : 0);
})();
