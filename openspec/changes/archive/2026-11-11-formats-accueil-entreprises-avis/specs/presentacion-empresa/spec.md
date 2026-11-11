# Spec Delta

## MODIFIED Requirements

### Requirement: Virginia en segundo plano
Virginia SHALL aparecer únicamente al final de `/a-propos`, en `/contact` como interlocutora, en una línea de texto de `/entreprises`, como fundadora en `/le-pr-club` y dentro de las citas literales de reseñas, que pueden nombrarla en cualquier página. MUST NOT aparecer en el primer bloque de ninguna página, los textos propios de la portada MUST NOT nombrarla, y su retrato MUST NOT usarse en la portada ni en `/entreprises`.

#### Scenario: Portada
- **WHEN** se revisa la portada completa
- **THEN** no contiene el retrato de Virginia y su nombre solo aparece, si aparece, dentro del texto citado de una reseña

#### Scenario: Landing de empresas
- **WHEN** se revisa `/entreprises/`
- **THEN** fuera de las citas de reseñas, Virginia aparece como máximo en una línea de texto que indica quién anima las sesiones, sin fotografía

#### Scenario: Página de la empresa
- **WHEN** se recorre `/a-propos/`
- **THEN** el bloque sobre Virginia, con su retrato y la reseña que lo acompaña, es el último antes del CTA de contacto

### Requirement: Retrato real
El retrato de Virginia SHALL ser una fotografía real con texto alternativo en francés que describa lo que se ve. El sitio MUST NOT usar ilustraciones ni imágenes generadas o de banco que la representen, y el encuadre publicado MUST NOT mostrar la enseña de un establecimiento ajeno a Vivimoves y a Le PR Club.

#### Scenario: Retrato publicado
- **WHEN** se inspecciona el retrato de `/a-propos/`
- **THEN** es la fotografía real de Virginia a la entrada de un estudio, con `alt` en francés, y su rostro queda completo en el encuadre en móvil y en escritorio

#### Scenario: Enseña de terceros
- **WHEN** se observa el retrato publicado en cualquier ancho de pantalla
- **THEN** no se lee ningún rótulo de un estudio ajeno
