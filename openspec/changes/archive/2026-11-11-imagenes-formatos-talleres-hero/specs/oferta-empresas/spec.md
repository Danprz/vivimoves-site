# Spec Delta

## ADDED Requirements

### Requirement: Fotografía por formato en la portada
Cada uno de los tres formatos de la banda de la portada SHALL mostrar encima de su título una fotografía de ilustración propia: una sala con esterillas para «Cours réguliers», una sala de reuniones para «Ateliers ponctuels de bien-être et de prévention» y un patio de granja con esterillas para «Mini-retraites d’équipe». La fotografía MUST formar parte de la zona pulsable del formato sin añadir una segunda parada de tabulación.

#### Scenario: Una fotografía por formato
- **WHEN** una persona observa la banda de formatos en la portada
- **THEN** ve tres fotografías distintas, cada una encima del título de su formato y en el orden «Cours réguliers», «Ateliers ponctuels», «Mini-retraites d’équipe»

#### Scenario: Clic en la fotografía
- **WHEN** una persona pulsa la fotografía de «Mini-retraites d’équipe»
- **THEN** llega a `/entreprises/#mini-retraites`

#### Scenario: Una sola parada de tabulación
- **WHEN** una persona recorre la banda con la tecla Tab
- **THEN** cada formato recibe el foco una sola vez y el indicador de foco rodea la columna entera, fotografía incluida

#### Scenario: Texto alternativo
- **WHEN** un lector de pantalla recorre la banda
- **THEN** cada fotografía se anuncia con una descripción en francés de la escena, sin personas ni marcas, y sin presentarla como una sesión realizada

### Requirement: Fotografía por taller
Cada uno de los tres talleres de `/entreprises/` SHALL mostrar encima de su título una fotografía de ilustración propia: un puesto de trabajo para «Mon corps au bureau», un almuerzo preparado para «Mieux manger au travail» y un rincón de descanso para «Mieux dormir, mieux récupérer». Las fotografías MUST NOT sugerir consejo individual, régimen ni tratamiento.

#### Scenario: Una fotografía por taller
- **WHEN** una persona recorre la sección `#ateliers`
- **THEN** ve tres fotografías distintas, cada una encima del título de su taller y en el orden movimiento, alimentación, sueño

#### Scenario: Contenido del taller conservado
- **WHEN** se compara cada taller con su versión anterior
- **THEN** conserva su título, su frase de presentación, su lista «Nos thématiques», su ficha práctica y su enlace de contacto, sin cambios de texto

#### Scenario: Texto alternativo
- **WHEN** un lector de pantalla recorre la sección `#ateliers`
- **THEN** cada fotografía se anuncia con una descripción en francés de lo que muestra y ninguna menciona a Bliss, a Virginia ni un resultado prometido

#### Scenario: Carga diferida
- **WHEN** se carga `/entreprises/` o `/` sin desplazarse
- **THEN** las fotografías de talleres y de formatos no se descargan con prioridad y, al aparecer, no desplazan el contenido
