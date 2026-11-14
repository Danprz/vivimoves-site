# Proposal

## Why

La etiqueta «Communauté» y la página `/le-pr-club` hablan del espíritu del club, pero no dicen qué se puede reservar, dónde ni cuándo. Virginia tiene ahora una oferta estable para particulares (Pilates tapis semanal en un lugar fijo, Pilates Reformer en un estudio y las salidas running del club) y el sitio debe convertirla en la entrada clara para reservar.

## What Changes

- La página `/le-pr-club` pasa de presentar el club a ser la página de cursos para particulares, con cuatro bloques en este orden:
  1. **Primer bloque con fotografía de fondo** de Cergy-Pontoise (`docs/prompts/cergy-pontoise.jpg`), compuesto como el de la portada: titular «Trouvez votre prochain cours à Cergy-Pontoise», la frase sobre los cursos de Pilates tapis y Reformer y la invitación a unirse a Le PR Club.
  2. **Pilates tapis**: Centre Ann Lewis, 5 rue Alexandre Prachay, Pontoise; lundi y mardi a las 19h30, vendredi a las 12h30; reserva por el enlace de reservas del club.
  3. **Pilates Reformer**: SI le Pilates, 24 rue Pierre Butin, Pontoise; mardi, mercredi y jeudi a las 11h, 12h y 13h; reserva en `https://si-lepilates.com/`.
  4. **Le PR Club**: salidas running gratuitas, con Instagram como canal principal y el enlace de reservas como acceso secundario.
- **BREAKING** (contenido): la página publica días, horas y direcciones de los cursos recurrentes y la gratuidad de las salidas running, que las specs actuales prohíben. Siguen sin publicarse precios, plazas ni disponibilidad.
- **BREAKING** (contenido): «Bookwhen» deja de nombrarse en los textos visibles de todo el sitio; solo queda como destino de los enlaces de reserva. Afecta a `/le-pr-club` y a `/contact`.
- La etiqueta de navegación «Communauté» pasa a «Pilates & running» en la cabecera y en el pie; la ruta `/le-pr-club/` no cambia.
- El bloque de la portada deja de titularse «Communauté» y anuncia los cursos, con un botón que lleva a `/le-pr-club/`.
- Virginia puede nombrarse como quien anima los cursos en los bloques de Pilates de `/le-pr-club`; sigue fuera del primer bloque de cualquier página y de los textos propios de la portada.
- Se retiran de `/le-pr-club` los bloques «L’esprit du club», «Rejoignez le mouvement» y «Qui est derrière le club ?»; la mención de Virginia como fundadora pasa al bloque del club. Se conservan la reseña de Google y la banda final hacia la oferta para empresas.
- `/contact` orienta hacia `/le-pr-club/` a quien quiere reservar un curso, en lugar de enviar directamente a la agenda externa.
- Se actualizan `PRODUCT.md`, `DESIGN.md` y `.impeccable/surfaces/site.md` para reflejar la nueva navegación, el segundo bloque con fotografía de fondo y las reglas de contenido.

Todo se resuelve con el stack actual (páginas `.astro`, `astro:assets`, tokens de `src/styles/global.css`), sin dependencias nuevas, sin JavaScript de cliente y sin integrar la agenda externa.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `le-pr-club`: la página pasa a presentar los cursos reservables (tapis, Reformer) y el club; se permiten horarios, lugares y gratuidad de las actividades recurrentes; el enlace de reservas deja de nombrar a Bookwhen; cambian el primer bloque, el bloque de la portada y el uso de las fotografías.
- `estructura-y-migracion`: la etiqueta de navegación «Communauté» pasa a «Pilates & running».
- `presentacion-empresa`: Virginia puede aparecer como interviniente en los bloques de cursos de `/le-pr-club`.
- `contacto`: la orientación para reservar un curso lleva a `/le-pr-club/` y no nombra a Bookwhen.
- `sistema-visual`: `/le-pr-club` incorpora un primer bloque con fotografía real de fondo; el requisito sobre la fotografía de la terraza deja de depender del bloque «Rejoignez le mouvement».
- `resenas-clientes`: se actualiza la lista de secciones que no pueden alojar la reseña, al desaparecer «L’esprit du club».

## Impact

- Código: `src/pages/le-pr-club.astro` (reescritura), `src/pages/index.astro` (bloque del club), `src/pages/contact.astro` (orientación), `src/components/Header.astro` y `src/components/Footer.astro` (etiqueta), `src/consts.ts` (URL de SI le Pilates), un nuevo módulo de datos para los cursos y una nueva imagen en `src/assets/`.
- Documentación: `PRODUCT.md`, `DESIGN.md`, `.impeccable/surfaces/site.md`.
- Mantenimiento: los horarios pasan a vivir en el sitio; cada cambio de día, hora o lugar exige editar el módulo de datos y volver a desplegar.
- Externo: un enlace nuevo a `https://si-lepilates.com/`. Sin peticiones a terceros al cargar la página.
- Pendiente de Virginia antes de publicar: derechos de uso de la fotografía de Cergy-Pontoise y acuerdo de SI le Pilates y del Centre Ann Lewis para ser nombrados (ver `design.md`).
