# sistema-visual Specification

## Purpose

Establece la identidad visual de Bliss —mostaza, crema y casi negro— y los criterios de accesibilidad, adaptación a pantallas, movimiento y rendimiento que comparten todas las páginas y componentes.

## Requirements

### Requirement: Identidad mostaza, crema y oscuro
Todas las páginas SHALL usar una misma identidad basada en mostaza como color insignia (referencia `#EFB13C`), crema como base (referencia `#F7F1E6`) y casi negro como ancla de contraste (referencia `#171714`). El mostaza MUST seguir siendo reconocible aunque se afinen los tonos.

#### Scenario: Coherencia entre páginas
- **WHEN** se comparan las cinco páginas
- **THEN** comparten fondos, tipografía, estilo de acciones, cabecera y pie, y se perciben como un único sitio

#### Scenario: Paleta anterior retirada
- **WHEN** se buscan en el CSS y el HTML generados los colores de la identidad anterior (`#FFD6BA`, `#d89a6b`, `#331c10`, `#2337ff`)
- **THEN** no aparece ninguno

### Requirement: Colores definidos por función
Los colores SHALL aplicarse mediante tokens semánticos para fondo, superficies, texto, texto secundario, bordes, acción, estado hover, foco y estados de error y éxito. Las páginas MUST NOT fijar colores sueltos fuera de esos tokens.

#### Scenario: Cambio de un tono
- **WHEN** se modifica el valor del token de acción
- **THEN** todos los botones y acciones principales del sitio cambian de forma consistente sin editar las páginas

### Requirement: Contraste suficiente
El texto SHALL alcanzar un contraste mínimo de 4,5:1 con su fondo (3:1 para texto grande), y los bordes de campos, iconos informativos e indicadores de foco SHALL alcanzar 3:1. El mostaza MUST NOT usarse como color de texto sobre crema o blanco; el texto sobre mostaza SHALL ser casi negro.

#### Scenario: Botón principal
- **WHEN** se mide el contraste del texto de un botón mostaza
- **THEN** el texto es casi negro y la relación supera 4,5:1

#### Scenario: Texto secundario
- **WHEN** se mide el contraste del texto secundario sobre cada superficie donde se usa
- **THEN** la relación es de al menos 4,5:1

### Requirement: Variación de tono entre empresa y club
Las páginas de empresa y la página del club SHALL usar los mismos tokens, tipografías y componentes, variando la composición y la proporción de color para que el club transmita más energía colectiva sin parecer otro sitio.

#### Scenario: Paso de empresa a club
- **WHEN** una persona navega de `/entreprises/` a `/le-pr-club/`
- **THEN** reconoce la misma marca, cabecera y pie, y percibe un tono más enérgico en el club

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

### Requirement: Estructura semántica
Cada página SHALL tener un único `h1`, encabezados en orden jerárquico sin saltos, las regiones `header`, `nav`, `main` y `footer`, y un enlace de salto al contenido principal como primer elemento enfocable.

#### Scenario: Enlace de salto
- **WHEN** una persona pulsa Tab al cargar cualquier página
- **THEN** el primer elemento enfocado es un enlace visible «Aller au contenu» que lleva el foco al contenido principal

#### Scenario: Orden de encabezados
- **WHEN** se extrae el esquema de encabezados de cada página
- **THEN** hay un solo `h1` y ningún nivel se salta

### Requirement: Uso con teclado y foco visible
Todos los elementos interactivos SHALL ser alcanzables y activables con teclado en un orden coherente con el orden visual, y SHALL mostrar un indicador de foco claramente visible sobre cualquier fondo del sitio.

#### Scenario: Recorrido completo con teclado
- **WHEN** una persona recorre una página solo con Tab, Mayús+Tab, Enter y Espacio
- **THEN** alcanza y activa todos los enlaces, botones y campos, y en todo momento ve dónde está el foco

#### Scenario: Foco sobre fondo mostaza y sobre fondo oscuro
- **WHEN** un elemento recibe el foco sobre una superficie mostaza o casi negra
- **THEN** el indicador de foco mantiene un contraste de al menos 3:1 con esa superficie

### Requirement: Objetivos táctiles cómodos
Los enlaces de navegación, botones y controles de formulario SHALL tener un área activable de al menos 44 × 44 px CSS en pantallas táctiles.

#### Scenario: Navegación en móvil
- **WHEN** se miden el botón de menú, los enlaces del menú y los CTAs en un viewport de 375 px
- **THEN** cada uno ofrece un área activable de al menos 44 × 44 px

### Requirement: Adaptación a pantallas desde 320 px
Las páginas SHALL mostrarse sin desplazamiento horizontal, recortes ni solapamientos desde 320 px de ancho, y SHALL verificarse como mínimo en 375 px, 768 px y 1440 px.

#### Scenario: Ancho mínimo
- **WHEN** se abre cada página con 320 px de ancho
- **THEN** no hay desplazamiento horizontal y todo el contenido es legible

#### Scenario: Tamaños de referencia
- **WHEN** se revisa cada página en 375 px, 768 px y 1440 px
- **THEN** ningún texto, imagen o control queda recortado, solapado o fuera de la pantalla

### Requirement: Texto ampliable
El contenido SHALL seguir siendo legible y funcional con el texto ampliado al 200 %, sin pérdida de contenido ni de funcionalidad.

#### Scenario: Zoom al 200 %
- **WHEN** se amplía una página al 200 % en un escritorio de 1440 px
- **THEN** el contenido se recoloca sin desplazamiento horizontal y la navegación y el formulario siguen siendo utilizables

### Requirement: Movimiento opcional
Las transiciones y animaciones SHALL ser discretas, MUST NOT retrasar la lectura ni ocultar contenido esencial hasta que se ejecuten, y SHALL desactivarse o reducirse cuando la persona ha solicitado movimiento reducido.

#### Scenario: Movimiento reducido
- **WHEN** el sistema de la persona indica preferencia por movimiento reducido
- **THEN** no se reproduce ninguna animación de desplazamiento, escala o aparición

#### Scenario: Contenido sin JavaScript ni animación
- **WHEN** se carga una página con JavaScript desactivado
- **THEN** todo el contenido es visible desde el primer render

### Requirement: Imágenes optimizadas y estables
Las imágenes SHALL servirse en tamaños adaptados al dispositivo, con dimensiones reservadas para evitar saltos de maquetación, carga diferida bajo el primer bloque y carga priorizada para la imagen principal de cada página. Ningún archivo de imagen publicado SHALL superar 500 kB.

#### Scenario: Imagen principal
- **WHEN** se carga una página con imagen en el primer bloque
- **THEN** esa imagen se carga de forma prioritaria y el contenido no se desplaza al aparecer

#### Scenario: Originales pesados
- **WHEN** se listan los archivos de imagen del sitio generado
- **THEN** ninguno supera 500 kB y los originales de varios megabytes no se publican

### Requirement: Imágenes con significado
Cada imagen informativa SHALL tener un texto alternativo en francés que describa lo que muestra, y las decorativas SHALL quedar ocultas para tecnologías de apoyo. Una imagen MUST NOT presentarse, por su leyenda o su texto alternativo, como una sesión de Bliss que ha tenido lugar ni como un cliente real cuando no lo es.

#### Scenario: Foto recreativa junto a una oferta de empresa
- **WHEN** una fotografía del club o un retrato acompaña a una sección de la oferta para empresas
- **THEN** ni su texto alternativo ni su leyenda la describen como una intervención en empresa

#### Scenario: Imagen de ilustración de una práctica
- **WHEN** se lee el texto alternativo de la imagen de una práctica en `/entreprises/`
- **THEN** describe la escena en términos genéricos (por ejemplo, «Des collègues pratiquent une posture de yoga debout dans une salle lumineuse.») y no nombra a Bliss, a Virginia ni a ninguna empresa

#### Scenario: Texto alternativo fiel
- **WHEN** se compara cada texto alternativo con su imagen
- **THEN** describe lo que realmente se ve, incluido el número aproximado de personas y la actividad

### Requirement: Tipografía legible y de carga eficiente
El sitio SHALL usar como máximo dos familias tipográficas, alojadas en el propio sitio, con una jerarquía evidente entre titulares, texto y elementos de apoyo, y el texto SHALL ser visible mientras cargan las fuentes.

#### Scenario: Carga de fuentes
- **WHEN** se revisan las peticiones de red de cualquier página
- **THEN** las fuentes se sirven desde el propio dominio y no hay peticiones a servicios externos de fuentes

#### Scenario: Texto durante la carga
- **WHEN** las fuentes aún no han cargado
- **THEN** el texto se muestra con una fuente de reserva

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
