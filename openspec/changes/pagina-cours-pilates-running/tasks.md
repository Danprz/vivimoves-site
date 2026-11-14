# Tasks

## 1. Datos y recursos

- [x] 1.1 Copiar `docs/prompts/cergy-pontoise.jpg` a `src/assets/cergy-pontoise.jpg` y verificar con `sips` que conserva 1134 × 756 px y pesa menos de 500 kB
- [x] 1.2 Añadir `SI_LE_PILATES_URL = 'https://si-lepilates.com/'` a `src/consts.ts` y verificar con `grep` que es la única aparición de esa URL en `src/`
- [x] 1.3 Crear `src/data/cours.ts` con los dos cursos (ancla, titular, lugar, dirección, horarios, URL y nombre del botón) según la tabla de `design.md` y verificar con `npm run check` que no hay errores de tipos

## 2. Primer bloque compartido

- [x] 2.1 Mover las reglas `.hero`, `.hero-photo`, `.hero-veil`, `.hero-content`, `.hero-text` y `.hero-credit` de `src/pages/index.astro` a `src/styles/global.css`, dejando en la portada solo `.hero-brand` y el tamaño local del `h1`; verificar en el navegador que la portada se ve igual que antes en 375 px y en 1440 px
- [x] 2.2 Actualizar `DESIGN.md`: el primer bloque con fotografía de fondo existe en la portada y en `/le-pr-club`, con las diferencias de contenido; verificar que ya no dice «es el único lugar del sitio con fotografía de fondo»

## 3. Página de cursos con `impeccable`

- [x] 3.1 Cargar la skill `impeccable` con `DESIGN.md`, `.impeccable/surfaces/site.md` y las decisiones 3 a 7 de `design.md` como contrato de dirección, y verificar que la dirección devuelta no contradice la paleta ni la regla de «sin tarjetas con icono y sombra»
- [x] 3.2 Crear `src/components/CoursBlock.astro` (ancla, `h2`, línea de Virginia, `address`, horarios en `dl`, botón `ExternalLink`, fotografía con lado invertible) y verificar con `read_page` que cada día se anuncia junto a sus horas
- [x] 3.3 Reescribir `src/pages/le-pr-club.astro`: primer bloque con la fotografía de Cergy-Pontoise y los tres accesos ancla, dos `CoursBlock`, bloque mostaza de Le PR Club con Instagram como acción principal, reseña de Google con `tone="page"` y banda `ink` de empresas; verificar que el orden y los `h1`/`h2` cumplen el requisito «Orden de los bloques de la página»
- [x] 3.4 Actualizar el `title` y la metadescripción de la página según la decisión 10 y verificar en el HTML generado que no contienen «Bookwhen»
- [x] 3.5 Ajustar `object-position` de la fotografía y verificar con capturas en 320, 375, 768 y 1440 px que la pasarela roja se distingue y que no hay franjas vacías ni desbordamiento horizontal
- [x] 3.6 Medir el contraste del titular, los párrafos y los accesos del primer bloque sobre el cielo con el velo y verificar que alcanzan 4,5:1 (3:1 para texto grande); bloquear la imagen y verificar que el bloque sigue legible sobre el fondo `ink`
- [x] 3.7 Pasar la revisión de acabado de `impeccable` sobre `/le-pr-club/` y aplicar sus correcciones materiales; verificar que no queda ninguna pendiente de prioridad alta

## 4. Navegación, portada y contacto

- [x] 4.1 Cambiar «Communauté» por «Pilates & running» en `src/components/Header.astro` y `src/components/Footer.astro` y verificar en 768 px que la marca y los cuatro enlaces caben en una línea sin solaparse
- [x] 4.2 Actualizar el bloque del club de `src/pages/index.astro` (`h2`, frase y botón «Trouver un cours») y verificar que el titular no es «Communauté» y que el botón lleva a `/le-pr-club/`
- [x] 4.3 Reescribir la orientación de `src/pages/contact.astro` con un enlace interno a `/le-pr-club/`, retirar la importación de `BOOKWHEN_URL` y verificar que el texto visible no nombra el servicio de reservas

## 5. Documentación del producto

- [x] 5.1 Actualizar `PRODUCT.md` (navegación, propósito secundario, cursos y lugares, regla de precios y horarios, visibilidad de Virginia en `/le-pr-club`, «Bookwhen» solo como enlace) y verificar que no contradice ningún delta de `specs/`
- [x] 5.2 Actualizar `.impeccable/surfaces/site.md` (acción, navegación y límites) y verificar que nombra «Pilates & running» y las dos vías de reserva

## 6. Verificación de conjunto

- [x] 6.1 Ejecutar `npm run check` y `npm run build` y verificar que ambos terminan sin errores
- [x] 6.2 Buscar en `dist/` «Bookwhen» fuera de atributos `href`, «Communauté» como etiqueta o titular, «Aude», «été 2026», «20h», «12 €», «€» y «Parc François Mitterrand» en las páginas afectadas, y verificar que no aparece ninguno
- [x] 6.3 Recorrer `/le-pr-club/` con teclado en 375 px y en 1440 px: foco visible sobre la fotografía, anclas que llevan a su bloque, botones de reserva que abren `https://bookwhen.com/fr/leprclub` y `https://si-lepilates.com/` en pestaña nueva, e Instagram como acción principal del club
- [x] 6.4 Comprobar `/`, `/contact/` y el menú móvil en 375 px y en 1440 px: etiqueta «Pilates & running» marcada como página actual en `/le-pr-club/`, sin desbordamiento horizontal desde 320 px
- [x] 6.5 Verificar en la pestaña de red que `/le-pr-club/` no hace peticiones a dominios externos al cargar
- [x] 6.6 Ejecutar `openspec validate pagina-cours-pilates-running --strict` y verificar que el cambio es válido

## Workflow follow-up

- Antes de desplegar, Virginia confirma los derechos de la fotografía de Cergy-Pontoise, el acuerdo del Centre Ann Lewis y de SI le Pilates para ser nombrados, y la grafía de las direcciones y los horarios.
- Archivar el cambio cuando la revisión esté hecha.
