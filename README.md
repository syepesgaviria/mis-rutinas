# Mis rutinas

Planificador semanal de rutinas de ejercicio. App web instalable (PWA) de uso personal: funciona sin conexión y guarda todos los datos en el dispositivo. No hay cuentas ni servidor; este repositorio solo contiene el código y el catálogo de ejercicios, nunca datos personales.

## Instalar en el iPhone

1. Abre la dirección de la app en Safari.
2. Toca Compartir y luego "Agregar a pantalla de inicio".
3. Abre la app desde el ícono. La primera vez, ve a Progreso, Datos y respaldo, y restaura tu archivo de respaldo si tienes uno.

## Respaldo

Los datos viven solo en el teléfono. En Progreso, Datos y respaldo, "Guardar respaldo" genera un archivo JSON con todo (semanas, días tipo, ejercicios propios, pesos, medidas, perfil y fotos) y abre la hoja de compartir para guardarlo en Archivos o iCloud. "Restaurar desde un archivo" reemplaza todo lo guardado por el contenido de un respaldo. La app recuerda hacer un respaldo cuando hay cambios y pasaron más de dos semanas desde el último.

## Estructura

- `index.html`, `app.css`, `app.js`: la app (una sola página, JavaScript sin dependencias).
- `runtime.js`: capa de datos local en IndexedDB (colecciones, fotos, respaldo y restauración).
- `ciclo.js`: lógica pura del ciclo de días tipo con rotación (partida, armar semana, reorganizar), del cardio aparte en días de descanso y de la semana de descarga (racha, series reducidas).
- `progresion.js`: lógica pura de progresión de cargas (cargas posibles con los discos, siguiente carga por equipo, evaluación de la última sesión, corrección de cargas cuando un peso estaba mal medido).
- `cronometro.js`: cronómetro de descanso (cuenta por hora de fin, barra propia, descanso reproducido como pista de audio para que avise con el teléfono bloqueado y se vea en la pantalla de bloqueo, pantalla encendida).
- `sw.js`: service worker generado; precachea la app completa para usarla sin conexión.
- `img/`: fotos del catálogo (Free Exercise DB, dominio público), ilustraciones esquemáticas (búlgara y sentadilla en la pared) e imágenes generadas con IA. Cada ejercicio lleva miniatura cuadrada (`<id>.jpg`) y dos fotos en 3:2 (`<id>_0.jpg` inicio, `<id>_1.jpg` final).
- `fonts/`: Archivo (SIL Open Font License), empaquetada para funcionar sin conexión.
- `tools/`: `build-sw.js` (genera `sw.js`), `servir.js` (servidor local de pruebas), `semilla.js` (convierte una exportación de la base anterior en un archivo de respaldo).
- `tests/`: `runtime.test.js` (capa de datos, con IndexedDB simulada), `ciclo.test.js`, `progresion.test.js` y `cronometro.test.js` (lógica pura), `catalogo.test.js` (coherencia del catálogo, sus alternativas y sus imágenes), `e2e.js`, `ciclo.e2e.js`, `progresion.e2e.js`, `descarga.e2e.js`, `cronometro.e2e.js`, `correccion.e2e.js` `bloques.e2e.js` y `cardio.e2e.js` (recorridos a tamaño iPhone con Playwright sobre un respaldo real), y `pared.e2e.js` (cambio a un ejercicio por tiempo, con un respaldo mínimo que arma la propia prueba).

## Desarrollo

```
npm install            # instala fake-indexeddb (Playwright se asume instalado aparte)
npm run build          # regenera sw.js tras cualquier cambio en los archivos de la app
npm test               # pruebas de la capa de datos
npm run servir         # http://localhost:8765/mis-rutinas/
npm run e2e -- ruta/al/respaldo.json
```

Cada publicación debe ir precedida de `npm run build`: la versión del service worker se deriva del contenido de los archivos y es lo que hace que el teléfono descargue la versión nueva.
