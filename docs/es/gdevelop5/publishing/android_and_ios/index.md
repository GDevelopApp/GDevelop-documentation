---
title: Publica tu juego en Android o IOS
---
# Publica tu juego en Android o IOS

GDevelop te permite publicar tus juegos en una gran variedad de formatos incluyendo Android e IOS con los servicios de construcción online o [manualmente](/gdevelop5/publishing/android_and_ios_with_cordova). Para exportar el juego, haga click/seleccione "Archivo" en el menú ubicado en la parte superior de la interfaz de GDevelop. Seleccione la opción de exportación que desee. En este caso, vamos a elegir **Android e iOS** Desde el panel de opciones que aparece

![](/es/gdevelop5/publishing/captura_de_pantalla_2021-08-04_a_las_16.24.43.png)

## ¡Asegúrate de que tu juego está listo para exportar!

Es importante verificar que tu juego está listo para ser exportado a Android o IOS:

  * En las propiedades del juego están accesibles desde el  [Administrador de proyector](/gdevelop5/interface)), asegúrese de introducir un  _nombre de paquete válido_. Un nombre de paquete es un identificador como este: `com.tunombre.nombredeljuego`. Es como el nombre de un sitio web pero al revés. Puedes elegir cualquier nombre simpre que:
      * No está siendo usado por otra aplicación o juego en iOS o Android.
      * Está escrito solo con letras, números y puntos. Solo tiene puesto un punto entre letras (pro ejemplo, `com..mijuego` o `..mijuego` no son válidos). _Limita este identificador a 2 o 3 palabras como máximo._
  * Comprueba que hayas añadido los iconos requeridos.


## Abra la exportación

En el menú "archivo" elija exportar. Posteriormente elija  **Android (y iOS próximamente)**.

![](/es/gdevelop5/publishing/captura_de_pantalla_2021-08-04_a_las_16.25.39.png)




### Crear una cuenta si todavía no tienes

Para usar el empaquetado para android necesitas una [cuenta de GDevelop](/gdevelop5/interface/profile). Si no tienes una, haga click en "CREAR MI CUENTA", Introduzca su email y elija una contraseña.

Elije si deseas exportar un **APK** o un **Android App Bundle**:

- Un **APK** Te permite enviar el archivo generado a un dispositivo Android e instalarlo. Es ideal para de forma rápida **probar tu juego en un dispositivo Android**.
- Un **Android App Bundle** (también abreviado "AAB") es el formato requerido para [publicar en Google Play](/gdevelop5/publishing/android_and_ios/play-store). Si creas creas un juego en Google Play Developer Console (Consola de desarrollo de Google Play Store o página del desarrollador de Google Play), necesitarás subir un archivo AAB.

Una vez estés listo, haga click **EMPAQUE PARA ANDROID**:

![](/es/gdevelop5/publishing/captura_de_pantalla_2021-08-04_a_las_16.27.55.png)

Ahora espere a que la exportción se termine de realizar.
Hay algunos pasos mientras que el juego es exportado, comprimido, subido al servicio de construcción y contruido.

Al final, aparecerá un botón  **DESCARGAR** para obtener el archivo APK o [AAB para publicar en google play](/gdevelop5/publishing/android_and_ios/play-store).


## Instalación en tu dispositivo Android (APK)

!!! note

    Para probar el juego en tu teléfono deberás de haber elegido APK. Si desea distribuirlo en Google Play, [lea esta página](/gdevelop5/publishing/android_and_ios/play-store).

Conecte su teléfono/tablet y transfiera el archivo APK file en alguna carpeta o sitio del dispositivo. De forma alternativa, puedes pasar el archivo APK mediante alguna plataforma de almacenamiento en la nube, servicio de transferencia o email. Algunos ejemplos: ([Dropbox](https://www.dropbox.com/), [Google Drive](http://drive.google.com/), [OneDrive](https://onedrive.live.com/about/en-in/)...) posteriormente tras transferirlo a alguno de estos servicios necesitará descargar el archivo e instalarlo.

Antes de intalar el APK, vaya a Ajustes > Seguridad y active *Orígenes/fuentes desconocidos/as*. Esto va a permitirte [instalar el archivo apk](https://developer.android.com/studio/publish#publishing-unknown) aunque no estés registrado en Google Play Store.

Finalmente, abra un *Administrador de archivos*, vaya a la carpeta que contiene su APK y haga click para abrirlo e instalarlo:

![](/gdevelop5/publishing/android-file-manager.png)

La aplicación/juego ya está instalada. Haga click en *Abrir* para ejecutarla:

![](/es/gdevelop5/publishing/android-app-installed.png)



### Juega al juego

¡El juego está ahora instalado correctamente en tu dispositivo! Ábrelo como cualquier otro juego o app.

Tú has creado un *juego para Android* directamente desde GDevelop. Puedes actualizarlo fácilmente: exporte el juego de nuevo, transfiera el archivo APK de nuevo a su dispositivo e instálelo.


## Subscríbete para obtener más exportaciones diarias.

Como usuario registrado, usted puede empaquetar dos veces su juego diariamente.

Si estás trabajando mucho en tu juego, seguramente querrá exportar más veces el juego. Puedes exportar hasta 10 veces con una subscripción Indie y hasta 70 con una subscripción Pro.

Obteniendo una subscripción ayuda a los autores de GDevelop a continuar trabajando (GDevelop es un software open-source o de código libre/abierto)


## Publicando tu juego en tiendas o Google Play Store ("Android App Bundles")

Una vez exportado tu juego y probado, deberás exportarlo como **Android App Bundle** Para publicarlo en Google Play Store. Lea [esta página para obtener más información](/gdevelop5/publishing/android_and_ios/play-store).

También puedes publicarlo en otras tiendas [Amazon App Store](/gdevelop5/publishing/publishing-to-amazon-app-store) (usando un **APK** por ahora en la mayoría de los casos)(Posteriormente puede que algunas plataformas también soporten archivos *ABB*).