# Spec Delta

## MODIFIED Requirements

### Requirement: Vías de contacto directo y orientación al club
La página SHALL mostrar las vías de contacto directo (e-mail, Instagram y perfil de LinkedIn de Virginia) y una indicación para quien quiere reservar un curso de Pilates o una actividad del club, con un enlace a `/le-pr-club/`. La indicación MUST NOT nombrar el servicio de reservas externo.

#### Scenario: Contacto sin formulario
- **WHEN** una persona prefiere no usar el formulario
- **THEN** encuentra un enlace de e-mail y el enlace al Instagram de Virginia

#### Scenario: Persona que quiere reservar un curso
- **WHEN** una persona que busca un curso de Pilates lee la indicación de `/contact/`
- **THEN** encuentra un enlace interno que la lleva a `/le-pr-club/`, donde están los horarios y los botones de reserva
