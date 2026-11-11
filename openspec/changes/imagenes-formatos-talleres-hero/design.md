# Design

## Context

Ver `proposal.md` para la motivación. Estado observado en el código:

- `src/pages/index.astro`: `.hero-brand` mide `clamp(2rem, 1.6rem + 1.8vw, 3rem)` y el `h1` hereda el tamaño global `clamp(2.25rem, 1.35rem + 4.2vw, 4.25rem)` de `global.css`. `.hero-text` tiene `max-width: 40rem`.
- `src/components/FormatsBand.astro`: `ul` en rejilla `md:grid-cols-3`; cada `li.format` es una columna flex con filete superior de 2 px y un enlace cuyo `::after` cubre toda la columna. Solo «En savoir plus» queda alineado (`margin-top: auto`); el texto baja cuando el título ocupa dos líneas.
- `src/components/AtelierBlock.astro`: `article` flex en columna; en `entreprises.astro` la rejilla es `lg:grid-cols-3`. Frase, lista, ficha y enlace quedan a alturas distintas según las líneas del título.
- `src/data/formats.ts` y `src/data/ateliers.ts` no tienen campos de imagen; `src/data/activities.ts` y `PracticeTile.astro` ya resuelven el mismo patrón (`image`, `alt`, `<Image>`).
- Las seis fotografías miden 768 × 576 (4:3) y pesan entre 57 y 131 kB; sus textos alternativos en francés están en `docs/prompts/formats-images.json`, `formats-reunion-ferme-images.json` y `ateliers-thematiques-images.json`.
- `DESIGN.md` prohíbe sombras, rejillas de tarjetas idénticas con icono y botón, degradados y animaciones más allá de color y subrayado.

## Goals / Non-Goals

**Goals:**

- Que la alineación entre columnas no dependa del contenido: debe mantenerse si mañana cambia un título o un texto.
- Reutilizar el patrón de imagen de `PracticeTile` y los tokens existentes.

**Non-Goals:**

- Cambiar textos, enlaces, anclas, metadatos o el orden de las secciones.
- Tocar el tamaño global del `h1`: las demás páginas conservan su titular.
- Generar o retocar imágenes; se usan los seis archivos tal cual.
- Añadir imágenes a la sección «Mini-retraites» de `/entreprises/` u otros bloques.

## Decisions

### 1. Jerarquía del primer bloque: tamaños locales en `index.astro`

- `.hero-brand`: `clamp(3rem, 2rem + 4.5vw, 5.5rem)` (48 px en 320 px, 88 px en escritorio).
- `.hero h1`: `clamp(1.75rem, 1.3rem + 2vw, 2.75rem)`, la misma escala que el `h2` global (28 px → 44 px).
- El margen entre marca y titular pasa de `mt-3` a `mt-4`; el resto del bloque no cambia.

La marca queda siempre al menos 1,7 veces más alta que el titular. Con 44 px y 40rem de ancho, el titular cabe en dos líneas en escritorio. Ambos siguen siendo texto grande en negrita, así que los contrastes medidos en `DESIGN.md` (crema 6,34:1, mostaza 3,74:1) siguen siendo válidos con el velo al 72 %.

Alternativa descartada: cambiar el `h1` global, porque reduciría los titulares de las otras cuatro páginas. Alternativa descartada: convertir «Bliss» en el `h1`, porque el titular es el que describe la página para buscadores y lectores de pantalla.

Supuesto: Virginia no dio tamaños exactos; estos valores son el punto de partida y pueden afinarse durante la revisión visual sin cambiar la spec, siempre que la marca siga siendo mayor que el titular.

### 2. Alineación con `subgrid`

En ambas secciones la rejilla madre define las columnas y cada columna hereda las filas:

- Banda de formatos (`md` y superior): el `ul` es la rejilla; cada `li` usa `grid-row: span 4; grid-template-rows: subgrid` con filas fotografía · título · texto · «En savoir plus».
- Talleres (`lg` y superior): la rejilla de `entreprises.astro`; cada `article` usa `grid-row: span 6` con filas fotografía · título · frase · temáticas (etiqueta y lista juntas) · ficha · enlace.

El espacio vertical entre elementos pasa de los márgenes `mt-*` a `row-gap` y a relleno interno, para que las filas compartidas no sumen márgenes distintos. Por debajo del punto de corte se mantiene la columna flex actual, sin filas reservadas.

`subgrid` está disponible en todos los navegadores desde 2023. Como respaldo, las reglas van dentro de `@supports (grid-template-rows: subgrid)`; sin soporte, se conserva la disposición flex actual con el enlace al pie.

Alternativa descartada: fijar `min-height` por elemento, porque se rompe en cuanto cambia un texto o el ancho. Alternativa descartada: JavaScript para igualar alturas, contrario a la preferencia por generación estática.

Si la ficha de un taller se omite por falta de datos validados (spec «Ficha práctica de los talleres»), su fila queda vacía en esa columna y las demás siguen alineadas.

### 3. Tratamiento de las fotografías

- Proporción nativa 4:3 (`aspect-[4/3]`, `object-cover`), ancho completo de la columna, radio `rounded-lg`, sin sombra ni marco. Las imágenes se generaron con márgenes de recorte para 4:3, y la proporción distinta del mosaico 3:2 de prácticas mantiene la variación de composición que exige `sistema-visual`.
- Se conserva el filete superior de 2 px de cada columna; la fotografía va debajo, con el mismo relleno que hoy separa filete y título.
- Sin efecto de zoom ni de opacidad al pasar el cursor: el movimiento sigue limitado a color y subrayado.
- `<Image>` con `widths={[384, 576, 768]}`, `loading="lazy"` y `sizes`: `(min-width: 48rem) 22rem, 100vw` en la banda y `(min-width: 64rem) 21rem, 100vw` en los talleres. Las dimensiones intrínsecas reservan el espacio y evitan saltos.

### 4. Datos e imágenes

- `Format` y `Atelier` ganan los campos `image: ImageMetadata` y `alt: string`, con los archivos importados en `formats.ts` y `ateliers.ts`, como en `activities.ts`.
- Asignación: `cours-reguliers` → `format-cours-reguliers-01.webp`; `ateliers` → `format-ateliers-salle-reunion.webp`; `mini-retraites` → `format-mini-retraites-ferme.webp`; `atelier-mouvement` → `atelier-mon-corps-au-bureau.webp`; `atelier-nutrition` → `atelier-mieux-manger-au-travail.webp`; `atelier-sommeil` → `atelier-mieux-dormir-recuperer.webp`.
- Los textos alternativos se toman de los JSON de `docs/prompts/` y se cotejan con cada imagen (por ejemplo, la sala de reuniones muestra seis sillas, una jarra y dos cuadernos).

### 5. Accesibilidad de la banda de formatos

La fotografía queda dentro del `li.format`, de modo que el `::after` del enlace del título la cubre: sigue habiendo una sola parada de tabulación y el contorno de foco rodea la columna completa. El nombre accesible del enlace sigue siendo el título del formato; la imagen aporta su descripción aparte.

### 6. Mención «Images d’illustration»

Un párrafo pequeño al pie de cada rejilla, como en `#cours-reguliers`: en `ink` sobre la banda mostaza y en `ink-soft` sobre `sunk` en los talleres (≥ 6:1 según `DESIGN.md`).

### 7. Ejecución visual con `impeccable`

La implementación de la interfaz se hace invocando la skill `impeccable` con `DESIGN.md` y `.impeccable/surfaces/site.md` como contrato, y termina con su pase de revisión. Ambos documentos se actualizan: la descripción del primer bloque (marca dominante), `FormatsBand` y `AtelierBlock` (fotografía, filas compartidas) y el límite de uso de las imágenes de ilustración.

## Risks / Trade-offs

- [Tres fotografías sobre tres columnas pueden leerse como «rejilla de tarjetas»] → Sin contenedor, sombra ni botón por elemento; se conservan el filete y la separación por espacio, y la sección de talleres mantiene su lista y su ficha, que la distinguen del mosaico.
- [La banda mostaza crece en altura y retrasa «Comment se construit un projet»] → Aceptado: es el cambio pedido. En móvil cada formato suma unos 16rem; se comprueba que la zona pulsable y el ritmo de lectura siguen siendo cómodos.
- [«Bliss» a 88 px compite con el logotipo de la cabecera] → Es la intención del cambio; se verifica en 1440 px que el botón sigue visible sin desplazarse.
- [La fotografía de la granja es más oscura y saturada que las otras dos] → Se comprueba el conjunto sobre mostaza durante la revisión; si desentona, se informa a Virginia en lugar de retocar la imagen.
- [Navegadores sin `subgrid`] → Respaldo flex mediante `@supports`; se pierde la alineación fina, no el contenido.
