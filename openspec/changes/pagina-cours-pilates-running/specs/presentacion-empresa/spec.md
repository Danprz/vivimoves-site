# Spec Delta

## MODIFIED Requirements

### Requirement: Virginia en segundo plano
Virginia SHALL aparecer únicamente al final de `/a-propos`, en `/contact` como interlocutora, en una línea de texto de `/entreprises`, en `/le-pr-club` como quien anima los cursos de Pilates y como fundadora del club, y dentro de las citas literales de reseñas, que pueden nombrarla en cualquier página. MUST NOT aparecer en el primer bloque de ninguna página, los textos propios de la portada MUST NOT nombrarla, y su retrato MUST NOT usarse en la portada ni en `/entreprises`.

#### Scenario: Portada
- **WHEN** se revisa la portada completa
- **THEN** no contiene el retrato de Virginia y su nombre solo aparece, si aparece, dentro del texto citado de una reseña

#### Scenario: Landing de empresas
- **WHEN** se revisa `/entreprises/`
- **THEN** fuera de las citas de reseñas, Virginia aparece como máximo en una línea de texto que indica quién anima las sesiones, sin fotografía

#### Scenario: Página de la empresa
- **WHEN** se recorre `/a-propos/`
- **THEN** el bloque sobre Virginia, con su retrato, va seguido únicamente de la sección de reseña de Google y del CTA de contacto

#### Scenario: Página de cursos
- **WHEN** se revisa `/le-pr-club/`
- **THEN** el primer bloque no nombra a Virginia, y los bloques de Pilates tapis, Pilates Reformer y Le PR Club la nombran como máximo una vez cada uno, con sus hechos confirmados y sin su retrato
