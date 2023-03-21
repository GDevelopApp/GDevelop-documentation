---
title: Inventario (Inventory)
---
# Inventario (Inventory)

Los "Inventarios" se encuentran en estructuras de memoria que le permiten realizar un seguimiento de los objetos / elementos recolectados por el jugador o cualquier otro inventario en un juego. Los artículos de inventario son ilimitados e identificados por los nombres que usted elija.

Al igual que las variables, los "Inventarios" se identifican con un nombre. Los nombres de "inventario" pueden ser lo que quieras. El estado de inventario inicial por defecto está vacío. No contiene elementos.

Los inventarios y su contenido pueden ser manipulados usando condiciones y acciones.

## Adición, eliminación y manipulación de elementos.

Los inventarios se componen de artículos. Como se mencionó anteriormente, el "Inventario" predeterminado está vacío de cualquier artículo.

Use la acción "Agregar un artículo" para agregar un artículo al inventario. El nombre del artículo se puede elegir libremente. Por ejemplo, un "elemento podría ser" Espada "," Oro "," Balas ", etc. También puede usar la acción "Eliminar un elemento" para eliminar un elemento de un inventario.

Puede establecer límites en los artículos de un inventario mediante la acción "Establecer un recuento máximo para un artículo". Introduzca el nombre del artículo y el recuento. Cuando un artículo ha alcanzado su conteo máximo, agregar nuevos artículos no aumentará el conteo del artículo en el inventario.

Puede usar las condiciones "Artículo completo" para verificar si un artículo alcanzó la capacidad máxima. La condición "Tiene un elemento" permite que se realice una verificación del inventario para ver _si_ el jugador tiene al menos uno de los elementos especificados.

## Configuración de un elemento como equipado

Los artículos pueden ser marcados como "equipados". Usa la acción "Equipar un objeto". Esta acción no cambia nada en el juego. Sin embargo, puede usar la condición "Artículo equipado" para verificar _si_ está equipado un artículo. A continuación, puede establecer su acción en consecuencia.

Por ejemplo, puedes usar la condición "Objeto equipado" para verificar si hay una "Espada mágica" en tu juego. Si está equipado, podrías agregar más daños a los enemigos.

Si un artículo alcanza el conteo de 0 (es decir, el inventario está vacío de artículos), no se marca como equipado.

## Cómo mostrar los elementos de un inventario en el juego.

Diferentes juegos pueden mostrar inventarios de diferentes maneras. Los inventarios no se pueden representar directamente en la pantalla, pero puede usar [Sprites](/gdevelop5/ objects/ sprite) [Text objetos](/gdevelop5/ objects/ text) para crear su propia visualización.

Para usar objetos de Sprites y Texto para crear una pantalla:

1.  use la condición "Tiene un artículo" para verificar si un artículo es "de su propiedad"
2.  Mostrar u ocultar el objeto asociado en la pantalla.
3.  use la expresión "Recuento de artículos" (por ejemplo, `InventoryTools :: Count (" PlayerInventory "," Gold ")`) para acceder al recuento de un artículo determinado
4.  utilice el "recuento de elementos" para establecer el texto de un objeto "Texto" que se muestra en la pantalla

## Guardar / cargar inventarios

Utilice [storage actions](/gdevelop5/ all-features/ storage) para guardar el progreso del reproductor. También puede guardar el contenido del inventario (o cualquier otro inventario que use en el juego).

Las acciones "Guardar un inventario en una variable" y "Cargar un inventario desde una variable", le permiten volcar el contenido de un inventario en una variable. Estas acciones se establecerán como una variable estructurada. La información será contenida como niños. Las acciones también se pueden utilizar para restaurar un inventario a partir de una variable.

Cuando su inventario se guarda en una variable, puede guardar esta variable utilizando las acciones de almacenamiento y las acciones relacionadas con JSON: ![](/gdevelop5/all-features/inventory-serialization.png)
