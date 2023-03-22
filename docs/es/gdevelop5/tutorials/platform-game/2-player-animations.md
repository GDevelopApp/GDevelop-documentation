---
title: Cómo hacer un juego de plataformas - animación de los jugadores.
---
# Cómo hacer un juego de plataformas: animación de los jugadores.

Este tutorial te explicará cómo agregar diferentes animaciones y cómo usar eventos para cambiar las animaciones cuando el estado del jugador está cambiando.

[Click aquí para leer el tutorial anterior](/gdevelop5/tutorials/platform-game/start) en caso de que no lo hayas hecho.

## Agregar Animaciones (Add animations)

En este momento, el jugador siempre muestra la misma animación de pie, pero vamos a cambiar eso usando eventos.

Pero primero, necesitamos agregar las animaciones apropiadas al objeto Player.

### Animación de Salto (Jumping animation)

Abra el editor del objeto Player y asegúrese de estar en la pestaña `Propiedades`. Luego haga clic en el botón + en la parte inferior de la ventana para agregar una animación. Finalmente, haga clic en la miniatura con el signo `+` de la nueva animación y elija `p1_jump` como la imagen a agregar: ![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_00.56.03.png)

A las animaciones se le pueden dar nombres. Es una manera fácil de diferenciarlos y usarlos en los eventos. Es tan simple como hacer clic en "Nombre de animación opcional" y escribir el nombre que desee.

Introduzca "Inactivo" y "Salto" como nombres para nuestras dos animaciones:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_00.56.53.png)

### Animación Corriendo (Running animation)

También necesitamos agregar la animación de caminar para mostrar cuando el personaje está caminando en una plataforma. Agregue otra animación como hicimos antes y, al agregar imágenes, seleccione las 5 imágenes `p1walk03.png`,` p1walk04.png`,… y `p1_walk07.png`. Puede seleccionar todas las imágenes a la vez o una por una como prefiera. Finalmente establezca el nombre de la animación a `Corriendo`:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_00.59.15.png)

Estas imágenes se mostrarán para crear la animación. Necesitamos ajustar un poco algunas opciones. Primero, haga clic en `No hacer bucle` para cambiar esta opción a `Bucle`. Esto hará que la animación se reinicie cuando se llegue al final. El temporizador muestra el tiempo en segundos entre cada imagen: esta es la velocidad de la animación. Ingrese 0.05 en lugar de 1 para que la animación se reproduzca más rápido:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_01.02.03.png)

Nuestro objeto ya está listo, haga clic en "Aplicar" en la esquina inferior derecha.

## Usa eventos para cambiar animaciones.

### El primer evento: animar al saltar.

Ahora, necesitamos cambiar la animación que muestra el objeto de acuerdo con lo que está haciendo el jugador. Vamos a usar los eventos, que se usan para describir las reglas del juego y cómo los objetos se animan, se mueven y responden a las entradas del jugador. Es un tipo de programación visual que puede aprenderse muy rápidamente y es accesible para todos.

Abra el editor de eventos de la escena haciendo clic en la pestaña llamada `Nueva escena (eventos)`.

Por ahora, el editor de eventos está vacío:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_01.05.29.png)

Agregue el primer evento haciendo clic en el botón Agregar evento en la barra de herramientas superior.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.40.43.png)

Un evento se compone de una lista de condiciones (por ejemplo, para verificar si se está produciendo una colisión, si se presiona una tecla, si la vida del jugador es baja, etc.) y una lista de acciones que suceden cuando se cumplen las condiciones.

Por ahora el evento está vacío:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.41.32.png)

En este primer evento, comprobaremos si el jugador está saltando y cambiaremos su animación en consecuencia. Primero haga clic en `Agregar condición`.

En la nueva ventana, puedes ver todas las condiciones disponibles para hacer tu juego. Queremos comprobar si el objeto Player, que tiene el comportamiento del personaje de Platformer, está saltando. Abra la categoría llamada `Comportamiento de la plataforma`y luego elija` Está saltando`.

La parte derecha de la ventana muestra los parámetros necesarios para configurar la condición. Aquí, queremos comprobar si el objeto "Jugador" está saltando, así que elija Jugador para el primer parámetro (el segundo se llena automáticamente):

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.45.29.png)

¡La condición está lista! Haga clic en Aceptar en la esquina inferior derecha para cerrar la ventana y ver la condición agregada en el evento:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.47.17.png)

Ahora agreguemos la acción para cambiar la animación del Jugador cuando el personaje está saltando. Haga clic en `Agregar acción`.

La ventana abierta es similar, pero ahora muestra todas las acciones disponibles:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.51.10.png)

Vamos a cambiar la animación del jugador, que es un objeto Sprite. Abra la categoría `Sprite`, luego` Animaciones` y finalmente elija `Cambiar la animación (por nombre)`.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.52.28.png)

Seleccione el objeto `Player` para el primer parámetro y escriba` "Saltando" `en el segundo campo. **Cuidado**, tiene que escribir las comillas dobles, ya que cualquier texto en las acciones o condiciones de GDevelop también se puede generar mediante una fórmula, por lo que es necesario usar comillas dobles para decirle a GDevelop que este es un texto:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.54.51.png)

Cuando haya terminado, haga clic en Aceptar en la esquina inferior derecha. ¡El primer evento está listo!

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.56.10.png)

### Echemos un vistazo al resultado.

Haga clic en el botón Reproducir en la barra de herramientas para iniciar una vista previa. Cuando saltas, verás los cambios de animación del jugador!

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.58.31.png)

Pero cuando el Reproductor está de vuelta en el piso, puede ver que la animación no está configurada de nuevo en la animación Inactiva. ¡Esto es simplemente porque nunca le dijimos a GDevelop que lo hiciera! Agreguemos otro evento para arreglar esto.

## Animación Idle y correr (Idle and running animation)

Vamos a agregar un nuevo evento en blanco. Haga clic en 'Agregar condición' y esta vez seleccione la condición 'Está en el piso' dentro de la categoría de comportamiento de Platformer. Tenga en cuenta que puede usar el cuadro de búsqueda en la parte superior para encontrar rápidamente una condición cuando sepa su nombre.

Rellene el primer parámetro eligiendo el objeto Jugador:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_21.52.02.png)

Haga clic en Ok para validar la condición:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_21.54.47.png)

De hecho, es una buena oportunidad para hacer que nuestro personaje muestre no solo el ralentí y el salto, sino también la animación en ejecución:

Podríamos agregar dos eventos, con dos condiciones y una acción en cada evento:

       * Cuando el jugador está en el suelo * y * no se está ejecutando, se debe mostrar la animación de inactividad.
       * Cuando el jugador está en el suelo * y * en ejecución, se debe mostrar la animación en ejecución.

En su lugar, podemos usar * subeventos *, para que la condición solo compruebe si el jugador está en el suelo una vez.

Seleccione el evento que creamos haciendo clic en un área vacía cerca de `Agregar condición` o` Agregar acción`:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_21.59.36.png)

Luego, haga doble clic en el botón para agregar un sub-evento:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.05.49.png)

Se agregan dos eventos "secundarios" debajo del evento que se considera el evento principal ahora. Hay un margen agregado a la izquierda de los eventos y una línea entre ellos para confirmar visualmente que están conectados:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.07.02.png)

¡Ahora puedes agregar condiciones dentro de estos eventos! Para el primero, agregue una condición para verificar si el reproductor se está ejecutando:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.08.06.png)

Para la segunda, agregue la misma condición, pero marque la opción 'Invertir condición'. De esta manera, las acciones del evento se iniciarán cuando el objeto del Jugador **NO **se esté moviendo:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.09.30.png)

Aquí están nuestros eventos hasta ahora:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.10.03.png)

Ya casi hemos terminado, terminemos agregando las acciones necesarias a cada evento. Use el primer evento para configurar la animación del personaje en `" Running "y el segundo evento para configurar la animación del carácter` en "Inactivo" `.

Puedes agregar estas acciones de la misma manera que hicimos antes para la animación de salto. No olvide las comillas (`" "`) cuando ingrese los nombres de animación.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.15.20.png)

## Tiempo para previsualizar (y guardar) (Time to preview (and save))

Puedes iniciar una vista previa de tu juego y ver que la animación del jugador está cambiando mientras corres y saltas.

Una pequeña mejora que podemos hacer es configurar la animación en Salto cuando el jugador también se está cayendo (de lo contrario, la animación en ejecución seguirá reproduciéndose cuando el jugador llegue al final de la plataforma).

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.23.10.png)

## Siguiente paso: haz que la cámara siga al jugador

Por ahora, es difícil construir un gran nivel para explorar porque el jugador puede caminar rápidamente fuera de la pantalla. La siguiente parte del tutorial mostrará cómo hacer que la cámara siga al jugador. Es realmente simple, un solo evento será suficiente!

Read️ Read **[la próxima parte del tutorial aquí](/es/gdevelop5/tutorials/platform-game/3-have-camera-follow-player)**!
