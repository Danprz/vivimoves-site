# Spec Delta

## Purpose

Presenta la oferta de bienestar y movimiento en empresa de Vivimoves para que responsables de RR. HH., CSE y equipos entiendan qué propone la empresa y puedan iniciar una conversación comercial.

## ADDED Requirements

### Requirement: Posicionamiento empresarial visible al llegar
La portada `/` y la landing `/entreprises` SHALL mostrar, sin necesidad de desplazarse en un móvil de 375 px ni en un escritorio de 1440 px, un titular en francés que exprese la oferta para empresas y un CTA de contacto.

#### Scenario: Llegada a la portada
- **WHEN** una persona abre `/` en un viewport de 375 × 812 px
- **THEN** ve un único `h1` en francés sobre el movimiento y el bienestar en el trabajo y un CTA que lleva a `/contact/`

#### Scenario: Llegada directa a la landing compartida
- **WHEN** una persona abre `/entreprises/` desde un enlace externo, sin pasar por la portada
- **THEN** la página explica por sí sola qué propone Vivimoves y para quién, y muestra un CTA de contacto en el primer bloque

### Requirement: Cinco actividades diferenciadas
La landing `/entreprises` SHALL presentar exactamente estas cinco actividades, en francés: «Éveil musculaire en entreprise», «Ateliers de yoga en entreprise», «Ateliers de Pilates en entreprise», «Gym posturale en entreprise» y «Méditation et bains sonores». Cada una MUST incluir título, descripción breve, experiencia propuesta, situaciones de uso y un CTA de contacto contextual.

#### Scenario: Contenido completo por actividad
- **WHEN** una persona recorre la sección de actividades de `/entreprises/`
- **THEN** encuentra las cinco actividades, cada una con sus cinco elementos de contenido

#### Scenario: Descripciones no intercambiables
- **WHEN** se comparan las descripciones de dos actividades cualesquiera
- **THEN** cada una expresa un enfoque propio (puesta en movimiento; movimiento, respiración y pausa consciente; control y estabilidad; gestos y posturas de la jornada; pausa, atención y relajación) y ningún párrafo se repite entre actividades

#### Scenario: Actividades enlazables
- **WHEN** se abre `/entreprises/` con el ancla de una actividad (por ejemplo `#yoga`)
- **THEN** el navegador sitúa esa actividad en pantalla sin que la cabecera la tape

### Requirement: Formatos de intervención separados de las disciplinas
La landing SHALL explicar tres formatos como forma de organizar la oferta, sin convertir cada combinación en un producto: «Cours réguliers», «Ateliers ponctuels de bien-être et de prévention» y «Mini-retraites d'équipe». Las mini-retraites MUST indicarse como de una jornada o media jornada.

#### Scenario: Formatos presentes
- **WHEN** una persona consulta la sección de formatos
- **THEN** ve los tres formatos, los ejemplos de taller «Mon corps au bureau», «Running en équipe» y «Mieux manger au travail», y la duración «une journée ou une demi-journée» únicamente para las mini-retraites

#### Scenario: Taller de alimentación sin titulaciones atribuidas
- **WHEN** se lee la mención del taller «Mieux manger au travail»
- **THEN** aparece solo como ejemplo de taller y ningún texto atribuye a Vivimoves ni a Virginia una titulación o especialidad en nutrición

### Requirement: Recorrido de preparación de un proyecto
La landing SHALL explicar en pasos sencillos que Vivimoves recoge el contexto de la empresa y propone una intervención adaptada, y MUST NOT fijar condiciones no confirmadas: duración de sesiones, tamaño de grupo, material incluido, radio o gastos de desplazamiento, sesiones de prueba gratuitas ni condiciones de contratación.

#### Scenario: Recorrido comprensible
- **WHEN** una persona lee la sección de preparación del proyecto
- **THEN** entiende que el primer paso es un intercambio sobre su equipo y que la propuesta se adapta a su contexto

#### Scenario: Dudas prácticas sin respuesta confirmada
- **WHEN** una duda práctica no tiene respuesta confirmada por Virginia
- **THEN** la página no publica una respuesta ni un texto provisional, e invita a plantearla por contacto

### Requirement: Zona de intervención
La landing `/entreprises` y la página `/contact` SHALL indicar en francés que Vivimoves interviene principalmente en Cergy y en el Val-d'Oise (95), sin fijar un radio, una lista cerrada de municipios ni gastos de desplazamiento, e invitando a consultar para otros lugares.

#### Scenario: Empresa del Val-d'Oise
- **WHEN** una persona de una empresa de Cergy lee `/entreprises/`
- **THEN** encuentra la mención de Cergy y del Val-d'Oise (95) como zona principal de intervención

#### Scenario: Empresa de otra zona
- **WHEN** una persona de una empresa situada fuera del Val-d'Oise lee la mención de zona
- **THEN** entiende que puede plantear su caso por contacto y no encuentra ninguna exclusión ni tarifa de desplazamiento

### Requirement: Sin precios públicos
Ninguna página publicada ni sus metadatos SHALL mostrar importes, tarifas, tablas de precios o menciones «à partir de», ni para empresas ni para la antigua oferta individual.

#### Scenario: Búsqueda de importes en el sitio generado
- **WHEN** se busca el símbolo «€» y las palabras «tarif» y «prix» en el HTML generado de todas las rutas
- **THEN** no aparece ningún importe ni ninguna oferta con precio

### Requirement: Lenguaje prudente de bienestar
Los textos de la oferta SHALL hablar de objetivos de bienestar y de práctica, y MUST NOT prometer curaciones, resultados médicos, reducción cuantificada del absentismo ni mejoras garantizadas de productividad, ni presentar las actividades como tratamientos.

#### Scenario: Revisión de promesas
- **WHEN** se revisan los textos de `/` y `/entreprises/`
- **THEN** no contienen cifras de resultados, términos terapéuticos ni garantías

### Requirement: Sin prueba social inventada
La oferta MUST NOT mostrar testimonios, logotipos de clientes, métricas, premios, reseñas ni colaboraciones que no hayan sido aportados y confirmados por Virginia.

#### Scenario: Ausencia de evidencia de clientes
- **WHEN** no existe ninguna referencia de cliente confirmada
- **THEN** la landing genera confianza con el método, el arraigo local y las cualificaciones de quien interviene, y no contiene bloques de testimonios ni de logotipos

### Requirement: La portada sintetiza y la landing desarrolla
La portada SHALL presentar las cinco actividades y los formatos de forma resumida, con un enlace a `/entreprises`, y MUST NOT duplicar las descripciones completas de la landing.

#### Scenario: Síntesis en portada
- **WHEN** una persona lee el bloque de empresas de la portada
- **THEN** ve los nombres de las cinco actividades con una línea cada una como máximo y un enlace para conocer el detalle en `/entreprises/`

### Requirement: Una acción principal por sección
Cada sección de la portada y de la landing SHALL tener como máximo un CTA principal; cualquier otra acción de la misma sección MUST tener menor énfasis visual.

#### Scenario: Jerarquía de acciones
- **WHEN** una sección ofrece dos acciones
- **THEN** solo una usa el estilo de acción principal y la otra se presenta como enlace o acción secundaria
