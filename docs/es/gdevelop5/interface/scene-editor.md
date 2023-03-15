---
title: Editor de Escena
---
# Editor de Escena

Al abrir una escena (o un diseño externo), se abre el editor de escenas.

![](/gdevelop5/interface/sceneeditoropens.png)

El editor de escenas es donde puedes diseñar y construir tus niveles de juego, tus menús, tus inventarios o cualquier otra cosa que inspire tu imaginación. El Editor de escenas le permite crear y agregar objetos a la escena / pantalla. El juego y las reglas del juego se pueden crear usando eventos en el [Editor de Eventos](/gdevelop5/interface/events-editor) de Escena.

Hay una serie de herramientas y editores disponibles en la barra de herramientas superior del editor de escenas. ![](/gdevelop5/scene-editor-toolset.png)

## Editor de Objetos You will find the Objects Editor on the right side of the Scene Editor's interface. Aqui puedes ver todos los [los Objetos](/gdevelop5/objects) usados en tu escena. También puede agregar nuevos objetos utilizando el Editor de objetos. ![](/gdevelop5/objects-manager-tab.png)

Si cierra el panel Editor de objetos, puede volver a abrirlo utilizando este botón en la barra de herramientas: ![](/gdevelop5/objects-manager-button.png)

Lee sobre las [funciones genéricas disponibles para todos los objetos](/gdevelop5/objects/base_object) y luego observa el [la ayuda sobre los tipos de objetos](/gdevelop5/objects) para aprender más sobre los diferentes tipos de objetos que puedes usar en tu juego.

## Propiedades de Objetos

Puede encontrar el editor de propiedades del objeto en el lado izquierdo de la interfaz del editor de escenas. Si el Editor de propiedades del objeto no está visible, cierre el Administrador de proyectos. Luego, selecciona un objeto en tu escena. El Editor de propiedades del objeto se abrirá a la izquierda. ![](/gdevelop5/object-properties-bar.png)

El uso del Editor de propiedades le permite cambiar las propiedades del objeto de escena seleccionado. Cosas como la posición de un objeto, la escala y el orden Z se pueden cambiar usando el Editor de propiedades. Puedes informarte más acerca de las [propiedades de objeto en esta página](/gdevelop5/objects/base_object).

Si ha cerrado este panel, puede abrirlo nuevamente haciendo clic en el botón en la barra de herramientas: ![](/gdevelop5/object-properties-button.png)

**Nota:** los paneles de GDevelop se pueden mover arrastrándolos a cualquier lugar que desee. Simplemente arrastre el panel usando la barra de título. Como ejemplo, si el Panel de propiedades del objeto se abre en el lado derecho de la pantalla y prefiere colocarlo en el lado izquierdo de la pantalla, simplemente arrástrelo a su lugar con la barra de título.

## Editor de Grupos de Objetos

En el editor de Grupos de objetos, puede encontrar la lista de grupos de objetos que están presentes en la escena. ![](/gdevelop5/objects-groups-editor.png)

Para abrir el editor, haga clic en este botón en la barra de herramientas: ![](/gdevelop5/objects-groups-editor-button.png)

Los grupos de objetos contienen objetos y se pueden usar en eventos para referirse a múltiples objetos, usando un solo evento. características comunes para todos los objetos. Lea más sobre ellos en la página sobre [características comunes para todos los objetos.](/gdevelop5/objects/base_object).

## Editor de Instancias

El editor de instancias muestra la lista de todas las instancias del objeto que viven en la escena. Se puede usar para seleccionar cualquier instancia de la lista para ver la posición, el ángulo, la capa y el orden de la instancia en la escena. ![](/gdevelop5/instances-editor.png)

Puede abrir el editor de instancias haciendo clic en este botón en la barra de herramientas: ![](/gdevelop5/instances-editor-button.png)

## Editor de Capas

Por defecto, cada escena de GDevelop viene con una sola capa llamada "Capa base". Aquí es donde todos los objetos se encuentran en nuestra escena. Podemos agregar más capas para varios propósitos y poner cualquier instancia en cualquier capa. Por ejemplo, puede haber una capa para mostrar los controles en la pantalla. Puede haber otra capa para mostrar un menú. Otra capa más puede ser un mapa del juego o un fondo.

El editor de capas muestra la lista de capas en la escena y le permite agregar nuevas, cambiar su orden, alternar su visibilidad en la pantalla o eliminarlas por completo. ![](/gdevelop5/layers-editor.png)

Puede abrir el editor de capas haciendo clic en este botón en la barra de herramientas: ![](/gdevelop5/layers-editor-button.png)

## Otras Herramientas

### Palanca (Toggle)/Editor de Cuadricula (grid)

Al hacer clic en el botón de cuadrícula en la barra de herramientas, obtendrá múltiples opciones: ![](/gdevelop5/toggle-grid-button.png)

* **Máscara de Palanca (Toggle mask)**: esta opción muestra u oculta un borde negro en la escena. Representa el tamaño de la ventana del juego. * **Palanca de Cuadrícula (Toggle grid):** esta opción activa o desactiva la cuadrícula en el editor de escenas. Tener una cuadrícula es útil cuando necesitamos colocar objetos con precisión. * **Configuración de Cuadrícula (Setup grid):** esta opción abre una ventana que le permite configurar el tamaño y la posición de la cuadrícula.

### Cambiar editor de zoom

Al hacer clic en el botón de zoom, puede cambiar el nivel de zoom dentro del editor de escenas: ![](/gdevelop5/toggle-zoom-button.png)

## Lanzar una vista previa de la escena

Al hacer clic en el botón Vista previa, puede iniciar una vista previa de su juego!

![](/gdevelop5/preview-button.png)

La vista previa se abrirá en una ventana separada.

## Iniciar una vista previa de la red (vista previa a través de WiFi / LAN)

Al hacer clic en el botón "Vista previa de la red (Vista previa a través de WiFi / LAN)", puede obtener una vista previa del juego en dispositivos móviles (o cualquier otra computadora) conectados a la misma red que el editor:

![](/gdevelop5/interface/preview-wifi-button.png)

Después de hacer clic en el botón, aparecerá una ventana que muestra la vista previa de la dirección que se está iniciando en: ![](/gdevelop5/preview-wifi-window.png)

Ahora puede ingresar la dirección dada en el navegador de su teléfono inteligente (o en el otro navegador de su computadora). La vista previa se cargará:

![](/gdevelop5/interface/preview-wifi-running.png)

Nota: Puedes cerrar la ventana emergente en el editor y continuar editando su juego. Si inicia una nueva vista previa, los dispositivos móviles y cualquier computadora conectada actualizarán automáticamente el juego para mostrar los cambios realizados.

### Lanzar una vista previa con el depurador

El depurador es una herramienta que se puede usar para inspeccionar el contenido de tu juego (valores de variables, instancias existentes y sus propiedades ...) e incluso realizar algunas ediciones en tiempo real.

Puedes ejecutar el depurador usando este ícono:

![](/gdevelop5/interface/debugger-button.png)

[Vea esta página](/gdevelop5/interface/debugger) para saber más acerca del uso del depurador.
