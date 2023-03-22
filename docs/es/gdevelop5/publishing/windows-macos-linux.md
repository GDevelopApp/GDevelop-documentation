---
title: Publica tu juego en Windows, macOS y Linux
---
# Publica tu juego en Windows, macOS y Linux

¡GDevelop puede publicar juegos para Windows, macOS e incluso Linux!

Para exportar un juego, haga clic / seleccione "Archivo" en el menú que se encuentra en la parte superior de la interfaz de GDevelop. Elija la opción "Exportar" de la lista desplegable.

![](/gdevelop5/publishing/filemenuexport.png)

## ¡Asegúrate de que tu juego esté listo para empacar!

Es importante verificar que su juego esté listo para ser exportado como un ejecutable:

- En las propiedades del juego (accesible desde [Project Manager](/gdevelop5/ interface)), asegúrate de ingresar un _package name_ válido. Un nombre de paquete es un identificador como este: `com.yourname.gamename`. Es como la dirección de un sitio web, pero invertida. Puede elegir cualquier nombre de paquete siempre que:

&nbsp;

        * No es usado por otro juego o aplicación en iOS o Android.
        * Está escrito solo con letras, números y puntos. Solo ponga un punto entre las palabras (por ejemplo, "com..mygame" o "..mygame" no son válidos), y limite este identificador a un máximo de 2-5 palabras.
    * En las propiedades del juego, ingresa un número de versión válido (como 1.0.0, 1.0.1 ...)
    * Comprueba que has configurado los iconos.

## Iniciar exportación

En el menú Archivo, elija Exportar. Elija entonces **Windows, macOS y Linux**.

### Crea una cuenta, si no tienes una

Para usar el paquete, necesita un [GDevelop account](/gdevelop5/ interface/ profile). Si no tiene una, haga clic en "Crear mi cuenta", ingrese su correo electrónico y elija una contraseña.

### Elige las plataformas y lanza la exportación.

Elige las plataformas para las que quieres exportar el juego. Para Windows, puede elegir si desea un solo archivo ejecutable o un archivo zip: ![](/gdevelop5/publishing/gdevelop-export-choose-platform.png)

Una vez que esté listo, haga clic en **Exportar**.

Ahora, espera a que el juego sea construido. Puede tardar unos minutos dependiendo de las plataformas que haya elegido. Hay algunos pasos, durante los cuales el juego se exporta, se comprime, se carga en el servicio de compilación en línea y se construye.

Cuando haya terminado, verá un botón de descarga para cada plataforma que se seleccionó para su juego. Use los botones de descarga para recibir los archivos que puede distribuir para jugar en su juego.

### Jugar el juego

* En Windows, haga doble clic en el archivo ejecutable con el nombre de su juego para iniciarlo.
* En macOS, extraiga el archivo y haga doble clic en la aplicación para iniciarla.
* En Linux, [install the AppImage](https://appimage.org/) para ejecutar el juego

!!! note

     Al iniciar el juego en Windows y macOS, puede recibir un aviso sobre la seguridad. Elige ejecutar el juego de todos modos. En macOS, es posible que deba abrir la pestaña * Seguridad y privacidad * en * Preferencias del sistema *.
