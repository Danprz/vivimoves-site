# Spec Delta

## Purpose

Da a Le PR Club una presencia propia dentro de Vivimoves como punto de entrada a las actividades colectivas y conduce a las personas interesadas hacia la agenda externa de Bookwhen y la comunidad en Instagram.

## ADDED Requirements

### Requirement: Presentación del club
La página `/le-pr-club` SHALL explicar en francés qué es Le PR Club y para quién es, transmitiendo comunidad, movimiento compartido, salidas de running, Pilates y encuentros, y SHALL usar el nombre «Le PR Club» de forma consistente en todo el sitio.

#### Scenario: Comprensión del club
- **WHEN** una persona interesada en correr o practicar Pilates abre `/le-pr-club/`
- **THEN** entiende en el primer bloque que se trata de un club de Pilates y running con actividades colectivas en el Val-d'Oise

#### Scenario: Nombre consistente
- **WHEN** se revisan los textos visibles, los títulos y los textos alternativos de todas las páginas
- **THEN** el club aparece siempre como «Le PR Club» (o «du PR Club» / «au PR Club» cuando la gramática francesa lo exige)

### Requirement: Acceso a la agenda y a las reservas externas
La página SHALL ofrecer un CTA principal «Voir les prochaines séances» que enlaza a `https://bookwhen.com/fr/leprclub`, y SHALL indicar que las fechas, la disponibilidad, las condiciones y las reservas se gestionan en Bookwhen.

#### Scenario: CTA principal
- **WHEN** una persona activa «Voir les prochaines séances»
- **THEN** llega a `https://bookwhen.com/fr/leprclub`

#### Scenario: CTA visible sin recorrer la página
- **WHEN** se abre `/le-pr-club/` en un viewport de 375 × 812 px
- **THEN** el CTA principal es visible en el primer bloque

### Requirement: Acceso a la actualidad del club
La página SHALL ofrecer un CTA secundario hacia `https://www.instagram.com/leprclub/` para seguir la actualidad del club, con menor énfasis visual que el CTA de la agenda.

#### Scenario: CTA secundario
- **WHEN** una persona activa el enlace de Instagram del club
- **THEN** llega a `https://www.instagram.com/leprclub/`

### Requirement: Contenido válido con la agenda llena o vacía
El sitio MUST NOT anunciar sesiones concretas, plazas, contadores ni estados de disponibilidad, y MUST NOT integrar la agenda mediante embed, scraping o API. El texto SHALL invitar a consultar la programación o a seguir la actualidad del club de un modo que siga siendo cierto cuando Bookwhen no tenga eventos publicados.

#### Scenario: Agenda externa sin eventos
- **WHEN** Bookwhen no tiene ningún evento publicado
- **THEN** ningún texto de `/le-pr-club/` resulta falso ni promete una sesión, y la página sigue ofreciendo Instagram para estar al corriente

#### Scenario: Sin carga de terceros
- **WHEN** se carga `/le-pr-club/`
- **THEN** la página no realiza peticiones a Bookwhen ni a Instagram hasta que la persona activa un enlace

### Requirement: Sin condiciones de eventos convertidas en permanentes
La página MUST NOT publicar horarios, días fijos, distancias, gratuidad, precios ni lugares concretos de eventos, ni reutilizar «cet été 2026», los horarios o los 12 € del sitio anterior.

#### Scenario: Restos del contenido estival
- **WHEN** se busca «été 2026», «20h», «11h», «12 €» y «Parc François Mitterrand» en el HTML generado
- **THEN** no aparece ninguna de esas menciones

### Requirement: Virginia como fundadora del club
La página SHALL presentar a Virginia como fundadora de Le PR Club. El sitio MUST NOT nombrar ni mostrar a Aude, que ya no forma parte del club, y MUST NOT publicar un año de creación mientras no esté confirmado.

#### Scenario: Presentación de la fundadora
- **WHEN** una persona lee el bloque sobre quién está detrás del club
- **THEN** encuentra a Virginia como fundadora, sin año de creación

#### Scenario: Restos de la atribución anterior
- **WHEN** se busca «Aude» en el HTML generado, en los textos alternativos y en los nombres de los archivos de imagen publicados
- **THEN** no aparece

### Requirement: Separación entre empresa y club
La página del club SHALL ofrecer un camino claro hacia `/entreprises` para quien busca una intervención para su equipo, y las páginas de empresa y de contacto SHALL indicar dónde se reserva una actividad del club.

#### Scenario: Persona de empresa en la página del club
- **WHEN** una persona responsable de un equipo llega a `/le-pr-club/`
- **THEN** encuentra un enlace diferenciado hacia la oferta para empresas, distinto del CTA de reservas

#### Scenario: Persona del club en la página de contacto
- **WHEN** una persona que quiere reservar una sesión del club llega a `/contact/`
- **THEN** encuentra una indicación en francés con el enlace a Bookwhen sin tener que usar el formulario

### Requirement: Presencia del club en la portada
La portada SHALL incluir un bloque de Le PR Club con una frase de presentación y un enlace a `/le-pr-club`, subordinado visualmente a la oferta para empresas.

#### Scenario: Descubrimiento desde la portada
- **WHEN** una persona recorre la portada
- **THEN** encuentra el bloque del club después del posicionamiento empresarial y puede llegar a `/le-pr-club/` con una sola acción

### Requirement: Imágenes auténticas del club
Las imágenes de la página del club SHALL ser fotografías reales del club, con textos alternativos en francés que describan lo que se ve, y MUST NOT mostrar personas reconocibles sin consentimiento confirmado.

#### Scenario: Foto con participantes reconocibles
- **WHEN** no consta el consentimiento de las personas reconocibles de una fotografía
- **THEN** esa fotografía no se publica o se recorta de modo que no sean reconocibles
