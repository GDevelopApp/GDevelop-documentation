---
title: de rutas
---
#Búsqueda de rutas

**[¡Prefiero ver los ejemplos de comportamiento de Pathfinding! Por favor, llévame allí ahora.](#Examples)**

El comportamiento de búsqueda de rutas nos permite mover objetos a un destino seleccionado, así como marcar elementos como obstáculos. Los objetos que están marcados como obstáculos serán evitados por los objetos en movimiento.

## Añadir comportamiento al objeto Para agregar comportamiento a un objeto, como de costumbre, cree el objeto. Luego, abra las propiedades del objeto haciendo clic derecho en la lista de Objetos ubicada a la derecha de la Interfaz de Escena. Seleccione "Editar objeto" de la lista emergente.

![](/gdevelop5/editplayerobject.jpg)

Ahora, seleccione la pestaña de comportamiento y haga clic en el botón "agregar comportamiento".

![](/gdevelop5/behaviors-tab.png)

A continuación, tenemos dos opciones para elegir:

## Opción 1: comportamiento pathfinding ![](/gdevelop5/behaviors/pathfinding-behavior-inlist.png)

El "comportamiento de búsqueda de rutas" nos permite mover el objeto a un destino y evitar todos los objetos marcados como un obstáculo.

Después de agregar el comportamiento al objeto, podemos personalizar una serie de opciones. ![](/gdevelop5/behaviors/pathafindin-behavior-options.png)

- **aceleración:** esta es la velocidad con la que nuestro objeto acelerará mientras se mueve en un camino.
- **permitir diagonales:** compruebe si el objeto puede moverse en diagonales o no.
- **ángulo de desplazamiento:** en caso de que nuestro sprite esté orientado en la dirección incorrecta, podemos establecer el ángulo de desplazamiento
- **tamaño de borde adicional:** stablece el tamaño de borde alrededor del objeto. Esta configuración determina qué tan cerca se puede mover el objeto a los obstáculos.
- **Velocidad máxima:** velocidad máxima que el objeto puede mover en el camino.
- **rotar objeto:** si no desea que el objeto gire mientras se mueve en la ruta, desactive la rotación del objeto.
- **velocidad de rotación:** establece la velocidad de rotación del objeto.
- **Alto y ancho de celda virtual:** nuestra ruta se genera mediante una cuadrícula virtual. Aquí podemos cambiar el tamaño de las celdas, cuanto más pequeño sea el tamaño de la celda, más suave será el movimiento. *Un tamaño de celda más pequeño implica más cálculos, así que trate de mantener un tamaño lo más grande posible.*

## Opción 2: comportamiento de obstáculo en el pathfinding (Pathfinding Obstacle behavior) ![](/gdevelop5/behaviors/pathfinding-obstacle-inlist.png)

Al utilizar el "comportamiento del obstáculo de búsqueda de caminos", podemos marcar un objeto para que sea un obstáculo. Después de agregar el comportamiento al objeto, tenemos dos opciones para personalizar: ![](/gdevelop5/behaviors/pathfinding-obstacle-options.png)

- **Impasable (impassable):** si habilitamos esto, el obstáculo será intransitable. El objeto en movimiento lo va a evitar a toda costa.
- **Costo (cost):** si el obstáculo no es infranqueable, podemos establecer un costo para el obstáculo. El objeto en movimiento, cuando busque el mejor camino posible hacia un destino, preferirá evitar el obstáculo con valores de alto costo. Por ejemplo, un río puede tener algún costo. El objeto en movimiento, si es posible, lo evitará. Sin embargo, si no hay otra manera alrededor del río, o si el río tiene un costo más bajo en comparación con otra área, el objeto en movimiento lo atravesará (en lugar de escalar una montaña con un costo más alto, por ejemplo). Y si ponemos cocodrilos en el río y aumentamos su costo, el objeto en movimiento podría decidir escalar las montañas.

## Ejemplo

!!! note

        **Véalo en acción!** 🎮

    Abre estos ejemplos Online.

**Comportamiento general del pathfinding (General Path Finding Behavior)**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://pathfinding){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/pathfindinggeneral.png)](https://editor.gdevelop.io/?project=example://pathfinding)


**Conceptos básicos de la ruta de acceso (Path Finding Basics)**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://pathfinding-basics){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/pathfindingbasics.png)](https://editor.gdevelop.io/?project=example://pathfinding-basics)
