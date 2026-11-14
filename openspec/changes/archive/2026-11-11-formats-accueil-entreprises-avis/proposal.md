# Proposal

## Why

Virginia ha revisado la web publicada tras `refonte-entreprises-pr-club` y quiere que los tres formatos (cours réguliers, ateliers ponctuels, mini-retraites) sean la puerta de entrada desde la portada y la estructura de `/entreprises`, que hoy está organizada por actividad y es demasiado textual. Pide además fotos por práctica, tres talleres definidos, datos de contexto en la apertura de `/entreprises`, dos fotografías nuevas y la incorporación de las reseñas reales de su ficha de Google, que hasta ahora no existían como prueba social confirmada.

### Estado de la información

- **Observado en el repositorio**: `src/pages/index.astro` lista las cinco actividades («Cinq façons de remettre du mouvement dans la journée»); `src/pages/entreprises.astro` tiene un primer bloque y un bloque «Pourquoi bouger…» separados, cinco actividades con `ActivityItem.astro` (título, descripción, experiencia, situaciones y CTA), la banda «Trois formats» y «Comment se construit un projet». `public/images/` contiene cinco `.webp` de 1536 × 1024 (142–286 kB) y dos originales de 8,9 MB y 12 MB, todos versionados y servidos tal cual. `docs/prompts/entreprises-images.json` indica que los cinco `.webp` son imágenes generadas («Built-in image_gen tool») y aporta sus textos alternativos.
- **Comprobado en la ficha de Google el 2026-11-11** (`https://share.google/kFFwodaqELVOBsrK4`, «Virginia moves : cours de pilates - mobilité douce», Cergy): 14 reseñas, todas 5/5; 11 con texto (10 en francés, 1 en inglés) y 3 sin texto. Hablan de las clases colectivas de Virginia (Pilates en plein air, tapis, reformer, renforcement); dos describen un programa individual. Ninguna procede de una intervención en empresa.
- **Comprobado en fuentes públicas el 2026-11-11** (a contrastar con la fuente primaria durante apply): Anses, 2022 — 95 % de los adultos expuestos a un riesgo para la salud por falta de actividad física o exceso de tiempo sentado; Assurance Maladie – Risques professionnels, vía Santé publique France — los TMS son el 87–88 % de las enfermedades profesionales reconocidas; estudio Goodwill Management para MEDEF, CNOSF y AG2R La Mondiale, 2015 — de 6 a 9 % de productividad para una persona sedentaria que empieza a practicar.
- **Pedido por Virginia (2026-11-11)**: todo lo descrito en «What Changes».
- **Propuesto en este cambio**: nombres, textos y composición de los tres talleres, de la mini-retraite y del bloque de datos; selección y ubicación de las reseñas; recortes de las dos fotografías. Son recomendaciones hasta que Virginia las valide.

### Conflictos con las specs del cambio anterior

`refonte-entreprises-pr-club` fijó cuatro reglas que esta petición contradice de forma explícita. Este cambio las sustituye, no las ignora:

1. **«Sin prueba social inventada»** prohibía reseñas no confirmadas. Ahora existen reseñas reales aportadas por Virginia: se permiten con condiciones de literalidad y atribución.
2. **«Lenguaje prudente de bienestar»** prohibía cifras. Se permiten cifras de contexto con fuente pública visible; siguen prohibidas las promesas sobre resultados de Vivimoves.
3. **«Imágenes con significado»** prohibía presentar una foto como un taller en empresa que no ha tenido lugar, y el proposal anterior excluía imágenes generadas de talleres. Las cinco fotos pedidas son generadas y muestran colegas practicando: se admiten solo como ilustración de la práctica, con una mención visible «Images d’illustration».
4. **«Virginia en segundo plano»** prohibía su nombre en la portada. Las reseñas la nombran: se admite únicamente dentro de citas literales.

## What Changes

### Alcance

- **Portada**: la sección «Cinq façons de remettre du mouvement dans la journée» se sustituye por la banda mostaza «Trois formats pour s’adapter à votre rythme», con cada formato enlazado a su sección de `/entreprises`. Justo después se añade «Comment se construit un projet» (tres pasos y zona de intervención), que deja de estar en `/entreprises`.
- **BREAKING** — `/entreprises` se reorganiza en torno a los tres formatos y pierde las anclas `#activites`, `#formats`, `#demarche` y `#eveil-musculaire`:
  - **Apertura en un solo bloque**: el titular «Des pauses qui remettent vos équipes en mouvement» y «Pourquoi bouger pendant la journée de travail ?» se funden en un único bloque con tres cifras de contexto y su fuente.
  - **Cours réguliers** (`#cours-reguliers`): cinco prácticas en este orden — Yoga, Pilates, Running en équipe, Gym posturale, Méditation et bains sonores — cada una con fotografía, nombre y una sola frase. «Éveil musculaire» desaparece de la oferta.
  - **Ateliers ponctuels de bien-être et de prévention** (`#ateliers`): tres talleres con el patrón del ejemplo aportado (título, frase de presentación, «Nos thématiques» y ficha práctica): movimiento («Mon corps au bureau»), nutrición («Mieux manger au travail») y sueño («Mieux dormir, mieux récupérer»).
  - **Mini-retraites d’équipe** (`#mini-retraites`): presentación con un ejemplo de desarrollo en cuatro tiempos.
- **Le PR Club**: en «Envie de venir ?» la foto pasa a ser `PR_CLUB_1209_-58.jpg` (sesión en una terraza de madera).
- **À propos**: en «Qui intervient ?» el retrato pasa a ser `DJI_20260820140015_0179_D.JPG`, recortado.
- **Reseñas de Google**: una cita literal por página en la portada, `/entreprises`, `/le-pr-club` y `/a-propos`, con atribución y enlace a la ficha.
- **Formulario de contacto**: el campo de actividad refleja la oferta nueva (cinco prácticas, tres talleres y mini-retraite) y los CTAs de talleres y mini-retraite llegan preseleccionados.
- **Imágenes**: los siete archivos de `public/images/` dejan de servirse sin optimizar; pasan a `src/assets/` (los dos originales pesados, reducidos y con el original fuera del repositorio).
- **Coherencia**: `SITE_DESCRIPTION`, título y descripción de `/entreprises`, `PRODUCT.md` y `DESIGN.md` se actualizan (sin «éveil musculaire», con «running», con `/entreprises` fotográfica).

### Exclusiones

- Precios, importes en euros (también dentro de las cifras de contexto), condiciones comerciales no validadas.
- Cifras sin fuente pública identificable y cualquier cifra sobre resultados propios de Vivimoves.
- Reseñas reescritas, traducidas, resumidas o inventadas; reseñas que describan el coaching individual retirado; nota media o número de reseñas escritos a mano (caducan); widget, script o iframe de Google; datos estructurados `Review`/`AggregateRating`.
- Titulaciones de nutrición o de sueño: los talleres hablan de hábitos y referencias prácticas, no de consejo dietético ni médico.
- Imágenes generadas que representen a Virginia, a clientes reales o a Le PR Club. El retrato y las fotos del club siguen siendo reales.
- Nuevas páginas, cambios de navegación principal, de rutas, de redirecciones o del endpoint de Formspree.
- Una imagen en el bloque de apertura de `/entreprises`: las cinco disponibles están asignadas a una práctica cada una; ver «Decisiones pendientes».

### Resolución con el stack existente

Astro 5 estático, componentes `.astro`, Tailwind CSS 4 con los tokens actuales de `src/styles/global.css` y `astro:assets` (`sharp` ya instalado) para las imágenes. Los datos nuevos viven en módulos tipados de `src/data/`. No se añade JavaScript de cliente: el único script afectado es la preselección ya existente del formulario, que no cambia de lógica. Sin dependencias nuevas ni cambio de arquitectura.

## Capabilities

### New Capabilities

- `resenas-clientes`: publicación de reseñas reales de la ficha de Google como citas literales — selección, atribución, enlace a la fuente, páginas donde aparecen, marcado accesible y límites (sin agregados, sin terceros, sin presentarlas como clientes de empresa).

### Modified Capabilities

`openspec/specs/` sigue vacío porque `refonte-entreprises-pr-club` no está archivado (47/50 tareas; las tres pendientes dependen de Virginia). Las capacidades siguientes existen solo en los deltas de ese cambio; este las modifica y **debe archivarse después de aquel**.

- `oferta-empresas`: la portada presenta los tres formatos enlazados y el recorrido del proyecto en lugar de las cinco actividades; `/entreprises` se estructura por formatos; cambian las cinco prácticas (sale «Éveil musculaire», entra «Running en équipe») y su contenido se reduce a foto, nombre y una frase; se definen tres talleres y un ejemplo de mini-retraite; apertura en un solo bloque con cifras con fuente; se admiten reseñas reales.
- `contacto`: el campo de actividad y la preselección desde los CTAs reflejan las prácticas, los talleres y la mini-retraite.
- `presentacion-empresa`: el nombre de Virginia puede aparecer dentro de citas literales de reseñas, también en la portada; el retrato real cambia y su encuadre no debe mostrar la enseña de un estudio ajeno.
- `sistema-visual`: la sección de prácticas pasa a ser un mosaico fotográfico de composición variada; se admiten imágenes generadas de ilustración con mención visible y sin presentarlas como sesiones reales; cambian la foto de «Envie de venir ?» y el retrato de «Qui intervient ?».

## Impact

- **Páginas**: `src/pages/index.astro`, `entreprises.astro`, `le-pr-club.astro`, `a-propos.astro`.
- **Componentes**: nuevos `FormatsBand.astro`, `ProjectSteps.astro`, `PracticeTile.astro`, `AtelierBlock.astro`, `KeyFigures.astro` y `ReviewQuote.astro`; se elimina `ActivityItem.astro`; `ContactForm.astro` cambia su lista de opciones.
- **Datos**: `src/data/activities.ts` y `src/data/formats.ts` se reescriben; nuevos `ateliers.ts`, `figures.ts` y `reviews.ts`; `src/consts.ts` añade `GOOGLE_REVIEWS_URL` y actualiza `SITE_DESCRIPTION`.
- **Estilos**: `src/styles/global.css` recibe la clase `.steps` (hoy encapsulada en `entreprises.astro`) porque la usan dos componentes. Sin tokens nuevos.
- **Recursos**: `public/images/` se vacía; siete imágenes nuevas en `src/assets/`; `src/assets/virginia-portrait.jpg` deja de usarse y se elimina; `club-plein-air.jpg` se conserva (sigue en la portada).
- **Documentación**: `PRODUCT.md`, `DESIGN.md`.
- **Sistemas externos**: Formspree recibe valores nuevos en el campo `activity`; enlace saliente a la ficha de Google.
- **SEO y enlaces**: desaparecen cuatro anclas de `/entreprises`; los enlaces antiguos con esas anclas siguen abriendo la página, al principio.

### Decisiones pendientes

No bloquean la implementación; cada una tiene una salida prevista en `design.md`.

1. **Ficha práctica de los talleres** (duración «1 h à 1 h 30», «Atelier collectif», «Dans vos locaux»): son condiciones propuestas. Si Virginia no las valida, la línea correspondiente se omite.
2. **Quién anima el taller de nutrición**: el texto no atribuye ninguna titulación; si interviene otra profesional, Virginia debe indicarlo.
3. **Nombres de las personas que firman las reseñas**: se propone «Prénom N.»; Virginia decide si prefiere el nombre completo tal como figura en Google.
4. **Consentimiento de las personas reconocibles** de la foto nueva del club (unas quince).
5. **Imagen en la apertura de `/entreprises`**: no hay una sexta fotografía; el bloque se entrega tipográfico con cifras y admite una imagen cuando exista.

Resuelta (2026-11-11): «en cada sección» significa **una reseña por página**, no una por cada bloque; `/contact` no lleva reseña.
