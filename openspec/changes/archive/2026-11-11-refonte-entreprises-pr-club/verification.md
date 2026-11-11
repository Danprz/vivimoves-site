# Verificación (2026-11-11)

## Comprobaciones realizadas

- `npm run build` y `npm run check`: sin errores. Aviso esperado por la colección `blog` vacía.
- Enlaces internos y anclas de `dist/`: 69 comprobados, ninguno roto.
- Sin desbordamiento horizontal en 320, 375, 768 y 1440 px (medido en el navegador) ni a 720 px, equivalente al 200 % de zoom en 1440.
- Capturas de página completa en `.impeccable/review/`: 1440 px y equivalente a zoom 200 %. Las de 375 px se inspeccionaron en el panel del navegador; no se guardaron porque Chrome sin interfaz no baja de 500 px de ancho.
- Teclado: recorrido completo de `/le-pr-club/` (enlace de salto primero, foco visible de 2 px sobre fondos crema, mostaza y oscuro); menú móvil con Enter, Escape y devolución del foco.
- Formulario, sin enviar mensajes reales: validación propia, fallo de red, rechazo del servicio, éxito y doble envío con `fetch` simulado; validación nativa del navegador (equivalente a JavaScript desactivado) bloquea campo vacío y e-mail mal formado.
- Árbol de accesibilidad de `/contact/`: los seis campos exponen su etiqueta; errores con `aria-invalid` y `aria-describedby`; fallo con `role="alert"` y confirmación con `role="status"`.

## Auditoría técnica (Impeccable audit)

| Dimensión | Nota (0–4) | Observación |
|---|---|---|
| Accesibilidad | 4 | Contrastes ≥ 4,5:1 en texto; un `h1` por página; etiquetas y foco correctos. |
| Rendimiento | 4 | Imágenes WebP con `srcset`, máximo 282 kB; tres scripts pequeños sin dependencias. |
| Tematización | 4 | Todos los colores salen de tokens. Sin modo oscuro (no solicitado). |
| Responsive | 4 | Controles ≥ 44 px; sin anchos fijos. |
| Integridad | 4 | Detector de Impeccable sin hallazgos. |

Corregido tras la auditoría: la regla de movimiento reducido ya no anula las transiciones de color.

## Revisión de diseño (critique) y pulido

Corregido:
- En móvil, el formulario de contacto quedaba debajo de los bloques secundarios; ahora va justo después de la introducción.
- Signos `? : ; !` y comillas « » que saltaban solos de línea: espacios insecables en todos los textos.
- Opción del formulario en primera persona («Je ne sais pas encore») sustituida por «Pas encore défini».

Observado y no cambiado:
- La lista de cinco actividades de `/entreprises/` es larga y uniforme; es coherente con la dirección sobria elegida.
- Las páginas de empresa no tienen fotografías, por decisión; ganarán con fotos reales de intervenciones.

## Sin verificar

- Escucha real con VoiceOver u otro lector de pantalla.
- Respuesta 308 de las URLs antiguas en Vercel y envío real del formulario: requieren desplegar.
- Textos en francés: pendientes de validación por Virginia.
