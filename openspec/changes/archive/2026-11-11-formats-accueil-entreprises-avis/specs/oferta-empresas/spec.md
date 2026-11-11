# Spec Delta

## ADDED Requirements

### Requirement: Formatos enlazados desde la portada
La portada SHALL presentar los tres formatos en una banda propia, inmediatamente después del primer bloque, y cada formato SHALL ser un enlace que lleve a su sección de `/entreprises`: «Cours réguliers» a `#cours-reguliers`, «Ateliers ponctuels de bien-être et de prévention» a `#ateliers` y «Mini-retraites d’équipe» a `#mini-retraites`.

#### Scenario: Clic en un formato
- **WHEN** una persona activa «Ateliers ponctuels de bien-être et de prévention» en la portada
- **THEN** llega a `/entreprises/#ateliers` y la sección de talleres queda en pantalla sin que la cabecera la tape

#### Scenario: Navegación con teclado
- **WHEN** una persona recorre la banda de formatos con la tecla Tab
- **THEN** cada formato recibe el foco una sola vez, con un indicador visible sobre el fondo mostaza, y se activa con Intro

#### Scenario: Zona pulsable en móvil
- **WHEN** se muestra la banda en un viewport de 375 px
- **THEN** los tres formatos se apilan y cada uno ofrece una zona pulsable de al menos 44 px de alto

### Requirement: Apertura de la landing en un solo bloque con cifras de contexto
El primer bloque de `/entreprises` SHALL reunir en una única sección el titular, la presentación de por qué moverse durante la jornada, el CTA de contacto y tres cifras de contexto sobre sedentarismo, salud en el trabajo o actividad física. La página MUST NOT tener un segundo bloque separado dedicado a «Pourquoi bouger pendant la journée de travail ?».

#### Scenario: Un único bloque de apertura
- **WHEN** se abre `/entreprises/` en un escritorio de 1440 px
- **THEN** el titular, el texto de presentación, el CTA y las tres cifras pertenecen a la misma sección y comparten fondo, y la sección siguiente es «Cours réguliers»

#### Scenario: CTA visible al llegar
- **WHEN** se abre `/entreprises/` en un viewport de 375 × 812 px
- **THEN** el titular y el CTA de contacto se ven sin desplazarse, y las cifras aparecen al continuar la lectura dentro del mismo bloque

### Requirement: Cifras con fuente pública visible
Cada cifra de contexto SHALL ir acompañada, de forma visible y en francés, del nombre del organismo o estudio que la publica y de su año, y SHALL corresponder literalmente a lo que afirma esa fuente. Las cifras MUST NOT expresarse en euros ni referirse a resultados de Vivimoves.

#### Scenario: Lectura de una cifra
- **WHEN** una persona lee una cifra del bloque de apertura
- **THEN** ve junto a ella qué mide y qué organismo o estudio la publica, con su año

#### Scenario: Cifra no verificada
- **WHEN** una cifra no puede contrastarse con la publicación original de su fuente
- **THEN** no se publica y el bloque se entrega con las cifras restantes

#### Scenario: Cifra entendible sin el número grande
- **WHEN** un lector de pantalla recorre las cifras
- **THEN** anuncia cada número seguido de su explicación y de su fuente, en ese orden

### Requirement: Tres talleres puntuales definidos
La sección de talleres SHALL presentar exactamente tres talleres, en francés: uno de movimiento («Mon corps au bureau»), uno de alimentación («Mieux manger au travail») y uno de sueño («Mieux dormir, mieux récupérer»). Cada uno MUST incluir título, una frase de presentación destacada, una lista «Nos thématiques» de tres a cinco temas y un CTA de contacto.

#### Scenario: Contenido completo por taller
- **WHEN** una persona recorre la sección `#ateliers`
- **THEN** encuentra los tres talleres, cada uno con su título, su frase de presentación, su lista de temas y su CTA

#### Scenario: Talleres distinguibles
- **WHEN** se comparan las listas de temas de dos talleres
- **THEN** ningún tema se repite entre ellas

#### Scenario: Talleres apilados en móvil
- **WHEN** se muestra la sección en un viewport de 375 px
- **THEN** los talleres se apilan en una columna y cada lista de temas se lee sin desplazamiento horizontal

### Requirement: Talleres sin promesas ni titulaciones
Los talleres de alimentación y de sueño SHALL hablar de hábitos y referencias prácticas. MUST NOT atribuir a Vivimoves ni a Virginia titulaciones de nutrición, dietética o medicina del sueño, ni ofrecer consejo individual, diagnóstico o tratamiento.

#### Scenario: Taller de alimentación
- **WHEN** se lee el taller «Mieux manger au travail»
- **THEN** ningún texto menciona una titulación, un régimen, una pérdida de peso ni un consejo personalizado

#### Scenario: Taller de sueño
- **WHEN** se lee el taller «Mieux dormir, mieux récupérer»
- **THEN** ningún texto promete curar el insomnio ni resultados garantizados

### Requirement: Ficha práctica de los talleres
Cada taller SHALL mostrar una ficha práctica breve con su duración, su formato y su lugar. Cada línea de la ficha MUST haber sido validada por Virginia; una línea sin validar MUST omitirse en lugar de publicarse con un valor provisional.

#### Scenario: Ficha validada
- **WHEN** Virginia ha validado la duración, el formato y el lugar de un taller
- **THEN** la ficha muestra las tres líneas, cada una con una etiqueta de texto que no depende solo de un icono

#### Scenario: Dato sin validar
- **WHEN** la duración de un taller no ha sido validada
- **THEN** la ficha de ese taller no muestra ninguna duración y conserva las demás líneas

### Requirement: Ejemplo de mini-retraite
La sección de mini-retraites SHALL explicar que duran una jornada o media jornada y SHALL mostrar un ejemplo de desarrollo en pasos ordenados, presentado como ejemplo adaptable y sin horarios, lugar ni número de participantes.

#### Scenario: Lectura del ejemplo
- **WHEN** una persona lee la sección `#mini-retraites`
- **THEN** entiende qué momentos puede incluir una mini-retraite, que se trata de un ejemplo y que el programa se construye con su equipo

#### Scenario: Orden anunciado
- **WHEN** un lector de pantalla recorre el ejemplo
- **THEN** lo anuncia como una lista ordenada con su número de pasos

## MODIFIED Requirements

### Requirement: Cinco actividades diferenciadas
La landing `/entreprises` SHALL presentar, dentro de la sección «Cours réguliers», exactamente estas cinco prácticas, en francés y en este orden: «Yoga», «Pilates», «Running en équipe», «Gym posturale» y «Méditation et bains sonores». Cada una MUST incluir una fotografía, su nombre y una sola frase de presentación, y MUST NOT incluir descripciones largas ni listas. «Éveil musculaire» MUST NOT figurar en ninguna página ni metadato.

#### Scenario: Contenido breve por práctica
- **WHEN** una persona recorre la sección `#cours-reguliers` de `/entreprises/`
- **THEN** encuentra las cinco prácticas en el orden indicado, cada una con su fotografía, su nombre y una frase de 110 caracteres como máximo

#### Scenario: Descripciones no intercambiables
- **WHEN** se comparan las frases de dos prácticas cualesquiera
- **THEN** cada una expresa un enfoque propio (movimiento, respiración y pausa; control y estabilidad; correr juntos a ritmo suave; gestos y posturas de la jornada; pausa, atención y relajación) y ninguna se repite

#### Scenario: Actividades enlazables
- **WHEN** se abre `/entreprises/` con el ancla de una práctica (por ejemplo `#yoga` o `#running-equipe`)
- **THEN** el navegador sitúa esa práctica en pantalla sin que la cabecera la tape

#### Scenario: Práctica retirada
- **WHEN** se busca «éveil musculaire» en el HTML generado de todas las rutas
- **THEN** no aparece

### Requirement: Formatos de intervención separados de las disciplinas
La landing SHALL estructurarse en tres secciones sucesivas, una por formato y en este orden: «Cours réguliers» (`#cours-reguliers`), «Ateliers ponctuels de bien-être et de prévention» (`#ateliers`) y «Mini-retraites d’équipe» (`#mini-retraites`). Las prácticas MUST presentarse dentro de «Cours réguliers» y las mini-retraites MUST indicarse como de una jornada o media jornada.

#### Scenario: Formatos presentes
- **WHEN** una persona recorre `/entreprises/` de arriba abajo
- **THEN** encuentra, tras el bloque de apertura, las tres secciones de formato en el orden indicado, cada una con su título de segundo nivel

#### Scenario: Taller de alimentación sin titulaciones atribuidas
- **WHEN** se lee el taller «Mieux manger au travail»
- **THEN** ningún texto atribuye a Vivimoves ni a Virginia una titulación o especialidad en nutrición

#### Scenario: Anclas de formato
- **WHEN** se abre `/entreprises/#mini-retraites`
- **THEN** el navegador sitúa la sección de mini-retraites en pantalla sin que la cabecera la tape

### Requirement: Recorrido de preparación de un proyecto
La portada SHALL explicar en tres pasos sencillos, inmediatamente después de la banda de formatos, que Vivimoves recoge el contexto de la empresa y propone una intervención adaptada. Ninguna página MUST fijar condiciones no confirmadas: tamaño de grupo, material incluido, radio o gastos de desplazamiento, sesiones de prueba gratuitas ni condiciones de contratación; la duración solo MUST aparecer en la ficha práctica validada de los talleres y en la mención «une journée ou une demi-journée» de las mini-retraites.

#### Scenario: Recorrido comprensible
- **WHEN** una persona lee la sección «Comment se construit un projet» de la portada
- **THEN** entiende que el primer paso es un intercambio sobre su equipo y que la propuesta se adapta a su contexto

#### Scenario: Recorrido en un solo lugar
- **WHEN** se recorre `/entreprises/`
- **THEN** la sección «Comment se construit un projet» no aparece y la página invita a contactar desde cada sección de formato

#### Scenario: Dudas prácticas sin respuesta confirmada
- **WHEN** una duda práctica no tiene respuesta confirmada por Virginia
- **THEN** ninguna página publica una respuesta ni un texto provisional, e invita a plantearla por contacto

### Requirement: Lenguaje prudente de bienestar
Los textos de la oferta SHALL hablar de objetivos de bienestar y de práctica, y MUST NOT prometer curaciones, resultados médicos, reducción del absentismo ni mejoras de productividad atribuidas a Vivimoves, ni presentar las actividades como tratamientos. Las únicas cifras admitidas son las cifras de contexto con fuente pública visible del bloque de apertura de `/entreprises`.

#### Scenario: Revisión de promesas
- **WHEN** se revisan los textos de `/` y `/entreprises/`
- **THEN** no contienen términos terapéuticos ni garantías, y ninguna frase afirma que una intervención de Vivimoves producirá un resultado medible

#### Scenario: Cifra de un estudio
- **WHEN** una cifra de contexto procede de un estudio sobre productividad
- **THEN** la frase la atribuye al estudio y no la formula como un resultado que Vivimoves garantice

### Requirement: Sin prueba social inventada
La oferta MUST NOT mostrar testimonios, logotipos de clientes, métricas propias, premios ni colaboraciones que no hayan sido aportados y confirmados por Virginia. Las únicas opiniones admitidas son las reseñas reales de la ficha de Google, publicadas según la capacidad `resenas-clientes`.

#### Scenario: Ausencia de evidencia de clientes
- **WHEN** no existe ninguna referencia de empresa cliente confirmada
- **THEN** la landing no contiene logotipos, nombres de empresas clientes ni testimonios atribuidos a una empresa

#### Scenario: Reseñas de Google en la landing
- **WHEN** `/entreprises/` muestra opiniones
- **THEN** son citas literales de la ficha de Google, atribuidas a su autora o autor e introducidas como opiniones de participantes en las clases

### Requirement: La portada sintetiza y la landing desarrolla
La portada SHALL presentar los tres formatos con una frase cada uno y el recorrido de preparación de un proyecto, y MUST NOT listar las cinco prácticas ni duplicar el detalle de los talleres o de la mini-retraite que desarrolla `/entreprises`.

#### Scenario: Síntesis en portada
- **WHEN** una persona lee la portada
- **THEN** ve los tres formatos con una frase de 160 caracteres como máximo cada uno y no encuentra la sección «Cinq façons de remettre du mouvement dans la journée»

#### Scenario: Detalle solo en la landing
- **WHEN** se buscan en la portada las listas «Nos thématiques» o el ejemplo de mini-retraite
- **THEN** no aparecen
