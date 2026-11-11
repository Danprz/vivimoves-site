# Spec Delta

## ADDED Requirements

### Requirement: Imágenes de ilustración identificadas
Las imágenes generadas SHALL usarse únicamente para ilustrar las cinco prácticas de `/entreprises` y la sección que las contiene SHALL mostrar de forma visible la mención «Images d’illustration». MUST NOT representar a Virginia, a clientes reales ni a Le PR Club, ni usarse en `/le-pr-club`, en `/a-propos` o como retrato.

#### Scenario: Mención visible
- **WHEN** una persona recorre la sección `#cours-reguliers` de `/entreprises/`
- **THEN** lee la mención «Images d’illustration» junto a las fotografías, con contraste suficiente sobre el fondo

#### Scenario: Páginas con fotografías reales
- **WHEN** se inspeccionan las imágenes de `/le-pr-club/` y `/a-propos/`
- **THEN** todas son fotografías reales y ninguna procede del conjunto de imágenes generadas

### Requirement: Fotografías del club y retrato sustituidos
En `/le-pr-club`, el bloque «Envie de venir ?» SHALL mostrar la fotografía de la sesión colectiva en una terraza de madera, y en `/a-propos` el bloque «Qui intervient ?» SHALL mostrar el retrato de Virginia a la entrada de un estudio. Ambos encuadres MUST conservar a las personas completas en cualquier ancho de pantalla.

#### Scenario: Foto del club
- **WHEN** se abre `/le-pr-club/` en 375 px y en 1440 px
- **THEN** el bloque «Envie de venir ?» muestra la sesión en la terraza, sin cortar a ninguna persona por los bordes, con un `alt` en francés que describe la escena

#### Scenario: Retrato
- **WHEN** se abre `/a-propos/` en 375 px y en 1440 px
- **THEN** el bloque «Qui intervient ?» muestra el retrato nuevo sin deformarlo y sin desplazar el contenido al cargarse

## MODIFIED Requirements

### Requirement: Composición variada sin rejilla de tarjetas repetida
Las páginas MUST NOT basarse en una rejilla repetida de tarjetas con icono, sombra y botón idénticos, y MUST NOT usar emojis como iconografía, degradados decorativos indiscriminados ni efectos de vidrio. Cada página SHALL alternar densidad y composición entre secciones.

#### Scenario: Sección de actividades
- **WHEN** se observa la sección de las cinco prácticas en escritorio
- **THEN** está resuelta como un mosaico fotográfico con dos tamaños de imagen, sin sombras, iconos ni botones por elemento, y no como cinco tarjetas idénticas

#### Scenario: Sección de talleres
- **WHEN** se observa la sección de los tres talleres en escritorio
- **THEN** los talleres se separan por filetes y espacio, sin sombras ni contenedores idénticos con botón, y su composición difiere de la del mosaico de prácticas

#### Scenario: Emojis
- **WHEN** se buscan emojis en los textos visibles y en la navegación
- **THEN** no hay ninguno usado como icono

### Requirement: Imágenes con significado
Cada imagen informativa SHALL tener un texto alternativo en francés que describa lo que muestra, y las decorativas SHALL quedar ocultas para tecnologías de apoyo. Una imagen MUST NOT presentarse, por su leyenda o su texto alternativo, como una sesión de Vivimoves que ha tenido lugar ni como un cliente real cuando no lo es.

#### Scenario: Foto recreativa junto a una oferta de empresa
- **WHEN** una fotografía del club o un retrato acompaña a una sección de la oferta para empresas
- **THEN** ni su texto alternativo ni su leyenda la describen como una intervención en empresa

#### Scenario: Imagen de ilustración de una práctica
- **WHEN** se lee el texto alternativo de la imagen de una práctica en `/entreprises/`
- **THEN** describe la escena en términos genéricos (por ejemplo, «Des collègues pratiquent une posture de yoga debout dans une salle lumineuse.») y no nombra a Vivimoves, a Virginia ni a ninguna empresa

#### Scenario: Texto alternativo fiel
- **WHEN** se compara cada texto alternativo con su imagen
- **THEN** describe lo que realmente se ve, incluido el número aproximado de personas y la actividad
