# Spec Delta

## MODIFIED Requirements

### Requirement: Voz de empresa
Los textos públicos SHALL hablar en nombre de Bliss, en primera persona del plural («nous») o nombrando la marca. La primera persona del singular SHALL usarse únicamente dentro del bloque «Derrière Bliss, Virginia» de `/a-propos`, donde Virginia se presenta con su propia voz, y MUST NOT aparecer en ningún otro texto propio del sitio; las citas literales de reseñas quedan fuera de esta regla. Los textos MUST NOT afirmar la existencia de un equipo de varios intervinientes ni dar cifras de plantilla.

#### Scenario: Primera persona del singular
- **WHEN** se buscan en el texto visible del sitio generado, como palabras completas y fuera de las citas de reseñas, las formas «je», «j’», «mon», «ma» y «mes»
- **THEN** solo aparecen dentro del bloque «Derrière Bliss, Virginia» de `/a-propos/` y en el nombre propio del taller «Mon corps au bureau»

#### Scenario: Equipo no afirmado
- **WHEN** se revisan los textos de las cinco páginas
- **THEN** ninguno menciona «notre équipe de coachs», un número de intervinientes ni un número de empleados

#### Scenario: Virginia habla en primera persona
- **WHEN** una persona lee el bloque «Derrière Bliss, Virginia» de `/a-propos/`
- **THEN** los tres párrafos están en primera persona del singular, sin ninguna frase en tercera persona sobre Virginia, y el enlace externo se lee «Voir mon profil LinkedIn»

#### Scenario: Resto de la página en voz de empresa
- **WHEN** se leen el primer bloque, «Notre conviction» y «Deux univers, une même philosophie» de `/a-propos/`
- **THEN** hablan de Bliss o en «nous», sin primera persona del singular

### Requirement: Página de la empresa
La página `/a-propos` SHALL presentar Bliss en francés en cuatro secciones, en este orden: un primer bloque con el `h1` «Bliss, des expériences qui font du bien» que describe Bliss como un universo dedicado al movimiento, al bienestar y a los encuentros; «Notre conviction»; «Deux univers, une même philosophie», con un bloque «Pour les particuliers» que enlaza a `/le-pr-club/` y un bloque «Pour les entreprises» que enlaza a `/entreprises/`; y «Derrière Bliss, Virginia». La página SHALL terminar con la sección de reseña de Google y un CTA hacia el contacto.

#### Scenario: Lectura de la página
- **WHEN** una persona abre `/a-propos/`
- **THEN** el `h1` y el primer bloque hablan de Bliss, encuentra a continuación «Notre conviction», «Deux univers, une même philosophie» y «Derrière Bliss, Virginia», y la página termina con un enlace a `/contact/`

#### Scenario: Enlaces de los dos universos
- **WHEN** una persona activa el enlace del bloque «Pour les particuliers» o el del bloque «Pour les entreprises»
- **THEN** llega a `/le-pr-club/` o a `/entreprises/` respectivamente, y cada enlace tiene un texto distinto que indica su destino

### Requirement: Presentación breve con hechos confirmados
El bloque sobre Virginia SHALL limitarse a estos hechos: fue ingeniera y se reconvirtió para hacer del movimiento su oficio; es coach sportive diplômée d'État; enseña Pilates sobre tapis y reformer; viajó a la India, a Rishikesh, para formarse en yoga tradicional y en Ayurveda. El bloque MUST NOT añadir fechas, duraciones ni titulaciones a esos hechos.

#### Scenario: Extensión del bloque
- **WHEN** se lee el bloque sobre Virginia en `/a-propos/`
- **THEN** consta de un título y de tres párrafos cortos que contienen los cuatro hechos y su intención con Bliss, sin relato cronológico con fechas

### Requirement: Empleador y escuela no son avales comerciales
SAVENCIA SHALL presentarse, si se menciona, únicamente como empleador anterior, y Rishikesh Yogpeeth únicamente como escuela de formación. El sitio MUST NOT mostrar sus logotipos ni presentarlos como clientes, socios o recomendaciones, y MUST NOT asociar el nombre de SAVENCIA a una fotografía de sesión, ni en su texto alternativo, ni en una leyenda, ni en el nombre del archivo publicado.

#### Scenario: Mención de SAVENCIA
- **WHEN** SAVENCIA aparece en una página
- **THEN** lo hace como texto dentro de la presentación de Virginia, fuera de cualquier bloque de clientes o referencias

#### Scenario: Ausencia de logotipos
- **WHEN** se revisan las imágenes de todas las páginas
- **THEN** no hay ningún logotipo de SAVENCIA ni de Rishikesh Yogpeeth

#### Scenario: Fotografía de empresa sin nombre de cliente
- **WHEN** se busca «savencia», sin distinguir mayúsculas, en el HTML generado de `/a-propos/` y en las URL de sus imágenes
- **THEN** no hay ninguna coincidencia

### Requirement: Presentación de la empresa concentrada en À propos
La presentación de la empresa (qué es Bliss, su convicción y sus dos universos) SHALL existir únicamente en `/a-propos`. La portada, `/entreprises`, `/le-pr-club` y `/contact` MUST NOT incluir un bloque de resumen de la empresa con el titular «Une entreprise locale, à taille humaine».

#### Scenario: Bloque retirado de la portada y de la landing
- **WHEN** se recorren `/` y `/entreprises/` de principio a fin
- **THEN** no aparece el titular «Une entreprise locale, à taille humaine» ni el enlace «Découvrir Vivimoves» o «Découvrir Bliss» que lo acompañaba

#### Scenario: Contenido conservado en À propos
- **WHEN** una persona abre `/a-propos/`
- **THEN** encuentra la presentación de Bliss, la sección «Notre conviction» y la sección «Deux univers, une même philosophie»

#### Scenario: Acceso a À propos sin el bloque
- **WHEN** una persona está en la portada o en `/entreprises/`
- **THEN** puede llegar a `/a-propos/` con una sola activación desde la cabecera o el pie
