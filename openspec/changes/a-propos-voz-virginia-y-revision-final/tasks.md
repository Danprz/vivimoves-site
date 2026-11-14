## 1. Fotografías de «Deux univers»

- [x] 1.1 Convertir `docs/prompts/top forme.HEIC` a `src/assets/a-propos-particuliers-salle.jpg` (orientación aplicada, 1600 px de lado mayor); hecho cuando el archivo se abre en vertical y pesa menos de 600 kB
- [x] 1.2 Convertir `docs/prompts/savencia.HEIC` a `src/assets/a-propos-entreprises-atelier.jpg` (1600 px de lado mayor); hecho cuando el nombre del archivo no contiene «savencia»
- [x] 1.3 En `src/pages/a-propos.astro`, importar las dos fotografías en la lista `univers`, con los textos alternativos del diseño y una posición de encuadre por imagen
- [x] 1.4 Quitar el campo `illustration` y el `figcaption` «Image d’illustration» de la sección, y el comentario de imágenes provisionales
- [x] 1.5 Ajustar `object-position` de cada fotografía en el navegador a 375 px y 1440 px hasta que la persona en primer plano y el grupo queden completos
- [x] 1.6 Buscar en `src/` los usos de `a-propos-univers-particuliers.webp`, `a-propos-univers-entreprises.webp`, `club-plein-air.jpg` y `format-cours-reguliers-01.webp`; eliminar los dos primeros y `docs/prompts/a-propos-univers-images.json` si nada los importa, y conservar los que sigan en uso

## 2. Bloque «Derrière Bliss, Virginia»

- [x] 2.1 Sustituir los tres párrafos por la versión en primera persona del diseño (decisión 1), sin cambiar el `h2` ni el retrato
- [x] 2.2 Cambiar el texto del enlace a «Voir mon profil LinkedIn»; hecho cuando sigue abriendo `https://www.linkedin.com/in/virginiavallejo94/` como enlace externo

## 3. Revisión con impeccable

- [x] 3.1 Cargar el contexto de impeccable una vez y ejecutar `critique` sobre `/`, `/entreprises/`, `/le-pr-club/`, `/a-propos/` y `/contact/` a 375 px y 1440 px, anotando cada hallazgo con su gravedad (P0 a P3)
- [x] 3.2 Ejecutar `audit` sobre las mismas cinco rutas: contraste, foco, objetivos táctiles, encabezados, textos alternativos, desbordamiento a 320 px, peso y dimensiones de imágenes
- [x] 3.3 Aplicar los hallazgos P0 a P2 que entran en los límites de la decisión 5 del diseño, leyendo `reference/craft-floor.md` antes de editar
- [x] 3.4 Listar para Virginia los hallazgos que exigen su decisión (textos, secciones, CTA, identidad) y los P3 no aplicados, sin ejecutarlos

## 4. Documentación

- [x] 4.1 Actualizar `PRODUCT.md`: excepción de la primera persona en el bloque de Virginia, hechos confirmados (reconversión desde la ingeniería, yoga tradicional y Ayurveda en Rishikesh) e inventario de fotografías reales con las dos nuevas
- [x] 4.2 Actualizar `DESIGN.md` y `.impeccable/surfaces/site.md` con la sección «Deux univers» definitiva y con los ajustes aplicados en la revisión

## 5. Verificación

- [x] 5.1 Ejecutar `npm run check` sin errores
- [x] 5.2 Ejecutar `npm run build` sin errores
- [x] 5.3 Buscar en `dist/` «savencia» (sin distinguir mayúsculas), «Image d’illustration» dentro de `/a-propos/` y archivos `.heic`; hecho cuando no hay ninguna coincidencia
- [x] 5.4 Comprobar en el texto visible de `dist/` que «je», «j’», «mon», «ma» y «mes», como palabras completas y fuera de las reseñas, solo aparecen en el bloque de Virginia de `/a-propos/`
- [x] 5.5 Comprobar que ninguna variante generada de las dos fotografías supera los 200 kB
- [x] 5.6 Revisar `/a-propos/` en el navegador a 320, 375, 768 y 1440 px: sin desbordamiento horizontal, fotografías a la misma altura en escritorio, títulos alineados, foco visible en los tres enlaces de la página
- [x] 5.7 Revisar en móvil y escritorio las demás rutas modificadas por la revisión, incluida la navegación con teclado
- [x] 5.8 Ejecutar `openspec validate a-propos-voz-virginia-y-revision-final --strict`
