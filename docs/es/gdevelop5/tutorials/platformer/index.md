---
title: Tutorial de Plataformas, Parte 1 - Primeros pasos
---
# Tutorial de Plataformas, Parte 1: Primeros pasos

Este tutorial explica cómo crear un juego de plataformas con GDevelop. Si nunca antes ha creado un juego con GDevelop, este es un excelente lugar para comenzar.

Aprenderá a:

- Diseña un nivel con plataformas, enemigos y monedas coleccionables.
- Crea un personaje jugable que pueda moverse, saltar y matar enemigos.
- Devuelve el jugable a los puntos de control cuando mueren.

## Series

Estás leyendo **la Parte 1** del [Tutorial de Plataformas](/es/gdevelop5/tutorials/platformer/start).

1\. Tutorial de Plataformas, Parte 1 2. [Tutorial de Plataformas, Parte 2](/es/gdevelop5/tutorials/platformer/part-2) 3. [Tutorial de Plataformas, Parte 3](/gdevelop5/tutorials/platformer/part-3) 4. [Tutorial de Plataformas, Parte 4](/gdevelop5/tutorials/platformer/part-4) 5. [Tutorial de Plataformas, Parte 5](/gdevelop5/tutorials/platformer/part-5) 6. [Tutorial de Plataformas, Parte 6](/gdevelop5/tutorials/platformer/part-6) 7. [Tutorial de Plataformas, Parte 7](/gdevelop5/tutorials/platformer/part-7) 8. [Tutorial de Plataformas, Parte 8](/gdevelop5/tutorials/platformer/part-8)

## Paso 1: Instalar GDevelop

Si aún no lo ha hecho, descargue e instale GDevelop. Puede encontrar las instrucciones completas sobre cómo configurar el software a través de la página [Primeros pasos.](/gdevelop5/getting_started)

## Paso 2: Descargar los recursos del juego

El término *recursos* se refiere a los medios visuales y de audio de un juego, como los efectos de sonido y los sprites. Cada juego necesita recursos y, para facilitarle un poco la vida, este tutorial proporciona los recursos que necesita para crear el juego.

Puede descargar los recursos a través de la siguiente URL:

<http://www.compilgames.net/dl/PlatformerTutorialResources.zip>

!!! note

    También eres más que bienvenido a usar diferentes recursos. Sin embargo, naturalmente, el juego que vea en las capturas de pantalla se verá diferente del juego que termines creando.

## Paso 3: Crear un nuevo proyecto

En GDevelop, un _proyecto_ es un contenedor para los activos y la lógica del juego. En este tutorial, los términos "proyecto" y "juego" se utilizan como sinónimos.

Para crear un proyecto:

1\. Inicie GDevelop. 2. Seleccione **Crear un proyecto en blanco**. 3. Elija una carpeta para el proyecto. 4. Seleccione **Crear proyecto**.

![](/es/gdevelop5/tutorials/platformer/crear-proyecto.gif)

## Paso 4: Agregar una escena al juego

Un juego se compone de _escenas_. Por lo general, cada escena es una pantalla diferente en el juego. Por ejemplo, el menú principal, el menú de pausa y cada nivel de un juego serían escenas diferentes.

Para agregar una escena al juego:

1\. Expanda el panel **Escenas** (si aún no está expandido). 2. Seleccione **Clic para agregar una escena**.

Luego seleccione la escena para abrirla.

![](/gdevelop5/tutorials/platformer/add-scene.gif)

!!! note

    Si agrega varias escenas a un proyecto, la primera escena de la lista es la escena que carga GDevelop cuando se inicia el juego.

## Paso 5: Agrega objetos a la escena

Una escena se compone de [objetos](/gdevelop5/objects). Todo lo que el usuario ve o con lo que interactúa es un objeto, incluido el personaje jugable, los enemigos y partes del entorno.

GDevelop proporciona diferentes tipos de objetos que puede agregar a un juego. Cada tipo de objeto tiene características y casos de uso únicos. El tipo de objeto más común es el objeto Sprite, que le permite crear un gráfico que puede elegir animar (opcionalmente).

Para crear un objeto:

1\. En el panel **Objetos**, haga clic en **Agregar un nuevo objeto**. 2. Seleccione **Sprite**. 3. En el campo **Nombre del objeto**, escriba "Nube". 4. Al abrirse el editor de objetos, haga click en **Añadir una animación**. Aunque el rótulo dice **Añadir una _animación_**, los objetos Sprite no tienen por qué estar animados. 5. Haga click en **Añadir**. 6. Selecccione el recurso "cloud2.png". 7. Seleccione **Aplicar**.

Después arrastre una o más copias del objeto "Cloud" a la escena.

![](/gdevelop5/tutorials/platformer/add-object-instance.gif)

!!! note

    Cada copia del objeto que aparece en una escena se refiere a una _instancia_ de dicho objeto.

## Paso 6: Cambia el color de fondo

Las nubes blancas no se ven muy bien en el fondo gris.

Para cambiar el color de fondo de la escena:

1\. Haz clic derecho en el fondo de la escena. 2. Seleccione **Propiedades de la escena**. 3. Haz clic en **Color de fondo de la escena**. 4. Elige un bonito tono de azul.

!!! note

    Puede ingresar un hexadecimal (Ej: \#00000) o un nombre del color (Ej: Negro)

![](/gdevelop5/tutorials/platformer/set-scene-background-color.jpg)

## Paso 7: Previsualizar el juego

Es bueno adquirir la costumbre de previsualizar con frecuencia sus juegos. Así, cuando algo deje de funcionar, es más fácil averiguar el problema.

Para mostrar la previsualización del juego, haga click en el botón **Vista previa** de la barra de herramientas.

![](/gdevelop5/tutorials/platformer/preview-button.jpg)

Para detener la vista previa, cierre la ventana de vista previa.

## Paso 8: Guarda el juego

También es bueno adquirir el hábito de guardar regularmente tus juegos. Puedes guardar el juego a través del menú Archivo o usando un atajo de teclado:

- `CTRL` + `S` en Windows - `CMD` + `S` en macOS

## Próximo paso

Lea el [Tutorial de Plataformas, Parte 2](/es/gdevelop5/tutorials/platformer/part-2) y aprende a crear un personaje jugable.
