---
title: Ratón y manejo de eventos táctiles. (Mouse and handling touch events)
---
# Ratón y manejo de eventos táctiles. (Mouse and handling touch events)

GDevelop tiene soporte incorporado para el manejo de toques y entradas de mouse.

## Forma más fácil: use la condición "El cursor / toque está en un objeto"

La condición llamada "**El cursor / toque está en un objeto**" verificará si el cursor del mouse o un toque de pantalla se realiza en un objeto (s) determinado (s).

Si el cursor / táctil se reconoce con "el cursor / táctil está en una condición de objeto", los objetos tocados / desplazados se seleccionarán para las siguientes condiciones y acciones.

Puede usar "**El cursor / toque está en un objeto **" junto con "** Botón del mouse presionado**" o **"Botón del mouse liberado**". Por defecto, el toque emulará un clic izquierdo. Esta configuración predeterminada le permite detectar si el usuario tocó un botón o un objeto con un clic izquierdo del mouse. ![](/gdevelop5/all-features/touch-left-click.png)

Tenga en cuenta que puede usar expresiones como `MouseX` y` MouseY` para obtener la posición del cursor en la escena:

![](/gdevelop5/all-features/mousex-mousey.png)

## Manera más compleja: usa las condiciones para verificar la posición del mouse o toque

Si desea manejar los eventos de toque y cursor por separado, puede usar la acción "De / activar moviendo el cursor del mouse con toques". En este momento, los toques no simularán el mouse y los clics a la izquierda.

Al manejar los eventos táctiles y de cursor por separado, puede usar expresiones para obtener la posición del mouse (`MouseX` y` MouseY`), así como la posición de un toque.

Se pueden hacer múltiples toques al mismo tiempo. Debe almacenar el identificador táctil y pasarlo a expresiones o condiciones que le den la posición del toque. Vea el ejemplo a continuación:

![](/gdevelop5/all-features/mulititoucheventexample.png)

!!! note
    
        **Vélo en acción!** 🎮  
    Abra este ejemplo Online: <https://editor.gdevelop-app.com?project=example://multitouch>
