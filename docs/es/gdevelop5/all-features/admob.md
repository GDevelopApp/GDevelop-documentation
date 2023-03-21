---
title: Integrar anuncios usando Google AdMob
---
# Integrar anuncios usando Google AdMob

GDevelop soporta la integración de anuncios en su juego usando **Google AdMob**, on *Android* and *iOS*.

Los anuncios pueden ser mostrados y cargados en cualquier momento. Pueden mostrarse como **banners** arriba o abajo de la pantalla o como **anuncios intersticiales**. Los _anuncios intersticiales_ son aquellos que ocupan toda la pantalla. **Vídeos de recompensa** también pueden ser mostrados.

Los anuncios tipo banner suelen ser mostrados durante la partida o en el menú. Los anuncios intesticiales suelen mostrarse al iniciar/finalizar una escena o al lograr un objetivo dentro del juego. Los anuncios de recompensa suelen mostrarse a modo opcional si el usuario desea obtener algo a cambio de ver un anuncio (por ejemplo: monedas adicionales o saltar un nivel muy complicado para él)

## Configurando tu cuenta de Google AdMob

Para empezar, vaya al [sitio web de AdMob](https://www.google.com/admob/) y cree una cuenta. Una vez hecho esto, deberá crear una app y un nuevo bloque de anuncio.

Ente en `Apps" y luego haga click en "Añadir App" en el menú de la izquierda".

![](/gdevelop5/all-features/admob-left-menu-add-app.png)

Añada sus apps estableciendo el nombre y la plataforma correspondiente. Si su juego es tanto como para Android e IOS, deberá de registrar 2 bloques de anuncio diferentes.

Una vez creado, su **app id (id de la aplicación)** se mostrará.

![](/gdevelop5/all-features/admob-app-created.png)

Posteriormente, elija si el anuncio va a ser un banner, anuncio interstitial o video recompensado.

![](/gdevelop5/all-features/admob-choose-ads-type.png)

Establezca un nombre y haga click en "Añadir un nuevo bloque de anuncio" (create ad unit).

![](/gdevelop5/all-features/admob-banner-setup.png)

Ahora podrá ver el app id (id de la aplicación) y el ad unit identifier (id del bloque de anuncio).

![](/gdevelop5/all-features/admob-adunit-id.png)

!!! note

    El primer identificador es el **app id (id de la aplicación)**. El segundo es el **ad unit identifier (identificador del bloque de anuncio)**. Necesitas saber esto para luego insertarlo en los parámetro del juego y los parámetros de la acción para mostrar los anuncios. Cópielos o deje la ventana abierta. 

## Añadir un método de pago en AdMob

Antes de que tus anuncios puedan ser mostrados, necestas tener establecido un método de pago en tu cuenta. Vaya a la página de pagos y rellene la información necesaria:

![](/gdevelop5/all-features/admob-payments-menu.png)

Cuando tu cuenta esté lista, Admob mostrará que tu cuenta ha sido *aprobada*:

![](/gdevelop5/all-features/admob-account-approved.png)

Ahora se podrán mostrar anuncios.

!!! note

    Puede tomar un día (~h24) o días en mostrarse anuncios por primera vez. Si los anuncios no se muestra, compruebe que ha introducido toda la información necesaria en esta página y que su juego se encuentra configurado correctamente (ver la siguiente sección).

!!! note

    Una vez tu cuenta está aprobada use el modo prueba para probar los anuncios. Si no usa el modo de prueba, su cuenta podría bloquearse debido a que AdMob prohibe el uso de anuncios en apps locales. Tu teléfono y ordenador no deben estar en la misma red y la cuenta de Google usada para Play sotre no debe ser la misma que la usada para el desarrollo. Generalmente es mejor pedirle a un amigo que pruebe el juego.

## Configurando tu juego

Una vez configurada tu cuenta de AdMob y teniendo tu app id y el ad unit identifier (identificador de anuncio), abre las propiedades de tu juego. Abre el **Administrador de proyectos**, y haga click en ajustes del juego y **Propiedades**.

En la sección AdMob, introduzca su **app id**, uno para Android y otro para iOS (aunque puede que sea el mismo).

!!! note

    El app id debe de ser introducido *SIN* comillas o espacios al principio/final.

![20210128-231626.png](/gdevelop5/all-features/admob/pasted/20210128-231626.png)

!!! note

    No confundir el *app id (identificador de la app)* y el *ad unit identifier (identificador de la unidad de anuncio)*. El app id es un único id para tu app, mientras que el ad unit identifier es diferente para cada anuncio que creas.

## Cargando y mostrando anuncios Una vez tu juega está configurado con el *app id*, puedes añadir un evento con una acción para mostrar el bloque de anuncio que has creado (ad unit). Todas las acciones pueden encontrarse dentro de la categoría AdMob:

![20210131-221349.png](/gdevelop5/all-features/admob/pasted/20210131-221349.png)

Elija las opciones adaptadas a su bloque de anuncio:

    *Si has creado un **banner**, usa las acciones 1) *Configurar el banner* y 2) *Mostrar el banner*. 

    * Para **intersticiales** y **vídeos recompenssados**, use la acción para primero cargarlo (durante la partida) y luego la acción para mostrarlo (el jugador ha terminado el nivel, por ejemplo).

En la acción, pegue el **ad unit id (id del bloque de anuncio)** en los parámetros (uno para android y otro para IOS). Debido a que los parámetros son expresiones de cadena, debe poner los *ad unit identifier (id del bloque de anuncio) entre comillas*.

![20210131-221724.png](/gdevelop5/all-features/admob/pasted/20210131-221724.png)

Para mostrar los anuncios tan pronto como estén listos, marque la opción correspondiente. Esto es solo para los anuncios intersticiales y vídeos recompensados. Los banners son cargados y mostrados automáticamente usando la acción *Mostrar banner*.

Finalmente, si su cuenta no se encuentra totalmente aprobada, es posible consultar el espacio que i¡eocupará su juego con el "**Modo prueba**". Esto creará un banner, intersticial o vídeo de recompensas falsos para ver el espacio que usan. - Esta es una gran forma de comprobar lo realizado.

Para esto, inserte la acción para habilitar el modo prueba al principio del juego:

![20210131-221920.png](/gdevelop5/all-features/admob/pasted/20210131-221920.png)

## Probando y publicando su jueego en Android (o iOS)

Primero necesita exportar el juego para Android (o iOS) para tener anuncios en su dispositivo. ver **[la página dobre como publicar para Android e iOS](/gdevelop5/publishing/android_and_ios)**.

![](/gdevelop5/all-features/export-android.png)

El servicio de exportación en un click para Android incluido con GDevelop es compatible con Admob, por lo tanto no se requieren herramientas o kits de desarrollos adicionales.

En resumen, antes de lanzar su aplicación con anuncios, debe de:

- Tener su cuenta de Admob aprobada.
- Comprobar que ha desabilitado el modo prueba (no hay una acción que lo active).
- Comprobar que ha establecido correctamente el **app id (id de la aplicación)** (para Android e iOS), y los **ad unit identifier (identificadores del bloque de anuncio)** (para Android e iOS).

Espere unas cuantas horas para poder ver los primeros anuncios.

!!! note

    Recuerde que los anuncios no están visibles en las previsualizaciones de GDevelop, solo en las exportaciones para Android (or iOS) apps. Puede que el servicio de AdMob tome varios días en empezar a mostrar anuncios en su aplicación, especialmente para los vídeos.

## Ejemplo

Mire como los anuncios funcionan en un juego abriendo el ejemplo **AdMob**. Remplace los app id (id de la aplicación) e ad unit identifiers (identificadores del bloque de anuncio), en las acciones para probar con su propia cuenta.

!!! note

    ¡Pruébelo online! **[Click aquí para abrir el ejemplo de Admob](https://editor.gdevelop-app.com/?project=example://admob)**. Debe exportalo a Android usando el editor de Gdevelop descargado en su pc para probar el ejemplo en un teléfono real.
