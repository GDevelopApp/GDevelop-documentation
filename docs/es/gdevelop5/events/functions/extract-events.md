---
title: Extraer eventos a una función
---
# Extraer eventos a una función

Cuando haga clic derecho en un evento seleccionado (o después de seleccionar más de un evento), puede elegir el elemento del menú "*Extraer eventos a una función*".

![](/gdevelop5/events/functions/extract-events-to-function.png)

GDevelop analiza los eventos y subeventos seleccionados, los extraerá en una función y mostrará una ventana para permitirle personalizar esta [función](/gdevelop5/events/functions). Una vez que haya completado los campos, haga clic en Crear para que se cree la función y se reemplacen los eventos seleccionados por una llamada a la [función](/gdevelop5/events/functions).

## Configuración de la extensión y el nombre de la función

El primer campo le pide la extensión donde se debe almacenar la función. Recuerda que las funciones se agrupan en extensiones. Si pretende crear múltiples funciones relacionadas con una misma función (por ejemplo, funciones para tratar con el inventario, un sistema de batalla o para ayudarlo a manejar a los enemigos en su juego), es mejor agruparlos en una misma extensión con un nombre relacionado con la característica.

Esto permitirá entonces compartir la extensión y reutilizarla en otros juegos con poco o ningún cambio.

Puede seleccionar una extensión existente o ingresar el nombre de una nueva, que se creará para usted.

Introduzca entonces el nombre de la función. Al igual que el nombre de una extensión, el nombre de una función está limitado a caracteres alfanuméricos (0-9, a-Z) y guiones bajos. No se permiten espacios.

![](/gdevelop5/events/functions/extension-name-and-function-name.png)

## Configuración del resto de la función y parámetros.

El resto de la ventana contiene los mismos widgets para configurar su función como los que se muestran cuando está editando una función. En particular, puede ingresar el nombre que se muestra al usuario y la descripción.

Un campo importante es la oración que se muestra en la hoja de eventos. Puede usar _PARAMx_, donde x es un número (por ejemplo: _PARAM1_) para referirse a un parámetro. Generalmente, usted quiere ingresar todos los parámetros en esta oración:

![](/gdevelop5/events/functions/function-setup.png)

Finalmente puede introducir la descripción de los parámetros.

!!! note

    Los parámetros se extraen automáticamente de los eventos por GDevelop. GDevelop comprenderá qué objetos, grupos y comportamientos está utilizando, así como los tipos de objetos.

![](/gdevelop5/events/functions/function-parameters-setup.png)

Al final, haga clic en Crear en la parte inferior derecha del cuadro de diálogo. ¡La función se creará y los eventos se reemplazarán por una acción que utiliza esta función!

![](/gdevelop5/events/functions/function-used-as-action.png)
