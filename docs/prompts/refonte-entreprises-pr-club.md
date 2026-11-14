# Prompt para OpenSpec Propose: empresas, cursos colectivos y PR Club

Pega el siguiente bloque completo en el agente que tenga acceso al proyecto y a sus skills.

```text
/opsx:propose refonte-entreprises-pr-club

Actúa como responsable de producto, diseñador frontend y desarrollador con experiencia en Astro. Prepara una propuesta OpenSpec completa para reposicionar y rediseñar Vivimoves alrededor de dos actividades: bienestar y movimiento en empresa, como actividad principal, y cursos colectivos/comunidad a través de Le PR Club, como actividad secundaria.

Esta petición autoriza la fase de propuesta: genera proposal.md, design.md, las specs y tasks.md siguiendo el esquema y las instrucciones de OpenSpec. No implementes todavía el frontend. La propuesta debe ser concreta, coherente y suficientemente detallada para que la fase apply pueda ejecutarse sin inventar decisiones comerciales o datos biográficos.

1. CONTEXTO, OBJETIVO Y PRIORIDADES

Virginia cambia el enfoque de su actividad. La web dejará de promocionar coaching individual, programas personalizados, acompañamientos 1:1, sesiones a domicilio o a distancia y sus tarifas. Pasará a presentar intervenciones para empresas y experiencias colectivas.

Público principal: responsables de RR. HH., CSE, responsables de equipos y personas que organizan iniciativas de bienestar en el trabajo. Llegarán por recomendación, prospección, LinkedIn o un enlace compartido por Virginia. Deben entender rápidamente quién es Virginia, qué puede proponer a su equipo y cómo iniciar una conversación.

Público secundario: personas interesadas en correr, practicar Pilates y participar en actividades colectivas con Le PR Club. Deben encontrar el club y llegar fácilmente a su agenda externa, reservas y comunidad.

Objetivos de conversión:
- Principal: recibir consultas cualificadas de empresas mediante el contacto existente.
- Secundario: dirigir a las personas interesadas en actividades colectivas a Bookwhen y al Instagram del PR Club.
- Transversal: transmitir confianza mediante la experiencia real y el recorrido de Virginia.

No publicar precios en el sitio: ni tarifas individuales antiguas ni tablas o importes para empresas. Para los colectivos, las condiciones, fechas y precios vigentes se consultarán en Bookwhen. No diseñar una tienda, un sistema de pago o una plataforma de formación online: aquí “cursos” significa sesiones y talleres de actividad física y bienestar.

2. INVESTIGACIÓN DEL PROYECTO Y FUENTES

Antes de redactar los artefactos, resuelve el contexto de OpenSpec y lee openspec/config.yaml. Examina package.json, astro.config.mjs, tsconfig.json y el frontend real. Inspecciona al menos:
- src/pages/index.astro
- src/pages/services.astro
- src/pages/tarifs-coaching.astro
- src/pages/pilates-plein-air.astro
- src/pages/contact.astro
- src/components/BaseHead.astro, Header.astro, HeaderLink.astro y Footer.astro
- src/styles/global.css, src/consts.ts, src/pages/rss.xml.js y src/content.config.ts
- Los recursos existentes en public/, incluidas las fotos de Virginia y del club.

Distingue en la propuesta lo observado en el repositorio, lo confirmado en este brief, las decisiones propuestas y los datos pendientes de confirmación. El nuevo enfoque y la nueva paleta sustituyen expresamente a las ofertas y la identidad cromática anteriores.

Referencias de contenido:
- Instagram de Le PR Club: https://www.instagram.com/leprclub/
- Agenda y reservas de Le PR Club: https://bookwhen.com/fr/leprclub
- Enlace público complementario del club: https://linktr.ee/leprclub
- Publicación de Virginia: https://www.linkedin.com/feed/update/urn:li:activity:7525592805247938560/

Utiliza el texto biográfico aportado más abajo aunque LinkedIn no permita acceder a la publicación. No inventes el contenido de una fuente inaccesible ni intentes acceder a cuentas privadas. Usa las fuentes como documentación, sin copiar páginas o publicaciones enteras. Si las fuentes discrepan sobre horarios, lugares o participantes, señala el conflicto y evita convertir información antigua en una promesa vigente.

3. NUEVA OFERTA PARA EMPRESAS

Presenta estas cinco actividades con francés natural y ortografía correcta:
1) Éveil musculaire en entreprise.
2) Ateliers de yoga en entreprise.
3) Ateliers de Pilates en entreprise.
4) Gym posturale en entreprise.
5) Méditation et bains sonores.

Para cada actividad, define el contenido que necesitará la página: título, descripción breve, experiencia propuesta, situaciones de uso y un CTA de contacto contextual. Explica las diferencias entre actividades, evitando cinco descripciones intercambiables.

Orientación editorial:
- Éveil musculaire: puesta en movimiento, movilidad y preparación corporal para comenzar o acompañar la jornada.
- Yoga: movimiento, respiración y una pausa consciente en el trabajo.
- Pilates: control del movimiento, estabilidad y conciencia corporal.
- Gym posturale: explorar gestos, posturas y movilidad en relación con el día de trabajo.
- Méditation et bains sonores: una experiencia de pausa, atención y relajación.

Habla de objetivos de bienestar y de práctica; no prometas curaciones, resultados médicos, reducción cuantificada del absentismo o mejoras garantizadas de productividad. No presentes estas actividades como tratamientos.

Separa las disciplinas de sus formatos. La publicación de Virginia confirma tres formatos que pueden organizar esta oferta:
- Cours réguliers: sesiones recurrentes de Pilates, yoga, renforcement musculaire y bains sonores.
- Ateliers ponctuels de bien-être et de prévention: por ejemplo, “Mon corps au bureau” o “Running en équipe”.
- Mini-retraites d'équipe: una jornada o media jornada.

No conviertas cada combinación en un nuevo producto ni multipliques páginas innecesariamente. El renforcement musculaire puede integrarse en los formatos pertinentes sin añadir otra oferta principal por defecto. El taller “Mieux manger au travail” se menciona en su publicación, pero debe quedar como contenido por confirmar antes de publicarlo, sin atribuir a Virginia titulaciones de nutrición.

El recorrido comercial debe explicar, de forma sencilla, que Virginia recoge el contexto de la empresa y propone una intervención adaptada. No fijes duraciones de clases, capacidades de grupo, equipamiento incluido, radio de desplazamiento, sesiones de prueba gratuitas o condiciones de contratación que no estén confirmadas. La media jornada/jornada de las mini-retraites sí está confirmada.

CTAs sugeridos, ajustables en la propuesta: “Parlons de votre équipe”, “Organiser un atelier” y “Construisons votre projet”. Prioriza una acción principal clara por sección.

4. COLECTIVOS Y LE PR CLUB

Haz de Le PR Club el punto de entrada a las actividades colectivas, con identidad reconocible dentro del sistema visual de Vivimoves.

El club debe transmitir comunidad, movimiento compartido, salidas de running, Pilates y encuentros/eventos. El contenido público del club lo relaciona con Pilates y running en el Val-d'Oise. No conviertas horarios, distancias concretas, gratuidad o ubicaciones de un evento en condiciones permanentes.

Define estos elementos:
- Presentación clara de qué es el club y para quién es.
- Una expresión visual de energía colectiva y cercanía, con imágenes auténticas disponibles.
- Un CTA principal “Voir les prochaines séances” hacia https://bookwhen.com/fr/leprclub.
- Un CTA secundario hacia https://www.instagram.com/leprclub/ para seguir su actualidad.
- Una separación comprensible entre pedir una intervención para una empresa y reservar una actividad del club.

Bookwhen seguirá siendo la fuente de verdad de fechas, disponibilidad, condiciones y reservas. No construyas un calendario interno, scraping, un checkout o una integración API sin una necesidad demostrada. Prioriza enlaces externos claros y rápidos frente a embeds que ralenticen la página.

Contempla que la agenda externa pueda no tener eventos publicados. La web debe seguir invitando a consultar la programación o seguir la actualidad del club, sin anunciar sesiones inexistentes ni sugerir disponibilidad garantizada. Si no se integra la agenda, no inventes un contador ni un estado en tiempo real: utiliza contenido estable que funcione con la agenda llena o vacía.

El código actual menciona a Aude y Virginia como fundadoras. Conserva esa atribución como dato existente a verificar; no presentes a Virginia como fundadora única ni inventes funciones o relaciones entre ambas. No reutilices “cet été 2026”, horarios o los 12 € actuales como información vigente del nuevo sitio.

5. VIRGINIA: RECORRIDO, PERSONALIDAD Y CONFIANZA

Conserva una presencia importante de Virginia. Su historia conecta su experiencia profesional en empresa con su nueva actividad. Resume y adapta los siguientes hechos confirmados por el texto que ella ha proporcionado:

- Trabajó como ingeniera PMO en SAVENCIA y dejó su CDI para reorientarse profesionalmente.
- La actividad física la ayudó durante una etapa personal difícil y quiso transmitir lo que había encontrado en ella.
- Se formó en deporte, gestos y posturas en el trabajo y bienestar.
- Comenzó a acompañar prácticas de Pilates, renforcement musculaire y carrera a pie; esto pertenece a su recorrido, aunque ahora no se venda coaching individual.
- Realizó una formación de profesora de yoga en la India, en Rishikesh Yogpeeth.
- Su visión del yoga incluye movimiento, filosofía y herramientas para conocerse y cuidarse.
- Su experiencia entre reuniones le permite comprender cómo se deja el cuerpo en segundo plano en el trabajo.
- Su misión es devolver al movimiento un lugar central en la vida personal y profesional y compartir herramientas para cuidarse de forma duradera.
- Actualmente propone cursos en empresa, mini-retraites d'équipe y talleres de bienestar y prevención.

Propón una narración en francés, cercana y profesional, sin copiar toda la publicación de LinkedIn ni convertirla en una lista de diplomas. Puede incluir una secuencia “De l'ingénierie au mouvement”, su enfoque actual y un retrato.

No deduzcas fechas absolutas de expresiones como “il y a un an” o “aujourd'hui”. No inventes años de experiencia, horas de formación, certificaciones, acreditaciones, número de clientes o resultados. Evita detalles íntimos que no sean necesarios para la presentación pública.

SAVENCIA es un empleador anterior, no una empresa cliente ni un aval comercial. Rishikesh Yogpeeth es la escuela de su formación, no un socio comercial. No utilices sus logotipos como prueba social de clientes. La biografía puede mencionar su experiencia pasada sin volver a ofrecer servicios individuales.

6. ARQUITECTURA Y RECORRIDOS PROPUESTOS

Usa esta arquitectura como punto de partida; justifica cualquier simplificación que mejore claramente los recorridos:

- / : portada que establece el nuevo posicionamiento, prioriza empresas y permite descubrir el club y a Virginia.
- /entreprises : landing B2B que Virginia pueda compartir directamente, comprensible por sí sola y orientada a solicitar contacto.
- /le-pr-club : actividades colectivas, comunidad y acceso a reservas externas.
- /a-propos : recorrido y enfoque de Virginia, con un resumen y enlace desde la portada.
- /contact : contacto adaptado al nuevo posicionamiento.

Evita duplicar todo el catálogo entre portada y landing de empresas. La primera sintetiza y orienta; la segunda desarrolla la oferta y facilita la consulta profesional.

Propón para la landing B2B una secuencia narrativa que incluya:
- Qué propone Virginia y para quién, con un titular en francés y un CTA de contacto visibles al llegar.
- Por qué integrar pausas y movimiento en la jornada, con lenguaje concreto y prudente.
- Las cinco actividades, con diferencias claras y una composición variada.
- Formatos de intervención y cómo se prepara un proyecto con la empresa.
- Una presentación breve de Virginia que conecte su experiencia de ingeniería con el trabajo actual.
- Respuestas a dudas prácticas solo cuando estén confirmadas; el resto se resuelve mediante contacto.
- Una invitación final a hablar del equipo y su contexto.

La navegación debe dar acceso directo a Entreprises, Le PR Club, À propos y Contact. El menú móvil debe ser real y accesible si la composición requiere uno, con estados abierto/cerrado y comportamiento de teclado definidos.

Incluye una tabla explícita de migración de URLs actuales:
- /services -> /entreprises.
- /tarifs-coaching -> /entreprises, retirando la antigua página de tarifas.
- /pilates-plein-air -> la sección pertinente de /le-pr-club o su página principal.
- /contact se conserva y se actualiza.

Comprueba los enlaces internos y las anclas. Define cómo evitar accesos al catálogo antiguo mediante URLs directas, navegación, metadatos, feeds o enlaces residuales.

Astro genera actualmente un sitio estático: distingue las redirecciones estáticas de una respuesta HTTP 301/308. No prometas códigos HTTP de redirección sin conocer y configurar el hosting. Documenta la solución realizable con el despliegue existente y cualquier configuración pendiente del proveedor.

7. DIRECCIÓN VISUAL: REDISEÑO COMPLETO CON IMPECCABLE

Utiliza explícitamente la skill local .claude/skills/impeccable/SKILL.md. Léela y sigue las partes aplicables a la planificación y al posterior rediseño. Esta fase propose no debe activar la implementación de la web.

Al preparar este brief, Impeccable detectó una implementación existente y ausencia de PRODUCT.md y DESIGN.md. Recomprueba su estado. Incluye en el plan cómo capturar el contexto de producto con init y resolver la dirección con shape/new-work antes de construir; utiliza este brief para evitar preguntas ya respondidas. No declares completados documentos, elecciones visuales o revisiones que no se hayan realizado. Si el flujo requiere una elección del usuario, identifica la decisión concreta y permite revisar la propuesta sin fingir que esa elección ya está validada.

Trata la web como una superficie de persuasión: debe transmitir qué hace Virginia, por qué confiar en ella y cuál es la siguiente acción. Se solicita un nuevo sistema visual, no un cambio de colores sobre las tarjetas actuales.

Paleta de partida autorizada:
- Mostaza como color insignia: #EFB13C.
- Crema como base: #F7F1E6.
- Negro o casi negro como ancla de contraste; por ejemplo, #171714.

Puedes afinar los tonos y añadir neutros derivados, justificando el resultado y manteniendo reconocible el mostaza. Define tokens semánticos para fondos, superficies, texto, bordes, acciones, hover, focus y estados. No uses el mostaza como texto pequeño sobre crema sin comprobar el contraste; considera texto oscuro sobre botones mostaza.

Ambición visual:
- Profesional, cálida, contemporánea y con energía. La empresa debe percibir una interlocutora fiable y las personas del club deben sentir comunidad.
- Tipografía con carácter y gran legibilidad, jerarquía evidente y ritmo editorial; justifica familias y pesos, priorizando carga eficiente y fuentes locales cuando sea viable.
- Espaciado generoso, composiciones deliberadas, alternancia de densidad y buen equilibrio entre fotografía y texto.
- Imágenes reales de Virginia y del club siempre que sean pertinentes y utilizables. Revisa el contenido de cada archivo antes de asignarlo a una oferta.
- Evita que una foto recreativa se interprete como un taller empresarial realizado. No generes imágenes que suplanten a Virginia, su certificación o clientes reales.
- Una dirección visual coherente para empresas y colectivos, con variación en composición y tono sin parecer dos webs diferentes.
- Interacciones discretas y útiles; movimiento opcional y respeto por prefers-reduced-motion.

No bases todo el sitio en una cuadrícula repetida de tarjetas con iconos, sombras intensas y botones iguales. Evita los emojis como sistema principal de iconografía, los degradados decorativos indiscriminados, el glassmorphism y las animaciones que retrasen la lectura. Elige recursos visuales por su relación con la marca, el contenido y la acción esperada.

No inventes testimonios, logotipos de clientes, métricas, premios, reseñas, colaboraciones o disponibilidad para rellenar el diseño. Si falta evidencia, diseña una sección honesta con su método, formación y recorrido.

La propuesta debe describir la composición inicial, jerarquía, narrativa, uso de fotografías, comportamiento responsive y componentes compartidos, con suficiente precisión para juzgar el diseño previsto. Diferencia una recomendación visual de una dirección ya confirmada.

8. CONTACTO Y CONVERSIÓN

Reutiliza el endpoint de Formspree y el contacto existente. No introduzcas backend, cuentas de usuario, CRM o newsletter por defecto.

Define un formulario breve orientado a empresas con nombre, email, empresa y mensaje. Otros campos como actividad de interés, ubicación, tamaño aproximado del grupo o periodo deseado deben ser opcionales y limitarse a los que ayuden a cualificar la consulta sin hacerla pesada.

Los CTAs de cada actividad pueden transmitir el interés al formulario, con una solución proporcionada al sitio estático y que funcione sin JavaScript para el envío básico. Una persona que quiera reservar un colectivo debe encontrar Bookwhen de forma clara.

Especifica etiquetas visibles, campos obligatorios, validación, errores y resultado de envío. Si se mantiene el envío HTML estándar de Formspree, documenta el comportamiento externo real. Si se propone mejora con JavaScript, define envío en curso, éxito y fallo sin perder los datos, manteniendo el formulario HTML como base. No muestres un éxito antes de recibir confirmación del servicio.

No prometas plazos de respuesta no confirmados. No envíes mensajes reales de prueba a Virginia ni reservas al club para validar el sitio. No añadas nuevos servicios de tracking o embeds como parte incidental del rediseño.

9. RESTRICCIONES TÉCNICAS Y CONTENIDO

Respeta openspec/config.yaml y el stack actual: Astro 5, ESM, TypeScript estricto, Tailwind CSS 4 con @tailwindcss/vite, npm y package-lock.json. Usa componentes .astro y generación estática; JavaScript cliente solo para interacciones que lo necesiten.

Reutiliza la responsabilidad de BaseHead, Header y Footer, rediseñando su presentación y extrayendo layouts/componentes cuando reduzca duplicación. No es necesario conservar su apariencia anterior. No introduzcas React, Vue, Svelte, un CMS, SSR o librerías de animación por comodidad. Cualquier dependencia adicional debe responder a una necesidad concreta y estar justificada.

Toda la interfaz pública y sus metadatos estarán en francés natural, con lang="fr". Los artefactos de OpenSpec estarán en español, preservando la sintaxis y los encabezados obligatorios del esquema. Mantén Vivimoves como marca salvo instrucción posterior y usa Le PR Club de forma consistente. Corrige las inconsistencias existentes de nombre, idioma y texto de plantilla.

SEO y contenido:
- Titles y descriptions específicos por página; URLs canónicas, Open Graph y sitemap coherentes con las rutas finales.
- No inventes un dominio: astro.config.mjs contiene actualmente https://example.com; el dominio de producción debe confirmarse antes de publicarlo como real.
- Audita RSS, enlaces /blog, contenido de ejemplo y metadatos para evitar difundir artículos de plantilla o rutas inexistentes. Conserva las integraciones de MDX, RSS y sitemap; especifica cómo tratar el feed y su enlace público de forma coherente si no hay contenido editorial real. No añadas un blog como nuevo alcance.
- Los datos estructurados, si se proponen, deben usar solo hechos confirmados; sin valoraciones, precios o direcciones inventados.
- Elimina la oferta individual también de descripciones, textos alternativos pertinentes, navegación, FAQs, imágenes promocionales y recursos enlazados. Las referencias biográficas a experiencias pasadas pueden conservarse como historia.

10. ACCESIBILIDAD, RESPONSIVE Y RENDIMIENTO

Define criterios verificables de nivel WCAG AA para los componentes afectados: contraste, HTML semántico, landmarks, orden de encabezados, nombres accesibles, etiquetas, navegación por teclado y foco visible.

Incluye menú móvil si existe, formulario, enlaces externos y posibles desplegables. Asegura objetivos táctiles cómodos, texto ampliable y ausencia de desbordamiento horizontal desde 320 px. Comprueba al menos móvil de 375 px, tablet de 768 px y escritorio de 1440 px, además de puntos intermedios cuando el layout lo necesite.

Planifica imágenes optimizadas, dimensiones reservadas para evitar saltos, lazy loading bajo el primer bloque y carga priorizada de la imagen principal cuando corresponda. No ocultes el contenido esencial hasta que se ejecute una animación. Mantén el núcleo de navegación y contacto operativo sin JavaScript.

11. CRITERIOS DE ACEPTACIÓN QUE DEBEN REFLEJAR LAS SPECS

- Al llegar a la portada o /entreprises, se entiende la oferta empresarial y se encuentra un CTA de contacto sin recorrer todo el sitio.
- Las cinco actividades están presentes en francés, diferenciadas y sin precios públicos.
- Los formatos recurrentes, talleres y mini-retraites se explican sin inventar condiciones comerciales.
- No queda ninguna oferta individual activa ni tarifa antigua accesible en las rutas publicadas o sus metadatos.
- Los enlaces antiguos tienen un destino coherente y la propuesta distingue el mecanismo de redirección estática del soporte HTTP del hosting.
- Le PR Club tiene presencia visible, acceso a Bookwhen y a Instagram, y no anuncia eventos o cupos inventados.
- El recorrido de Virginia refleja los hechos aportados; su experiencia en SAVENCIA no se presenta como cliente empresarial.
- El formulario lleva consultas a la integración existente y tiene un comportamiento comprensible de validación y resultado.
- Todos los textos públicos están en francés y las páginas declaran lang="fr".
- La nueva identidad mostaza, crema y oscuro es consistente, accesible y supone una mejora visual sustancial en todas las páginas.
- Navegación y formulario funcionan con teclado; los layouts se verifican en los tamaños definidos sin recortes ni solapamientos.
- El sitemap, los metadatos y el tratamiento del feed no reintroducen contenido obsoleto o de plantilla.
- npm run build finaliza correctamente para la implementación. Si se requiere comprobación de tipos, explicita el comando y las herramientas necesarias: astro build no hace typecheck y package.json no define actualmente scripts de test, lint o typecheck.

12. ENTREGABLES Y ORGANIZACIÓN DEL CAMBIO

Genera los artefactos requeridos por el esquema spec-driven:
- proposal.md: problema, nuevo posicionamiento, alcance, exclusiones, impacto, capacidades y decisiones pendientes.
- design.md: arquitectura, recorridos, inventario y migración de rutas, dirección visual propuesta con Impeccable, contenido, componentes, formulario, integraciones, accesibilidad, SEO y riesgos concretos.
- specs/<capability>/spec.md: requisitos y escenarios observables para las capacidades necesarias; por ejemplo, oferta empresarial, actividades colectivas, presentación de Virginia, contacto y navegación/migración. Reutiliza capacidades existentes si las hay y evita fragmentación innecesaria.
- tasks.md: tareas agrupadas y accionables para contexto/dirección de diseño, sistema visual, contenido, páginas, migración, integraciones y verificación. Cada bloque debe tener un resultado comprobable.

Incluye entre las verificaciones posteriores: compilación, búsqueda de ofertas/precios antiguos, revisión de enlaces y anclas, comprobación de rutas finales, inspección visual real en los tamaños previstos y evaluación con las partes pertinentes de Impeccable —audit, critique y polish— durante apply. No declares estas revisiones como realizadas en propose. Planifica verificaciones proporcionadas a los cambios y no añadas una infraestructura de tests que solo replique el contenido estático.

Lista como pendientes únicamente las decisiones que afecten de verdad a la publicación: dominio final, área de intervención, recursos fotográficos utilizables, datos profesionales adicionales y cualquier condición no confirmada. Puedes redactar la propuesta con esas limitaciones explícitas. Para decisiones comerciales relevantes no resueltas, pregunta de forma concreta; no bloquees la planificación por preferencias menores ni inventes las respuestas.

Valida los artefactos con los comandos adecuados de la versión instalada de OpenSpec. Al terminar, muestra los archivos creados, las decisiones relevantes y las preguntas que sigan abiertas. Detente al finalizar la propuesta; la implementación comenzará con una petición posterior de apply.
```
