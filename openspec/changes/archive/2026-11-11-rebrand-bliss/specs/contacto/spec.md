# Spec Delta

## MODIFIED Requirements

### Requirement: Envío a la integración existente
El formulario SHALL enviar los datos por POST al endpoint de Formspree ya utilizado por el sitio, sin backend propio ni servicios añadidos, y SHALL identificar la consulta como procedente de la web de Bliss.

#### Scenario: Destino del envío
- **WHEN** se inspecciona el formulario generado
- **THEN** su `action` es el endpoint de Formspree existente y su `method` es POST

#### Scenario: Asunto con la marca vigente
- **WHEN** se inspecciona el asunto que el formulario envía a Formspree
- **THEN** nombra «Bliss» y no «Vivimoves»

### Requirement: Interlocutora identificada
La página SHALL presentar a Virginia como interlocutora, con su nombre, su condición de fundadora de Bliss y de coach sportive diplômée d'État, en un bloque secundario respecto al formulario.

#### Scenario: Bloque de interlocutora
- **WHEN** una persona abre `/contact/`
- **THEN** encuentra, junto a las vías de contacto directo y con menor énfasis que el formulario, quién responderá a su mensaje, presentada como fundadora de Bliss
