---
title: Cómo hacer un juego de plataformas
---
# Cómo hacer un juego de plataformas

Este tutorial te ayudará a comenzar a utilizar **GDevelop**: Crearás un juego de plataformas muy simple donde el jugador puede saltar sobre plataformas y recolectar monedas.

Tenga en cuenta que puede leer la página [Empezando](/es/gdevelop5/ getting_started) para obtener una descripción general del software: explica los conceptos principales y describe la interfaz de GDevelop.

## Descargar GDevelop

Si no tiene **GDevelop 5**, descárguelo del \[sitio web oficial\](<https://gdevelop-app.com/download/>). Está disponible para Windows, macOS y Linux.

Siempre descargue GDevelop desde esta página para asegurarse de tener la última versión. Instalar (o extraer) GDevelop y lanzarlo.

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-18_224946.png)

## Crear un nuevo juego

Haga clic en `Crear un nuevo proyecto` en la página de inicio. En la ventana, elija una carpeta para su proyecto y seleccione `Proyecto Vacio o Empty Game ` para comenzar un juego nuevo desde cero.

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-18_230624.png)

Para hacer nuestro juego, necesitaremos activos que podamos usar (el personaje del jugador, algunas plataformas, elementos para recopilar ...). Puede descargar recursos aquí: <http://www.compilgames.net/dl/PlatformerTutorialResources.zip>.

Una vez que haya descargado este archivo, extraiga su contenido en la carpeta donde creó el proyecto.

## Añadir una escena

Las escenas son parte de tu juego. Normalmente, cada pantalla diferente de tu juego es una escena: el menú principal, el menú de pausa y los niveles son escenas.

Las escenas contienen objetos, que se muestran en la pantalla. Estos objetos se pueden poner en escena para crear los niveles (estos objetos se llaman "instancias"). Las escenas también contienen los eventos que se ejecutan para animar la escena.

En el administrador del proyecto que se abre a la izquierda, haga clic en el botón `+` debajo de "Escenas":

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-18_231357.png)

Una nueva escena, llamada "Nueva escena", se agrega a la lista. Haga clic en él para abrirlo.

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-18_232300.png) \## Crear el objeto jugador

El jugador controlará un personaje que puede saltar y moverse en plataformas. Vamos a crear este objeto.

A la derecha, puedes ver un panel llamado "Objetos". Haga clic en el botón `+` para agregar un objeto.

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-18_232301.png)

Aparecerá una ventana que muestra diferentes tipos de objetos entre los que puede elegir.

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-18_233506.png)

Diferentes tipos de objetos proporcionan características específicas. Para la mayoría de nuestros objetos, utilizaremos los objetos Sprite, que son objetos animados que se pueden usar para muchos elementos (jugador, plataformas, enemigos, elementos ...).

Haga clic en `Sprite` en la lista. El nuevo objeto se agrega a la escena y el editor de objetos se abre:

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-18_234534.png)

El objeto está vacío por ahora. Los objetos Sprite están compuestos de animaciones, y cada animación puede contener una o más imágenes. ¡Vamos a añadir una animación! Haga clic en el botón `+`.

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-18_234828.png)

La animación se agrega pero sigue vacía sin imágenes. Para agregar una imagen, haga clic en `+` en la miniatura en blanco.

Elija la imagen llamada `p1_stand` en la carpeta del proyecto. La imagen se agrega al objeto:

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-18_235052.png)

Ahora puede cerrar el editor haciendo clic en el botón "Aplicar" en la esquina inferior derecha.

## Poner el objeto en escena.

Para mostrar el jugador en nuestro nivel, lo colocamos en la escena. Cada objeto que agregamos a la escena se llama una "instancia" del objeto.

Nuestra instancia de jugador será única ya que solo tendremos uno en nuestro nivel, pero otros objetos (como plataformas, monedas, enemigos ...) pueden tener múltiples instancias viviendo en la escena.

Para agregar el objeto, simplemente haga clic en él en la lista. Luego se selecciona y se muestra sobre un fondo azul:

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-18_235711.png)

Luego puede arrastrar el objeto a cualquier lugar de la escena para agregar la instancia de este objeto:

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-19_000121.png)

## Dale al objeto un nombre propio

Para que sea más fácil referirse a nuestro objeto, asígnele un nombre en lugar de usar el nombre predeterminado. Haga clic derecho en él (o haga clic en el ícono `⋯`) y elija renombrar. Luego puede escribir "Jugador" y hacer clic en cualquier lugar de la pantalla o presionar la tecla Intro para cambiar el nombre del objeto.

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-19_000719.png)

## Añadir plataformas

El nivel todavía está vacío por ahora sin ninguna plataforma. Vamos a añadir algunos.

Cree un nuevo objeto haciendo clic en el botón `+` en la lista de Objetos. En esta ocasión, elija `Tiled Sprite` cuando se le pregunte por el tipo de objeto:

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-19_001413.png)

Se abre el editor de objetos. Es un poco diferente en comparación con el editor del objeto Sprite, ya que los objetos Tiled Sprite no están animados. Haga clic en `Seleccionar una imagen` y luego en` Elegir una nueva imagen`. Esta vez, elige la imagen llamada `grassHalfMid`.

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-19_001719.png)

Cierre el editor haciendo clic en el botón "Aplicar" en la esquina inferior derecha. Haga clic en el objeto en la lista para seleccionarlo, y haga clic en la escena para colocarlo en el nivel:

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-19_002009.png)

El objeto se agrega a nuestra escena pero es muy pequeño. Haga clic en él y use los controladores para cambiar el tamaño para que se vea como una plataforma:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.00.01.png)

Además, no olvide cambiar el nombre del objeto para que se llame "GrassPlatform" en lugar del nombre predeterminado.

### Tiempo para guardar!

No perdamos lo que hemos hecho hasta ahora: en el menú "Archivo" de la aplicación, haga clic en "Guardar" (o presione Ctrl + S / Cmd + S) para guardar los cambios.

## Añadir comportamientos a objetos

### El jugador

El movimiento del jugador podría crearse usando los eventos de GDevelop, pero sería una tarea bastante larga y difícil recrear un buen motor de plataformas. Afortunadamente, GDevelop ya viene con un motor de plataformas completo incorporado que podemos usar. Para esto, necesitamos usar los "comportamientos de las plataformas", que nos permiten acceder y utilizar el motor de plataformas integrado.

Abra el editor de objetos "Jugador":

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-19_002355.png)

Cambie a la pestaña `Comportamientos` y haga clic en el botón` + `para agregar un comportamiento al objeto. Elija `Objeto que se desplaza sobre plataformas` en la lista de comportamientos disponibles. Luego puede ver el comportamiento en el editor, con una gran cantidad de parámetros que puede modificar:

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-19_002709.png)

Puedes cambiar algunas propiedades como la velocidad de salto. Ajústelo, por ejemplo, a 800 para que el salto sea más potente.

### Plataformas

También necesitamos configurar los objetos para que sean plataformas. Para que el jugador pueda caminar y saltar sobre ellos. De lo contrario, el jugador caerá a través del objeto ya que no le dijimos a nuestro personaje qué hacer cuando aterriza en él. Al configurar un objeto para que sea una plataforma, el personaje del juego de plataformas chocará con él y podrá caminar sobre él.

Para configurar el objeto GrassPlatform para que sea una plataforma, abra el editor de objetos GrassPlatform. Cambie a la pestaña Comportamientos, luego agregue un comportamiento: esta vez, elija el comportamiento `Plataforma`.

![](/es/gdevelop5/tutorials/platform-game/anotacion_2020-06-19_003239.png)

También hay algunas opciones que puedes cambiar. Por ejemplo, la opción "Puede agarrar las plataformas de la plataforma" está ahí para permitir que el personaje del juego de plataformas tome el borde de la plataforma. Si habilitamos esta opción en este momento, el resultado se verá extraño, ya que no tenemos una animación que se muestre cuando el personaje se acerque. Vamos a mantener esto sin marcar.

## Iniciar una vista previa

En este punto, deberías poder probar tu juego presionando el botón "Vista previa" en la parte superior de la pantalla en la barra de herramientas.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.13.25.png)

Cuando presiona el botón, se genera una vista previa y, justo después, se abre una nueva ventana.

Debes poder caminar y saltar usando las teclas predeterminadas: mueve el personaje con las flechas y presiona `Shift` o` Space` para saltar. Siéntase libre de agregar algunas otras plataformas a la escena como lo hicimos antes. Asegúrate de agregar los comportamientos a las plataformas para evitar que el personaje se caiga.

Por ahora, el objeto no tiene animaciones, las añadiremos más tarde.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.14.18.png)

Si el objeto no se está moviendo, asegúrese de haber agregado los comportamientos adecuados.

## Cambiar el color de fondo

El fondo gris es un poco aburrido. Más tarde podemos agregar una imagen, pero por ahora, seamos sencillos. En el editor, haga clic derecho en el fondo gris y elija "Propiedades de escena":

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.16.03.png)

En la nueva ventana que se abrió, haga clic en `Color de fondo de la escena` y seleccione un buen color para el fondo:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.18.08.png)

## Siguiente paso: animar el jugador

Nuestro juego es muy básico por ahora: el jugador no está animado cuando salta o corre. La siguiente parte del tutorial mostrará cómo agregar diferentes animaciones y cómo usar eventos para cambiar las animaciones cuando el estado del jugador cambia.

Lea **[la siguiente parte del tutorial aquí](/es/gdevelop5/tutorials/platform-game/2-player-animations)**!
