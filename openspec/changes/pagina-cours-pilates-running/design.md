# Design

## Context

Ver `proposal.md` para la motivación. Estado actual relevante:

- `src/pages/le-pr-club.astro` es una página de presentación con primer bloque mostaza (`on-accent bg-action`), tres bloques de texto e imagen, la reseña de Google y una banda `ink` hacia `/entreprises/`. Usa `BaseLayout` con `tone="club"`.
- El primer bloque con fotografía de fondo solo existe en `src/pages/index.astro`, con estilos encapsulados (`.hero`, `.hero-photo`, `.hero-veil`, `.hero-content`, `.hero-text`, `.hero-credit`). `DESIGN.md` lo documenta como «el único lugar del sitio con fotografía de fondo» y fija el velo `ink` al 72 % con sus contrastes medidos sobre píxel blanco (crema 6,34:1; mostaza 3,74:1).
- `ExternalLink.astro` ya abre en pestaña nueva con `rel="noopener noreferrer"` y añade « (nouvelle fenêtre)» para lectores de pantalla.
- `BOOKWHEN_URL` y `PR_CLUB_INSTAGRAM_URL` viven en `src/consts.ts`. `/contact` nombra «Bookwhen» en un texto visible.
- La fotografía aportada, `docs/prompts/cergy-pontoise.jpg`, mide 1134 × 756 px (104 kB) y no trae metadatos de autoría ni de origen.
- Fotografías reales disponibles: `club-seance-terrasse.jpg`, `club-reformer.jpg`, `club-tshirt.jpg`, `club-plein-air.jpg`. No hay fotografías del Centre Ann Lewis, de SI le Pilates ni de salidas running.

## Goals / Non-Goals

**Goals:**

- Que una persona entienda en el primer bloque que puede reservar un curso y llegue al botón de reserva correcto en dos acciones como máximo.
- Que los dos cursos se comparen de un vistazo: mismo esqueleto, mismos datos en el mismo sitio.
- Que los horarios y direcciones vivan en un único módulo de datos, fácil de editar por Virginia o por quien mantenga el sitio.
- Un acabado visual cuidado dentro de la dirección «estándar del sector» de `DESIGN.md`, construido con la skill `impeccable`.

**Non-Goals:**

- Integrar, incrustar o consultar la agenda externa, SI le Pilates o Instagram.
- Publicar precios, plazas, niveles, duración de las sesiones o material necesario (no confirmados).
- Mapas incrustados o enlaces a servicios de mapas.
- Datos estructurados (`schema.org`) para los cursos; puede proponerse en un cambio posterior.
- Cambiar la ruta `/le-pr-club/`, el sitemap o las redirecciones existentes.
- Rediseñar el primer bloque de la portada; solo se comparte su estilo.

## Decisions

### 1. La ruta se conserva y solo cambia la etiqueta

`/le-pr-club/` sigue siendo la ruta; la cabecera y el pie pasan a «Pilates & running». `PRODUCT.md` ya establece que las rutas no cambian con las etiquetas, y así no hacen falta redirecciones ni cambios de sitemap.

*Alternativa descartada*: una ruta nueva `/cours/` con redirección desde `/le-pr-club/`. Añade una página de redirección y rompe enlaces ya compartidos (Instagram, Bookwhen) sin beneficio para quien visita.

### 2. Estilos del primer bloque compartidos en `global.css`

Las reglas `.hero`, `.hero-photo`, `.hero-veil`, `.hero-content`, `.hero-text` y `.hero-credit` pasan de `index.astro` a `src/styles/global.css` (capa de componentes), y ambas páginas las usan. Lo específico de la portada (`.hero-brand` y la reducción local del `h1`) se queda en `index.astro`.

*Alternativa descartada*: un componente `PhotoHero.astro` con slots. Las dos páginas difieren en el contenido interior (marca gigante en la portada; titular a escala plena y accesos múltiples en cursos), así que el componente acabaría siendo solo un contenedor de clases.

*Alternativa descartada*: duplicar los estilos en `le-pr-club.astro`. Dos copias del velo y de la altura mínima divergen con el tiempo.

### 3. Composición del primer bloque de cursos

- Mismo velo `color-mix(in srgb, var(--color-ink) 72%, transparent)`: el cielo de la fotografía es casi blanco, que es exactamente el peor caso ya medido en `DESIGN.md`, de modo que los contrastes documentados valen sin tocar el velo.
- Sin línea de marca: el `h1` «Trouvez votre prochain cours à Cergy-Pontoise» va a la escala normal de `h1`, en crema, sin mayúsculas forzadas (las mayúsculas del borrador se interpretan como énfasis, no como estilo). «à Cergy-Pontoise» puede ir en mostaza como único acento, al ser texto grande (3,74:1 ≥ 3:1).
- Dos párrafos: el de los cursos como `lede` y el del club en tamaño de cuerpo.
- Accesos: dos botones ancla, «Pilates tapis» (`#pilates-tapis`, primario) y «Pilates Reformer» (`#pilates-reformer`, secundario sobre oscuro), y un `text-link` «Le PR Club» (`#le-pr-club`). No hay enlaces externos en el primer bloque: la reserva se decide con los horarios a la vista.
- La fotografía se recorta con `object-fit: cover`. `object-position` se ajusta para que la pasarela roja quede visible a la derecha del texto en escritorio y centrada en móvil; se verifica en 320, 375, 768 y 1440 px.
- No lleva «Image d’illustration» (es una fotografía real del lugar). `alt=""`: es decorativa respecto al contenido, como en la portada.
- La imagen se copia a `src/assets/cergy-pontoise.jpg` y se sirve con `<Image>` en `widths={[640, 960, 1134]}`, `loading="eager"` y `fetchpriority="high"`. No se generan anchos mayores que el original.

### 4. Datos de los cursos en un módulo tipado

Nuevo `src/data/cours.ts` con una lista de dos cursos. Cada uno declara: identificador de ancla, titular, lugar, dirección (calle, ciudad), horarios como lista de `{ jours: string[], heures: string[] }`, URL de reserva y nombre accesible del botón. `SI_LE_PILATES_URL` se añade a `src/consts.ts` junto a las demás URLs externas.

Horarios de partida (se asume que las horas indicadas son horas de inicio):

| Curso | Lugar | Horarios |
|---|---|---|
| Pilates tapis | Centre Ann Lewis, 5 rue Alexandre Prachay, Pontoise | lundi 19h30 · mardi 19h30 · vendredi 12h30 |
| Pilates Reformer | SI le Pilates, 24 rue Pierre Butin, Pontoise | mardi, mercredi, jeudi · 11h, 12h, 13h |

*Alternativa descartada*: una Content Collection. Dos entradas con estructura fija no justifican un esquema de colección ni Markdown.

### 5. Estructura de los bloques 2 y 3

Un mismo componente `CoursBlock.astro` para ambos cursos, con una propiedad que invierte el lado de la fotografía:

- `section` con `id` de ancla y `scroll-margin-top`.
- Columna de texto: `h2`, una frase que nombra a Virginia («Cours animés par Virginia, coach sportive diplômée d’État»), lugar y dirección en un elemento `address`, horarios en una lista de descripción (`dl`: día → horas) con filetes (`.ruled`), y el botón de reserva.
- Columna de imagen: `club-seance-terrasse.jpg` para tapis y `club-reformer.jpg` para Reformer, con sus `alt` actuales. El `alt` de la terraza sigue describiendo una sesión al aire libre; no se presenta como el Centre Ann Lewis.
- Sin tarjetas, sombras ni iconos decorativos: filetes y tipografía, como el resto del sitio.

Botones: «Réserver un cours sur tapis» → `BOOKWHEN_URL`; «Réserver un cours Reformer» → `SI_LE_PILATES_URL`. Ambos con `ExternalLink` y clase `btn btn-primary`. Los nombres accesibles son distintos y ninguno nombra el servicio.

### 6. Bloque 4: Le PR Club

Banda mostaza (`on-accent bg-action`) con `id="le-pr-club"`: `h2` «Le PR Club», una frase sobre la comunidad de Pilates y running de Cergy-Pontoise, la mención de las salidas running gratuitas y una línea «fondé par Virginia». Acción principal: botón «Suivre Le PR Club sur Instagram» (`btn` con la variante `.club-primary` ya existente, `ink` sobre mostaza). Acción secundaria: `text-link` «Voir les prochaines sorties» → `BOOKWHEN_URL`. Fotografía: `club-tshirt.jpg`.

El texto no promete fechas: remite a Instagram para saber cuándo es la próxima salida, lo que sigue siendo cierto con la agenda vacía.

### 7. Alternancia de fondos

Primer bloque (fotografía, oscuro) → tapis (`page`) → Reformer (`sunk`) → club (mostaza) → reseña de Google (`tone="page"`) → banda de empresas (`ink`). No hay dos bandas mostaza contiguas ni dos bandas oscuras contiguas. `tone="club"` se mantiene en `BaseLayout`.

### 8. «Bookwhen» fuera del texto visible

La constante `BOOKWHEN_URL` conserva su nombre (no es visible). Se reescriben el `title`, la metadescripción y los textos de `/le-pr-club`, y el bloque de `/contact` pasa a «Un cours de Pilates ou une sortie du PR Club ?» con un enlace interno `Cta` a `/le-pr-club/`. `/contact` deja de importar `BOOKWHEN_URL`.

### 9. Portada

El bloque mostaza del final de la portada conserva su composición y su fotografía. Cambian el `h2` («Pilates et running à Cergy-Pontoise»), la frase (cursos de Pilates sobre tapis y Reformer, y Le PR Club) y el botón («Trouver un cours»). No se nombra a Virginia.

### 10. Metadatos

`title`: «Cours de Pilates à Cergy-Pontoise · tapis, Reformer et PR Club». `description`: cursos de Pilates sobre tapis y Reformer en Pontoise, horarios semanales y salidas running gratuitas de Le PR Club. La URL canónica y el sitemap no cambian.

### 11. Sin JavaScript de cliente

Los accesos del primer bloque son enlaces ancla. El desplazamiento suave, si se añade, es `scroll-behavior` en CSS dentro de `@media (prefers-reduced-motion: no-preference)`. La página sigue siendo totalmente estática.

### 12. Construcción con `impeccable`

La implementación visual se hace con la skill `impeccable` en modo Persuade, partiendo de `DESIGN.md` y de `.impeccable/surfaces/site.md`, y se cierra con su revisión de acabado. Las decisiones 3 a 7 son el contrato de dirección: `impeccable` afina ritmo, proporciones, tipografía de los horarios y estados de foco, no la estructura ni el contenido.

## Risks / Trade-offs

- **Derechos de la fotografía de Cergy-Pontoise** → No consta el origen ni la licencia, y el Axe Majeur es una obra protegida. Antes de desplegar, Virginia confirma que puede usarla comercialmente y si exige crédito; si no puede, el primer bloque se publica con el fondo `ink` de respaldo (ya previsto) o con otra fotografía, sin cambios de estructura.
- **Resolución de la fotografía (1134 px)** → En pantallas anchas se amplía y pierde nitidez; el velo al 72 % lo disimula. Si se consigue un original de 1700 px o más, basta con sustituir el archivo y añadir un ancho.
- **Horarios desactualizados** → Los horarios pasan a mantenerse a mano. Se concentran en `src/data/cours.ts` y cada bloque lleva una línea que remite a la reserva para ver los créneaux abiertos, de modo que la fuente de verdad sigue siendo externa.
- **Nombrar a terceros** → Centre Ann Lewis y SI le Pilates se nombran con su dirección. Virginia confirma su acuerdo antes de desplegar; si alguno no quiere figurar, se sustituye por «à Pontoise» en el módulo de datos.
- **Grafía de las direcciones** → Se usa «rue Alexandre Prachay» y «rue Pierre Butin» (el borrador decía «rue de pierre butin»). Virginia valida la grafía en la revisión de textos.
- **La fotografía de tapis no es del lugar** → Puede sugerir cursos al aire libre. Se mitiga con el `alt` fiel y con la dirección del Centre Ann Lewis bien visible; se sustituirá cuando haya una fotografía de la sala.
- **Virginia más visible** → Se limita a una línea por bloque, sin retrato, y solo en esta página; el resto del sitio conserva la regla.
- **El `h1` ya no nombra el club** → Quien llega buscando «Le PR Club» lo encuentra en el segundo párrafo del primer bloque y en un `h2` propio con ancla.

## Open Questions

- ¿Qué crédito o licencia acompaña a la fotografía de Cergy-Pontoise, y existe una versión de mayor resolución?
- ¿Habrá fotografías del Centre Ann Lewis, de SI le Pilates y de una salida running para sustituir las actuales más adelante?
