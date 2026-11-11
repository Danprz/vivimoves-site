# Proposal

## Why

Virginia cambia el enfoque de su actividad: deja de vender coaching individual (programas, acompañamientos 1:1, sesiones a domicilio o a distancia y sus tarifas) y pasa a proponer **bienestar y movimiento en empresa** como actividad principal y **actividades colectivas con Le PR Club** como actividad secundaria. La web actual sigue vendiendo la oferta antigua con precios, no contiene ninguna página para empresas y conserva restos de la plantilla de Astro (feed con artículos «Lorem ipsum», metadatos en inglés, dominio `example.com`), de modo que hoy no sirve como enlace que Virginia pueda compartir con responsables de RR. HH., CSE o equipos.

### Estado de la información

- **Observado en el repositorio**: cinco rutas publicadas (`/`, `/services`, `/tarifs-coaching`, `/pilates-plein-air`, `/contact`); precios individuales visibles en páginas y en una meta description (de 60 € a 250 €/mes, y 12 € la sesión del club); `index.astro` con `lang="en"`; `SITE_DESCRIPTION = 'Welcome to my website!'`; `rss.xml` con cinco artículos de plantilla que enlazan a `/blog/…` (ruta inexistente) y anunciado en el `<head>` de todas las páginas; imagen Open Graph por defecto inexistente; marca escrita como «Vivimoves» y «Virginia Moves»; menú móvil sin disclosure (los enlaces se apilan); formulario Formspree sin etiquetas visibles; ningún archivo de configuración de hosting; `PRODUCT.md` y `DESIGN.md` ausentes (Impeccable devuelve `NO_PRODUCT_MD` y `BUILD_INIT_REQUIRED`).
- **Confirmado por el brief** (`docs/prompts/refonte-entreprises-pr-club.md`): nuevo posicionamiento, las cinco actividades, los tres formatos, los hechos biográficos de Virginia, la paleta de partida (mostaza `#EFB13C`, crema `#F7F1E6`, casi negro `#171714`), la arquitectura de rutas, los enlaces de Bookwhen e Instagram del club y la ausencia total de precios.
- **Comprobado en fuentes públicas el 2026-11-11**: la agenda `bookwhen.com/fr/leprclub` no tiene ningún evento publicado; el Linktree del club anuncia a la vez un «run 5 km gratuit» y sesiones de Pilates, lo que contradice la agenda vacía. Instagram y la publicación de LinkedIn no se han consultado (requieren sesión).
- **Confirmado por Virginia tras revisar la propuesta (2026-11-11)**: interviene principalmente en Cergy y el Val-d'Oise (95); Aude ya no forma parte de Le PR Club y Virginia es su única fundadora; hay consentimiento para las fotografías existentes salvo `CBN06836.jpg`, que es una imagen generada y se descarta; son ciertas las menciones «coach sportive certifiée», «diplômée d'État» y «Pilates (mat & reformer)»; el taller «Mieux manger au travail» se publica; se enlaza su perfil de LinkedIn; no hay condiciones comerciales que publicar por ahora; llegarán más fotografías más adelante.
- **Confirmado por Virginia al iniciar apply (2026-11-11)**: Vivimoves debe presentarse como una empresa local y de talla humana con propuestas de bienestar para los asalariados del Val-d'Oise, no como una persona que ofrece servicios; los textos hablan en «nous»; Virginia queda en segundo plano (final de `/a-propos` y `/contact`) y su retrato no se usa en la portada ni en `/entreprises`. Esto sustituye la indicación del brief de darle una presencia importante. El sitio está desplegado en Vercel, en `https://vivimoves-site.vercel.app`; su perfil de LinkedIn es `https://www.linkedin.com/in/virginiavallejo94/`.
- **Propuesto en este cambio**: textos en francés, composición de páginas, tokens, tipografía, componentes y mecanismo de redirección. Son recomendaciones hasta que Virginia las valide.
- **Pendiente de confirmación**: ver «Decisiones pendientes» más abajo.

## What Changes

### Alcance

- **BREAKING** — Se retira la oferta individual: desaparecen `/services` y `/tarifs-coaching` con todos sus programas, packs y tarifas, y se elimina toda mención comercial a coaching individual en textos, metadatos, textos alternativos, navegación e imágenes promocionales.
- **BREAKING** — `/pilates-plein-air` deja de existir como página; su contenido vigente se integra en `/le-pr-club` sin horarios, «cet été 2026» ni los 12 €.
- Nueva portada `/` que establece el posicionamiento, prioriza empresas y orienta hacia el club y hacia la presentación de la empresa.
- Nueva landing `/entreprises`, autónoma y compartible: cinco actividades diferenciadas (éveil musculaire, yoga, Pilates, gym posturale, méditation et bains sonores), tres formatos (cours réguliers, ateliers ponctuels, mini-retraites d'équipe), recorrido de preparación de un proyecto y CTA de contacto.
- Nueva página `/le-pr-club`: presentación del club, CTA principal «Voir les prochaines séances» hacia Bookwhen y secundario hacia Instagram, con contenido estable que funciona con la agenda llena o vacía.
- Nueva página `/a-propos`: presentación de Vivimoves como empresa local y de talla humana; Virginia aparece al final, en pocas líneas, como fundadora e interviniente.
- `/contact` reorientado a empresas: formulario con nombre, e-mail, empresa y mensaje (más dos campos opcionales), etiquetas visibles, validación y estados de envío; se mantiene el endpoint de Formspree existente.
- Las URLs antiguas reciben un destino coherente mediante redirecciones permanentes de Vercel (`vercel.json`), con las redirecciones estáticas de Astro como respaldo fuera de Vercel.
- Nuevo sistema visual (mostaza, crema, casi negro) con tokens semánticos, tipografía, cabecera con menú móvil accesible y pie rediseñados. La dirección visual se resuelve con la skill Impeccable (`init` → `shape` → new-work) durante apply; este cambio solo aporta una recomendación.
- Saneamiento de SEO y plantilla: `lang="fr"` en todas las páginas, títulos y descripciones por página, imagen Open Graph real, sitemap sin rutas retiradas y feed sin artículos de plantilla ni enlace público.

### Exclusiones

- Precios de cualquier tipo, tienda, pago, checkout o plataforma de formación online.
- Calendario interno, scraping, embed o integración API con Bookwhen; contadores o estados de disponibilidad en tiempo real.
- Backend, cuentas de usuario, CRM, newsletter, SSR, CMS o frameworks de UI (React, Vue, Svelte) y librerías de animación.
- Blog nuevo o contenido editorial; datos estructurados JSON-LD (se posponen hasta confirmar dominio, nombre público y zona).
- Nuevos servicios de tracking o embeds. La etiqueta de Google Ads ya presente en `BaseHead.astro` no se modifica.
- Testimonios, logotipos de clientes, métricas, certificaciones o disponibilidad que no estén confirmados; imágenes generadas que representen a Virginia, a sus clientes o talleres no realizados.
- Cualquier mención a Aude en Le PR Club y la fotografía en la que aparece.
- Titulaciones de nutrición: «Mieux manger au travail» se publica solo como ejemplo de taller.

### Resolución con el stack existente

Todo se resuelve con Astro 5 estático, componentes `.astro`, Tailwind CSS 4 (`@theme` en `src/styles/global.css`), `astro:assets` para imágenes (`sharp` ya está instalado como dependencia de Astro) y tres scripts en línea sin dependencias (menú móvil, mejora progresiva del formulario y preselección de actividad). Se conservan `@astrojs/mdx`, `@astrojs/rss`, `@astrojs/sitemap` y la colección de contenido. No hay cambio de arquitectura.

Única adición propuesta de dependencias, solo de desarrollo: `@astrojs/check` y `typescript`, con un script `check`. Justificación: el proyecto declara TypeScript estricto pero `astro build` no comprueba tipos y `package.json` no tiene scripts de test, lint ni typecheck; el cambio introduce módulos de datos tipados y `Props` nuevas que conviene verificar. No llegan al navegador.

## Capabilities

### New Capabilities

- `oferta-empresas`: presentación de la oferta para empresas en la portada y en `/entreprises` (cinco actividades, tres formatos, recorrido de proyecto, CTAs de contacto, ausencia de precios y de promesas médicas o cuantificadas).
- `le-pr-club`: página de actividades colectivas y comunidad, enlaces a Bookwhen e Instagram, contenido independiente del estado de la agenda y separación respecto a la demanda de empresa.
- `presentacion-empresa`: presentación de Vivimoves como empresa local y de talla humana en `/a-propos` y sus resúmenes, voz de empresa («nous») y lugar secundario de Virginia como fundadora e interviniente, con hechos confirmados.
- `contacto`: formulario orientado a empresas sobre Formspree, validación, estados de envío, paso del interés desde los CTAs y vías de contacto directo.
- `estructura-y-migracion`: rutas publicadas, navegación principal y menú móvil, migración de URLs antiguas, idioma, metadatos, sitemap y feed.
- `sistema-visual`: identidad mostaza/crema/oscuro mediante tokens, accesibilidad WCAG AA de los componentes compartidos, comportamiento responsive, movimiento y rendimiento de imágenes y fuentes.

### Modified Capabilities

Ninguna: `openspec/specs/` no contiene todavía ninguna capacidad.

## Impact

- **Páginas**: se crean `src/pages/entreprises.astro`, `le-pr-club.astro` y `a-propos.astro`; se reescriben `index.astro` y `contact.astro`; se eliminan `services.astro`, `tarifs-coaching.astro` y `pilates-plein-air.astro`.
- **Componentes y layouts**: `BaseHead.astro`, `Header.astro`, `HeaderLink.astro` y `Footer.astro` conservan su responsabilidad y se rediseñan; se añade `src/layouts/BaseLayout.astro` y componentes de sección; `BlogPost.astro` y `FormattedDate.astro` se adaptan mínimamente al nuevo layout y a `fr-FR`.
- **Estilos**: `src/styles/global.css` sustituye las variables heredadas de Bear Blog y la paleta crema-melocotón por tokens nuevos. Es el cambio de diseño solicitado explícitamente que la configuración del proyecto exige para tocar la paleta.
- **Configuración**: `astro.config.mjs` (`redirects` y `site`), nuevo `vercel.json`, `src/consts.ts`, `src/pages/rss.xml.js`, `package.json` y `package-lock.json` (dependencias de desarrollo y script `check`).
- **Contenido y recursos**: se eliminan los cinco artículos de plantilla de `src/content/blog/`; las fotos utilizables pasan de `public/` a `src/assets/` para optimizarlas; se retiran iconos e imágenes ligados a la oferta individual. Los dos archivos de `public/images/` (10 MB y 18 MB) no deben servirse sin optimizar.
- **Contexto de producto y diseño**: se crean `PRODUCT.md`, `DESIGN.md` y los artefactos de `.impeccable/` que produzca el flujo de Impeccable.
- **OpenSpec**: el campo `context` de `openspec/config.yaml` describe la web como «coaching deportivo, running y Pilates» y pide conservar la paleta; queda desactualizado y se propone revisarlo al final de apply.
- **Sistemas externos**: Formspree (mismo endpoint, campos nuevos), Bookwhen e Instagram (solo enlaces), hosting (posible configuración de redirecciones HTTP).
- **SEO**: las URLs antiguas dejan de estar indexables; `site` pasa de `https://example.com` a `https://vivimoves-site.vercel.app`.

### Decisiones pendientes

Afectan a la publicación, no a la planificación. Mientras no se resuelvan, el contenido correspondiente se omite o se redacta sin el dato.

1. **Año de creación de Le PR Club**: el sitio actual dice «né à Cergy-Pontoise en 2025»; no se ha confirmado y no se publica.
2. **Nuevas fotografías**: Virginia las aportará más adelante; el sitio se construye con las existentes y sin fotos de intervenciones en empresa.
3. **Dominio propio**: si en el futuro sustituye a `vivimoves-site.vercel.app`, habrá que actualizar `site`.

Resueltas: dominio y hosting (Vercel), perfil de LinkedIn, zona de intervención, fotografías existentes, datos profesionales, fundadora del club, taller «Mieux manger au travail» y enlace a LinkedIn (ver «Estado de la información»). No se publica ninguna condición comercial: duración, tamaño de grupo, material, desplazamientos ni plazos de respuesta.
