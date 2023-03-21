---
title: OBJETO DE ENTRADA DE TEXTO (Text entry object)
---
# OBJETO DE ENTRADA DE TEXTO (Text entry object)

!!! note
    
        **Vélao en acción!** 🎮  
    [¡Prefiero ver los ejemplos de objetos de Sprite! Por favor, llévame allí ahora!.](#Examples) 

El objeto de entrada de texto captura la entrada del usuario y la almacena en la memoria. Puede utilizar este objeto para simular campos de entrada de texto. Por ejemplo, puede usar el objeto de entrada de texto para proporcionar una forma en que el jugador de su juego pueda ingresar su nombre o cualquier otra información.

### Añadir objeto de entrada de texto

Después de crear un nuevo objeto de la lista del Editor de objetos, seleccione "Entrada de texto" en la lista de opciones mostrada ![add-text-entry-object.png](/gdevelop5/objects/add-text-entry-object.png)

Renombra el objeto de entrada de texto a lo que quieras. Agrega el objeto de entrada de texto a la escena.

Ahora, si ejecuta una vista previa de la escena, todas las teclas que presione serán capturadas por el objeto y almacenadas en la memoria. Para leer el valor de la memoria, necesita usar una expresión como esta: TextEntry.String () (vea un ejemplo a continuación).

### Mostrar valor usando un objeto de texto

Primero, agrega un objeto de texto a la escena. Luego, agregue un evento para modificar el contenido del objeto de Texto: ![text-entry-object-display-value.png](/gdevelop5/objects/text-entry-object-display-value.png)

Para el último parámetro, que es el nuevo contenido para el texto, use la expresión mencionada anteriormente: ![](/gdevelop5/objects/text-text-entry.png)

*Tenga en cuenta que la entrada debe ser el nombre del objeto de entrada de texto. Debe reemplazarlo con el nombre de su entrada de texto.*

Preferiría ver el Sprite oNow si ejecutas una vista previa de la escena. Comience a escribir, verá el objeto de texto que muestra lo que escribe.

Usando eventos, es posible habilitar o deshabilitar el objeto "Entrada de texto". Los eventos también le permiten controlar cuándo capturar la entrada de texto y cuándo no capturar los ejemplos de entrada de texto. Por favor, llévame allí ahora.

![](/gdevelop5/objects/textentryobjectevents.png)

## Ejemplos

!!! note
    
        **Véalo en acción!** 🎮  
    Abre estos ejemplos online

![](/gdevelop5/objects/textexample.png)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://text-entry-object){ .md-button .md-button--primary }
