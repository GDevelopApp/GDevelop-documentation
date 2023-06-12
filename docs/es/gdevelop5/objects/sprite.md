---
title: Objetos Sprite (Sprite object)
---
# Objetos Sprite (Sprite object)

!!! note

        **Vélo en acción!** 🎮
    [¡Prefiero ver los ejemplos de objetos de Sprite! Por favor, llévame allí ahora.](#Examples)

Los objetos Sprite son los objetos más utilizados en GDevelop.

Un objeto sprite nos permite mostrar una imagen o reproducir una serie de imágenes como animación. Un objeto sprite se puede utilizar para muchas cosas en nuestros juegos. Botones, personajes y plataformas son todos considerados objetos. Cualquier cosa que se pueda representar con una imagen puede ser un objeto sprite.

### Cómo crear un objeto sprite

Para agregar un sprite a su escena, seleccione la opción "haga clic para agregar un objeto" que se encuentra a la derecha en la parte inferior de la lista de Objetos.

![](/gdevelop5/objects/clicktoaddanobject.png)

Se abrirá un nuevo panel que le presenta una lista de opciones.

![](/gdevelop5/tutorials/platform-game/gd5_object_types1.png)

Elige "Sprite" de la lista para crear un nuevo objeto sprite en la escena de tu juego. ![](/gdevelop5/objects/select-sprite.png)

Una vez que hayamos creado nuestro sprite, haga clic derecho en el objeto sprite en la lista de Objetos. Seleccione "Editar objeto" en el menú emergente. Esta selección abrirá la ventana de propiedades del objeto. Las propiedades son diferentes para cada tipo de objeto. Si el objeto es un sprite, veremos algo como esto.

![](/gdevelop5/objects/sprite-object-properties.png)

### Agregar animacion

A continuación, queremos hacer clic en el botón Agregar animación. ![](/gdevelop5/objects/add-animation-button.png)

Ahora deberíamos ver de qué se trata un objeto sprite. ![](/gdevelop5/objects/animation-properties.png)

En esta pantalla, agregamos imágenes a su objeto haciendo clic en el símbolo más. ![](/gdevelop5/objects/add-symbol.png)

A continuación, debemos buscar en nuestra computadora una imagen y seleccionar una. Una vez hecho esto, la imagen de pesar se mostrará en la ventana. ![](/gdevelop5/objects/add-image.png)

Si dejamos la imagen como está, nuestro objeto sprite mostrará una sola imagen cuando se agregue a nuestra escena. ¡Pero también podemos agregar imágenes adicionales para crear una animación! ![](/gdevelop5/objects/add-animation.png)

### Nombra la animación

También podemos nombrar la animación de arriba para que podamos referirnos a esta animación usando su nombre. ![](/gdevelop5/objects/name-animation.png)

Si no ingresamos un nombre, necesitamos usar el número de animación para referirnos a esta animación.

### Velocidad de la animación

También podemos establecer la velocidad de la animación cambiando el valor con el ícono del reloj. ![](/gdevelop5/objects/set-animation-speed.png)

El valor que ingresamos aquí es básicamente el tiempo transcurrido entre cada cuadro. 1 es 1 segundo, pero también podemos ingresar valores más pequeños, como 0.5, por ejemplo, para una reproducción más rápida.

### Repite la animación

Por defecto, cada animación se reproduce solo una vez, lo que significa que cuando finalice el último fotograma de la animación, se detendrá. En algunos casos, se prefiere repetir o "hacer un bucle" de la animación. Esto se hace configurando la animación en "bucle" haciendo clic en el icono de repetición. ![](/gdevelop5/objects/set-animation-loop.png) Una vez que una animación está configurada para hacer un bucle, se reproducirá continuamente.

### Añadir animaciones múltiples

También podemos añadir múltiples animaciones. Para agregar animaciones, haga clic en el botón "agregar animación" de la misma manera que lo hicimos la primera vez. Esta característica nos permite separar fácilmente las diferentes animaciones. ![](/gdevelop5/objects/multiple_animations.png)

Más tarde, podemos cambiar entre las animaciones usando eventos.

Finalmente, para guardar las propiedades del sprite, haga clic en el botón "Aplicar" ubicado en la esquina inferior derecha del panel.

![](/gdevelop5/objects/createspriteapply.png)

Para agregar el objeto sprite a nuestra escena, simplemente selecciónelo y haga clic en la escena para agregar una instancia del objeto a nuestra escena.

Tu nuevo sprite ahora está completo, pero aún debes agregarlo a la escena de tu juego. Haga clic en el nuevo sprite en la lista de objetos. A continuación, haga clic en la escena donde desea agregar el sprite. Ahora verás tu sprite agregado a la escena. Puedes agregar múltiples "instancias" de tu sprite a tu pantalla de juego. Simplemente repita el proceso para agregar el primer sprite.

<div class="video-container">
  <video controls>
    <source src="/gdevelop5/objects/addspritetoscenecompressed.mp4">
  </video>
</div>

### Más información sobre animaciones múltiples mientras usas eventos.

El uso de eventos para cambiar la animación se puede hacer creando múltiples animaciones, como se explicó anteriormente, cada una con sus propias imágenes de entrada personal. Si configura el reloj entre 0 y 1, se asegurará de que permanezca activo cuando use eventos.

**NOTA: A diferencia de otro software, ⇐ -1 deshabilita las acciones del evento. _No utilice valores negativos._**

Cuando haya configurado varias animaciones para un objeto, puede usar la pestaña de eventos para '**'establecer la animación por nombre**'. Esto se controla en la sección *Agregar acción* de la condición. Permitirá cualquier condición que use en la sección de *agregar condición* para cambiar a la animación correcta cuando ocurra el evento.

![](/gdevelop5/objects/eventanimationexample.png)

NOTA: Como costumbre, asegúrese de agregar un nombre a su animación usando la sección de nombre en las propiedades de los objetos:

![](/gdevelop5/objects/animationnaming.png)

Luego ponga ese nombre dentro de la acción del evento con "" a su alrededor: ![](/gdevelop5/objects/eventanimnameexample.png)

Para más detalles del evento, siga los [tutoriales](http://wiki.compilgames.net/doku.php/gdevelop5/tutorials).

## Ejemplos

!!! note

        **Véalo en acción!** 🎮
    Abra estos ejemplos en línea.

[![](/gdevelop5/objects/createasprite.png)](https://editor.gdevelop.io/?project=example://change-scale-of-sprites)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://change-scale-of-sprites){ .md-button .md-button--primary }

[![](/gdevelop5/objects/changespriteanimationexample.png)](https://editor.gdevelop.io/?project=example://change-sprite-animation)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://change-sprite-animation){ .md-button .md-button--primary }

[![](/gdevelop5/objects/changespritecolorexample.png)](https://editor.gdevelop.io/?project=example://change-sprite-color)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://change-sprite-color){ .md-button .md-button--primary }

[![](/gdevelop5/objects/changespriteanimationexample2.png)](https://editor.gdevelop.io/?project=example://play-stop-sprite-animation)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://play-stop-sprite-animation){ .md-button .md-button--primary }
