---
title: Agregar puntos de control a tu juego
---
# Agregar puntos de control a tu juego

Terminamos el tutorial anterior eliminando el jugador cuando choca con el enemigo. Esta no es la forma en que funciona en la mayoría de los juegos. Generalmente, en lugar de eliminar al jugador, un juego tendrá un "punto de control". El "punto de control" guarda el estado del juego y el estado del jugador en variables. Luego, si el jugador muere, el juego y / o el jugador se reinician desde el "punto de control".

Para este tutorial, guardar el estado de todo el juego y el estado del jugador puede ser un poco demasiado avanzado. En cambio, cuando un jugador colisiona con un objeto de "punto de control", vamos a almacenar la posición del objeto de "punto de control" dentro de las variables. Además, en lugar de eliminar al jugador, vamos a restablecer su posición a lo que esté almacenado dentro de las variables.

### Crear un objeto de punto de control

Empecemos creando un nuevo objeto sprite en nuestro juego. Llámalo "punto de control". Puede ser cualquier imagen de sprite .jpg o .png que tengas. Voy a usar un sprite de cactus.

![](/gdevelop5/tutorials/platform-game/checkpoint-object.png)

A continuación, agregue el objeto sprite a la escena. Su imagen de sprite puede ser demasiado grande o demasiado pequeña. Utilice los manillares en el sprite para cambiar el tamaño de la imagen. En mi caso, será el objeto sprite de cactus como se muestra arriba. Colóquelo en la escena donde desee tener un "punto de control". Puedes agregar tu objeto sprite a múltiples lugares en tu escena. De esa manera, puede establecer múltiples "puntos de control".

### Añadir eventos

Ahora que tenemos los objetos de "punto de control" en nuestra escena, agreguemos los eventos. Comenzamos con una condición para verificar si hay una colisión entre el "jugador" y el "punto de control". Si ocurre la colisión, almacenamos las posiciones X e Y del objeto sprite "checkpoint" en una variable de escena llamada checkpointX y checkpointY.

![](/gdevelop5/tutorials/platform-game/checkpoint_Var.png)

![](/gdevelop5/tutorials/platform-game/checkpoint_event.png)

Arriba, estamos utilizando _expresiones_ para obtener las posiciones X e Y del objeto de "punto de control". Esto se hace de manera similar a la forma en que actualizamos el texto de puntuación. Puede encontrar más _expresiones_ en el _editor de expresiones_ haciendo clic en el icono azul al lado de los campos de valor:

![](/gdevelop5/tutorials/platform-game/expression-icon.png)

Cuando hace clic en el icono azul, puede buscar todas las expresiones disponibles ordenadas en categorías.

![](/gdevelop5/tutorials/platform-game/expression-editor.png)

La condición ahora almacena la posición X e Y del objeto "punto de control" con el que nuestro objeto "Jugador" ha colisionado. Entonces, en lugar de eliminar el objeto sprite "Player", establecemos sus posiciones X e Y usando las variables.

![](/gdevelop5/tutorials/platform-game/expression_playerPosition.png)

![](/gdevelop5/tutorials/platform-game/checkpoint-event2.png)

En el ejemplo anterior, estamos usando otro conjunto de expresiones para obtener el valor de las variables almacenadas y pasarlas a la posición "Jugador".

### Resolviendo errores

En caso de que sigas el ejemplo y también hayas seleccionado el cactus para el "punto de control", ¡también puedes notar que acabamos de crear un error! Nuestro personaje jugador es más alto que el cactus. Cuando establecemos la posición Y del jugador, en realidad establecemos la posición demasiado baja y nuestro jugador se queda atascado en el suelo. 8-o

![](/gdevelop5/tutorials/platform-game/checkpoint_bug.png)

En este caso particular, podemos resolver fácilmente el problema escalando el sprite de cactus en el eje Y para que sea tan alto o incluso más alto que el jugador. Ya que, a estas alturas, ya sabe cómo escalar / cambiar el tamaño de un sprite, veamos cómo hacerlo utilizando un enfoque un poco más desafiante, pero también más preciso. Usemos las matemáticas para solucionar el problema.

![](/gdevelop5/tutorials/platform-game/checkpoint-bug-fix.png)

Estoy usando una solución más compleja para mostrarle lo poderosas que pueden ser las expresiones. Mi solución es establecer la posición Y del jugador usando una variable. Yo, entonces, resto la altura del "punto de control" de la altura del "jugador". De esta manera, obtengo la diferencia en altura de jugador y "punto de control". Puedo terminar la solución restando esa diferencia de lo que sea que devuelva la variable.

Una solución menos difícil, pero una que todavía use matemáticas, sería restar, digamos, 30, del valor de la variable.

![](/gdevelop5/tutorials/platform-game/checkpoint-bug-fix-simple.png)

Al utilizar la solución más fácil junto con la prueba y el error, puede encontrar el número que funcione mejor. Sin embargo, para obtener un valor exacto, te he dado un ejemplo más complicado de qué usar.

También podría preguntarse por qué estoy restando de la Y en lugar de agregar el valor a la Y. El problema es que la altura del "punto de control" es más baja que la del "Jugador". Eso significa que necesito poner el jugador más alto. Observe que los valores en el eje Y aumentan de arriba a abajo. El eje Y comienza en 0 en la parte superior. Aumenta a medida que se mueve hacia abajo. Técnicamente, necesito un valor más bajo para mover algo más alto. :-)

![](/gdevelop5/tutorials/platform-game/2d-coordinates.png)

La mayoría de los motores 2D funcionan de esta manera. Comenzamos en la esquina superior izquierda que es la coordenada 0,0. Aumentamos el primer número de coordenadas que va a la derecha a medida que seguimos en el eje X. y aumentamos el segundo número de coordenadas que va hacia abajo en el eje Y. Puedes ver cómo se aplica esto en la imagen de arriba.

Ahora, si ejecutamos una vista previa y nuestro jugador muere, su posición se establecerá en los últimos valores guardados del "punto de control". ¡Pero hay un error más! Si nuestro jugador muere antes de chocar con cualquier "punto de control", las variables devolverán un valor de 0, por lo que nuestro jugador reaparecerá / reaparecerá en la posición 0,0, que es la esquina superior izquierda, como se indica en la gráfica de arriba. .

Podemos solucionar fácilmente este problema configurando los valores predeterminados para que los valores del punto de control sean la posición inicial del jugador al comienzo de la escena.

![](/gdevelop5/tutorials/platform-game/checkpoint-bug2-fix.png)

Entonces, cuando nuestra escena comienza, es de esperar que ya tengamos a nuestro jugador en la posición y simplemente obtengamos la posición del jugador y almacenemos la posición del jugador como la posición de "punto de control". En caso de que el jugador muera antes de colisionar con cualquiera de los puntos de control, usamos las variables de posición originales del jugador para establecer su posición al comienzo de la escena.

### Mejorar el sistema

Usando lo que ha aprendido hasta ahora, puede intentar agregar texto para mostrar un mensaje si llegamos a un punto de control. Entonces quizás, reproduzca una animación para hacer que el cactus salte o algo más para que sea más interesante.
