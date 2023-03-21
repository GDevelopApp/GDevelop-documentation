---
title: EMISOR DE PARTÍCULAS (Particles emitters)
---
# EMISOR DE PARTÍCULAS (Particles emitters)

!!! note
    
        **Véalo en acción!** 🎮  
    [Preferiría ver los ejemplos de objetos emisores de partículas! Por favor, llévame allí ahora.](#Examples) 

Los emisores de partículas se utilizan para mostrar un gran número de partículas pequeñas. Simulan efectos en un juego. Algunos ejemplos de emisores de partículas son el fuego, las explosiones, el humo y el polvo.

![](/gdevelop5/objects/particles-emitters-preview.png)

El objeto Emisor de partículas se puede configurar con una multitud de parámetros diferentes para crear los efectos deseados.

## Partículas de tipo (Particles kind) Para usar el Emisor de partículas, cree un nuevo objeto de la lista Objetos. Se abrirá un panel:

![](/gdevelop5/objects/addnewobject-particlesemitter.png)

Seleccione "Emisores de partículas" de la lista.

Aparecerá un nuevo panel. Este panel contiene las propiedades que se pueden establecer para su emisor. Deberá desplazarse hacia abajo para ver todas las propiedades disponibles para el emisor.

![](/gdevelop5/objects/particleemitterspanelofchoices.png)

*Hay 3 modos de renderización disponibles para Emisores de partículas: puntos, líneas y texturas.*

* Modo puntos, se mostrarán círculos con el tamaño especificado.
* Modo Líneas, mostrará líneas con la longitud y el grosor especificados.
* Modo texturizado, mostrará una imagen del tamaño especificado.

## Colores (Colors)

* Puede elegir un color de inicio para partículas y un color para atenuar. También puede elegir un valor inicial para la transparencia del objeto.

## Dirección de emisión (Direction of emission)

Las partículas se emitirán en la dirección representada por el ángulo de los emisores en la escena. Puede cambiar el ángulo del cono de rociado, que también se representa en el editor de escenas como dos líneas: un gran valor para este "cono de rociado" dará como resultado una emisión de partículas en un gran número de direcciones. Un valor de 0 emitirá partículas solo en una sola dirección. * Las partículas aparecen en una esfera, alrededor de la posición del objeto emisor. Puedes cambiar el radio de la esfera. * La gravedad se puede aplicar sobre partículas, en los ejes X e Y. Por ejemplo, un valor negativo en el eje Y hará que las partículas suban en el aire. * La fricción influye en la desaceleración de las partículas con el tiempo.

## Tiempo de vida (Lifetime)

* Cada partícula tiene un tiempo de vida limitado que se elige aleatoriamente entre dos valores. Estos dos valores pueden ser cambiados.
* La cantidad de partículas contenidas en el emisor ("tanque") puede ser ilimitada o fija a un número. Si el emisor está fijado a un número, el emisor dejará de emitir después de alcanzar el número establecido de partículas.
* El flujo es el número de partículas creadas cada segundo. Puedes ingresar -1 para disparar todas las partículas en un solo disparo.

También puede cambiar el número máximo de partículas renderizadas por el objeto en la pantalla. Tenga en cuenta que este número cambia la memoria tomada por el emisor. *Si este número es demasiado grande, puede hacer que el juego se bloquee.*

## Ejemplos

!!! note
    
        **Véalo en acción!** 🎮  
    Ábre los ejemplos Online.

[![](/gdevelop5/objects/particleemitterexplosions.png)](https://editor.gdevelop-app.com/?project=example://particles-explosions)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://particles-explosions){ .md-button .md-button--primary }

[![](/gdevelop5/objects/particleemitervarious.png)](https://editor.gdevelop-app.com/?project=example://particles-various-effects)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://particles-various-effects){ .md-button .md-button--primary }
