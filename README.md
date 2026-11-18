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
    fonts/                Fuentes locales de la marca
    images/
      brand/              Logos e ilustraciones de marca
      home/               Imágenes del inicio
      secciones/          Fotografías organizadas por módulo y sección
  src/
    app/
      features/           Páginas y secciones de cada módulo
      layout/             Navegación y pie de página
      shared/             Componentes y servicios compartidos
      app.routes.ts       Rutas del sitio
    styles.css            Fuentes, estilos globales y colores de marca
  nginx.conf              Configuración del servidor web
```

## Modificar textos e idiomas

Los textos se encuentran en:

- `frontend/public/i18n/es.json`: español.
- `frontend/public/i18n/en.json`: inglés.
- `frontend/public/i18n/pt.json`: portugués.

Al cambiar un texto, actualizá su traducción en los tres archivos. Al agregar una clave, mantené el mismo nombre y estructura en cada idioma. Guardá los archivos como UTF-8 para conservar tildes y caracteres especiales.

Las plantillas usan claves como `EVENTS.HERO.TITLE` mediante el pipe `transloco`. El idioma predeterminado es español; la configuración está en `frontend/src/app/app.config.ts`.

## Identidad visual

La paleta se define en `frontend/src/styles.css` mediante variables `--color-brand-*`, que también se utilizan como colores de Tailwind. Actualizá esos valores desde allí para mantener consistencia en el sitio.

Las fuentes locales están en `frontend/public/fonts/` y se registran en `styles.css`: Iowan Old Style Roman para títulos y Arapey Regular e Italic para textos. La clase `font-title` aplica mayúsculas e interletrado a los títulos; `font-body` usa Arapey. Las rutas de las fuentes en CSS son relativas al archivo de estilos para que Angular las incluya en la compilación.

Los logos y las ilustraciones están en `frontend/public/images/brand/`, organizados por tipo. El navbar alterna entre las versiones clara y oscura del isologotipo; el footer usa la versión clara. El favicon se configura en `frontend/src/index.html` y utiliza `isotipo/favicon-marca.svg`. Las ilustraciones PNG actuales tienen fondo opaco, por lo que conviene revisar su integración al colocarlas sobre otro fondo.

## Modificar imágenes y carruseles

Guardá las fotos en `frontend/public/images/secciones/`, dentro del módulo correspondiente. En HTML y TypeScript se referencian desde `images/secciones/...`, sin el prefijo `public/`.

Usá nombres descriptivos, en minúsculas y sin espacios, conservando el número de foto cuando corresponda. Si renombrás un archivo, actualizá todas sus referencias.

Los tres carruseles de Eventos tienen sus listas y su orden definidos en `frontend/src/app/features/eventos/sections/eventos-offers/eventos-offers.ts`. Para agregar o reordenar fotos, editá esas listas; los indicadores y contadores se calculan según la cantidad de imágenes.

Los carruseles usan únicamente imágenes WebP, directamente en las carpetas `bodas/`, `eventos-sociales/` y `eventos-corporativos/` dentro de `frontend/public/images/secciones/eventos/galeria/`. Los originales se guardan fuera del repositorio. Para generar nuevas imágenes, ejecutá `python frontend/scripts/optimize-event-images.py "ruta/a/originales"` desde la raíz; esa carpeta debe contener las categorías correspondientes con los JPG. Requiere Python y Pillow (`python -m pip install Pillow`). El script conserva la proporción, limita las dimensiones a 1200 × 1600 píxeles y escribe las WebP en la carpeta de cada categoría. Incluí las imágenes generadas y actualizá las listas del carrusel con sus nombres `.webp`.

La sección “Nuestros espacios” de Eventos está temporalmente comentada en la página y sus imports. Sus archivos y traducciones se conservan para poder reactivarla.

## Publicación en GitHub Pages

El workflow `.github/workflows/deploy.yml` se ejecuta al subir cambios a la rama `dev` o manualmente desde la pestaña **Actions** de GitHub. En la configuración del repositorio, GitHub Pages debe usar **GitHub Actions** como fuente de publicación. El workflow instala las dependencias, compila el frontend y publica `frontend/dist/frontend/browser/`.

La configuración actual usa `/web-MWR/` como ruta base, correspondiente a `https://manzur-data-analytics.github.io/web-MWR/`. Para probar esa misma compilación desde `frontend/`:

```bash
npx ng build --configuration production --base-href /web-MWR/
```

Si cambia el nombre del repositorio o se utiliza un dominio propio, ajustá `--base-href` en el workflow según la dirección de publicación. En las plantillas, referenciá archivos de `public/` con rutas relativas como `images/brand/...`, sin `/` inicial ni el prefijo `public/`; así respetan la ruta base. Las fuentes declaradas en `styles.css` se resuelven durante la compilación.

El workflow copia `index.html` a `404.html` para que Angular pueda iniciar al abrir directamente una ruta interna. GitHub Pages sirve ese archivo como respuesta 404, aunque la aplicación pueda mostrar la página correspondiente. Después de publicar, comprobá tanto la navegación como la recarga y apertura directa de rutas internas, además de imágenes, fuentes e idiomas.

## Verificación antes de entregar cambios

- Revisá el resultado en móvil y escritorio y en los tres idiomas.
- Ejecutá `npm run build` desde `frontend/`.
- Si modificaste comportamiento, ejecutá las pruebas correspondientes.
- Confirmá que las fotos usadas estén incluidas en el repositorio.

Si un dispositivo muestra contenido anterior, comprobá que esté publicada la última compilación y compará con una pestaña privada antes de atribuirlo a un problema del código.
