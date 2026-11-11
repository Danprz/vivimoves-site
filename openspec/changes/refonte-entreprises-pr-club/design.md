# Design

## Context

Motivación y alcance: ver `proposal.md`. Requisitos: ver `specs/`. Aquí solo figura lo que condiciona el «cómo».

**Estado observado del código**

- Astro 5.8.1 estático, sin adaptador. `astro.config.mjs` declara `site: 'https://example.com'` y las integraciones `mdx()` y `sitemap()`. No existe ningún archivo de hosting (`netlify.toml`, `vercel.json`, `_redirects`, `CNAME`, flujos de CI): el proveedor de despliegue es desconocido.
- Cada página repite `<html>`, `<head>` y `<body>`; no hay layout de página. Solo `index.astro` usa `<main>`. Los colores están escritos como hex sueltos en clases de Tailwind (`bg-[#FFD6BA]`, `text-[#331c10]`, `bg-[#d89a6b]`).
- `src/styles/global.css` mezcla variables de la plantilla Bear Blog (`--accent: #2337ff`, grises), la paleta crema-melocotón (`--clr-*`) y la fuente Atkinson en WOFF (400 y 700).
- `Header.astro`: cuatro enlaces en línea que en móvil pasan a una segunda fila; no hay botón de menú. Contiene un emoji en la navegación, un `<a>` sin cerrar, el texto oculto «Follow Astro on Mastodon» y el logo `soleil.png` con proporción falseada (50 × 15 para una imagen de 112 × 112).
- `BaseHead.astro`: etiqueta de Google Ads (`AW-…`), favicon `soleil.svg`, `<link rel="alternate">` al feed, imagen Open Graph por defecto `/blog-placeholder-1.jpg` (no existe en `public/`).
- `rss.xml.js` publica los cinco artículos de plantilla de `src/content/blog/` con enlaces a `/blog/<id>/`; no existe `src/pages/blog/`. `BlogPost.astro` no lo usa ninguna ruta, declara `lang="en"` y enlaza una hoja `/src/styles/tailwind.css` inexistente.
- `contact.astro`: formulario POST a Formspree con `name`, `email` y `message`, solo con placeholders; ancla `#contact-form`; una tarjeta «Adresse» que enlaza a una búsqueda de Google con parámetros de sesión.
- Herramientas: `sharp` y `typescript` están en `node_modules` como dependencias transitivas; `@astrojs/check` no está instalado; `package.json` solo define `dev`, `build`, `preview` y `astro`.
- Impeccable (`.claude/skills/impeccable`, v4.8.2): `impeccable context` devuelve `NO_PRODUCT_MD`, `BUILD_INIT_REQUIRED` y `EXISTING_VISUAL_SYSTEM`. No existen `PRODUCT.md`, `DESIGN.md` ni briefs de superficie.

**Inventario de imágenes revisadas** (contenido comprobado archivo por archivo)

| Archivo | Tamaño | Qué muestra | Uso propuesto |
|---|---|---|---|
| `public/vivi.jpg` | 3306 × 3428 | Retrato en interior claro, sentada en una esterilla, mirando a cámara. El código la usa como retrato de Virginia. | Retrato de Virginia, solo en `/a-propos`. |
| `public/coaching-distance.png` | 970 × 1456 | Una persona en movimiento, riendo, en un interior con espejo. | En reserva; no se usa en este cambio. |
| `public/coaching-presentiel.png` | 908 × 654 | Sesión individual: una persona guía a un hombre reconocible sentado en el suelo. | Consentimiento confirmado, pero representa coaching 1:1: **retirar** del sitio. |
| `public/aude-virginia.png` | 768 × 1024 | Dos personas en ropa de running ante una pared de madera. El código las identifica como Aude y Virginia. | **Retirar.** Aude ya no forma parte del club. |
| `public/pilates-plein-air.png` | 1024 × 768 | Sesión de Pilates al aire libre: una persona de espaldas con camiseta del club y tres participantes reconocibles. | `/le-pr-club`, imagen de comunidad (consentimiento confirmado). Resolución limitada: no sirve a sangre en escritorio. |
| `public/images/DJI_…0124_D.JPG` | 3456 × 6144 (10 MB) | Primer plano de la camiseta «le pr club · Pilates & Running Club · Cergy-Pontoise»; rostro fuera de plano. Al fondo se lee parte del rótulo de un estudio. | `/le-pr-club`, imagen de identidad; recortar para excluir el rótulo del estudio. |
| `public/images/DJI_…0164_D.JPG` | 7680 × 4320 (18 MB) | Persona de espaldas sobre un reformer, con camiseta del club, en un estudio. | `/le-pr-club`. **No** junto a «Pilates en entreprise»: sugeriría máquinas y estudio. |
| `public/CBN06836.jpg` | 1024 × 1024 | Mujer sobre un reformer. Virginia confirma que es una imagen generada por IA. No se usa en el código. | **Eliminar.** |
| `public/vivipilates.PNG` | 1536 × 1024 | Ilustración de estilo anime de un selfi en un estudio. No se usa en el código. | **Excluir**: no es una fotografía. |
| `public/yoga.png`, `runner.png`, `pilates.png` | 512 × 512 | Iconos de las tarjetas antiguas. | **Retirar.** |
| `public/soleil.svg`, `soleil.png` | — / 112 × 112 | Símbolo de sol usado como logo y favicon. | Conservar como símbolo de marca en SVG, recoloreado con los tokens. |
| `public/favicon.svg` | — | Favicon por defecto de Astro, sin uso. | **Eliminar.** |

Conclusión que condiciona el diseño: **no existe ninguna fotografía de una intervención en empresa**. Las secciones B2B no pueden apoyarse en imágenes de talleres. Virginia aportará más fotografías más adelante; la composición debe admitirlas sin rehacer las páginas.

**Fuentes externas** (consultadas el 2026-11-11): la agenda de Bookwhen del club está vacía; el Linktree del club se describe como «le 1er club de Pilates & run dans le 95» y anuncia un run gratuito. Ni el superlativo ni la gratuidad se reutilizan. El sitio actual enlaza a `leprclub.bookwhen.com/fr/schedules/…`, una agenda concreta de la temporada estival; el brief fija `https://bookwhen.com/fr/leprclub`.

## Goals / Non-Goals

**Goals:**

- Que la fase apply pueda construir las cinco páginas sin inventar decisiones comerciales, datos biográficos ni textos: este documento aporta la arquitectura, los borradores en francés y los criterios.
- Una sola fuente de verdad para actividades, formatos, URLs externas y tokens, de modo que portada y landing no dupliquen contenido.
- Que el núcleo (navegar, leer, enviar el formulario, llegar a Bookwhen) funcione sin JavaScript.
- Separar con claridad lo invariable (contenido, rutas, accesibilidad, anclas de paleta) de lo que debe decidir Virginia en la ronda de dirección visual de Impeccable.

**Non-Goals:**

- Fijar aquí la dirección visual definitiva: la sección D9 es una recomendación.
- Diseñar un blog, datos estructurados o una página de agradecimiento propia para el formulario sin JavaScript.
- Cambiar la etiqueta de Google Ads existente o añadir un gestor de consentimiento.
- Adoptar un adaptador de hosting o cambiar el modo de salida de Astro.

## Decisions

### D1. Arquitectura de rutas y recorridos

Se adopta la arquitectura del brief sin simplificarla: `/`, `/entreprises/`, `/le-pr-club/`, `/a-propos/`, `/contact/`.

| Recorrido | Entrada | Camino | Acción final |
|---|---|---|---|
| Responsable de RR. HH. con enlace de Virginia | `/entreprises/` | Hero → actividades → formatos → CTA de una actividad | Formulario con la actividad preseleccionada |
| Recomendación o búsqueda de marca | `/` | Hero → CTA, o resumen de Virginia → `/a-propos/` | Formulario |
| Persona interesada en el club | `/le-pr-club/` (desde Instagram, Linktree o la portada) | Primer bloque | Bookwhen o Instagram |
| Marcador o enlace antiguo | `/services`, `/tarifs-coaching`, `/pilates-plein-air` | Redirección | `/entreprises/` o `/le-pr-club/` |

*Alternativa descartada*: fusionar `/a-propos` en la portada. La portada quedaría demasiado larga y la landing B2B necesita poder enlazar a un relato completo sin pasar por el club.

Convención de enlaces: los enlaces internos se escriben con barra final (`/contact/`), que es la forma que generan la canónica y el sitemap con `build.format` por defecto.

### D2. Migración de URLs

| URL actual | Destino | Tratamiento |
|---|---|---|
| `/` | `/` | Se reescribe. |
| `/services` | `/entreprises/` | Página eliminada; redirección. |
| `/tarifs-coaching` | `/entreprises/` | Página y tarifas eliminadas; redirección. |
| `/pilates-plein-air` | `/le-pr-club/` | Página eliminada; redirección a la página principal del club. No se crea una sección «plein air» porque el contenido era estacional. |
| `/contact` | `/contact/` | Se conserva y se reescribe. Se mantiene `id="contact-form"` en el formulario para que los enlaces antiguos sigan funcionando. |
| `/rss.xml` | `/rss.xml` | Se conserva sin artículos (ver D11). |
| `/blog/<id>/` | — | Nunca existió como ruta; solo aparecía en el feed. Sin redirección. |

Anclas antiguas (`/services#running`, `#pilates`, `/tarifs-coaching#accompagnements`): no tienen equivalente; la redirección lleva al inicio de `/entreprises/`.

**Mecanismo**: el sitio está en Vercel, así que las tres rutas se declaran en un `vercel.json` nuevo como `redirects` con `permanent: true` (respuesta HTTP 308), que Vercel aplica también a despliegues estáticos sin adaptador. Como respaldo fuera de Vercel (vista previa local u otro proveedor) se declaran además en `redirects` de `astro.config.mjs`. En salida estática Astro genera, para cada ruta antigua, un HTML con `<meta http-equiv="refresh" content="0;url=…">`, canónica del destino y `noindex`, y un enlace en el cuerpo. **Esto no es una redirección HTTP**: el servidor responde 200 y es el navegador quien salta. Un 301/308 real exige configuración del proveedor (por ejemplo, un archivo `_redirects`, reglas en su panel o su adaptador de Astro) y solo puede prometerse cuando se conozca el hosting.

*Alternativas consideradas*: (a) páginas de redirección escritas a mano en francés: más código y obligan a filtrarlas del sitemap; se reservan como plan B si la salida de `redirects` no cumple la spec; (b) dejar que las URLs antiguas den 404: pierde a quien llega desde un marcador o desde Google; (c) adoptar un adaptador para obtener redirecciones del proveedor: cambio de arquitectura injustificado sin conocer el hosting.

Limitación asumida: el texto del cuerpo de la página que genera Astro está en inglés; solo se ve si el navegador bloquea el salto automático.

Durante apply se comprueba en `dist/` que las tres páginas contienen el refresh, la canónica y el `noindex`, y que `sitemap-0.xml` no las lista; si las listara, se añade `filter` a `sitemap()`.

### D3. Layout y componentes

Se introduce `src/layouts/BaseLayout.astro`, que asume lo que hoy repite cada página: `<html lang="fr">`, `BaseHead`, enlace de salto, `Header`, `<main id="contenu">` y `Footer`. `BaseHead`, `Header`, `HeaderLink` y `Footer` conservan su responsabilidad y cambian de presentación.

| Pieza | Estado | Responsabilidad |
|---|---|---|
| `layouts/BaseLayout.astro` | Nueva | Esqueleto de página; props `title`, `description`, `image?`, `tone?` (`'entreprise'` por defecto, `'club'`). |
| `components/BaseHead.astro` | Se modifica | Metadatos, canónica, Open Graph (`og:locale`, `og:site_name`, imagen por defecto real), precarga de fuentes. Se retira el `<link rel="alternate">` del feed. La etiqueta de Google Ads no se toca. |
| `components/Header.astro` | Se reescribe | Marca, navegación principal, botón de menú. |
| `components/HeaderLink.astro` | Se modifica | Enlace con `aria-current="page"`; comparación de rutas normalizando la barra final. |
| `components/Footer.astro` | Se reescribe | Navegación secundaria, contacto, Instagram de Virginia y del club, «© {année} Vivimoves», crédito existente del desarrollador. |
| `components/Cta.astro` | Nueva | Acción con variantes `primary`, `secondary` y `link`; renderiza `<a>` o `<button>`. |
| `components/ExternalLink.astro` | Nueva | `target="_blank"`, `rel="noopener noreferrer"`, icono y texto oculto « (nouvelle fenêtre) ». |
| `components/ActivityItem.astro` | Nueva | Una actividad completa en `/entreprises`. |
| `components/AboutBand.astro` | Nueva | Resumen de la empresa, compartido por portada y landing. |
| `components/ContactBand.astro` | Nueva | Invitación final al contacto, compartida por cuatro páginas. |
| `components/ContactForm.astro` | Nueva | Formulario y su script de mejora progresiva. |
| `data/activities.ts`, `data/formats.ts` | Nuevos | Contenido tipado de actividades y formatos. |
| `consts.ts` | Se amplía | `SITE_DESCRIPTION` en francés, `FORMSPREE_ENDPOINT`, `CONTACT_EMAIL`, `BOOKWHEN_URL`, `PR_CLUB_INSTAGRAM_URL`, `VIRGINIA_INSTAGRAM_URL`, `VIRGINIA_LINKEDIN_URL`. |
| `layouts/BlogPost.astro`, `components/FormattedDate.astro` | Ajuste mínimo | Envolver en `BaseLayout`, quitar la hoja inexistente, fechas en `fr-FR`. Siguen sin ruta. |

Criterio de extracción: solo se crea un componente si se usa en dos o más páginas o si encapsula comportamiento. Las secciones de un solo uso (formatos, pasos del proyecto, relato de `/a-propos`) se escriben en su página.

*Alternativa descartada*: llevar actividades y formatos a una Content Collection. Son cinco y tres entradas de texto corto que se consumen como datos, no como documentos; un módulo TypeScript tipado es más simple y la colección `blog` existente queda intacta.

### D4. JavaScript cliente

Tres comportamientos, sin dependencias, escritos como `<script>` de componente (Astro los empaqueta y difiere):

1. **Menú móvil** (`Header.astro`): alterna `aria-expanded` y la visibilidad de la lista; Escape cierra y devuelve el foco al botón; al pasar a ancho de escritorio el estado se restablece.
2. **Formulario** (`ContactForm.astro`): validación con mensajes propios, envío con `fetch` y estados de envío, éxito y fallo (D8).
3. **Preselección de actividad** (mismo script): lee `?activite=<slug>` y selecciona la opción si existe.

Además, una línea `is:inline` en el `<head>` añade la clase `js` a `<html>`. El CSS solo colapsa el menú bajo `.js`, de modo que sin JavaScript la navegación queda visible y con JavaScript no hay parpadeo.

Impacto: unos pocos kilobytes, sin hidratación ni frameworks; la generación sigue siendo 100 % estática. Ningún contenido depende de estos scripts para mostrarse.

*Alternativa descartada para el menú*: `<details>/<summary>` sin JavaScript. No permite restablecer el estado al cambiar de ancho ni gestionar Escape, y su semántica de «detalles» es menos clara que un botón con `aria-expanded`.

### D5. Contenido de la oferta para empresas

Borradores en francés, **pendientes de validación por Virginia**. En la implementación se aplican apóstrofos tipográficos y espacios finos insecables antes de `: ; ! ?`.

**Portada `/`**

- `h1`: « Le mouvement a toute sa place au travail. »
- Entradilla: « Vivimoves propose aux entreprises du Val-d’Oise des cours, des ateliers et des mini-retraites d’équipe, pour que vos salariés puissent bouger, respirer et faire une vraie pause. »
- CTA principal: « Parlons de votre équipe » → `/contact/`. Secundario: « Découvrir les interventions » → `/entreprises/`.
- Bloque empresas, `h2`: « Cinq façons de remettre du mouvement dans la journée ». Una línea por actividad (campo `teaser` de la tabla siguiente) y la frase « En cours réguliers, en ateliers ponctuels ou en mini-retraite d’équipe. » Enlace: « Voir les interventions en entreprise ».
- Bloque club, `h2`: « Le PR Club ». Texto: « Envie de courir ou de pratiquer le Pilates en groupe ? Le PR Club réunit celles et ceux qui aiment bouger ensemble dans le Val-d’Oise. » Enlace: « Découvrir Le PR Club » → `/le-pr-club/`.
- Bloque empresa: componente `AboutBand` (D7).
- Cierre, `h2`: « Un projet pour votre équipe ? » Texto: « Racontez-nous votre contexte : nous vous proposerons une intervention adaptée. » CTA: « Construisons votre projet ».

**Landing `/entreprises/`** — secuencia

1. **Hero.** Antetítulo: « Bien-être et mouvement en entreprise ». `h1`: « Des pauses qui remettent vos équipes en mouvement ». Entradilla: « Yoga, Pilates, éveil musculaire, gym posturale, méditation et bains sonores : nous intervenons auprès de vos salariés, en cours réguliers, en ateliers ou en mini-retraite. » CTA: « Parlons de votre équipe ».
2. **Por qué.** `h2`: « Pourquoi bouger pendant la journée de travail ? » Texto: « Entre deux réunions, le corps passe vite au second plan : on reste assis, on enchaîne, on oublie de respirer. Proposer un temps de mouvement ou de pause, c’est offrir à l’équipe un moment pour se délier, souffler et se retrouver autrement que devant un écran. » Sin cifras.
3. **Actividades** (`#activites`). `h2`: « Cinq pratiques, cinq expériences différentes ».
4. **Formatos** (`#formats`). `h2`: « Trois formats pour s’adapter à votre rythme ».
5. **Preparación** (`#demarche`). `h2`: « Comment se construit un projet ».
6. **Empresa.** Componente `AboutBand` (D7), sin fotografía.
7. **Cierre.** `h2`: « Parlons de votre équipe ». Texto: « Décrivez-nous votre contexte, même en quelques lignes. On construit le reste ensemble. » CTA: « Construisons votre projet ».

**Zona de intervención** (confirmada): al final de la sección 5 y en `/contact/` se muestra « Nous intervenons principalement à Cergy et dans le Val-d’Oise (95). Votre entreprise est ailleurs ? Parlons-en. » Sin radio, lista de municipios ni gastos de desplazamiento.

No se publica un bloque de preguntas frecuentes: Virginia ha confirmado que por ahora no hay condiciones que publicar (duración, tamaño de grupo, material, desplazamientos). Si más adelante confirma alguna, se añade entre los pasos 6 y 7 un bloque « Questions pratiques » solo con esas respuestas.

**Las cinco actividades** (`data/activities.ts`)

| `slug` / ancla | Título | `teaser` (portada) | Descripción breve | Experiencia propuesta | Situaciones de uso | CTA |
|---|---|---|---|---|---|---|
| `eveil-musculaire` | Éveil musculaire en entreprise | Se mettre en mouvement avant ou pendant la journée. | Une mise en route du corps, douce et tonique, pour commencer la journée ou la relancer. | Mobilité articulaire, activation progressive, respiration : on délie le corps et on le prépare à la suite, sans chercher la performance. | En début de journée · en ouverture d’un séminaire ou d’une réunion d’équipe · après un long temps assis. | Proposer l’éveil musculaire à votre équipe |
| `yoga` | Ateliers de yoga en entreprise | Bouger, respirer, faire une pause consciente. | Du mouvement, du souffle et une vraie pause consciente au cœur de la journée. | Des postures enchaînées au rythme de la respiration, puis un temps de retour au calme. | À la pause méridienne · en fin de journée · comme rendez-vous régulier de l’équipe. | Proposer le yoga à votre équipe |
| `pilates` | Ateliers de Pilates en entreprise | Contrôle du mouvement, stabilité, conscience corporelle. | Un travail précis et progressif : contrôle du mouvement, stabilité et conscience corporelle. | Des exercices lents et guidés pas à pas, où la qualité du geste compte plus que l’intensité. | En cours réguliers, pour installer une pratique · pour une équipe qui veut progresser ensemble, séance après séance. | Proposer le Pilates à votre équipe |
| `gym-posturale` | Gym posturale en entreprise | Explorer ses gestes et ses postures de travail. | Explorer ses gestes, ses postures et sa mobilité, en lien direct avec la journée de travail. | On part des situations réelles — assis, debout, devant l’écran — pour observer ses habitudes et essayer des alternatives simples à refaire seul. | Pour une équipe très sédentaire · dans une démarche de prévention · en atelier ponctuel, comme « Mon corps au bureau ». | Proposer la gym posturale à votre équipe |
| `meditation-bains-sonores` | Méditation et bains sonores | S’arrêter, écouter, relâcher. | Une expérience de pause, d’attention et de relaxation, où il n’y a rien à réussir. | Un temps d’attention guidée, puis une immersion sonore : on s’installe, on écoute, on laisse le rythme redescendre. | En clôture d’un séminaire ou d’une mini-retraite · dans une période chargée · pour un temps collectif au calme. | Proposer une pause sonore à votre équipe |

Lo que diferencia cada una, y que la composición debe hacer visible: el éveil musculaire **activa**, el yoga **une movimiento y respiración**, el Pilates **afina y estabiliza**, la gym posturale **parte de los gestos del trabajo** y la méditation con bains sonores **detiene**. Cada CTA enlaza a `/contact/?activite=<slug>#contact-form`.

**Formatos** (`data/formats.ts`)

| Formato | Texto |
|---|---|
| Cours réguliers | Un rendez-vous récurrent pour installer une pratique : Pilates, yoga, renforcement musculaire ou bains sonores. |
| Ateliers ponctuels de bien-être et de prévention | Un temps fort autour d’un thème, par exemple « Mon corps au bureau », « Running en équipe » ou « Mieux manger au travail ». |
| Mini-retraites d’équipe | Une journée ou une demi-journée pour ralentir, bouger et se retrouver. |

El renforcement musculaire aparece solo dentro de «Cours réguliers», no como sexta actividad. «Mieux manger au travail» figura solo como ejemplo de taller, sin descripción propia y sin atribuir a Virginia titulaciones de nutrición.

**Preparación de un proyecto** — tres pasos

1. « On échange » — « Vous nous parlez de votre équipe, de votre contexte et de vos envies. »
2. « Nous vous proposons une intervention adaptée » — « Pratique, format et rythme : la proposition se construit à partir de ce que vous nous avez décrit. »
3. « On passe à la pratique » — « La séance, l’atelier ou la mini-retraite a lieu avec votre équipe. »

No se mencionan duración, aforo, material ni condiciones; del lugar, solo la frase de zona de intervención.

### D6. Contenido de Le PR Club

Borrador en francés, pendiente de validación:

- Antetítulo: « Pilates & running · Val-d’Oise ». `h1`: « Le PR Club : on bouge ensemble ».
- Entradilla: « Des sorties running, des séances de Pilates et des rendez-vous à partager. Ici, on vient pour bouger, pour le plaisir et pour le groupe. »
- CTA principal: « Voir les prochaines séances » → `BOOKWHEN_URL`. Nota bajo el botón: « Dates, disponibilités, conditions et réservations : tout se passe sur Bookwhen. » CTA secundario: « Suivre le club sur Instagram » → `PR_CLUB_INSTAGRAM_URL`.
- `h2` « L’esprit du club »: tres ideas breves —« Courir », « Pratiquer le Pilates », « Se retrouver »— y la frase heredada del sitio actual: « Plus qu’un cours, une communauté : un endroit où l’on bouge ensemble, sans compétition, pour le plaisir de progresser à son rythme. »
- `h2` « Qui est derrière le club ? »: « Le PR Club a été fondé par Virginia, coach sportive diplômée d’État. » con enlace « Découvrir Vivimoves » → `/a-propos/` y una fotografía de la camiseta del club. Sin año de creación y sin ninguna mención ni imagen de Aude; el texto actual « Nous sommes Aude & Virginia… » se elimina.
- `h2` « Envie de venir ? »: « La programmation évolue au fil des saisons. Consultez l’agenda pour voir ce qui est ouvert à la réservation ; s’il n’y a rien pour l’instant, suivez le club sur Instagram pour connaître les prochains rendez-vous. » Este texto es cierto con la agenda llena o vacía; no hay estado «vacío» que diseñar porque el sitio no conoce el estado de la agenda.
- Puente a empresas: « Vous cherchez une activité pour votre équipe ? » con enlace « Découvrir les interventions en entreprise » → `/entreprises/`.

Bookwhen e Instagram se enlazan; no se incrustan (sin iframes, widgets ni llamadas a API).

### D7. Voz de empresa y lugar de Virginia

Decisión de Virginia al iniciar apply, que sustituye la indicación del brief: el sitio presenta **Vivimoves como empresa** local y de talla humana, no a una persona que ofrece servicios.

- **Voz**: «nous» o la marca; nunca «je». Sin afirmar un equipo de varios intervinientes ni cifras de plantilla.
- **Virginia**: solo al final de `/a-propos/`, en `/contact/` como interlocutora, en una línea de texto de `/entreprises/` y como fundadora en `/le-pr-club/`. Su retrato solo en `/a-propos/`. No aparece en la portada.
- Se descartan el relato cronológico «De l’ingénierie au mouvement», la etapa personal y la reconversión; quedan cuatro hechos en un párrafo.

`/a-propos/` — `h1`: « Vivimoves, le bien-être au travail près de chez vous ».

1. `h2` « Une proposition locale » — « Vivimoves s’adresse aux entreprises de Cergy et du Val-d’Oise et à leurs salariés. Nous intervenons près de chez vous. »
2. `h2` « Une entreprise à taille humaine » — « Ici, pas de plateforme ni de catalogue impersonnel : vous échangez avec la même personne du premier contact à la séance, et chaque proposition est construite pour votre équipe. »
3. `h2` « Notre conviction » — « Le mouvement mérite une place centrale dans la vie personnelle comme dans la vie professionnelle. Nous partageons des outils simples pour prendre soin de soi durablement. »
4. `h2` « Qui intervient ? » — retrato y « Virginia, fondatrice et intervenante ». « Ancienne ingénieure PMO chez SAVENCIA, Virginia connaît de l’intérieur les journées qui s’enchaînent entre deux réunions. Coach sportive certifiée, diplômée d’État, elle enseigne le Pilates sur tapis et sur reformer et s’est formée à l’enseignement du yoga en Inde, à Rishikesh Yogpeeth. » Enlace a LinkedIn.

Cierre con `ContactBand`. SAVENCIA y Rishikesh Yogpeeth como texto, nunca como logotipo; sin fechas, cifras ni otras titulaciones.

`AboutBand` (portada y landing, sin fotografía): `h2` « Une entreprise locale, à taille humaine »; « Vivimoves est basée à Cergy. Nous intervenons près de chez vous, avec une seule interlocutrice du premier échange jusqu’à la séance. »; enlace « Découvrir Vivimoves » → `/a-propos/`. En `/entreprises/` añade la línea « Les séances sont animées par Virginia, coach sportive diplômée d’État. »

### D8. Formulario de contacto

`/contact/` — `h1`: « Parlons de votre équipe ». Entradilla: « Quelques lignes sur votre contexte suffisent pour commencer. Nous revenons vers vous pour en discuter. » (sin plazo).

| Campo | `name` | Etiqueta | Tipo | Obligatorio | Notas |
|---|---|---|---|---|---|
| Nombre | `name` | Nom et prénom | `text` | Sí | `autocomplete="name"` |
| E-mail | `email` | E-mail | `email` | Sí | `autocomplete="email"`; Formspree lo usa como dirección de respuesta |
| Empresa | `company` | Entreprise | `text` | Sí | `autocomplete="organization"` |
| Actividad | `activity` | Activité qui vous intéresse (facultatif) | `select` | No | Primera opción « Pas encore défini » (valor vacío) y las cinco actividades |
| Ciudad | `city` | Ville de votre entreprise (facultatif) | `text` | No | Permite situar la empresa respecto a Cergy y el Val-d’Oise |
| Mensaje | `message` | Votre message | `textarea` | Sí | Ayuda: « Si vous le savez déjà : taille approximative du groupe, période souhaitée, format envisagé. » |

Tamaño de grupo y periodo no son campos: se sugieren en la ayuda del mensaje para no alargar el formulario. Sobre el formulario: « Les champs sont obligatoires, sauf mention contraire. » Botón: « Envoyer ma demande ». Campos ocultos: asunto fijo que identifica la web y un señuelo antispam, usando los campos especiales de Formspree (`_subject`, `_gotcha`), cuya vigencia se comprueba en su documentación durante apply. Se conservan `name`, `email` y `message` para no alterar lo que Virginia ya recibe.

**Base sin JavaScript**: `<form method="POST" action={FORMSPREE_ENDPOINT}>` con `required` y `type="email"`. Al enviar, el navegador sale del sitio y Formspree muestra su propia página de confirmación, con su marca, su idioma y, según la configuración del formulario en Formspree (no visible desde el repositorio), un paso antispam. Ese es el comportamiento externo real y no se disfraza.

**Mejora con JavaScript**

| Estado | Comportamiento |
|---|---|
| Validación | El script pone `novalidate`; al enviar comprueba los campos, muestra el mensaje bajo cada campo inválido (`aria-invalid`, `aria-describedby`) y enfoca el primero. Mensajes: « Indiquez votre nom et votre prénom. » · « Indiquez une adresse e-mail valide, par exemple nom@entreprise.fr. » · « Indiquez le nom de votre entreprise. » · « Écrivez quelques mots sur votre demande. » |
| Envío en curso | `fetch` POST al mismo endpoint con `Accept: application/json`. El botón pasa a « Envoi en cours… », queda deshabilitado y con `aria-busy`. |
| Éxito | Solo si la respuesta es 2xx y confirma el envío: el formulario se sustituye por una región `role="status"` con « Merci, votre message est bien parti. » y « Nous le lirons avec attention et nous reviendrons vers vous. »; el foco pasa a ese título. |
| Fallo | Respuesta de error, tiempo agotado o error de red: región `role="alert"` con « L’envoi n’a pas abouti. Vos informations sont toujours là : vous pouvez réessayer ou nous écrire directement par e-mail. », enlace `mailto:` y botón reactivado. Ningún campo se vacía. |

Junto al formulario, bloque secundario « Votre interlocutrice » — « Virginia, fondatrice de Vivimoves, coach sportive diplômée d’État » — con e-mail directo, LinkedIn e Instagram; la frase de zona de intervención de D5 y el aviso « Vous souhaitez réserver une séance du PR Club ? Les réservations se font sur Bookwhen. » con enlace. Se elimina la tarjeta «Adresse» y su URL de búsqueda de Google.

**Verificación sin enviar mensajes reales**: validación y fallo se prueban con el navegador sin conexión o bloqueando la petición; el éxito, sustituyendo temporalmente `fetch` en la consola por una respuesta simulada. El envío real de extremo a extremo queda como una única prueba que hace Virginia cuando lo decida.

*Alternativas descartadas*: (a) solo envío HTML: toda persona abandona el sitio hacia una página ajena; (b) una página propia de agradecimiento mediante el campo de redirección de Formspree: depende del plan contratado, que no puede comprobarse sin enviar; (c) la librería cliente de Formspree: dependencia innecesaria para una sola petición.

### D9. Dirección visual: proceso con Impeccable y recomendación

**Proceso (durante apply, no realizado en propose)**

1. `/impeccable init`: redactar `PRODUCT.md` a partir del brief. Init exige al menos una ronda de confirmación con la usuaria; el brief responde casi todo, de modo que la ronda se reduce a confirmar las inferencias y a las decisiones pendientes del proposal. Init no recoge estética.
2. Init pregunta una vez el modo de construcción: **comp-first** (una imagen generada fija el listón antes del código) o **code-first**. Recomendación: **code-first**, porque el camino comp-first regenera las imágenes del boceto como recursos finales y aquí solo son admisibles fotografías reales de Virginia y del club. La decisión es de la usuaria.
3. `/impeccable shape` sobre las superficies: reutiliza este documento como descubrimiento y entra en new-work para la elección de mundo visual. Como se trata de un rediseño, el aspecto actual es evidencia y anti-referencia. New-work presenta direcciones para que la usuaria fije una; la paleta del brief es vinculante («the brief wins»).
4. La dirección elegida se registra en `DESIGN.md` y en los briefs de superficie. Si difiere de la recomendación de abajo, se actualiza esta sección con `/opsx:update` antes de construir.
5. Inmediatamente antes de editar UI se lee `reference/craft-floor.md`.
6. Al terminar: `/impeccable audit`, `/impeccable critique` y `/impeccable polish` sobre las cinco páginas.

Modo de las cinco superficies: **Persuade**.

**Invariantes, sea cual sea la dirección elegida**: las tres anclas de color, el contenido y la arquitectura de D1–D8, los criterios de `specs/sistema-visual`, el uso exclusivo de fotografías reales y la ausencia de prueba social inventada.

**Dirección confirmada por Virginia: estándar del sector.** En la ronda de dirección eligió la opción sobria y familiar frente a tres alternativas más singulares. Se construye en code-first porque el entorno no genera imágenes. Se mantienen los tokens de abajo; cambian tres puntos respecto a la recomendación inicial: una sola familia tipográfica (Atkinson Hyperlegible, ya alojada, en WOFF: no se descargan fuentes nuevas), sin antetítulos sobre los titulares y sin numeración de las actividades. `DESIGN.md` es la referencia vigente.

**Recomendación inicial (sustituida en lo indicado): «éditorial solaire»**

Un sitio con voz de revista: fondo crema, tipografía grande casi negra, y el mostaza usado en campos amplios y decididos en lugar de salpicado en detalles. La falta de fotos de empresa se convierte en una decisión: las secciones B2B son tipográficas.

*Tokens* (contrastes medidos con la fórmula WCAG 2.x)

| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `page` | `#F7F1E6` | Fondo base | — |
| `surface` | `#FFFBF3` | Superficie elevada (campos, bloques) | — |
| `surface-sunk` | `#EDE3D0` | Bandas alternas | — |
| `ink` | `#171714` | Texto, titulares, borde de acciones | 15,98 sobre `page` · 17,40 sobre `surface` · 14,11 sobre `surface-sunk` |
| `ink-soft` | `#57524A` | Texto secundario | 6,89 · 7,50 · 6,09 |
| `line` | `#D9CDB6` | Filetes decorativos | 1,40: solo decorativo |
| `line-strong` | `#857B69` | Borde de campos | 3,71 sobre `page` · 4,04 sobre `surface` |
| `action` | `#EFB13C` | Fondo de acción principal, campos de color | `ink` encima: 9,43 |
| `action-hover` | `#E09E22` | Hover y activo | `ink` encima: 7,77 |
| `accent-text` | `#7A5200` | Antetítulos y acentos de texto sobre crema | 6,16 sobre `page` · 6,70 sobre `surface` |
| `inverse` | `#171714` | Bandas oscuras, pie | texto `#F7F1E6`: 15,98 · mostaza: 9,43 |
| `danger` | `#A32A1C` | Errores | 6,43 · 7,00 |
| `success` | `#1E6A3B` | Confirmación | 5,87 · 6,40 |
| `focus` | `ink` sobre superficies claras y mostaza; `#F7F1E6` sobre `inverse` | Contorno de 2 px con separación de 2 px | ≥ 9,43 |

El mostaza sobre crema da 1,69: nunca se usa como texto ni como único límite de un control. La acción principal es mostaza con texto y borde `ink`. El mostaza del brief no se altera; se añaden un tono más profundo para hover y un ocre oscuro para texto de acento.

Implementación: primitivas y tokens semánticos en `@theme` de Tailwind 4 dentro de `global.css`; las páginas solo usan utilidades derivadas (`bg-page`, `text-ink`, `bg-action`). Se eliminan las variables de Bear Blog, `--clr-*` y todos los hex sueltos.

*Tipografía*: dos familias alojadas en el sitio. Texto en **Atkinson Hyperlegible**, ya presente: su diseño centrado en la legibilidad refuerza el compromiso de accesibilidad y evita cambiar la voz del cuerpo de texto. Titulares en una grotesca variable con carácter y buen juego de diacríticos franceses, licencia abierta —candidata: **Bricolage Grotesque**, pesos 600–800—, que aporta la calidez y la energía que el texto de lectura no debe cargar. Archivos WOFF2 con subconjunto latino, `font-display: swap`, precarga solo del peso de titulares y del regular de texto. La familia de titulares se fija en la ronda de dirección, tras comprobar su licencia.

*Composición*

- **Cabecera**: símbolo de sol y «Vivimoves» en texto a la izquierda, cuatro enlaces a la derecha; «Contact» con estilo de acción. Por debajo de 768 px, botón « Menu » que despliega la lista bajo la cabecera.
- **Portada**: hero tipográfico, sin retrato. Después, las cinco actividades como lista tipográfica numerada, no como tarjetas; banda mostaza del club con una foto del club; resumen de la empresa; cierre sobre fondo `inverse`.
- **`/entreprises/`**: hero tipográfico sin fotografía. Actividades en filas editoriales numeradas 01–05 con filetes, alternando alineación y ancho de columna, cada una con su CTA de texto. Formatos en tres columnas sobre `surface-sunk` (una columna en móvil). Pasos en horizontal en escritorio y en vertical en móvil. Sin fotografías: Virginia solo figura en una línea de texto.
- **`/le-pr-club/`** (`tone="club"`): la proporción se invierte: hero sobre mostaza, tipografía más grande y fotografía protagonista (camiseta del club, grupo al aire libre). Mismos tokens y componentes; cambian la escala, la proporción de color y el peso de la imagen.
- **`/a-propos/`**: tres bloques de empresa en columna de lectura (65–75 caracteres por línea) y, al final, el bloque « Qui intervient ? » con el retrato a tamaño contenido.
- **`/contact/`**: dos columnas en escritorio (texto y vías directas; formulario sobre `surface`), una en móvil.

*Movimiento*: transiciones de color y subrayado en enlaces y acciones (150–200 ms) y despliegue del menú. Sin animaciones de entrada al hacer scroll. Todo se anula bajo `prefers-reduced-motion: reduce`.

*Iconografía*: mínima y en SVG en línea con `aria-hidden` (enlace externo, flecha, menú). Sin emojis.

### D10. Imágenes y rendimiento

- Las fotos utilizables se trasladan a `src/assets/` y se sirven con `astro:assets` (`<Image>` / `<Picture>`, AVIF y WebP, `widths` y `sizes`, `width` y `height` reservados). `sharp` ya está disponible.
- Los dos originales de `public/images/` se reducen a 3000 px de lado mayor antes de añadirlos al repositorio; los archivos de 10 MB y 18 MB no se versionan ni se publican.
- La imagen del primer bloque de cada página: `loading="eager"` y `fetchpriority="high"`; el resto, `loading="lazy"` y `decoding="async"`.
- Imagen Open Graph por defecto: `public/og-vivimoves.jpg`, 1200 × 630, composición tipográfica con la marca y los colores del sitio, generada con `sharp` a partir de un SVG.
- Se eliminan de `public/` los archivos marcados como «Retirar», «Excluir» o «Eliminar» en el inventario.

### D11. SEO, metadatos, sitemap y feed

| Ruta | `title` | `description` |
|---|---|---|
| `/` | Vivimoves · Mouvement et bien-être en entreprise | Cours, ateliers et mini-retraites d’équipe pour les entreprises du Val-d’Oise : yoga, Pilates, éveil musculaire, gym posturale, méditation et bains sonores. |
| `/entreprises/` | Yoga, Pilates et bien-être en entreprise · Vivimoves | Cinq pratiques pour vos équipes à Cergy et dans le Val-d’Oise : cours réguliers, ateliers ponctuels ou mini-retraites d’équipe. Parlons de votre projet. |
| `/le-pr-club/` | Le PR Club · Pilates et running dans le Val-d’Oise | Sorties running, séances de Pilates et rendez-vous collectifs. Consultez l’agenda et réservez sur Bookwhen, suivez le club sur Instagram. |
| `/a-propos/` | À propos · Vivimoves | Vivimoves, entreprise locale à taille humaine : des propositions bien-être pour les salariés de Cergy et du Val-d’Oise. |
| `/contact/` | Contact · Parlons de votre équipe · Vivimoves | Un projet de cours, d’atelier ou de mini-retraite pour votre équipe ? Écrivez-nous pour en parler. |

- `site` pasa a `https://vivimoves-site.vercel.app`, el dominio confirmado.
- Sitemap: generado por `@astrojs/sitemap`; debe listar las cinco rutas y ninguna redirección.
- **Feed**: se eliminan los cinco artículos de plantilla. Se conservan la colección `blog` con su esquema, `@astrojs/mdx`, `@astrojs/rss` y `rss.xml.js`, que con la colección vacía genera un feed válido sin artículos, con título y descripción en francés. `BaseHead` deja de anunciarlo y ninguna página lo enlaza. Publicar artículos en el futuro exigirá crear antes la ruta `/blog/`, fuera de este cambio.
  *Alternativa descartada*: eliminar `rss.xml.js`. La configuración del proyecto pide conservar la integración y la coherencia del feed; un feed vacío y no anunciado no difunde nada obsoleto.
- Sin JSON-LD en este cambio.

### D12. Comprobación de tipos

Se añaden `@astrojs/check` y `typescript` como dependencias de desarrollo y el script `"check": "astro check"`. `npm run build` sigue siendo la verificación de compilación; `npm run check` cubre los tipos de los módulos de datos y de las `Props`. No se añaden pruebas automatizadas que repliquen el contenido estático: las comprobaciones de contenido se hacen con búsquedas sobre `dist/` e inspección en el navegador.

*Alternativa*: ejecutar la comprobación puntualmente con `npx` sin guardar dependencias. Se descarta porque deja el proyecto sin un comando reproducible.

## Risks / Trade-offs

- [No hay fotografías de intervenciones en empresa] → Las secciones B2B son tipográficas por diseño; los retratos llevan leyendas que solo nombran a Virginia. Se recomienda a Virginia fotografiar una primera intervención real para una iteración posterior.
- [Las redirecciones de `vercel.json` no pueden probarse en local] → Se comprueban con `curl -I` tras el despliegue; en local se verifica el respaldo estático de Astro.
- [«Nous» puede sugerir un equipo que no existe] → Los textos no mencionan equipo, número de intervinientes ni plantilla, y `/a-propos/` dice con claridad quién interviene.
- [La dirección que elija Virginia en Impeccable puede diferir de la recomendada] → D9 separa invariantes de recomendación; se actualiza el diseño antes de construir.
- [Sin Aude, el club se queda sin foto de «equipo» y con pocas imágenes] → La página se apoya en la foto de la camiseta, la del reformer y la sesión al aire libre; la composición admite sustituirlas cuando lleguen fotos nuevas.
- [«Mieux manger au travail» puede leerse como asesoramiento nutricional] → Solo se cita como nombre de taller; ninguna página describe su contenido ni menciona titulaciones de nutrición.
- [El envío real del formulario no puede probarse sin escribir a Virginia] → Estados probados con red bloqueada y respuesta simulada; una prueba real consciente por parte de Virginia antes de difundir la landing.
- [Sin JavaScript, la confirmación del envío es una página de Formspree ajena al sitio] → Se acepta y se documenta; afecta a una minoría de visitas.
- [Límites o cambios del plan de Formspree] → El endpoint queda en una constante; el fallo de envío ofrece siempre el e-mail directo.
- [Bookwhen puede cambiar de URL o el club de nombre de cuenta] → URL en una sola constante; comprobación del enlace en la verificación final.
- [La colección `blog` vacía puede emitir un aviso en el build] → Se acepta si es solo un aviso; se anota en el informe de verificación.
- [La etiqueta de Google Ads se carga sin gestión de consentimiento] → Preexistente y fuera de alcance; se señala a Virginia porque afecta al cumplimiento en Francia.
- [La ficha de Google «Virginia Moves : Pilates Mobilité Douce» seguirá describiendo la actividad anterior] → Fuera del repositorio; se señala a Virginia.
- [Los textos en francés son borradores] → Virginia los valida antes de publicar; las tareas incluyen esa revisión.

## Migration Plan

1. Trabajo en la rama actual `rebrand`; `main` conserva el sitio anterior.
2. Orden de construcción: contexto y dirección (Impeccable) → tokens y layout → componentes → páginas → redirecciones y limpieza → metadatos y feed → verificación.
3. Antes de publicar: textos validados por Virginia.
4. Publicación en Vercel, que despliega desde el repositorio de GitHub; fusionar `rebrand` en `main` es decisión de Virginia.
5. Tras el despliegue, comprobar con `curl -I` que las tres rutas antiguas responden 308.
6. Tras publicar: abrir las cinco rutas y las tres URLs antiguas en producción y, si se usa Search Console, enviar el nuevo sitemap.

**Rollback**: volver a desplegar el commit anterior de `main`. No hay migración de datos; Formspree, Bookwhen e Instagram no cambian de configuración.

## Open Questions

Las decisiones pendientes que condicionan la publicación están en `proposal.md` («Decisiones pendientes»). Ninguna cambia las specs ni el desglose de tareas; cada una tiene un comportamiento por defecto definido (omitir el dato). Además:

- ¿Se conserva el símbolo de sol como marca, recoloreado, o la ronda de dirección propone otro tratamiento del nombre «Vivimoves»?
- ¿Se mantiene en el pie el crédito del desarrollador («Made by Daniprz»), traducido al francés?
- La imagen Open Graph por defecto será tipográfica (marca y lema sobre los colores del sitio), ya que el retrato no debe ser la cara de la empresa.
