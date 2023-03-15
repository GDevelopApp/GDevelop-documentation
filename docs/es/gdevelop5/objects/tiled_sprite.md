---
title: OBJETO SPRITE DE AZULEJOS (Tiled Sprite object)
---
# OBJETO SPRITE DE AZULEJOS (Tiled Sprite object)

!!! note
    
        **Véalo en acción!** 🎮  
    [¡Prefiero ver los ejemplos de objetos de Tiled Sprite! Por favor, llévame allí ahora.](#Examples) 

Un objeto sprite de mosaico nos permite mostrar una imagen en un conjunto de mosaicos. Puede aumentar y disminuir el tamaño del conjunto de azulejos al escalar el objeto en la escena.

Un objeto sprite de mosaico puede usarse para crear plataformas en un juego de plataformas. También se puede utilizar como un grupo de las mismas imágenes. En este caso, no es necesario tratar con múltiples objetos de sprite. ![](/gdevelop5/objects/tiled-sprite-object.png)

### Añadir un objeto sprite en mosaico

Para agregar un objeto de Sprite en mosaico a una escena, cree un nuevo objeto de la lista de objetos. Seleccione la opción "Sprite en mosaico" en el panel que se abre.

![add-tiled-sprite-object.png](/gdevelop5/objects/add-tiled-sprite-object.png)

### Abrir propiedades de objeto

A continuación, nuevamente desde la lista de Objetos a su derecha, abra las propiedades del objeto haciendo clic derecho en el objeto. Seleccione "Editar objeto" en la lista emergente que aparece.

![tiled-sprite-properties.png](/gdevelop5/objects/tiled-sprite-properties.png)

### Añadir una imagen

Para agregar una imagen al objeto, haga clic en el campo "Seleccionar una imagen". Se abrirá un explorador de archivos local en su computadora. Elige una imagen de tu elección. ![add-image-to-tiled-sprite.png](/gdevelop5/objects/add-image-to-tiled-sprite.png)

La imagen seleccionada se mostrará en la ventana de vista previa a la derecha. ![tiled-sprite-image-preview.png](/gdevelop5/objects/tiled-sprite-image-preview.png)

### Cambiar tamaño predeterminado

Podemos cambiar el tamaño predeterminado del objeto sprite en mosaico cambiando el ancho predeterminado y el valor de altura predeterminado en la parte inferior. ![](/gdevelop5/objects/tiled-sprite-default-size.png)

El tamaño predeterminado afecta la cantidad de imagen que será visible en el objeto. Por ejemplo, así es como se ve mi imagen con un tamaño de objeto de 32 × 32. ![](/gdevelop5/objects/tiled-sprite-3232.png)

Como puede ver, la imagen de arriba no se escala con el objeto sino que hace que la imagen solo sea parcialmente visible.

Si configuro el tamaño del objeto en 100 × 100 (como se ve a continuación), el tamaño del objeto es más grande que la imagen real, por lo que continúa dibujando la imagen nuevamente para llenar el espacio vacío. ![](/gdevelop5/objects/tiled-sprite-100100.png)

### Escalar el objeto

Puede obtener resultados instantáneos al escalar el objeto en el editor de escenas para crear el aspecto / tamaño que necesita. ![](/gdevelop5/objects/scale-tiled-sprite.png)

El editor de escenas (eventos) también se puede usar para cambiar el tamaño de un sprite en mosaico. Usar el editor de Eventos hace que el juego sea más fluido e interesante.

![](/gdevelop5/objects/scaleasprite.png)

## Ejemplos

!!! note
    
        **Véalo en acción!** 🎮  
    Abre los ejemplos Online.

[![](/gdevelop5/behaviors/platformerbehavior.png)](https://editor.gdevelop-app.com/?project=example://platformer)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://platformer){ .md-button .md-button--primary }
