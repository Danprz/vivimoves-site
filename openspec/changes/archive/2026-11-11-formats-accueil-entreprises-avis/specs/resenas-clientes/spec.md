# Spec Delta

## Purpose

Publica reseñas reales de la ficha de Google de Virginia como citas literales y atribuidas, para aportar confianza a quien visita el sitio sin inventar ni exagerar la prueba social.

## ADDED Requirements

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
Cada cita SHALL mostrar el nombre de pila y la inicial del apellido de su autora o autor tal como figura en Google, y la mención «Avis Google». Cada bloque de reseñas SHALL ofrecer un enlace a la ficha de Google que se identifique como enlace externo.

#### Scenario: Lectura de una cita
- **WHEN** una persona lee una cita en cualquier página
- **THEN** ve junto a ella quién la firma en formato «Prénom N.» y que procede de Google

#### Scenario: Acceso a todas las reseñas
- **WHEN** una persona activa el enlace del bloque de reseñas
- **THEN** se abre la ficha de Google en una pestaña nueva y el enlace anuncia a los lectores de pantalla que abre una ventana nueva

### Requirement: Presencia por página
La portada, `/entreprises`, `/le-pr-club` y `/a-propos` SHALL mostrar exactamente una cita cada una, y MUST NOT situarla en el primer bloque de la página. Una misma reseña MUST NOT repetirse en dos páginas, y `/contact` MUST NOT mostrar reseñas.

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
Las páginas MUST NOT mostrar una nota media ni un número de reseñas escritos a mano, MUST NOT cargar scripts, iframes ni widgets de Google para las reseñas y MUST NOT publicar datos estructurados de reseñas o valoraciones.

#### Scenario: Inspección del HTML generado
- **WHEN** se inspecciona el HTML generado de las cuatro páginas
- **THEN** no contiene peticiones a dominios de Google para mostrar reseñas, ni marcado `Review` o `AggregateRating`, ni una nota o un recuento de reseñas

### Requirement: Marcado semántico de las citas
Cada cita SHALL marcarse como una cita con su atribución asociada, legible con lector de pantalla y sin depender del color ni de las comillas decorativas para entenderse.

#### Scenario: Lector de pantalla
- **WHEN** un lector de pantalla recorre un bloque de reseñas
- **THEN** anuncia cada texto como cita y a continuación su autora o autor y la fuente

#### Scenario: Pantalla estrecha
- **WHEN** se muestra un bloque de reseñas en un viewport de 320 px de ancho
- **THEN** la cita ocupa el ancho disponible, sin desbordamiento horizontal ni texto recortado
