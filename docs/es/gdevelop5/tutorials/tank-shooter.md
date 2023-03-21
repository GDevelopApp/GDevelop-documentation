---
title: Tank shooter - Tutorial para principiantes
---
# Tank shooter - Tutorial para principiantes

Este tutorial lo ayudará a familiarizarse con la forma en que funciona GDevelop. Va a crear un juego muy simple. En este juego, los enemigos se moverán hacia el jugador. El jugador podrá disparar a los enemigos. Los enemigos explotarán cuando sean golpeados con las balas del jugador. ![](/gdevelop5/tutorials/beginner-tutorial-screenshot.png)

Para obtener una descripción general del software, le recomiendo que lea primero la página [](/gdevelop5/ getting_started).

### Descargar GDevelop

Si no tiene GDevelop, descárguelo del sitio web oficial: [gdevelop-app.com](/http/ //gdevelop-app.com)

Siempre descargue GD desde esta página para asegurarse de que tiene la última versión. Una vez que haya instalado GDevelop, ejecútelo. Se mostrará la página "Inicio" de la interfaz: ![](/gdevelop5/start_page.png)

### Descargar la fuente

Puede descargar el proyecto terminado desde aquí ![](/ gdevelop5/ tutorials/ beginner-tutorial.zip). Descargar el proyecto terminado te ayuda a ver cómo se ha creado el juego. Tenerlo como ejemplo en caso de que te quedes atascado o no entiendas algo, es una buena manera de verificar tu progreso.

### Crear un nuevo proyecto

Haga clic en "Crear nuevo proyecto" en la página "Inicio".

A continuación, tiene la opción de crear un nuevo proyecto utilizando una plantilla o crear un proyecto "Juego vacío". ![](/gdevelop5/create-new-project-window.png)

Para este tutorial, necesita un proyecto de juego vacío, pero antes de seleccionar esta opción, debe elegir una carpeta donde se guardará su juego. En la parte inferior de la página "Crear un juego nuevo" encontrará el área "Seleccionar carpeta". Es posible que deba desplazarse hacia abajo para ver esta opción. Mantenga la ubicación predeterminada o seleccione la ubicación donde desea guardar su juego.

![](/gdevelop5/tutorials/select-project-folder.png)

Para seleccionar una ubicación personalizada, seleccione / haga clic en el botón "Seleccionar carpeta". Examine el sistema de archivos en su computadora. Localiza la carpeta que quieres usar.

![](/gdevelop5/choose-folder-button.png)

Una vez que haya seleccionado una carpeta, seleccione / haga clic en la opción de proyecto en blanco "Juego vacío" en la lista.

![](/gdevelop5/empty-game-button.png)

### Crear una nueva escena

Crear una nueva escena es lo primero en tu lista de cosas que hacer. Haga clic / seleccione el botón "Haga clic para agregar una escena" en el Administrador de proyectos:

![](/gdevelop5/tutorials/add-scene-button.png)

A continuación, haga clic en el NewScene que acaba de crear. Se abrirá el editor de "Escena".

### Obtenga las imágenes y recursos

Antes de seguir adelante, necesitarás algunas imágenes para el juego. Puede descargarlos aquí: [Descargar imágenes](http://www.compilgames.net/dl/BeginnerTutorial2Images.zip)

Una vez que haya descargado este archivo, extraiga su contenido en la carpeta donde creó el proyecto.

### Crear la torreta del jugador

El jugador controlará una torreta para disparar a los enemigos. En el editor de "Objetos" de Scene, elija "Agregar un nuevo objeto".

![](/gdevelop5/tutorials/add_new_object.png)

Aparecerá una nueva lista de opciones de ventana. Elija el tipo de objeto que se creará. ![](/gdevelop5/objects/object-types.png)

Primero, crea un objeto sprite. Seleccione "Sprite" de la lista emergente. A continuación, se mostrará el panel de propiedades del objeto. Si no ve el panel de propiedades, haga clic con el botón derecho en NewObject en el editor de objetos y seleccione "Editar objeto" en la lista emergente.

Finalmente, queremos añadir una animación al objeto. Haga clic / seleccione el botón "agregar animación" en la ventana de propiedades. ![](/gdevelop5/tutorials/add-animation.png)

Ahora verá las propiedades de animación del objeto. ![](/gdevelop5/objects/animation-properties.png)

Es necesario agregar la imagen de la torreta como una animación. Haga clic en el símbolo más grande ![](/ gdevelop5/ tutorials/ plusaddobject.png). Busque la carpeta del proyecto. Encuentra la imagen aaguntopdown.png. La imagen se mostrará en la ventana. ![](/gdevelop5/tutorials/turret-animation-window.png)

Por último, haga clic en "Aplicar" para guardar los cambios.

Renombra el objeto. Haga clic derecho en el objeto de torreta en el editor de "Objeto" de Escena. Seleccione "Cambiar nombre" en la lista emergente que se muestra. Escriba el nombre "torreta" para el nuevo nombre. Esto nos permite referirnos más adelante a este objeto usando el nombre "torreta". ![](/gdevelop5/tutorials/rename-turret.png)

### Añadir torreta a la escena

Para agregar la "torreta" a la escena, seleccione / haga clic en la torreta en el editor de "Objetos" de la escena y luego haga clic en el editor de "Escenas". Esta acción creará una "torreta" en la escena. La "torreta" se puede seleccionar, mover y girar. ![](/gdevelop5/tutorials/turret-selected-inscene.png)

### Primeros eventos

Ahora vamos a crear los "Eventos" utilizados para animar todo el juego. En el primer evento, la "torreta" debe girarse hacia el mouse del jugador.

Seleccione el editor de "Eventos" haciendo clic en la pestaña "NEWSCENE (EVENTOS)": ![](/gdevelop5/tutorials/scene-events-tab.png)

Verá una barra de herramientas en la parte superior de la pantalla del editor de "Eventos". Seleccione / haga clic en el botón "Agregar evento" en la barra de herramientas para crear un nuevo evento. Si olvida cómo se usa cada herramienta en la barra de herramientas, pase el mouse sobre la imagen de la herramienta para ver una descripción de ayuda emergente para la herramienta. ![](/gdevelop5/add-event-button.png)

Se crea el nuevo "Evento", con una condición vacía y una acción vacía. La "condición" se encuentra en el lado izquierdo de la pantalla. La "acción" se encuentra en el lado derecho de la pantalla. Coloque el cursor sobre la "acción" a la derecha. Seleccione / haga clic en "agregar acción": ![](/gdevelop5/tutorials/add-action.png)

Ahora, vas a escribir tu primera acción. Esta acción girará la "torreta" hacia el ratón. Después de hacer clic / seleccionar "Agregar acción", aparecerá un nuevo panel de lista. Elija la acción "Acción común para todos los objetos". Aparecerá una lista desplegable de más opciones. Seleccione / haga clic en "Ángulo". Se mostrará otra lista desplegable. Seleccione / haga clic en "Girar hacia la posición". ![](/gdevelop5/tutorials/rotate-toward-position-action.png)

Cuando se selecciona "Girar hacia la posición", se abrirá otra lista de opciones en el lado derecho del panel de selección. Muestra el nombre de la acción, así como los parámetros para la acción. Rellene el primer parámetro seleccionando / haciendo clic en "Objeto". "torreta" se abrirá de una lista de los objetos disponibles. Seleccione "torreta" de la lista. ![](/gdevelop5/tutorials/select-turret-object-parameter.png)

Para los siguientes parámetros, ingrese MouseX () y MouseY () para que el objeto gire hacia la posición del mouse. Cuando se inicie el juego, estas dos expresiones obtendrán la posición actual de X e Y del mouse. Para la "velocidad angular", ingrese 0. "Velocidad angular 0" significa que ocurrirá una rotación inmediata de su objeto. Eso es lo que necesitamos para rotar la "torreta". Para controlar la velocidad de rotación de un objeto, ingrese un valor más pequeño para "velocidad angular". Por ejemplo, para reducir la velocidad de su objeto "torreta", ingrese algo como un valor de 100.

En este punto, los parámetros de este evento se verán así: ![](/gdevelop5/tutorials/rotate-toward-pos-event-parameters.png)

Hemos estado usando expresiones para obtener las posiciones X e Y del mouse. Puede encontrar más expresiones en el editor de "expresiones" haciendo clic en el icono azul junto a los campos de valor: ![](/gdevelop5/tutorials/platform-game/expression-icon.png)

Cuando haces clic en el ícono del editor de "expresiones", puedes buscar todas las expresiones disponibles. Las expresiones están ordenadas en categorías. ![](/gdevelop5/tutorials/platform-game/expression-editor.png)

Para guardar los cambios realizados en el editor de "expresiones", seleccione / haga clic en el botón "Aceptar" que se encuentra en la esquina inferior derecha del panel.

Ahora puede ejecutar una vista previa presionando el botón "vista previa" en la barra de herramientas ubicada arriba de la escena. ![](/gdevelop5/preview-button.png)

La "torreta" ahora girará hacia la posición del ratón. Si la rotación no funciona, observe detenidamente los pasos anteriores o consulte el tutorial finalizado. ![](/gdevelop5/tutorials/turret-rotate-toward-mouse.png)

### Dispara balas con la torreta

El jugador deberá poder disparar balas a los enemigos. Para configurar esto, Necesitará un nuevo objeto "bala". En la lista de "Objetos" de la escena ubicada en el lado derecho de la interfaz GD, haga clic con el ratón en el objeto "torreta". Elija "agregar un nuevo objeto" o, alternativamente, haga clic en el botón "agregar nuevo objeto". ![](/gdevelop5/tutorials/turret-add-new-object.png)

Elija "Sprite" en el panel de la lista emergente. Ahora, agregue una animación seleccionando el botón agregar. Elige la imagen "Bullet.png". Renombra el nuevo objeto "bala". Si necesita ayuda adicional para agregar un nuevo objeto, consulte la explicación del objeto "torreta" más arriba.

El próximo evento necesario comprobará si se hace clic o se presiona el botón izquierdo del mouse. Si se presiona / hace clic, la acción creará las viñetas que se dispararán. Para crear las viñetas, vaya a la pestaña "NEWSCENE (EVENTOS)". Añadir un nuevo evento. Nuevamente, si necesita ayuda adicional, consulte el evento "torreta" anterior. "Crear un nuevo objeto" será la primera acción en el evento. Esta acción está disponible en El panel "Acciones comunes para todos los objetos" "Objetos". ![](/gdevelop5/tutorials/create-object-action.png)

Cuando se selecciona "Crear un nuevo objeto", se abrirá otra lista de opciones en el lado derecho del panel de selección. Muestra el nombre de la acción, así como los parámetros para la acción. Complete el primer parámetro seleccionando / haciendo clic en "Objeto". Aparecerá "viñeta" de una lista de los objetos disponibles. Seleccione "viñeta" de la lista. ![](/gdevelop5/tutorials/create-object-action-parameters.png)

Dado que solo hay una capa en el juego, el parámetro de capa no es obligatorio. Haga clic en Ok para finalizar la acción.

Luego agrega otra acción después de esta primera acción. No _crea_ otro evento. Haga clic en "Agregar acción" debajo de la primera acción! ![](/gdevelop5/tutorials/add-second-action.png)

Esta vez, elija la acción llamada "Acción común para todos los objetos" "Movimiento" "Agregar una fuerza (Ángulo)". ![](/gdevelop5/tutorials/add-force-angle-action.png)

GDevelop proporciona un sistema de fuerzas incorporado. Este sistema te permite mover fácilmente los objetos del juego. En nuestro caso, cuando se dispara la bala, la acción se utilizará para mover la bala hacia el mouse. Como primer parámetro (Objeto), ingrese "viñeta" para que GDevelop mueva la viñeta que se acaba de crear en la acción anterior.

Para "ángulo de movimiento", use la dirección de la torreta. Ingrese "turret.Direction ()" en el segundo parámetro. Para el tercer parámetro, ingrese "400". La bala se moverá con una velocidad de 400 píxeles por segundo. Finalmente, ingrese "1" en el último parámetro. Este último parámetro establece una fuerza que se aplica constantemente a la bala. Una vez que se inicia el movimiento, este parámetro mantiene la bala en movimiento. ![](/gdevelop5/tutorials/add-force-angle-parameters.png)

Nuestras dos acciones se inician cuando el jugador está disparando. es decir: presionando el botón izquierdo del ratón. Para crear este evento en el editor de "Eventos", necesitamos agregar una condición al evento, hacer clic / seleccionar "Agregar condición". ![](/gdevelop5/tutorials/add-condition.png)

Elija la condición "Ratón y toque" "Botón del ratón pulsado o pulsado". ![](/gdevelop5/tutorials/mouse-button-pressed-condition.png)

En la ventana emergente del panel lateral derecho, haga clic en el botón para probar el parámetro. Seleccione "Izquierda" de la lista. ![](/gdevelop5/tutorials/mouse-button-pressed-parameter.png)

Finalmente, cierre la ventana haciendo clic en el botón "Aceptar". La condición ahora se agrega al evento.

Si obtienes una vista previa del juego ahora, verás que tenemos dos problemas:

- Las balas se disparan demasiado rápido.
- Las balas aparecen en el origen del objeto. Esto hace que las balas parezcan poco realistas.

Para abordar el primer problema de los disparos de balas demasiado rápido, vamos a utilizar un temporizador. Agregue una segunda condición al último evento que hemos creado. Elija la condición "Condiciones comunes para todos los objetos" "Temporizadores" "Valor de un temporizador". ![](/gdevelop5/tutorials/timer-value-condition.png)

El panel aparece a la derecha. El primer parámetro, "Objeto", indica el nombre del objeto. Dejalo en blanco. El segundo parámetro, "Nombre del temporizador", es el nombre del temporizador. Introduzca "firerate". // ¡No olvide las comillas alrededor del nombre del temporizador! // Ingrese 0.25 en el tercer parámetro, "Tiempo en segundos". ![](/gdevelop5/tutorials/timer-value-condition-parameters.png)

¡No hemos terminado todavía! Queremos disparar balas cada 0.25 segundos. Para hacer eso, necesitamos reiniciar el temporizador para que comience desde 0 después de 0.25 segundos. Así que vamos a agregar una acción: "Temporizadores y tiempo" "Restablecer un temporizador". Esta acción se colocará justo debajo de nuestra acción de "movimiento" en el mismo evento. ![](/gdevelop5/tutorials/reset-timer-action.png)

Ingrese "firerate" como el parámetro que es el nombre de nuestro temporizador (nuevamente, ¡tenga en cuenta las comillas!). ![](/gdevelop5/tutorials/reset-timer-action-parameter.png)

Este par de condiciones y acciones asegurarán que las acciones utilizadas para disparar la bala se repitan cuando hayan transcurrido al menos 0.25 segundos desde que se creó la última bala. ![](/gdevelop5/tutorials/shoot-bullet-event1.png)

Ahora debemos configurar la forma en que se disparan las balas desde el cañón de la torreta.

Para hacer eso, vamos a agregar un punto personalizado a nuestro objeto "torreta". Luego creamos las balas en la posición de ese punto. Abramos las propiedades del objeto haciendo clic derecho en el objeto "torreta" en el lado derecho de la pantalla de la interfaz de escena. Seleccione Editar objeto de la lista emergente. Esta selección abre la ventana donde agregamos animaciones a nuestros objetos. Veremos un botón llamado "EDITAR PUNTOS". ![](/gdevelop5/tutorials/edit-point-button.png)

Después de hacer clic en el botón, podemos ver que nuestro objeto tiene actualmente 2 puntos por defecto, el punto "Origen" y el punto "Centro". ![](/ gdevelop5/ tutoriales/ default-points.png)

No podemos cambiar el nombre de estos puntos, pero podemos cambiar su posición predeterminada. En este caso, agregaremos un punto más al objeto.

Vamos a hacer clic en el botón "agregar" (más el símbolo) para agregar un punto personalizado a nuestro objeto "torreta". Inmediatamente vemos el nuevo punto agregado a la lista. Puede ser identificado por el nombre "Punto" y la posición 0,0.

Cambiemos el nombre de este punto a "Canon" y establezcamos la posición X en 110 y la posición Y en 35. ![](/gdevelop5/tutorials/custom-point-name-position.png)

Ahora, cuando realicemos una vista previa del juego, veremos nuestro punto personalizado ubicado al final de nuestro canon. ![](/gdevelop5/tutorials/custom-point-preview.png)

Cierra la ventana y aplica los cambios.

Lo único que queda por hacer es decirle a GDevelop que dispare las balas desde el punto "Canon" del objeto "torreta". Así que en nuestra acción "crear viñeta", necesitamos cambiar las expresiones turret.X () y turret.Y (), a turret.PointX (Canon) y turret.PointY (Canon). Podemos cambiarlos haciendo clic en las expresiones dentro del editor. ![](/gdevelop5/tutorials/replace-expression-in-editor.png)

// No olvide la C mayúscula en Canon, ya que el nombre de los puntos distingue mayúsculas y minúsculas.//

Si ejecutamos la vista previa ahora, nuestras balas deben dispararse desde el "Canon" de la " torreta ", pero puede notar que, a veces, la bala está un poco desplazada. Esto sucede porque el punto de origen de la bala está en la parte superior esquina izquierda. De la misma manera que hicimos con el punto Canon para la torreta, cambie la posición del punto de origen de la bala para que esté en el centro. ![](/gdevelop5/tutorials/bullet_origin_point.png)

### Creando enemigos atacando la torreta

Primero, debemos crear los objetos utilizados para los enemigos: agregar un objeto a la lista de objetos (haga clic con el botón derecho en un objeto existente\> agregar un objeto. Elija un objeto Sprite como antes). Denomínalo "enemigo".

Edite el objeto (haga clic con el botón derecho en la lista y seleccione Editar objeto de la lista) a continuación, agregue una animación al objeto y dos imágenes: tank2fr1.png y tank2fr2.png. ![](/gdevelop5/tutorials/enemy-animation.png)

Luego, cambie el tiempo entre las imágenes a 0.05 y cambie la animación a Bucle para hacer que la animación se repita. ![](/gdevelop5/tutorials/enemy-animation-speed.png)

Haga clic en "Aplicar" cuando haya terminado.

### ¡Detente! ¡Ahorrar tiempo!

Antes de continuar, recuerde guardar con frecuencia: haga clic en Archivo y luego en Guardar para guardar su proyecto. ![](/gdevelop5/tutorials/save-project.png)

### AI enemigo

Volvamos al juego. Queremos que los enemigos se muevan hacia la torreta. Ir al editor de "Evento". Añadir un nuevo evento. Ahora, queremos crear un enemigo cada segundo. Añadir una condición "Temporizadores y tiempo"; "Valor de un temporizador de escena". Introduzca 1 en el "Tiempo en segundos" y "Creación de enemigos" para el "Nombre del temporizador". _No olvide las comillas cuando ingrese el nombre del temporizador._

El siguiente paso es agregar una acción para crear un objeto enemigo. Esto se hace usando "Agregar una acción", "Acción común para todos los objetos", "Objetos". "Crear un objeto". Seleccione "enemigo" en el primer parámetro "Objeto para crear". Para el segundo parámetro de "posición X", ingrese la expresión Aleatorio (800). Esta entrada devolverá un número aleatorio entre 0 y 800. Cuando se crea cada enemigo, tendrá una posición de pantalla diferente. Para la posición Y, ingrese -50. Este valor creará los enemigos fuera del área de la pantalla. Crear a los enemigos fuera de la pantalla evita que el jugador del juego sienta que un tanque enemigo apareció de la nada.

Finalmente, agreguemos una acción para restablecer el temporizador ("Temporizadores y tiempo", Restablecer un temporizador ".)" EnemyCreation "debe ingresarse en el parámetro. Nuevamente, no olvide las comillas cuando ingrese el nombre del temporizador. En este punto, nuestro evento se verá así: ![](/gdevelop5/tutorials/create-enemy-event.png)

Si ejecutamos una vista previa ahora, no notaremos nada. Dado que los enemigos se crean fuera de la pantalla, no se pueden ver. Para ver al enemigo, necesitamos mover a los enemigos hacia el jugador. Para crear esta acción, agrega otro evento. Este evento no tiene condición. Elija "Agregar acción". Luego, desde el panel emergente, seleccione "Acción común para todos los objetos", "Movimiento", "Agregar una fuerza para moverse hacia un objeto". ![](/gdevelop5/tutorials/move-object-toward-other-event.png)

En el panel lateral derecho de "Agregar una fuerza para moverse hacia un objeto", selecciona "enemigo" para el primer parámetro. Seleccione "torreta" para el segundo parámetro. Introduzca 150 píxeles por segundo para la velocidad. Dado que la fuerza será continua, la amortiguación es 0. ![](/gdevelop5/tutorials/move-object-toward-another-parameters.png)

Ahora, si ejecutamos una vista previa, veremos que nuestros enemigos se mueven hacia la torreta. Sin embargo, puedes notar que los enemigos en realidad no giran hacia la torreta. Vamos a hacer algo al respecto. Agreguemos una segunda acción después del movimiento: "Acción común para todos los objetos", "Ángulo", "Girar hacia la posición". Para el primer parámetro a la derecha del panel, selecciona "enemigo". Queremos rotar al enemigo. Para la posición X e Y, vamos a usar una expresión para obtener el punto central de la torreta y hacer que los enemigos giren hacia ese punto con una velocidad angular de 0. Una velocidad angular de 0 causa la rotación inmediata del objeto. ![](/gdevelop5/tutorials/rotate-object-toward-position.png)

En este punto, nuestro evento enemigo se verá así: ![](/gdevelop5/tutorials/create-rotate-move-enemies-event.png)

Si ejecutamos la vista previa ahora, nuestros enemigos se moverán y girarán hacia la torreta. ![](/gdevelop5/tutorials/turret-screenshot-enemies-moving.png)

### Añadiendo explosiones

¡Es hora de destruir los tanques! Primero, cuando una bala choca con un tanque, necesitamos una explosión en la posición del tanque. Agrega un nuevo objeto sprite, llámalo "explosión" y agrega todas las imágenes a la animación que comienza con Explosion_ ![](/gdevelop5/tutorials/select-all-explosion-images.png)

Después de agregar todas las imágenes a la animación, establezca el tiempo entre las imágenes a 0.01 segundos. ![](/gdevelop5/tutorials/explosion-animation-speed.png)

Guarde la animación haciendo clic / seleccionando "Aplicar".

A continuación, queremos crear la explosión cuando la bala está en una colisión con el enemigo. Agregue una nueva condición en blanco: "Condiciones comunes para todos los objetos", "Colisión", Colisión ![](/gdevelop5/tutorials/collision-check-event.png)

En el panel del lado derecho, seleccione "viñeta" para el primer parámetro. Para el segundo parámetro, seleccione "enemigo". ![](/gdevelop5/tutorials/collision-between-object-condition-parameters.png)

Agrega una acción para crear el objeto de explosión de la misma manera que creamos las balas y los enemigos. Para la posición X e Y, usa la expresión enemy.X () y enemy.Y (). Esta expresión obtendrá la posición X e Y del objeto enemigo que está en colisión con la bala. ![](/gdevelop5/tutorials/create-explosion-event-parameters.png)

Finalmente, agregue la acción después de crear la explosión. Acciones comunes para todos los objetos\> Objeto\> Eliminar un objeto y en el lado derecho para el parámetro seleccionar el objeto enemigo, ya que queremos eliminar al enemigo. Agrega la misma acción de nuevo, para eliminar también la bala justo después de que se elimine el enemigo. En este punto, nuestro evento debería verse así. ![](/gdevelop5/tutorials/enemy-moving-rotating-exploding.png)

Si ejecuta una vista previa ahora, notará un par de problemas:

- Primero, los objetos de explosión no se crean exactamente en la posición del enemigo.
- Segundo, el objeto de explosión creado permanece en la escena.

Para resolver el primer problema de los objetos de "explosión" que quedan en la escena, debemos eliminar el objeto de explosión una vez que las animaciones hayan finalizado. Agregue un nuevo evento vacío y la condición "Sprite", "Animaciones e imágenes", "Animación terminada". ![](/gdevelop5/tutorials/animation-finished-event.png)

Para el parámetro en el panel emergente derecho, seleccione el objeto "explosión". Cuando el objeto "explosión" haya finalizado, queremos eliminar la animación de la explosión. ![](/gdevelop5/tutorials/check-animation-finished-event-parameter.png)

Para eliminar el objeto de "explosión" de la animación, agregue la acción, "elimine el objeto de explosión".

Para resolver el segundo problema, primero debemos entender su causa. Cuando creamos el objeto de explosión, usamos las expresiones "enemy.X ()" y "enemy.Y ()". Creamos los objetos de "explosión" en el punto "Origen" del objeto "enemigo". El punto "Origen" está, por defecto, ubicado en la esquina superior izquierda del "enemigo" (0). También estamos creando las explosiones desde su punto "Origen", que es la esquina superior izquierda del objeto "explosión" (0).

Para resolver este problema, necesitamos cambiar la posición del punto "Origen" de la explosión. El punto "Origen" debe colocarse en el centro del objeto. Debe editar el objeto "explosión" haciendo clic con el botón derecho en el objeto y seleccionando "Editar objeto" de la lista. En la siguiente ventana, seleccione "Editar Puntos".

Ahora, cambie la posición X e Y del punto "Origen" a 120. Esto establece el punto en el centro de la imagen de "explosión". ![](/gdevelop5/tutorials/change-origin-point-position.png)

Finalmente, en lugar de crear el objeto "explosión" en el punto "Origen" del "enemigo", es necesario crear el objeto en el Punto Centro. Cambia la expresión en la acción de crear explosión de enemy.X () a enemy.PointX (Center) y forma enemy.Y () a enemy.PointY (Center) ![](/gdevelop5/tutorials/create-explosion-new-expression.png)

Si ejecutamos una vista previa ahora, nuestros enemigos explotarán de manera realista desde el centro del objeto. ![](/gdevelop5/tutorials/turret-screenshot-enemies-are-exploding.png)

### Añadiendo más explosiones y un juego terminado

Hasta ahora, el jugador no podía morir. Cuando un tanque enemigo golpea la torreta del jugador, queremos que la torreta sea destruida. Añadir un nuevo evento. Sigue el mismo procedimiento que seguiste para crear un evento para destruir a los enemigos.

- Agregue una condición para probar una colisión entre un tanque y la torreta.
- Crear una explosión en la posición de la torreta.
- Agrega una acción para destruir la torreta.

![](/gdevelop5/tutorials/delete-turret-on-collision-event.png)

Además, sería interesante mostrar un texto de "Juego terminado" cuando se destruye la torreta: Agrega un nuevo objeto usando la lista de objetos de escena. Esta vez, elige un objeto "Texto". Nómbrelo "GameOver". ![](/gdevelop5/tutorials/select-text-object-from-list.png)

Edite el objeto "GameOver" haciendo clic derecho en el objeto. Seleccione "Editar objeto" de la lista emergente. Ahora, cambie el texto a "Game Over", el color del texto a rojo y el tamaño del texto a 40. ![](/gdevelop5/tutorials/edit-text-object.png)

También podemos establecer una fuente personalizada simplemente ingresando la ruta de la fuente. En este caso nuestra fuente se encuentra en la carpeta del proyecto. Solo necesitamos ingresar el nombre del archivo de fuente: ![](/gdevelop5/tutorials/custom-text-font.png)

Finalmente, agregue el objeto de texto "Game Over" a la escena.

El siguiente paso es ocultar el objeto de texto. Luego, si no hay una torreta en la escena, (lo que significa que la torreta está destruida) la mostraremos. Agregue un nuevo evento en blanco y agregue la condición "Escena", "Al principio de la escena". ![](/gdevelop5/tutorials/at-the-beginning-of-the-scene-condition.png)

Esta condición no tiene parámetros. Lo único que hace es ejecutar la acción una vez al principio de la escena. A continuación, agregue la acción al evento "Al comienzo de la escena". Uso: "Acciones comunes para todos los objetos", "Visibilidad", "Ocultar". ![](/gdevelop5/tutorials/hide-object-event.png)

Para el parámetro, seleccione el objeto GameOver ya que queremos ocultar este objeto ![](/gdevelop5/tutorials/hide-object-event-parameter.png)

Si no hay una torreta en la escena, queremos mostrar el Objeto de texto "GameOver". Añadir un nuevo evento vacío. Agregue la condición "Condiciones comunes para todos los objetos", "Objetos", "Recuento de objetos". ![](/gdevelop5/tutorials/objects-count-condition.png)

Para el primer parámetro en el lado derecho, seleccione el objeto de la torreta, para el signo de prueba seleccione el signo igual y para el valor de la prueba ingrese 0, como queremos comprobar si el número de la torreta en la escena es 0. ![](/gdevelop5/tutorials/object-count-condition-parameters.png)

Y lo que queremos hacer es mostrar el texto GameOver si no hay una torreta en la escena, así que agregue la acción Acción común para todos los objetos\> Visibilidad\> Mostrar y para el parámetro que queremos seleccionar el objeto GameOver. ![](/gdevelop5/tutorials/destroy-turret-event.png)

Finalmente, un efecto interesante es detener el juego y mostrar Game Over con un poco de retraso. Agregue una segunda condición "Temporizadores y tiempo", Valor de un temporizador de escena ". Para el parámetro de tiempo ingrese 0.1 y para el parámetro de nombre ingrese" GameOver ". Agregue una segunda acción: "Temporizadores y tiempo", "Cambiar escala de tiempo". Ingrese 0 como parámetro para detener el juego y mostrar el texto de Game Over después de 0.1 segundos.

Esto es lo que deberían ver todos los eventos en este punto. ![](/gdevelop5/tutorials/all-events.png)

Puede previsualizar el juego y debería ver que una vez que se destruye la torreta, con un poco de retraso se muestra el texto Game Over y el juego se detiene. ![](/gdevelop5/tutorials/gameover-screenshot.png)

### Optimizando el juego

Cuando una bala está fuera del área de la pantalla, ya no necesitamos la bala. Incluso fuera de pantalla, las balas todavía tienen movimiento. También se están comprobando las colisiones entre la bala y el tanque. Cada dispositivo tiene recursos limitados en memoria y capacidad de procesamiento. Estamos desperdiciando recursos valiosos al continuar verificando las condiciones y acciones de los objetos cuando están fuera de la pantalla. Nuestro juego podría ralentizarse, bloquearse y / o volverse inejecutable cuando alcance el límite de la memoria del dispositivo en el que estamos jugando. Desea que su juego se pueda jugar en tantos dispositivos como sea posible, por lo que siempre necesita optimizar su juego. Una forma de hacerlo es eliminar objetos que ya no son necesarios en el juego. De esta manera, limitas la cantidad de memoria y potencia de procesamiento que usa el juego.

Podríamos agregar un evento para destruir las balas cuando están demasiado lejos de la torreta, eso es fácil, pero también podemos usar un objeto "Comportamiento". Un comportamiento en GDevelop agrega una característica determinada a un objeto. En este caso, vamos a agregar el comportamiento "Destruir fuera de la pantalla" a las viñetas. Luego serán destruidos cuando estén fuera de la pantalla del juego.

En la lista "Objetos" de la escena, haga clic derecho en el objeto "viñeta". Desde el selector emergente, seleccione "Editar objeto". Se abrirá el "Panel de propiedades". Seleccione / haga clic en la pestaña "Comportamientos". La pestaña "Comportamientos" muestra todos los comportamientos que hemos agregado a nuestro objeto. Está vacío ahora. ![](/gdevelop5/behaviors-tab.png)

Haga clic en el botón "Haga clic para agregar un comportamiento al objeto" ![](/ gdevelop5/ objects/ add-symbol.png) ![](/gdevelop5/add-behavior-button.png)

A continuación, seleccione de la lista el comportamiento de la pantalla Destruir fuera. ![](/gdevelop5/behaviors/destroy-outside-screen-behavior-inlist.png)

A continuación, usted verá que el comportamiento se agrega a la lista. Normalmente, si el comportamiento tiene algún parámetro, también se muestra aquí para que pueda cambiarlo. Pero este comportamiento no tiene parámetros, ya que lo único que hace es destruir el objeto cuando está fuera de la pantalla. Haga clic en Aplicar y hemos terminado.

Si ejecuta la vista previa ahora, probablemente no notará ninguna diferencia, ya que el juego es muy simple y es muy probable que use un dispositivo con al menos 2 GB de RAM y una CPU de doble núcleo. Por lo tanto, hay un montón de recursos para nuestro juego simple, pero en caso de que creamos cientos y miles de balas que puedes probar, puedes notar un poco de lentitud después de un tiempo sin destruirlas.

### Añadir un fondo

Una última cosa es agregar un fondo. Esto le dará al juego un aspecto más completo.

Añadir un nuevo objeto Sprite. Nómbrelo como fondo. Agregue la imagen "background.jpg" al objeto. A continuación, puede agregar el objeto a la escena como de costumbre. Asegúrate de que llena toda la escena. Para hacerlo más fácil, puede habilitar la cuadrícula con el botón en la parte superior y debería ayudar a posicionar el objeto. ![](/gdevelop5/toggle-grid-button.png)

Observe que el objeto de fondo cubre todos los demás objetos. Para resolver este problema, necesitamos cambiar el orden Z del objeto. Mientras se selecciona el objeto de fondo, a la izquierda de la pantalla del editor de escenas, verá una lista de "Propiedades". Si no ve la lista de "Propiedades", puede abrirla usando el botón "Propiedades" en la barra de herramientas que se encuentra en la parte superior de la interfaz de GD. ![](/gdevelop5/object-properties-button.png)

Podemos cambiar todo tipo de propiedades utilizando el Editor de propiedades. La posición, el ángulo y el tamaño del objeto se pueden cambiar. En este caso, queremos cambiar el orden Z. ![](/gdevelop5/objects/object-zorder-properties.png)

Cambie el valor del orden Z a un número bajo. Para el fondo usaremos un número negativo - 1. La razón del valor negativo es que cuando estamos creando las balas, los enemigos y las explosiones, los estamos creando en orden Z de forma predeterminada. Necesitamos colocar el fondo debajo de 0, de lo contrario no veremos nada más que la torreta en nuestro juego. Otra forma de solucionarlo es decirle a GDevelop que coloque los tanques y las explosiones y balas en una orden Z más alta. Podemos posicionar el fondo en 0, pero es algo que usted, el desarrollador, debe decidir por sí mismo. Cada problema puede tener una serie de soluciones diferentes.

¡Estás listo! El juego está completo y listo para ser compartido.

### Añadir comentarios

Así, nuestro juego está hecho. Es jugable. ¿Qué pasa si quieres compartir la fuente con alguien más? Digamos que estás trabajando en equipo. Alguien en el equipo quisiera hacer modificaciones al juego. ¿Cómo sabe esa persona dónde buscar los eventos de los enemigos, las balas o la torreta? Puede sonar tonto para ti. La mayoría de los eventos en GDevelop se explican por sí mismos. Nuestro juego es lo suficientemente simple como para ver lo que está sucediendo. Sin embargo, imagine una situación en la que tenga un juego hecho de cientos o miles de eventos. Aquí es donde los comentarios son útiles. Podemos dejar recordatorios en el juego para otros y también para nosotros mismos. Confía en mí, aunque tú eres el que creó el juego, en un gran juego complejo, incluso no recordarás dónde encontrar cosas diferentes. Esto es especialmente cierto meses después. _Siempre use comentarios independientemente del tamaño del proyecto._ Es solo una buena práctica de programación.

Para agregar comentarios a su juego, simplemente haga clic en el botón "agregar comentario" en la barra de herramientas que se encuentra en la parte superior de la pantalla "Eventos". ![](/gdevelop5/add-comment-button.png)

Verá un cuadro amarillo en el editor de "Eventos". Cuando haces clic / seleccionas la casilla, puedes comenzar a escribir un comentario. ![](/gdevelop5/tutorials/comment.png)

Puede cambiar la posición de cada evento y hacer comentarios moviendo el mouse sobre el borde azul de la izquierda y arrastrándolo hacia arriba y hacia abajo. Tus primeros comentarios se verán así: ![](/gdevelop5/tutorials/all-events-with-comments.png)

### Vamos, a descubrir GDevelop por ti mismo

Puede navegar por los otros [tutoriales](http://wiki.compilgames.net/doku.php/es/gdevelop5/tutorials) y leer la página [Guia de Inicio](http://wiki.compilgames.net/doku.php/es/gdevelop5/getting_started).

¡También hay muchos ejemplos y plantillas incluidas con GDevelop! Puede encontrar más visitando: [gametemplates.itch.io](https://gametemplates.itch.io/gdevelop-examples)

También puede hacer preguntas en el [official forum](http://forum.compilgames.net/)
