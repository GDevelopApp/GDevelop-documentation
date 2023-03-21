---
title: Añadir un objeto de fondo (Add a background objects)
---
# Añadir un objeto de fondo (Add a background objects)

!!! note

     Este tutorial es parte del tutorial [](/gdevelop5/ tutorials/ platform-game/ start), ¡pero también puedes usarlo para cualquier otro juego! 

En este momento el nivel es bastante simple sin las cosas elegantes. Vamos a añadir algunos objetos estáticos en el fondo.

## Crear objetos

Agregar objetos en el fondo es realmente fácil: solo agrega algunos sprites con las imágenes que deseas y colócalos en la escena.

Por ejemplo, cree un objeto `Sprite`, agregue una animación y agregue la imagen` bush`:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_22.45.14.png)

Puede nombrar a este objeto `Bush`, y también agregar otro objeto con la imagen` cloud`:

![](/ gdevelop5/ tutoriales/ platform-game/ screen_shot_2017-09-27_at_22.46.01.png)

## Poner objetos en la escena y cambiar el orden z

Si agrega objetos a la escena, puede ver que el reproductor se muestra detrás de ellos:

![](/ gdevelop5/ tutoriales/ platform-game/ screen_shot_2017-09-27_at_22.52.10.png)

Cada instancia en la escena tiene una propiedad que se llama **orden z**. Es un número y los objetos con un orden Z superior se mostrarán frente a los objetos con un orden Z inferior. El orden Z puede ser cualquier número y también puede ser negativo.

Aquí, puede cambiar el orden Z de los arbustos y las nubes para establecerlos como negativos, de modo que el carácter del jugador (con un orden Z que debería ser 1) se muestre delante de ellos. Para ello, selecciona las instancias en la escena. Puede seguir presionando MAYÚS en su teclado para seleccionar más de un objeto:

![](/ gdevelop5/ tutoriales/ platform-game/ screen_shot_2017-09-27_at_22.59.47.png)

Luego, cambie el valor del campo "Orden Z" en el * Panel de propiedades * a la izquierda. Por ejemplo, -2 (o cualquier número negativo) se asegurará de que estos objetos estén detrás del jugador:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_23.00.40.png)

Ahora tenemos el resultado visual que queríamos:

![](/ gdevelop5/ tutoriales/ platform-game/ screen_shot_2017-09-27_at_23.01.44.png)

¡Lanza una vista previa para comprobar que todo funciona bien!

## Siguiente paso: agregue monedas y muestre cuántas se han recolectado

Agreguemos un objetivo para el jugador: ¡recoger tantas monedas como sea posible! Para hacer esto, usaremos eventos para recordar la puntuación del jugador, reproducir sonidos y eliminar las monedas recolectadas.

Lea **[la siguiente parte del tutorial aquí](/es/gdevelop5/ tutorials/ platform-game/5-add-coins-and-number-of-collected-coins)**!
