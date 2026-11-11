# resenas-clientes Specification

## Purpose

Publica reseñas reales de la ficha de Google de Virginia como citas literales y atribuidas, para aportar confianza a quien visita el sitio sin inventar ni exagerar la prueba social.

## Requirements

### Requirement: Reseñas reales y literales
Toda reseña publicada SHALL proceder de la ficha de Google «Virginia moves : cours de pilates - mobilité douce» y reproducir un fragmento continuo de su texto original, sin reescribirlo, resumirlo, corregirlo ni traducirlo. Un fragmento recortado MUST señalar el corte con «[…]».

#### Scenario: Cotejo con la ficha
- **WHEN** se compara cada cita publicada con la reseña correspondiente de la ficha de Google
- **THEN** el texto coincide palabra por palabra con un fragmento continuo de esa reseña

#### Scenario: Fragmento recortado
- **WHEN** una cita no reproduce la reseña completa
- **THEN** el punto donde se corta está marcado con «[…]» y la frase conservada no cambia de sentido respecto al original

### Requirement: Selección coherente con la oferta actual
Las citas SHALL estar en francés y referirse a las clases, a la pedagogía o a la atención de quien interviene. MUST NOT publicarse reseñas que describan el coaching individual o los programas personalizados retirados, ni reseñas sin texto.

#### Scenario: Reseña sobre un programa individual
- **WHEN** una reseña de la ficha describe un programa personalizado o un acompañamiento individual
- **THEN** no se publica en ninguna página

#### Scenario: Reseña en otro idioma
- **WHEN** una reseña de la ficha está escrita en un idioma distinto del francés
- **THEN** no se publica ni se traduce

### Requirement: Atribución y fuente visibles
Cada cita SHALL mostrar el nombre de pila y la inicial del apellido de su autora o autor tal como figura en Google, y la mención «Avis Google» acompañada del logotipo de Google, de modo que se reconozca como una reseña de Google sin leer el texto de alrededor. Cada bloque de reseñas SHALL ofrecer un enlace a la ficha de Google que se identifique como enlace externo.

#### Scenario: Lectura de una cita
- **WHEN** una persona lee una cita en cualquier página
- **THEN** ve junto a ella quién la firma en formato «Prénom N.», la inicial del autor en un círculo, el logotipo de Google y la mención «Avis Google»

#### Scenario: Reconocimiento sin color
- **WHEN** se muestra la reseña en escala de grises o con las imágenes desactivadas
- **THEN** la mención textual «Avis Google» sigue visible y basta para saber de dónde procede

#### Scenario: Acceso a todas las reseñas
- **WHEN** una persona activa el enlace del bloque de reseñas
- **THEN** se abre la ficha de Google en una pestaña nueva y el enlace anuncia a los lectores de pantalla que abre una ventana nueva

### Requirement: Presencia por página
La portada, `/entreprises`, `/le-pr-club` y `/a-propos` SHALL mostrar exactamente una cita cada una, en una sección propia de la página que MUST NOT ser la primera. Una misma reseña MUST NOT repetirse en dos páginas, y `/contact` MUST NOT mostrar reseñas.

#### Scenario: Recorrido de las cuatro páginas
- **WHEN** se recorren `/`, `/entreprises/`, `/le-pr-club/` y `/a-propos/`
- **THEN** cada una contiene una sola cita, ninguna aparece antes del segundo bloque y ninguna reseña se repite entre páginas

#### Scenario: Cita afín a la página
- **WHEN** se lee la cita de `/le-pr-club/`
- **THEN** habla de las sesiones colectivas o al aire libre del club

### Requirement: Sin presentarlas como clientes de empresa
Las reseñas MUST NOT presentarse, por su título, su ubicación o su leyenda, como testimonios de empresas clientes ni de intervenciones en empresa. En `/entreprises` SHALL introducirse como opiniones de participantes en las clases.

#### Scenario: Bloque de reseñas en la landing
- **WHEN** una persona lee el bloque de reseñas de `/entreprises/`
- **THEN** el texto que lo introduce habla de participantes en los cursos y no menciona empresas, clientes ni responsables de RR. HH.

### Requirement: Sin agregados ni servicios de terceros
Las páginas MUST NOT mostrar una nota media ni un número de reseñas escritos a mano, MUST NOT cargar scripts, iframes, imágenes ni widgets desde dominios de Google para las reseñas y MUST NOT publicar datos estructurados de reseñas o valoraciones. La única nota admitida es la de cada reseña citada.

#### Scenario: Inspección del HTML generado
- **WHEN** se inspecciona el HTML generado de las cuatro páginas
- **THEN** no contiene peticiones a dominios de Google para mostrar reseñas, ni marcado `Review` o `AggregateRating`, ni una nota media o un recuento de reseñas

#### Scenario: Logotipo servido por el propio sitio
- **WHEN** se observan las peticiones de red al cargar una página con reseña
- **THEN** el logotipo de Google se sirve desde el propio sitio o va incrustado en el HTML, sin petición a un dominio externo

### Requirement: Marcado semántico de las citas
Cada cita SHALL marcarse como una cita con su atribución asociada, legible con lector de pantalla y sin depender del color, de las estrellas ni de las comillas decorativas para entenderse.

#### Scenario: Lector de pantalla
- **WHEN** un lector de pantalla recorre un bloque de reseñas
- **THEN** anuncia cada texto como cita y a continuación su autora o autor y la fuente

#### Scenario: Nota anunciada como texto
- **WHEN** un lector de pantalla llega a las estrellas de una reseña
- **THEN** anuncia la nota una sola vez como texto en francés (por ejemplo, «Note : 5 sur 5») y no cada estrella por separado

#### Scenario: Pantalla estrecha
- **WHEN** se muestra un bloque de reseñas en un viewport de 320 px de ancho
- **THEN** la cita ocupa el ancho disponible, sin desbordamiento horizontal ni texto recortado

### Requirement: Sección propia de reseñas de Google
La reseña de cada página SHALL presentarse en una sección independiente, con su propio titular que nombre a Google, y MUST NOT quedar anidada dentro de otra sección (pasos del proyecto, cursos regulares, espíritu del club o presentación de Virginia).

#### Scenario: Sección independiente
- **WHEN** se inspecciona la estructura de `/`, `/entreprises/`, `/le-pr-club/` y `/a-propos/`
- **THEN** la reseña está en un elemento de sección propio, con un `h2` que contiene «Google», y ningún otro contenido de la oferta comparte esa sección

#### Scenario: Secciones que antes la alojaban
- **WHEN** se leen las secciones «Comment se construit un projet», «Cours réguliers», «L’esprit du club» y «Qui intervient ?»
- **THEN** ninguna contiene una cita de reseña

#### Scenario: Composición en móvil y escritorio
- **WHEN** se muestra la sección en 375 px y en 1440 px
- **THEN** el titular, la reseña y el enlace a Google se leen en ese orden en móvil y la reseña no supera una longitud de línea cómoda en escritorio

### Requirement: Nota fiel por reseña
Cada reseña SHALL mostrar con estrellas la nota que su autora o autor le dio en Google, cotejada con la ficha. Si la nota de una reseña no se ha cotejado, esa reseña MUST NOT mostrar estrellas. Las estrellas MUST distinguirse del fondo con un contraste de al menos 3:1.

#### Scenario: Cotejo de la nota
- **WHEN** se compara la nota mostrada en cada reseña con la de la ficha de Google
- **THEN** el número de estrellas llenas coincide con la nota original

#### Scenario: Nota no cotejada
- **WHEN** una reseña no tiene nota registrada
- **THEN** se muestra sin estrellas y sin texto de nota, y conserva autor, mención «Avis Google» y texto

#### Scenario: Estrellas visibles sobre crema
- **WHEN** se mide el contraste del contorno de las estrellas con el fondo de la reseña
- **THEN** la relación es de al menos 3:1
