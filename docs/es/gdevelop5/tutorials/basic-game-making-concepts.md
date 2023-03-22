---
title: Conceptos básicos de creación de juegos - lo que necesitas saber para comenzar con GDevelop
---
# Conceptos básicos de creación de juegos: lo que necesitas saber para comenzar con GDevelop

Los conceptos básicos de GDevelop son simples. Lee la siguiente información para comenzar con el software. Si no tienes GDevelop, descarga la última versión aquí: <https://gdevelop.io/download/>

## Mostrar cosas en la pantalla: los Objetos

Todo lo que se muestra en la pantalla se llama **"Objeto"**. Se pueden usar diferentes tipos de objetos para mostrar diferentes elementos del juego en la pantalla. Por ejemplo, la mayoría de los gráficos del juego son objetos "Sprite", los textos se pueden mostrar con objetos "Texto" y se pueden crear efectos especiales como un incendio o chispas con "Emisores de partículas".

![](https://wiki.gdevelop.io/_media/gdevelop5/tutorials/gifs_for_wiki_showing_objects.gif)

La página wiki asociada con los objetos se puede encontrar [aquí](/es/gdevelop5/objects/).

## Coordenadas

Los objetos en la pantalla/escena de GDevelop tienen **coordenadas X e Y**. Estas coordenadas corresponden a la posición horizontal (eje X) y la posición vertical (eje Y) en el plano cartesiano.

La coordenada X disminuye a medida que avanza hacia la izquierda y aumenta a medida que avanza hacia la derecha. La coordenada Y aumenta a medida que desciendes y disminuye a medida que subes.

![pres_coord1.png](/wiki/pres_coord1.png)

Para mover o rotar objetos, debes especificar el ángulo deseado en grados. La siguiente ilustración muestra cómo GDevelop entiende el ángulo de rotación:

![pres_coord2.png](/wiki/pres_coord2.png)

La siguiente imágen muestra estos dos conceptos utilizados dentro del motor, modificando la posición X e Y y la rotación el objeto sprite de la nave. Ten en cuenta que la esquina superior izquierda de la pantalla predeterminada del juego, la posición de la pantalla cuando no se ha aplicado ningún movimiento de la cámara, es donde X=0 e Y=0.

![](https://wiki.gdevelop.io/_media/gdevelop5/gifs_for_wiki_showing_coordinates_and_rotation.gif)

Tenga en cuenta que los ángulos también pueden ser negativos. Por ejemplo, -90 grados es igual a 270 grados.

Si utilizas funciones trigonométricas como el **seno** o el **coseno**, deberás expresar los ángulos en **radianes**. (1 radián = 180/pi grados y 1 grado = pi/180 radianes. Pi es el número que es aproximadamente igual a 3.14159).

## Eventos

Los eventos, que usas para crear las reglas de tu juego, se componen de condiciones y acciones. Las condiciones pueden considerarse como "si" y las acciones pueden considerarse como "entonces", con el propósito de hacer que las cosas sucedan en tu juego. "Si" las condiciones son verdaderas/cumplidas, "entonces" las acciones sucederán. La mayoría de las condiciones y acciones se refieren a objetos:

- Las condiciones ejecutan una **prueba** en los objetos.
- Unordered List ItemLas acciones **manipulan** el objeto. Pueden cambiar la posición del objeto, la apariencia, etc.

Un evento, sin ninguna condición, es tratado como si sus condiciones fueran verdaderas. Por lo tanto, en la imágen a continuación, el objeto de la nave girará a la velocidad dada a la acción de rotación.

![](https://wiki.gdevelop.io/_media/gdevelop5/tutorials/gifs_for_wiki_showing_conditionless_event.gif)

Si a este evento se le da la condición "El cursor/toque está encendido" y seleccionamos el objeto de barco para este evento, entonces la acción solo ocurrirá "si" el cursor del mouse está en el objeto de barco.

![](https://wiki.gdevelop.io/_media/gdevelop5/tutorials/gifs_for_wiki_showing_an_event_with_a_condition.gif)

La página wiki asociada con eventos se puede encontrar [aquí](/es/gdevelop5/events/).

## Cómo seleccionan los objetos estos eventos Una acción, sin condición, se refiere a todos los objetos. Si utiliza un objeto por primera vez en un evento, GDevelop probará o modificará todos los objetos con este nombre en la escena. Si vuelve a utilizar el objeto en el mismo evento, GDevelop probará o modificará sólo los objetos que hayan sido seleccionados por las condiciones anteriores.

Por ejemplo, este evento no tiene ninguna condición. Eliminará todos los objetos llamados "Barco":

![](/gdevelop5/tutorials/basic-game-making-concepts/pasted/20220123-200759.png)

El siguiente evento tiene una condición. Eliminará solo los objetos "Enviar" con una posición X que sea menor que la del cursor del mouse:

![](/gdevelop5/tutorials/gifs_for_wiki_deleting_ships_by_mouse_position.gif)

!!! note

    **Velo en acción!** 🎮Abre este ejemplo en línea: <https://editor.gdevelop.io/?project=example://object-selection>

![](/gdevelop5/tutorials/basic-game-making-concepts/pasted/20220124-171850.png)

La página wiki asociada con la selección de objetos se puede encontrar [aquí](/gdevelop5/events/object-picking).

## Eventos: el orden es importante**El orden de los [eventos](/es/gdevelop5/events/) sí importa!**

Los eventos en la parte superior se ejecutan primero. Los eventos se ejecutan cada vez que se muestra el juego. Esta pantalla se denomina marco. Se ejecuta unas 60 veces por segundo. Los siguientes ejemplos **no** son equivalentes:

![](/gdevelop5/tutorials/basic-game-making-concepts/pasted/20220123-203732.png) ![](/gdevelop5/tutorials/basic-game-making-concepts/pasted/20220123-203822.png)

- En la primera imagen de arriba, el primer evento crea un objeto "Ship" en las coordenadas X: 100, Y: 200 (100;200) en la capa base. A continuación, el siguiente evento elimina ese barco creado inmediatamente. Este par de eventos **no mostrará** un barco en la pantalla ya que elimina justo después de ser creado.
- En la segunda imagen de arriba, el primer evento elimina todos los objetos "Ship" de la escena/pantalla. Luego crea un "Barco" en las coordenadas de escena/pantalla X: 100, Y: 200 (100;200) en la capa base. Este par de eventos **mostrará** un barco en la pantalla (antes de ser eliminado en el siguiente fotograma. Después, será recreado inmediatamente).

## Comportamientos: reglas y lógica predefinidas para objetos

Los **comportamientos** mejoran un objeto con cierta *lógica predefinida*. Pueden ser razonablemente sencillos, automatizando tareas simples o tareas mucho más avanzadas. Por ejemplo:

* Se puede usar un comportamiento para eliminar *automáticamente* un objeto del juego cuando sale de la pantalla (lo que limita el uso de memoria del juego). * Se puede utilizar otro comportamiento para *mover objetos en la pantalla con las flechas del teclado*. * Se puede usar otro comportamiento para permitir que el objeto *sea arrastrado por la pantalla* con el ratón o tocando el objeto. * El comportamiento de la física es un ejemplo de un comportamiento avanzado que hace que sus objetos se muevan de una manera realista, siguiendo las *leyes de la física*.

Los **comportamientos** a menudo vienen con sus propias variables que se pueden cambiar para personalizar la tarea que realizan, pero también se pueden manipular utilizando eventos que son específicos de ese comportamiento.

![](/gdevelop5/tutorials/gifs_for_wiki_showing_behaviors.gif)

La página wiki asociada con comportamientos se puede encontrar [aquí](/es/gdevelop5/behaviors/).

!!! note

    Puedes crear comportamientos personalizados para tus objetos. Te recomendamos esto a medida que tu juego crezca. Te permite poner lógica sobre lo que están haciendo tus objetos en los comportamientos personalizados, en lugar de hinchar la hoja de eventos de la escena. [Lee más en este artículo](/gdevelop5/tutorials/how-to-make-behavior).

##Objetos en movimiento: uso de las fuerzas incorporadas

Se puede lograr poner en movimiento objetos con **fuerzas**. Las fuerzas se utilizan para "empujar" objetos.

Puedes especificar:

- Las coordenadas de una fuerza en los ejes X e Y, en píxeles.
- Sus coordenadas polares (el ángulo de fuerza, en grados, y la longitud, en píxeles).
- Si la fuerza es instantánea (solo empujará "un poco" el objeto) o continua (seguirá empujando el objeto hasta que se elimine).

### Ejemplo Supongamos que deseas mover un objeto a la derecha o a la izquierda de la pantalla.

Puedes agregar una fuerza utilizando coordenadas X/Y, especificando 50 para la coordenada X y, por ejemplo, 0 píxeles para la coordenada Y. También puedes usar coordenadas polares y agregar una fuerza con un ángulo de 180° y una longitud de 50 píxeles.

En el siguiente ejemplo, la posición X de la nave se utiliza para establecer las condiciones que hacen que vaya en la dirección opuesta cuando pasa de 200 o 600, a lo largo del eje X.

![](/gdevelop5/tutorials/gifs_for_wiki_applying_permanent_forces.gif)

### Otras formas de mover objetos.

    Algunos comportamientos, como el Motor de físicas o el Localizador de rutas, pueden mover objetos por sí mismos. En este caso, es mejor no utilizar el sistema de fuerzas integrado y, en cambio, confiar solo en las acciones proporcionadas por estos comportamientos. \<note tip\>**Véelo en acción!** 🎮 Abre este ejemplo en línea: <https://editor.gdevelop.io/?project=example://move-object-with-physics>

![](/gdevelop5/tutorials/basic-game-making-concepts/pasted/20220124-153533.png)

!!! note

    Estas otras formas de mover objetos se explican en [esta página de procedimientos](/gdevelop5/tutorials/how-to-move-objects). \## Almacenamiento de cualquier información en memoria: Variables

Una variable te permite almacenar datos. Por ejemplo, una variable puede almacenar un número o un texto. Podríamos compararlos con cajones o cajas donde podemos archivar notas. Cualquier dato se puede almacenar en una variable, siempre y cuando esté en formato de texto o número. Cosas como el número de vidas que le quedan a un jugador, la puntuación más alta de un jugador, el número de balas que quedan o el número de enemigos muertos son ejemplos de lo que se puede almacenar en una variable. Probablemente vaya a ser para ti una práctica común almacenar números en variables.

![pres_variable.png](/wiki/pres_variable.png)

Las acciones y condiciones comprueban o cambian el *valor* de una variable.

#### ¿Dónde se almacenan las variables? ("ámbito" de variable)

El *ámbito* o *alcance* de una variable determina el lugar desde el que se puede acceder una variable. En GDevelop, hay tres ámbitos de variable disponibles:

* **Variables Globales**, que son accesibles desde todas las escenas del juego. Por ejemplo, se pueden usar para almacenar la puntuación del jugador en diferentes niveles/escenas. * **Variables de Escena**, que solo son accesibles desde la escena en la que se crean. Se pueden usar para datos que solo conciernen a una escena. Una variable de escena podría acceder al tiempo restante para completar el nivel/escena.

* **Variables de Objeto**, que solo se refieren a un objeto. Por ejemplo, un héroe puede tener una variable "Salud" o "Munición".

![](/gdevelop5/tutorials/gif_for_wiki_showing_where_the_variables_are.gif)

La página wiki asociada con variables se puede encontrar [aquí](/es/gdevelop5/all-features/variables).

Para ampliar aún más cómo se pueden usar las variables en un juego, ve [expresiones](/es/gdevelop5/all-features/expressions).

## Una noción avanzada: el "tiempo transcurrido" desde el último fotograma (TimeDelta)

El juego evalúa eventos y vuelve a recrear la pantalla varias veces por segundo: decimos que el juego *se actualiza* durante un "tick". La frecuencia con la que esto sucede depende de los recursos de su computadora: una computadora lenta puede renderizar 25 cuadros por segundo, una rápida 60. GDevelop generalmente puede asegurarse de que este valor sea el mismo en todos los equipos. Sin embargo, la velocidad de algunas operaciones puede cambiar de una computadora a otra, por ejemplo, las operaciones matemáticas y la representación de movimientos.

Para hacer que la velocidad de los cambios sea constante, utiliza la [expresión](/es/gdevelop5/all-features/expressions) TimeDelta() que devuelve el tiempo en segundos desde el último fotograma. Por ejemplo, no hagas esto:

![](/gdevelop5/tutorials/basic-game-making-concepts/pasted/20220124-172740.png)

Pero haz esto en su lugar:

![](/gdevelop5/tutorials/basic-game-making-concepts/pasted/20220124-172830.png)

- El primer evento es agregar 20 a la variable cada vez que se actualiza el juego (es decir, tanto como sea posible, hasta 60 veces por segundo). **No es correcto** usar tal evento, ya que la velocidad del aumento de la variable no será la misma de una computadora a otra: no podemos predecir el valor de la variable después de 10 segundos, por ejemplo, ya que depende del número de fotogramas del juego pintado.
- El segundo evento **es correcto y confiable**: El número 300 se multiplica por TimeDelta(). Por lo tanto, la variable se incrementará al mismo tiempo en todas las computadoras. Como TimeDelta() devuelve un tiempo en segundo, te permite cuantificar exactamente la cantidad: En nuestro caso, la variable crecerá a 300 unidades/segundo. Por lo tanto, podemos predecir que la vida aumentará en 3000 unidades en 10 segundos, independientemente del número de fotogramas renderizados durante este tiempo.

!!! note

     Como GDevelop ejecutará tu juego a un máximo de 60 imágenes por segundo, normalmente no notarás ningún problema si estás usando el primer evento. Todavía es una buena idea vigilar esto y usar la versión con TimeDelta() en su lugar.

**Regla general:** Usa _TimeDelta()_ cuando desees agregar continuamente alguna cantidad a un valor. Si tu acción está destinada a iniciarse solo una vez (por ejemplo, durante una colisión en la que luego elimina el objeto), está bien usar un valor discreto sin TimeDelta, ya que no depende de la velocidad del juego.

!!! note

    Cuando mueves un objeto usando fuerzas, no es necesario usar TimeDelta() ya que GDevelop lo usa automáticamente.

## Y ... eso es casi todo lo que necesitas saber.

➡️ ¡Puedes seguir leyendo los **[tutoriales](http://wiki.compilgames.net/doku.php/es/gdevelop5/tutorials)** para saber más sobre cómo crear auténticos juegos con GDevelop!
