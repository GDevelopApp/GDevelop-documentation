---
title: draft-optimization
---
!!! note

    Esta página es un borrador de buenas prácticas a aplicar para optimizar los juegos de GDevelop. \<note warning\>Este borrador es un WIP de @Bouh

!!! note

    Podría fusionarse con <http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/how-to-debug-poor-performance> 

La optimización de juegos es un concepto importante del desarrollo de juegos. Una buena optimización permitirá que el juego funcione más rápido, haciéndolo más fluido.

GDevelop 5 te da total libertad en los eventos. Si bien esto puede ser increíble, también puede ser muy costoso si no tiene el reflejo de escribir eventos optimizados, ya que el procesador podría sobrecargarse al ejecutar el juego. Esto causaría lag en el juego.

Es importante [comprender qué son los eventos](/gdevelop5/tutorials/basic-game-making-concepts) y que todos los eventos se *llaman una vez en cada fotograma* y *en el orden en que se escribieron*.

!!! note

    Por ejemplo: Con un juego a 60 cuadros por segundo (FPS), si tiene un solo evento, sin condición, y solo una acción, entonces esta acción debe ejecutarse 60 veces en un segundo.

# La optimización ya está en el motor.

GDevelop ha incorporado optimizaciones, como la *eliminación*, el proceso de ocultar automáticamente objetos fuera de la pantalla. De esa manera se renderiza menos y el renderizado se vuelve más rápido.

Esto no afecta a la persona que crea el juego porque se maneja en segundo plano. Es totalmente transparente para todos. Por ejemplo, cuando un sprite está fuera de la pantalla, todas las animaciones se pausan.

!!! note

    Todavía es importante ocultar o deshabilitar lo que no necesita. Esta es la clave de la optimización.

# Optimizaciones que puedes realizar.

## Ejecutar una vez

La condición **Ejecutar una vez** hace que las condiciones que la preceden en el mismo evento se activen solo una vez cada vez que se cumplen.

Por ejemplo, si desea crear un objeto cada vez que se hace un clic, esto es lo que *no* debes hacer:

![](/gdevelop5/events/bad_event_optimisation.png)

- Lo que se espera que suceda: Cuando se presiona el botón izquierdo del ratón, se crea un objeto llamado **MiObjeto**.
- Lo que realmente sucede: Mientras se presiona el botón izquierdo del ratón, se crean instancias de **MiObjeto**.

Esto es problemático porque cuando se presiona el botón del mouse, es probable que se mantenga presionado durante más de un solo cuadro, como 0,3 segundos. Durante este período de tiempo, el evento se llama varias veces y el objeto se crea más de una vez.

Para arreglar eso, podemos usar la condición **Ejecutar una vez**: ![](/gdevelop5/events/good_event_optimisation.png)

Ahora, la condición se ejecutará solo una vez mientras sea verdadera. Eso significa que el evento se ejecutará solo una vez cada vez que su condición pase de incumplida a cumplida. Resuelve el problema anterior ya que la condición activará solo el primer cuadro del clic y esperará a que finalice el clic antes de permitir que el evento de clic se active nuevamente.

## Desactivar comportamientos no utilizados

Los comportamientos toman rendimiento, especialmente los comportamientos *Pathfinding* y *Physic Engine 2.0*. Recuerde desactivarlos cuando no sean necesarios.

Tomemos como ejemplo la siguiente situación: Quiero que 100 enemigos se muevan a una posición cercana a ellos cada 2 segundos, y tener en cuenta los obstáculos de la pared.

Esta sería una forma intuitiva pero incorrecta de hacerlo: ![](/gdevelop5/events/bad_behavior.png) Si hace esto, todos los objetos se moverán, incluidos los que están fuera de la pantalla.

!!! note

    ¿Por qué calcular el movimiento que el jugador no verá?

En su lugar, puede limitar el movimiento a los objetos visibles. Esto se puede hacer de la siguiente manera: deshabilite el comportamiento Pathfinding de los objetos que no están visibles en la ventana gráfica, y también actívelo cuando estén visibles en la ventana gráfica.

!!! note

    No olvides ejecutar una vez para asegurarte de que el comportamiento se deshabilite o habilite solo cuando su estado cambie de no visible a visible o al revés.

## Eliminar objetos no utilizados

Tomemos como ejemplo la siguiente situación: Tengo un arma y creo una instancia de objeto de bala cuando presiono la tecla para disparar. Esta bala tiene una fuerza hacia una dirección. Si el jugador dispara muchas balas, su cantidad aumentará en la escena y cada una requiere cálculos de la fuerza que se les aplica en el bucle de eventos. Si no elimina los objetos de viñetas antiguos, se sumarán y tomarán más y más rendimiento, lo que provocará un retraso después de jugar durante algún tiempo. La mejor solución es eliminar las viñetas que están fuera de la pantalla.

El comportamiento **"Destruir cuando está fuera de la pantalla"** hace exactamente eso. Adjúntelo a un objeto y se eliminarán todas las viñetas que salgan de la pantalla.

!!! note

    TODO 

- Cuanto más pequeñas sean las dimensiones de las imágenes, menor será el tiempo de renderizado.
- Es posible que las imágenes de más de 2000 px no funcionen bien, especialmente en dispositivos móviles donde es posible que no se carguen.
- Reduzca la cantidad de fotogramas en las animaciones de sprites tanto como sea posible, elimine los fotogramas demasiado similares al anterior y al siguiente.
- Para optimizar el código para lograr una métrica de rendimiento deseada, use el generador de perfiles en GD5 para ver dónde se gasta el rendimiento.
- Reduzca el número de condiciones ya que la selección de objetos es un proceso pesado.
- La carga de un juego puede llevar un tiempo cuando los recursos son demasiado grandes, 2Gb de un archivo de video o sonido, ralentizarán el tiempo de carga.
- Considere comprimir videos, sonidos e imágenes, esto reducirá el tiempo de carga.
- Todos los recursos del proyecto se agrupan en los juegos exportados si el recurso existe en la pestaña Recursos (Gestor de proyectos\>Configuración del juego), recuerda eliminar todos los recursos no utilizados.
