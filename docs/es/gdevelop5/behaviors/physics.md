---
title: Comportamiento de la Física (Physics behavior)
---
# Comportamiento de la Física (Physics behavior)

**[¡Prefiero ver los ejemplos de comportamiento de física! Por favor, llévame allí ahora.](#Examples)**

El comportamiento de "Física" permite que los objetos se comporten de acuerdo con las leyes de la física. El comportamiento de la física aplica la física del mundo real a los objetos de tu juego. Los objetos del juego pueden moverse, caer, rodar, rebotar y chocar.

## Añadir comportamiento al objeto (Add behavior to object) Para agregar un comportamiento físico a un objeto, abra las propiedades del objeto haciendo clic derecho en el objeto creado en el Editor de objetos. Luego, seleccione "Editar objeto" de la lista emergente que aparece. Finalmente, seleccione la pestaña Comportamientos y haga clic en el botón "agregar comportamiento".

Elige el "motor de física": ![](/gdevelop5/behaviors/physics-behavior-inlist.png)

## Propiedades (Properties) Una vez que se agrega el comportamiento al objeto, hay una serie de opciones para personalizar: ![](/gdevelop5/behaviors/physics-behavior-options.png)

**Considerar como una bala (Consider as Bullet)**

Marque esta casilla si desea que el motor de física intente realizar un manejo de colisión perfecto en este objeto. Esto se usa mejor para objetos que se mueven rápidamente, es decir, balas, de ahí el nombre. "Considerar como bala" requiere muchos recursos. *Úsalo en la menor cantidad de objetos posible.*

**Objeto dinámico (Dynamic Object)**

Un "Objeto dinámico" se efectuará mediante la simulación del motor de física. La gravedad, las fuerzas y todas las propiedades enumeradas forman parte del motor de física. Si piensa en una bola rodante en un juego de pinball, establecería esto como dinámico debido a su movimiento de rodar.

Si no elige "Objeto dinámico", creará un objeto estático o cinemático. Estos objetos no son afectados por el motor de física. Ellos no se moverán por su cuenta. Pueden ser movidos por tus eventos y acciones (cinemática). De lo contrario, simplemente se quedarán donde están (estático). En un juego de pinball puede usar esto para las aletas (cinemáticas) y las paredes y los parachoques (estático).

**Rotación fija (Fixed Rotation)**

Esta configuración evita que el objeto gire. Ignora el valor de amortiguación angular. La amortiguación angular controla la velocidad de rotación del objeto.

**Mojadura (Damping)**

La amortiguación se utiliza para reducir la velocidad de los objetos. La amortiguación es diferente de la fricción. La fricción solo se produce con el contacto. La amortiguación no es un reemplazo para la fricción. Los dos efectos se deben utilizar juntos. Los parámetros de amortiguación deben estar entre 0 e infinito, con 0 significa que no hay amortiguación y infinito significa que la amortiguación es total. Normalmente usarás un valor de amortiguamiento entre 0 y 0.1.

**Fricción (Friction)**

La fricción se utiliza para hacer que los objetos se deslicen entre sí de manera realista. El parámetro de fricción generalmente se establece entre 0 y 1, pero puede ser cualquier valor no negativo. Un valor de fricción de 0 desactiva la fricción y un valor de 1 hace que la fricción sea fuerte.

**Masa (Mass)**

La masa (peso) que asignes a un objeto afectará en gran medida la física de tu juego. Comience con todos los objetos establecidos en 1 y luego ajuste el valor como mejor le parezca.

**Restitución (Restitution)**

La restitución se utiliza para hacer rebotar objetos. El valor de restitución generalmente se establece entre 0 y 1. Considere dejar caer una pelota en una mesa. Un valor de cero significa que la pelota no rebotará. Esto se llama una colisión inelástica. Un valor de uno significa que la velocidad de la pelota se reflejará exactamente. Esto se llama una colisión perfectamente elástica.

#Ejemplos

!!! note

        **See it in action!** 🎮

    Open these examples online.

**Física (Physics):**

[![](/gdevelop5/behaviors/hingeleverdemo.png)](https://editor.gdevelop-app.com/?project=example://physics)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://physics){ .md-button .md-button--primary }

**Física de Carro (Car Physics)**

[![](/gdevelop5/behaviors/carphysics.png)](https://editor.gdevelop-app.com/?project=example://car-physics)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://car-physics){ .md-button .md-button--primary }

**Objeto de Gravedad (Object Gravity)**

[![](/gdevelop5/behaviors/objectgravity.png)](https://editor.gdevelop-app.com/?project=example://object-gravity)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://object-gravity){ .md-button .md-button--primary }
