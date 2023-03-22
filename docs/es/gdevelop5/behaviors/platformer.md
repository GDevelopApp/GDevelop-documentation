---
title: Comportamientos de Plataforma y de Personaje de plataforma
---
# Comportamientos de Plataforma y de Personaje de plataforma

!!! note

        **Véalos en acción!** 🎮
    [¡Prefiero ver los ejemplos de comportamiento de plataforma y de personajes de plataforma! Por favor, llévame allí ahora.](#Examples)

¡Con el simple clic de un botón, puedes configurar el comportamiento de "Plataforma" de tu juego, así como el control de un personaje de plataforma!

## Comportamiento de la plataforma (Platform behavior)

![select-platform-behavior.png](/gdevelop5/behaviors/select-platform-behavior.png) Como de costumbre, crea un nuevo objeto. Selecciona el objeto de la lista "Objetos" de la escena haciendo clic en la opción "Hacer clic para agregar un objeto". De la lista que aparece, selecciona "Editar objeto". Selecciona el comportamiento "Plataforma" de la lista que se muestra. Ahora puedes convertir tu objeto en una plataforma. Una vez que tu objeto se define como "Plataforma", tu objeto "Personaje de plataforma" puede caminar sobre él.

Después de seleccionar la opción "Plataforma", verás la lista de opciones de comportamiento de plataforma:

![platform-behavior-options.png](/gdevelop5/behaviors/platform-behavior-options.png)

### Tipo de plataforma

Al hacer clic en el comportamiento de la plataforma, puede elegir entre 3 tipos de plataformas diferentes.

![platform-type-button.png](/gdevelop5/behaviors/platform-type-button.png)

* **Plataforma (Platform):** ésta es la opción por defecto. El comportamiento predeterminado establece el objeto como una plataforma tradicional. El personaje puede chocar con la plataforma y/o caminar sobre ella. * **Plataforma (Jumpthru):** al elegir esta opción, el personaje puede chocar con la plataforma y caminar sobre ella, pero el personaje también puede saltar a través de la plataforma desde abajo. * **Escalera (Ladder):** como su nombre indica, esta opción convierte nuestro objeto en una escalera. El objeto de personaje no puede chocar con el objeto de escalera. No puede caminar sobre el objeto de escalera, pero cuando el objeto de personaje se superpone al objeto de escalera, el personaje puede subir y bajar.

### Agarrar la repisa (Grab the ledge)

El borde de nuestra plataforma se puede agarrar por defecto. "Agarrar el borde" significa que cuando el objeto de personaje salta lo suficientemente cerca del borde de la plataforma, se puede agarrar al borde. Si no necesitas esta funcionalidad, asegúrate de que esta opción esté desmarcada/deseleccionada. Si lo necesitas, asegúrate de que la casilla esté marcada/seleccionada. ![ledges-canbe-grabbed-option.png](/gdevelop5/behaviors/ledges-canbe-grabbed-option.png)

El desplazamiento del agarre también se puede cambiar en el eje Y. ![grab-offset-option.png](/gdevelop5/behaviors/grab-offset-option.png)

La opción de desplazamiento nos permite cambiar la posición de la captura para ajustar la animación de nuestro personaje.

## Comportamiento del personaje de plataformas (Platformer character behavior)

![select-platformer-character-behavior.png](/gdevelop5/behaviors/select-platformer-character-behavior.png)

Al seleccionar "Personaje de plataforma" de la lista, podemos convertir nuestro objeto en un "personaje de plataforma". Después de seleccionar la opción "Personaje de plataforma", se te presentarán las propiedades/parámetros de personaje de platforma. ![platformer-character-behavior-options.png](/gdevelop5/behaviors/platformer-character-behavior-options.png)

Es posible que debas desplazarte para ver todas las opciones.

### Controles (controls)

El comportamiento de los personajes de Platformer viene con las teclas predeterminadas establecidas para controlar el personaje. Estas teclas son las teclas de flecha y la tecla de cambio. Si no desea utilizar los controles predeterminados, debe desactivar los controles predeterminados desmarcando o desmarcando la casilla "Controles predeterminados" debajo de las opciones "Carácter de plataforma". ![](/gdevelop5/behaviors/platformer-defaultcontrols-box.png)

### Agarrarse al borde (Grab the ledge)

Al igual que con el comportamiento de plataforma, tenemos la opción "Agarrarse al borde" para el "personaje de plataforma". Esta opción permite que el objeto de personaje se sujete al borde de las plataformas. La opción está deshabilitada por defecto. Para habilitarlo, marca/selecciona la casilla en la lista de opciones. ![](/gdevelop5/behaviors/platformer-character-grabledge-box.png)

Si decides habilitar esta opción, el personaje puede agarrarse al borde de todas las plataformas que también tienen esta opción habilitada.

Nuevamente, al igual que con el "Comportamiento de plataforma", podemos establecer el desplazamiento de agarre en el eje Y para el personaje. A diferencia del comportamiento de plataforma, también podemos establecer la tolerancia de agarre en el eje X. ![](/gdevelop5/behaviors/platformer-character-grab-tolerancex.png)

Al cambiar el valor de tolerancia de agarre, podemos establecer cuán cerca debe estar el personaje de la plataforma para permitir que el personaje se agarre al objeto de plataforma.

### Pendiente ángulo máximo (Slope max angle)

![](/gdevelop5/behaviors/platformer-character-maximum-slope.png) Al cambiar este valor, podemos establecer el ángulo máximo de una pendiente que el jugador puede escalar. El valor predeterminado es 0. Cero significa que el personaje solo puede moverse sobre una superficie plana.

### Velocidad y Gravedad (Speed and Gravity)

![](/gdevelop5/behaviors/platformer-character-speed-options.png)

Al cambiar los valores correspondientes en las opciones de "Velocidad y Gravedad", podemos cambiar la rapidez con la que nuestro personaje acelera, desacelera, se mueve, cae y salta. Creo que estas opciones se explican por sí mismas, así que no creo que requieran mucha explicación. Si deseas ralentizar el objeto de personaje, puedes disminuir estos valores. Si deseas acelerar el objeto de personaje, puedes aumentar estos valores.

Todas las opciones de aquí también se pueden cambiar usando eventos en cualquier momento durante el juego.

# Ejemplos

!!! note

        **Véalo en acción** 🎮
    Abre los ejemplos Online.

**Comportamiento de plataformas (Platformer Behavior)**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://platformer){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/platformerbehavior.png)](https://editor.gdevelop.io/?project=example://platformer)


**Comportamiento de desplazamiento de paralaje (Parallax Scrolling Behavior)**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://parallax-scrolling){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/parallaxscrollingbehavior.png)](https://editor.gdevelop.io/?project=example://parallax-scrolling)
