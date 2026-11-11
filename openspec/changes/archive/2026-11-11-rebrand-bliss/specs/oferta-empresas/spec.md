# Spec Delta

## MODIFIED Requirements

### Requirement: Posicionamiento empresarial visible al llegar
La portada `/` y la landing `/entreprises` SHALL mostrar, sin necesidad de desplazarse en un móvil de 375 px ni en un escritorio de 1440 px, un titular en francés que exprese la oferta para empresas y una acción principal. En la portada esa acción SHALL titularse «Découvrir nos solutions» y llevar a `/entreprises/`; en la landing SHALL ser un CTA de contacto.

#### Scenario: Llegada a la portada
- **WHEN** una persona abre `/` en un viewport de 375 × 812 px
- **THEN** ve la marca «Bliss», un único `h1` «Le bien-être par le mouvement, au cœur de vos équipes», la frase «Bliss vous propose des solutions clés en main pour offrir à vos équipes de vraies pauses bien-être, dans le Val-d’Oise» y la acción «Découvrir nos solutions»

#### Scenario: Una sola acción en el primer bloque de la portada
- **WHEN** se cuentan los enlaces del primer bloque de la portada
- **THEN** hay un único enlace, «Découvrir nos solutions», que lleva a `/entreprises/`, y no hay dos enlaces con el mismo texto

#### Scenario: Contacto accesible desde la portada
- **WHEN** una persona está en el primer bloque de la portada
- **THEN** puede llegar a `/contact/` con una sola activación desde la cabecera

#### Scenario: Llegada directa a la landing compartida
- **WHEN** una persona abre `/entreprises/` desde un enlace externo, sin pasar por la portada
- **THEN** la página explica por sí sola qué propone Bliss y para quién, y muestra un CTA de contacto en el primer bloque
