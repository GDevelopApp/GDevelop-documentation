---
title: Expresiones
---
# Expresiones

GDevelop soporta expresiones! Las expresiones son valores dinámicos que pueden usarse en parámetros de evento. Por ejemplo, para establecer una posición del objeto, puede usar un número fijo como `` 75`` o puede usar una expresión como `` AnotherObject.X () - Variable (position_offset) ``.

Hay dos tipos de expresiones:

1.  // **Numerics **//

Los números pueden usarse en parámetros de eventos. Reciben un valor numérico como la posición del objeto, orden z, número de variable, etc.

1.  // **Cuerdas **//

Las cadenas se pueden utilizar en parámetros que reciben un valor de texto / cadena. Puede usar esta expresión para leer el contenido de una cadena de objeto de texto, su color, el texto de otra variable, etc.

## expresiones numéricas Como se indicó anteriormente, las expresiones numéricas se pueden usar en parámetros numéricos.

### valores aleatorios

`` Random (max) `` - Devuelve un número entero entre `0` y el valor` max` que está definido. El "rango" es \[0, max\].

// Ejemplos usando la expresión aleatoria (): // \<código Javascript\> Aleatorio (3) // Los 3 valores enteros posibles son 0, 1, 2 y 3 Aleatorio (-1, 2) // Los 4 valores posibles son -1, 0, 1 y 2 // RandomInRange (min, max) se puede reemplazar por min + Random (max - min) Aleatorio (2 - -1) \</code\>

`` RandomFloat (max) `` - Devuelve un flotante entre `0` y` max`. El rango es `` \[0, max) ``. Tenga en cuenta que `` max`` no está incluido en el rango. Es importante tener en cuenta que los posibles resultados son infinitos. Esto se debe a que hay infinitos números reales entre dos valores diferentes.  
// Ejemplos usando la expresión RandomFloat (max): // \<code\> RandomFloat (2.5) // ALGUNOS de los muchos valores posibles son 0, 1.467798, 2.000587 y 2.499999 \</code\>

`` RandomFloatInRange (min, max) `` - Devuelve un flotante entre `min` y` max`. El rango es `` \[min, max) ``. Tenga en cuenta que `` max`` no está incluido en el rango. También es importante tener en cuenta que los posibles resultados son infinitos, ya que hay números reales infinitos entre dos valores diferentes.  
// Ejemplos usando la expresión RandomFloatInRange (): // \<code\> RandomFloatInRange (-1.5, 2) // ALGUNOS de los muchos valores posibles son -1.5, -0.598156, 1.000874 y 1.99999 \</code\>

`` RandomWithStep (min, max, step) `` - Devuelve un número entre `min` y` max` en pasos. El rango es `` \[min, min + N * step\] `` con `` min + N * step ≤ max \<min + (N + 1) * step``. Significa que puede devolver cualquiera de los valores escalonados que sean menores o iguales que `` max``.  
// Ejemplos de uso de RandomWithStep (min, max, step) Expresión: //

\<code\> RandomWithStep (1, 3, 0.6) // Los números generados son `` 1``, ​​`` 1.6``, `` 2.2`` y `` 2.8`` \</code\>
