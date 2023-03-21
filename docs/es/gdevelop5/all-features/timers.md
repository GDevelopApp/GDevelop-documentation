---
title: Temporizadores (Timers)
---
# Temporizadores (Timers)

## Temporizadores de Escena (Scene Timers)

Puede utilizar condiciones y acciones para iniciar los temporizadores de **escena**. Entonces puedes ejecutar acciones cuando un temporizador alcanza un cierto valor. Los temporizadores más útiles se ven cuando se usan en una condición para comparar el tiempo transcurrido en un temporizador y la acción para restablecer un temporizador a 0. Es importante recordar reiniciar siempre un temporizador antes de usarlo. Si el temporizador no existe, se creará automáticamente en la memoria.

Puedes darle cualquier nombre a tus temporizadores. Los nombres de temporizadores son expresiones de texto / cadena, por lo que deben ingresarse entre comillas.

Aquí hay un ejemplo de Timer más avanzado. El temporizador se utiliza para proteger brevemente al jugador de daños. La cantidad de tiempo otorgada para proteger al jugador depende del valor de la variable "` player_undestroyable_time` "

![](/gdevelop5/all-features/timer-and-variable.png)

!!! note
    
        **Véalo en acción!** 🎮  
    Abra este ejemplo Online: <https://editor.gdevelop-app.com?project=example://asteroids>

## Temporizadores de objetos (Object timers)

Además de los temporizadores de escena, puede usar los temporizadores en su objeto de juego y sus instancias. Esto significa que cada instancia del objeto tendrá su propio temporizador en la memoria. Será independiente de otras instancias de objeto. Esta función le permite iniciar acciones de instancias de objetos después de cada X número de segundos.

Los temporizadores de objetos se configuran de la misma manera que los temporizadores de escenas. Tiene que inicializar un temporizador de instancia de objeto con la acción para Iniciar / restablecer un temporizador: ![](/gdevelop5/all-features/start-object-timer.png)

Tenga en cuenta que al igual que con los temporizadores de escenas, los nombres de los temporizadores de objetos son expresiones de cadena / texto. // ¡Deben ser escritos entre comillas! .// La acción anterior creará un temporizador llamado "` color` "en cada instancia del objeto Sprite e iniciará estos temporizadores.

Ahora puedes comprobar los valores del temporizador: ![](/gdevelop5/all-features/object-timers.png)

La condición anterior verifica si el tiempo transcurrido en el temporizador "` color` "es mayor que una variable de objeto (puede usar una variable de objeto en una expresión para obtener su valor). La condición seleccionará cada instancia de Sprite con un valor de temporizador mayor que el tiempo "solicitado" con la variable de objeto "` color_time` ". Luego, el color del Sprite se cambia a uno aleatorio y el temporizador del objeto se restablece.

Usar variables de objeto para verificar los temporizadores de objetos es útil. Por ejemplo, puedes tener varias instancias de enemigos disparando balas con diferentes velocidades de disparo. Se puede ver otro uso de los temporizadores de objetos cuando se usa con un enemigo que colisiona con un "aumento de velocidad de disparo". Puede configurar la variable "` fire_rate_time` "para que sea menor que el valor normal, lo que significa que el tiempo entre cada viñeta disminuirá.

!!! note
    
        **Véalo en acción!** 🎮  
    Abra este ejemplo Online: <https://editor.gdevelop-app.com?project=example://objects-timers>

![](/gdevelop5/all-features/fireratetimerexample.png)

## Avanzado: simula temporizadores con variables

Los temporizadores de escenas y objetos son convenientes. Sin embargo, a veces puede ser necesario simular temporizadores con variables. Las tareas complejas lo requieren. Esto le permite tener más control sobre los temporizadores. Usando variables, puede aumentar o disminuir el valor sumando o restando el tiempo de la variable. // Si quiere que todas las instancias de su objeto en una escena tengan su propio temporizador personalizado, use una variable junto con la expresión `TimeDelta` //.

![](/gdevelop5/all-features/increase-variable-timer.png)

Este caso de uso aumentará la variable a una velocidad de 1000 unidades por segundo. Cuando se utilizan 1000 unidades por segundo, el "temporizador" se ejecuta en milisegundos.

Por ejemplo, como se ve a continuación, puede comparar una variable (temporizador de daño) para configurar una acción después de 0,5 segundos. Entonces el "temporizador se puede reiniciar.

![](/gdevelop5/all-features/reset-variable-timer.png)
