# Spec Delta

## MODIFIED Requirements

### Requirement: Imágenes de ilustración identificadas
Las imágenes generadas SHALL usarse únicamente para ilustrar las cinco prácticas y los tres talleres de `/entreprises`, los tres formatos de la banda de la portada y como fondo del primer bloque de la portada, y cada sección que las contenga SHALL mostrar de forma visible la mención «Images d’illustration» o «Image d’illustration». MUST NOT representar a Virginia, a clientes reales ni a Le PR Club, ni usarse en `/le-pr-club`, en `/a-propos` o como retrato.

#### Scenario: Mención visible
- **WHEN** una persona recorre la sección `#cours-reguliers` de `/entreprises/`
- **THEN** lee la mención «Images d’illustration» junto a las fotografías, con contraste suficiente sobre el fondo

#### Scenario: Mención en la portada
- **WHEN** una persona mira el primer bloque de la portada en 375 px y en 1440 px
- **THEN** lee la mención «Image d’illustration» dentro del bloque, con un contraste de al menos 4,5:1 y sin solaparse con el titular ni con el botón

#### Scenario: Mención en la banda de formatos
- **WHEN** una persona recorre la banda «Trois formats pour s’adapter à votre rythme» de la portada
- **THEN** lee la mención «Images d’illustration» dentro de la banda, con un contraste de al menos 4,5:1 sobre el fondo mostaza

#### Scenario: Mención en los talleres
- **WHEN** una persona recorre la sección `#ateliers` de `/entreprises/`
- **THEN** lee la mención «Images d’illustration» dentro de la sección, con un contraste de al menos 4,5:1 sobre su fondo

#### Scenario: Páginas con fotografías reales
- **WHEN** se inspeccionan las imágenes de `/le-pr-club/` y `/a-propos/`
- **THEN** todas son fotografías reales y ninguna procede del conjunto de imágenes generadas

## ADDED Requirements

### Requirement: Jerarquía de tamaños en el primer bloque de la portada
En el primer bloque de la portada, la marca «Bliss» en mostaza SHALL ser el texto de mayor tamaño del bloque y el titular en crema SHALL mostrarse a un tamaño claramente menor que la marca, en todos los anchos desde 320 px. El titular MUST seguir siendo el único encabezado de nivel 1 de la página y la marca MUST NOT ser un encabezado.

#### Scenario: Marca mayor que el titular
- **WHEN** se abre `/` en 320, 375, 768 y 1440 px de ancho
- **THEN** la altura de las letras de «Bliss» es visiblemente mayor que la del titular «Le bien-être par le mouvement, au cœur de vos équipes» y ninguno de los dos provoca desplazamiento horizontal

#### Scenario: Titular compacto en escritorio
- **WHEN** se abre `/` en 1440 px de ancho
- **THEN** el titular ocupa como máximo tres líneas y el botón «Découvrir nos solutions» es visible sin desplazarse en una ventana de 800 px de alto

#### Scenario: Estructura de encabezados
- **WHEN** un lector de pantalla lista los encabezados de `/`
- **THEN** encuentra un único nivel 1 con el texto del titular, y «Bliss» no figura como encabezado

#### Scenario: Contraste conservado
- **WHEN** se mide el contraste de la marca y del titular sobre la zona más clara de la fotografía con el velo
- **THEN** ambos alcanzan al menos 3:1 y siguen cumpliendo el tamaño mínimo de texto grande

### Requirement: Columnas paralelas alineadas
Cuando la banda de formatos de la portada o los tres talleres de `/entreprises/` se muestran en fila, los elementos equivalentes de cada columna (fotografía, título, texto, lista, ficha práctica y enlace) SHALL empezar a la misma altura en las tres columnas, con independencia del número de líneas de cada título o texto. Las tres fotografías de una misma fila SHALL tener la misma anchura y la misma proporción.

#### Scenario: Título de dos líneas en la banda de formatos
- **WHEN** se muestra la banda de formatos en 1280 px y «Ateliers ponctuels de bien-être et de prévention» ocupa dos líneas
- **THEN** los tres textos descriptivos empiezan a la misma altura y los tres «En savoir plus» quedan en la misma línea

#### Scenario: Título de dos líneas en los talleres
- **WHEN** se muestra `#ateliers` en 1280 px y «Mieux dormir, mieux récupérer» ocupa dos líneas
- **THEN** las tres frases de presentación, los tres «Nos thématiques», las tres fichas prácticas y los tres enlaces de contacto empiezan cada uno a la misma altura que sus equivalentes

#### Scenario: Fotografías a la misma altura
- **WHEN** se observan las tres fotografías de cualquiera de las dos secciones en escritorio
- **THEN** comparten borde superior, borde inferior y anchura de columna, sin deformarse

#### Scenario: Columnas apiladas
- **WHEN** se muestran las dos secciones en 375 px
- **THEN** las columnas se apilan, cada fotografía ocupa el ancho del contenido y no queda espacio vacío reservado para la alineación

#### Scenario: Texto ampliado
- **WHEN** se amplía la página al 200 % en un escritorio de 1280 px
- **THEN** ningún texto queda recortado ni solapado con otro bloque
