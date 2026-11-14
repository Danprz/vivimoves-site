## Why

La página «À propos» se reescribió en cuatro secciones, pero quedan dos puntos provisionales: el bloque «Derrière Bliss, Virginia» habla de ella en tercera persona, cuando Virginia quiere dirigirse al visitante con su propia voz, y la sección «Deux univers, une même philosophie» muestra dos imágenes de relleno en lugar de fotografías reales de sus sesiones. Además, tras varias iteraciones seguidas (página de cursos, banner de `/entreprises`, nueva «À propos»), el sitio necesita una revisión de conjunto de frontend y UX antes de darlo por terminado, y la especificación `presentacion-empresa` ya no describe la página publicada.

## What Changes

- El bloque «Derrière Bliss, Virginia» de `/a-propos` pasa a primera persona del singular («j’ai choisi…», «j’enseigne…», «je réunis…») y su enlace se lee «Voir mon profil LinkedIn». Es la única excepción a la voz de empresa «nous»; el resto del sitio no cambia de voz.
- Las dos imágenes de «Deux univers» se sustituyen por fotografías reales aportadas por Virginia: `docs/prompts/top forme.HEIC` (sesión colectiva en una sala, «Pour les particuliers») y `docs/prompts/savencia.HEIC` (taller con un grupo sentado en una sala de empresa, «Pour les entreprises»). Se convierten a un formato web, se recortan a 3:2 y desaparece la mención «Image d’illustration» de esa sección.
- La fotografía de empresa se publica sin nombrar a SAVENCIA: ni en el nombre del archivo, ni en el texto alternativo, ni en una leyenda.
- Se retiran los recursos que dejan de usarse (las dos imágenes generadas `a-propos-univers-*.webp` y su ficha de prompts) si ninguna página los importa.
- Revisión final con la skill impeccable (`critique` y `audit`) de las cinco páginas (`/`, `/entreprises/`, `/le-pr-club/`, `/a-propos/`, `/contact/`) en móvil y escritorio, y aplicación de las correcciones que resulten, dentro de los límites fijados en el diseño (sin cambiar hechos, oferta ni textos aportados por Virginia sin preguntar).
- Puesta al día de las especificaciones con la página «À propos» ya publicada (cuatro secciones, hechos confirmados actualizados, fondo fotográfico) y con el fondo generado de `/entreprises`.
- Sin dependencias nuevas ni cambios de arquitectura: Astro estático, `astro:assets`, tokens de `src/styles/global.css`.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `presentacion-empresa`: la voz de empresa admite la primera persona en el bloque de Virginia de `/a-propos`; la página de la empresa se describe con sus cuatro secciones actuales; los hechos confirmados sobre Virginia se actualizan (reconversión desde la ingeniería, yoga tradicional y Ayurveda en Rishikesh); el contenido de «À propos» ya no incluye los bloques «proposition locale» y «taille humaine»; SAVENCIA tampoco puede aparecer en nombres de archivo ni textos alternativos.
- `sistema-visual`: las imágenes generadas quedan también admitidas como fondo del primer bloque de `/entreprises`; se añaden requisitos para el primer bloque fotográfico de `/a-propos` y para las dos fotografías reales de «Deux univers».

## Impact

- Código: `src/pages/a-propos.astro` (texto del bloque de Virginia, imágenes y leyendas de «Deux univers»); nuevos archivos en `src/assets/`; posibles retoques en `src/styles/global.css`, componentes y páginas según los hallazgos de la revisión.
- Recursos: dos fotografías nuevas convertidas desde HEIC; baja de `src/assets/a-propos-univers-particuliers.webp`, `src/assets/a-propos-univers-entreprises.webp` y `docs/prompts/a-propos-univers-images.json` si quedan sin uso.
- Documentación: `PRODUCT.md`, `DESIGN.md` y `.impeccable/surfaces/site.md` (voz, hechos confirmados, inventario de fotografías).
- Pendiente de confirmar por Virginia: consentimiento de las personas reconocibles en las dos fotografías y derechos de la fotografía de fondo de `/a-propos`.
- SEO y rutas: sin cambios de URL; se conserva un `h1` por página y la descripción de `/a-propos`.
