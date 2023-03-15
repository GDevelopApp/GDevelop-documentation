---
title: Crea monedas y muestra la cantidad de monedas recolectadas.
---
# Crea monedas y muestra la cantidad de monedas recolectadas.

!!! note

     Esta página es parte del tutorial. [](/gdevelop5/ tutorials/ platform-game/ start), pero también se puede reutilizar para cualquier otro juego, solo reproduce los elementos. 

En el juego de plataformas que hemos creado hasta ahora, el jugador tiene mucho que hacer: vamos a poner monedas para que el jugador las recoja.

## Añadir monedas

Comienza creando un nuevo objeto "Sprite" con una animación con la imagen "coinGold":

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-28_at_23.29.30.png)

Puedes llamar a este objeto "Moneda".

A continuación, puede poner varias monedas en el nivel. Como necesitarás varias monedas, es una buena idea usar la función "arrastrar y clonar" del editor de escenas: selecciona una moneda, sigue presionando Ctrl (o Cmd en macOS) y arrastra la moneda. Esto lo duplicará.

Si mantiene presionada la tecla Mayús mientras se mueve, también podrá mover la moneda creada en el mismo eje que la original.

![](/gdevelop5/tutorials/platform-game/clone.gif)

## Eliminar monedas cuando se recogen

Ahora, destruyamos el objeto de la moneda cuando el jugador los toca. Agrega un nuevo evento y agrega una condición. Elija la condición para probar una colisión entre dos objetos. El primer objeto debe ser "Jugador" y el segundo objeto debe ser "Moneda":

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-28_at_23.36.12.png)

A continuación, puede agregar una acción que eliminará la moneda. La acción solo utilizará los objetos de Monedas que se hayan recogido en la primera condición, por lo que solo se eliminará la moneda que chocó con el jugador.

Agregue la acción "Eliminar un objeto" (de la categoría "Acciones comunes para todos los objetos\> Objetos") e ingrese Moneda como el objeto a eliminar:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-28_at_23.41.46.png)

El evento debería verse así:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-28_at_23.42.34.png)

Ahora puede iniciar una vista previa y ver que la moneda se elimina cuando el jugador corre sobre ellos.

## Reproducir un sonido al recoger una moneda

Para hacer que el juego se sienta más dinámico y gratificante, vamos a reproducir un sonido cuando se recoge una moneda.

Es fácil: ya tenemos un archivo de sonido llamado `coin.wav` en nuestra carpeta del juego (si ese no es el caso, puedes [descargar los recursos aquí](http://www.compilgames.net/dl/PlatformerTutorialResources.zip) y extraerlos en la carpeta del juego).

Es algo que no hemos hecho antes: podemos agregar varias acciones para ejecutar en un solo evento. Para reproducir un sonido, agreguemos otra acción al evento que usamos para eliminar las monedas. Haga clic en 'agregar una acción' justo debajo de la acción "Eliminar objeto Moneda" y agregue la acción llamada 'Reproducir un sonido', desde la categoría 'Audio'. De esta manera, no solo eliminaremos la moneda sino que también estaremos reproduciendo el sonido.

Hay un montón de parámetros disponibles para reproducir un sonido. El primero y más importante es el archivo de sonido a reproducir. Haga clic en el campo y luego en "Elegir un nuevo archivo de audio".

![](/gdevelop5/tutorials/platform-game/choose-new-audio-file_2x.png)

Elija el archivo `coin.wav` que descargó con el resto de los recursos y que puso en la carpeta del juego:

![](/gdevelop5/tutorials/platform-game/choose-coin-wav_2x.png)

Deje los otros parámetros como están (es decir, no repita el sonido, el volumen a `100` y la velocidad predeterminada para el sonido).

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.50.22.png)

¡Eso es todo! Simplemente inicia la vista previa y el sonido se reproducirá cada vez que recojas una moneda

## Incrementa un puntaje usando variables

Vamos a utilizar una variable para actualizar y recordar la puntuación del jugador.

Las variables son contenedores que podemos usar para almacenar y recordar cierta información, como números y cadenas (texto). En GDevelop hay diferentes tipos de variables:

- __ **Las variables de objeto **__ son variables privadas, específicas de cada instancia de un objeto. Esto significa que cada instancia puede almacenar sus propios valores, sin que se compartan con las otras instancias. Puede, por ejemplo, ser útil si queremos cambiar la vida de cada enemigo.
- __ **Las variables de escena **__ (las más utilizadas) son variables asociadas a una escena. Esto significa que sus valores no se comparten con otras escenas en nuestro juego. Es útil almacenar información relevante solo para la escena reproducida actualmente. Por ejemplo, la vida del jugador o una puntuación.
- __ **Las variables globales **__, como sugiere su nombre, son globales en todo el juego. Los valores se comparten con todas las escenas en todo el juego. Es útil si nos gustaría almacenar información que deseamos compartir entre todas las escenas, como la cantidad de bala o la cantidad de dinero que tiene el jugador.

La variable que vamos a usar es una variable de escena y se llamará "Score".

Añadamos una acción en el último evento que hemos realizado. Elija la acción `Variables\> Valor de una variable`. Esta acción se utilizará para agregar 100 a la variable Score, así que complete el parámetro como se muestra aquí:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.52.43.png)

En GDevelop no necesitamos declarar variables antes de usarlas, podemos usar cualquier variable sin declararla simplemente nombrándola en una acción o condición. En caso de que estemos usando una acción en una variable que no está declarada, GDevelop la creará automáticamente para nosotros, con el valor predeterminado de '0' (o un texto vacío) después de ejecutar la acción en la variable para evitar cualquier problema. .

Pero, para tener una mejor organización de su juego, es una buena práctica declarar variables antes de usarlas. De esta manera, es más fácil encontrar qué variables estás usando en tu juego. También puede cambiar su valor predeterminado si desea que sea diferente a 0. Para declarar una variable, haga clic en el botón "..." a la derecha del nombre de la variable. Esto muestra la lista de variables:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.54.46.png)

La lista se muestra y está vacía, ya que no se declaró ninguna variable todavía:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.55.27.png)

Puede hacer clic en el botón "+" para agregar una variable e ingresar "Puntuación" como su nombre:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.56.23.png)

Recuerda que esto es totalmente opcional, solo una buena práctica.

## Mostrar una puntuación usando un objeto de texto

### Añadir objeto de texto

Por ahora, la puntuación de la variable no se puede ver, por lo que no podemos verificar que la puntuación haya aumentado (podríamos, utilizando el [Debugger](/gdevelop5/ interface/ debugger), pero el jugador no puede verla).

Necesitamos usar un objeto de Texto para mostrar el valor de la variable Puntuación. Añadamos un nuevo objeto. Esta vez, elija `Texto` cuando se le pregunte qué tipo de objeto crear:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.58.27.png)

Cambie entonces las propiedades del objeto para que el texto sea negro y más grande que el tamaño predeterminado: ![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.09.28.png)

A continuación, puede colocar el objeto en la escena: ![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.20.23.png)

### Cambiando la capa de texto

Si inicia el juego, puede ver que el texto de Puntuación se muestra con el resto de los objetos y su posición no está fija en la pantalla. Podemos resolver este problema fácilmente usando una capa encima de la capa base. Abre el editor de capas usando este botón:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.34.33.png)

Se muestra la lista de capas, con solo la capa base por ahora:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.35.00.png)

Haga clic en el botón `+` para agregar una capa. Introduzca "UI" para su nombre (UI significa interfaz de usuario).

Finalmente, mueva el objeto de texto a esta nueva capa seleccionando la instancia de texto en la escena y en las propiedades de la izquierda, seleccione la capa de interfaz de usuario:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.40.44.png)

Asegúrese de que el objeto se muestra en algún lugar visible en la pantalla, por ejemplo, colóquelo en la parte superior izquierda. El rectángulo negro en el editor de escenas representa el tamaño de la ventana:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.42.46.png)

### Mostrar el valor de puntuación

Ahora que tenemos un texto en nuestra pantalla, es hora de que muestre el valor de la variable Score. Añadir un nuevo evento. Este evento no tendrá ninguna condición, lo que significa que la acción se ejecutará cada vez que se presente un cuadro del juego en la pantalla (aproximadamente 60 veces por segundo).

Agregue una acción y elija la que se encuentra en la categoría "Objeto de texto" "Modificar el texto".

Para el primer parámetro, elija el objeto "Score", ya que es este objeto el que queremos actualizar. Para el segundo parámetro, elija el operador "= (establecido en)" (queremos configurar el texto en un nuevo valor). Finalmente, el último parámetro representa el nuevo contenido del texto. Es una expresión de cadena que GDevelop evaluará durante el juego cuando se ejecute la acción.

Podemos especificar un texto escribiéndolo entre comillas (como esto: "Hello World"). Pero también podemos usar algo llamado expresiones. Una expresión es una función que está devolviendo un cierto valor. En este caso, necesitamos el valor de la variable Puntuación y queremos usar ese valor para actualizar el contenido del objeto Texto. Las expresiones son un tema más avanzado, por lo que no lo profundizaremos por ahora.

Lo que necesita saber por ahora es que para obtener el valor de una variable de escena, necesitamos usar la expresión "Variable (variableName)". Y como es una variable numérica pero necesitamos el valor como texto, necesitamos convertir el valor devuelto de esta expresión en una cadena. Podemos hacerlo usando otra expresión llamada "ToString (valueToConvert)". Por lo tanto, la expresión real debe verse como esta "ToString (Variable (Score))".

Finalmente, podemos agregar esta expresión después de un texto estático usando el operador "+":" Score: "+ ToString (Variable (Score))" (note las comillas dobles que rodean el texto).

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.58.12.png)

Muchas otras funciones y expresiones están disponibles en GDevelop. Cuando se combinan, se crean acciones poderosas que hacen un trabajo avanzado. Puede encontrar más expresiones en el editor de expresiones haciendo clic en el icono azul al lado de los campos de valor:

![](/gdevelop5/tutorials/platform-game/expression-icon.png)

Aquí está el evento final:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.59.31.png)

Puedes previsualizar el juego, ver que la puntuación se muestra y se actualiza cuando recojas una moneda.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_19.00.24.png)

## Bonus: asegurarse de que recoger dos monedas al mismo tiempo funcione

Es posible que haya notado que si recolecta dos monedas al mismo tiempo (por ejemplo, si dos monedas se superponen), el puntaje solo aumenta una vez. Por ejemplo, si cada moneda vale 100 puntos y acumulas 2 monedas, la puntuación solo aumentará a 100 en lugar de 200. La solución para esto es fácil y es algo que aún no hemos visto: vamos a utilizar un evento llamado para cada objeto. Lo que haremos es decirle al motor que por cada moneda que se recolectó, agregue 100 a la puntuación.

Para comenzar, haga clic en el botón + en la barra de herramientas del Editor de eventos:

![](/gdevelop5/tutorials/platform-game/gdevelop_5_2018-05-30_11-30-39.png)

Seleccione "para cada objeto":

![](/gdevelop5/tutorials/platform-game/2018-05-30_11-33-09.png)

Esto agregará un evento en la parte inferior de la página del evento. Arrástrelo hacia arriba y conviértalo en un sub-evento de la colisión del jugador con la moneda:

![](/gdevelop5/tutorials/platform-game/click-to-choose-4.png)

Haga clic para elegir un objeto y elija el objeto Coin.

![](/gdevelop5/tutorials/platform-game/click-to-choose2.png)

Ahora que ha agregado el objeto al subevento, movamos las acciones hacia abajo al subevento (para que las acciones se repitan para cada moneda elegida por condiciones).

Desplácese sobre la primera acción, haga clic con el botón derecho y córtela, luego desplace el cursor sobre la acción en el subevento, haga clic con el botón derecho y pegue. Haz esto por las otras dos acciones. También puede arrastrar y soltar acciones, que es más rápido que cortarlas y pegarlas.

![](/gdevelop5/tutorials/platform-game/move-to-sub1.png)

Así es como debería verse el evento final:

![](/gdevelop5/tutorials/platform-game/move-to-sub2.png)

Ahora ejecute el juego y verá que si reúne dos monedas al mismo tiempo, la puntuación se actualizará correctamente si ejecuta dos monedas al mismo tiempo.

## Siguiente paso: agregar enemigos

Todos los juegos de plataformas vienen con enemigos que debes evitar o matar al saltar sobre ellos. Agreguemos algunos y veamos cómo podemos hacer que se muevan.

Leer **[Agregar enemigos](/es/gdevelop5/ tutorials/ platform-game/ 6-add-enemies)**!
