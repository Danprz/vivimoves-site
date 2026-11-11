# estructura-y-migracion Specification

## Purpose

Define las rutas públicas de Bliss, la navegación entre ellas, el destino de las URLs antiguas y la coherencia de idioma, metadatos, sitemap y feed, de modo que el catálogo anterior deje de ser accesible.

## Requirements

### Requirement: Rutas publicadas
El sitio SHALL publicar exactamente cinco páginas de contenido: `/`, `/entreprises`, `/le-pr-club`, `/a-propos` y `/contact`.

#### Scenario: Rutas disponibles
- **WHEN** se genera el sitio y se abre cada una de las cinco rutas
- **THEN** cada una responde con su página en francés y un único `h1`

#### Scenario: Sin páginas adicionales de contenido
- **WHEN** se listan las páginas HTML generadas
- **THEN** solo existen las cinco páginas de contenido y las páginas de redirección de las rutas antiguas

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

### Requirement: Menú móvil accesible
En anchos donde los enlaces no caben en línea, la cabecera SHALL ofrecer un botón de menú que expone su estado abierto o cerrado, se maneja con teclado y se cierra con Escape devolviendo el foco al botón. Sin JavaScript, los enlaces de navegación SHALL permanecer visibles y utilizables.

#### Scenario: Apertura con teclado
- **WHEN** una persona enfoca el botón de menú en un viewport de 375 px y pulsa Enter o Espacio
- **THEN** el menú se abre, el botón anuncia el estado abierto y el siguiente Tab lleva al primer enlace

#### Scenario: Cierre con Escape
- **WHEN** el menú está abierto y la persona pulsa Escape
- **THEN** el menú se cierra y el foco vuelve al botón

#### Scenario: Menú cerrado
- **WHEN** el menú está cerrado
- **THEN** sus enlaces no reciben foco ni son anunciados por un lector de pantalla

#### Scenario: Navegación sin JavaScript
- **WHEN** se abre cualquier página en 375 px con JavaScript desactivado
- **THEN** los cuatro enlaces de navegación están visibles y funcionan

### Requirement: Destino de las URLs antiguas
Las URLs retiradas SHALL conducir a un destino coherente: `/services` y `/tarifs-coaching` a `/entreprises`, y `/pilates-plein-air` a `/le-pr-club`. Cuando el hosting no pueda emitir una redirección HTTP, cada URL antigua SHALL servir una página que redirige de inmediato, declara el destino como canónico, pide no ser indexada y contiene un enlace visible al destino.

#### Scenario: Acceso directo a la página de tarifas
- **WHEN** una persona abre `/tarifs-coaching` desde un marcador
- **THEN** llega a `/entreprises/` sin ver ninguna tarifa ni oferta individual

#### Scenario: Acceso directo a la página estival
- **WHEN** una persona abre `/pilates-plein-air`
- **THEN** llega a `/le-pr-club/`

#### Scenario: Redirección HTTP en el hosting actual
- **WHEN** el sitio está desplegado en Vercel y se solicita `/services`
- **THEN** el servidor responde con una redirección permanente hacia `/entreprises/`

#### Scenario: Redirección estática sin soporte del hosting
- **WHEN** el hosting sirve la página de redirección con estado HTTP 200
- **THEN** el HTML contiene la redirección inmediata, la canónica del destino, la instrucción de no indexar y un enlace al destino, y ningún texto de la oferta antigua

### Requirement: Catálogo antiguo inaccesible
Ninguna ruta publicada, metadato, texto alternativo, enlace ni recurso enlazado SHALL promocionar coaching individual, programas personalizados, acompañamientos 1:1, sesiones a domicilio o a distancia, ni sus tarifas.

#### Scenario: Búsqueda de la oferta antigua
- **WHEN** se busca en el HTML generado «tarifs coaching», «coaching personnalisé», «à domicile», «à distance», «suivi WhatsApp» y «pack»
- **THEN** no aparece ninguna de esas expresiones como oferta

#### Scenario: Imágenes promocionales retiradas
- **WHEN** se listan los archivos de imagen publicados
- **THEN** no figura ninguna imagen usada exclusivamente para promocionar la oferta individual

### Requirement: Enlaces internos y anclas válidos
Todos los enlaces internos SHALL apuntar a rutas publicadas y todas las anclas SHALL corresponder a un elemento existente en la página de destino. El ancla del formulario de contacto usada por el sitio anterior SHALL seguir funcionando.

#### Scenario: Revisión de enlaces
- **WHEN** se recorren los enlaces internos de las cinco páginas
- **THEN** ninguno conduce a una página inexistente ni a una ruta retirada, y cada ancla sitúa su destino en pantalla

#### Scenario: Enlace antiguo al formulario
- **WHEN** una persona abre `/contact#contact-form`
- **THEN** el navegador sitúa el formulario en pantalla

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

### Requirement: Metadatos por página
Cada página SHALL tener un `title` y una `description` propios y específicos, una URL canónica coherente con su ruta final, y metadatos Open Graph con una imagen que exista. Los metadatos MUST NOT contener precios ni la oferta antigua.

#### Scenario: Títulos y descripciones únicos
- **WHEN** se comparan los `title` y `description` de las cinco páginas
- **THEN** los cinco son distintos entre sí y describen el contenido de su página

#### Scenario: Imagen Open Graph existente
- **WHEN** se solicita la URL declarada en `og:image` de cada página
- **THEN** el recurso existe en el sitio generado

### Requirement: Dominio de producción
Las URLs absolutas de canónicas, Open Graph y sitemap SHALL usar el dominio de producción confirmado, `https://vivimoves-site.vercel.app`, y MUST NOT apuntar a un dominio de ejemplo.

#### Scenario: Dominio en el sitio generado
- **WHEN** se inspeccionan las canónicas, `og:url` y el sitemap generados
- **THEN** todas las URLs absolutas empiezan por `https://vivimoves-site.vercel.app` y `example.com` no aparece

### Requirement: Sitemap coherente
El sitemap SHALL incluir las cinco páginas de contenido y MUST NOT incluir las rutas retiradas ni rutas inexistentes.

#### Scenario: Contenido del sitemap
- **WHEN** se inspecciona el sitemap generado
- **THEN** contiene `/`, `/entreprises/`, `/le-pr-club/`, `/a-propos/` y `/contact/`, y no contiene `/services/`, `/tarifs-coaching/`, `/pilates-plein-air/` ni `/blog/`

### Requirement: Feed sin contenido de plantilla
El feed RSS MUST NOT contener artículos de ejemplo ni enlaces a rutas inexistentes, y su título y descripción SHALL estar en francés. Mientras no exista contenido editorial real, ninguna página SHALL anunciar ni enlazar el feed.

#### Scenario: Feed sin artículos
- **WHEN** no existe contenido editorial real y se abre `/rss.xml`
- **THEN** el feed es XML válido, no contiene ningún artículo y su descripción está en francés

#### Scenario: Feed no anunciado
- **WHEN** se inspecciona el `<head>` y el cuerpo de las cinco páginas
- **THEN** no hay ningún enlace a `/rss.xml` ni a `/blog`

### Requirement: Enlaces externos identificables
Los enlaces a Bookwhen, Instagram y otros sitios externos SHALL tener un nombre accesible que indique su destino, SHALL avisar cuando abren una pestaña nueva y MUST NOT ceder acceso a la página de origen.

#### Scenario: Enlace externo en pestaña nueva
- **WHEN** un lector de pantalla enfoca un enlace que abre Bookwhen en una pestaña nueva
- **THEN** anuncia el destino y que se abre en una ventana nueva

### Requirement: Imagen social con la marca vigente
La imagen declarada en `og:image` SHALL mostrar el nombre «Bliss» y MUST NOT mostrar el nombre anterior ni un eslogan que ya no figure en la portada.

#### Scenario: Vista previa al compartir
- **WHEN** se abre la imagen declarada en `og:image` de cualquier página
- **THEN** se lee «Bliss» y no se lee «Vivimoves»
