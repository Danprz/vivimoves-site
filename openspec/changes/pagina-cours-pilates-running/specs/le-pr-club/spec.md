# Spec Delta

## ADDED Requirements

### Requirement: Primer bloque orientado a encontrar un curso
El primer bloque de `/le-pr-club` SHALL llevar el `h1` «Trouvez votre prochain cours à Cergy-Pontoise», una frase que anuncie los cursos de Pilates sobre tapis y Reformer y una frase que invite a unirse a Le PR Club como comunidad de Pilates y running de Cergy-Pontoise. SHALL ofrecer accesos a los bloques de cursos de la misma página.

#### Scenario: Comprensión inmediata
- **WHEN** una persona abre `/le-pr-club/` en un viewport de 375 × 812 px
- **THEN** lee sin desplazarse el titular «Trouvez votre prochain cours à Cergy-Pontoise» y ve al menos un acceso hacia los cursos

#### Scenario: Acceso a los cursos desde el primer bloque
- **WHEN** una persona activa un acceso del primer bloque con ratón o con teclado
- **THEN** el navegador la lleva al bloque de cursos correspondiente de la misma página, sin cargar ningún sitio externo

### Requirement: Orden de los bloques de la página
La página `/le-pr-club` SHALL presentar, después del primer bloque y en este orden, el bloque de Pilates sobre tapis, el bloque de Pilates Reformer y el bloque de Le PR Club. La reseña de Google y la banda hacia la oferta para empresas SHALL ir después de esos tres bloques.

#### Scenario: Recorrido de la página
- **WHEN** una persona recorre `/le-pr-club/` de arriba abajo
- **THEN** encuentra, por este orden, el primer bloque, Pilates tapis, Pilates Reformer, Le PR Club, la reseña de Google y la banda de empresas

#### Scenario: Estructura de titulares
- **WHEN** se inspeccionan los titulares de la página
- **THEN** hay un único `h1` y cada uno de los tres bloques de cursos y club tiene su propio `h2`

### Requirement: Bloque de Pilates sobre tapis
El bloque de Pilates sobre tapis SHALL indicar que los cursos tienen lugar en el Centre Ann Lewis, 5 rue Alexandre Prachay, Pontoise, y SHALL listar sus horarios: lundi a las 19h30, mardi a las 19h30 y vendredi a las 12h30. SHALL ofrecer como acción principal un botón de reserva que enlaza a `https://bookwhen.com/fr/leprclub`.

#### Scenario: Información para decidir
- **WHEN** una persona lee el bloque de Pilates tapis
- **THEN** encuentra el nombre del lugar, su dirección completa y los tres horarios semanales, en francés

#### Scenario: Reserva del curso de tapis
- **WHEN** una persona activa el botón de reserva del bloque
- **THEN** llega a `https://bookwhen.com/fr/leprclub` en una pestaña nueva

#### Scenario: Horarios legibles con tecnologías de apoyo
- **WHEN** un lector de pantalla recorre los horarios del bloque
- **THEN** anuncia cada día junto a su hora, como elementos de una lista o de una estructura equivalente

### Requirement: Bloque de Pilates Reformer
El bloque de Pilates Reformer SHALL indicar que los cursos tienen lugar en SI le Pilates, 24 rue Pierre Butin, Pontoise, y SHALL listar sus horarios: mardi, mercredi y jeudi a las 11h, a las 12h y a las 13h. SHALL ofrecer como acción principal un botón de reserva que enlaza a `https://si-lepilates.com/`.

#### Scenario: Información para decidir
- **WHEN** una persona lee el bloque de Pilates Reformer
- **THEN** encuentra el nombre del estudio, su dirección completa y los tres días con sus tres horas, en francés

#### Scenario: Reserva del curso de Reformer
- **WHEN** una persona activa el botón de reserva del bloque
- **THEN** llega a `https://si-lepilates.com/` en una pestaña nueva

#### Scenario: Dos reservas distinguibles
- **WHEN** un lector de pantalla lista los enlaces de la página
- **THEN** el enlace de reserva de tapis y el de Reformer tienen nombres accesibles distintos que identifican cada curso

### Requirement: Bloque de Le PR Club y salidas running
El bloque de Le PR Club SHALL presentar el club como la comunidad de Pilates y running de Cergy-Pontoise y SHALL indicar que sus salidas running son gratuitas. Su acción principal SHALL ser el enlace a `https://www.instagram.com/leprclub/`, y SHALL ofrecer con menor énfasis un enlace a `https://bookwhen.com/fr/leprclub` para ver las próximas salidas.

#### Scenario: Canal principal
- **WHEN** una persona observa las acciones del bloque del club
- **THEN** el enlace a Instagram tiene el mayor énfasis visual y el enlace a las próximas salidas es secundario

#### Scenario: Gratuidad de las salidas
- **WHEN** una persona lee el bloque del club
- **THEN** entiende que las salidas running son gratuitas, y no encuentra ningún importe

### Requirement: Agenda externa sin nombrar
Los textos visibles y los nombres accesibles de todas las páginas MUST NOT contener la palabra «Bookwhen». Los enlaces a la agenda externa SHALL describirse por lo que permiten hacer (reservar un curso, ver las próximas salidas).

#### Scenario: Búsqueda en el contenido publicado
- **WHEN** se busca «Bookwhen» en el texto visible, en los atributos `alt`, `title` y `aria-label` y en las metadescripciones de las cinco páginas generadas
- **THEN** no aparece; solo figura dentro del atributo `href` de los enlaces de reserva

## MODIFIED Requirements

### Requirement: Presentación del club
La página `/le-pr-club` SHALL explicar en francés qué cursos de Pilates se pueden reservar y qué es Le PR Club, transmitiendo comunidad, movimiento compartido, salidas de running y Pilates. El club SHALL nombrarse «Le PR Club» de forma consistente en los textos, y la etiqueta «Pilates & running» SHALL usarse para designar el acceso a esa página en la navegación y en el pie. La etiqueta «Communauté» MUST NOT usarse como etiqueta de acceso ni como titular.

#### Scenario: Comprensión del club
- **WHEN** una persona interesada en correr o practicar Pilates abre `/le-pr-club/`
- **THEN** entiende en el primer bloque que puede encontrar cursos de Pilates en Cergy-Pontoise y unirse a un club de Pilates y running

#### Scenario: Nombre consistente
- **WHEN** se revisan los textos visibles, los títulos y los textos alternativos de todas las páginas
- **THEN** el club aparece siempre como «Le PR Club» (o «du PR Club» / «au PR Club» cuando la gramática francesa lo exige), y «communauté» solo aparece como palabra común dentro de una frase

#### Scenario: Llegada desde la etiqueta «Communauté»
- **WHEN** una persona activa en la cabecera el enlace «Pilates & running», que sustituye a la antigua etiqueta «Communauté»
- **THEN** llega a `/le-pr-club/` y el enlace «Pilates & running» queda marcado como página actual

### Requirement: Acceso a la agenda y a las reservas externas
La página SHALL enlazar a `https://bookwhen.com/fr/leprclub` desde el botón de reserva del bloque de Pilates sobre tapis y desde el enlace secundario del bloque del club. Esos enlaces MUST abrirse como enlaces externos identificados y MUST NOT nombrar el servicio de reservas.

#### Scenario: CTA principal
- **WHEN** una persona activa el botón de reserva del bloque de Pilates tapis
- **THEN** llega a `https://bookwhen.com/fr/leprclub`

#### Scenario: CTA visible sin recorrer la página
- **WHEN** se abre `/le-pr-club/` en un viewport de 375 × 812 px
- **THEN** el primer bloque muestra un acceso que conduce al bloque de Pilates tapis, donde está el botón de reserva

### Requirement: Acceso a la actualidad del club
La página SHALL ofrecer en el bloque de Le PR Club un enlace hacia `https://www.instagram.com/leprclub/` para seguir la actualidad del club y conocer las salidas running, como acción principal de ese bloque.

#### Scenario: CTA secundario
- **WHEN** una persona activa el enlace de Instagram del club
- **THEN** llega a `https://www.instagram.com/leprclub/`

### Requirement: Contenido válido con la agenda llena o vacía
El sitio MUST NOT anunciar fechas concretas, plazas, contadores ni estados de disponibilidad, y MUST NOT integrar la agenda mediante embed, scraping o API. Los horarios publicados SHALL presentarse como horarios semanales habituales, y el bloque del club SHALL invitar a seguir su actualidad de un modo que siga siendo cierto cuando la agenda externa no tenga salidas publicadas.

#### Scenario: Agenda externa sin eventos
- **WHEN** la agenda externa no tiene ninguna salida running publicada
- **THEN** ningún texto del bloque del club resulta falso ni promete una salida en una fecha, y la página sigue ofreciendo Instagram para estar al corriente

#### Scenario: Sin carga de terceros
- **WHEN** se carga `/le-pr-club/`
- **THEN** la página no realiza peticiones a la agenda externa, a SI le Pilates ni a Instagram hasta que la persona activa un enlace

### Requirement: Sin condiciones de eventos convertidas en permanentes
La página SHALL publicar como información permanente únicamente los días, las horas y los lugares de los cursos recurrentes de Pilates sobre tapis y de Pilates Reformer, y la gratuidad de las salidas running. MUST NOT publicar precios, distancias, fechas ni lugares de eventos puntuales, ni reutilizar «cet été 2026», los horarios o los 12 € del sitio anterior.

#### Scenario: Restos del contenido estival
- **WHEN** se busca «été 2026», «20h», «12 €» y «Parc François Mitterrand» en el HTML generado
- **THEN** no aparece ninguna de esas menciones

#### Scenario: Sin precios
- **WHEN** se busca «€» y «tarif» en el texto visible de `/le-pr-club/`
- **THEN** no aparece ningún importe ni tarifa, y la única mención económica es la gratuidad de las salidas running

#### Scenario: Horas publicadas
- **WHEN** se listan todas las horas que aparecen en `/le-pr-club/`
- **THEN** son exactamente 19h30 y 12h30 en el bloque de tapis y 11h, 12h y 13h en el bloque de Reformer

### Requirement: Virginia como fundadora del club
La página SHALL presentar a Virginia como fundadora de Le PR Club dentro del bloque del club. El sitio MUST NOT nombrar ni mostrar a Aude, que ya no forma parte del club, y MUST NOT publicar un año de creación mientras no esté confirmado.

#### Scenario: Presentación de la fundadora
- **WHEN** una persona lee el bloque de Le PR Club
- **THEN** encuentra a Virginia como fundadora, sin año de creación

#### Scenario: Restos de la atribución anterior
- **WHEN** se busca «Aude» en el HTML generado, en los textos alternativos y en los nombres de los archivos de imagen publicados
- **THEN** no aparece

### Requirement: Separación entre empresa y club
La página del club SHALL ofrecer un camino claro hacia `/entreprises` para quien busca una intervención para su equipo, y las páginas de empresa y de contacto SHALL indicar dónde se reserva un curso o una actividad del club mediante un enlace a `/le-pr-club/`.

#### Scenario: Persona de empresa en la página del club
- **WHEN** una persona responsable de un equipo llega a `/le-pr-club/`
- **THEN** encuentra un enlace diferenciado hacia la oferta para empresas, distinto de los botones de reserva

#### Scenario: Persona del club en la página de contacto
- **WHEN** una persona que quiere reservar un curso llega a `/contact/`
- **THEN** encuentra una indicación en francés con un enlace a `/le-pr-club/` sin tener que usar el formulario

### Requirement: Presencia del club en la portada
La portada SHALL incluir un bloque que anuncie los cursos de Pilates y Le PR Club, con un titular que nombre el Pilates y el running, una frase de presentación que nombre Le PR Club, la fotografía real de la sesión colectiva en la terraza de madera y un botón «Trouver un cours» que enlaza a `/le-pr-club`, subordinado visualmente a la oferta para empresas.

#### Scenario: Descubrimiento desde la portada
- **WHEN** una persona recorre la portada
- **THEN** encuentra el bloque de cursos y club después del posicionamiento empresarial y puede llegar a `/le-pr-club/` con una sola acción

#### Scenario: Fotografía del bloque
- **WHEN** se observa el bloque de cursos y club de la portada en 375 px y en 1440 px
- **THEN** muestra la sesión en la terraza de madera, sin cortar a ninguna persona por los bordes, con un `alt` en francés que describe la escena

#### Scenario: Etiquetas anteriores del bloque
- **WHEN** se leen el titular y el botón del bloque del club en la portada
- **THEN** el titular no es «Communauté» ni «Le PR Club» y el botón no dice «Découvrir la communauté» ni «Découvrir Le PR Club»

## REMOVED Requirements

### Requirement: Bloque de invitación a participar
**Reason**: La página se organiza ahora por curso reservable; cada bloque lleva su propia acción y el bloque genérico «Rejoignez le mouvement» ya no existe.
**Migration**: La invitación a participar se reparte entre los botones de reserva de los bloques de Pilates tapis y Pilates Reformer y el enlace a Instagram del bloque de Le PR Club. La fotografía de la terraza pasa al bloque de Pilates sobre tapis (ver `sistema-visual`).
