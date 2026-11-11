# Spec Delta

## MODIFIED Requirements

### Requirement: Presentación del club
La página `/le-pr-club` SHALL explicar en francés qué es Le PR Club y para quién es, transmitiendo comunidad, movimiento compartido, salidas de running, Pilates y encuentros. El club SHALL nombrarse «Le PR Club» de forma consistente en los textos, y la etiqueta «Communauté» SHALL usarse únicamente para designar el acceso a esa página en la navegación, en el pie y en el bloque de la portada.

#### Scenario: Comprensión del club
- **WHEN** una persona interesada en correr o practicar Pilates abre `/le-pr-club/`
- **THEN** entiende en el primer bloque que se trata de un club de Pilates y running con actividades colectivas en el Val-d'Oise

#### Scenario: Nombre consistente
- **WHEN** se revisan los textos visibles, los títulos y los textos alternativos de todas las páginas
- **THEN** el club aparece siempre como «Le PR Club» (o «du PR Club» / «au PR Club» cuando la gramática francesa lo exige), y «Communauté» solo aparece como etiqueta de acceso o como palabra común dentro de una frase

#### Scenario: Llegada desde la etiqueta «Communauté»
- **WHEN** una persona activa «Communauté» en la cabecera
- **THEN** llega a `/le-pr-club/`, cuyo `h1` nombra «Le PR Club», y el enlace «Communauté» queda marcado como página actual

### Requirement: Presencia del club en la portada
La portada SHALL incluir un bloque titulado «Communauté» con una frase de presentación que nombre Le PR Club, la fotografía real de la sesión colectiva en la terraza de madera y un enlace «Découvrir la communauté» a `/le-pr-club`, subordinado visualmente a la oferta para empresas.

#### Scenario: Descubrimiento desde la portada
- **WHEN** una persona recorre la portada
- **THEN** encuentra el bloque «Communauté» después del posicionamiento empresarial y puede llegar a `/le-pr-club/` con una sola acción

#### Scenario: Fotografía del bloque
- **WHEN** se observa el bloque «Communauté» de la portada en 375 px y en 1440 px
- **THEN** muestra la sesión en la terraza de madera, sin cortar a ninguna persona por los bordes, con un `alt` en francés que describe la escena

#### Scenario: Etiquetas anteriores del bloque
- **WHEN** se leen el titular y el botón del bloque del club en la portada
- **THEN** el titular no es «Le PR Club» y el botón no dice «Découvrir Le PR Club»

## ADDED Requirements

### Requirement: Bloque de invitación a participar
El bloque de `/le-pr-club` que conduce a la agenda SHALL titularse «Rejoignez le mouvement» y MUST NOT usar el titular «Envie de venir ?». Su titular MUST seguir siendo válido cuando la agenda externa no tiene sesiones abiertas.

#### Scenario: Nuevo titular
- **WHEN** una persona recorre `/le-pr-club/`
- **THEN** el bloque con la fotografía de la terraza y el botón hacia Bookwhen se titula «Rejoignez le mouvement» y «Envie de venir ?» no aparece en la página

#### Scenario: Agenda vacía
- **WHEN** Bookwhen no tiene sesiones abiertas y una persona lee el bloque
- **THEN** ni el titular ni el texto afirman que haya una sesión próxima, y el enlace a Instagram sigue ofrecido como alternativa
