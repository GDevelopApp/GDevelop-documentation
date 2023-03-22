---
title: Depurador del juego y perfilador
---
# Depurador del juego y perfilador

El **depurador (debugger)** es una herramienta que te permite inspeccionar el contenido de tu juego. En particular, puede inspeccionar variables globales, variables de escena y variables de instancias de sus objetos. Es una herramienta poderosa.

Puedes pausar el juego en cualquier momento. Usar el depurador es una excelente manera de entender por qué algo no funciona como es debido o para hacer pruebas rápidas en el juego.

El *generador de perfies (profiler)* es una herramienta que mide el tiempo empleado en diferentes partes del motor mientras se ejecuta el juego. Ayuda a encontrar cuellos de botella o eventos que podrían requerir muchos recursos en su juego. [Lea más sobre el uso del generador de perfiles aquí!](/gdevelop5/interface/debugger/profile-your-game)

!!! note

     Esta es una característica avanzada de GDevelop. Si lo usa, nos gustaría que muestre su soporte para GDevelop al [obtener una suscripción](/gdevelop5/interface/profile)!

![](/gdevelop5/interface/gdevelop-debugger_2x.png)

## Ejecutar el depurador (Launch the debugger)

Para iniciar el depurador, en la barra de herramientas de un editor de escenas, haga clic en el ícono "Depurar".

![](/gdevelop5/interface/debug-icon_2x.png)

En el menú, seleccione "Vista previa con depurador y perfilador de rendimiento". Esto abrirá una nueva pestaña llamada "Depurador" y también lanzará una vista previa de tu juego como siempre.

Tenga en cuenta que incluso si cierra la vista previa, puede dejar abierta la pestaña del depurador. De esta forma, cualquier vista previa que inicie (con el botón Vista previa habitual) se conectará al depurador.

Cuando el juego se acaba de lanzar, el depurador está vacío:

![](/gdevelop5/interface/empty-debugger_2x.png)

Haga clic en "**Actualziar**" en cualquier momento para obtener los datos del juego.

![](/gdevelop5/interface/debugger-refresh-button_2x.png)

También puede usar el botón Pausa en la barra de herramientas.

## Inspecciona las escenas del juego.

Las escenas que se ejecutan actualmente se enumeran debajo del elemento Escenas en la lista:

![](/gdevelop5/interface/inspector-list.png)

Si hace clic en el nombre de una escena, se le mostrará a la derecha del inspector para esta escena. Este inspector contiene una capa de la escena y un botón para crear una nueva instancia de un objeto en la escena.

### Crear una nueva instancia en la escena.

Para crear una nueva instancia, haga clic en el nombre de la escena donde desea crear la instancia. Escriba el nombre del objeto y haga clic en Crear:

![](/gdevelop5/interface/create-instance.png)

La instancia se creará en la posición 0; 0, en la capa base con Z orden 0. Luego puede encontrarlo en la lista de instancias y cambiar su posición, ángulo, capa ...

## Inspecciona y edita las instancias.

En la lista, puede encontrar **Instancias** de cada escena en ejecución. Las instancias se agrupan por nombre de los objetos. Haga clic en el nombre de un objeto para ver la lista de instancias de este objeto que vive en la escena. Haga clic en un número de instancia para inspeccionarlo:

![](/gdevelop5/interface/instance-inspector.png)

El inspector muestra las propiedades generales de la instancia, por ejemplo, posición, rotación, capa ... Para cada una de estas propiedades, puede **editarlas haciendo clic en el valor**:

![](/gdevelop5/interface/debugger-inspector-edit-value.png)

Valide sus cambios haciendo clic en el **botón de validación** (el que tiene el icono de marca).

También puede ver las **variables de la instancia** y modificarlas (consulte a continuación para obtener más información sobre las variables).

## Inspeccionar y editar las variables. (Inspect and edit the variables).

Puede verificar las variables del juego (variables globales), de una escena (variables de escena) o de una instancia particular de un objeto (variables de instancia).

Para hacer esto, en la lista, haga clic en **Variables globales**, **Variables de escena** o el número de instancia que desea inspeccionar.

Las variables se mostrarán en una lista que muestra el nombre y los valores de la variable (ya sea un número o un texto). Aquí hay un ejemplo de una instancia de un objeto que tiene una variable "Vida":

![](/gdevelop5/interface/instance-variables.png)

Como otros campos, puede hacer **clic en el valor de la variable** para cambiarla. Es una buena manera de ver cómo se está comportando tu juego de acuerdo con el valor de las variables y probar que tus eventos funcionan correctamente.

Las variables también pueden ser **estructuras**, o que significa que contienen otras variables. En este caso, en lugar de ver el valor (número o texto) de la variable, verá una sub-lista que contiene las variables secundarias:

Aquí hay un ejemplo de una variable "Opciones", que agrega variables secundarias para almacenar las opciones de un juego: ![](/gdevelop5/interface/structure-variable-inspector.png)

También puede cambiar el valor de las variables de los niños como cualquier otro. Perfil del rendimiento de su juego.

## Perfil del rendimiento de su juego.

El generador de perfiles es una herramienta incluida en el depurador que mide el tiempo empleado en varias partes del motor mientras se ejecuta el juego. A continuación, se muestra un desglose de cada sección, incluidos los eventos. [Lee más sobre perfiles!](/gdevelop5/interface/debugger/profile-your-game)
