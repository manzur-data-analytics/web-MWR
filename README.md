# Maimará Wine Resort

Sitio web del hotel, con secciones de alojamiento, gastronomía, eventos, spa, experiencias e historia. El frontend está desarrollado con Angular 21, Tailwind CSS 4 y Transloco para español, inglés y portugués.

## Requisitos

- Git para clonar el repositorio.
- Node.js 22.12 o superior dentro de la versión 22.
- npm; el proyecto declara la versión 11.6.4 en `frontend/package.json`.

No hace falta instalar Angular CLI globalmente: los comandos usan la versión del proyecto.

## Primer inicio

Cloná el repositorio y, desde su carpeta raíz, ejecutá:

```bash
cd frontend
npm ci
npm start
```

Abrí http://localhost:4200/. El servidor recarga la aplicación al guardar cambios.

En Windows, si PowerShell bloquea `npm.ps1`, usá `npm.cmd ci` y `npm.cmd start`.

## Comandos

Ejecutar desde `frontend/`:

| Comando | Uso |
| --- | --- |
| `npm start` | Servidor local de desarrollo. |
| `npm run build` | Compilación de producción. |
| `npm run watch` | Compilación de desarrollo que observa cambios. |
| `npm test` | Pruebas con el runner configurado de Angular y Vitest. |
| `npm test -- --watch=false` | Pruebas sin modo observación. |

La compilación genera los archivos estáticos en `frontend/dist/frontend/browser/`. No edites esa carpeta: se vuelve a generar desde el código fuente.

## Organización

```text
frontend/
  public/
    i18n/                 Textos en es.json, en.json y pt.json
    secciones/            Fotografías organizadas por módulo y sección
  src/
    app/
      features/           Páginas y secciones de cada módulo
      layout/             Navegación y pie de página
      shared/             Componentes y servicios compartidos
      app.routes.ts       Rutas del sitio
    styles.css            Estilos globales y colores de marca
  nginx.conf              Configuración del servidor web
```

## Modificar textos e idiomas

Los textos se encuentran en:

- `frontend/public/i18n/es.json`: español.
- `frontend/public/i18n/en.json`: inglés.
- `frontend/public/i18n/pt.json`: portugués.

Al cambiar un texto, actualizá su traducción en los tres archivos. Al agregar una clave, mantené el mismo nombre y estructura en cada idioma. Guardá los archivos como UTF-8 para conservar tildes y caracteres especiales.

Las plantillas usan claves como `EVENTS.HERO.TITLE` mediante el pipe `transloco`. El idioma predeterminado es español; la configuración está en `frontend/src/app/app.config.ts`.

## Modificar imágenes y carruseles

Guardá las fotos en `frontend/public/secciones/`, dentro del módulo correspondiente. En HTML y TypeScript se referencian desde `secciones/...`, sin el prefijo `public/`.

Usá nombres descriptivos, en minúsculas y sin espacios, conservando el número de foto cuando corresponda. Si renombrás un archivo, actualizá todas sus referencias.

Los tres carruseles de Eventos tienen sus listas y su orden definidos en `frontend/src/app/features/eventos/sections/eventos-offers/eventos-offers.ts`. Para agregar o reordenar fotos, editá esas listas; los indicadores y contadores se calculan según la cantidad de imágenes.

La sección “Nuestros espacios” de Eventos está temporalmente comentada en la página y sus imports. Sus archivos y traducciones se conservan para poder reactivarla.

## Verificación antes de entregar cambios

- Revisá el resultado en móvil y escritorio y en los tres idiomas.
- Ejecutá `npm run build` desde `frontend/`.
- Si modificaste comportamiento, ejecutá las pruebas correspondientes.
- Confirmá que las fotos usadas estén incluidas en el repositorio.

Si un dispositivo muestra contenido anterior, comprobá que esté publicada la última compilación y compará con una pestaña privada antes de atribuirlo a un problema del código.
