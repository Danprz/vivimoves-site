# Spec Delta

## ADDED Requirements

### Requirement: Primer bloque de la página de la empresa con fotografía de fondo
El primer bloque de `/a-propos` SHALL mostrar una fotografía de una sesión sobre tapis en un estudio luminoso como fondo a sangre, bajo el mismo velo oscuro uniforme que la portada, con el texto en crema. La fotografía SHALL ser decorativa para las tecnologías de apoyo y MUST NOT ser una imagen generada.

#### Scenario: Cobertura completa
- **WHEN** se abre `/a-propos/` en 320, 375, 768 y 1440 px de ancho
- **THEN** la fotografía cubre todo el primer bloque sin bandas vacías ni desbordamiento horizontal

#### Scenario: Texto legible
- **WHEN** se mide el contraste del `h1` y de los tres párrafos sobre la zona más clara de la fotografía con el velo aplicado
- **THEN** es de al menos 4,5:1

#### Scenario: Imagen no cargada
- **WHEN** la fotografía no llega a cargarse
- **THEN** el texto sigue leyéndose en crema sobre el fondo oscuro del bloque

### Requirement: Fotografías reales de los dos universos
La sección «Deux univers, une même philosophie» de `/a-propos` SHALL acompañar cada bloque con una fotografía real de una sesión: una clase colectiva en una sala para «Pour les particuliers» y un taller con un grupo sentado en una sala de empresa para «Pour les entreprises». Ambas SHALL mostrarse con la misma proporción 3:2 y el mismo tratamiento de borde, con un texto alternativo en francés que describa lo que se ve, y MUST NOT llevar la mención «Image d’illustration».

#### Scenario: Fotografías a la misma altura
- **WHEN** se abre `/a-propos/` en 1440 px
- **THEN** las dos fotografías tienen la misma anchura y la misma altura, y los títulos «Pour les particuliers» y «Pour les entreprises» quedan alineados

#### Scenario: Encuadre con personas completas
- **WHEN** se observan las dos fotografías en 375 px y en 1440 px
- **THEN** el recorte no corta la cabeza de la persona en primer plano y el grupo queda dentro del encuadre

#### Scenario: Texto alternativo fiel
- **WHEN** se lee el `alt` de cada fotografía
- **THEN** describe la actividad y el número aproximado de personas, sin nombrar ninguna empresa cliente ni a personas concretas

#### Scenario: Sin mención de ilustración
- **WHEN** se recorre la sección «Deux univers, une même philosophie»
- **THEN** no aparece el texto «Image d’illustration»

#### Scenario: Peso de los archivos
- **WHEN** se listan las variantes generadas de las dos fotografías
- **THEN** ninguna supera los 200 kB y los originales HEIC no figuran en el sitio generado

## MODIFIED Requirements

### Requirement: Imágenes de ilustración identificadas
Las imágenes generadas SHALL usarse únicamente para ilustrar las cinco prácticas y los tres talleres de `/entreprises`, los tres formatos de la banda de la portada y como fondo del primer bloque de la portada y del primer bloque de `/entreprises`, y cada sección que las contenga SHALL mostrar de forma visible la mención «Images d’illustration» o «Image d’illustration». MUST NOT representar a Virginia, a clientes reales ni a Le PR Club, ni usarse en `/le-pr-club`, en `/a-propos` o como retrato.

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

#### Scenario: Mención en el primer bloque de la landing de empresas
- **WHEN** una persona mira el primer bloque de `/entreprises/` en 375 px y en 1440 px
- **THEN** lee la mención «Image d’illustration» dentro del bloque, con un contraste de al menos 4,5:1 y sin solaparse con el texto ni con los botones
