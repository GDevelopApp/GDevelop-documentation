---
title: Para cada evento (For Each events)
---
# Para cada evento (For Each events)

A For Each event es un tipo de [event](/gdevelop5/ events) que tomará un objeto como parámetro. Luego, durante el juego, para cada instancia del objeto, se repetirán las condiciones y las acciones.

Por lo general, no es necesario utilizar eventos "para cada uno". Las condiciones y acciones se ejecutarán automáticamente en todos los objetos. Se definen por sus condiciones. Sin embargo, de vez en cuando, los eventos "para cada" pueden ser útiles para ejecutar una acción que depende de cada instancia del objeto.

## Ejemplo

!!! note
    
        **Véalo en acción!** 🎮  
    Abra estos ejemplos Online.

[![](/gdevelop5/events/shootingbulletsexplanationexample.png)](https://editor.gdevelop-app.com/?project=example://shooting-bullets-explanation)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://shooting-bullets-explanation){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/platformerbehavior.png)](https://editor.gdevelop-app.com/?project=example://platformer)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://platformer){ .md-button .md-button--primary }

## Cuando usarlo (When to use it)

Considere el siguiente ejemplo. Cuando el jugador se encuentra en una colisión con un objeto llamado "KillAllEnemyBonus", establecemos la variable de "vida" de todos los enemigos en 0. También queremos crear un tipo especial de explosión en la posición de cada enemigo. Necesitamos un evento "para cada" para lograr esto. De lo contrario, se crearía una sola explosión en la posición de solo el primer enemigo: ![](/gdevelop5/events/for-each-example.png)
