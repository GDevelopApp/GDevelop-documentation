---
title: Variables (Variables)
---
# Variables (Variables)

Las variables le permiten almacenar datos, por ejemplo, un número o un texto (Cadena). Podríamos compararlos con cajones o cajas donde podemos archivar notas. Todos los datos se pueden almacenar, siempre que estén en formato de texto o número. Una variable puede contener el número de vidas restantes, un puntaje alto, el número de balas que quedan, el número de enemigos muertos, etc. Probablemente vayas a usar variables para almacenar números en tu juego.

## ¿Dónde se almacenan las variables?

El alcance de una variable determina dónde se puede acceder a una variable. En GDevelop, tres ámbitos variables están disponibles:

* **Global** Las variables son accesibles desde todas las escenas del juego. Por ejemplo, se pueden usar para almacenar la puntuación del jugador en diferentes niveles. * **Scene** Las variables solo son accesibles desde una escena. Se pueden usar para datos que solo conciernen a una escena y no a todo el juego. Como ejemplo, el tiempo restante antes de una explosión. * **Object** Las variables solo conciernen a un objeto. En este caso, un héroe puede tener una variable "Salud" o "Munición" que almacena un número que controla la salud de un héroe o el número de balas disponibles para ese personaje.

## Cómo declarar y usar variables

Las variables globales, de escena y de objeto se pueden definir utilizando los editores de variables. Para las variables globales, [Project Manager](/fr/ gdevelop5/ interface/ project-manager) tiene un enlace a las variables globales. Para las variables de escena, [clic derecho en una escena](/gdevelop5/ interface/ scene-editor). Luego, haga clic en "propiedades". Para objetos, haga clic derecho en un objeto en la lista y elija "editar variables de objeto".

Los editores de variables declaran variables junto con sus valores iniciales.

Nota: que estos editores son totalmente opcionales. También puede comenzar directamente a utilizar acciones y condiciones para modificar y comparar variables. // Si ingresa el nombre de una variable que no existe en una acción o condición, se creará automáticamente en la memoria durante el juego.//

Cualquier nombre puede ser usado para una variable. De forma predeterminada, las variables contienen el número inicial 0. Si utiliza una acción para cambiar el texto almacenado por la variable, la variable cambiará para contener el texto que ha definido.

## Usar variables en expresiones.

Se puede acceder a las variables desde condiciones, modificarse desde acciones y también se pueden leer en expresiones.

En una expresión que calcula un número, usa:

* `GlobalVariable (name)` para leer el valor de una variable global
* `Variable (nombre)` para leer el valor de una variable de escena
* `ObjectName.Variable (name)` para leer la variable del objeto llamado "ObjectName".

En una expresión que devuelve un texto, use en su lugar:

* `GlobalVariableString (name)` para leer el texto de una variable global
* `VariableString (name)` para leer el texto de una variable de escena
* `ObjectName.VariableString (name)` para leer la variable del objeto llamado "ObjectName".

## Ver variables en el depurador.

Al desarrollar un juego, pueden ocurrir errores porque el valor de una variable no es el esperado. Si algo en su juego no funciona y cree que el problema podría estar relacionado con una variable, use el depurador de GDevelop para averiguar qué está mal.

Para obtener más información, consulte: [Game Debugger and Profiler](/gdevelop5/interface/debugger).

## Variables de estructura

FIXME Esta sección está en construcción. ¡Puedes escribirlo tú mismo creando una cuenta en el wiki!
