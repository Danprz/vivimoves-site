# Spec Delta

## MODIFIED Requirements

### Requirement: Página de la empresa
La página `/a-propos` SHALL presentar Bliss en francés como una propuesta local para las empresas de Cergy y del Val-d'Oise, de talla humana y centrada en el bienestar de los asalariados, con un CTA final hacia el contacto.

#### Scenario: Lectura de la página
- **WHEN** una persona abre `/a-propos/`
- **THEN** el `h1` y los primeros bloques hablan de Bliss, de su arraigo local y de su talla humana, y la página termina con un enlace a `/contact/`

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
- **THEN** el bloque sobre Virginia, con su retrato, va seguido únicamente de la sección de reseña de Google y del CTA de contacto

## ADDED Requirements

### Requirement: Presentación de la empresa concentrada en À propos
El bloque que presenta la empresa como local y de talla humana SHALL existir únicamente en `/a-propos`. La portada, `/entreprises`, `/le-pr-club` y `/contact` MUST NOT incluir un bloque de resumen de la empresa con el titular «Une entreprise locale, à taille humaine».

#### Scenario: Bloque retirado de la portada y de la landing
- **WHEN** se recorren `/` y `/entreprises/` de principio a fin
- **THEN** no aparece el titular «Une entreprise locale, à taille humaine» ni el enlace «Découvrir Vivimoves» o «Découvrir Bliss» que lo acompañaba

#### Scenario: Contenido conservado en À propos
- **WHEN** una persona abre `/a-propos/`
- **THEN** encuentra los bloques sobre la propuesta local y sobre la talla humana de la empresa

#### Scenario: Acceso a À propos sin el bloque
- **WHEN** una persona está en la portada o en `/entreprises/`
- **THEN** puede llegar a `/a-propos/` con una sola activación desde la cabecera o el pie

## REMOVED Requirements

### Requirement: Resumen de la empresa en portada y landing
**Reason**: Virginia pide retirar el bloque «Une entreprise locale, à taille humaine» de todas las páginas salvo «À propos», donde ese contenido ya está desarrollado.
**Migration**: La presentación de la empresa se consulta en `/a-propos/`, accesible desde la cabecera y el pie de todas las páginas. La línea «Les séances sont animées par Virginia…» que acompañaba al bloque en `/entreprises/` desaparece con él.
