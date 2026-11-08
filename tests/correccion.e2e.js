/* Recorrido de la corrección de cargas (la barra pesa 15 y no 20) a tamaño iPhone. node tests/correccion.e2e.js [respaldo.json] */
'use strict';
const { chromium, devices } = require('playwright');
const path = require('path');
const BASE = 'http://localhost:8765/mis-rutinas/';
const SALIDA = path.join(__dirname, 'salida');
const respaldo = process.argv[2] || path.join(__dirname, '..', 'semilla', 'semilla-hoy-migrada.json');
let fallos = 0;
function ok(c, m){ console.log((c ? 'OK   ' : 'FALLO') + ' ' + m); if (!c) fallos++; }
const quieto = p => p.waitForFunction(() => !document.querySelector('.card.loading'));
const num = v => parseFloat(String(v == null ? '' : v).replace(',', '.'));
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

  // foto de los datos antes: qué ejercicios son de barra y cuánto pesan
  const LIB = JSON.parse(require('fs').readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8').match(/^var LIB = (\[.*\]);$/m)[1]);
  const antes = await page.evaluate((LIB) => {
    const e = window.RutinasRuntime._pruebas.estado.cols, barra = {}, otros = {};
    LIB.concat(Object.values(e.ejercicios)).forEach(x => { (x.e === 'Barra' ? barra : otros)[x.id] = x.n; });
    const dias = {}; Object.values(e.dias).forEach(d => { dias[d.fecha] = (d.items || []).map(i => ({ ex: i.ex, kg: i.kg, hk: i.hk })); });
    const tipos = {}; Object.values(e.diasTipo).forEach(t => { tipos[t.id] = (t.items || []).map(i => ({ ex: i.ex, kg: i.kg })); });
    return { barra, otros, dias, tipos };
  }, LIB);
  const nBarraDias = Object.values(antes.dias).reduce((n, its) => n + its.filter(i => antes.barra[i.ex] && num(i.kg) > 0).length, 0);
  ok(Object.keys(antes.barra).length > 0 && nBarraDias > 0, Object.keys(antes.barra).length + ' ejercicios de barra, ' + nBarraDias + ' con peso planeado en los días');

  await page.click('.bottomnav [data-t="tipos"]'); await page.click('[data-a="open-ciclocfg"]'); await page.waitForSelector('[data-a="corr-revisar"]');
  ok(await page.inputValue('[data-f="corr"][data-p="delta"]') === '-5', 'la diferencia viene propuesta en -5');
  ok(await page.inputValue('[data-f="corr"][data-p="modo"]') === 'barra', 'el equipo propuesto es la barra');
  ok(await page.inputValue('[data-f="equipo"][data-p="barra"]') === '15', 'la barra por defecto ya pesa 15');
  ok(await page.inputValue('[data-f="equipo"][data-p="pasoPolea"]') === '2', 'la polea sube de 2 en 2');
  await page.click('[data-a="corr-revisar"]'); await page.waitForSelector('[data-a="corr-aplicar"]');
  const resumen = await page.locator('.confirm').innerText();
  ok(/Barra, -5 kg/.test(resumen) && /días tipo/.test(resumen) && /series anotadas/.test(resumen), 'el resumen dice qué cambiaría: ' + resumen.replace(/\n/g, ' ').slice(0, 140));
  await page.screenshot({ path: path.join(SALIDA, 'k1-corr-resumen.png'), fullPage: true });
  await page.click('[data-a="corr-cancel"]'); await page.waitForTimeout(200);
  ok(await page.locator('[data-a="corr-aplicar"]').count() === 0, 'cancelar cierra la confirmación sin tocar nada');

  await page.click('[data-a="corr-revisar"]'); await page.waitForSelector('[data-a="corr-aplicar"]');
  await page.click('[data-a="corr-aplicar"]'); await page.waitForTimeout(1200);
  ok(/Corrección aplicada/.test(await page.locator('.toast').innerText().catch(() => '')), 'aparece el aviso de corrección aplicada');
  await page.screenshot({ path: path.join(SALIDA, 'k2-corr-aplicada.png'), fullPage: true });

  // los datos guardados cambiaron solo en los ejercicios de barra
  const despues = await page.evaluate(() => {
    const e = window.RutinasRuntime._pruebas.estado.cols;
    const dias = {}; Object.values(e.dias).forEach(d => { dias[d.fecha] = (d.items || []).map(i => ({ ex: i.ex, kg: i.kg, hk: i.hk })); });
    const tipos = {}; Object.values(e.diasTipo).forEach(t => { tipos[t.id] = (t.items || []).map(i => ({ ex: i.ex, kg: i.kg })); });
    return { dias, tipos, ciclo: e.ciclo.principal };
  });
  let bien = 0, mal = [];
  const comparar = (a, b, donde) => {
    (a || []).forEach((it, i) => {
      const d = b[i]; if (!d) { mal.push(donde + ' perdió un ejercicio'); return; }
      const esBarra = !!antes.barra[it.ex];
      const esperado = v => { const x = num(v); return !(x > 0) ? v : esBarra ? String(Math.max(0, Math.round((x - 5) * 10) / 10)).replace('.', ',') : v; };
      if (num(it.kg) > 0 && num(d.kg) !== num(esperado(it.kg))) mal.push(donde + ' ' + it.ex + ' kg ' + it.kg + ' → ' + d.kg); else if (num(it.kg) > 0) bien++;
      if (it.hk !== undefined) {
        const hkEsp = String(it.hk || '').split('|').map(esperado).join('|');
        if (String(d.hk || '') !== hkEsp && String(it.hk || '') !== '') mal.push(donde + ' ' + it.ex + ' series ' + it.hk + ' → ' + d.hk + ' (esperado ' + hkEsp + ')');
      }
    });
  };
  Object.keys(antes.dias).forEach(f => comparar(antes.dias[f], despues.dias[f] || [], f));
  Object.keys(antes.tipos).forEach(t => comparar(antes.tipos[t], despues.tipos[t] || [], 'tipo ' + t));
  ok(mal.length === 0 && bien > 0, bien + ' pesos revisados, barra restó 5 y el resto quedó igual' + (mal.length ? ': ' + mal.slice(0, 3).join('; ') : ''));
  const reg = (despues.ciclo && despues.ciclo.correcciones) || [];
  ok(reg.length === 1 && reg[0].modo === 'barra' && reg[0].delta === -5 && reg[0].valores > 0, 'la corrección queda registrada en el ciclo: ' + JSON.stringify(reg[0]));
  ok(/Aplicadas: .*Barra -5 kg/.test(await page.locator('.vbody').innerText()), 'la pantalla muestra la corrección aplicada');

  // la semana sigue mostrando los pesos nuevos
  await page.click('[data-a="back"]'); await page.click('.bottomnav [data-t="semana"]'); await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(SALIDA, 'k3-semana.png'), fullPage: true });

  ok(errores.length === 0, 'sin errores de consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await browser.close();
  console.log(fallos ? fallos + ' fallos' : 'Todo bien');
  process.exit(fallos ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
