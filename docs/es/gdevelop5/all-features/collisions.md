---
title: Manejando colisiones en tu juego
---
# Manejando colisiones en tu juego

La mayoría de los juegos necesitan detectar y manejar colisiones entre objetos. La detección y el manejo de colisiones se pueden hacer para que los objetos se adhieran a las plataformas, así como para detectar colisiones entre balas y jugadores o balas y otros objetos.

GDevelop proporciona varias formas diferentes de manejar las colisiones. Puede detectar colisiones usando las acciones y condiciones del editor de eventos o puede usar comportamientos de objetos.

## Haga objetos sólidos: use la acción "Separar objetos" (bueno para juegos de arriba hacia abajo, RPG ...)

Puede utilizar la acción "**Objetos separados**" para mover objetos manualmente. La acción "Objetos separados también puede mover objetos con" fuerzas "o estableciendo la posición del objeto.

"**Objetos separados**". Esta acción toma 2 nombres de objeto como argumento.

- El primer nombre del objeto es el _objeto en movimiento_ (el jugador, el enemigo, etc ...).
- El segundo nombre de objeto es un _objeto (o un grupo de objetos) que es sólido_. Por ejemplo, estos objetos pueden ser las paredes.

La acción entonces iterará sobre todos los objetos dados. Se asegurará de que si cualquier objeto del primer tipo choca con el objeto del segundo tipo, el objeto se alejará. Esto se hace usando un algoritmo llamado _SAT algorithm_.

![](/gdevelop5/all-features/separate-objects-action.png)

Esta acción será lanzada en cada fotograma. En un evento sin condiciones, la acción ya está haciendo las comprobaciones de colisiones. Evita lanzar esta acción varias veces. Hacerlo podría reducir el rendimiento del juego.

### Detección de Colisiones (Detect collisions).

El uso de "Objetos separados" es una buena manera de asegurarse de que sus objetos no puedan moverse a otros objetos sólidos. Esta acción comprueba las colisiones entre objetos. Por ejemplo, si el objeto del juego "jugador" toca una pared, esta acción, cuando se usa con la condición llamada "**Colisión**", provocará daños al jugador.

**La secuencia es importante. ** - Ejecutar la condición llamada "** Colisión**"

1.  Añadir acciones apropiadas.
2.  Añadir la acción "Separar objetos"

Después de ejecutar la acción "Separar objetos", los objetos se mueven. _Las colisiones entre objetos ya no podrán ser verificadas._

Puede encontrar el uso de estas condiciones y acciones en los ejemplos:

!!! note

    **Véalo en acción!** 🎮 Abre el ejemplo Online: <https://editor.gdevelop-app.com?project=example://bomb-the-crate>

[![](/undefined/checkccollisionbetweenobjects.png)](https://editor.gdevelop-app.com?project=example://bomb-the-crate)

## Juegos de Plataformas: usa el personaje de Plataformas y los comportamientos de Plataforma.

Si está creando un juego de plataformas, es una buena idea usar el comportamiento ["Platformer" character](/gdevelop5/ behaviors/ platformer). Es un motor de juego de plataformas ya hecho que es altamente personalizable. El comportamiento del "personaje de Plataformas" maneja las colisiones con las plataformas y la gravedad para usted.

### ¿Detectar colisiones en un juego de plataformas?

En un juego de plataformas con el comportamiento del "personaje de Platformer", las colisiones se manejan por ti con plataformas.

* Aún puedes usar la **Condición de colisión **para verificar las colisiones entre un objeto y otros objetos (por ejemplo, entre el jugador y los enemigos) y reaccionar en consecuencia. * Puede usar la condición "Está en el piso" para verificar si un objeto está en una plataforma.

![](/gdevelop5/all-features/playerisonfloorevents.png)

!!! note
    
        **Véalo en acción!** 🎮  
    Abre los ejemplos Online: <https://editor.gdevelop-app.com?project=example://platformer>

## ¿Juego con la física? Usa el comportamiento de la física.

Usa [Physics behavior](/gdevelop5/ behaviors/ physics) para lograr un comportamiento físico realista en tu juego. Adjunta el comportamiento "Física" a tus objetos. Los objetos se comportarán como si estuvieran basados ​​vivos en el mundo del juego. Algunos ejemplos de comportamiento del mundo real son rebotar bolas, caer, saltar, etc.

Configure las paredes del juego u objetos sólidos que no deberían moverse con un comportamiento "estático".

### Detectar colisiones con el comportamiento de Física.

Cuando está utilizando el comportamiento "Física", **no use **la condición "Colisión" que está en la categoría **Características para todos los objetos**. _El motor de física manejará todas las colisiones por sí mismo ._ La condición de colisión no detectará correctamente cuando los objetos se toquen.

En su lugar, use la Condición de colisión **dentro de la categoría de comportamiento de Física**, que utiliza correctamente el motor de física para escuchar colisiones.

![](/gdevelop5/all-features/usephysicsbehaviornotcollisioncondition.png)

!!! note

    **Véalo en acción!** 🎮 Abra el ejemplo Online: <https://editor.gdevelop-app.com?project=example://physics>

![](/gdevelop5/behaviors/hingeleverdemo.png)
