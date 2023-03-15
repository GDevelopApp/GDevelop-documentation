---
title: Audio
---
# Audio

Reproducir música y o sonidos es una parte escencial de un juego. GDevelop le proporciona varias condiciones y acciones para reproducir archivos de audio.

##Reproducción de un archivo de sonido o de música

!!! warning

     Antes de que se pueda reproducir un sonido/música, primero debes asegurarte de que el jugador interactuó con tu juego (un simple clic/toque en la pantalla está bien para desbloquear el audio). Esta es una limitación de los navegadores y no se puede solucionar. En tu juego final, se recomienda tener en tu primera escena un mensaje "Presiona cualquier tecla o toca la pantalla para continuar". 

La forma más sencilla de reproducir un archivo de audio es usar la acción "**Reproducir un sonido**" o "**Reproducir un archivo de música**".
Elija el archivo que se reproducirá para el primer parámetro de ambas acciones.

La diferencia entre sonido y música es que los archivos de música suelen ser archivos de audio cada vez más grandes. Los formatos de archivo de audio compatibles con GDevelop son Waveform Audio Format (wav), MPEG Layer 3 (mp3), Ogg Vorbis (ogg) y Advance Audio Coding (AAC)

!!! note

     Los archivos Ogg pueden ser contenedores para múltiples tipos de audio, más comúnmente Vorbis y Opus. Los archivos Ogg Vorbis son mucho más compatibles con diferentes navegadores y sistemas operativos, por lo que se recomienda utilizar la codificación Ogg Vorbis si se utilizan archivos ogg. 

Todos estos formatos se pueden utilizar para música o efectos de sonido, aunque se recomienda encarecidamente utilizar mp3 u ogg para música debido al tamaño del archivo wav. Un archivo mp3, ogg o AAC de 320 kbps tendrá una calidad de audio casi idéntica a un archivo wav de máxima calidad, pero ocupará 1/4 del tamaño del archivo.

Si distribuye su juego vía web, algunos navegadores también admiten otros formatos de archivo. Por ejemplo, `ogg`; `ogg` es una alternativa superior a `mp3` para la música. Desafortunadamente, no todos los navegadores lo admiten [Para más información puede consltar Wikipedia](https://en.wikipedia.org/wiki/HTML5_audio#Supported_audio_coding_formats).

!!! tip
    
         Puede utilizar la herramienta de creación de efectos de sonido incorporada llamada jfxr para crear efectos de sonido (esta herramienta solo está disponible para la versión de escritorio)
    [Aprenda a usar jfxr aquí](/gdevelop5/ all-features/ audio/ using-jfxr)
    
!!! note
    
         Cuando eliges un archivo de audio, se agrega a los recursos del juego para que se cargue durante el inicio del juego.
    Para minimizar el tamaño de su juego, asegúrese de eliminar los archivos de audio que ya no están en uso por las acciones de su juego.
    



## Mantén la música y los sonidos reproduciéndose entre escenas

Cuando comienza una nueva escena, de forma predeterminada, los sonidos y la música se detienen. Si desea que sigan reproduciéndose, abra las propiedades de la escena (haga clic con el botón derecho en la escena, en el editor de escenas) y desmarque la casilla de verificación:
![](/ gdevelop5/ all-features/ scene_properties.png)



## Usando canales

Cuando se utiliza la acción "Reproducir un sonido" o "Reproducir un archivo de música", los archivos de audio se reproducen inmediatamente. Al finalizar, se eliminan de la memoria. El bucle es una excepción. Cuando configura la acción para repetir el archivo de audio, se reproducirá para siempre (Endless Loop). Debe utilizar una acción para detener todos los sonidos o la música.

Si desea tener más control sobre los sonidos, utilice la acción "** Reproducir un sonido en un canal **" o "** Reproducir un archivo de música en un canal. **" La acción se usa de la misma manera, excepto que usted tiene que ingresar un número de canal. Este número de canal se puede reutilizar en otras acciones o condiciones. Se puede usar un "número de canal" para verificar si se está reproduciendo un sonido en un canal, o se puede usar para modificar algunas propiedades de la música que se está reproduciendo. Por ejemplo, puede utilizar un "número de canal" para actualizar el volumen de la música de forma dinámica de acuerdo con la presencia de enemigos alrededor del reproductor.

## Volumen

Los sonidos y la música se reproducen por defecto con un volumen del 100%, que es el máximo. Al iniciar un nuevo sonido / música, puede ingresar un valor diferente (entre 0 y 100).

También puedes usar la acción "Volumen global del juego" para cambiar el volumen de audio de todo el juego. Un valor de 0 significa que no se puede escuchar ningún sonido o música. Esta acción es conveniente cuando se permite al jugador silenciar o cambiar el volumen del juego. Por ejemplo, es posible que tenga una pantalla de configuración en su juego que acceda al control de volumen del juego. Los juegos móviles también suelen tener un botón para silenciar los sonidos del juego.

## Consideraciones de rendimiento

La primera vez que se reproduce música o sonido, puede haber un retraso mientras se prepara el archivo de audio. Si es esencial evitar cualquier retraso, puede reproducir el archivo de audio o música al comienzo de la escena donde se usa. Establecer el volumen inicial 0; esto obligará al juego a cargar el sonido o la música. El audio se almacenará en la memoria caché. Se cargará rápidamente cuando se llame usando su acción.

## Más sobre el estado de un sonido / música

Cuando usas la acción para ** reproducir un sonido o música en un canal **, se pone en el estado ** "reproduciendo" **, incluso si todavía **se carga** en la memoria.

La condición "Se está reproduciendo un sonido" (en este canal) es entonces verdadera, mientras que "Un sonido está detenido" (en este canal) será falsa, así como "Un sonido está en pausa" (en este canal nuevamente).
Cuando el sonido esté completamente cargado, comenzará a ser realmente played en su dispositivo (para que escuche el audio).

El sonido se detendrá cuando:

* Llega a su **final** y no está configurado para bucle.
* Hay **un error durante la carga** (en cuyo caso se considerará que se está reproduciendo durante unos milisegundos, luego se considerará que está detenido porque no se pudo cargar).
* O usó **la acción** para detener un sonido o música en el canal.