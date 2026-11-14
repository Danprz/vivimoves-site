# Spec Delta

## ADDED Requirements

### Requirement: Opciones del campo de actividad alineadas con la oferta
El campo opcional de actividad SHALL listar, agrupadas por formato y en francés, las cinco prácticas de «Cours réguliers», los tres talleres y la mini-retraite d’équipe, en el mismo orden que `/entreprises`, además de la opción «Pas encore défini». MUST NOT ofrecer «Éveil musculaire».

#### Scenario: Opciones visibles
- **WHEN** una persona despliega el campo de actividad en `/contact/`
- **THEN** ve tres grupos —«Cours réguliers», «Ateliers ponctuels» y «Mini-retraites»— con nueve opciones en total y ninguna llamada «Éveil musculaire»

#### Scenario: Grupos anunciados
- **WHEN** un lector de pantalla recorre las opciones del campo
- **THEN** anuncia el nombre del grupo al que pertenece cada opción

## MODIFIED Requirements

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
