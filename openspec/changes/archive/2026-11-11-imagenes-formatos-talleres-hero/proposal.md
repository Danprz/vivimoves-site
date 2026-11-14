# Proposal

## Why

Tras revisar el sitio publicado, Virginia pide tres ajustes visuales: en el primer bloque de la portada la marca «Bliss» pesa menos que el titular, y la banda «Trois formats» y la sección «Ateliers ponctuels» son solo texto, con columnas cuyos elementos no coinciden en altura cuando un título ocupa dos líneas (ver `docs/prompts/Bliss.png`, `trois formats.png` y `Ateliers ponctuels.png`). Las seis fotografías de ilustración ya están generadas en `src/assets/entreprises/`.

## What Changes

- **Primer bloque de la portada**: la marca «Bliss» en mostaza crece y pasa a ser el elemento de mayor tamaño del bloque; el titular «Le bien-être par le mouvement, au cœur de vos équipes» se reduce. El titular sigue siendo el `h1` de la página; no cambia ningún texto.
- **Banda «Trois formats» de la portada**: cada formato muestra una fotografía de ilustración encima de su título, en este orden: `format-cours-reguliers-01.webp` (Cours réguliers), `format-ateliers-salle-reunion.webp` (Ateliers ponctuels) y `format-mini-retraites-ferme.webp` (Mini-retraites d’équipe).
- **Sección «Ateliers ponctuels» de `/entreprises/`**: cada taller muestra una fotografía de ilustración encima de su título: `atelier-mon-corps-au-bureau.webp`, `atelier-mieux-manger-au-travail.webp` y `atelier-mieux-dormir-recuperer.webp`, respectivamente.
- **Alineación**: en ambas secciones, cuando las tres columnas están en fila, las fotografías, los títulos, los textos y los enlaces o fichas quedan a la misma altura en las tres columnas, aunque un título ocupe más líneas que otro.
- **Mención de ilustración**: las dos secciones muestran «Images d’illustration»; la regla que limitaba las imágenes generadas a las cinco prácticas y al fondo de la portada se amplía a estos dos bloques.
- `DESIGN.md` y `.impeccable/surfaces/site.md` se actualizan para reflejar la nueva jerarquía del primer bloque y las fotografías en los dos bloques.

Se resuelve con el stack actual: componentes `.astro`, `<Image>` de `astro:assets`, Tailwind 4 y los tokens de `global.css`. Sin JavaScript de cliente, sin dependencias nuevas y sin cambios de rutas, textos ni metadatos.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `sistema-visual`: se amplía «Imágenes de ilustración identificadas» a la banda de formatos y a los talleres; se añaden la jerarquía de tamaños del primer bloque de la portada y la alineación entre columnas paralelas.
- `oferta-empresas`: se añade que cada formato de la portada y cada taller de `/entreprises/` va acompañado de su fotografía de ilustración.

## Impact

- `src/pages/index.astro`: tamaños de `.hero-brand` y del `h1` del primer bloque.
- `src/components/FormatsBand.astro`, `src/data/formats.ts`: imagen y texto alternativo por formato, rejilla alineada, mención de ilustración.
- `src/components/AtelierBlock.astro`, `src/data/ateliers.ts`, `src/pages/entreprises.astro`: imagen y texto alternativo por taller, rejilla alineada, mención de ilustración.
- `DESIGN.md`, `.impeccable/surfaces/site.md`: documentación de diseño.
- Rendimiento: seis imágenes más (57–131 kB en origen), todas bajo el primer bloque y con carga diferida.
- La parte visual se ejecuta con la skill `impeccable`, respetando la dirección fijada en `DESIGN.md`.
