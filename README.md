# Mis rutinas

Planificador semanal de rutinas de ejercicio. App web instalable (PWA) de uso personal: funciona sin conexión y guarda todos los datos en el dispositivo. No hay cuentas ni servidor; este repositorio solo contiene el código y el catálogo de ejercicios, nunca datos personales. Si se conecta, la app sube además una copia de los datos a un repositorio privado aparte (ver Copia automática en GitHub).

## Instalar en el iPhone

1. Abre la dirección de la app en Safari.
2. Toca Compartir y luego "Agregar a pantalla de inicio".
3. Abre la app desde el ícono. La primera vez, ve a Progreso, Datos y respaldo, y restaura tu archivo de respaldo si tienes uno.

## Respaldo

Los datos viven solo en el teléfono. En Progreso, Datos y respaldo, "Guardar respaldo" genera un archivo JSON con todo (semanas, días tipo, ejercicios propios, pesos, medidas, perfil y fotos) y abre la hoja de compartir para guardarlo en Archivos o iCloud. "Restaurar desde un archivo" reemplaza todo lo guardado por el contenido de un respaldo. La app recuerda hacer un respaldo cuando hay cambios y pasaron más de dos semanas desde el último.

## Copia automática en GitHub

En Progreso, Datos y respaldo, la tarjeta "Copia automática en GitHub" conecta la app con un repositorio privado (por defecto `syepesgaviria/mis-rutinas-datos`) usando una llave de acceso de GitHub de grano fino, limitada a ese repositorio y con Contents en "Read and write". La tarjeta trae los enlaces para crear el repositorio y la llave con los campos ya llenos.

- Cada documento queda como un archivo JSON con las claves ordenadas: `datos/<colección>/<id>.json`. La app solo escribe dentro de `datos/`; lo demás del repositorio no se toca. Las fotos no se copian.
- Sube sola: unos 20 segundos después de cada cambio (a más tardar al minuto si los cambios siguen), al abrir la app y al volver a ella. Cada copia es un commit con solo lo que cambió; si no cambió nada, no hay commit.
- Usa la API de datos de git de GitHub (referencia, árbol, commit), desde el navegador, con solo las cabeceras que GitHub admite por CORS. Si la rama se mueve en medio de una copia, vuelve a intentarlo. Un repositorio vacío recibe primero un README. Un repositorio público se rechaza.
- La llave se guarda en el almacenamiento local del dispositivo (meta), nunca en el archivo de respaldo. Sin conexión o con GitHub caído reintenta sola; con la llave vencida o sin permiso avisa una vez y espera a que se cambie.
- Mientras la copia esté al día (menos de 3 días y sin error), no aparece el recordatorio de respaldo; el archivo de respaldo sigue siendo lo que restaura la app y lo único que lleva las fotos.

## Estructura

- `index.html`, `app.css`, `app.js`: la app (una sola página, JavaScript sin dependencias).
- `runtime.js`: capa de datos local en IndexedDB (colecciones, fotos, respaldo y restauración).
- `ciclo.js`: lógica pura del ciclo de días tipo con rotación (partida, armar semana, reorganizar), del cardio aparte en días de descanso, de la semana de descarga (racha, series reducidas) y de los cambios de grupos de un día tipo (sacar ejercicios a un grupo nuevo).
- `progresion.js`: lógica pura de progresión de cargas (cargas posibles con los discos, siguiente carga por equipo, evaluación de la última sesión, corrección de cargas cuando un peso estaba mal medido).
- `copia.js`: copia automática en GitHub (archivos por documento, sha de git, cambios, commit por la API de datos de git y el motor que programa las copias).
- `cronometro.js`: cronómetro de descanso (cuenta por hora de fin, barra propia, descanso reproducido como pista de audio para que avise con el teléfono bloqueado y se vea en la pantalla de bloqueo, pantalla encendida).
- `sw.js`: service worker generado; precachea la app completa para usarla sin conexión.
- `img/`: fotos del catálogo (Free Exercise DB, dominio público), ilustraciones esquemáticas (búlgara y sentadilla en la pared) e imágenes generadas con IA. Cada ejercicio lleva miniatura cuadrada (`<id>.jpg`) y dos fotos en 3:2 (`<id>_0.jpg` inicio, `<id>_1.jpg` final).
- `fonts/`: Archivo (SIL Open Font License), empaquetada para funcionar sin conexión.
- `tools/`: `build-sw.js` (genera `sw.js`), `servir.js` (servidor local de pruebas), `semilla.js` (convierte una exportación de la base anterior en un archivo de respaldo).
- `tests/`: `runtime.test.js` (capa de datos, con IndexedDB simulada), `ciclo.test.js`, `progresion.test.js` y `cronometro.test.js` (lógica pura), `copia.test.js` (copia en GitHub contra el GitHub simulado de `github-falso.js`), `catalogo.test.js` (coherencia del catálogo, sus alternativas y sus imágenes), `e2e.js`, `ciclo.e2e.js`, `progresion.e2e.js`, `descarga.e2e.js`, `cronometro.e2e.js`, `correccion.e2e.js` `bloques.e2e.js`, `cardio.e2e.js`, `plan1110.e2e.js` y `cardiohecho.e2e.js` (recorridos a tamaño iPhone con Playwright sobre un respaldo real), y `pared.e2e.js` (cambio a un ejercicio por tiempo), `torsob1115.e2e.js` (Torso B de triseries a cuatro superseries) y `copia.e2e.js` (copia en GitHub con GitHub simulado), con un respaldo mínimo que arma la propia prueba.

## Desarrollo

```
npm install            # instala fake-indexeddb (Playwright se asume instalado aparte)
npm run build          # regenera sw.js tras cualquier cambio en los archivos de la app
npm test               # pruebas de la capa de datos
npm run servir         # http://localhost:8765/mis-rutinas/
npm run e2e -- ruta/al/respaldo.json
```

Cada publicación debe ir precedida de `npm run build`: la versión del service worker se deriva del contenido de los archivos y es lo que hace que el teléfono descargue la versión nueva.
