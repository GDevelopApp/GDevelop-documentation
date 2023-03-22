---
title: Agrega enemigos a tu juego de plataformas
---
# Agrega enemigos a tu juego de plataformas

!!! note

     Este tutorial es parte del tutorial [](/gdevelop5/ tutorials/ platform-game/ start), ¡pero también puedes reutilizarlo para cualquier otro juego donde tengas enemigos!

Añadamos un enemigo que se moverá hacia la izquierda y hacia la derecha en las plataformas. El jugador puede destruirlo saltando sobre él.

## Crea y agrega el objeto enemigo a tu escena

Crea un nuevo objeto "Sprite". Agrega las imágenes "slimeWalk1.png" y "slimeWalk2.png" a la primera animación y llama a esta animación "Caminar".

Dado que nuestro enemigo se moverá constantemente, no necesitamos una animación inactiva ni ninguna otra animación.

Establezca la animación en bucle haciendo clic en el botón "No hacer bucle", para voltearlo a "Bucle" y configure su velocidad de animación en "0.5" con el ícono del reloj.

La ventana debería verse así: ![](/gdevelop5/tutorials/platform-game/gd5_platormertut_slimeeditor.png)

Confirme los cambios haciendo clic en el botón "Aplicar".

A continuación, cambie el nombre del objeto a `Slime`. Agrega un objeto de limo a la escena, asegurándote de que quede justo en la parte superior de una plataforma.

Si ejecutamos la vista previa ahora, no hace mucho. Simplemente se sienta en silencio en la parte superior de la plataforma y reproduce la animación de caminar. Vamos a hacer que se mueva.

## Mueve al enemigo a izquierda y derecha

En este tutorial, nuestro limo se moverá hacia la izquierda y hacia la derecha. Vamos a hacer esto usando objetos invisibles: cuando el El limo tocará uno de los objetos, invertirá su dirección.

Añadamos dos objetos que actuarán como delimitadores. Crea un nuevo objeto sprite y agrega la imagen "Left.png". Nombra este objeto `left`. Luego, crea un objeto más y agrega la imagen "Right.png". Nombre este objeto "correcto".

Finalmente, coloque el objeto llamado "izquierdo" en el lado derecho de la plataforma y el objeto llamado "derecho" en el lado izquierdo de la plataforma.

Debe tener un aspecto como este: ![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_slimedirection.png)

La idea es que si el limo choca con el objeto llamado "izquierda", establecemos su dirección para moverse hacia la izquierda. Y si está chocando con el objeto llamado derecha, establecemos su dirección para que se mueva hacia la derecha.

Primero, vamos a crear una variable de objeto llamada "dirección" con el valor predeterminado "izquierda". Vamos a utilizar esta variable para cambiar la dirección.

Para agregar una variable de objeto a nuestro limo, haga clic derecho en el objeto de limo en la lista de objetos y elija "Editar variables de objeto".

Se muestra una ventana vacía. Contiene la lista de variables de objeto que hemos declarado para nuestro objeto de limo. Está vacío ahora como hemos declarado ninguno. Para agregar una variable de objeto, haga clic en el signo más en la esquina inferior derecha.

Esto agrega una variable llamada "Variable" en la ventana. Haga clic en el nombre y cámbielo a "dirección". Haga clic en el campo de valor y escriba "izquierda". La ventana debería verse así:

![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_objectvariable2.png)

Confirme los cambios haciendo clic en el botón Aplicar.

Ahora tenemos una variable de objeto llamada "dirección" con el valor predeterminado "izquierda".

Vamos a usar esta variable para hacer que nuestro limo se mueva.

En el editor de eventos, agregue un evento en blanco y agregue una condición para verificar el "Texto de la variable de un objeto". Puede encontrarlo en "Condiciones comunes para todos los objetos\> Variables\> Texto de la variable de un objeto".

En los parámetros, para el campo objeto seleccione "Slime". Para el campo Variable, seleccione "dirección" (o escriba "dirección" con el teclado). Para Signo de la prueba, seleccione "igual a" y finalmente, para el valor, ingrese "izquierda". **No te olvides de poner el valor entre comillas**.

La ventana debería verse así: ![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_objectvariable3.png)

Presione OK para confirmar y agregar la condición al evento.

Ahora vamos a agregar la acción para mover el limo a la izquierda.

Haga clic en "Agregar acción" y seleccione "Agregar una fuerza (ángulo)" en "Condiciones comunes para todos los objetos -\> Movimiento -\> Agregar una fuerza (ángulo)". Recuerde, siempre puede usar el cuadro de búsqueda para encontrar lo que está buscando.

En los parámetros, para el campo de objeto, seleccione "Limo" de nuevo. Para el ángulo, ingrese "180" grados (que es el lado izquierdo en el sistema de coordenadas GDevelop) y para velocidad ingrese 100.

La ventana debería verse así: ![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_moveslimeleft.png)

Presione OK para agregar la condición al evento.

Si ejecutamos la vista previa ahora, nuestro limo debería comenzar a moverse hacia la izquierda, pero es probable que note que sigue moviéndose y nunca cambie de dirección.

Esta vez vamos a comprobar la colisión entre el objeto Slime y el objeto llamado "derecho" y vamos a cambiar el valor de la variable de dirección a "derecho".

Agregue un evento en blanco y agregue una condición para verificar la colisión entre el Limo y el objeto llamado "derecho". Ya deberías saber cómo hacer esto. A continuación, agregue una acción para "Modificar el texto de una variable de un objeto".

En los parámetros, para el objeto seleccione Limo, para la variable seleccione "dirección", para el operador, elija "= (establecer en)". Finalmente, para valor ingrese "derecha". No olvides las comillas dobles.

La ventana debería verse así: ![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_checkobjectvariable.png)

Si ejecutamos la vista previa ahora, puede observar que no ocurre nada porque no le dijimos a GDevelop qué hacer si la dirección es "correcta".

Terminemos agregando los mismos dos eventos similares, pero invirtiendo "izquierda" por "derecha" y cambiando la dirección. Cuando haya terminado, los eventos deberían tener este aspecto (menos las acciones para voltear el sprite que agregaremos después):

![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_moveslimeevent1.png)

Ahora, si inicias una vista previa del juego, el limo debería moverse hacia la izquierda y hacia la derecha, pero se mantendrá orientado hacia la izquierda cuando te muevas. Vamos a voltear su orientación.

En la lista de acciones en el evento donde hacemos que el limo se mueva hacia la izquierda, agregue una acción para voltear el sprite horizontalmente. Para el objeto, seleccione "Limo" y para el valor, seleccione "No" (ya que no queremos que el objeto se invierta al moverse a la izquierda).

Repita lo mismo, pero esta vez para el evento utilizado para mover el limo a la derecha. Seleccione "Sí" esta vez porque queremos voltear el objeto cuando se está moviendo hacia la derecha.

El evento debería verse así:

![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_moveslimeevent2.png)

Ahora el limo se mueve hacia la izquierda y hacia la derecha y también tiene la orientación correcta cuando se mueve.

## Haz que el jugador mate al enemigo

Hagamos que el jugador destruya el limo cuando salta sobre él.

Agregue un evento en blanco con una condición para verificar si hay una colisión entre el jugador y el limo. Agrega una acción para eliminar el limo. Esto es como lo que [hicimos con las monedas](/gdevelop5/ tutoriales/ plataforma-juego/ 5-agregar-monedas-y-número-de-monedas-recolectadas) antes, pero esta vez con el Limo.

Si ejecutamos esto ahora, el limo debe eliminarse tan pronto como chocemos con él, pero esto no es lo que queremos. Queremos eliminarlo solo si el jugador salta encima de él.

Para hacer eso, agregue una condición más a nuestro evento: esta vez verifique si el jugador se está cayendo.

Ahora, si ejecutamos una vista previa, nuestro limo debe eliminarse cuando el jugador salta sobre el limo.

Todavía no es perfecto, ya que el jugador cae sobre el limo y el limo desaparece sin que el jugador salte.

Para hacer eso, agrega una acción más al evento. Elija esta vez la acción llamada "Permitir saltar de nuevo" (para el objeto "Jugador"). Luego, agregue otra acción llamada "Simular la acción de presionar la tecla de salto" para que salte (esto parecerá que el jugador está rebotando). Puede encontrar ambas acciones en la categoría "Comportamiento de Platformer".

En este punto el evento debería verse así:

![](/gdevelop5/tutorials/platform-game/gd5_platformertutoriual_killtheslime.png)

Ahora, si ejecuta la vista previa y salta en la parte superior del limo, el jugador debe rebotar suavemente en él y el limo desaparecerá.

## Haz que el enemigo mate al jugador

Ahora hagamos la lógica inversa: mata al jugador si el enemigo lo toca.

Agregue un evento en blanco y agregue la condición para verificar la colisión entre el jugador y el limo. Luego agrega una acción para eliminar el jugador.

Esto no va a funcionar, ya que podríamos eliminar el reproductor antes de que podamos eliminar el limo, o podríamos eliminarlo antes de que podamos eliminar el jugador.

Para evitar esto, agregue una condición más a nuestro evento, verificando si el jugador está en el piso.

Ahora, si ejecutamos la vista previa, deberíamos poder matar el limo saltando sobre él y el limo debería poder matar al jugador si el jugador está en el suelo en el momento de la colisión.

## Ocultando los delimitadores de la plataforma.

Lo último que debemos hacer ahora es ocultar los objetos de flecha "izquierda" y "derecha". Para hacerlo, agregue un evento con la condición 'Al principio de la escena' (que se activará solo una vez cuando comience la escena) y la acción para "ocultar el objeto a la izquierda" y "ocultar el objeto a la derecha" .

Los eventos de este tutorial hasta ahora deberían verse así:

![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_enemycompletevent.png)

Ahora, si ejecuta una vista previa, el objeto izquierdo y derecho con la flecha debe estar oculto, el limo debe moverse hacia la izquierda y la derecha constantemente. Podemos matar el cieno saltando sobre él y el limo debería poder matar al jugador cuando colisiona con él mientras está en el suelo.

## Siguiente paso: agregar puntos de control

Por ahora, la "muerte" del jugador es un poco brutal: simplemente la eliminamos. Hagamos que vuelva a aparecer en el último punto de control que cruzó. Los puntos de control son esenciales en un juego de plataformas si no quieres forzar a tu jugador a comenzar de nuevo desde el principio cuando muera (lo que puede ser interesante, ¡pero también frustrante!).

Lee el siguiente tutorial **[Puntos de control](/es/gdevelop5/ tutorials/ platform-game/ 7-checkpoints)**!
