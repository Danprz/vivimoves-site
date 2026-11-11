# Design

Dirección fijada por Virginia el 2026-11-11: **estándar del sector, ejecutado con cuidado**. Una web corporativa de servicios sobria y familiar, sin referencias externas impuestas. La paleta del brief es vinculante.

## Principios

- La empresa por delante de la persona: páginas tipográficas, sin retratos en portada ni en «Entreprises».
- Crema como fondo, casi negro para el texto, mostaza para las acciones y para bandas completas (formatos, bloque y página del club).
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

## Movimiento

Solo transiciones de color y subrayado (180 ms, ease-out exponencial). Sin animaciones de entrada. Todo se anula con `prefers-reduced-motion: reduce`.
