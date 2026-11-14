# Design

## Context

Ver `proposal.md` para la motivación. Estado actual relevante:

- La marca vive en `SITE_TITLE` (`src/consts.ts`), que alimenta la cabecera y el pie, pero está además escrita a mano en 5 `title`, 1 `description`, 1 `h1`, 6 frases de cuerpo, el asunto de Formspree (`ContactForm.astro`) y la imagen `public/og-vivimoves.jpg` (referenciada en `BaseHead.astro`).
- La portada (`src/pages/index.astro`) abre con un bloque tipográfico en dos columnas: texto y un panel mostaza con el sol (`.hero-panel`, `.sun`, estilos locales de la página).
- `AboutBand.astro` se usa en `index.astro` y en `entreprises.astro` (con `showFacilitator`). `/a-propos/` no lo usa: ya desarrolla ese contenido en los bloques «Une proposition locale» y «Une entreprise à taille humaine».
- `ReviewQuote.astro` es un fragmento sin sección propia. Se inserta dentro de `ProjectSteps` (portada, vía `<slot />`), dentro de `#cours-reguliers` (`/entreprises/`), dentro de «L’esprit du club» y dentro del bloque de Virginia en `/a-propos/`.
- `src/data/reviews.ts` guarda cuatro reseñas (una por página) con `author`, `text` y `page`; no guarda la nota.
- `DESIGN.md` fija hoy: «La portada es tipográfica», sin degradados, sin antetítulos, sin tarjetas con sombra, colores solo por tokens. Tres de esas reglas se ven afectadas y se actualizan de forma explícita (ver Decisiones 2, 3 y 6).

La dirección visual sigue siendo la elegida por Virginia: estándar del sector, sobrio y ejecutado con cuidado. Este cambio es un refinamiento dentro de ese mundo visual, no un rediseño: mismos tokens, misma tipografía, mismos componentes `.btn` y `.text-link`.

## Goals / Non-Goals

**Goals:**

- Un único punto de verdad para el nombre de la marca donde sea posible, y cero apariciones de «Vivimoves» en el HTML generado fuera del dominio.
- Un primer bloque con fotografía que se lea bien en cualquier ancho y con cualquier recorte de la imagen, sin depender de la suerte del encuadre.
- Una sección de reseña que cualquier persona reconozca como «una reseña de Google» en menos de un segundo, sin fabricar datos ni cargar nada de terceros.
- Mantener la generación estática y no añadir JavaScript de cliente.

**Non-Goals:**

- Cambiar el dominio de producción, el `site` de `astro.config.mjs`, el e-mail de contacto, las cuentas de Instagram/LinkedIn o la ficha de Google (que sigue llamándose «Virginia moves…»).
- Renombrar las rutas `/entreprises/` y `/le-pr-club/` o añadir redirecciones.
- Renombrar Le PR Club: el club conserva su nombre (camiseta, Bookwhen e Instagram lo llevan); solo cambia la etiqueta de acceso.
- Un nuevo logotipo: se conserva el sol (`public/soleil.svg`) junto al nombre «Bliss».
- Mostrar más de una reseña por página, carruseles, nota media o recuento.
- Renombrar archivos internos sin efecto público (`hero-vivimoves-0x.webp`, nombre del paquete, carpeta del repositorio).

## Decisions

### 1. Marca: constante única más sustitución revisada frase a frase

`SITE_TITLE` pasa a `'Bliss'`. Los `title` de página y el asunto de Formspree pasan a componerse con `SITE_TITLE` en lugar de repetir el nombre a mano; las frases de cuerpo se reescriben una a una, porque la sustitución ciega falla en francés (p. ej. «Vivimoves est basée» concuerda en femenino; el `h1` de `/a-propos/` pasa a «Bliss, le bien-être au travail près de chez vous»).

Títulos resultantes: «Bliss · Mouvement et bien-être en entreprise» (portada), «Bien-être en entreprise : cours, ateliers et mini-retraites · Bliss», «À propos · Bliss», «Contact · Parlons de votre équipe · Bliss». El de `/le-pr-club/` no cambia.

*Alternativa descartada*: buscar y reemplazar global. Es más rápido pero deja concordancias incorrectas y tocaría el dominio y nombres de archivo que no deben cambiar.

La imagen social se regenera con la misma composición (fondo mostaza, banda inferior oscura) como `public/og-bliss.jpg`, 1200 × 630, con «Bliss» y el nuevo titular; se elimina `og-vivimoves.jpg` y se actualiza el valor por defecto en `BaseHead.astro`.

### 2. Primer bloque: fotografía a sangre con velo `ink` uniforme al 72 %

Estructura: una `<section>` con `position: relative`, fondo `ink` y clase `on-dark`; dentro, la fotografía con `<Image>` de `astro:assets` en posición absoluta (`inset: 0`, `object-fit: cover`), una capa de velo y, por encima, el contenido en `.wrap`. La cabecera se queda como está, opaca y por encima del bloque (no se superpone a la foto).

- **Velo**: `color-mix(in srgb, var(--color-ink) 72%, transparent)`, uniforme. Con el velo al 72 %, incluso sobre un píxel blanco puro el fondo resultante deja el texto crema (`page`) por encima de 5,5:1; el umbral mínimo para 4,5:1 es ≈ 63 %, así que hay margen. La garantía no depende del recorte, que cambia con cada ancho.
- **Por qué oscuro y no crema**: un velo crema que garantice 4,5:1 con texto `ink` tendría que ser casi opaco y la fotografía dejaría de reconocerse. El velo oscuro deja ver la escena y es el patrón que el público del sector ya conoce.
- **Por qué uniforme y no degradado**: `DESIGN.md` excluye los degradados y un degradado solo protege una zona; el texto ocupa casi todo el bloque en móvil.
- **Color del texto**: titular, frase y mención en `page`; la marca «Bliss» en `action` (mostaza), válida solo como texto grande (≥ 3:1 en el peor caso). `on-dark-soft` no se usa aquí: sobre la zona más clara no llega a 4,5:1.
- **Jerarquía**: «Bliss» es un párrafo-marca grande y en negrita encima del `h1`, no un antetítulo en versalitas; el `h1` es «Le bien-être par le mouvement, au cœur de vos équipes»; debajo, la frase en `.lede` con ancho máximo de lectura. El contenido se alinea a la izquierda, como el resto del sitio, y ocupa como mucho ~40rem para que la mitad derecha de la foto respire en escritorio.
- **Altura**: `min-height` fluida (≈ `min(78svh, 44rem)`), contenido centrado en vertical; el bloque crece si el texto lo necesita (zoom al 200 %). En 375 × 812 el botón queda visible sin desplazarse.
- **Encuadre**: `object-position` centrado; en retrato el recorte conserva a la coach y a las dos personas centrales. Se comprueba en 320, 375, 768 y 1440 px.
- **Imagen**: `alt=""` (ilustrativa), `loading="eager"`, `fetchpriority="high"`, `widths` de 640 a 1672 y `sizes="100vw"`. El original pesa menos de 500 kB y Astro genera las variantes.
- **Mención**: «Image d’illustration» en texto pequeño, abajo a la derecha del bloque dentro de `.wrap`, en `page`.
- **Acción**: un único botón `btn-primary` «Découvrir nos solutions» hacia `/entreprises/`. Sobre fondo oscuro ya existe la variante `.on-dark .btn-primary` y el foco en crema.

Se eliminan `.hero-panel` y `.sun` de `index.astro`. Actualización de `DESIGN.md`: la portada deja de ser «tipográfica»; se documenta el patrón «fotografía a sangre con velo `ink` uniforme», reservado al primer bloque de la portada.

*Sobre «los dos botones»*: la petición dice poner «Découvrir nos solutions» en los dos botones. Dos enlaces con el mismo texto y destinos distintos confunden a cualquier persona y, sobre todo, a quien navega con lector de pantalla, y dos enlaces iguales al mismo destino no aportan nada. Se resuelve con una única acción; el contacto sigue a un clic en la cabecera y cierra la página en `ContactBand`. Virginia confirmó el botón único el 2026-11-11.

### 3. Reseña de Google: sección propia con tarjeta reconocible

Nuevo componente `GoogleReview.astro` que sustituye a `ReviewQuote.astro` y que renderiza su propia `<section>`:

- **Composición**: dos columnas en escritorio. A la izquierda, el `h2` «Avis Google» precedido del logotipo «G», una frase de introducción (prop `intro`) y el enlace externo «Lire tous les avis sur Google». A la derecha, la reseña. En móvil se apilan en ese orden.
- **Tarjeta de la reseña** (`figure`): fondo `surface`, borde de 1 px `line-strong`, radio 0,5rem, sin sombra. Cabecera con un círculo `ink` con la inicial del autor en `page`, el nombre en negrita y, debajo, «Avis Google»; a la derecha, el logotipo «G» pequeño. Después las estrellas y el `blockquote`. Es la anatomía que usan Google y los widgets de reseñas, con los tokens del sitio.
- **Estrellas**: cinco SVG inline, relleno `action` y contorno `ink` (el mostaza solo no alcanza 3:1 sobre crema); el grupo lleva `role="img"` y `aria-label="Note : N sur 5"`. Solo se pintan si la reseña tiene `rating`.
- **Logotipo de Google**: SVG inline con sus cuatro colores oficiales, `aria-hidden`, dentro del componente. Es la única excepción a «no fijar colores sueltos»: una marca de terceros solo es reconocible con sus colores, y queda aislada en un componente. No se carga nada desde dominios de Google.
- **Datos**: `Review` gana `rating?: 1 | 2 | 3 | 4 | 5`. La nota de cada una de las cuatro reseñas se coteja con la ficha antes de escribirla; sin cotejo, el campo se omite y la tarjeta sale sin estrellas.
- **Una tarjeta, no una rejilla**: hay cuatro reseñas y la regla «una por página, sin repetir» sigue vigente, así que no aparece la rejilla de tarjetas idénticas que `DESIGN.md` excluye.

`ProjectSteps.astro` pierde su `<slot />`, que solo existía para alojar la reseña.

Colocación y fondo (dos bandas mostaza nunca contiguas; alternancia `page`/`sunk`):

| Página | Orden resultante | Fondo de la sección de reseña |
|---|---|---|
| `/` | foto (oscuro) → formatos (mostaza) → pasos (`page`) → **reseña** → Communauté (mostaza) → contacto (`ink`) | `sunk` |
| `/entreprises/` | apertura → cours → ateliers (`sunk`) → mini-retraites (mostaza) → **reseña** → contacto (`ink`) | `page` |
| `/le-pr-club/` | héroe (mostaza) → esprit (`page`) → Rejoignez le mouvement (`sunk`) → fondatrice (`page`) → **reseña** → banda empresa (`ink`) | `sunk` |
| `/a-propos/` | `h1` → tres bloques → Virginia (`sunk`) → **reseña** → contacto (`ink`) | `page` |

Introducciones: «Ce que disent les participants à nos cours» en `/entreprises/` (obligatoria por la spec `resenas-clientes`) y «Ils et elles en parlent» en el resto.

*Alternativa descartada*: incrustar el widget oficial o un servicio de reseñas. Aporta reconocimiento inmediato, pero carga scripts de terceros, rompe la regla de «sin servicios de terceros» y mete cookies en un sitio que hoy no las tiene.

### 4. Navegación: cambian las etiquetas, no las rutas

`Header.astro` y `Footer.astro`: «Bien-être au travail» → `/entreprises/`, «Communauté» → `/le-pr-club/`. «Instagram du PR Club» en el pie no cambia. Las etiquetas son más largas: se comprueba que a 768 px (primer ancho sin menú desplegable) caben en una línea junto a la marca; si no, se reduce el `padding-inline` de los enlaces, no el tamaño del texto.

*Alternativa descartada*: renombrar las rutas a `/bien-etre-au-travail/` y `/communaute/`. Rompería enlaces ya compartidos (LinkedIn, prospección) y exigiría redirecciones en Vercel, sin beneficio para quien visita.

### 5. Bloque «Communauté» de la portada

`h2` «Communauté»; el párrafo conserva «Le PR Club réunit celles et ceux qui aiment bouger ensemble dans le Val-d’Oise» para que la etiqueta nueva y el nombre real del club queden unidos; botón «Découvrir la communauté». La imagen pasa a `club-seance-terrasse.jpg` en proporción 3:2 (la foto es apaisada y 4:3 cortaría a personas de los extremos), con el `alt` que ya tiene en `/le-pr-club/`. `club-plein-air.jpg` deja de usarse; el archivo se conserva en `src/assets/` porque Astro no publica imágenes sin referenciar.

La misma fotografía aparece así en la portada y en `/le-pr-club/` («Rejoignez le mouvement»). Es lo que se ha pedido y es coherente (la portada anticipa la página), pero se anota como compromiso (ver Risks).

### 6. Titular «Rejoignez le mouvement»

Sustituye a «Envie de venir ?». Es una invitación en afirmativo, enlaza con la idea central de la marca (el movimiento) y sigue siendo cierta cuando la agenda está vacía, cosa que no cumplen alternativas como «On vous attend à la prochaine séance». Otras opciones válidas si no convence: «Venez bouger avec nous», «Comment nous rejoindre».

### 7. Retirada de `AboutBand`

Se eliminan sus dos usos y el archivo del componente. No se añade a `/a-propos/`: esa página ya contiene los bloques «Une proposition locale» y «Une entreprise à taille humaine», y repetir el resumen ahí duplicaría el contenido. Con el bloque desaparece de `/entreprises/` la línea «Les séances sont animées par Virginia…»; Virginia sigue presente en `/a-propos/` y `/contact/`.

### 8. Documentos de contexto

Se actualizan en el mismo cambio `PRODUCT.md` (marca «Bliss», uso de la imagen generada en la portada, reseñas en sección propia), `DESIGN.md` (portada con fotografía y velo, componente de reseña de Google, excepción de color del logotipo), `.impeccable/surfaces/site.md` y el `context` de `openspec/config.yaml`. Los textos de `Purpose` y de requisitos no modificados de las specs que nombran «Vivimoves» se actualizan a «Bliss» al sincronizar/archivar, sin cambio de comportamiento.

## Risks / Trade-offs

- **El velo oscurece una fotografía luminosa** → 72 % es el punto que garantiza contraste con margen; se revisa en pantalla real y puede bajarse hasta el 65 % sin perder el 4,5:1 del texto crema.
- **La imagen del primer bloque es generada** → se identifica con «Image d’illustration» y la spec `sistema-visual` se amplía de forma explícita; no representa a Virginia, a clientes ni al club. Cuando haya fotografías reales en empresa, se sustituye sin tocar la estructura.
- **Sin CTA de contacto en el primer bloque de la portada** → la conversión principal del sitio es el formulario. Mitigación: «Contact» destacado en la cabecera, CTA en `/entreprises/` y `ContactBand` al final de la portada.
- **Las estrellas dependen de un dato aún no cotejado** → el componente funciona sin `rating`; la tarea de cotejo va antes de publicar estrellas.
- **Uso del logotipo de Google** → se usa solo como atribución de la fuente, sin modificarlo y junto al enlace a la ficha; si Virginia prefiere evitarlo, la mención textual «Avis Google» basta y la spec lo contempla.
- **«Communauté» como etiqueta y «Le PR Club» como nombre** → riesgo de que alguien no relacione ambos. Mitigación: el bloque de la portada nombra el club en su primera frase y el `h1` de destino dice «Le PR Club».
- **Misma fotografía en la portada y en `/le-pr-club/`** → aceptado; alternativa de bajo coste si molesta: usar `club-plein-air.jpg` en «Rejoignez le mouvement».
- **El dominio sigue conteniendo «vivimoves»** → visible al compartir enlaces. Fuera de alcance; requiere decidir y contratar un dominio.
- **SEO**: cambian títulos y marca; las URLs y canónicas no, así que no hay pérdida de enlaces.

## Migration Plan

1. Implementar en la rama `rebrand`, `npm run build` y revisión en `npm run preview`.
2. Desplegar en Vercel como cualquier otro cambio; no hay redirecciones ni configuración nueva.
3. Tras el despliegue, pedir a LinkedIn (Post Inspector) que refresque la vista previa para que tome `og-bliss.jpg`.
4. Vuelta atrás: revertir el commit; no hay datos ni estado externo afectados. El asunto de los correos de Formspree vuelve al anterior.

## Open Questions

- ¿Habrá un dominio propio para Bliss? Cuando exista, se cambia `site` en `astro.config.mjs` y el requisito «Dominio de producción» en un cambio aparte.
- ¿Se mantiene el sol como símbolo de Bliss o llegará un logotipo nuevo? El cambio no depende de ello.
