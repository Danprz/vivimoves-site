# Spec Delta

## MODIFIED Requirements

### Requirement: Navegación principal
La cabecera de todas las páginas SHALL dar acceso directo a «Bien-être au travail» (`/entreprises/`), «Communauté» (`/le-pr-club/`), «À propos» y «Contact», y a la portada mediante la marca. El pie SHALL usar las mismas etiquetas para esas rutas. El enlace de la página actual MUST estar identificado visualmente y para tecnologías de apoyo.

#### Scenario: Acceso con una sola acción
- **WHEN** una persona está en cualquier página en un escritorio de 1440 px
- **THEN** puede llegar a cualquiera de las otras cuatro páginas con una sola activación desde la cabecera

#### Scenario: Página actual
- **WHEN** una persona está en `/entreprises/`
- **THEN** el enlace «Bien-être au travail» está marcado como página actual y los demás no

#### Scenario: Etiquetas anteriores retiradas
- **WHEN** se leen los enlaces de la cabecera y de la lista «Le site» del pie en cualquier página
- **THEN** ninguno se titula «Entreprises» ni «Le PR Club», y los enlaces «Bien-être au travail» y «Communauté» llevan a `/entreprises/` y `/le-pr-club/`

#### Scenario: Cabecera en una sola línea en tableta
- **WHEN** se muestra la cabecera en un viewport de 768 px de ancho
- **THEN** la marca y los cuatro enlaces se ven completos, sin solaparse ni desbordar horizontalmente

### Requirement: Idioma francés
Todas las páginas SHALL declarar `lang="fr"`, y todos los textos visibles, textos alternativos, etiquetas accesibles y metadatos SHALL estar en francés natural con ortografía correcta. La marca SHALL escribirse «Bliss» en todo el sitio, y el nombre anterior «Vivimoves» MUST NOT aparecer en textos visibles, textos alternativos, etiquetas accesibles ni metadatos.

#### Scenario: Declaración de idioma
- **WHEN** se inspecciona el elemento `html` de las cinco páginas de contenido generadas
- **THEN** todas declaran `lang="fr"`

#### Scenario: Restos de plantilla y de otros idiomas
- **WHEN** se busca en el HTML generado «Welcome to my website», «Follow Astro on Mastodon», «Retrato de» y «Virginia Moves»
- **THEN** no aparece ninguna de esas cadenas

#### Scenario: Nombre anterior retirado
- **WHEN** se busca «Vivimoves» sin distinguir mayúsculas en el HTML generado de las cinco páginas
- **THEN** solo aparece dentro de URLs absolutas del dominio de producción, y nunca en texto visible, `title`, `description`, textos alternativos ni etiquetas accesibles

#### Scenario: Marca en la cabecera y en el pie
- **WHEN** una persona abre cualquier página
- **THEN** la marca de la cabecera y la del pie dicen «Bliss»

## ADDED Requirements

### Requirement: Imagen social con la marca vigente
La imagen declarada en `og:image` SHALL mostrar el nombre «Bliss» y MUST NOT mostrar el nombre anterior ni un eslogan que ya no figure en la portada.

#### Scenario: Vista previa al compartir
- **WHEN** se abre la imagen declarada en `og:image` de cualquier página
- **THEN** se lee «Bliss» y no se lee «Vivimoves»
