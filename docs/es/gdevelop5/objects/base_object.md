---
title: Características comunes a todos los objetos
---
# Características comunes a todos los objetos

En un juego de GDevelop, todo en la pantalla es un objeto.

## Añadir un objeto al juego.

En una escena, podemos agregar objetos simplemente haciendo clic en el botón Agregar objeto a la derecha de la lista de objetos en la parte inferior: ![](/gdevelop5/objects/add-object-button.png)

Puede elegir entre muchos tipos diferentes de objetos, todos con propiedades y propósitos específicos: ![](/gdevelop5/objects/object-types.png)

Dependiendo del tipo de objeto que haya seleccionado, el editor, el aspecto del objeto y las características disponibles en los eventos serán diferentes. Como el objetivo de esta página es explicar los objetos en general, no entraremos en los detalles de estas propiedades únicas para cada tipo. Puede encontrar [información detallada sobre cada tipo de objeto aquí](http://wiki.compilgames.net/doku.php/gdevelop5/objects).

# Objetos en la escena (Objects in the scene)

## Añadir una instancia en la escena.

Un objeto se puede colocar en la escena seleccionando el objeto en la pestaña Objeto (hacer clic / tocar en él) y luego hacer clic en la escena para poner una instancia de ese objeto. Una instancia es básicamente una copia del objeto que vive en la escena. Cada instancia tiene sus propias variables, posición, animaciones (para objetos de sprite), contenido (para textos), etc.

Podemos cambiar la posición de un objeto seleccionando el objeto en el editor de scripts y arrastrándolo. Podemos escalar el objeto seleccionando el objeto y arrastrando uno de los puntos de escala blanca. ![](/gdevelop5/objects/coin-selected.png)

## Modificar propiedades.

Cuando seleccionamos un objeto en el editor de escenas, el panel de propiedades a la izquierda muestra información sobre las instancias seleccionadas. Si no está abierto, puede volver a abrirlo haciendo clic en el botón de propiedades en la barra de herramientas: ![](/gdevelop5/objects/object-propeties-button.png)

### Posición (Position)

Puede establecer con precisión la posición de las instancias seleccionadas cambiando los valores de X e Y en las propiedades: ![](/gdevelop5/objects/object-position-properties.png)

## Ángulo (Angle)

Puede establecer el ángulo de una instancia (s) cambiando el valor del ángulo: ![](/gdevelop5/objects/object-angle-properties.png)

El ángulo puede ser cualquier valor de 0 a 360 grados. Recuerde este diagrama para ver cuál es la orientación de un ángulo dado: ![](/gdevelop5/objects/gdevelop_co.png)

## Orden Z (Z order)

Puede cambiar el orden de una instancia en las propiedades: ![](/gdevelop5/objects/object-zorder-properties.png)

El propósito del orden Z es especificar qué objeto se mostrará primero cuando las instancias se superponen. De manera más precisa, podemos controlar si el objeto está detrás de otro objeto o si está al frente configurando diferentes valores: cuando dos objetos se superponen, el objeto con un orden Z de menor valor se mostrará detrás del otro.

Los valores pueden ser cualquier número entero, incluidos los números negativos y 0.

![](/gdevelop5/objects/coin-bush-zorder.png) En la imagen de arriba, el orden Z del arbusto se deja 2, el orden Z de la moneda es 1 y el orden Z del arbusto de la derecha es 0.

## Capa (Layer)

Puede establecer la capa de una instancia: ![](/gdevelop5/objects/object-layer-properties.png)

Por defecto, cada escena de GDevelop viene con una sola capa llamada "Capa base". Aquí es donde todos los objetos se encuentran en nuestra escena. Podemos agregar más capas para varios propósitos y poner cualquier instancia en cualquier capa. Por ejemplo, puede haber una capa para mostrar los controles en la pantalla, otra para mostrar un menú, un mapa o un fondo.

## Posición de bloqueo / ángulo (Lock position/angle)

Al marcar la casilla "Bloquear posición / ángulo en el editor", puede hacer que la instancia sea inamovible en el editor: ![](/gdevelop5/objects/lock-sprite.png)

Cuando la instancia está bloqueada, ya no podemos seleccionarla en la escena. Hay ocasiones en las que hay muchos objetos que se superponen entre sí en su escena. Esto hace que sea difícil seleccionar algunos de ellos, ya que seguimos seleccionando los que no pretendemos. En tales casos, puede bloquear las instancias.

Puede desbloquear una instancia bloqueada abriendo el panel de instancias, que muestra todas las instancias en nuestra escena y seleccionando el objeto de la lista.

## Variables de instancia (Instance variables)

El botón "editar variables" le permite especificar variables que son específicas de la instancia seleccionada: ![](/gdevelop5/objects/instance-variables-property.png)

Una variable es básicamente un contenedor que contiene un valor (un número, un texto) que se puede comparar y modificar durante el juego. Hay diferentes tipos de variables en GDevelop, en particular, cada objeto puede contener variables. Cuando el juego se está ejecutando, cada instancia del objeto que vive en la escena tendrá sus propias variables.

Las "Editar variables" le permiten especificar variables que son específicas de la instancia seleccionada. Por ejemplo, si tiene objetos que representan cuadros con oro en la escena, puede modificar la variable llamada "Oro" de cada instancia para establecer diferentes números. Luego, en los eventos, cuando el jugador colisiona con un cuadro, puedes leer el valor variable para agregarlo a la cantidad de oro del jugador.

## Tamaño personalizado (Custom size)

Puede cambiar el tamaño de sus objetos habilitando el tamaño personalizado en el panel de propiedades y luego ingrese las dimensiones de ancho y altura personalizadas en píxeles: ![](/gdevelop5/objects/customsize-properties.png)

# Grupos de objetos (Object groups)

Un grupo de objetos es un conjunto de objetos. Por ejemplo, un grupo llamado "Enemigos" puede contener el objeto "Seta", "Bomba", "Dinosaurio". Luego puede usar el nombre del grupo en los eventos para referirse a todos los objetos contenidos en el grupo.

Esto hace posible crear eventos que se aplican a muchos objetos sin repetir eventos varias veces, lo que aumenta el rendimiento de su juego, la facilidad de mantenimiento y la legibilidad de sus eventos.

Para abrir el Editor de grupos, haga clic en el icono de grupos en la barra de herramientas: ![](/gdevelop5/objects/groups-button.png)

En el Editor de grupos se enumeran todos los grupos de la escena (y también los grupos globales, que están disponibles en todas las escenas del juego). Para agregar un grupo, haga clic en el botón en la parte inferior de la lista: ![](/gdevelop5/objects/add-group-button.png)

Un nuevo grupo se agrega a los perdidos: ![](/gdevelop5/objects/group-group.png)

* Para cambiar el nombre del grupo, haga clic derecho en el grupo y seleccione **cambiar nombre**. * Para agregar objetos al grupo, toque o haga clic en el grupo.

En la ventana abierta para editar el grupo, haga clic en el campo inferior y seleccione un objeto (o escriba el nombre de un objeto) para agregarlo al grupo. ![](/gdevelop5/objects/edit-group.png)

# Variables (Variables)

Cada objeto puede contener variables, que son celdas de memoria que puede usar para almacenar información. Cuando el juego se está ejecutando, cada instancia del objeto que vive en la escena tendrá sus propias variables.

Lee [esta página](/gdevelop5/all-features/variables) para aprender más sobre variables.

# Temporizadores (Timers)

Los objetos pueden mantener sus propios temporizadores, y cada temporizador será único para cada instancia del objeto que vive en la escena. Los temporizadores de objetos son útiles para crear instancias para iniciar acciones después de / cada X segundos.

Por ejemplo, un uso clásico es simular disparos de balas. Si tiene un solo tanque en la escena, puede usar un temporizador de escena para que cada 3 segundos, este tanque pueda disparar (crear una bala) y luego reiniciar el temporizador (para que el tanque pueda disparar nuevamente).

El problema es que si tienes 2 tanques y usas un temporizador de escena, notarás que ambos tanques disparan al mismo tiempo, porque comparten el mismo temporizador de escena. Necesitas tener dos temporizadores separados, independientes entre sí, para hacer que el segundo tanque dispare a su propio ritmo. Pero ¿y si tienes 100 tanques? No desea crear 100 temporizadores de escena, uno por instancia.

Esto es cuando los temporizadores de objetos se están volviendo útiles: reemplace cada condición / acción usando el temporizador de escena con las condiciones / acciones para usar temporizadores de objetos. Durante el juego, GDevelop creará un temporizador dentro de cada instancia del tanque. Cuando utilizará una condición para verificar el valor de un temporizador, solo se seleccionará la instancia que tenga un temporizador que tenga un valor en segundos que sea mayor al número que ingresó.

Puedes leer más sobre los temporizadores aquí: [](/gdevelop5/all-features/timers)

# Editor de eventos (Events Editor)

Puedes cambiar y manipular las propiedades de una instancia de un objeto, o de varias instancias, usando eventos durante el juego. De esto se trata la creación de juegos en GDevelop: manipular objetos en tiempo real mientras jugamos. Como el editor de eventos y eventos están fuera del alcance de esta página, consulte la página de [conceptos básicos de creación de juegos](/gdevelop5/tutorials/basic-game-making-concepts) para comenzar.

* Todos los objetos comparten las mismas características comunes (como posición, ángulo y todo lo que está escrito en esta página), y hay muchas condiciones y acciones que puede usar para todos los objetos.
* Los objetos también pueden proporcionarle características específicas. Por ejemplo, los [Objetos Sprite (Sprite objects)](/gdevelop5/objects/sprite) pueden tener animaciones, y la animación que se está reproduciendo se puede cambiar mediante una acción.
