# Spec Delta

## MODIFIED Requirements

### Requirement: Navegación principal
La cabecera de todas las páginas SHALL dar acceso directo a «Bien-être au travail» (`/entreprises/`), «Pilates & running» (`/le-pr-club/`), «À propos» y «Contact», y a la portada mediante la marca. El pie SHALL usar las mismas etiquetas para esas rutas. El enlace de la página actual MUST estar identificado visualmente y para tecnologías de apoyo.

#### Scenario: Acceso con una sola acción
- **WHEN** una persona está en cualquier página en un escritorio de 1440 px
- **THEN** puede llegar a cualquiera de las otras cuatro páginas con una sola activación desde la cabecera

#### Scenario: Página actual
- **WHEN** una persona está en `/entreprises/`
- **THEN** el enlace «Bien-être au travail» está marcado como página actual y los demás no

#### Scenario: Etiquetas anteriores retiradas
- **WHEN** se leen los enlaces de la cabecera y de la lista «Le site» del pie en cualquier página
- **THEN** ninguno se titula «Entreprises», «Le PR Club» ni «Communauté», y los enlaces «Bien-être au travail» y «Pilates & running» llevan a `/entreprises/` y `/le-pr-club/`

#### Scenario: Cabecera en una sola línea en tableta
- **WHEN** se muestra la cabecera en un viewport de 768 px de ancho
- **THEN** la marca y los cuatro enlaces se ven completos, sin solaparse ni desbordar horizontalmente
