/* Recorrido de la copia automática en GitHub a tamaño iPhone, con GitHub simulado (tests/github-falso.js) y un
   respaldo mínimo armado aquí (no usa datos personales): conectar con una llave mala y una buena, primera copia en un
   repositorio vacío, cambios y borrados que suben solos, la llave fuera del respaldo, la copia que se repara al abrir,
   llave revocada con aviso, cambio de llave, repositorio público rechazado y desconexión.
   node tests/copia.e2e.js   (requiere el servidor: node tools/servir.js 8765 /mis-rutinas) */
'use strict';
const { chromium, devices } = require('playwright');
const path = require('path');
const fs = require('fs');
const { GitHubFalso } = require('./github-falso.js');
const BASE = 'http://localhost:8765/mis-rutinas/';
const SALIDA = path.join(__dirname, 'salida');
let fallos = 0;
function ok(c, m){ console.log((c ? 'OK   ' : 'FALLO') + ' ' + m); if (!c) fallos++; }
const quieto = p => p.waitForFunction(() => !document.querySelector('.card.loading'));
const esperarQue = async (fn, ms = 6000) => { const t = Date.now(); while (Date.now() - t < ms) { if (await fn()) return true; await new Promise(r => setTimeout(r, 100)); } return false; };

const uno = (k, ex) => [{ k: k, ex: ex, sets: '3', reps: '8-12', kg: '20', rest: '1:30' }];
const respaldo = {
  formato: 'mis-rutinas-respaldo-1', exportado: '2026-11-15T12:00:00.000Z', app: 'prueba', fotos: {},
  colecciones: {
    migracion: { 'dias-1': { esquema: 1, id: 'dias-1', estado: 'completa', inicio: '2026-11-05T12:00:00.000Z', fin: '2026-11-05T12:01:00.000Z' } },
    diasTipo: { pa: { name: 'Pierna A', items: uno('pa1', 'sentadilla'), ejemplo: false, updatedAt: '2026-11-10T12:00:00.000Z' } },
    ciclo: { principal: { orden: ['pa'], ajustes: ['plan-2026-11-10', 'torsob-2026-11-15'], cardio: { tipo: null, dias: [2, 5], configurado: true }, updatedAt: '2026-11-10T12:00:00.000Z' } },
    dias: { '2026-11-09': { esquema: 1, fecha: '2026-11-09', name: 'Pierna A', rest: false, tipo: 'pa', items: [{ k: 'x1', ex: 'sentadilla', sets: '3', reps: '8-12', kg: '48,6', rest: '1:45', hr: '12,11,10' }] } },
    pesos: { '2026-11-09': { fecha: '2026-11-09', kg: 72.4 } },
    perfil: { principal: { estatura: 170, nacimiento: '1996-08-01', sexo: 'H' } }
  }
};

(async () => {
  fs.mkdirSync(SALIDA, { recursive: true });
  const archivo = path.join(SALIDA, 'copia-respaldo.json');
  fs.writeFileSync(archivo, JSON.stringify(respaldo));
  const gh = new GitHubFalso({ llaves: { 'github_pat_buena': 'escribir' } });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ ...devices['iPhone 13'], locale: 'es-CO', timezoneId: 'America/Bogota' });
  await ctx.addInitScript(() => { window.__pruebas = { copiaEspera: 400 }; });
  await ctx.route('https://api.github.com/**', gh.ruta());
  const page = await ctx.newPage();
  await page.clock.setSystemTime(new Date('2026-11-15T12:30:00-05:00'));
  const errores = []; page.on('pageerror', e => errores.push(e.message)); page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errores.push(m.text()); });
  await page.goto(BASE, { waitUntil: 'load' }); await quieto(page);
  await page.click('.bottomnav [data-t="progreso"]'); await page.click('[data-a="open-datos"]');
  await page.setInputFiles('[data-f="resp-file"]', archivo); await page.waitForSelector('[data-a="resp-restaurar-ok"]');
  await Promise.all([page.waitForNavigation({ waitUntil: 'load' }), page.click('[data-a="resp-restaurar-ok"]')]);
  await quieto(page);
  const abrirDatos = async () => { await page.click('.bottomnav [data-t="progreso"]'); await page.click('[data-a="open-datos"]'); await page.waitForSelector('.card.copia'); };
  const escribir = (ruta, doc) => page.evaluate(([r, d]) => window.RutinasRuntime.abrir().then(x => d === null ? x.db.doc(r).delete() : x.db.doc(r).set(d)), [ruta, doc]);
  const ultimo = () => (gh.historial()[0] || {}).mensaje || '';

  // 1. sin conectar: explicación, pasos con los enlaces ya llenos y el repositorio propuesto
  await abrirDatos();
  const card = page.locator('.card.copia');
  ok(/Copia automática en GitHub/.test(await card.innerText()), 'la tarjeta de la copia aparece en Datos y respaldo');
  ok(await page.inputValue('#c-repo') === 'syepesgaviria/mis-rutinas-datos', 'el repositorio viene propuesto');
  const enlaces = await card.locator('.pasos a').evaluateAll(as => as.map(a => a.href));
  ok(/github\.com\/new\?name=mis-rutinas-datos&owner=syepesgaviria&visibility=private/.test(enlaces[0]), 'enlace para crear el repositorio privado: ' + enlaces[0]);
  ok(/personal-access-tokens\/new\?.*target_name=syepesgaviria&expires_in=none&contents=write/.test(enlaces[1]), 'enlace para crear la llave con Contents de escritura: ' + enlaces[1]);
  await page.screenshot({ path: path.join(SALIDA, 'copia1-sin-conectar.png'), fullPage: true });

  // 2. llave mala: error claro y nada guardado
  await page.fill('#c-llave', 'github_pat_mala'); await page.click('[data-a="copia-conectar"]');
  await page.waitForSelector('.card.copia .err');
  ok(/no reconoce la llave/.test(await page.locator('.card.copia .err').innerText()), 'llave mala: lo dice en la tarjeta');
  ok(await page.evaluate(() => !window.RutinasRuntime.meta.get('copiaGithub')), 'llave mala: no queda guardada');

  // 3. llave buena: primera copia en el repositorio vacío
  await page.fill('#c-llave', '  github_pat_buena '); await page.click('[data-a="copia-conectar"]');
  await page.waitForSelector('.toast');
  const aviso = await page.locator('.toast').innerText();
  ok(/Conectado\. Primera copia subida: \d+ archivos\./.test(aviso), 'aviso al conectar: ' + aviso);
  const f = gh.archivos();
  ok(!!f['README.md'], 'el repositorio vacío recibe su README');
  ok(f['datos/dias/2026-11-09.json'] && JSON.parse(f['datos/dias/2026-11-09.json']).items[0].hr === '12,11,10', 'el día anotado quedó en datos/dias/2026-11-09.json');
  ok(f['datos/perfil/principal.json'] && f['datos/ciclo/principal.json'] && f['datos/pesos/2026-11-09.json'], 'perfil, ciclo y pesos también');
  ok(!Object.keys(f).some(p => /foto/i.test(p)), 'sin fotos');
  await page.waitForSelector('.copiaest.bien');
  ok(/Copia al día: hoy/.test(await page.locator('.copiaest').innerText()), 'estado: copia al día');
  ok(/Llave terminada en …uena/.test(await card.innerText()), 'muestra solo el final de la llave');
  await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(SALIDA, 'copia2-conectada.png'), fullPage: true });

  // 4. un cambio sube solo, con su propio commit; un borrado también
  await escribir('pesos/2026-11-16', { fecha: '2026-11-16', kg: 72.1 });
  ok(await esperarQue(() => ultimo() === 'Copia: pesos/2026-11-16'), 'un pesaje nuevo sube solo: ' + ultimo());
  await escribir('pesos/2026-11-16', null);
  ok(await esperarQue(() => ultimo() === 'Copia: borra pesos/2026-11-16'), 'y su borrado también: ' + ultimo());
  ok(!('datos/pesos/2026-11-16.json' in gh.archivos()), 'el archivo ya no está');

  // 5. la llave no va en el respaldo
  const texto = await page.evaluate(() => window.RutinasRuntime.respaldo.crear().then(o => o.blob.text()));
  ok(texto.indexOf('github_pat_buena') < 0 && texto.indexOf('copiaGithub') < 0, 'el archivo de respaldo no lleva la llave');

  // 6. en Progreso se ve el estado; con la copia al día no aparece el recordatorio de respaldo
  await page.click('[data-a="back"]');
  ok(/GitHub al día/.test(await page.locator('[data-a="open-datos"]').innerText()), 'Progreso: Datos y respaldo dice GitHub al día');

  // 7. si algo se borra en el repositorio, al abrir la app la copia vuelve a quedar igual
  gh.commitDirecto({ 'datos/dias/2026-11-09.json': null, 'analisis/2026-11-15.md': '# Semana\n' }, 'Edición externa');
  await page.reload({ waitUntil: 'load' }); await quieto(page);
  ok(await esperarQue(() => 'datos/dias/2026-11-09.json' in gh.archivos(), 8000), 'al abrir, la app repone lo que faltaba');
  ok(gh.archivos()['analisis/2026-11-15.md'] === '# Semana\n', 'y no toca lo que está fuera de datos/');

  // 8. llave revocada: error en la tarjeta y un aviso fuera de ella, sin reintentos inútiles
  delete gh.llaves['github_pat_buena'];
  await page.click('.bottomnav [data-t="semana"]');
  await escribir('pesos/2026-11-17', { fecha: '2026-11-17', kg: 72 });
  ok(await esperarQue(async () => /no se pudo subir/.test(await page.locator('.toast').innerText().catch(() => ''))), 'aviso de que la copia falló');
  const n = gh.peticiones.length; await page.waitForTimeout(1500);
  ok(gh.peticiones.length === n, 'con la llave revocada no insiste');
  await page.click('.bottomnav [data-t="progreso"]');
  ok(/GitHub con error/.test(await page.locator('[data-a="open-datos"]').innerText()), 'Progreso: Datos y respaldo dice GitHub con error');
  await page.click('[data-a="open-datos"]'); await page.waitForSelector('.card.copia');
  ok(/No se pudo subir la última copia .*no reconoce la llave/.test(await page.locator('.copiaest').innerText()), 'la tarjeta explica el error');
  await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(SALIDA, 'copia3-error.png'), fullPage: true });

  // 9. cambiar la llave
  gh.llaves['github_pat_nueva'] = 'escribir';
  await page.click('[data-a="copia-cambiar"]');
  ok(await page.inputValue('#c-repo') === 'syepesgaviria/mis-rutinas-datos' && await page.locator('#c-repo').getAttribute('readonly') !== null, 'cambiar la llave conserva el repositorio');
  await page.fill('#c-llave', 'github_pat_nueva'); await page.click('[data-a="copia-conectar"]');
  await page.waitForSelector('.copiaest.bien');
  ok('datos/pesos/2026-11-17.json' in gh.archivos(), 'con la llave nueva sube lo que estaba pendiente');
  ok(/Llave terminada en …ueva/.test(await page.locator('.card.copia').innerText()), 'muestra la llave nueva');

  // 10. desconectar
  await page.click('[data-a="copia-quitar"]'); await page.click('[data-a="copia-quitar-ok"]');
  await page.waitForSelector('#c-llave');
  ok(await page.evaluate(() => window.RutinasRuntime.meta.get('copiaGithub') === null), 'desconectar borra la llave del teléfono');
  const h = gh.historial().length;
  await escribir('pesos/2026-11-18', { fecha: '2026-11-18', kg: 71.9 });
  await page.waitForTimeout(1500);
  ok(gh.historial().length === h, 'desconectada no sube nada');

  // 11. un repositorio público se rechaza
  gh.privado = false;
  await page.fill('#c-llave', 'github_pat_nueva'); await page.click('[data-a="copia-conectar"]');
  await page.waitForSelector('.card.copia .err');
  ok(/es público/.test(await page.locator('.card.copia .err').innerText()), 'repositorio público: no se conecta');

  ok(gh.cabecerasMalas.length === 0, 'solo cabeceras que GitHub acepta desde el navegador' + (gh.cabecerasMalas.length ? ': ' + gh.cabecerasMalas.join(', ') : ''));
  ok(errores.length === 0, 'sin errores en la consola' + (errores.length ? ': ' + errores.join(' | ') : ''));
  await browser.close();
  console.log(fallos ? fallos + ' fallos' : 'Todo bien');
  process.exit(fallos ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
