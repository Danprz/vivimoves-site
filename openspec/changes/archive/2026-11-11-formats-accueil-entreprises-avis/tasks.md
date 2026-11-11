# Tasks

## 1. Validaciones previas con Virginia

- [x] 1.1 Pedir a Virginia que valide la ficha práctica de los tres talleres (duración «1 h à 1 h 30», formato «Atelier collectif», lugar «Dans vos locaux») y que indique quién anima el taller de nutrición. Verificar que cada dato queda anotado como validado, corregido o rechazado; lo rechazado o sin respuesta se deja vacío en `src/data/ateliers.ts`.
- [x] 1.2 Pedir a Virginia que confirme el consentimiento de las personas reconocibles de `PR_CLUB_1209_-58.jpg` y el formato de firma de las reseñas («Prénom N.» o nombre completo). Verificar que hay respuesta anotada; sin consentimiento, la tarea 3.2 no se ejecuta y «Envie de venir ?» conserva `club-plein-air.jpg`.
- [x] 1.3 Contrastar las tres cifras de `design.md` (§4) con la publicación original de cada fuente (avis de l’Anses 2022; rapport de l’Assurance Maladie – Risques professionnels o página de Santé publique France; communiqué o síntesis del estudio Goodwill Management 2015). Verificar que para cada cifra quedan anotados la frase literal de la fuente, el año y la URL; la cifra que no se pueda contrastar se retira.

Respuestas y comprobaciones (2026-11-11):

- Ficha práctica: Virginia valida «1 h à 1 h 30», «Atelier collectif» y «Dans vos locaux» para los tres talleres. Ella misma anima «Mieux manger au travail».
- Foto `PR_CLUB_1209_-58.jpg`: consta el consentimiento. Firma de las reseñas: «Prénom N.».
- Anses — «95% des adultes sont exposés à un risque de détérioration de la santé par manque d'activité physique ou un temps trop long passé assis» (`https://www.anses.fr/fr/content/etre-actif-ca-sapprend`, página de 2023 que retoma el avis de 2022).
- Santé publique France, 27/03/2024 — «88 % des maladies professionnelles reconnues par le régime général : 44 492 cas en 2019», según el rapport annuel 2019 de la Cnam (`https://www.santepubliquefrance.fr/les-actualites/troubles-musculo-squelettiques-en-france-ou-en-est`).
- MEDEF, communiqué du 9/09/2015 — «un collaborateur sédentaire qui se met à pratiquer régulièrement une activité physique et sportive peut voir sa productivité croître de 6% à 9%» (étude Goodwill, avec le CNOSF et AG2R La Mondiale).
- Reseñas: la ficha no deja desplegar los textos truncados de Françoise Tran y Yasmina BIHARY-VICTOR, así que se publica el fragmento visible, cortado en fin de frase y marcado con «[…]». La reseña de Nadège Couteau se sustituye por la de Sand (reserva), porque contiene faltas que la cita literal obligaría a reproducir.

## 2. Datos de la oferta

- [x] 2.1 Reescribir `src/data/activities.ts` con la interfaz reducida (`slug`, `title`, `line`, `image`, `alt`) y las cinco prácticas en el orden Yoga, Pilates, Running en équipe, Gym posturale, Méditation et bains sonores. Verificar que no queda ninguna aparición de «éveil» en `src/` con `grep -rin "veil musculaire" src`.
- [x] 2.2 Actualizar `src/data/formats.ts` con `slug` y los textos de `design.md` (§3). Verificar que los tres `slug` son `cours-reguliers`, `ateliers` y `mini-retraites`.
- [x] 2.3 Crear `src/data/ateliers.ts` con los tres talleres (título, pitch, temas y ficha con datos opcionales) según `design.md` (§6) y el resultado de 1.1. Verificar que ningún tema se repite entre talleres y que ningún texto menciona titulaciones, regímenes o tratamientos.
- [x] 2.4 Crear `src/data/figures.ts` con las cifras contrastadas en 1.3 (número, frase, fuente visible, URL). Verificar que ninguna contiene «€» y que cada una tiene fuente y año.
- [x] 2.5 Añadir `GOOGLE_REVIEWS_URL` y actualizar `SITE_DESCRIPTION` en `src/consts.ts`. Verificar con `npm run check` que no hay errores de tipos.

## 3. Imágenes

- [x] 3.1 Mover los cinco `.webp` de `public/images/` a `src/assets/entreprises/` con `git mv`. Verificar que `git status` los muestra como renombrados y que cada `alt` de `activities.ts` describe lo que se ve en su imagen.
- [x] 3.2 Generar `src/assets/club-seance-terrasse.jpg` (2400 px de ancho, JPEG calidad ≈ 80) a partir de `PR_CLUB_1209_-58.jpg` con `sharp` desde `node -e`. Verificar que el archivo pesa menos de 1,5 MB y mide 2400 × 1600.
- [x] 3.3 Generar `src/assets/virginia-studio.jpg` (recorte 3:4 de medio cuerpo, 1200 × 1600) a partir de `DJI_20260820140015_0179_D.JPG` con el recorte de partida de `design.md` (§10). Verificar abriendo el archivo que el rostro está completo y que no se lee el rótulo «[Si] le pilates».
- [x] 3.4 Mover los dos originales a `originaux/` y eliminar `public/images/`. Verificar que `git ls-files public/images` no devuelve nada y que `ls originaux` lista los dos archivos.

## 4. Componentes compartidos

- [x] 4.1 Mover la clase `.steps` de `entreprises.astro` a `@layer components` de `src/styles/global.css` y añadir la variante sobre fondo mostaza (`.on-accent .steps`). Verificar con `npm run build` que compila y que no quedan reglas `.steps` en ninguna página.
- [x] 4.2 Crear `src/components/ProjectSteps.astro` con los tres pasos y `ZONE_SENTENCE`, extraídos de `entreprises.astro`. Verificar que el texto de los pasos es idéntico al actual.
- [x] 4.3 Crear `src/components/FormatsBand.astro` con los tres formatos enlazados a `/entreprises/#<slug>` y el enlace extendido a toda la columna (`design.md` §3). Verificar con teclado que hay exactamente tres paradas de tabulación en la banda y que el foco se ve sobre el fondo mostaza.
- [x] 4.4 Crear `src/components/ReviewQuote.astro` (`figure`/`blockquote`/`figcaption`, mención «Avis Google», enlace con `ExternalLink`). El componente recibe una sola reseña. Verificar en el HTML generado que la cita está dentro de un `blockquote` con su `figcaption`.
- [x] 4.5 Crear `src/data/reviews.ts` copiando literalmente de la ficha de Google los fragmentos de las reseñas seleccionadas en `design.md` (§8), con la firma acordada en 1.2. Verificar cada cita abriendo la ficha y comparando palabra por palabra; si la ficha no es accesible, pedir a Virginia los textos y no publicar ninguna cita sin cotejar.

## 5. Portada

- [x] 5.1 En `src/pages/index.astro`, sustituir la sección «Cinq façons…» por `FormatsBand` y añadir a continuación `ProjectSteps` con una `ReviewQuote` (Thibaut). Verificar que la página no importa ya `activities` y que el orden de bloques es el de `design.md` (§1).
- [x] 5.2 Comprobar la portada en `npm run dev` a 375 px y 1440 px: los tres formatos llevan a `/entreprises/#cours-reguliers`, `#ateliers` y `#mini-retraites`; «Cinq façons…» ya no aparece; no hay dos bandas mostaza contiguas ni desbordamiento horizontal.

## 6. Página `/entreprises`

- [x] 6.1 Crear `src/components/KeyFigures.astro` y reescribir el primer bloque de `entreprises.astro` como una única sección (titular, texto fundido, CTAs, zona, cifras) según `design.md` (§4); eliminar la sección «Pourquoi bouger…» separada. Verificar que la página tiene una sola `h1` y que la sección siguiente es `#cours-reguliers`.
- [x] 6.2 Crear `src/components/PracticeTile.astro` y la sección `#cours-reguliers` con el mosaico 2 + 3, la mención «Images d’illustration», el CTA sin preselección y `ReviewQuote` (Françoise T.); eliminar `ActivityItem.astro`. Verificar que cada práctica tiene `id` igual a su `slug` y que `grep -rn ActivityItem src` no devuelve nada.
- [x] 6.3 Crear `src/components/AtelierBlock.astro` y la sección `#ateliers` con los tres talleres. Verificar que una ficha con un dato vacío no renderiza esa línea y que cada CTA apunta a `/contact/?activite=<slug>#contact-form`.
- [x] 6.4 Crear la sección `#mini-retraites` con el texto, el ejemplo en cuatro tiempos (`<ol class="steps">`) y el CTA con `?activite=mini-retraite`. Verificar que el ejemplo no contiene horas, lugar ni número de participantes.
- [x] 6.5 Retirar de `entreprises.astro` las secciones `#formats` y `#demarche`, y actualizar `title` y `description`. Verificar con `grep -n 'id="' dist/entreprises/index.html` (tras `npm run build`) que existen `cours-reguliers`, `ateliers`, `mini-retraites` y los `slug` de prácticas y talleres, y que no existen `activites`, `formats`, `demarche` ni `eveil-musculaire`.
- [x] 6.6 Comprobar `/entreprises/` en `npm run dev` a 320, 375, 768 y 1440 px: titular y CTA visibles sin desplazarse a 375 × 812; mosaico en una columna en móvil y en 2 + 3 en escritorio; talleres legibles sin desbordamiento; cada sección de formato tiene como máximo un CTA principal.

## 7. Formulario de contacto

- [x] 7.1 Reconstruir el `<select name="activity">` de `ContactForm.astro` con tres `<optgroup>` (cinco prácticas, tres talleres, mini-retraite) sin tocar el script. Verificar que hay nueve opciones más «Pas encore défini».
- [x] 7.2 Comprobar la preselección en `npm run dev`: `/contact/?activite=atelier-sommeil` y `?activite=mini-retraite` seleccionan su opción; `?activite=eveil-musculaire` deja «Pas encore défini» sin error en consola; con JavaScript desactivado el formulario sigue siendo utilizable.

## 8. Le PR Club y À propos

- [x] 8.1 En `le-pr-club.astro`, usar `club-seance-terrasse.jpg` en «Envie de venir ?» con `aspect-[3/2]` y el `alt` de `design.md` (§10), y añadir `ReviewQuote` (Yasmina B.) al final de «L’esprit du club». Verificar a 375 y 1440 px que no se corta a ninguna persona y que la foto de la portada sigue siendo `club-plein-air.jpg`.
- [x] 8.2 En `a-propos.astro`, usar `virginia-studio.jpg` en «Qui intervient ?» con `aspect-[3/4]` y su `alt`, añadir `ReviewQuote` (Nadège C.) bajo la biografía y eliminar `src/assets/virginia-portrait.jpg` si no queda ninguna referencia. Verificar a 375 y 1440 px que el retrato no se deforma y que el bloque sigue siendo el último antes de `ContactBand`.

## 9. Documentación

- [x] 9.1 Actualizar `PRODUCT.md` (cinco prácticas, tres talleres, reseñas de Google como prueba social admitida) y `DESIGN.md` (`/entreprises` fotográfica, regla de «Images d’illustration», `KeyFigures`, `ReviewQuote`). Verificar que ninguno de los dos menciona «éveil musculaire» ni describe `/entreprises` como página sin fotografías.

## 10. Verificación de integración

- [x] 10.1 Ejecutar `npm run check` y `npm run build`. Verificar que ambos terminan sin errores.
- [x] 10.2 Sobre `dist/`: `find dist -type f \( -iname '*.jpg' -o -iname '*.webp' -o -iname '*.png' \) -size +500k` no devuelve nada; `grep -rl "veil musculaire" dist` no devuelve nada; `grep -rl "€" dist --include=*.html` no devuelve nada; `grep -rlE "AggregateRating|\"Review\"" dist` no devuelve nada.
- [x] 10.3 Recorrer con teclado `/`, `/entreprises/`, `/le-pr-club/` y `/a-propos/` en `npm run preview`: foco visible en todos los enlaces nuevos, el enlace a Google abre pestaña nueva y anuncia «(nouvelle fenêtre)», cada una de las cuatro páginas muestra exactamente una reseña fuera del primer bloque sin repetir ninguna entre páginas, y `/contact/` no muestra ninguna.
- [x] 10.4 Ejecutar `openspec validate formats-accueil-entreprises-avis` y verificar que no informa de errores.

## Workflow follow-up

- Archivar `refonte-entreprises-pr-club` (o sincronizar sus specs) antes de archivar este cambio: sus capacidades son el destino de los deltas MODIFIED.
- Revisar con Virginia los textos nuevos en francés antes de desplegar.
- Archivar este cambio cuando el despliegue esté validado.
