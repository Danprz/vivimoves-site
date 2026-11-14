# contacto Specification

## Purpose

Permite que una persona de empresa envíe una consulta cualificada a Bliss mediante la integración existente de Formspree, con un formulario breve, accesible y con un resultado de envío comprensible.

## Requirements

### Requirement: Formulario orientado a empresas
La página `/contact` SHALL ofrecer un formulario con cuatro campos obligatorios —nombre, e-mail, empresa y mensaje— y como máximo dos campos opcionales: actividad de interés y ciudad de la empresa. Los campos opcionales MUST estar identificados como «facultatif».

#### Scenario: Campos del formulario
- **WHEN** una persona abre `/contact/`
- **THEN** ve los cuatro campos obligatorios y los dos opcionales, cada uno con su etiqueta visible en francés

#### Scenario: Envío sin campos opcionales
- **WHEN** una persona completa solo los cuatro campos obligatorios y envía
- **THEN** el formulario se envía sin errores

### Requirement: Etiquetas e instrucciones accesibles
Cada campo SHALL tener una etiqueta visible y persistente asociada programáticamente; el formulario MUST NOT depender del placeholder como etiqueta y SHALL permitir el autocompletado del navegador para nombre, e-mail y empresa.

#### Scenario: Lector de pantalla
- **WHEN** un lector de pantalla enfoca un campo
- **THEN** anuncia su etiqueta, si es obligatorio y, cuando existe, su mensaje de ayuda o de error

#### Scenario: Etiqueta persistente
- **WHEN** una persona escribe en un campo
- **THEN** su etiqueta sigue visible

### Requirement: Envío a la integración existente
El formulario SHALL enviar los datos por POST al endpoint de Formspree ya utilizado por el sitio, sin backend propio ni servicios añadidos, y SHALL identificar la consulta como procedente de la web de Bliss.

#### Scenario: Destino del envío
- **WHEN** se inspecciona el formulario generado
- **THEN** su `action` es el endpoint de Formspree existente y su `method` es POST

#### Scenario: Asunto con la marca vigente
- **WHEN** se inspecciona el asunto que el formulario envía a Formspree
- **THEN** nombra «Bliss» y no «Vivimoves»

### Requirement: Envío básico sin JavaScript
Con JavaScript desactivado, el formulario SHALL validar los campos obligatorios y el formato del e-mail con la validación nativa del navegador y SHALL enviarse mediante el POST estándar de HTML.

#### Scenario: Envío sin JavaScript
- **WHEN** una persona con JavaScript desactivado completa los campos obligatorios y envía
- **THEN** el navegador envía el formulario a Formspree y muestra la página de confirmación que Formspree sirve

#### Scenario: Campo obligatorio vacío sin JavaScript
- **WHEN** una persona con JavaScript desactivado envía con un campo obligatorio vacío
- **THEN** el navegador bloquea el envío y señala el campo

### Requirement: Validación con mensajes en francés
Con JavaScript disponible, el formulario SHALL señalar cada campo inválido con un mensaje en francés junto al campo, asociado a él, y SHALL llevar el foco al primer campo con error. Los datos ya introducidos MUST conservarse.

#### Scenario: E-mail mal formado
- **WHEN** una persona envía con un e-mail sin formato válido
- **THEN** el envío no se realiza, el campo de e-mail muestra un mensaje de error en francés, recibe el foco y el resto de campos conserva su contenido

### Requirement: Estado de envío en curso
Con JavaScript disponible, mientras se espera la respuesta del servicio el formulario SHALL indicar que el envío está en curso y MUST impedir un segundo envío.

#### Scenario: Doble activación
- **WHEN** una persona activa dos veces seguidas el botón de envío
- **THEN** solo se realiza una petición y el botón indica «Envoi en cours…» hasta recibir respuesta

### Requirement: Confirmación solo tras respuesta del servicio
El sitio MUST NOT mostrar un mensaje de éxito antes de recibir la confirmación de Formspree. Tras una respuesta correcta SHALL mostrar un mensaje de confirmación en francés, anunciado a las tecnologías de apoyo, sin prometer un plazo de respuesta.

#### Scenario: Envío aceptado
- **WHEN** Formspree responde que ha aceptado el envío
- **THEN** la página muestra una confirmación en francés en lugar del formulario y el foco se sitúa en ella

#### Scenario: Sin plazo prometido
- **WHEN** se lee el mensaje de confirmación y el texto de introducción del formulario
- **THEN** ninguno menciona un plazo de respuesta

### Requirement: Fallo de envío sin pérdida de datos
Si el servicio rechaza el envío o no responde, el formulario SHALL mostrar un mensaje de error en francés anunciado a las tecnologías de apoyo, SHALL conservar todos los datos introducidos y SHALL ofrecer reintentar y una vía de contacto directo.

#### Scenario: Sin conexión
- **WHEN** el envío falla por un error de red
- **THEN** aparece un mensaje de error, los campos conservan su contenido, el botón vuelve a estar disponible y se muestra el enlace de e-mail directo

#### Scenario: Rechazo del servicio
- **WHEN** Formspree responde con un error
- **THEN** no se muestra ningún mensaje de éxito y se aplica el mismo comportamiento que en el fallo de red

### Requirement: Interés transmitido desde los CTAs de actividad
Los CTAs de cada taller y de la mini-retraite de `/entreprises` SHALL llevar al formulario indicando la propuesta de origen. Con JavaScript disponible, el campo opcional de actividad SHALL aparecer preseleccionado; sin JavaScript, el formulario SHALL seguir siendo plenamente utilizable. El CTA de la sección «Cours réguliers» SHALL llevar al formulario sin preselección.

#### Scenario: Llegada desde el CTA de un taller
- **WHEN** una persona activa el CTA del taller «Mieux dormir, mieux récupérer» en `/entreprises/`
- **THEN** llega al formulario de `/contact/` con «Atelier « Mieux dormir, mieux récupérer »» seleccionado en el campo de actividad

#### Scenario: Llegada desde el CTA de la mini-retraite
- **WHEN** una persona activa el CTA de la sección de mini-retraites
- **THEN** llega al formulario con «Mini-retraite d’équipe» seleccionado

#### Scenario: Llegada desde los cursos regulares
- **WHEN** una persona activa el CTA de la sección «Cours réguliers»
- **THEN** llega al formulario con «Pas encore défini» seleccionado y puede elegir una práctica

#### Scenario: Valor desconocido
- **WHEN** la URL indica una actividad que no existe, por ejemplo `?activite=eveil-musculaire`
- **THEN** el campo de actividad queda sin seleccionar y no se muestra ningún error

### Requirement: Vías de contacto directo y orientación al club
La página SHALL mostrar las vías de contacto directo (e-mail, Instagram y perfil de LinkedIn de Virginia) y una indicación para quien quiere reservar una actividad del club, con enlace a Bookwhen.

#### Scenario: Contacto sin formulario
- **WHEN** una persona prefiere no usar el formulario
- **THEN** encuentra un enlace de e-mail y el enlace al Instagram de Virginia

### Requirement: Interlocutora identificada
La página SHALL presentar a Virginia como interlocutora, con su nombre, su condición de fundadora de Bliss y de coach sportive diplômée d'État, en un bloque secundario respecto al formulario.

#### Scenario: Bloque de interlocutora
- **WHEN** una persona abre `/contact/`
- **THEN** encuentra, junto a las vías de contacto directo y con menor énfasis que el formulario, quién responderá a su mensaje, presentada como fundadora de Bliss

### Requirement: Sin datos ni servicios añadidos
El formulario MUST NOT solicitar datos distintos de los definidos, MUST NOT incluir datos personales en la URL y la página MUST NOT cargar servicios de seguimiento, CRM, newsletter o embeds que no existieran antes de este cambio.

#### Scenario: Parámetros de la URL
- **WHEN** una persona llega al formulario desde un CTA de actividad
- **THEN** la URL contiene como máximo el identificador de la actividad y ningún dato personal

#### Scenario: Peticiones de terceros
- **WHEN** se carga `/contact/` y se revisan las peticiones de red
- **THEN** no hay peticiones a dominios de terceros que el sitio anterior no hiciera ya

### Requirement: Opciones del campo de actividad alineadas con la oferta
El campo opcional de actividad SHALL listar, agrupadas por formato y en francés, las cinco prácticas de «Cours réguliers», los tres talleres y la mini-retraite d’équipe, en el mismo orden que `/entreprises`, además de la opción «Pas encore défini». MUST NOT ofrecer «Éveil musculaire».

#### Scenario: Opciones visibles
- **WHEN** una persona despliega el campo de actividad en `/contact/`
- **THEN** ve tres grupos —«Cours réguliers», «Ateliers ponctuels» y «Mini-retraites»— con nueve opciones en total y ninguna llamada «Éveil musculaire»

#### Scenario: Grupos anunciados
- **WHEN** un lector de pantalla recorre las opciones del campo
- **THEN** anuncia el nombre del grupo al que pertenece cada opción
