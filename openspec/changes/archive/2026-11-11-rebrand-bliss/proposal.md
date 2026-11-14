# Proposal

## Why

La empresa cambia de nombre: deja de llamarse «Vivimoves» y pasa a llamarse «Bliss». El sitio debe reflejarlo en todas las páginas y, de paso, Virginia quiere una portada más evocadora (fotografía de fondo y nuevo mensaje), una navegación con etiquetas más claras para quien llega, menos repetición del bloque de presentación de la empresa y unas reseñas de Google que se reconozcan como tales a primera vista.

## What Changes

- **Marca**: «Vivimoves» se sustituye por «Bliss» en todos los textos visibles, títulos, descripciones, textos alternativos, asunto del formulario e imagen Open Graph de las cinco páginas. El dominio de producción (`vivimoves-site.vercel.app`), el e-mail y las cuentas externas no cambian en este cambio.
- **Navegación** (cabecera y pie): «Entreprises» pasa a «Bien-être au travail» y «Le PR Club» pasa a «Communauté». Las rutas `/entreprises/` y `/le-pr-club/` se conservan.
- **Primer bloque de la portada**: la fotografía `hero-terrasse-coach-03.webp` cubre el bloque entero como fondo, con un velo uniforme que garantiza la lectura del texto. Texto nuevo: «Bliss» / «Le bien-être par le mouvement, au cœur de vos équipes» / «Bliss vous propose des solutions clés en main pour offrir à vos équipes de vraies pauses bien-être, dans le Val-d’Oise». Los dos botones actuales se sustituyen por una única acción «Découvrir nos solutions» hacia `/entreprises/`. Desaparece el panel mostaza con el sol.
- **Bloque del club en la portada**: se titula «Communauté», su botón pasa a «Découvrir la communauté» y su fotografía pasa a ser la de la sesión en la terraza de madera (la del bloque «Envie de venir ?»). El club sigue llamándose «Le PR Club» en el texto.
- **Página del club**: el titular «Envie de venir ?» se sustituye por «Rejoignez le mouvement».
- **Bloque «Une entreprise locale, à taille humaine»**: se elimina de la portada y de `/entreprises/`. Ese contenido queda únicamente en `/a-propos/`, que ya lo desarrolla.
- **Avis Google**: cada página con reseña la muestra en una sección propia (ya no anidada dentro de otro bloque), con el patrón habitual de una reseña de Google: logotipo de Google, mención «Avis Google», inicial del autor, nombre, estrellas de la nota real de esa reseña, texto y enlace a la ficha. Sigue sin nota media, sin recuento y sin widgets de terceros.
- Se actualizan `PRODUCT.md`, `DESIGN.md`, el brief de superficie y el contexto de `openspec/config.yaml` para que la marca y las reglas visuales coincidan con lo anterior.

Todo se resuelve con el stack existente (Astro 5 estático, componentes `.astro`, Tailwind 4 y `astro:assets`): sin dependencias nuevas, sin JavaScript de cliente adicional y sin cambios de rutas.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `estructura-y-migracion`: etiquetas de la navegación principal y del pie; la marca pasa a escribirse «Bliss»; la imagen Open Graph muestra la marca vigente.
- `presentacion-empresa`: desaparece el resumen de empresa de la portada y de `/entreprises`; la presentación queda solo en `/a-propos`; el orden final de `/a-propos` incorpora la sección de reseñas.
- `oferta-empresas`: el primer bloque de la portada cambia de titular y su acción lleva a `/entreprises/` en lugar de a `/contact/`.
- `le-pr-club`: el acceso al club desde la navegación y la portada se etiqueta «Communauté»; nueva fotografía en la portada; nuevo titular del bloque de invitación.
- `resenas-clientes`: la reseña ocupa una sección propia e identificable como reseña de Google (logotipo, estrellas reales, autor).
- `sistema-visual`: se admite una fotografía de ilustración como fondo del primer bloque de la portada, con velo, contraste garantizado y mención visible; se actualiza la referencia al bloque de la terraza.
- `contacto`: la consulta se identifica como procedente de la web de Bliss y Virginia se presenta como fundadora de Bliss.

## Impact

- **Páginas**: `src/pages/index.astro`, `entreprises.astro`, `le-pr-club.astro`, `a-propos.astro`, `contact.astro`.
- **Componentes**: `Header.astro`, `Footer.astro`, `ReviewQuote.astro` (sustituido por una sección de reseña de Google), `ProjectSteps.astro` (deja de alojar la reseña), `AboutBand.astro` (eliminado), `ContactForm.astro`, `BaseHead.astro`.
- **Datos y constantes**: `src/consts.ts` (`SITE_TITLE`), `src/data/reviews.ts` (nota real por reseña).
- **Recursos**: `public/og-vivimoves.jpg` se sustituye por una imagen con «Bliss»; `src/assets/club-plein-air.jpg` deja de usarse en la portada.
- **Documentación**: `PRODUCT.md`, `DESIGN.md`, `.impeccable/surfaces/site.md`, `openspec/config.yaml` (contexto), `README.md` si menciona la marca.
- **Sin cambios**: rutas, sitemap, dominio, Formspree (endpoint), Bookwhen, Instagram, dependencias de `package.json`.
- **SEO**: cambian `title`, `description` y `og:image` de las cinco páginas; las URLs canónicas no cambian.
