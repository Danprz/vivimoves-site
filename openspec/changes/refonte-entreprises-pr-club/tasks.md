# Tasks

## 1. Contexto de producto y dirección de diseño (Impeccable)

- [x] 1.1 Ejecutar `.claude/skills/impeccable/scripts/impeccable context` una vez y seguir `reference/init.md`: redactar `PRODUCT.md` a partir del brief y de `proposal.md`, con al menos una ronda de confirmación con Virginia que incluya las decisiones pendientes del proposal. Verificar que `PRODUCT.md` existe en la raíz, contiene el comentario `impeccable:product-schema`, no incluye decisiones visuales y marca como no decididos los datos sin confirmar.
- [x] 1.2 Plantear a Virginia la pregunta de init sobre el modo de construcción (comp-first o code-first; recomendación: code-first, ver design D9) y registrar en `.impeccable/config.json` únicamente el valor que ella elija. Verificar que el archivo contiene `buildPath` solo si hubo respuesta; si no la hubo, dejar constancia en el informe del modo usado en la sesión.
- [x] 1.3 Ejecutar `/impeccable shape` para las cinco superficies en modo Persuade, reutilizando design D1–D9 como descubrimiento, y completar la ronda de dirección de `reference/new-work.md` hasta que Virginia fije una dirección visual. Verificar que existe un brief confirmado por ella y que la dirección respeta las tres anclas de color del brief.
- [x] 1.4 Registrar la dirección elegida en `DESIGN.md` y en los briefs de `.impeccable/surfaces/`. Si difiere de la recomendación de design D9 (tokens, tipografía o composición), actualizar `design.md` con `/opsx:update` antes de continuar. Verificar que `DESIGN.md` existe y que design D9 y `DESIGN.md` no se contradicen.
- [x] 1.5 Registrar en `PRODUCT.md` las respuestas de Virginia de la ronda de init: voz «nous», Vivimoves como empresa local y de talla humana, Virginia en segundo plano, hosting en Vercel y URL de LinkedIn. Verificar que `PRODUCT.md` las recoge y que design D7 es coherente con ellas.

## 2. Preparación técnica

- [x] 2.1 Añadir `@astrojs/check` y `typescript` como dependencias de desarrollo y el script `"check": "astro check"` en `package.json`, con npm. Verificar que `package-lock.json` se actualiza y que `npm run check` se ejecuta y termina (los errores preexistentes se anotan, no se ocultan).
- [x] 2.2 Ampliar `src/consts.ts` con `SITE_DESCRIPTION` en francés, `FORMSPREE_ENDPOINT`, `CONTACT_EMAIL`, `BOOKWHEN_URL` (`https://bookwhen.com/fr/leprclub`), `PR_CLUB_INSTAGRAM_URL`, `VIRGINIA_INSTAGRAM_URL` y `VIRGINIA_LINKEDIN_URL`, tomando endpoint, e-mail e Instagram de Virginia del código actual. Verificar con una búsqueda que ninguna de esas URLs queda escrita literalmente en páginas o componentes.
- [x] 2.3 Crear `src/data/activities.ts` y `src/data/formats.ts` con los tipos y los textos de design D5 (cinco actividades con `slug`, título, `teaser`, descripción, experiencia, situaciones y CTA; tres formatos). Verificar que `npm run check` pasa y que hay exactamente cinco actividades y tres formatos, con «Mieux manger au travail» solo como ejemplo dentro de los talleres puntuales.

## 3. Sistema visual y estructura compartida

- [x] 3.1 Leer `.claude/skills/impeccable/reference/craft-floor.md` y sustituir en `src/styles/global.css` las variables de Bear Blog y `--clr-*` por los tokens de la dirección aprobada dentro de `@theme` de Tailwind 4, incluidos foco, estados y `prefers-reduced-motion`. Verificar con una búsqueda que `#2337ff`, `--clr-` y `--gray` ya no aparecen en `src/`, y recalcular con un script los contrastes de la tabla de tokens (texto ≥ 4,5:1; bordes de campo y foco ≥ 3:1).
- [x] 3.2 Mantener Atkinson Hyperlegible como única familia, con los archivos WOFF ya alojados y `font-display: swap`, según la dirección confirmada (design D9), y conservar sus precargas en `BaseHead.astro`. Verificar en la pestaña de red que hay como máximo dos familias, que se sirven desde el propio origen y que no hay peticiones a servicios externos de fuentes.
- [x] 3.3 Crear `src/layouts/BaseLayout.astro` (`lang="fr"`, `BaseHead`, enlace « Aller au contenu », `Header`, `<main id="contenu">`, `Footer`, prop `tone`) y la línea en `<head>` que añade la clase `js`. Verificar en una página de prueba que el primer Tab enfoca el enlace de salto y que este lleva el foco a `main`.
- [x] 3.4 Actualizar `BaseHead.astro`: quitar el `<link rel="alternate">` del feed, añadir `og:locale` y `og:site_name`, apuntar la imagen por defecto a `/og-vivimoves.jpg` y dejar intacta la etiqueta de Google Ads. Verificar en el HTML generado que no hay enlace a `rss.xml` y que el bloque `gtag` es idéntico al anterior.
- [x] 3.5 Reescribir `Header.astro` y `HeaderLink.astro`: marca enlazada a `/`, enlaces « Entreprises », « Le PR Club », « À propos », « Contact » con `aria-current="page"`, botón « Menu » con `aria-expanded` y `aria-controls`, cierre con Escape y devolución del foco, restablecimiento al pasar a escritorio. Verificar con teclado en 375 px los cuatro escenarios de «Menú móvil accesible» de `specs/estructura-y-migracion`, incluido el de JavaScript desactivado.
- [x] 3.6 Reescribir `Footer.astro`: navegación, contacto, Instagram de Virginia y del club, « © {année} Vivimoves » y el crédito existente en francés. Verificar que «Virginia Moves» no aparece en `src/` y que todos los enlaces del pie funcionan.
- [x] 3.7 Crear `Cta.astro` (variantes `primary`, `secondary`, `link`) y `ExternalLink.astro` (`rel="noopener noreferrer"`, icono y texto oculto « (nouvelle fenêtre) »). Verificar con el inspector de accesibilidad que un enlace externo anuncia destino y nueva ventana, y que el área activable de un CTA es de al menos 44 × 44 px en 375 px.
- [x] 3.8 Ejecutar `npm run build` y `npm run check`. Verificar que ambos terminan sin errores.

## 4. Imágenes y recursos

- [x] 4.1 Mover a `src/assets/` las fotografías utilizables según el inventario de design (y las nuevas que haya aportado Virginia), con nombres descriptivos sin referencia a la oferta individual, reduciendo antes a 3000 px de lado mayor los dos originales de `public/images/` y recortando el rótulo del estudio de la foto de la camiseta. Verificar que ningún archivo de `src/assets/` supera 3 MB y que `public/images/` ya no existe.
- [x] 4.2 Eliminar de `public/` las imágenes retiradas según el inventario de design: `aude-virginia.png`, `coaching-presentiel.png`, `coaching-distance.png`, `CBN06836.jpg`, `vivipilates.PNG`, `yoga.png`, `runner.png`, `pilates.png`, `favicon.svg` y `soleil.png` si el logo pasa a SVG. Verificar con una búsqueda que ningún archivo de `src/` las referencia y que «aude» no aparece en ningún nombre de archivo de `public/` ni de `src/assets/`.
- [x] 4.3 Preparar el símbolo de marca en SVG con los colores de los tokens y usarlo en cabecera y favicon con sus proporciones reales. Verificar que el logo no se deforma en 375 px ni en 1440 px y que el favicon se muestra en la pestaña.
- [x] 4.4 Generar `public/og-vivimoves.jpg` (1200 × 630) como composición tipográfica con la marca y los colores del sitio. Verificar dimensiones con `sips -g pixelWidth -g pixelHeight` y un peso inferior a 300 kB.

## 5. Páginas

- [x] 5.1 Crear `AboutBand.astro` y `ContactBand.astro` con los textos de design D5 y D7, sin fotografías. Verificar que ninguno usa la primera persona del singular y que `AboutBand` enlaza a `/a-propos/`.
- [x] 5.2 Reescribir `src/pages/index.astro` sobre `BaseLayout` con la secuencia de design D5 (hero, síntesis de actividades desde `activities.ts`, bloque del club, resumen de la empresa, cierre). Verificar que la portada no contiene el nombre ni el retrato de Virginia, en 375 × 812 y 1440 × 900 que el `h1` y el CTA « Parlons de votre équipe » se ven sin desplazarse, que hay un solo `h1` y que cada sección tiene como máximo una acción principal.
- [x] 5.3 Crear `ActivityItem.astro` y `src/pages/entreprises.astro` con las siete secciones de design D5, anclas `#activites`, `#formats`, `#demarche` y una por actividad, la frase de zona de intervención (Cergy y Val-d'Oise) y los CTAs hacia `/contact/?activite=<slug>#contact-form`. Verificar que las cinco actividades muestran sus cinco elementos, que la zona aparece sin radio ni gastos de desplazamiento, que la sección no es una rejilla de tarjetas idénticas y que cada ancla sitúa su destino en pantalla sin quedar bajo la cabecera.
- [x] 5.4 Crear `src/pages/le-pr-club.astro` con `tone="club"` y el contenido de design D6: CTA « Voir les prochaines séances » a `BOOKWHEN_URL`, CTA secundario a Instagram, texto estable de agenda, puente a `/entreprises/` y bloque « Qui est derrière le club ? » con Virginia como fundadora. Verificar que los dos enlaces externos abren el destino exacto, que la pestaña de red no muestra peticiones a Bookwhen ni a Instagram al cargar y que el HTML no contiene «Aude», un año de creación, «été 2026», «20h», «11h», «12 €» ni «Parc François Mitterrand».
- [x] 5.5 Crear `src/pages/a-propos.astro` con los cuatro bloques de design D7, el retrato en el último bloque y `ContactBand`. Verificar contra `specs/presentacion-empresa` que los tres primeros bloques hablan de la empresa, que el bloque de Virginia es el último y contiene los cuatro hechos confirmados, que no hay fechas, cifras ni otras titulaciones, que el enlace a LinkedIn funciona y que SAVENCIA y Rishikesh Yogpeeth figuran solo como texto.
- [ ] 5.6 Revisar con Virginia los textos en francés de las cinco páginas (ortografía, tono y exactitud de los hechos) y aplicar sus correcciones en `src/data/` y en las páginas. Verificar que queda constancia de su validación o, si no responde, que el informe marca los textos como borradores sin validar.
- [x] 5.7 Ejecutar `npm run build` y `npm run check`. Verificar que terminan sin errores y que `dist/` contiene `entreprises/`, `le-pr-club/` y `a-propos/`.

## 6. Contacto

- [x] 6.1 Crear `ContactForm.astro` con los seis campos, etiquetas, ayudas, `autocomplete`, `id="contact-form"`, `method="POST"`, `action={FORMSPREE_ENDPOINT}` y los campos ocultos de asunto y señuelo, tras comprobar su vigencia en la documentación de Formspree. Verificar en el HTML generado el `action`, el `method`, que cada campo tiene un `<label>` asociado y que los opcionales indican « (facultatif) ».
- [x] 6.2 Reescribir `src/pages/contact.astro` con el texto de design D8, el bloque « Votre interlocutrice » con e-mail, LinkedIn e Instagram, la frase de zona de intervención y el aviso de reservas del club con enlace a Bookwhen; eliminar la tarjeta «Adresse» y su URL de búsqueda. Verificar que la página no contiene `google.com/search` y que `/contact#contact-form` sitúa el formulario en pantalla.
- [x] 6.3 Añadir el script de mejora progresiva: validación con mensajes en francés, foco en el primer error, envío con `fetch` y `Accept: application/json`, estados de envío, éxito y fallo, y preselección desde `?activite=`. Verificar, sin enviar ningún mensaje real: (a) e-mail inválido → mensaje, foco y datos conservados; (b) red desconectada → alerta, datos conservados y botón reactivado; (c) `fetch` sustituido en la consola por una respuesta correcta simulada → confirmación con foco; (d) doble clic → una sola petición; (e) `?activite=yoga` preselecciona yoga y `?activite=xyz` no selecciona nada.
- [x] 6.4 Comprobar el formulario con JavaScript desactivado. Verificar que la validación nativa bloquea un campo obligatorio vacío y que el formulario conserva `action` y `method`; no completar un envío real.
- [x] 6.5 Recorrer el formulario solo con teclado y revisando el árbol de accesibilidad. Verificar que cada campo expone etiqueta, obligatoriedad y error, y que la confirmación y el fallo usan regiones anunciables; la escucha real con un lector de pantalla queda anotada en `verification.md`.

## 7. Migración y limpieza

- [x] 7.1 Eliminar `src/pages/services.astro`, `tarifs-coaching.astro` y `pilates-plein-air.astro`, crear `vercel.json` con las tres redirecciones permanentes y declarar en `astro.config.mjs` los `redirects` de respaldo de design D2. Verificar que `vercel.json` es JSON válido y,  tras `npm run build` que `dist/services/index.html`, `dist/tarifs-coaching/index.html` y `dist/pilates-plein-air/index.html` contienen el refresh inmediato, la canónica del destino y `noindex`, y ningún texto de la oferta antigua; si no cumplen `specs/estructura-y-migracion`, sustituirlos por páginas de redirección propias.
- [x] 7.2 Eliminar los cinco artículos de `src/content/blog/`, conservar `content.config.ts` y actualizar `rss.xml.js` con título y descripción en francés. Verificar que `dist/rss.xml` es XML válido, no contiene ningún `<item>` y no menciona «Lorem ipsum» ni «Welcome»; anotar si el build emite un aviso por la colección vacía.
- [x] 7.3 Adaptar mínimamente `BlogPost.astro` y `FormattedDate.astro` (uso de `BaseLayout`, sin la hoja inexistente, fechas `fr-FR`, texto « Mis à jour le »). Verificar que `npm run check` no informa de errores en ambos archivos y que no queda `lang="en"` en `src/`.
- [x] 7.4 Buscar en `src/` y en `dist/` los restos de la oferta y de la plantilla: `€`, `tarif`, `prix`, `coaching`, `à domicile`, `à distance`, `WhatsApp`, `pack`, `Welcome to my website`, `Mastodon`, `Retrato`, `Aude`, `Virginia Moves`, `blog-placeholder`, `/blog`, `/services`, `/tarifs-coaching`, `/pilates-plein-air` y los hex `#FFD6BA`, `#d89a6b`, `#331c10`. Verificar que cada coincidencia restante es legítima (por ejemplo, la remisión a Bookwhen o las páginas de redirección) y dejar la lista en el informe.

## 8. Metadatos y SEO

- [x] 8.1 Asignar a cada página el `title` y la `description` de design D11. Verificar en `dist/` que los cinco pares son distintos, están en francés, no contienen precios y que todas las páginas declaran `lang="fr"`.
- [x] 8.2 Verificar en `dist/sitemap-0.xml` que figuran exactamente `/`, `/entreprises/`, `/le-pr-club/`, `/a-propos/` y `/contact/`; si aparece alguna ruta de redirección, añadir `filter` a `sitemap()` y repetir la comprobación.
- [x] 8.3 Verificar que la URL de `og:image` de cada página corresponde a un archivo existente en `dist/` y que cada canónica coincide con la ruta final con barra.

## 9. Verificación de integración

- [x] 9.1 Ejecutar `npm run build` y `npm run check` sobre el resultado completo. Verificar que ambos terminan sin errores y anotar los avisos.
- [x] 9.2 Recorrer todos los enlaces internos y anclas de las cinco páginas en el sitio servido con `npm run preview`, y abrir las tres URLs antiguas. Verificar que ningún enlace lleva a una ruta inexistente y que cada URL antigua termina en su destino.
- [x] 9.3 Inspeccionar visualmente las cinco páginas en 320, 375, 768 y 1440 px, y al 200 % de zoom en 1440 px. Verificar que no hay desplazamiento horizontal, recortes ni solapamientos, y guardar capturas por página como evidencia (ver `verification.md`).
- [x] 9.4 Recorrer las cinco páginas solo con teclado y con `prefers-reduced-motion: reduce` activado. Verificar foco visible sobre fondos crema, mostaza y oscuro, orden de foco coherente, un solo `h1` por página sin saltos de nivel y ausencia de animaciones con movimiento reducido.
- [x] 9.5 Listar los archivos de imagen de `dist/` por tamaño. Verificar que ninguno supera 500 kB y que la imagen del primer bloque de cada página se carga con prioridad y sin desplazar el contenido.
- [x] 9.6 Ejecutar `/impeccable audit` y `/impeccable critique` sobre las cinco páginas y corregir los hallazgos materiales. Verificar que el informe recoge los hallazgos, los corregidos y los descartados con su motivo.
- [x] 9.7 Ejecutar `/impeccable polish` como pasada final y repetir 9.1 y 9.3. Verificar que el build sigue pasando y que las capturas finales corresponden al estado entregado.
- [x] 9.8 Actualizar el campo `context` de `openspec/config.yaml` para describir el nuevo posicionamiento y la nueva paleta. Verificar que `openspec validate refonte-entreprises-pr-club --strict` sigue pasando.

## 10. Publicación

- [x] 10.1 Sustituir `site` en `astro.config.mjs` por `https://vivimoves-site.vercel.app`. Verificar que canónicas, `og:url` y sitemap de `dist/` usan ese dominio y que `example.com` no aparece en `dist/`.
- [ ] 10.2 Tras el despliegue en Vercel, verificar con `curl -I` que `/services`, `/tarifs-coaching` y `/pilates-plein-air` responden 308 hacia su destino. Requiere que Virginia despliegue la rama.
- [ ] 10.3 Pedir a Virginia que envíe un único mensaje de prueba real desde `/contact/` ya desplegado. Verificar con ella que lo recibe con los campos nuevos y el asunto que identifica la web.

## Workflow follow-up

- Archivar el cambio con `/opsx:archive` cuando Virginia haya validado textos, fotografías y dirección visual y las tareas 1–9 estén completas; las tareas del grupo 10 pueden quedar anotadas como pendientes si el dominio o el hosting siguen sin confirmar.
- Tras archivar, comprobar que `openspec/specs/` contiene las seis capacidades con su `Purpose`.
