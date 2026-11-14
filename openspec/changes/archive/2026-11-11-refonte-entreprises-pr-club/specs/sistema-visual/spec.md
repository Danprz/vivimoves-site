# Spec Delta

## Purpose

Establece la identidad visual de Vivimoves —mostaza, crema y casi negro— y los criterios de accesibilidad, adaptación a pantallas, movimiento y rendimiento que comparten todas las páginas y componentes.

## ADDED Requirements

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
- **WHEN** se observa la sección de las cinco actividades en escritorio
- **THEN** no está resuelta como cinco tarjetas idénticas y cada actividad se distingue por su contenido y composición

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
Cada imagen informativa SHALL tener un texto alternativo en francés que describa lo que muestra, y las decorativas SHALL quedar ocultas para tecnologías de apoyo. Una fotografía MUST NOT presentarse, por su ubicación o su leyenda, como un taller en empresa que no ha tenido lugar.

#### Scenario: Foto recreativa junto a una oferta de empresa
- **WHEN** una fotografía del club o un retrato acompaña a una sección de la oferta para empresas
- **THEN** ni su texto alternativo ni su leyenda la describen como una intervención en empresa

### Requirement: Tipografía legible y de carga eficiente
El sitio SHALL usar como máximo dos familias tipográficas, alojadas en el propio sitio, con una jerarquía evidente entre titulares, texto y elementos de apoyo, y el texto SHALL ser visible mientras cargan las fuentes.

#### Scenario: Carga de fuentes
- **WHEN** se revisan las peticiones de red de cualquier página
- **THEN** las fuentes se sirven desde el propio dominio y no hay peticiones a servicios externos de fuentes

#### Scenario: Texto durante la carga
- **WHEN** las fuentes aún no han cargado
- **THEN** el texto se muestra con una fuente de reserva
