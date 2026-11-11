# Design

## Context

Motivación y alcance: ver `proposal.md`. Requisitos: ver `specs/`.

Estado actual relevante:

- `src/pages/index.astro`: hero → «Cinq façons…» (lista de `activities`) → banda mostaza del club → `AboutBand` → `ContactBand`.
- `src/pages/entreprises.astro`: hero → «Pourquoi bouger…» (`bg-sunk`) → `#activites` con `ActivityItem.astro` → `#formats` (`bg-action`, datos de `src/data/formats.ts`) → `#demarche` (pasos con la clase `.steps`, definida en el `<style>` encapsulado de la página) → `AboutBand showFacilitator` → `ContactBand`.
- `src/components/ContactForm.astro` construye el `<select name="activity">` a partir de `activities` y lo preselecciona con `?activite=<slug>` comparando `data-slug`.
- `src/pages/le-pr-club.astro` usa `club-plein-air.jpg` en «Envie de venir ?» (la misma foto que la portada). `src/pages/a-propos.astro` usa `virginia-portrait.jpg` en un hueco cuadrado de 18 rem.
- Las imágenes del sitio se importan desde `src/assets/` con `<Image>` de `astro:assets`. Los siete archivos nuevos están en `public/images/`, es decir, se publicarían sin optimizar: dos de ellos pesan 8,9 MB y 12 MB, por encima del límite de 500 kB de `sistema-visual`.
- `DESIGN.md` describe `/entreprises` como página tipográfica sin fotografías; deja de ser cierto.
- `originaux/` está en `.gitignore` y ya guarda originales pesados.

Restricciones: Astro estático, sin JavaScript nuevo, sin dependencias nuevas, tokens existentes, textos públicos en francés y voz «nous».

## Goals / Non-Goals

**Goals:**

- Que los tres formatos sean el hilo conductor: banda enlazada en la portada y tres secciones en `/entreprises`.
- Reducir texto en `/entreprises` y sustituirlo por fotografía donde Virginia lo pide, sin perder accesibilidad ni rendimiento.
- Introducir cifras y reseñas de forma verificable: cada dato publicado se puede contrastar con su fuente.
- Una sola fuente de verdad para la oferta (`src/data/`), que alimente la landing y el formulario.

**Non-Goals:**

- Rediseñar cabecera, pie, tokens o tipografía.
- Carruseles, pestañas, acordeones o cualquier interacción que requiera JavaScript.
- Sincronizar las reseñas con Google de forma automática.
- Cambiar la portada del club o la foto del club en la portada.

## Decisions

### 1. Estructura de páginas

**Portada** (`index.astro`):

| Orden | Bloque | Fondo |
|---|---|---|
| 1 | Hero (sin cambios) | `page` |
| 2 | `FormatsBand` — «Trois formats pour s’adapter à votre rythme» | `action` |
| 3 | `ProjectSteps` — «Comment se construit un projet» + zona + una reseña | `page` |
| 4 | Le PR Club (sin cambios) | `action` |
| 5 | `AboutBand` | `sunk` |
| 6 | `ContactBand` | `ink` |

**`/entreprises`**:

| Orden | Bloque | `id` | Fondo |
|---|---|---|---|
| 1 | Apertura única: `h1`, texto, CTA, zona, `KeyFigures` | — | `page` |
| 2 | Cours réguliers: mosaico de cinco `PracticeTile`, mención «Images d’illustration», CTA, una reseña | `cours-reguliers` | `page` con filete superior |
| 3 | Ateliers: tres `AtelierBlock` | `ateliers` | `sunk` |
| 4 | Mini-retraites: texto + ejemplo en cuatro tiempos + CTA | `mini-retraites` | `action` |
| 5 | `AboutBand showFacilitator` | — | `sunk` |
| 6 | `ContactBand` | — | `ink` |

Dos bandas mostaza no quedan nunca contiguas y ninguna página encadena dos bloques con el mismo fondo salvo apertura → cursos en `/entreprises`, que se separan con `border-t border-line`.

*Alternativa descartada*: mantener «Comment se construit un projet» en las dos páginas. Virginia pide que «pase» a la portada, y duplicarlo alarga una landing que quiere más corta. La mención de zona, exigida en `/entreprises` por `oferta-empresas`, se conserva en la apertura como una línea bajo los CTAs.

### 2. Componentes

| Componente | Estado | Responsabilidad |
|---|---|---|
| `FormatsBand.astro` | nuevo | Banda mostaza con los tres formatos enlazados. Solo en la portada. |
| `ProjectSteps.astro` | nuevo | Los tres pasos y la frase de zona (`ZONE_SENTENCE`), extraídos de `entreprises.astro`. |
| `KeyFigures.astro` | nuevo | Lista de cifras con fuente. |
| `PracticeTile.astro` | nuevo | Foto, nombre y frase de una práctica. Sustituye a `ActivityItem.astro`, que se elimina. |
| `AtelierBlock.astro` | nuevo | Un taller: título, presentación, temas, ficha práctica, CTA. |
| `ReviewQuote.astro` | nuevo | Una cita con atribución y enlace a Google. |
| `Cta.astro`, `ExternalLink.astro`, `AboutBand.astro`, `ContactBand.astro`, `BaseLayout.astro` | sin cambios | Se reutilizan tal cual. |
| `ContactForm.astro` | modificado | Opciones del `<select>` agrupadas; el script no cambia. |

La clase `.steps` (lista numerada con círculo mostaza) pasa del `<style>` de `entreprises.astro` a `@layer components` de `src/styles/global.css`, porque la usan `ProjectSteps` y el ejemplo de mini-retraite. No se añaden tokens.

### 3. Banda de formatos enlazada (portada)

Se conserva la composición actual (tres columnas con filete superior `border-t-2 border-ink`). Cada `<li>` contiene el `h3` con un `<a>` y, debajo, la frase y un indicador «Voir …» con flecha (`aria-hidden`). El enlace se extiende a toda la columna con un pseudoelemento `::after { position: absolute; inset: 0 }` sobre el `<li>` en `position: relative`: una sola parada de tabulación por formato, zona pulsable amplia y nombre accesible igual al título del formato. El foco usa el contorno `ink` ya definido para `.on-accent`; al pasar el ratón se engrosa el subrayado del título (transición de color/subrayado, la única permitida por `DESIGN.md`).

*Alternativa descartada*: envolver toda la columna en un `<a>`. Mete un encabezado y un párrafo dentro del nombre accesible del enlace y lo hace verboso en lector de pantalla.

`src/data/formats.ts` pasa a:

| `slug` | `title` | `text` |
|---|---|---|
| `cours-reguliers` | Cours réguliers | Un rendez-vous récurrent pour installer une pratique : yoga, Pilates, running, gym posturale ou bains sonores. |
| `ateliers` | Ateliers ponctuels de bien-être et de prévention | Un temps fort autour d’un thème : le corps au bureau, l’alimentation ou le sommeil. |
| `mini-retraites` | Mini-retraites d’équipe | Une journée ou une demi-journée pour ralentir, bouger et se retrouver. |

### 4. Apertura de `/entreprises` en un bloque

Una única `<section>`:

- `h1`: «Des pauses qui remettent vos équipes en mouvement» (sin cambios).
- Texto (funde el antiguo «Pourquoi bouger…»): «Entre deux réunions, le corps passe vite au second plan. Nous proposons à vos salariés des cours réguliers, des ateliers et des mini-retraites pour bouger, souffler et se retrouver autrement que devant un écran.»
- CTA principal «Parlons de votre équipe» (`/contact/`) y enlace «Voir les trois formats» (`#cours-reguliers`).
- Línea de zona: `ZONE_SENTENCE`.
- `h2` «Pourquoi bouger pendant la journée de travail ?» en tamaño de `h3`, seguido de `KeyFigures`.

`KeyFigures` es una `<ul>` de tres elementos en `md:grid-cols-3` con filete superior. Cada elemento, en este orden de lectura: número (700, tamaño de `h2`, color `ink` — el mostaza no se usa como texto sobre crema), frase explicativa y fuente en `<cite>` con `text-ink-soft`. Sin iconos: el ejemplo aportado los usa, pero aquí el número ya hace de ancla visual y `DESIGN.md` descarta iconos decorativos repetidos.

Cifras propuestas (`src/data/figures.ts`), a contrastar con la publicación original antes de publicar:

| Número | Frase | Fuente visible |
|---|---|---|
| 95 % | des adultes en France sont exposés à un risque pour leur santé, par manque d’activité physique ou excès de temps passé assis. | Anses, 2022 |
| 88 % | des maladies professionnelles reconnues sont des troubles musculo-squelettiques. | Santé publique France, d’après l’Assurance Maladie – Risques professionnels |
| 6 à 9 % | de productivité en plus pour une personne sédentaire qui se met à l’activité physique, selon l’étude. | Goodwill Management pour le MEDEF, le CNOSF et AG2R La Mondiale, 2015 |

Cada entrada lleva además `sourceUrl`; si la URL de la publicación original es estable, la fuente se enlaza con `ExternalLink`. Una cifra que no se pueda contrastar se retira y la rejilla pasa a dos columnas. Ninguna está en euros, así que el control «sin precios» (búsqueda de «€») sigue siendo válido.

*Sobre la imagen*: Virginia la plantea como opcional. Las cinco imágenes disponibles ilustran una práctica cada una y aparecen justo debajo; repetir una en la apertura debilita el mosaico. El bloque se entrega sin imagen y con una rejilla de dos columnas preparada (`md:grid-cols-[1.25fr_1fr]`, como el hero de la portada) para añadirla cuando exista una sexta.

### 5. Cours réguliers: mosaico de prácticas

`src/data/activities.ts` se reduce a `slug`, `title`, `line`, `image`, `alt`:

| `slug` | `title` | `line` | Imagen | `alt` |
|---|---|---|---|---|
| `yoga` | Yoga | Bouger, respirer, faire une vraie pause. | `yoga-01.webp` | Des collègues pratiquent une posture de yoga debout dans une salle lumineuse. |
| `pilates` | Pilates | Un travail précis : stabilité, contrôle, conscience du corps. | `pilates-03.webp` | Trois personnes pratiquent un exercice de Pilates assis sur des tapis. |
| `running-equipe` | Running en équipe | Courir ensemble, à allure douce, quel que soit le niveau. | `running-equipe-03.webp` | Quatre collègues courent à allure douce dans un parc, près de leurs bureaux. |
| `gym-posturale` | Gym posturale | Explorer ses gestes et ses postures de travail. | `gym-posturale-01.webp` | Des collègues assis sur des chaises ouvrent la poitrine, bras écartés, dans un bureau. |
| `meditation-bains-sonores` | Méditation et bains sonores | S’arrêter, écouter, relâcher. | `meditation-bains-sonores-03.webp` | Une main fait résonner un bol chantant devant deux personnes assises, les yeux fermés. |

Los `alt` parten de `docs/prompts/entreprises-images.json` y se han ajustado tras ver cada imagen (número de personas, escena).

Composición: `<ul class="grid gap-x-6 gap-y-10 md:grid-cols-6">`; Yoga y Pilates ocupan tres columnas cada uno, las otras tres prácticas dos columnas. Cada `<li id={slug}>` contiene `<Image>` con `aspect-[3/2]` (proporción original; el yoga pierde brazos si se recorta a 4:3), `rounded-lg`, `h3` y la frase. Sin sombra, borde, icono ni botón por elemento: cumple «composición variada» con dos tamaños. En móvil, una columna.

`<Image>`: `widths={[480, 768, 1024]}`; `sizes="(min-width: 48rem) 34rem, 100vw"` para las grandes y `"(min-width: 48rem) 22rem, 100vw"` para las pequeñas; `loading="lazy"` (ninguna está en el primer bloque).

Bajo el mosaico: mención «Images d’illustration» (`text-ink-soft`, 15 px), CTA «Mettre en place un cours régulier» (`/contact/#contact-form`, sin preselección) y `ReviewQuote` con una cita.

*Alternativa descartada*: un CTA por práctica. Cinco enlaces casi idénticos contradicen «muy resumido»; el formulario permite elegir la práctica.

### 6. Ateliers: tres bloques con el patrón del ejemplo

`src/data/ateliers.ts` — `slug`, `theme`, `title`, `pitch`, `themes[]`, `facts { duree, format, lieu }` (cada dato opcional):

**`atelier-mouvement` — « Mon corps au bureau »**
- *Pitch*: Comprendre ce que la journée de travail demande au corps et repartir avec des gestes simples à refaire seul.
- *Thématiques*: S’installer à son poste : assise, écran, appuis · Des pauses actives de cinq minutes, sans matériel · Mobilité de la nuque, des épaules et du dos · Respirer pour relâcher les tensions · Construire sa routine de la semaine

**`atelier-nutrition` — « Mieux manger au travail »**
- *Pitch*: Des repères concrets pour composer ses repas et garder de l’énergie tout au long de la journée.
- *Thématiques*: Composer une pause déjeuner équilibrée · Collations et hydratation au bureau · Traverser le creux de l’après-midi · S’organiser quand le temps manque · Manger en déplacement ou en télétravail

**`atelier-sommeil` — « Mieux dormir, mieux récupérer »**
- *Pitch*: Comprendre son sommeil et installer des habitudes qui aident à récupérer, sans recette miracle.
- *Thématiques*: Les rythmes du sommeil, simplement · Préparer sa soirée : lumière, écrans, déconnexion · Respiration et relaxation pour ralentir · La place du mouvement dans la journée · Micro-pauses et récupération au travail

Ficha práctica propuesta para los tres: «1 h à 1 h 30» · «Atelier collectif» · «Dans vos locaux». Son condiciones comerciales: `AtelierBlock` no renderiza una línea cuyo dato esté vacío, de modo que lo no validado por Virginia se deja sin valor en el módulo de datos.

Marcado de `AtelierBlock`: `<article id={slug}>` → `h3` → `<p class="font-bold">` (pitch) → `<p>Nos thématiques :</p>` + `<ul>` → `<dl>` en un panel `bg-surface rounded-lg` con tres pares; cada `<dt>` es texto visible («Durée», «Format», «Lieu») precedido de un icono SVG de trazo en línea con `aria-hidden` (reloj, grupo, lugar), del mismo estilo que `.icon` → `Cta variant="link"` «Proposer cet atelier à votre équipe» (`/contact/?activite=<slug>#contact-form`).

Composición: tres columnas en escritorio separadas por espacio y filete superior, una en móvil. Se distingue del mosaico (fotográfico) y de la banda de formatos (una frase).

### 7. Mini-retraites

Banda mostaza a dos columnas (`md:grid-cols-[1fr_1.2fr]`):

- Izquierda: `h2` «Mini-retraites d’équipe»; texto «Une journée ou une demi-journée pour ralentir, bouger et se retrouver, loin des écrans.»; nota «Le programme se construit avec vous : les pratiques et le rythme s’adaptent à votre équipe.»; CTA secundario «Imaginer une mini-retraite» (`/contact/?activite=mini-retraite#contact-form`).
- Derecha: `h3` «Un exemple de déroulé» y `<ol class="steps">`:
  1. **Accueil et mise en mouvement** — Un réveil du corps en douceur, pour arriver.
  2. **Pratique guidée** — Yoga ou Pilates, accessible à tous les niveaux.
  3. **Atelier à thème** — Mouvement, alimentation ou sommeil : l’équipe choisit.
  4. **Bain sonore de clôture** — Un temps calme pour repartir posé.

Sobre fondo mostaza, el círculo numerado de `.steps` pasa a fondo `page` con borde `ink` (variante `.on-accent .steps`), porque mostaza sobre mostaza no se distingue.

Sin fotografía: no hay ninguna que corresponda y el ritmo de la página ya tiene cinco imágenes en la sección anterior.

### 8. Reseñas

`src/data/reviews.ts`: `{ id, author, text, page }`. `src/consts.ts` añade `GOOGLE_REVIEWS_URL = 'https://share.google/kFFwodaqELVOBsrK4'`.

El texto se copia literalmente de la ficha durante apply; en este documento solo se fija la selección. Varias reseñas aparecen truncadas en la ficha y hay que desplegarlas («Plus») para copiar el fragmento.

Virginia confirmó el 2026-11-11 que quiere **una reseña por página**, no una por bloque.

| Página | Ubicación | Reseña (autor en Google → firma publicada) | Motivo |
|---|---|---|---|
| `/` | final de `ProjectSteps` | Thibaut → «Thibaut» | Pedagogía y capacidad de adaptación |
| `/entreprises` | final de «Cours réguliers» | Françoise Tran → «Françoise T.» | Habla de los cursos |
| `/le-pr-club` | final de «L’esprit du club» | Yasmina BIHARY-VICTOR → «Yasmina B.» | Sesiones en plein air |
| `/a-propos` | dentro de «Qui intervient ?», bajo la biografía | Sand → «Sand» | Atención de la interviniente a cada participante |

`/contact` no lleva reseña. Reserva si alguna no se puede usar: Fabienne Benoist (cursos), Maëva Bilard (plein air), marcella mele. Excluidas: Nadège Couteau (contiene faltas que la cita literal obligaría a reproducir; sustituida por Sand durante apply), Léana Esch (inglés, programa individual), gloria katou (programa individual), Audrey (habla de dolores: roza el lenguaje terapéutico que `oferta-empresas` evita) y las tres reseñas sin texto.

`ReviewQuote.astro` — props `review`, `intro`. Marcado: un `<div>` con un `<p>` de introducción («Ce que disent les participants à nos cours» en `/entreprises`; «Ils et elles en parlent» en el resto), una `<figure>` con `<blockquote><p>« … »</p></blockquote>` y `<figcaption>Prénom N. · Avis Google</figcaption>`, y un `ExternalLink class="text-link"` «Lire tous les avis sur Google». La cita ocupa una columna de 65 caracteres. Estilo: filete superior `border-t-2 border-ink`, texto en tamaño `lede`, sin comillas gigantes decorativas ni tarjetas.

*Alternativas descartadas*: widget o iframe de Google (terceros, peso, cookies; excluido en `resenas-clientes`); mostrar «5/5 · 14 avis» (caduca y exigiría mantenimiento); JSON-LD `Review` (Google no admite reseñas autopublicadas para resultados enriquecidos).

### 9. Formulario de contacto

`ContactForm.astro` construye el `<select>` con tres `<optgroup>`:

- «Cours réguliers»: las cinco prácticas (`value` = `title`, `data-slug` = `slug`).
- «Ateliers ponctuels»: `value` = «Atelier « {title} »».
- «Mini-retraites»: una opción «Mini-retraite d’équipe», `data-slug="mini-retraite"`.

El script de preselección ya busca por `data-slug` en `select.options`, que incluye las opciones de los `optgroup`: no cambia. Un `slug` desconocido (por ejemplo el antiguo `eveil-musculaire`) deja «Pas encore défini». Formspree recibe el `value` legible, igual que hoy.

### 10. Imágenes

| Origen (`public/images/`) | Destino | Tratamiento |
|---|---|---|
| Cinco `.webp` | `src/assets/entreprises/` (mismo nombre) | `git mv`; `astro:assets` genera los tamaños |
| `PR_CLUB_1209_-58.jpg` (7008 × 4672, 8,9 MB) | `src/assets/club-seance-terrasse.jpg` | Reducir a 2400 px de ancho, JPEG calidad ≈ 80 |
| `DJI_20260820140015_0179_D.JPG` (3456 × 6144, 12 MB) | `src/assets/virginia-studio.jpg` | Recorte 3:4 de medio cuerpo y reducción a 1200 × 1600 |

Los dos originales se mueven a `originaux/` (ignorado por git) y `public/images/` desaparece. El recorte y la reducción se hacen una sola vez con `sharp`, ya presente en `node_modules` como dependencia de Astro, desde un comando `node -e`; no se añade script ni dependencia al proyecto.

**Retrato**: el original es vertical 9:16, Virginia ocupa el tercio izquierdo y a su derecha se lee el rótulo «[Si] le pilates» de un estudio ajeno. Recorte de partida, en píxeles del original: `left 110, top 1960, width 1380, height 1840` (cabeza completa, hasta medio muslo, rótulo fuera). Se ajusta a ojo si el rótulo o la lámpara entran en cuadro. En `a-propos.astro` el hueco pasa de `aspect-square` a `aspect-[3/4]` con el mismo `max-w-72`. `alt`: «Virginia, souriante, debout à l’entrée d’un studio de Pilates, en t-shirt du PR Club.» `virginia-portrait.jpg` se elimina si no queda ninguna referencia.

**Club**: en «Envie de venir ?» el hueco pasa de `aspect-[4/3]` a `aspect-[3/2]` (la proporción original; a 4:3 se cortan las personas de los extremos). `alt`: «Séance de Pilates du PR Club en plein air : une quinzaine de personnes sur des tapis, sur une terrasse en bois au bord de l’eau.» La portada sigue usando `club-plein-air.jpg`, así que las dos páginas dejan de repetir la misma foto.

### 11. Textos y metadatos

- `SITE_DESCRIPTION`: «Cours, ateliers et mini-retraites d’équipe pour les entreprises du Val-d’Oise : yoga, Pilates, running, gym posturale, méditation et bains sonores.»
- `/entreprises` — `title`: «Bien-être en entreprise : cours, ateliers et mini-retraites · Vivimoves»; `description`: «Cours réguliers de yoga, Pilates, running ou gym posturale, ateliers bien-être et mini-retraites d’équipe à Cergy et dans le Val-d’Oise.»
- `PRODUCT.md`: cinco prácticas y tres talleres nuevos. `DESIGN.md`: `/entreprises` pasa a ser fotográfica (mosaico de ilustración), se documentan `KeyFigures`, `ReviewQuote` y la regla de las imágenes de ilustración.

### 12. JavaScript, rendimiento, accesibilidad, SEO

- **JavaScript**: ninguno nuevo. Todo es HTML estático; el único script afectado (preselección) no se modifica.
- **Rendimiento**: `/entreprises` pasa de cero a cinco imágenes, todas `lazy`, con dimensiones reservadas por `<Image>` y variantes ≤ 1024 px. Ningún archivo publicado supera 500 kB.
- **Accesibilidad**: jerarquía `h1` → `h2` por sección → `h3` por práctica, taller y ejemplo; listas reales (`ul`, `ol`, `dl`); citas con `figure`/`blockquote`/`figcaption`; iconos decorativos ocultos; contraste con los tokens existentes (`ink` e `ink-soft` sobre `page`, `sunk`, `surface` y `action`); zonas pulsables ≥ 44 px; sin movimiento nuevo.
- **Responsive**: todas las rejillas colapsan a una columna por debajo de 48 rem; se comprueba a 320, 375, 768 y 1440 px.
- **SEO**: una sola `h1` por página; título y descripción de `/entreprises` actualizados; el sitemap no cambia (mismas rutas); las anclas retiradas degradan al inicio de la página.

## Risks / Trade-offs

- **Las imágenes generadas pueden leerse como sesiones reales de Vivimoves** → mención visible «Images d’illustration», `alt` genéricos, ninguna leyenda que nombre a Vivimoves; la imagen de Pilates y la de bains sonores muestran a una «intervenante» que no es Virginia, así que su retrato real queda solo en `/a-propos`.
- **Una cifra citada de segunda mano puede ser inexacta o estar desfasada** → tarea de contraste con la publicación original; lo no contrastado no se publica.
- **«6 à 9 % de productivité» roza la prohibición de prometer productividad** → se formula como resultado de un estudio ajeno, con su autoría y año, y ningún texto propio lo retoma.
- **Las reseñas hablan de clases a particulares, no de empresas** → introducción explícita («participants à nos cours»), ninguna reseña de programas individuales, enlace a la ficha para que se lean en contexto.
- **Publicar nombres de particulares** → firma «Prénom N.»; Virginia confirma el formato.
- **Personas reconocibles en la foto del club** → tarea de confirmación con Virginia antes de publicar; si no consta, se mantiene `club-plein-air.jpg`.
- **Tres talleres en tres columnas pueden quedar densos en tabletas** → entre 48 y 64 rem se usa una sola columna con el panel de ficha a la derecha de la lista.
- **Enlaces externos antiguos con `#eveil-musculaire` o `#formats`** → abren la página por arriba; no se añaden anclas de compatibilidad para no dejar `id` vacíos.
- **Dependencia de archivado**: los deltas MODIFIED apuntan a capacidades que solo existen en `refonte-entreprises-pr-club` → archivar aquel cambio antes que este.

## Migration Plan

1. Implementar en la rama `rebrand`; el sitio es estático, sin datos que migrar.
2. Verificar con `npm run check`, `npm run build` y las comprobaciones manuales de `tasks.md`.
3. Desplegar en Vercel con el flujo habitual.
4. Reversión: revertir el commit. Los originales pesados siguen en `originaux/` en la máquina de Virginia.

## Open Questions

Ninguna cambia las specs ni el desglose de tareas; todas tienen salida prevista arriba.

- ¿Valida Virginia la ficha práctica de los talleres (duración, formato, lugar)? Sin validación, la línea no se publica.
- ¿Firma «Prénom N.» o nombre completo en las reseñas?
- ¿Aportará una sexta imagen para la apertura de `/entreprises`?
