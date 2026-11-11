# presentacion-empresa Specification

## Purpose

Presenta Bliss como una empresa local y de talla humana que propone bienestar a los asalariados del Val-d'Oise, y sitúa a Virginia en segundo plano como fundadora e interviniente, usando únicamente hechos confirmados.

## Requirements

### Requirement: Voz de empresa
Los textos públicos SHALL hablar en nombre de Bliss, en primera persona del plural («nous») o nombrando la marca, y MUST NOT usar la primera persona del singular. Los textos MUST NOT afirmar la existencia de un equipo de varios intervinientes ni dar cifras de plantilla.

#### Scenario: Primera persona del singular
- **WHEN** se buscan en el HTML generado las formas «Je », «J’» y «mon parcours»
- **THEN** no aparece ninguna en los textos del sitio

#### Scenario: Equipo no afirmado
- **WHEN** se revisan los textos de las cinco páginas
- **THEN** ninguno menciona «notre équipe de coachs», un número de intervinientes ni un número de empleados

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

### Requirement: Presentación breve con hechos confirmados
El bloque sobre Virginia SHALL presentarla como fundadora e interviniente y limitarse a estos hechos: fue ingeniera PMO en SAVENCIA; es coach sportive certifiée, diplômée d'État; enseña Pilates sobre tapis y reformer; se formó como profesora de yoga en la India, en Rishikesh Yogpeeth.

#### Scenario: Extensión del bloque
- **WHEN** se lee el bloque sobre Virginia en `/a-propos/`
- **THEN** consta de un título y de un párrafo corto con los cuatro hechos, sin relato cronológico

### Requirement: Sin datos inventados
Las páginas MUST NOT publicar fechas, años de experiencia, horas de formación, número de clientes, resultados ni titulaciones distintas de las confirmadas, en particular de nutrición, ni detalles personales de Virginia.

#### Scenario: Titulación no confirmada
- **WHEN** una titulación o certificación no figura entre los hechos confirmados
- **THEN** no aparece en ninguna página ni metadato

### Requirement: Empleador y escuela no son avales comerciales
SAVENCIA SHALL presentarse únicamente como empleador anterior y Rishikesh Yogpeeth únicamente como escuela de formación. El sitio MUST NOT mostrar sus logotipos ni presentarlos como clientes, socios o recomendaciones.

#### Scenario: Mención de SAVENCIA
- **WHEN** SAVENCIA aparece en una página
- **THEN** lo hace como texto dentro de la presentación de Virginia, fuera de cualquier bloque de clientes o referencias

#### Scenario: Ausencia de logotipos
- **WHEN** se revisan las imágenes de todas las páginas
- **THEN** no hay ningún logotipo de SAVENCIA ni de Rishikesh Yogpeeth

### Requirement: Sin oferta individual
Ninguna página SHALL ofrecer coaching individual, programas personalizados ni un enlace o CTA para contratarlos.

#### Scenario: Presentación de Virginia
- **WHEN** se lee el bloque sobre Virginia
- **THEN** no contiene ninguna oferta de acompañamiento individual ni precio

### Requirement: Enlace al perfil profesional
Las páginas `/a-propos` y `/contact` SHALL enlazar al perfil de LinkedIn de Virginia, identificado como enlace externo.

#### Scenario: Enlace a LinkedIn
- **WHEN** una persona activa el enlace de LinkedIn en `/a-propos/` o en `/contact/`
- **THEN** llega a `https://www.linkedin.com/in/virginiavallejo94/`

### Requirement: Retrato real
El retrato de Virginia SHALL ser una fotografía real con texto alternativo en francés que describa lo que se ve. El sitio MUST NOT usar ilustraciones ni imágenes generadas o de banco que la representen, y el encuadre publicado MUST NOT mostrar la enseña de un establecimiento ajeno a Bliss y a Le PR Club.

#### Scenario: Retrato publicado
- **WHEN** se inspecciona el retrato de `/a-propos/`
- **THEN** es la fotografía real de Virginia a la entrada de un estudio, con `alt` en francés, y su rostro queda completo en el encuadre en móvil y en escritorio

#### Scenario: Enseña de terceros
- **WHEN** se observa el retrato publicado en cualquier ancho de pantalla
- **THEN** no se lee ningún rótulo de un estudio ajeno

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
