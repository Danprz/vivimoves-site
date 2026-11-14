## Context

`/a-propos` (`src/pages/a-propos.astro`) ya tiene cuatro secciones: primer bloque con fotografía de fondo (`.hero`, clases compartidas en `src/styles/global.css`), «Notre conviction», «Deux univers, une même philosophie» (lista `univers` en el frontmatter, dos `article` con `figure`, imagen 3:2 con borde de 2 px ink) y «Derrière Bliss, Virginia» (retrato `virginia-studio.jpg` atenuado con `filter`, tres párrafos en tercera persona, enlace a LinkedIn). Las imágenes de «Deux univers» son provisionales: `club-plein-air.jpg` y una imagen generada con la leyenda «Image d’illustration».

Virginia aporta dos originales HEIC en `docs/prompts/`:

- `top forme.HEIC`, 5712 × 4284 px almacenados, mostrada en vertical (3:4): unas veinte personas de rodillas sobre tapis en una sala amplia de techo verde claro, con una participante de espaldas en primer plano, abajo en el centro. Varias caras reconocibles al fondo.
- `savencia.HEIC`, 4032 × 3024 px, horizontal (4:3): una decena de personas sentadas en una sala clara mirando una proyección en la pared; dos llevan chaleco naranja de alta visibilidad. No se ve ningún logotipo. Varias caras reconocibles.

La especificación `presentacion-empresa` sigue describiendo la página anterior (bloques «local» y «taille humaine», cuatro hechos con SAVENCIA y Rishikesh Yogpeeth) y prohíbe toda primera persona del singular. `PRODUCT.md` repite esa regla («nunca «je»»). La especificación `sistema-visual` no lista el fondo generado de `/entreprises` entre los usos admitidos de imágenes generadas.

El change `pagina-cours-pilates-running` está completo y sin archivar; modifica «Virginia en segundo plano» de `presentacion-empresa`, que este change no toca.

## Goals / Non-Goals

**Goals:**

- Que Virginia hable en primera persona en su bloque, sin extender el «je» al resto del sitio.
- Sustituir las dos imágenes provisionales por las fotografías reales, bien encuadradas y ligeras.
- Revisar las cinco páginas con impeccable y aplicar las correcciones de frontend y UX que resulten.
- Dejar especificaciones y documentación de producto fieles a lo publicado.

**Non-Goals:**

- Cambiar la oferta, los horarios, los lugares, la navegación o las rutas.
- Reescribir los textos que Virginia ha aportado (primer bloque, convicción, dos universos), salvo erratas.
- Rediseñar la identidad (paleta, tipografía, composición de los primeros bloques).
- Añadir dependencias, JavaScript de cliente nuevo o integraciones.

## Decisions

### 1. Texto del bloque en primera persona

Se conserva el titular «Derrière Bliss, Virginia» (tercera persona en el título: lo dice la marca y presenta a quien habla) y los tres párrafos pasan a «je», manteniendo frase a frase el texto aprobado:

> Ancienne ingénieure, j’ai choisi de me reconvertir pour faire de ma passion pour le mouvement mon métier et partager ses nombreux bienfaits sur le corps et l’esprit.
>
> Aujourd’hui coach sportive diplômée d’État, j’enseigne le Pilates sur tapis et sur reformer. Curieuse et animée par l’envie d’enrichir ma pratique, je suis également partie en Inde, à Rishikesh, pour me former au yoga traditionnel et à l’Ayurveda, la médecine traditionnelle indienne.
>
> À travers Bliss, je réunis mes expériences et mes inspirations pour proposer une approche du bien-être plus globale, accessible et humaine, où le mouvement, la découverte et le partage occupent une place essentielle.

Enlace: «Voir mon profil LinkedIn». El marcado sigue siendo `h2` + párrafos; no se usa `blockquote` ni comillas, porque no es una cita de un tercero sino el texto de la página.

Alternativa descartada: pasar toda la página a «je». Rompería la voz de empresa del resto del sitio y la regla de `PRODUCT.md`; la excepción se limita a un bloque identificado por su título.

### 2. Conversión y nombres de las fotografías

Los HEIC no se importan directamente (`astro:assets` no garantiza su lectura y pesan 4 MB y 1,3 MB). Se convierten una vez con `sips`, aplicando la orientación, a JPEG de 1600 px de lado mayor y se guardan como `src/assets/a-propos-particuliers-salle.jpg` y `src/assets/a-propos-entreprises-atelier.jpg`. `astro:assets` genera las variantes WebP (`widths` 384, 576, 768, como hoy). Los originales se quedan en `docs/prompts/` y no se publican.

El nombre «savencia» no pasa al archivo publicado ni al `alt`: la especificación prohíbe presentar a SAVENCIA como cliente.

### 3. Encuadre a 3:2

Se mantiene el gabarito actual (3:2, `object-fit: cover`, borde ink, radio 0,5 rem) para que las dos columnas sigan alineadas.

- Particulares: el original es vertical; el recorte 3:2 conserva la franja inferior-central, donde está el grupo, y descarta el techo. Se fija con `object-position` aproximado `50% 68%` y se ajusta en el navegador hasta que la participante en primer plano y la fila del fondo queden completas.
- Empresas: de 4:3 a 3:2 solo se pierde una franja arriba y abajo; `object-position` aproximado `50% 60%` para conservar a las personas sentadas y la proyección.

La lista `univers` admite un campo de posición por imagen; el campo `illustration` y el `figcaption` se eliminan porque ya no hay imagen generada en la sección.

Textos alternativos:

- «Cours collectif dans une grande salle : une vingtaine de personnes à genoux sur leur tapis.»
- «Atelier en entreprise : une dizaine de personnes assises dans une salle claire suivent une projection.»

No se aplica a estas dos fotografías el filtro de atenuación del retrato: son la prueba de sesiones reales y deben leerse con naturalidad.

### 4. Recursos sin uso

Si tras el cambio ningún archivo de `src/` importa `a-propos-univers-particuliers.webp` ni `a-propos-univers-entreprises.webp`, se eliminan junto con `docs/prompts/a-propos-univers-images.json`. `club-plein-air.jpg` y `format-cours-reguliers-01.webp` se conservan si otra página los usa; se comprueba con una búsqueda antes de borrar nada.

### 5. Revisión final con impeccable

Se ejecuta la skill con su flujo normal (carga de contexto una vez, `reference/critique.md` y `reference/audit.md`, `reference/craft-floor.md` antes de editar) sobre las cinco rutas, a 375 px y 1440 px, con comprobaciones puntuales a 320 y 768 px.

Qué se corrige sin preguntar:

- Incumplimientos de `sistema-visual` y de `DESIGN.md`: contraste, foco visible, objetivos táctiles de 44 px, desbordamiento, orden de encabezados, textos alternativos, saltos de maquetación, peso de imágenes.
- Incoherencias entre páginas: espaciados de sección, estilos de botones y enlaces, alternancia de fondos, alineación de columnas paralelas, etiquetas de enlaces repetidas o ambiguas.
- Detalles de acabado: viudas en titulares, anchos de línea, estados hover y focus, tratamiento desigual de las fotografías.

Qué se consulta antes de tocar:

- Cualquier cambio de texto aportado por Virginia más allá de una errata.
- Añadir, quitar o reordenar secciones, o cambiar un CTA de destino.
- Cambios de paleta, tipografía o composición de los primeros bloques.

Los hallazgos se anotan en la respuesta de la sesión de aplicación con su gravedad (P0 a P3); se aplican P0 a P2 y los P3 se listan como opcionales. No se crea un documento de auditoría en el repositorio.

### 6. Documentación

`PRODUCT.md` (voz: excepción del bloque de Virginia; hechos confirmados; inventario de fotografías reales), `DESIGN.md` y `.impeccable/surfaces/site.md` se actualizan en el mismo change, incluidos los ajustes que salgan de la revisión.

## Risks / Trade-offs

- [Personas reconocibles en las dos fotografías] → `PRODUCT.md` exige consentimiento para las fotografías reales. Se deja como confirmación pendiente de Virginia antes de publicar; si falta, la alternativa es un recorte más cerrado sobre personas de espaldas o volver a las imágenes sin personas.
- [Chalecos de alta visibilidad en la fotografía de empresa] → sitúan la escena en un entorno industrial concreto sin nombrarlo; el `alt` y el nombre de archivo se mantienen neutros.
- [Sala de techo verde y luz fluorescente, lejos de la paleta crema y mostaza] → el borde ink y la proporción común integran la imagen; si desentona en la revisión, se valora una desaturación leve, igual para las dos fotografías.
- [El «je» puede extenderse por descuido a otras páginas] → el escenario de la especificación lo limita al bloque de Virginia y la tarea de verificación lo busca en el HTML generado.
- [La revisión puede destapar más trabajo del previsto] → los límites de la decisión 5 acotan lo que se aplica; lo que quede fuera se presenta como lista, no se ejecuta.
- [Dos changes sin archivar tocan la misma capacidad] → este no modifica el requisito que ya modifica `pagina-cours-pilates-running`; conviene archivar aquel primero.

## Migration Plan

Sin migración de datos ni de rutas. El despliegue es el habitual en Vercel tras fusionar la rama. Para volver atrás basta con revertir el commit.

## Open Questions

- ¿Hay consentimiento de las personas que aparecen en las dos fotografías, y de la empresa donde se hizo el taller, para publicarlas?
- ¿Tiene Virginia derechos de uso de la fotografía de fondo del primer bloque de `/a-propos`?
