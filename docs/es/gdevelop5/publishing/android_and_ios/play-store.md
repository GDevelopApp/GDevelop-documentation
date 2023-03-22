---
title: Publica tu juego en Play Store
---
# Publica tu juego en Play Store

Después de crear tu juego con Android (ya sea usando [compilación con un clic para Android](/gdevelop5/publishing/android_and_ios) o [proceso manual con Cordova para usuarios avanzados](/gdevelop5/ publishing/ android_and_ios_with_cordova)), puedes publicar en Google Play Store.

Para hacer esto, necesita tener una cuenta en Google Play Store. Google solicita una tarifa de registro única de $ 25.

!!! warning

     ¿Has publicado un juego en el pasado cargando un APK? Debes realizar [los siguientes pasos para actualizar tu juego de un APK a un Android App Bundle](/gdevelop5/ publishing/ android_and_ios/play-store/upgrade-from-apk-to-aab) para continuar publicando. [Lea esta página](/gdevelop5/publishing/android_and_ios/play-store/upgrade-from-apk-to-aab), ya que es obligatorio hacerlo desde agosto de 2021.

## Crea tu cuenta de desarrollador de Google Play

Para crear su cuenta, vaya a la [Google Player Console](https://play.google.com/console/about/).

## Empaquete su juego

Paquete [su juego como se explica aquí](/gdevelop5/ publishing/ android_and_ios) - eligiendo **Android App Bundle**.

Una vez finalizado el empaquetado, tendrá un **botón Descargar** para obtener el archivo AAB que se puede publicar en Google Play.
Descárguelo y guárdelo en algún lugar de su computadora.

## Crea la aplicación y completa los detalles de la aplicación

Conéctese a la Consola para desarrolladores de Play Store (https://play.google.com/apps/publish/). En las páginas que enumeran sus aplicaciones, haga clic en **Crear aplicación**:

![](/gdevelop5/publishing/android_and_ios/play-store/pegado/20210721-144512.png)

Ingrese un título y elija un idioma. La aplicación se crea en Play Store y ahora puede completar la información que se mostrará en Play Store:

![](/gdevelop5/publishing/android_and_ios/play-store/pegado/20210721-144627.png)

Haga clic en **Crear aplicación** para continuar.

## Crea una "versión" y sube el paquete de aplicaciones de Android

En el menú de la izquierda, busque la sección ** Lanzamiento **. Elige ** Producción **, ** Prueba abierta **, **Prueba cerrada** o **Prueba interna** según cómo quieras distribuir tu juego primero. Le recomendamos que comience con ** Pruebas internas **. Luego, puedes hacer un lanzamiento de "Producción" una vez que estés satisfecho con el juego.

Haga clic en ** Create Release **:

![](/gdevelop5/publishing/ android_and_ios/play-store/pasted/ 20210721-145039.png)

Se le solicita *Firma de aplicaciones de Google Play*, haga clic en **Continuar**.

![](/ gdevelop5/publishing/android_and_ios/play-store/pasted/20210721-145303.png)

En **App Bundles**, elija **Upload** y seleccione su Android App Bundle que fue empaquetado por GDevelop.

El AAB se carga en Play Store. Espera un poco.
Una vez que haya terminado, debería ver un mensaje que indica que la carga se completó correctamente.

Si la carga es un éxito, puede ver su archivo AAB enumerado a continuación:
![](/gdevelop5/publishing/android_and_ios/play-store/pasted/ 20210721-145535.png)

En **¿Qué hay de nuevo en esta versión?**, ingrese las notas de la versión que deben mostrarse en Play Store. Para terminar, haga clic en **Guardar**.

### ¿Algo salió mal?

Si hay un error que le indica que la carga falló, lea el mensaje de error para saber más sobre lo que salió mal. Por lo general, significa que:

* El nombre del paquete no es correcto. En GDevelop, usando [el adminiastrador de proyectos](http://wiki.compilgames.net/doku.php/gdevelop5/interface/project-manager), ingrese un nombre de paquete nuevo y único
* O usó el mismo nombre de paquete que una aplicación existente. Elige otro en el [administrador de proyectos](http://wiki.compilgames.net/doku.php/gdevelop5/interface/project-manager) y vuelva a empaquetar su juego para crear un nuevo AAB.

!!! note

     Si solía publicar su aplicación con un APK, debe actualizar a Android App Bundles. [Lea esta página para aprender cómo hacer esto](/gdevelop5/publishing/android_and_ios/play-store/upgrade-from-apk-to-aab).

## Termina de ingresar todos los detalles sobre el juego

Antes de hacer público su juego, debe terminar de ingresar todos los detalles sobre su juego, incluido el precio y encontrar una calificación para el contenido. Consulte la sección "Crecer" en el menú y asegúrese de completar todos los detalles requeridos:

![](/gdevelop5/publishing/android_and_ios/play-store/pegado/20210721-145735.png)

## ¡Publica el juego!

Una vez que haya completado todo, ingresado una descripción agradable, configurado hermosas capturas de pantalla y cargado el paquete de aplicaciones de Android de su juego, puede volver a la sección **Lanzamiento**. Haga clic en **Producción** y cree una versión para ello.


## ¡Felicidades! El juego está en Play Store.

**¡Felicidades!** Lo lograste y publicaste tu juego.
Algunos usuarios pueden tener que esperar unas horas antes de ver el juego en Play Store.

Recuerda contarlo en las redes sociales, en Discord y en el foro para que la comunidad lo sepa.