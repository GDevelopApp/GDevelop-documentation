---
title: Publier votre jeu sur Android ou iOS GDevelop permet de publier vos jeux sur plein de platformes différentes, y compris Android et iOS avec les services d'empaquetage ou [manuellement](/gdevelop5/publishing/android_and_ios_with_cordova). Pour exporter un jeu, cliquez/sélectionnez 'Fichier" depuis le menu qui se trouve en haut de l'interface GDevelop. Choisissez l'option d'export que vous voulez. Dans ce cas, nous allons choisir **Android et iOS** depuis le panneau des options d'export.
---
# Publier votre jeu sur Android ou iOS GDevelop permet de publier vos jeux sur plein de platformes différentes, y compris Android et iOS avec les services d'empaquetage ou [manuellement](/gdevelop5/publishing/android_and_ios_with_cordova). Pour exporter un jeu, cliquez/sélectionnez 'Fichier" depuis le menu qui se trouve en haut de l'interface GDevelop. Choisissez l'option d'export que vous voulez. Dans ce cas, nous allons choisir **Android et iOS** depuis le panneau des options d'export.

![](/fr/gdevelop5/publishing/gdevelop_export_fr.png)

## Soyez sûr que votre jeu est prêt à être publié

Il est important de vérifier que votre jeu est prêt a être exporté pour Android and iOS. * Dans les propriétés du jeu qui sont accessible depuis [Project Manager](/gdevelop5/interface)), soyez sûr que le *nom du paquet* est un nom comme `com.votrenom.nomdujeu`. C'est comme l'adresse d'un site web mais à l'envers. Vous pouvez choisir le nom de paquet que vous souhaitez mais il doit respecter certaines règles :

        * le nom de paquet ne doit pas être déjà utilisé par une autre application Android ou iOS.
        * le nom du paquet ne contient que des lettres, nombres et points. Ne mettez qu'un seul point entre chaque mot (exemple de chose à ne **PAS** faire :  `com..mygame` ou `..monjeu`) La limite de cet identifiant est de 2 à 5 mots maximums
        * Vérifiez que vous avez inclus les icônes pour votre jeu

. \## Lancer l'export

Dans le menu "Fichier" Choisissez "Export". Puis choisissez **Android (& iOS à venir)**

![](/fr/gdevelop5/publishing/export_android_gdevelop_fr_choix.png)

### Créez un compte GDevelop si vous n'en avez pas

Pour utiliser l'outil d'exportation pour Android, vous devez [avoir un compte GDevelop](/gdevelop5/interface/profile) Si vous n'avez de compte GDevelop, cliquez sur "Créer mon compte", entrez votre email et choisissez un mot de passe.

Choisissez **APK** ou **Android App Bundle**:

- Un **APK** vous permet d'envoyer un fichier exécutable et installable sur votre téléphone Android. C'est efficace pour **tester rapidement votre jeu sur votre téléphone Android**. - Un **Android App Bundle** (AAB pour faire court) est le format obligatoire pour [publier sur Google Play](/gdevelop5/publishing/android_and_ios/play-store). Quand vous créez un jeu sur la console développeur Google Play, c'est ce fichier AAB que vous allez envoyer.

Quand tout est prêt, exportez le jeu en **AAB** (*Android App Bundle*) pour Android.

![](/fr/gdevelop5/publishing/choix_type_export_android_gdevelop_fr.png) Attendez quelques minutes, le temps que le jeu soit exporté. Il y a quelques étapes durant laquelle le jeu est exporté, compressé, envoyé sur le service d'exportation en ligne, puis exporté.

À la fin, vous pourrez **Télécharger** l'APK ou le fichier AAB qui pourra être installé sur Android ou être [publié sur Google Play](/gdevelop5/publishing/android_and_ios/play-store).

    \## Installez le jeu sur votre appareil Android (APK) \<note\> Pour tester un jeu sur votre téléphone vous devez avoir exporté le jeu en APK. Si vous voulez distribuer votre jeu sur Google Play, [lisez plutôt cette page](/gdevelop5/publishing/android_and_ios/play-store).

Branchez l'appareil android en USB sur votre ordinateur et mettez l'APK quelque part dans un dossier de votre appareil Anrdoid

(solution alternative : envoyez votre jeu sur [Dropbox](https://www.dropbox.com/), [OneDrive](https://onedrive.live.com/about/en-in/) [mediafire](https://mediafire.com) ou [Google Drive](https://drive.google.com/)pour le télécharger sur votre téléphone depuis l'application ou le site web)

Avant d'installer votre APK, allez dans Paramètres \> Sécurité et autorisez l'installation de *logiciels provenant de sources inconnues*. Cela vous permettera \[d'installer l'APK\](<https://developer.android.com/studio/publish#publishing-unknown>) et des logiciels ne provenant pas de Google Play

Enfin, ouvrez votre *Explorateur de fichiers*, allez dans le dossier qui contient votre APK et cliquez dessus puis démarrez l'installation

![](/fr/gdevelop5/publishing/screenshot_apk_on_android_fr.png) ![](/fr/gdevelop5/publishing/install_apk_on_device.png)

Quand l'application est installée, cliquez sur *Ouvrir l'application*

### Testez votre jeu

Votre jeu est maintenant installé confortablement dans votre téléphone Vous pouvez le lancer comme n'importe quelle autre application !

Bravo vous avez créé un *jeu pour android* avec GDevelop ! Vous pouvez le mettre à jour facilement en l'exportant une autre fois et en recommençant le processus d'installation !

## S'abonner à GDevelop et avoir plus d'exports par jour...

En tant qu'utilisateur connecté à GDevelop, vous pouvez exporter votre jeu 2 fois par jour pour Android

    Si vous voulez avoir plus d'exports par jour, vous pouvez améliorer votre compte pour obtenir plus d'exports par jour ! \<note important\>**10 exports** par jour avec l'abonnement **Indie** et **70 exports** avec l'abonnement **Pro**.

S'abonner permet de supporter l'auteur de GDevelop et de l'encourager à continuer de travailler dessus ! (GDevelop est open source) En retour, vous obtiendrez plein d'autres fonctionnalités, comme plus d'exports pour Mobile/PC , un debugger en ligne etc...

## Publiez votre jeu sur des "Stores" ("Android App Bundles")

Quand vous avez exporté votre jeu pour Android (et que vous l'avez testé), vous pouvez l'exporter en tant que **Android App Bundle** et le publier sur Google Play. Voir [Cette page pour en savoir plus à propos de la publication sur Google Play](/gdevelop5/publishing/android_and_ios/play-store).

Vous pouvez aussi publier votre app sur [l'Amazon App Store](/gdevelop5/publishing/publishing-to-amazon-app-store) en exportant votre jeu comme **APK**
