# Tasks

## 1. Preparación

- [x] 1.1 Invocar la skill `impeccable` para el trabajo de interfaz, con `DESIGN.md` y `.impeccable/surfaces/site.md` como contrato; verificar que la dirección cargada es «estándar del sector» y que no propone sombras, degradados ni animaciones de entrada
- [x] 1.2 Abrir las seis fotografías de `src/assets/entreprises/` (`format-cours-reguliers-01`, `format-ateliers-salle-reunion`, `format-mini-retraites-ferme`, `atelier-mon-corps-au-bureau`, `atelier-mieux-manger-au-travail`, `atelier-mieux-dormir-recuperer`) y cotejar cada texto alternativo de los JSON de `docs/prompts/` con lo que se ve; verificar que ninguna muestra personas, texto legible ni marcas y anotar cualquier corrección de `alt`

## 2. Primer bloque de la portada

- [x] 2.1 En `src/pages/index.astro`, aumentar `.hero-brand` a `clamp(3rem, 2rem + 4.5vw, 5.5rem)` y reducir el `h1` del bloque a `clamp(1.75rem, 1.3rem + 2vw, 2.75rem)` con una regla local (sin tocar el `h1` de `global.css`); verificar en 320, 375, 768 y 1440 px que «Bliss» es mayor que el titular y que no hay desplazamiento horizontal
- [x] 2.2 Ajustar el espacio entre marca, titular, frase y botón; verificar en 1440 × 800 que el titular ocupa como máximo tres líneas y que «Découvrir nos solutions» se ve sin desplazarse
- [x] 2.3 Verificar con el árbol de accesibilidad que `/` tiene un único encabezado de nivel 1 con el texto del titular y que «Bliss» no es un encabezado; verificar que `/entreprises/`, `/le-pr-club/`, `/a-propos/` y `/contact/` conservan el tamaño de su `h1`
- [x] 2.4 Actualizar en `DESIGN.md` la descripción del primer bloque (marca dominante, titular a escala de `h2`) y verificar que los contrastes citados siguen correspondiendo al velo del 72 %

## 3. Banda «Trois formats»

- [x] 3.1 Añadir `image` y `alt` a la interfaz `Format` y a las tres entradas de `src/data/formats.ts` con la asignación de `design.md`; verificar con `npm run check` que no hay errores de tipos
- [x] 3.2 En `src/components/FormatsBand.astro`, pintar cada fotografía encima del título con `<Image>` (4:3, `rounded-lg`, `loading="lazy"`, `widths` y `sizes` de `design.md`), dentro del `li` para que el enlace extendido la cubra; verificar que pulsar cada fotografía lleva a su ancla de `/entreprises/`
- [x] 3.3 Convertir las columnas a filas compartidas con `subgrid` desde `md`, dentro de `@supports`, conservando la disposición flex como respaldo y en móvil; verificar en 1280 px que los tres textos empiezan a la misma altura y que los tres «En savoir plus» están en la misma línea
- [x] 3.4 Añadir la mención «Images d’illustration» al pie de la banda; verificar que se lee en `ink` sobre mostaza en 375 y 1440 px
- [x] 3.5 Recorrer la banda con Tab; verificar tres paradas, contorno de foco alrededor de la columna completa (fotografía incluida) y activación con Intro; verificar en 375 px que las columnas se apilan sin huecos reservados
- [x] 3.6 Actualizar la entrada «Bande des formats» de `DESIGN.md` y verificar que describe la fotografía, las filas compartidas y la mención

## 4. Sección «Ateliers ponctuels»

- [x] 4.1 Añadir `image` y `alt` a la interfaz `Atelier` y a las tres entradas de `src/data/ateliers.ts`; verificar con `npm run check` que no hay errores de tipos
- [x] 4.2 En `src/components/AtelierBlock.astro`, pintar la fotografía encima del título con el mismo tratamiento que en la banda (`sizes` de talleres); verificar que título, frase, lista, ficha y enlace conservan su texto y su orden
- [x] 4.3 Hacer que la rejilla de `src/pages/entreprises.astro` y cada `article` compartan seis filas con `subgrid` desde `lg`, dentro de `@supports`, agrupando la etiqueta «Nos thématiques» y su lista en una fila; verificar en 1280 px que frases, temáticas, fichas y enlaces empiezan a la misma altura en las tres columnas
- [x] 4.4 Añadir la mención «Images d’illustration» al pie de la rejilla de talleres; verificar que se lee en `ink-soft` sobre `sunk`
- [x] 4.5 Verificar en 375 y 768 px que los talleres se apilan, que cada fotografía ocupa el ancho del contenido y que no hay desplazamiento horizontal; verificar que los enlaces `/contact/?activite=…#contact-form` siguen funcionando y que las anclas `#atelier-*` no cambian
- [x] 4.6 Actualizar la entrada «Talleres» de `DESIGN.md` y el límite de imágenes de ilustración en `.impeccable/surfaces/site.md`; verificar que ambos nombran los dos bloques nuevos

## 5. Comprobación de conjunto

- [x] 5.1 Ejecutar `npm run check` y `npm run build`; verificar que ambos terminan sin errores y que ninguna variante de imagen generada en `dist/_astro/` supera 500 kB
- [x] 5.2 Revisar `/` y `/entreprises/` en 320, 375, 768, 1280 y 1440 px y con zoom al 200 % en 1280 px; verificar que no hay texto recortado, solapes ni desplazamiento horizontal
- [x] 5.3 Verificar en la pestaña de red que las seis fotografías nuevas se cargan de forma diferida y que al aparecer no desplazan el contenido
- [x] 5.4 Pasar la revisión final de `impeccable` sobre las tres zonas modificadas y comparar con `docs/prompts/Bliss.png`, `trois formats.png` y `Ateliers ponctuels.png`; verificar que no queda ningún hallazgo material abierto o dejarlo anotado para Virginia
