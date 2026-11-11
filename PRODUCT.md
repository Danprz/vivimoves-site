# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Principal**: responsables de RR. HH., miembros de CSE y responsables de equipo de empresas de Cergy y del Val-d'Oise (95). Llegan por recomendación, prospección, LinkedIn o un enlace compartido directamente. Quieren entender rápido qué puede proponerse a sus asalariados y cómo iniciar una conversación.
- **Secundario**: personas interesadas en correr, practicar Pilates y participar en actividades colectivas con Le PR Club. Quieren llegar a la agenda externa, a las reservas y a la comunidad.

## Product Purpose

Sitio de presentación de Bliss. Éxito principal: recibir consultas cualificadas de empresas mediante el formulario de contacto. Éxito secundario: dirigir a las personas interesadas en actividades colectivas hacia Bookwhen y el Instagram de Le PR Club.

## Positioning

Una empresa local y de talla humana que lleva propuestas de bienestar y movimiento a los asalariados del Val-d'Oise: una sola interlocutora desde el primer intercambio hasta la sesión y propuestas construidas para cada equipo. Debe percibirse como una empresa, no como una persona que ofrece servicios.

## Operating Context

- Cinco prácticas en cours réguliers, en este orden: yoga, Pilates, running en équipe, gym posturale, méditation et bains sonores.
- Tres formatos, que estructuran la portada y `/entreprises`: cours réguliers; ateliers ponctuels de bien-être et de prévention («Mon corps au bureau», «Mieux manger au travail» y «Mieux dormir, mieux récupérer», de 1 h a 1 h 30, colectivos y en los locales de la empresa; Virginia anima los tres); mini-retraites d'équipe de una jornada o media jornada.
- Zona de intervención: principalmente Cergy y el Val-d'Oise (95).
- Le PR Club: club de Pilates y running; fechas, disponibilidad, condiciones y reservas viven en Bookwhen (`https://bookwhen.com/fr/leprclub`); actualidad en Instagram (`https://www.instagram.com/leprclub/`).
- Contacto por formulario (Formspree), e-mail, LinkedIn e Instagram.
- Navegación (cabecera y pie): «Bien-être au travail» (`/entreprises/`), «Communauté» (`/le-pr-club/`), «À propos» y «Contact». Las rutas no cambian con las etiquetas.
- La presentación de la empresa (local, de talla humana) vive solo en `/a-propos`; la portada y `/entreprises` no repiten un bloque de resumen.

## Capabilities and Constraints

- Sitio estático Astro 5 con Tailwind CSS 4, desplegado en Vercel en `https://vivimoves-site.vercel.app`.
- Interfaz pública y metadatos en francés (`lang="fr"`). Voz de empresa: «nous» o la marca, nunca «je».
- Sin precios públicos de ningún tipo. Sin tienda, pago, calendario interno ni integración con Bookwhen.
- Ya no se ofrece coaching individual.
- No decidido: año de creación de Le PR Club; condiciones comerciales (duración, tamaño de grupo, material, desplazamientos, plazos de respuesta). No se publican.

## Brand Commitments

- Marca: «Bliss» (antes «Vivimoves»; el dominio de producción aún conserva el nombre anterior). Club: «Le PR Club», al que la navegación y la portada dan acceso con la etiqueta «Communauté».
- Paleta vinculante de partida: mostaza `#EFB13C` como color insignia, crema `#F7F1E6` como base, casi negro `#171714` como ancla de contraste.
- Virginia, fundadora e interviniente, aparece en segundo plano: al final de la página «À propos», en «Contact» como interlocutora y como fundadora del club. Su retrato no se usa en la portada ni en la página de empresas; su nombre solo aparece ahí dentro de las citas de reseñas.
- Aude ya no forma parte de Le PR Club y no aparece en el sitio.
- Preferencia visual: el estándar del sector, sobrio y familiar, ejecutado con cuidado (elegido por Virginia frente a direcciones más singulares).

## Evidence on Hand

- Hechos confirmados sobre Virginia: fue ingeniera PMO en SAVENCIA (empleador anterior, no cliente); coach sportive certifiée, diplômée d'État; enseña Pilates sobre tapis y reformer; se formó como profesora de yoga en la India, en Rishikesh Yogpeeth (escuela, no socio).
- Fotografías reales con consentimiento: retrato de Virginia a la entrada de un estudio (`src/assets/virginia-studio.jpg`), sesión de Pilates al aire libre del club, sesión del club en una terraza de madera (bloque «Communauté» de la portada y `/le-pr-club`), camiseta de Le PR Club, sesión en reformer con la camiseta del club.
- Imágenes generadas de ilustración: una por cada práctica de cours réguliers y una por cada taller en `/entreprises`, y una por cada formato en la banda de la portada (escenas sin personas), con la mención visible «Images d’illustration», y la sesión en la terraza de una empresa como fondo del primer bloque de la portada, con la mención «Image d’illustration». Nunca representan a Virginia, a clientes ni al club.
- Reseñas: solo las de la ficha de Google de Virginia, citadas literalmente, una por página (portada, `/entreprises`, `/le-pr-club`, `/a-propos`), firmadas «Prénom N.» y presentadas como opiniones de participantes en los cursos, nunca de empresas clientes. Cada una ocupa una sección propia «Avis Google», con el logotipo de Google, la inicial del autor y las estrellas de su nota real (cotejada en la ficha); sin nota media, recuento ni widgets de terceros.
- No existen: fotografías de intervenciones en empresa, testimonios de empresas, logotipos de clientes ni métricas propias. No deben fabricarse. Llegarán más fotografías más adelante.

## Product Principles

1. La empresa por delante de la persona: el sitio vende una propuesta profesional y local.
2. Solo hechos confirmados: nada de promesas médicas, disponibilidad o prueba social inventadas. Las únicas cifras son las de contexto de `/entreprises`, con fuente pública visible y nunca como resultado de Bliss.
3. Una acción clara por momento: hablar del equipo (empresas) o ver las próximas sesiones (club).
4. Lo externo sigue siendo externo: Bookwhen es la fuente de verdad del club.
5. El contenido esencial funciona sin JavaScript.

## Accessibility & Inclusion

WCAG 2.x nivel AA en contraste, estructura semántica, teclado, foco visible y formularios; sin desbordamiento horizontal desde 320 px; respeto de `prefers-reduced-motion`.
