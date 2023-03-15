---
title: Comportamiento de movimiento de arriba hacia abajo (Top Down Movement behavior)
---
## Comportamiento de movimiento de arriba hacia abajo (Top Down Movement behavior)

!!! note
    
        **Vélo en acción!** 🎮  
    [¡Prefiero ver los ejemplos de comportamiento del movimiento de arriba hacia abajo! Por favor, llévame allí ahora.](#Examples) 

![](/gdevelop5/behaviors/topdownmovementbehavioricon.jpg) El comportamiento "Movimiento de arriba abajo" permite la funcionalidad adicional de mover un objeto en 4 u 8 direcciones.

### Añadir comportamiento al objeto (Add behavior to object)

Para agregar el comportamiento de arriba abajo a un objeto, primero abra las propiedades del objeto accediendo al objeto en el menú de objetos o haciendo clic derecho sobre el objeto en una escena. Seleccione "Editar objeto" de la lista emergente. Luego seleccione "Comportamientos" y haga clic en el botón Agregar comportamiento.

### Comportamiento de movimiento de arriba hacia abajo (Top Down Movement behavior)

Al seleccionar el comportamiento del movimiento de arriba hacia abajo de la lista, agregamos la funcionalidad a nuestro objeto. ![](/gdevelop5/behaviors/top-down-movement-behav-inlist.png)

Después de seleccionar el comportamiento, deberíamos ver inmediatamente las opciones disponibles: ![](/gdevelop5/behaviors/topdown-movement-options.png)

### Cambia la velocidad de movimiento y rotación. (Change the speed of movement and rotation)

Al cambiar el valor de Aceleración, Desaceleración y Velocidad máxima, podemos cambiar la velocidad con la que nuestro objeto se moverá. Al cambiar el valor de la velocidad de rotación, podemos cambiar la velocidad con la que nuestro objeto va a girar o si va a girar en absoluto. Explicaré más sobre la rotación a continuación.

### Cambio de ángulo de desplazamiento (Change angle offset)

Por defecto, el ángulo de orientación de nuestro sprite es 0, que es el lado derecho de nuestro sprite, pero podemos cambiar la forma en que se enfrenta nuestro objeto cambiando el valor del desplazamiento del ángulo. Aquí hay una imagen para ayudarte a entender las coordenadas en GDevelop:

![](/gdevelop5/behaviors/gdevelop_covaliantcuriosity.jpg)

### Permite diagonales. (Allows diagonals)

![](/gdevelop5/behaviors/allow-diagonals-box.png) Esta opción está activada de forma predeterminada. Permitimos que nuestro objeto se mueva diagonalmente en 8 direcciones. Al deshabilitar esta opción, no permitimos el movimiento diagonal. Cuando está deshabilitado, solo podemos movernos en 4 direcciones: izquierda, derecha, arriba y abajo. El movimiento diagonal ya no está permitido.

### Controles predeterminados (Default controls)

![](/gdevelop5/behaviors/top-down-movement-default-controls-box.png) El comportamiento del movimiento de arriba hacia abajo viene con los controles predeterminados habilitados. Los controles predeterminados son las cuatro teclas de flecha del teclado. Si nos gustaría usar controles personalizados para mover el objeto, necesitamos deshabilitar esta opción desmarcando la casilla y luego necesitamos usar los eventos de movimiento de arriba hacia abajo para mover el Objeto. ![](/gdevelop5/behaviors/top-down-movement-events.png)

### Girar objeto (Rotate object)

![](/gdevelop5/behaviors/top-down-movement-rotateobject-box.png)

Por defecto, nuestro objeto girará hacia la dirección del movimiento. El objeto girará a la velocidad que especificamos en la opción Velocidad de rotación. Si no queremos que el objeto rote, necesitamos deshabilitarlo desactivando la casilla.

También podemos cambiar cualquiera de estas opciones utilizando los eventos que se encuentran en la sección de "Eventos" de GDevelop en cualquier momento durante el juego.

![](/gdevelop5/behaviors/eventstab.jpg)

# Ejemplos

!!! note
    
        **SVéalo en acción!** 🎮  
    Abre estos ejemplos en línea.

**Space Shooter**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://space-shooter){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/spaceshooter.png)](https://editor.gdevelop-app.com/?project=example://space-shooter)

  
**Juego Isométrico (Isometric Game)** (crea una ilusión de gráficos 3D dentro de un juego de gráficos 2D)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://isometric-game){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/isometricgame.png)](https://editor.gdevelop-app.com/?project=example://isometric-game)
