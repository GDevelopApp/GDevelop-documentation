---
title: OBJETO DE FORMA PINTOR (Shape painter object)
---
# OBJETO DE FORMA PINTOR (Shape painter object)

!!! note
    
        **Véalo en acción!** 🎮  
    [Prefiero ver los ejemplos de objetos de Shape Painter! Por favor, llévame allí ahora.](#Examples) 

Un objeto pintor de formas nos permite dibujar formas en nuestro juego. Puede ser útil para hacer elementos simples de interfaz de usuario (UI). El pintor de formas incluso se puede utilizar para crear un cuadro de selección.

### Añadir un objeto de pintor de formas.

Para agregar un objeto de "pintor de formas", cree un nuevo objeto de la lista del Editor de propiedades a la derecha de la interfaz del editor de escenas. Luego, seleccione y haga clic en el nuevo objeto, seleccione "editar objeto". En la lista que se muestra, haga clic en "Pintor de formas". Es posible que deba desplazarse hacia abajo en la lista para encontrarlo. ![add-shape-painter-object.png](/gdevelop5/objects/add-shape-painter-object.png)

### Editar propiedades (Edit properties)

A continuación queremos editar las propiedades del objeto. Nuevamente, desde la lista de Propiedades a la derecha, haga clic en el objeto. Seleccione "Editar objeto" en la lista emergente que se muestra. Se abre una nueva ventana. Muestra las propiedades del Objeto Pintor. ![shape-painter-properties.png](/gdevelop5/objects/shape-painter-properties.png)

### Cambiar el color y la opacidad

La ventana de propiedades de Shape Painter nos presenta opciones que nos permiten cambiar el color de contorno del objeto, el color de relleno / color del objeto, la opacidad de cada color / color y el tamaño del contorno de nuestro objeto.

![change-color-of-shape-painter.png](/gdevelop5/objects/change-color-of-shape-painter.png)

### Posición relativa del objeto (Relative object position)

Por defecto, la posición de las formas que dibujamos en la pantalla es relativa al objeto "pintor de formas". ![shape-painter-relative-position-property.png](/gdevelop5/objects/shape-painter-relative-position-property.png)

En el caso de una posición relativa, cuando dibujamos la forma en nuestra pantalla, esa relativa es la posición 0 en los ejes X e Y. Será la posición del objeto Pintor de formas. Es decir, si queremos dibujar una forma donde la posición de la pantalla sea de 100 píxeles en X y 100 píxeles en Y. La posición será de 100 píxeles desde el objeto pintor de formas donde sea que esté en la pantalla.

Cuando la casilla no está marcada o sin marcar, la posición 0 en los ejes X e Y estará en la esquina superior izquierda de nuestra escena, independientemente de dónde se encuentre el objeto.

### Dibujar una forma (Draw a shape)

Para dibujar una forma, como de costumbre, cree un nuevo objeto utilizando el Editor de objetos. Agregue el objeto "pintor de formas" a nuestra escena. Si ejecutamos la vista previa ahora no veremos nada. El objeto del pintor de formas básicamente solo agrega la funcionalidad para el objeto. Por ahora solo tiene las propiedades / parámetros del "pintor de formas". Para dibujar una forma, necesitamos usar el editor de escenas (eventos). //Si no está familiarizado con los eventos, recomiendo revisar la página de eventos en la wiki. //

Vayamos al Editor de Eventos de Escena para agregar un evento. Una vez que haya agregado un nuevo evento, haga clic en el texto "agregar acción".

Encuentra los eventos para el dibujo primitivo.

![](/gdevelop5/objects/primitivedrawingeventchoices.png)

Podemos elegir entre 3 tipos diferentes de formas para dibujar. Círculo, línea y rectángulo. Vamos a dibujar un rectángulo en la pantalla. Seleccione el rectángulo debajo de las propiedades del dibujo. ![draw-shape-event.png](/gdevelop5/objects/draw-shape-event.png)

En el lado derecho, seleccione el objeto de forma de pintor a utilizar. Para la posición superior izquierda ingrese 0 para X e Y. Para la posición inferior derecha ingrese 100 para X e Y. ![draw-shape-event-properties.png](/gdevelop5/objects/draw-shape-event-properties.png)

Ahora, si iniciamos una vista previa de escena, se dibujará un rectángulo en la escena / pantalla que tiene 100 píxeles de ancho y 100 píxeles de alto. ![rectanlge-shape-painter.png](/gdevelop5/objects/rectanlge-shape-painter.png)

Si dejamos la posición relativa habilitada, puede observar que nuestro rectángulo está en la misma posición que el objeto pintor de formas aunque el punto de origen sea 0. Ahora, si deshabilitamos esa opción y lanzamos la vista previa nuevamente, verá nuestro objeto. Se dibuja en la esquina superior izquierda de nuestra escena.

Usando eventos también podemos cambiar cualquier propiedad de una forma sobre la marcha.

![](/gdevelop5/objects/shapepaintereventsexample.png)

## Ejemplos

!!! note
    
        **Véalo en acción!** 🎮  
    Abra estos ejemplos Online.

[![](/gdevelop5/objects/shapepainterobject.png)](https://editor.gdevelop-app.com/?project=example://advanced-shape-based-painter)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://advanced-shape-based-painter){ .md-button .md-button--primary }
