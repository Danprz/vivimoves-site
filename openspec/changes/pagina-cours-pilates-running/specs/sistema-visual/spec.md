# Spec Delta

## ADDED Requirements

### Requirement: Primer bloque de la página de cursos con fotografía de fondo
El primer bloque de `/le-pr-club` SHALL mostrar una fotografía real de Cergy-Pontoise (vista aérea del Axe Majeur y de los estanques) como fondo que cubre el bloque entero, con la misma composición que el primer bloque de la portada: velo uniforme entre la fotografía y el texto, texto claro y fondo oscuro de respaldo. La fotografía MUST seguir siendo reconocible a través del velo y MUST NOT llevar la mención «Image d’illustration».

#### Scenario: Cobertura completa
- **WHEN** se abre `/le-pr-club/` en 320, 375, 768 y 1440 px de ancho
- **THEN** la fotografía ocupa todo el bloque sin franjas vacías, sin deformarse y sin desbordamiento horizontal

#### Scenario: Escena reconocible
- **WHEN** se observa el bloque en 375 px y en 1440 px
- **THEN** se distingue la pasarela roja sobre el agua y el encuadre no deja solo cielo o solo césped detrás del texto

#### Scenario: Parentesco con la portada
- **WHEN** una persona pasa de `/` a `/le-pr-club/`
- **THEN** reconoce el mismo tipo de primer bloque (fotografía a sangre, velo oscuro, texto a la izquierda) y los mismos tokens de color y tipografía

### Requirement: Texto legible sobre la fotografía de la página de cursos
El texto y los controles situados sobre la fotografía del primer bloque de `/le-pr-club` SHALL alcanzar un contraste de al menos 4,5:1 (3:1 para texto grande) frente a la zona más clara de la fotografía una vez aplicado el velo, y MUST seguir siendo legibles si la fotografía no se carga.

#### Scenario: Zona más clara de la imagen
- **WHEN** se mide el contraste de los párrafos sobre el cielo, la parte más clara de la fotografía, con el velo aplicado
- **THEN** la relación es de al menos 4,5:1, y la del titular es de al menos 3:1

#### Scenario: Imagen no cargada
- **WHEN** la fotografía no llega a cargarse
- **THEN** el bloque conserva un fondo oscuro y el titular, los párrafos y los accesos se leen igual

#### Scenario: Foco sobre la fotografía
- **WHEN** una persona recorre con teclado los accesos del primer bloque
- **THEN** el indicador de foco se distingue sobre la fotografía con el velo

### Requirement: Bloques de cursos comparables
Los bloques de Pilates sobre tapis y de Pilates Reformer SHALL compartir la misma estructura visual (titular, lugar y dirección, horarios, botón de reserva y fotografía), de modo que se puedan comparar de un vistazo, y MUST NOT presentarse como tarjetas idénticas con icono y sombra. Los horarios SHALL leerse sin desplazamiento horizontal desde 320 px.

#### Scenario: Comparación en escritorio
- **WHEN** se observan ambos bloques en 1440 px
- **THEN** el lugar, los horarios y el botón de reserva ocupan la misma posición relativa en los dos bloques

#### Scenario: Horarios en móvil
- **WHEN** se observan los horarios de ambos bloques en 320 px y en 375 px
- **THEN** cada día se lee junto a sus horas, sin texto recortado ni desbordamiento horizontal

#### Scenario: Alternancia de fondos
- **WHEN** se recorre `/le-pr-club/` de arriba abajo
- **THEN** no hay dos bandas mostaza contiguas

## MODIFIED Requirements

### Requirement: Fotografías del club y retrato sustituidos
En `/le-pr-club`, el bloque de Pilates sobre tapis SHALL mostrar la fotografía de la sesión colectiva en una terraza de madera y el bloque de Pilates Reformer SHALL mostrar la fotografía de la sesión en reformer; en `/a-propos` el bloque «Qui intervient ?» SHALL mostrar el retrato de Virginia a la entrada de un estudio. Los encuadres MUST conservar a las personas completas en cualquier ancho de pantalla, y ni el texto alternativo ni una leyenda MUST presentar la terraza como el Centre Ann Lewis.

#### Scenario: Foto del club
- **WHEN** se abre `/le-pr-club/` en 375 px y en 1440 px
- **THEN** el bloque de Pilates sobre tapis muestra la sesión en la terraza, sin cortar a ninguna persona por los bordes, con un `alt` en francés que describe la escena

#### Scenario: Foto del reformer
- **WHEN** se abre `/le-pr-club/` en 375 px y en 1440 px
- **THEN** el bloque de Pilates Reformer muestra a la practicante sobre el reformer sin deformarla, con un `alt` en francés que describe la escena

#### Scenario: Retrato
- **WHEN** se abre `/a-propos/` en 375 px y en 1440 px
- **THEN** el bloque «Qui intervient ?» muestra el retrato nuevo sin deformarlo y sin desplazar el contenido al cargarse
