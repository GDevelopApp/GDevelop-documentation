---
title: Extensión de vibración del dispositivo
---
# Extensión de vibración del dispositivo

Esta extensión le da acceso a la funcionalidad de vibración en dispositivos móviles.

### Acciones

#### Vibrar

Esta acción hace vibrar el dispositivo una vez por el valor dado en milisegundos. (valor numérico).

#### Vibrar por patrón

Esta acción hace vibrar el dispositivo en un patrón. Cada primer valor representa el tiempo de vibración, cada segundo el tiempo de silencio. Cada valor debe darse en milisegundos como una lista de valores numéricos separados por comas. // ¡No olvides las comillas! //

!!! note

         **Ejemplo: **"1000,500,1000"

    Un segundo de vibración, seguido de medio segundo de silencio y luego un segundo más de vibración.

#### Detener la vibración

Esta acción detiene la vibración después del intervalo de patrón actual.

![](/gdevelop5/all-features/devicevibrationevents.png)
