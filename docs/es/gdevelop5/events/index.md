---
title: Eventos ![](/gdevelop5/event-screenshot.png) Los eventos en GDevelop te permiten programar visualmente tu juego sin ningún conocimiento o experiencia previa en programación, por lo que cualquier persona con cualquier fondo podrá crear el juego real y permitir que los jugadores interactúen con el juego.
---
# Eventos ![](/gdevelop5/event-screenshot.png) Los eventos en GDevelop te permiten programar visualmente tu juego sin ningún conocimiento o experiencia previa en programación, por lo que cualquier persona con cualquier fondo podrá crear el juego real y permitir que los jugadores interactúen con el juego.

### Tipos de eventos (Event types)

Hay diferentes tipos de eventos en GDevelop que pueden usarse para diferentes propósitos:

- [Standard event](/gdevelop5/events/standard): este evento es el predeterminado y se activa en cada fotograma. Ejecuta las acciones una vez que las condiciones son verdaderas, luego pasa al siguiente evento.
- [For Each event](/gdevelop5/events/foreach): este evento se activa para todas y cada una de las instancias del objeto seleccionado, verifica las condiciones y luego ejecuta las acciones para cada uno individualmente antes de pasar al siguiente evento.
- [Repeat event](/gdevelop5/events/repeat): este evento se repite la cantidad de veces especificada antes de pasar al siguiente evento.
- [While event](/gdevelop5/events/while): este evento se repite continuamente mientras se cumplen las condiciones especificadas y pasa al siguiente evento solo después de que las condiciones de este evento ya no sean ciertas.
- [Link](/gdevelop5/events/link): Este evento le permite llamar al evento externo especificado. Los eventos externos son eventos que no están vinculados a una escena específica. Puede llamarlos y ejecutarlos desde una o más escenas usando eventos de enlace.
- [Group](/gdevelop5/events/group): Un grupo contiene uno o más eventos. Es una forma fácil de organizar tus eventos en secciones. Puede contraer el contenido del grupo para ocultar los eventos en los que no está interesado cuando trabaja.
- [Javascript event](/gdevelop5/events/js-code): este evento le permite utilizar el código de Javascript junto con otros eventos

Los eventos pueden tener subeventos (a excepción de los enlaces, los comentarios y el código Javacript). Los subeventos solo se activan después de que se hayan ejecutado las acciones del evento principal. Si las condiciones del evento principal son falsas, entonces no se ejecuta ningún evento secundario.

Finalmente, los usuarios avanzados pueden crear sus propias acciones y condiciones usando [funciónes](/gdevelop5/events/functions). Es una forma de hacer que sus eventos sean aún más modulares y adaptados a su juego.

### Agregar eventos (Add events)

Para agregar eventos a nuestro juego, primero necesitamos cambiar al editor de eventos. Podemos hacerlo usando la pestaña del evento al lado de nuestra pestaña de escena. ![](/gdevelop5/objects/events-tab.png)

Después de eso, podemos encontrar las herramientas en la parte superior para agregar eventos. ![](/gdevelop5/events-editor-toolset.png) Como el tipo de evento más utilizado es el estándar y los subeventos, tenemos un botón rápido para usar en la parte superior. Para agregar un evento estándar podemos usar el botón agregar evento![](/gdevelop5/add-event-button.png) Para agregar eventos secundarios, primero debemos seleccionar un evento en el editor y luego hacer clic en el botón Agregar evento secundario ![](/gdevelop5/sub-event-button.png) Puede encontrar todas las opciones disponibles haciendo clic en el icono más ![](/gdevelop5/add-special-events.png)

### Añadir condiciones y acciones (Add conditions and Actions)

Después de agregar un evento, vamos a encontrar un evento en blanco en nuestro editor. ![](/gdevelop5/blank-event.png)

Podemos agregar cualquier número de condiciones y acciones a cada evento. Para agregar condiciones y acciones debemos hacer clic en agregar condición y agregar acción dentro del evento, luego podemos elegir entre muchas opciones ordenadas en diferentes categorías.

Para aprender más sobre cómo usar las diferentes condiciones y acciones, recomiendo leer los tutoriales y guías disponibles en la wiki: [](/gdevelop5/tutorials)
