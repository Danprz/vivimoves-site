# Spec Delta

## MODIFIED Requirements

### Requirement: Imágenes de ilustración identificadas
Las imágenes generadas SHALL usarse únicamente para ilustrar las cinco prácticas de `/entreprises` y como fondo del primer bloque de la portada, y cada sección que las contenga SHALL mostrar de forma visible la mención «Images d’illustration» o «Image d’illustration». MUST NOT representar a Virginia, a clientes reales ni a Le PR Club, ni usarse en `/le-pr-club`, en `/a-propos` o como retrato.

#### Scenario: Mención visible
- **WHEN** una persona recorre la sección `#cours-reguliers` de `/entreprises/`
- **THEN** lee la mención «Images d’illustration» junto a las fotografías, con contraste suficiente sobre el fondo

#### Scenario: Mención en la portada
- **WHEN** una persona mira el primer bloque de la portada en 375 px y en 1440 px
- **THEN** lee la mención «Image d’illustration» dentro del bloque, con un contraste de al menos 4,5:1 y sin solaparse con el titular ni con el botón

#### Scenario: Páginas con fotografías reales
- **WHEN** se inspeccionan las imágenes de `/le-pr-club/` y `/a-propos/`
- **THEN** todas son fotografías reales y ninguna procede del conjunto de imágenes generadas

### Requirement: Fotografías del club y retrato sustituidos
En `/le-pr-club`, el bloque «Rejoignez le mouvement» SHALL mostrar la fotografía de la sesión colectiva en una terraza de madera, y en `/a-propos` el bloque «Qui intervient ?» SHALL mostrar el retrato de Virginia a la entrada de un estudio. Ambos encuadres MUST conservar a las personas completas en cualquier ancho de pantalla.

#### Scenario: Foto del club
- **WHEN** se abre `/le-pr-club/` en 375 px y en 1440 px
- **THEN** el bloque «Rejoignez le mouvement» muestra la sesión en la terraza, sin cortar a ninguna persona por los bordes, con un `alt` en francés que describe la escena

#### Scenario: Retrato
- **WHEN** se abre `/a-propos/` en 375 px y en 1440 px
- **THEN** el bloque «Qui intervient ?» muestra el retrato nuevo sin deformarlo y sin desplazar el contenido al cargarse

## ADDED Requirements

### Requirement: Primer bloque de la portada con fotografía de fondo
El primer bloque de la portada SHALL mostrar la fotografía de la sesión en la terraza de una empresa como fondo que cubre el bloque entero, de borde a borde y en toda su altura, con un velo uniforme entre la fotografía y el texto. La fotografía MUST seguir siendo reconocible a través del velo.

#### Scenario: Cobertura completa
- **WHEN** se abre `/` en 320, 375, 768 y 1440 px de ancho
- **THEN** la fotografía ocupa todo el bloque sin franjas vacías, sin deformarse y sin desbordamiento horizontal

#### Scenario: Escena reconocible
- **WHEN** se observa el bloque en 375 px y en 1440 px
- **THEN** se distinguen personas en movimiento en una terraza y el encuadre no deja solo cielo o solo suelo detrás del texto

#### Scenario: Sin el panel anterior
- **WHEN** se observa el primer bloque de la portada
- **THEN** no aparece el panel mostaza con el sol ni la leyenda «Cergy · Val-d’Oise (95)»

### Requirement: Texto legible sobre la fotografía de la portada
El texto y los controles situados sobre la fotografía SHALL alcanzar un contraste de al menos 4,5:1 (3:1 para texto grande) frente a la zona más clara de la fotografía una vez aplicado el velo, y MUST seguir siendo legibles si la fotografía no se carga.

#### Scenario: Zona más clara de la imagen
- **WHEN** se mide el contraste del párrafo y de la mención de ilustración sobre la parte más clara de la fotografía con el velo
- **THEN** la relación es de al menos 4,5:1, y la de la marca y el titular es de al menos 3:1

#### Scenario: Imagen no cargada
- **WHEN** la fotografía no llega a cargarse
- **THEN** el bloque conserva un fondo oscuro y el texto, la marca y el botón se leen igual

#### Scenario: Foco sobre la fotografía
- **WHEN** el botón «Découvrir nos solutions» recibe el foco con teclado
- **THEN** el indicador de foco se distingue del fondo con un contraste de al menos 3:1

#### Scenario: Zoom al 200 %
- **WHEN** se amplía la portada al 200 % en un escritorio de 1280 px
- **THEN** el bloque crece con su contenido y ningún texto queda recortado o fuera de la fotografía

### Requirement: Fotografía de fondo sin coste de carga ni saltos
La fotografía de fondo de la portada SHALL servirse en tamaños adaptados al dispositivo, cargarse de forma prioritaria y no desplazar el contenido al aparecer. MUST quedar oculta para tecnologías de apoyo, al ser ilustrativa.

#### Scenario: Carga prioritaria y estable
- **WHEN** se carga `/` en una conexión lenta
- **THEN** el texto del bloque es visible antes que la fotografía y no cambia de posición cuando esta aparece

#### Scenario: Peso de los archivos
- **WHEN** se listan las variantes generadas de la fotografía de fondo
- **THEN** ninguna supera 500 kB

#### Scenario: Lector de pantalla
- **WHEN** un lector de pantalla recorre el primer bloque de la portada
- **THEN** anuncia la marca, el titular, la frase, el enlace y la mención de ilustración, y no anuncia la fotografía
