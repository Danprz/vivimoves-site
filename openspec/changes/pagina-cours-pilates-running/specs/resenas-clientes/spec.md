# Spec Delta

## MODIFIED Requirements

### Requirement: Sección propia de reseñas de Google
La reseña de cada página SHALL presentarse en una sección independiente, con su propio titular que nombre a Google, y MUST NOT quedar anidada dentro de otra sección (pasos del proyecto, cursos regulares, bloques de cursos de Pilates, bloque del club o presentación de Virginia).

#### Scenario: Sección independiente
- **WHEN** se inspecciona la estructura de `/`, `/entreprises/`, `/le-pr-club/` y `/a-propos/`
- **THEN** la reseña está en un elemento de sección propio, con un `h2` que contiene «Google», y ningún otro contenido de la oferta comparte esa sección

#### Scenario: Secciones que antes la alojaban
- **WHEN** se leen las secciones «Comment se construit un projet», «Cours réguliers» y «Qui intervient ?», y los bloques de Pilates tapis, Pilates Reformer y Le PR Club de `/le-pr-club/`
- **THEN** ninguna contiene una cita de reseña

#### Scenario: Composición en móvil y escritorio
- **WHEN** se muestra la sección en 375 px y en 1440 px
- **THEN** el titular, la reseña y el enlace a Google se leen en ese orden en móvil y la reseña no supera una longitud de línea cómoda en escritorio
