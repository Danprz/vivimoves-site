# Tasks

Antes de cualquier edición de interfaz (grupos 2 a 6), cargar la skill `impeccable` y leer `reference/craft-floor.md`; los criterios visuales están en `design.md`.

## 1. Marca «Bliss»

- [x] 1.1 Cambiar `SITE_TITLE` a `'Bliss'` en `src/consts.ts` y comprobar en `npm run dev` que la cabecera y el pie de las cinco páginas dicen «Bliss».
- [x] 1.2 Componer con `SITE_TITLE` los `title` de `index.astro`, `entreprises.astro`, `a-propos.astro` y `contact.astro` (valores en `design.md`, decisión 1) y verificar que los cinco `title` generados son distintos y ninguno contiene «Vivimoves».
- [x] 1.3 Reescribir frase a frase las menciones de cuerpo en `a-propos.astro` (`description`, `h1`, «Une proposition locale»), `le-pr-club.astro` (dos párrafos y el enlace «Découvrir Bliss») y `contact.astro` («fondatrice de Bliss»), cuidando la concordancia en francés; verificar con `grep -rni vivimoves src/pages src/components` que solo quedan resultados aún pendientes de los grupos siguientes.
- [x] 1.4 Cambiar el asunto oculto de `ContactForm.astro` a «Nouvelle demande entreprise — site Bliss» usando `SITE_TITLE` y comprobar el valor del campo `_subject` en el HTML generado de `/contact/`.
- [x] 1.5 Crear `public/og-bliss.jpg` (1200 × 630, misma composición que la actual, con «Bliss» y «Le bien-être par le mouvement, au cœur de vos équipes»), eliminar `public/og-vivimoves.jpg`, actualizar el valor por defecto de `image` en `BaseHead.astro` y comprobar que `dist/og-bliss.jpg` existe y que `og:image` apunta a él en las cinco páginas.
- [x] 1.6 Actualizar el comentario de `src/data/figures.ts` y, si nombran la marca, `README.md`; verificar con `grep -rni vivimoves src README.md` que no queda ninguna mención salvo nombres de archivo de `src/assets/entreprises/hero-vivimoves-*`.

## 2. Navegación

- [x] 2.1 En `Header.astro`, renombrar los enlaces a «Bien-être au travail» y «Communauté» sin cambiar los `href`; comprobar que `aria-current="page"` marca «Bien-être au travail» en `/entreprises/` y «Communauté» en `/le-pr-club/`.
- [x] 2.2 En `Footer.astro`, aplicar las mismas etiquetas en la lista «Le site» y comprobar que los enlaces llevan a las mismas rutas.
- [x] 2.3 Verificar la cabecera a 768, 1024 y 1440 px (una línea, sin solapes ni desbordamiento) y el menú móvil a 320 y 375 px con teclado (abrir, recorrer, cerrar con Escape); ajustar solo el `padding-inline` de los enlaces si no caben.

## 3. Primer bloque de la portada

- [x] 3.1 Sustituir en `index.astro` el bloque de dos columnas por la sección con fotografía a sangre (`hero-terrasse-coach-03.webp` con `<Image>`, `alt=""`, `loading="eager"`, `fetchpriority="high"`, `widths` y `sizes="100vw"`), fondo `ink` de respaldo y velo `ink` uniforme al 72 %; eliminar `.hero-panel` y `.sun`. Verificar que la foto cubre el bloque entero a 320, 375, 768 y 1440 px sin franjas ni desbordamiento horizontal.
- [x] 3.2 Colocar el contenido: marca «Bliss» en `action`, `h1` «Le bien-être par le mouvement, au cœur de vos équipes», frase «Bliss vous propose des solutions clés en main pour offrir à vos équipes de vraies pauses bien-être, dans le Val-d’Oise» y un único botón «Découvrir nos solutions» hacia `/entreprises/`. Verificar que hay un solo `h1` y un solo enlace en el bloque, y que el botón es visible sin desplazarse a 375 × 812 y a 1440 × 900.
- [x] 3.3 Añadir la mención visible «Image d’illustration» dentro del bloque y comprobar que no se solapa con el titular ni con el botón a 320 y 1440 px.
- [x] 3.4 Medir el contraste sobre la zona más clara de la foto con el velo aplicado (texto crema ≥ 4,5:1; marca y `h1` ≥ 3:1; foco del botón ≥ 3:1) y ajustar el porcentaje del velo si hiciera falta, sin bajar del 65 %. Anotar los valores medidos en la descripción del commit.
- [x] 3.5 Comprobar el bloque con la imagen bloqueada en las herramientas del navegador (texto legible sobre fondo `ink`), con zoom al 200 % a 1280 px (nada recortado) y que el texto no se desplaza al cargar la foto.

## 4. Sección de reseña de Google

- [x] 4.1 Cotejar en la ficha de Google (`GOOGLE_REVIEWS_URL`) la nota de las cuatro reseñas de `src/data/reviews.ts`, añadir el campo opcional `rating` al tipo `Review` y a cada reseña cotejada, y dejar constancia de la fecha de cotejo en el comentario de cabecera del archivo. Si alguna no puede cotejarse, dejarla sin `rating`.
- [x] 4.2 Crear `src/components/GoogleReview.astro` según `design.md` (decisión 3): sección propia con `h2` «Avis Google» y logotipo «G» inline, introducción, enlace externo a la ficha y `figure` con inicial, nombre, mención «Avis Google», estrellas con `role="img"` y `aria-label="Note : N sur 5"`, y `blockquote`. Props: `review`, `intro`, `tone` (`page` | `sunk`). Verificar que sin `rating` no se pintan estrellas ni texto de nota.
- [x] 4.3 Portada: quitar la reseña de `ProjectSteps`, eliminar el `<slot />` de `ProjectSteps.astro` e insertar `GoogleReview` (fondo `sunk`) entre los pasos y el bloque «Communauté».
- [x] 4.4 `/entreprises/`: quitar la reseña de `#cours-reguliers` (dejando el CTA «Mettre en place un cours régulier» bien alineado) e insertar `GoogleReview` con la introducción «Ce que disent les participants à nos cours» entre «Mini-retraites d’équipe» y `ContactBand`.
- [x] 4.5 `/le-pr-club/`: quitar la reseña de «L’esprit du club» e insertar `GoogleReview` (fondo `sunk`) entre «Qui est derrière le club ?» y la banda oscura final.
- [x] 4.6 `/a-propos/`: quitar la reseña del bloque «Qui intervient ?» e insertar `GoogleReview` entre ese bloque y `ContactBand`.
- [x] 4.7 Eliminar `src/components/ReviewQuote.astro` y verificar con `grep -rn ReviewQuote src` que no queda ninguna referencia.
- [x] 4.8 Verificar en las cuatro páginas: una sola cita por página y ninguna repetida; cada una en su propia `<section>` con un `h2` que contiene «Google»; sin peticiones a dominios de Google en la pestaña de red; sin `AggregateRating` ni `Review` en el HTML; lectura correcta a 320 px; y, con VoiceOver, cita, autor, fuente y nota anunciados una sola vez.

## 5. Bloque «Communauté» y página del club

- [x] 5.1 En `index.astro`, cambiar el `h2` del bloque del club a «Communauté», el botón a «Découvrir la communauté» y la imagen a `club-seance-terrasse.jpg` en proporción 3:2 con su `alt` en francés; quitar la importación de `club-plein-air.jpg`. Verificar a 375 y 1440 px que no se corta a ninguna persona y que el enlace lleva a `/le-pr-club/`.
- [x] 5.2 En `le-pr-club.astro`, cambiar el titular «Envie de venir ?» por «Rejoignez le mouvement» y verificar que «Envie de venir» no aparece en el HTML generado y que el texto del bloque sigue siendo válido con la agenda vacía.

## 6. Retirada del bloque «Une entreprise locale, à taille humaine»

- [x] 6.1 Quitar `<AboutBand />` y su importación de `index.astro` y de `entreprises.astro`, y eliminar `src/components/AboutBand.astro`; verificar con `grep -rn AboutBand src` que no queda ninguna referencia.
- [x] 6.2 Recorrer `/` y `/entreprises/` y comprobar que no hay dos bandas mostaza contiguas ni dos secciones seguidas con el mismo fondo sin filete, y que `/a-propos/` conserva los bloques «Une proposition locale» y «Une entreprise à taille humaine».

## 7. Documentos de contexto

- [x] 7.1 Actualizar `PRODUCT.md` (marca «Bliss», imagen generada admitida en el primer bloque de la portada con mención, reseñas en sección propia, etiquetas de navegación) y comprobar que ya no describe el bloque de resumen de empresa en portada y landing.
- [x] 7.2 Actualizar `DESIGN.md` (portada con fotografía a sangre y velo `ink` uniforme; componente «Reseña de Google» en lugar de `ReviewQuote`; excepción de color del logotipo de Google; estrellas mostaza con contorno `ink`) y `.impeccable/surfaces/site.md`.
- [x] 7.3 Actualizar el `context` de `openspec/config.yaml` para nombrar Bliss y verificar con `openspec validate rebrand-bliss` que el archivo sigue siendo válido.

## 8. Verificación de integración

- [x] 8.1 Ejecutar `npm run build` sin errores y `grep -rli vivimoves dist --include=*.html` para confirmar que el nombre anterior solo aparece dentro de URLs del dominio de producción (canónicas, Open Graph, sitemap).
- [x] 8.2 Ejecutar `npm run check` (`astro check`) e informar del resultado; `astro build` no sustituye la comprobación de tipos.
- [ ] 8.3 Con `npm run preview`, recorrer las cinco páginas a 375 × 812 y 1440 × 900: navegación completa con teclado y foco visible (incluido el botón sobre la fotografía), enlaces internos y externos, envío de prueba del formulario con el asunto nuevo y ausencia de desbordamiento horizontal desde 320 px.
- [x] 8.4 Revisar las cinco páginas con la skill `impeccable` (comando `polish`) y corregir lo que encuentre dentro del alcance de este cambio.

## Workflow follow-up

- Tras el despliegue en Vercel, refrescar la vista previa del enlace en LinkedIn (Post Inspector) para que tome `og-bliss.jpg`.
- Al archivar, sustituir «Vivimoves» por «Bliss» en los `Purpose` y en los requisitos no modificados de las specs principales.
