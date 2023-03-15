---
title: breakout
---
!!! note

    Este tutorial está siendo reelaborado/actualizado. Parte de la información puede estar desactualizada y es posible que haya problemas👷‍♂️ \# Cómo hacer un juego de tipo Breakout

!!! note

    Antes de comenzar este tutorial, debe leer [Getting Started](/gdevelop5/getting_started) y [Conceptos básicos de creación de juegos](/gdevelop5/tutorials/basic-game-making-concepts) para obtener una descripción general de GDevelop y una comprensión de los conceptos principales.

Con este tutorial, aprenderá algunas tareas básicas en GDevelop mientras crea un juego divertido. Al igual que el clásico juego de arcade Breakout, crearás una serie de ladrillos que se pueden romper con una pelota que rebota. El jugador controla la pelota con una paleta: una vez que la pelota cae, se acabó el juego. ![](/gdevelop5/tutorials/breakout-screenshot.png)

------------------------------------------------------------------------

!!! note
    
        El juego creado en este tutorial se puede encontrar en Gdevelop 5 como ejemplo.
    
    Véalo en acción:
    
    <https://editor.gdevelop-app.com/?project=https://resources.gdevelop-app.com/examples/breakout/breakout.json>

## Crear un nuevo juego

Haz clic en **Crear un nuevo proyecto** en la página de inicio. Desplázate hacia abajo y elige una carpeta para tu proyecto, luego selecciona **Juego vacío**. ![](/gdevelop5/tutorials/create_empty_project.png) \## Añadir recursos al juego

!!! note

    Se encontrará con el término "assets" (recursos) a menudo mientras trabaja con GDevelop. En el lenguaje de desarrollo de juegos de computadora, los _recursos_ son los archivos que componen el contenido del juego, como personajes, plataformas, archivos de audio, etc. 

Para un juego de breakout, necesitará los siguientes recursos:

     * Archivo de imagen de una pelota
     * Archivo de imagen de una pala
     * Archivo de imagen de una barrera
     * Archivos de imagen de diferentes ladrillos.
     * imágenes de Power-ups (opcional)

O puede descargar los recursos utilizados en el tutorial, ![](/gdevelop5/tutorials/breakout-assets.zip)

------------------------------------------------------------------------

## Agregar una nueva escena

_Scenes_ son las pantallas de tu juego. Por ejemplo, los diferentes niveles de un juego a menudo se crean como diferentes escenas, al igual que los menús de inicio o los menús de pausa.

Las escenas contienen _objetos_ que se muestran en la pantalla como contenido del juego. Cada objeto que colocas en una escena se llama _instancia_. Su juego de breakout tendrá varias instancias del objeto de ladrillo en una escena de nivel de juego. Las escenas también contienen _eventos_, acciones que ocurren bajo condiciones específicas, para animar la escena.

Para agregar una nueva escena:

     - En el panel **Proyecto** de la izquierda, haz clic en **+** para agregar una escena.

![](/gdevelop5/tutorials/breakout-game/newscene.jpg)

     - Se agrega una nueva escena a la lista. Haz clic en **NuevaEscena** para abrirlo.

![](/gdevelop5/tutorials/breakout-game/blank_scene.jpg)

## Crea el objeto pala Comience agregando la pala a la escena. El jugador mueve esta pala de izquierda a derecha en línea recta para hacer rebotar la pelota y evitar que se caiga fuera de juego.

- En el panel **Objetos** de la derecha, haga clic en **+** para agregar un objeto.

![](/gdevelop5/tutorials/breakout-game/add-object.jpg)

Aparecerá una ventana que muestra diferentes tipos de objetos que puede agregar. Cada tipo de objeto tiene su propio conjunto de características.

![](/gdevelop5/tutorials/object_types.jpg)

    - Para la pala, necesitas el tipo de objeto Sprite. Haz clic en **Sprite**. \<note tip\>_Sprites_ son objetos animados que se utilizan para muchos elementos comunes del juego (jugadores, plataformas, enemigos, ladrillos, etc.).

El nuevo objeto se agrega a su escena y se abre el cuadro de diálogo Editor de objetos.

![](/gdevelop5/tutorials/empty_object_editor.jpg)

En este momento, su objeto sprite no tiene animaciones ni imágenes asociadas.

- Haz clic en **+** para agregar una animación.
- Haga clic en **+** en la miniatura en blanco para agregar una imagen a la animación.
- Seleccione la imagen llamada "paddle.png" en la carpeta de su proyecto y haga clic en **Abrir**. La imagen se agrega al objeto.

![](/gdevelop5/tutorials/paddle_animation.jpg)

- En el campo **Nombre del objeto**, escriba **Pala** para cambiar el nombre de su objeto.

- Haz clic en **Aplicar** para guardar y cerrar el editor.

!!! note

    Los nombres de los objetos distinguen entre mayúsculas y minúsculas, al igual que otros elementos en GDevelop. Sea consistente en su nombre para evitar errores fáciles como escribir "Pala" cuando quiere decir "pala". Lo mismo ocurre con los nombres de animación como "Ejecutar" o "ejecutar". No importa qué convención de nomenclatura utilice, siempre que sea coherente.

------------------------------------------------------------------------

### Agregue el objeto pala a la escena

Para mostrar la pala en tu juego, debes agregarla a tu escena. Debido a que solo se necesita una pala, se denomina instancia _única_. Otros objetos como ladrillos tendrán múltiples instancias en su escena.

- Para agregar la pala a la escena, haga clic y arrástrela desde el panel **Objetos** a la escena. Colóquelo cerca del fondo.

![](/gdevelop5/tutorials/paddle_drag.gif)

------------------------------------------------------------------------

## Crea el objeto barrera

A continuación, agregará una barrera visual que aparecerá para evitar que la pelota rebote en la pantalla. La barrera se hará con un sprite en mosaico. Los _sprites en mosaico_ son objetos repetibles y escalables útiles para crear plataformas, paredes y otros objetos inanimados.

Para crear el objeto de barrera:

     - En el panel **Objetos** de la derecha, haga clic en **+** para agregar un objeto.
     - Haz clic en **Sprite en mosaico**.
     - En el cuadro de diálogo **Editor de objetos**, haga clic en **+** para agregar una animación.
     - Haga clic en **+** en la miniatura en blanco para agregar una imagen.
     - Seleccione "barrier.jpg" en la carpeta de su proyecto y haga clic en **Abrir**.
     - En el campo **Nombre del objeto**, cambia el nombre de tu objeto a "Barrera".
     - Haga clic en **Aplicar** para guardar y cerrar el Editor de objetos.

------------------------------------------------------------------------

### Agregue el objeto de barrera a la escena

Deberá agregar tres instancias de su objeto de barrera a su escena: una barrera izquierda, derecha y superior. El tamaño predeterminado de la ventana del juego es de 800 x 600 píxeles, que es el contorno gris en la vista de escena. Crea tu barrera ligeramente dentro de estos límites.

!!! note

    Mueva y cambie el tamaño de los objetos con precisión mediante el **panel de propiedades** que se abre cuando hace clic en una instancia de objeto. 

- Arrastre y suelte la primera instancia de la barrera en la escena.
- Haga clic en la barrera. Cambie su tamaño a 15 x 585 con el panel Propiedades o arrastrando el controlador en la parte inferior derecha. Colóquelo en el lado izquierdo de la pantalla en (15, 15).
- Cree una barrera correspondiente en el lado derecho y colóquela en (770,15).
- Agregue una barrera final en la parte superior para conectar los dos. Cambie su tamaño a 770 x 15 y colóquelo en (15, 15).

![](/gdevelop5/tutorials/breakout-game/barriers_added.jpg)

------------------------------------------------------------------------

## Establecer el movimiento de la pala

El jugador controlará la pala usando las flechas izquierda y derecha del teclado. Puede crear estos controles usando _eventos_ (acciones que ocurren si las condiciones son verdaderas).

Crea un evento donde si el jugador presiona la flecha izquierda en el teclado, la pala se mueve hacia la izquierda:

- Haz clic en la pestaña **Nueva escena (Eventos)** para abrir el **Editor de eventos**.
- Haz clic en **Agregar un nuevo evento vacío** ![](/gdevelop5/tutorials/breakout-game/empty_event_button.jpg).
- Haz clic en **Agregar condición**.

![](/gdevelop5/tutorials/breakout-game/add-condition.jpg)

- Haga clic en **Teclado \> Tecla presionada**.

![](/gdevelop5/tutorials/breakout-game/keyboard-key-pressed.jpg)

- En el campo **Clave**, escriba **Left** y haga clic en **Aceptar**. Esta condición es verdadera si el jugador presiona la flecha izquierda en el teclado.

Ahora necesita agregar una acción correspondiente a la condición. La pala debe moverse hacia la izquierda en un eje horizontal si se cumple la condición.

!!! note

    Para mover objetos con una fuerza aplicada, deberá especificar un ángulo. La siguiente imagen ilustra cómo GDevelop entiende el ángulo de rotación. En un eje horizontal, la izquierda es 180°, la derecha es 0°. ![](/gdevelop5/tutorials/breakout-game/angles.png) 

- Haga clic en **Agregar acción**.

- Haga clic en **Acciones comunes para todos los objetos \> Movimiento \> Agregar una fuerza (ángulo).**

- Selecciona **Pala** en el campo **Objeto**.

- En el campo **Ángulo**, escriba **180**.

- En el campo **Velocidad (en píxeles por segundo)**, escriba **300**.

- Haz clic en **Instantáneo**.

- Haga clic en **Aceptar**.

![](/gdevelop5/tutorials/breakout-game/add_force_to_paddle.jpg)

!!! note

     Es un buen momento para guardar tu trabajo. Adquiera el hábito de ahorrar con frecuencia. Puede presionar **Ctrl+S** para guardar su juego, o usar su mouse e ir a **Archivo\>Guardar**. 

------------------------------------------------------------------------

Utilice la función de vista previa para verificar su trabajo. Haz clic en el botón **Iniciar una vista previa de la escena**.![](/gdevelop5/tutorials/breakout-game/preview-button.jpg)

Presiona la flecha izquierda para mover la pala. Descubrirá que la pala no se detiene cuando llega a la barrera, simplemente continúa fuera de la pantalla. Puede solucionar esto cerrando la ventana de vista previa y agregando otra condición al movimiento de la pala.

Para agregar otra condición para detener la pala:

     - En el mismo evento, debajo de su primera condición, haga clic en **Agregar condición**.

     - Haga clic en **Condiciones comunes para todos los objetos > Posición > Posición X de un objeto**.

     - En el campo **Objeto**, selecciona **Pala**.

     - En el campo **Signo de la prueba**, seleccione **> (mayor que)**.

     - En el campo **Posición X**, escriba la coordenada X del lado derecho de la barrera izquierda. En este ejemplo, es 30.

     - Haga clic en **Aceptar**.

![](/gdevelop5/tutorials/breakout-game/x_position.jpg)

Vuelva a obtener una vista previa de su juego. La pala debe detenerse al golpear la barrera izquierda.

Ahora necesita crear el mismo evento para el lado derecho. Pruébelo usted mismo antes de leer el proceso a continuación.

- Haga clic en **Agregar un nuevo evento vacío**.
- Haga clic en **Agregar condición**.
- Haga clic en **Teclado \> Tecla presionada**.
- En el campo **Clave**, escriba **Derecha**.
- Haga clic en **Aceptar**.

------------------------------------------------------------------------

- Haga clic en **Agregar acción**.
- Haga clic en **Acciones comunes para todos los objetos \> Movimiento \> Agregar una fuerza (ángulo).**
- En el campo **Objeto**, selecciona **Pala**.
- En el campo **Ángulo**, escriba **0**.
- En el campo **Velocidad (en píxeles por segundo)**, escriba **300**.
- Haga clic en **Aceptar**.

------------------------------------------------------------------------

- Haga clic en **Agregar condición**.
- Haga clic en **Condiciones comunes para todos los objetos \> Posición \> Posición X de un objeto**.
- En el campo **Objeto**, selecciona **Pala**.
- En el campo **Signo de la prueba**, seleccione **\< (menor que)**.
- En el campo **Posición X**, escriba la coordenada X del lado izquierdo de la barrera derecha. En este ejemplo, es 655.
- Haga clic en **Aceptar**.

Obtenga una vista previa de su juego para asegurarse de que funciona.

!!! note

    ¿Encuentras que tu pala todavía está pasando la barrera de la derecha? Esto se debe a que GDevelop usa el punto superior izquierdo de un objeto al comparar posiciones X. Una manera fácil de resolver este problema es restar el ancho de la pala de la coordenada X de tu barrera. En nuestro ejemplo, la pala tiene un ancho de 58 px, por lo que la nueva posición X para detener la pala en el lado derecho debe ser **\< 712** (770 - 58). Cámbialo ahora.

------------------------------------------------------------------------

## Agregar comentarios al Editor de eventos Mientras trabaja en su Editor de eventos, es una buena práctica agregar comentarios para cada conjunto de eventos. Podrá encontrar y comprender rápidamente sus eventos a medida que crece su juego si los cataloga mientras trabaja.

- Para agregar una línea de comentario, haga clic en **Agregar un comentario**. ![](/gdevelop5/tutorials/breakout-game/add_a_comment.jpg)

- Ingrese el texto de su comentario y use la barra azul a la izquierda del comentario para arrastrar y soltar su comentario donde lo desee.

![](/gdevelop5/tutorials/breakout-game/moved_comment.jpg)

------------------------------------------------------------------------

## Mover la pelota - Parte 1

El siguiente paso será agregar el objeto bola a la escena. Como hiciste con la pala, agrega el objeto bola como un sprite usando ball-1.png como animación. Arrastra y suelta la pelota justo encima de la pala en la escena.

Cuando piensas en el juego, la pelota deberá hacer cuatro cosas:

     * Muévete cuando el jugador comience el juego
     * Rebote cuando choca con la pala o con la barrera
     * Rompe ladrillos y rebota cuando choca con ladrillos
     * Termina el juego cuando cae fuera de la pantalla debajo de la pala.

### Poner la pelota en movimiento

Para hacer que la pelota se mueva cuando el jugador presiona la barra espaciadora para comenzar:

* Desde la pestaña **Nueva Escena (Eventos)**, haga clic en **Agregar un nuevo evento vacío**.

* Haga clic en **Agregar condición**.

* Haga clic en **Teclado \> Tecla presionada**.

* En el campo **Clave**, escriba **Space** y haga clic en **Aceptar**.

![](/gdevelop5/tutorials/breakout-game/space_bar.jpg)

------------------------------------------------------------------------

* Haga clic en **Agregar acción**. * Haga clic en **Acciones comunes para todos los objetos \> Movimiento \> Agregar una fuerza (ángulo)**. * En el campo **Objeto**, selecciona **Pelota**. * En el campo **Ángulo**, escriba **-45+RandomInRange(-5, 5)**. Esto lanzará la pelota en un ángulo de -45 grados, con una variación aleatoria adicional de 5 grados en cualquier dirección para agregar desafío al jugador.

!!! note

     No es necesario memorizar todas las expresiones. Puede abrir el **Editor de expresiones** para ayudarlo a completar los campos. ![](/gdevelop5/tutorials/breakout-game/expression_editor_button.jpg) En este caso, podría escribir **-45** en el campo **Ángulo**, luego hacer clic en **Editor de expresiones** y buscar por **Random**. La expresión **Entero aleatorio en rango** con un valor mínimo de -5 y un valor máximo de 5 generará RandomInRange(-5, 5) en su campo. Puede usarlo en su cálculo de velocidad como desee. 

* En el campo **Velocidad (en píxeles por segundo)**, escriba **300**. Ajuste esto como desee; cuanto mayor sea el número, más rápido será el objeto. * Haz clic en **Permanente**, ya que quieres que la pelota siga moviéndose durante todo el juego. * Haga clic en **Aceptar**.

![](/gdevelop5/tutorials/breakout-game/ball-start-movement.jpg)

Este es un buen momento para agregar un comentario, guardar y obtener una vista previa de su juego. La pelota debe moverse cuando se presiona la barra espaciadora.

------------------------------------------------------------------------

### Rebote de la pelota en la barrera y la pala

Para un buen juego, la pelota debe rebotar de forma realista cada vez que choca con la barrera, la pala o un ladrillo. GDevelop tiene un comportamiento de rebote fácil que puede aplicar a cualquier objeto para simular un rebote real.

#### Agregar un comportamiento de rebote

Para agregar un comportamiento de rebote a su objeto de bola: - En la pestaña **Nueva escena**, haz clic en **⋮** junto a tu objeto "Pelota" y haz clic en **Editar objeto**. - Haga clic en la pestaña **Comportamientos**. - Haga clic en **+** para agregar un nuevo comportamiento al objeto. - El comportamiento de rebote no es un comportamiento instalado, por lo que debe encontrarlo. Haga clic en la pestaña**Buscar nuevos comportamientos**. - De la lista en la parte inferior, seleccione "Bounce" y haga clic en "Instalar en proyecto".

![](/gdevelop5/tutorials/breakout-game/add_bounce_behaviour.png)

- Ahora puede agregar el nuevo comportamiento al objeto. Desplácese hacia abajo, seleccione **Bounce** y haga clic en **Aplicar**. ![](/gdevelop5/tutorials/apply_bounce.png)

¡Tu pelota ya está lista para rebotar!

------------------------------------------------------------------------

#### Agregar los eventos de colisión

A continuación, agregue eventos para hacer que la pelota rebote en la barrera y la pala. Es hora de una condición que usarás mucho en la creación de juegos: una condición de _colisión_.

Para crear una condición de colisión entre la pelota y la barrera:

     * Desde la pestaña **Nueva Escena (Eventos)**, haga clic en **Agregar un nuevo evento vacío**.
     * Haga clic en **Agregar condición**.
     * Haga clic en **Condiciones comunes para todos los objetos > Colisión > Colisión**.
     * En el primer campo **Objeto**, seleccione **Pelota**. En el segundo campo **Objeto**, seleccione **Barrera**.
     * Haga clic en **Aceptar**.

------------------------------------------------------------------------

Para agregar la acción que hace que la pelota rebote en la barrera al chocar:

- Haga clic en **Añadir acción**.
- Haga clic en **Bounce \> Bounce \> Bounce off another object**.
- En el campo **Object** , elige **Pelota**.
- En el campo **Objects to bounce on** , elige **Barrerar**.
- Haga clic en **OK**.

![](/gdevelop5/tutorials/breakout-game/add_bounce_action_in_event.png)

------------------------------------------------------------------------

Ahora debe hacer exactamente lo mismo para que la pelota rebote en la pala. Cree un nuevo evento, establezca su condición de colisión y agregue la acción para hacer rebotar la pelota.

!!! note

     Puede hacer clic con el botón derecho y copiar una condición o acción anterior, y luego hacer clic con el botón derecho para pegarla en un nuevo evento. Es una manera fácil de ahorrar tiempo y esfuerzo, ¡especialmente cuando se trata de eventos similares! 

Guarda y previsualiza tu juego. Empieza a ser divertido...

------------------------------------------------------------------------

## Agrega los ladrillos

¡Tu pelota tiene que romper algo! El siguiente paso será agregar ladrillos a la escena. Para aprender sobre diseños externos, este tutorial hará que los ladrillos aparezcan en diferentes diseños.

Para agregar tus ladrillos:

     * Haga clic en la pestaña **Nueva escena** para acceder al Editor de escenas.
     * En el panel **Objeto**, haga clic en **+** para agregar un nuevo objeto de tipo _sprite_.
     * Nombre este objeto **Ladrillo**. Dale tres animaciones separadas usando los archivos brick-green.png, brick-red.png y brick-yellow.png de la carpeta de tu proyecto. Nombre las animaciones en consecuencia.
     * Haga clic en **Aplicar**.

![](/gdevelop5/tutorials/brick_colours.png)

------------------------------------------------------------------------

### Crear diseños externos

Puede usar diseños externos para crear algunos niveles diferentes con diferentes formaciones de ladrillos. Un _diseño externo_ (_layout_) es una capa de objetos que se crea fuera de una escena, pero que se puede insertar dinámicamente en cualquier punto.

Para crear un diseño externo:

     * Haga clic en el botón **Administrador de proyectos** en la parte superior izquierda. {{:gdevelop5:tutorials:breakout-game:project_manager.jpg?nolink|}}
     * Haga clic en **Diseños externos** y **+** para agregar un diseño externo.
     * Haga clic en **⋮** junto a su nuevo diseño y cámbiele el nombre a **Layout1**.

![](/gdevelop5/tutorials/breakout-game/external_layout_add.png)

- Haga clic en **Layout1**. Se le pedirá que elija la escena en la que se incluirá. Elige **NuevaEscena**: esa es la escena donde ocurre todo el juego. Se abrirá una nueva pestaña que se parece a su NewScene existente.

&nbsp;

     * Agregue ladrillos en cualquier configuración que elija. Diviértete con esta parte, ¡sé creativo!

!!! note
    
        Para acelerar las cosas, haga clic o seleccione objetos, luego mantenga presionada la tecla Ctrl, haga clic y arrastre para replicar instancias en la pantalla. Mantener presionadas las teclas Ctrl+Shift mantiene las nuevas instancias en el mismo eje X o Y.
    
    ![](/gdevelop5/tutorials/breakout-game/duplicating_objects.gif) 

- Cree dos o más diseños nuevos y asígneles el nombre Layout1, Layout2, etc.

!!! note

    Siga la convención de nomenclatura Layout1, Layout2, etc. Se vinculará a una variable en breve.

------------------------------------------------------------------------

### Hacer que aparezca un diseño de ladrillo aleatorio

Para hacer que aparezca un diseño aleatorio al comienzo de cada escena, primero agregue su condición:

     * Haz clic en la pestaña **Nueva Escena (Eventos)** para volver a tu Editor de Eventos.
     * Haga clic en el botón **Agregar un nuevo evento vacío**.
     * Haga clic en **Agregar condición**.
     * Haz clic en **Escena > Al comienzo de la escena**.

----

En lugar de adjuntar acciones a esta condición, ahora creará subeventos que suceden al comienzo de la escena.

Para comenzar, cree una nueva variable de escena llamada Random_layout:

     * Haga clic en un espacio en blanco dentro del evento que acaba de crear y haga clic en el botón **Agregar un subevento al evento seleccionado**.{{:gdevelop5:tutorials:breakout-game:subevent_button.jpg?nolink|}}
     * En el nuevo subevento, haga clic en **Agregar acción**.
     * Haga clic en **Variables > Valor de una variable de escena**.
     * En el campo **Variable**, escriba **Random_layout** para crear una nueva variable de escena.
     * En el campo **Signo de modificación**, seleccione **= (fijar a)**.
     * En el campo **Valor**, escriba **Random(2)+1**.
     * Haga clic en **Aceptar**.

![](/gdevelop5/tutorials/breakout-game/modify_scene_variable_value.jpg)

!!! note
    
        Intente usar el Editor de expresiones para crear sus expresiones. ![](/gdevelop5/tutorials/breakout-game/expression_editor_button.jpg)
    
    Cuanto más juegues con las expresiones, más entenderás la lógica detrás de ellas. ¡No tengas miedo de experimentar! 

------------------------------------------------------------------------

Ahora encadenará su número de variable al nombre del diseño externo Layout. Este nombre determinará qué diseño aparecerá en la pantalla. (¡Es por eso que era importante ser consistente al nombrarlos antes!)

Para agregar un diseño aleatorio de ladrillos al comienzo de la escena:

* Agregue otro sub-evento nuevo para el comienzo de la escena, luego haga clic en **Agregar acción**. * Haga clic en **Diseños externos \> Crear objetos a partir de un diseño externo**. * En el campo **Nombre del diseño externo**, escriba **"Layoutv" + ToString(Variable(Random_layout))**. Esto agregará aleatoriamente uno de los diseños externos a la escena. * Haga clic en **Aceptar**.

![](/gdevelop5/tutorials/breakout-game/random_layout_selection.jpg)

------------------------------------------------------------------------

Puede agregar interés haciendo que el color del ladrillo sea aleatorio al comienzo de cada escena.

Para elegir un color de ladrillo al azar:

* Agregue otro sub-evento nuevo para el comienzo de la escena, luego haga clic en **Agregar acción**. * Haga clic en **Variables \> Valor de una variable de escena**. * En el campo **Variable**, escriba **Brick_colour**. * En el campo **Signo de modificación**, seleccione **= (fijar a)**. * En el campo **Valor**, escriba **Random(2)**. * Haga clic en **Aceptar**.

![](/gdevelop5/tutorials/modify_scene_variable_value2.png)

------------------------------------------------------------------------

- Agregue un último sub-evento nuevo para el comienzo de la escena, luego haga clic en **Agregar acción**.
- Haz clic en **Sprite \> Animaciones e imágenes \> Cambiar la animación**.
- En el campo **Objeto**, seleccione **Ladrillo**.
- En el campo **Signo de modificación**, seleccione **= (fijar a)**.
- En el campo **Valor**, escriba **Variable(Brick_colour)**.
- Haga clic en **Aceptar**.

![](/gdevelop5/tutorials/breakout-game/brick_colour_change.jpg)

Guarda y previsualiza tu juego. Un jugador ahora verá un diseño externo seleccionado al azar con ladrillos en un color aleatorio cada vez que se inicie el juego.

------------------------------------------------------------------------

## Mueve la pelota - Parte 2

### Rebota la pelota en los ladrillos

Ahora que tienes ladrillos en la escena, quieres que la pelota rebote lejos de los ladrillos cuando los golpee. Exactamente como hiciste con la pala y la barrera, necesitarás:

     - Crear un nuevo evento.
     - Añadir una condición de colisión entre la pelota y el ladrillo.
     - Rebota tu pelota lejos de los ladrillos.

!!! note

    ¡No olvide que puede cortar y pegar condiciones y acciones de eventos existentes!

------------------------------------------------------------------------

## Destruye los ladrillos

A medida que la pelota rebota en los ladrillos, debería destruirlos. Destruir un objeto en GDevelop es fácil.

     * En el mismo evento de colisión, haga clic en **Agregar acción**.
     * Haga clic en **Acciones comunes para todos los objetos > Objetos > Eliminar un objeto**.
     * En el campo Objeto, seleccione **Ladrillo**.
     * Haga clic en **Aceptar**.

![](/gdevelop5/tutorials/breakout-game/delete_a_brick.jpg)

Guarda y previsualiza tu juego. Deberías poder hacer rebotar la pelota en la pala y destruir los ladrillos. Este es un buen momento para volver a comprobar tu velocidad: ¿quieres que la pelota o la pala sean más rápidas o más lentas? Si es así, juega con tus valores de velocidad hasta que estés satisfecho con el juego.

------------------------------------------------------------------------

## Gana o pierde el juego

Si el jugador elimina todos los ladrillos, el juego debería felicitar al jugador con la opción de volver a jugar. Si el jugador falla la pelota con la pala, debe decirle al jugador que ha perdido con la opción de volver a jugar.

### Crea un mensaje de felicitación

Desea que el mensaje de felicitación esté oculto, solo para que aparezca cuando se hayan ido todos los ladrillos.

Para agregar un objeto de texto a la escena:

     * Haga clic en la pestaña **Nueva escena**.
     * En el panel **Objetos**, haga clic en **+** para agregar un nuevo objeto y seleccione **Texto**.
     * En el campo **Nombre del objeto**, escriba **Felicitaciones**.
     * En el campo **Texto**, escriba un mensaje de felicitación (por ejemplo, ¡Felicitaciones! ¡Ha eliminado todos los bloques!). También incluya una línea que le diga al jugador "Presione Enter para jugar de nuevo".
     * Haga clic en **Aplicar**.

![](/gdevelop5/tutorials/breakout-game/congratulations_message.jpg)

- Arrastre y suelte su objeto Felicitaciones en el medio de la escena.

------------------------------------------------------------------------

Para ocultar su objeto de texto al comienzo de la escena:

     * Haga clic en **Nueva Escena (Eventos)**.
     * Vaya al evento existente que contiene la condición "Al comienzo de la escena" y haga clic en **Agregar acción**.
     * Haga clic en **Acciones comunes para todos los objetos > Visibilidad > Ocultar**.
     * En el campo **Objeto**, seleccione **Felicitaciones**.
     * Haga clic en **Aceptar**.

![](/gdevelop5/tutorials/breakout-game/hide_congratulations.jpg)

------------------------------------------------------------------------

Para hacer que su objeto de texto aparezca cuando se destruyen todos los ladrillos:

     * Haga clic en el botón **Agregar un nuevo evento vacío**.
     * Haga clic en **Agregar condición**.
     * Haga clic en **Condiciones comunes para todos los objetos > Objetos > Número instancias de objetos en la escena**.
     * En el campo **Objeto**, seleccione **Ladrillo**.
     * En el campo **Signo de la prueba**, seleccione **= (igual a)**.
     * En el campo **Valor**, escriba **0**.
     * Haga clic en **Aceptar**.

------------------------------------------------------------------------

Si hay 0 ladrillos, la bola debe eliminarse y el objeto de felicitación debe hacerse visible. Ambas acciones son acciones comunes para todos los objetos. Agrégalos ahora.

![](/gdevelop5/tutorials/breakout-game/if_no_bricks.png)

------------------------------------------------------------------------

También quieres darle al jugador la opción de comenzar un nuevo juego:

     * Crea un nuevo sub-evento {{:gdevelop5:tutorials:breakout-game:subevent_button.jpg?nolink|}} para el evento que acabas de crear donde el número de objetos de ladrillo es =0.
     * Haga clic en **Agregar condición**.
     * Haga clic en **Teclado > Tecla presionada**.
     * En el campo **Clave**, escriba **Return**. (Recuerde que el mensaje de felicitación le dice al jugador que presione Enter para comenzar de nuevo).
     * Haga clic en **Aceptar**.

------------------------------------------------------------------------

Añade una acción para volver a la primera escena:

     * Haga clic en **Agregar acción**.
     * Haz clic en **Escena > Cambiar la escena**.
     * En el campo **Nombre de la nueva escena**, escribe **"NuevaEscena"**. ¡No olvides las comillas!
     * Haga clic en **Aceptar**.

Ahora, cuando el jugador elimine todos los ladrillos, ¡recibirá un mensaje de felicitación y la opción de comenzar de nuevo!

### Crea un mensaje de finalización del juego

Si el jugador pierde la pelota, se acabó el juego. Al igual que si un jugador gana, esto implicará hacer visible un mensaje en el momento adecuado y darle al jugador la opción de volver a jugar.

Primero, agregue un objeto de texto a la escena que permanecerá oculto a menos que el jugador pierda la pelota.

Siga los mismos pasos que hizo para crear el objeto Felicitaciones en la pantalla, pero cambie el mensaje a Game Over. Incluya la línea sobre comenzar de nuevo. Llame a este objeto de texto **GameOver**.

Arrastra y suelta tu objeto GameOver en el medio de la escena. Está bien si está encima del objeto Felicitaciones.

------------------------------------------------------------------------

A continuación, vaya al Editor de eventos para ocultar su objeto GameOver al comienzo de la escena.

Siga los mismos pasos para ocultar el objeto GameOver como lo hizo para el objeto Felicitaciones. Agréguelo como una segunda acción al evento. ![](/gdevelop5/tutorials/breakout-game/gameover_hide.png)

------------------------------------------------------------------------

El siguiente paso será hacer que el mensaje vuelva a aparecer si el jugador pierde la pelota. Para hacer esto, necesita una condición que verifique si la posición Y de la pelota está fuera de la ventana del juego.

Para agregar una condición para comprobar si el jugador ha perdido el balón:

     * Haga clic en el botón **Agregar un nuevo evento vacío**.
     * Haga clic en **Agregar condición**.
     * Haga clic en **Condiciones comunes para todos los objetos > Posición > Comparar la posición Y de un objeto**.
     * En el campo **Objeto**, selecciona **Pelota**.
     * En el campo **Signo de la prueba**, seleccione **> (mayor que)**.
     * En el campo **Valor**, escriba **600**. (600 es la altura predeterminada de la ventana del juego, lo que significa que la pelota está fuera de la pantalla).
     * Haga clic en **Aceptar**.

Agregue una acción correspondiente para hacer visible el objeto GameOver. También debe agregar un evento secundario que haga que se elimine la pelota y que el juego se reinicie si el jugador presiona Enter. Agrégalos ahora.

![](/gdevelop5/tutorials/breakout-game/player_misses_ball.png)

Guarda y previsualiza tu juego.

------------------------------------------------------------------------

#### ¡Eso es todo! Has terminado tu primer juego de breakout básico.

Ahora que conoce los conceptos básicos, intente cambiar las velocidades, los diseños de ladrillos, etc. para hacerlo más desafiante. Es posible que desee agregar un sistema de puntuación en el que los puntos aumenten con cada ladrillo destruido, o puede hacer que la bola aumente su velocidad con cada escena. Debido a que el comportamiento de rebote rebota según el ángulo y la velocidad de la fuerza aplicada, también puedes divertirte jugando con la forma de la pala, agregando barreras más desafiantes, etc.

También sería un buen ejercicio agregar instrucciones al comienzo de la escena que desaparecen cuando comienza el juego (vea la primera imagen de este tutorial).

**Próximamente habrá más tutoriales pero, mientras tanto, ¡experimenta y juega!**
