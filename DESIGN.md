# Design

Dirección fijada por Virginia el 2026-11-11: **estándar del sector, ejecutado con cuidado**. Una web corporativa de servicios sobria y familiar, sin referencias externas impuestas. La paleta del brief es vinculante.

## Principios

- La empresa por delante de la persona: sin retratos en portada ni en «Entreprises». El primer bloque de la portada es una fotografía de ilustración a sangre (`hero-terrasse-coach-03.webp`) con un velo `ink` uniforme al 72 %, texto en crema, la marca «Bliss» en mostaza como elemento de mayor tamaño del bloque, un único botón y la mención «Image d’illustration». `/le-pr-club` repite ese primer bloque con una fotografía real de Cergy-Pontoise; `/entreprises` también, con una imagen de ilustración (`entreprises/hero-studio-move-breathe.webp`, mención «Image d’illustration», `h1` de 18ch, tres botones ancla hacia los formatos y la frase de zona con «Parlons-en»). Son los tres únicos bloques del sitio con fotografía de fondo; `.btn-ghost` (contorno crema) vive en `global.css` para los tres. «Entreprises» combina texto breve con un mosaico de fotografías de ilustración (dos grandes y tres pequeñas, proporción 3:2, sin sombras ni botones por elemento) y la mención visible «Images d’illustration». La banda de formatos de la portada y los tres talleres llevan una fotografía de ilustración 4:3 por columna, sin personas, con la misma mención.
- Crema como fondo, casi negro para el texto, mostaza para las acciones y para bandas completas (formatos en la portada, mini-retraites, bloque de cursos de la portada). Dos bandas mostaza nunca son contiguas.
- Bloques ordenados separados por filetes; nada de rejillas de tarjetas idénticas con icono y sombra, ni emojis, degradados o efectos de vidrio.
- Sin antetítulos sobre los titulares. La numeración solo aparece donde el orden informa (pasos del proyecto).
- El club usa los mismos tokens con más mostaza y más fotografía.

## Tokens (`src/styles/global.css`, `@theme`)

| Token | Valor | Uso |
|---|---|---|
| `page` | `#F7F1E6` | Fondo base |
| `surface` | `#FFFBF3` | Campos y panel del formulario |
| `sunk` | `#EDE3D0` | Bandas alternas |
| `ink` | `#171714` | Texto, bordes de acción, bandas oscuras |
| `ink-soft` | `#57524A` | Texto secundario (≥ 6:1 sobre los tres fondos claros) |
| `line` | `#D9CDB6` | Filetes decorativos |
| `line-strong` | `#857B69` | Bordes de campo y separadores (≥ 3:1) |
| `action` / `action-hover` | `#EFB13C` / `#E09E22` | Acción principal y bandas mostaza; el texto encima es `ink` |
| `accent-text` | `#7A5200` | Acentos de texto sobre crema |
| `danger` / `success` | `#A32A1C` / `#1E6A3B` | Estados |
| `on-dark-soft` | `#C9C2B4` | Texto secundario sobre `ink` |

El mostaza nunca se usa como texto sobre crema (1,69:1).

## Tipografía

Una sola familia, **Atkinson Hyperlegible**, ya alojada en `public/fonts/` (400 y 700). Titulares en 700 con interletra −0,02em y `text-wrap: balance`; cuerpo de 17–18 px con interlínea 1,6; columna de lectura de 65 caracteres.

## Componentes

`.btn` (borde `ink` de 2 px, radio 0,5rem, alto mínimo 44 px) en variantes `btn-primary` y `btn-secondary`; `.text-link` con flecha; `.input`; `.ruled` para listas con filetes. Foco: contorno de 2 px en `ink` sobre fondos claros y mostaza, en crema dentro de `.on-dark`.

### Bloques de contenido

- **Bande des formats** (`FormatsBand`): tres columnas con filete superior de 2 px y, debajo, una fotografía 4:3 (`rounded-lg`, sin sombra ni marco); cada columna es un único enlace extendido a toda su superficie, fotografía incluida, con el foco dibujado alrededor de la columna. Desde `md` las columnas comparten filas con `subgrid` (fotografía, título, texto, «En savoir plus»), de modo que cada elemento empieza a la misma altura; al pie, «Images d’illustration» en `ink`.
- **Cifras** (`KeyFigures`): número en 700 al tamaño de un `h2`, en `ink` (nunca mostaza sobre crema), frase y fuente enlazada en `ink-soft`. Sin iconos.
- **Talleres** (`AtelierBlock`): filete superior, fotografía 4:3 con el mismo tratamiento que en la banda de formatos, frase destacada en negrita, lista «Nos thématiques» y ficha práctica en un panel `surface` con iconos de trazo decorativos y etiquetas de texto. Desde `lg` los tres talleres comparten seis filas con `subgrid` (fotografía, título, frase, temáticas, ficha, enlace); al pie, «Images d’illustration» en `ink-soft`.
- **Primer bloque de la página de cursos** (`le-pr-club.astro`, `.hero.cours-hero`): mismas clases y mismo velo al 72 % que la portada, con la vista aérea del Axe Majeur (`cergy-pontoise.jpg`, `object-position: 60% 55%` para dejar la pasarela roja a la derecha del texto). Sin marca ni mención de ilustración (fotografía real). `h1` a escala plena, máx. 16ch, con «à Cergy-Pontoise» en mostaza (texto grande, 3,74:1 en el peor caso); dos párrafos en crema y tres accesos ancla: botón primario «Pilates sur tapis», y botones de contorno crema «Pilates Reformer» y «Sorties running». El bloque «Sorties running» sigue la rejilla de `CoursBlock` sobre fondo `page`, sin banda mostaza, con la fotografía de la pasarela atenuada (`saturate(0.7) brightness(0.92)`).
- **Primer bloque de «À propos»** (`a-propos.astro`, `.hero.propos-hero`): mismas clases y mismo velo, con la fotografía de estudio `a-propos-studio-tapis.webp`; sin botones ni mención de ilustración.
- **«Deux univers»** (`a-propos.astro`, `.univers`): dos columnas desde 48rem sobre fondo `sunk`; cada una con fotografía real 3:2 (borde `ink` de 2px, radio 0,5rem, `object-position` propio), `h3`, texto y `text-link`. Sin leyenda de ilustración ni filtro.
- **Botones de ancla de los primeros bloques** (`.raccourcis`, en `global.css`): fila flexible con salto de línea, un `btn-primary` y el resto `btn-ghost`; la usan `/le-pr-club` y `/entreprises`.
- **Peso de las fotografías**: las fotos reales densas (bloques de cursos, club, prácticas) se sirven con `quality` 60–70 en `<Image>`; las fuentes HEIC se convierten antes a JPEG de 1600px como máximo y no se publican.
- **Bloque de curso** (`CoursBlock`): `h2`, frase, línea «Cours animés par Virginia…» en `ink-soft`, ficha con filete superior de 2 px (dirección en `address` con icono de trazo, «Chaque semaine» y horarios en `dl` con filetes `line-strong`, cada hora en una píldora `surface` con borde `ink` y cifras tabulares), botón de reserva `btn-primary` externo y nota en `ink-soft`. Fotografía 4:5 (3:2 en móvil); el segundo curso la pone a la izquierda y alterna fondo `sunk`.
- **Primer bloque de la portada** (`index.astro`, `.hero`; estilos compartidos en `global.css`): fondo `ink` de respaldo, foto con `<Image>` en posición absoluta y `object-fit: cover`, velo `color-mix(in srgb, var(--color-ink) 72%, transparent)` (sin degradado). Peor caso medido sobre píxel blanco: crema 6,34:1, mostaza 3,74:1; por debajo del 70 % la marca mostaza baja de 3:1. Contenido a la izquierda, máx. 40rem, `min-height: min(78svh, 44rem)`. La marca mide `clamp(3rem, 2rem + 4.5vw, 5.5rem)` y el `h1` se reduce localmente a la escala de un `h2` (`clamp(1.75rem, 1.3rem + 2vw, 2.75rem)`); ambos siguen siendo texto grande, así que los contrastes anteriores valen.
- **Reseña de Google** (`GoogleReview`): sección propia, una por página, con fondo `page` o `sunk` según la alternancia. A la izquierda, `h2` «Avis Google» con el logotipo «G», introducción y enlace externo a la ficha; a la derecha, tarjeta `figure` (fondo `surface`, borde 1 px `line-strong`, radio 0,5rem, sin sombra) con inicial en círculo `ink`, nombre, «Avis Google», estrellas y cita. En móvil: titular, tarjeta, enlace. La firma se ve en cabecera pero sigue a la cita en el orden de lectura.
- **Estrellas**: SVG inline con relleno `action` y contorno `ink` (el mostaza solo no llega a 3:1 sobre crema); el grupo lleva `role="img"` y `aria-label="Note : N sur 5"`. Solo se pintan con una nota cotejada.
- **Excepción de color**: el logotipo de Google se dibuja con sus cuatro colores oficiales, incrustado y `aria-hidden`, solo dentro de `GoogleReview`. Es el único color fuera de los tokens.
- **Pasos numerados** (`.steps`, `.steps-inline`): círculo mostaza con borde `ink`; sobre fondo mostaza el círculo pasa a crema.

## Movimiento

Solo transiciones de color y subrayado (180 ms, ease-out exponencial). Sin animaciones de entrada. Todo se anula con `prefers-reduced-motion: reduce`.
