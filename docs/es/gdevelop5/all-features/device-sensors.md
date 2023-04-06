---
title: Extensión de sensores del dispositivo
---
# Extensión de sensores del dispositivo

Esta poderosa extensión le brinda acceso a los sensores que se pueden encontrar en la mayoría de los dispositivos móviles.

## Sensor de orientación

El sensor de orientación combina el giroscopio, el acelerómetro y la brújula en un sensor. Esto le permite controlar los objetos del juego girando ligeramente el dispositivo móvil en sus manos. Puede acceder a los datos de ubicación a través de los valores "alfa", "beta" y "gamma" que se explican en la siguiente sección.

### Ejes explicados

#### Alfa

![](/gdevelop5/all-features/orientation_alpha_axis.png)

El valor "alfa" corresponde al eje que apunta al cielo cuando su teléfono está sobre una mesa con su pantalla apuntando hacia arriba. Puede crear fácilmente una brújula utilizando el valor de rotación "alfa".

**Rango: **0 a 360 grados

#### Beta

![](/gdevelop5/all-features/orientation_beta_axis.png)

El eje "beta" corre a través del borde estrecho del teléfono.

**Rango: **-180 a 180 grados

#### Gamma

![](/gdevelop5/all-features/orientation_gamma_axis.png)

El eje "gamma" recorre el borde más largo del teléfono.

**Rango: **-90 a 90 grados

### Condiciones

**Sensor activo**

Esta condición verifica si el sensor se ha activado todavía y está entregando datos de ubicación.

**Orientación alfa**

Esta condición le permite comparar el valor de alfa con un número o variable.

**Orientación Beta**

Esta condición le permite comparar el valor de beta con un número o variable.

**Orientación Gamma**

Esta condición le permite comparar el valor de gamma con un número o variable.

### Acciones

**Activar el sensor de orientación**

Esta acción activa el sensor de orientación para que comience a entregar valores alfa, beta y gamma. Vuelva a apagarlo cuando ya no necesite el sensor para ahorrar tiempo de procesamiento y la batería del teléfono.

**Desactivar el sensor de orientación**

Esta acción desactiva el sensor de orientación para que deje de entregar valores alfa, beta y gamma.

### Expresiones

**Es Absoluto**

Este valor indica que los datos de orientación están en valores absolutos. En referencia a las coordenadas de la Tierra (valor 1) o el uso de un marco arbitrario está determinado por el dispositivo (valor 0).

**Valor alfa**

La rotación "alfa".

**Valor Beta**

La rotación "beta".

**Valor gamma**

La rotación "gamma".

## Sensor de movimiento

En contraste con el sensor de orientación que devuelve valores absolutos, el sensor de movimiento entrega valores relativos. Este sensor solo devuelve valores mientras el dispositivo se está moviendo. Si lo mantiene quieto, sin importar su orientación, el sensor devolverá 0. Puede acceder a los datos de movimiento a lo largo de un eje a través de los valores "x", "y", "z" y los datos de rotación alrededor de un eje a través de "alfa", "beta" y "gamma", que se explican en la siguiente sección.

!!! note

     Los valores de rotación del sensor de movimiento (alfa, beta, gamma) actualmente no son compatibles con los dispositivos móviles. Actualmente sería mejor calcular el valor a partir de los datos de orientación

### Ejes explicados

#### Aceleración X

![](/gdevelop5/all-features/motion_acceleration_x.png)

Este valor muestra la aceleración a lo largo del eje x. Si mueve su dispositivo a lo largo del borde más largo, el valor de x aumentará.

#### Aceleración Y

![](/gdevelop5/all-features/motion_acceleration_y.png)

Este valor muestra la aceleración a lo largo del eje y. Si mueve su dispositivo a lo largo del borde más pequeño, el valor y aumentará.

#### Aceleración Z

![](/gdevelop5/all-features/motion_acceleration_z.png)

Este valor muestra la aceleración a lo largo del eje z. Si mueve su dispositivo hacia arriba o hacia abajo, el valor z aumentará.

#### Rotación alfa

![](/ gdevelop5/ all-features/ motion_alpha.png)

Este valor muestra la aceleración alrededor del eje z. Si enciende su dispositivo con la pantalla hacia arriba, el valor alfa aumentará.

#### Rotación beta

![](/ gdevelop5/ todas las funciones/ motion_beta.png)

Este valor muestra la aceleración alrededor del eje x. Si sostiene su dispositivo en modo horizontal con una mano en cada lado, puede girar su dispositivo alrededor del eje x y el valor beta aumentará.

#### Rotación gamma

![](/ gdevelop5/ todas las funciones/ motion_gamma.png)

Este valor muestra la aceleración alrededor del eje y. Si sostiene su dispositivo en modo retrato con una mano en cada lado, puede girar su dispositivo alrededor del eje y y el valor beta aumentará.

### Condiciones

**Sensor activo**

Esta condición verifica si el sensor se ha activado todavía y está entregando datos de ubicación.

**Aceleración X**

Esta condición le permite comparar el valor de la aceleración x con un número o variable. (m / s²)

**Aceleración Y**

Esta condición le permite comparar el valor de la aceleración y con un número o variable. (m / s²)

**Aceleración Z**

Esta condición le permite comparar el valor de la aceleración z con un número o variable. (m / s²)

**Motion Alpha**

Esta condición le permite comparar el valor de alfa con un número o variable. (m / s²)

**Motion Beta**

Esta condición le permite comparar el valor de beta con un número o variable. (m / s²)

**Motion Gamma**

Esta condición le permite comparar el valor de gamma con un número o variable. (m / s²)

### Acciones

**Activar el sensor de movimiento**

Esta acción activa el sensor de movimiento para que comience a entregar valores de x, a, z, alfa, beta y gamma. Vuelva a apagarlo cuando ya no necesite el sensor para ahorrar tiempo de procesamiento y la batería del teléfono.

**Desactivar el sensor de movimiento**

Esta acción desactiva el sensor de movimiento para que deje de entregar valores de x, a, z, alfa, beta y gamma.

### Expresiones

**Aceleración X Valor**

La aceleración "x". (m / s²)

**Aceleración Y Valor**

La "y" aceleración. (m / s²)

**Aceleración Z Valor**

La aceleración "z". (m / s²)

**Valor alfa**

La rotación "alfa". (m / s²)

**Valor Beta**

La rotación "beta". (m / s²)

**Valor gamma**

La rotación "gamma". (m / s²)

![](/gdevelop5/all-features/devicesensorsevents.png)

## Reference

All actions, conditions and expressions are listed in [the device sensors reference page](/gdevelop5/all-features/device-sensors/reference/).
