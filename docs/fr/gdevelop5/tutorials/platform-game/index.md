---
title: Comment faire un jeu de plate-forme
---
# Comment faire un jeu de plate-forme

Ce tutoriel vous aidera à commencer à utiliser **GDevelop**:
Vous allez créer un jeu de plateforme très simple où le joueur peut sauter sur les plates-formes et collecter des pièces de monnaie.

Notez que vous pouvez lire la page [Commencer](/fr/gdevelop5/getting_started) pour avoir une vue d'ensemble du logiciel : elle explique les principaux concepts et décrit l'interface de GDevelop.


## Télécharger GDevelop

Si vous n'avez pas **GDevelop 5**, téléchargez-le à partir du [site officiel](https://gdevelop-app.com). Il est disponible pour Windows, MacOS et Linux.

Téléchargez toujours GDevelop à partir de cette page pour être sûr d'avoir la dernière version.  
Installez ou extrayez GDevelop et lancez-le.

![](/fr/gdevelop5/tutorials/platform-game/capture_du_2020-06-06_10-32-46.png)

## Créer un nouveau jeu

Cliquez sur **CREER UN NOUVEAU PROJET** sur la page d'accueil. Dans la fenêtre **Créer un nouveau jeu**,  choisissez un dossier pour votre projet (dans le champ **CHOISIR UN DOSSIER** situé en haut de la fenêtre)  et sélectionnez **Jeu vide** (dernière option) pour démarrer un nouveau jeu à partir de zéro.

Par défaut, GDevelop crée un dossier appelé **My project**. Vous pouvez créer un dossier vide avec le nom qui vous convient et le sélectionner (dossier **exemple-jeu-plateforme** dans notre exemple).

Pour faire notre jeu, nous aurons besoin de ressources pour représenter les objets (image(s) du personnage, quelques plateformes, objets à récolter ...).

![](/fr/gdevelop5/tutorials/platform-game/nouveau-projet.png)

 Vous pouvez télécharger les ressources ici :  http://www.compilgames.net/dl/PlatformerTutorialResources.zip.

Une fois ce fichier téléchargé, extrayez son contenu dans le dossier où vous avez créé le projet.

## Ajouter une scène

Les **_scènes_** sont les différentes parties du jeu. Typiquement, chaque écran apparaissant dans le jeu est une scène : le menu principal, le menu pause et les niveaux sont des scènes.

Les **_scènes_** contiennent les objets qui sont affichés à l'écran. Les **_objets_** peuvent être mis en scène pour créer les niveaux (ces objets sont appelés **_instances_**). Les scènes contiennent également les **_événements_** qui sont exécutés pour animer la scène.

Dans le gestionnaire de projet qui s'ouvre à gauche, cliquez sur le bouton **+** à droite de **Cliquez pour ajouter une scène**.

![](/fr/gdevelop5/tutorials/platform-game/capture_du_2020-06-06_10-42-29.png)

Une nouvelle scène, appelée **New Scene** est ajoutée à la liste. Cliquez dessus pour l'ouvrir.

![](/fr/gdevelop5/tutorials/platform-game/capture_du_2020-06-06_10-45-50.png)

Pour renommer la scène comme vous le souhaitez, vous pouvez revenir au **gestionnaire de projet** en cliquant sur 
![](/fr/gdevelop5/tutorials/platform-game/gestionnaire-projet.png)
 en haut à gauche. Faire clic-droit sur  **New Scene** puis **rename** pour lui choisir un nouveau nom (dans notre exemple : **scene1**).

## Créer l'objet  joueur

Le joueur contrôlera un personnage qui peut sauter et se déplacer sur des plateformes. Nous allons créer cet objet.

Sur la droite, vous pouvez voir un panneau intitulé **Objects**. Cliquez sur le bouton **+** pour ajouter un objet.

![](/fr/gdevelop5/tutorials/platform-game/capture_du_2020-06-06_10-49-11.png)

Ensuite, une fenêtre s'ouvre et affiche différents types d'objets parmi lesquels vous pouvez choisir.

![](/fr/gdevelop5/tutorials/platform-game/capture_du_2020-06-06_10-49-34.png)

Les différents types d'objets présentent des caractéristiques spécifiques. Pour la plupart de nos objets, nous utiliserons les objets **Sprite** qui sont des objets animés ou fixes pouvant être utilisés pour de nombreux éléments (joueur, plates-formes, ennemis, objets...).

Cliquez sur **Sprite** dans la liste. Le nouvel objet est ajouté à la scène et les propriété de l'objet s'ouvrent. Vous pouvez renommer l'objet (ici on l'a appelé `perso_principal`) :

![](/fr/gdevelop5/tutorials/platform-game/capture_du_2020-06-06_10-51-19.png)

L'objet est actuellement vide. Les objets **Sprite** sont composés d'animations, et chaque animation peut contenir une ou plusieurs images. Ajoutons une animation. Cliquez sur le bouton **+**.

![](/fr/gdevelop5/tutorials/platform-game/capture_du_2020-06-06_10-51-32.png)

L'animation est ajoutée mais toujours vide, sans images. Pour ajouter une image, cliquez sur le **+** dans la vignette vierge.

Choisissez l'image appelée `p1_stand.png` dans le dossier du projet. L'image est ajoutée à l'objet :

![](/fr/gdevelop5/tutorials/platform-game/capture_du_2020-06-06_10-52-46.png)

Vous pouvez maintenant fermer les propriétés en cliquant sur le bouton **APPLIQUER** dans le coin inférieur droit.

##Mettre l'objet dans la scène

Pour ajouter le joueur dans notre niveau, nous devons récupérer l'objet et le placer dans la scène. 
Chaque objet ajouté à la scène est une **_instance_** de l'objet.

Nous n'avons besoin que d'une seule instance du joueur car nous n'aurons qu'un seul joueur dans ce niveau. Les autres objets (comme les plateformes, pièces, ennemis, ...) pourront avoir plusieurs instances dans la scène.

Pour ajouter l'objet, il faut cliquer dans la liste à gauche : 

![](/fr/gdevelop5/tutorials/platform-game/objets-volet.png) 

puis sans relacher la souris, le faire glisser vers la scène et relacher pour le déposer : 

![](/fr/gdevelop5/tutorials/platform-game/instance-sprite-depose.png)

Pour zoomer et dézoomer dans la scène, utilisez la molette de la souris. Pour déplacer la scène, utiliser le clic du milieu (laisser appuyer et faire glisser).

## Donner un nom significatif à l'objet

Si vous avez oublié de nommer votre personnage, vous pouvez le faire en revenant dans le menu ou en faisant un clic droit sur l'objet (ou cliquez sur l'icône présentant trois points alignés verticalement). Choisissez alors  l'option **Rename** dans le menu contextuel. Vous pouvez alors saisir `perso_principal` et cliquer n'importe où sur l'écran pour renommer l'objet.

![](/fr/gdevelop5/tutorials/platform-game/changer-nom-objet.png)

## Ajouter des plateformes

Pour le moment, le niveau est encore vide, sans plateformes. Ajoutons-en quelques unes.

Créez un nouvel objet en cliquant le bouton **+** dans la liste d'objets. Cette fois, choisissez **Mosaïque** (Tile en anglais) dans la fenêtre de sélection.

![](/fr/gdevelop5/tutorials/platform-game/ajout-mosaique.png)

L’éditeur d'objet s'ouvre. Il est un peu différent de l’éditeur de **Sprite** car les **Mosaïque** ne sont pas animés.

Cliquez sur **Sélectionner une image** puis sur **Choose a new image**. Choisissez cette fois l'image appelée `grassHalfMid.png`. Au passage, renommez l'objet _plateforme_herbe1_.

![](/fr/gdevelop5/tutorials/platform-game/charger-image-plateforme1.png)

Fermez l’éditeur en cliquant sur le bouton **APPLIQUER** en bas à droite. Comme pour le personnage, déposez une instance de l'objet sur la scène pour le placer dans le niveau :

![](/fr/gdevelop5/tutorials/platform-game/depose-plateforme1.png)

L'objet est ajouté à la scène mais il est minuscule. Cliquez-le et utilisez les poignées de taille pour le redimensionner afin qu'il ressemble à une plateforme :

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.00.01.png)

Si vous avez oublié, n'oubliez pas de renommer l'objet `plateforme_herbe1` au lieu du nom par défaut dans la liste des objets.

### Il est temps de sauvegarder!

Ne perdons pas  ce que nous venons de créer : dans le menu **Fichier** de l'application, cliquez **Sauvegarder** (ou pressez (Ctrl+S/Cmd+S) pour sauvegarder les modifications.

## Ajouter des comportements aux objets

### Le joueur (perso_principal)

Les mouvements du joueur pourraient être créés à l'aide des événements de GDevelop, mais ce serait une tâche longue et difficile de recréer un bon moteur de plateforme. Heureusement, GDevelop contient déjà un moteur de plateforme complet. Afin de mettre en oeuvre ce moteur, nous avons  besoin d'utiliser les « comportements de plateforme », qui nous permettent d'accéder au moteur de plateforme et de l'utiliser.

Ouvrez l'éditeur d'objet de `perso_principal` en cliquant-droit sur le joueur dans la liste des objet et en sélectionnant **Edit object** dans le menu (un double clic ouvre également le menu).

![](/fr/gdevelop5/tutorials/platform-game/editer_perso.png)

Dans la fenêtre qui vient de s'ouvrir, sélectionnez le panneau **Comportement** (en haut à droite de **Propriétés**) et cliquez le bouton **+ Ajouter un comportement à l'objet**. Sélectionnez **Objet se déplaçant sur des plateformes** dans la liste des comportements disponibles.   
L'éditeur affiche maintenant les comportements avec toute une série de paramètres que vous pouvez modifier.

![](/fr/gdevelop5/tutorials/platform-game/comportement-plateforme.png)

Vous pouvez changer certaines de ces propriétés, par exemple  la **Vitesse de saut**. Mettez ce paramètre à `800` afin que le saut soit plus important.

### Platformes
Nous devons aussi configurer des objets pour qu'ils fonctionnent comme des plateformes afin que le joueur puisse leur marcher ou leur sauter dessus. Si nous ne le faisons pas, le joueur tombera à travers l'objet, comme si nous n'avions pas dit à notre personnage comment réagir avec ces plateformes. En donnant à un objet les propriétés d'une plateforme, nous indiquons au personnage que cet objet est une plateforme avec laquelle il peut entrer en collision (lors d'un saut) et lui marcher dessus.

Pour configurer l'objet `plateforme_herbe1` en tant que plateforme, ouvrez l'éditeur de l'objet (clic droit sur l'objet dans la liste des objets et sélection de **Edit object** dans le menu), activez le panneau **Comportements** et **+ Ajoutez un comportement à l'objet** puis sélectionnez le comportement **Platforme** :

![](/fr/gdevelop5/tutorials/platform-game/comportement-obj-plateforme.png)

Ce panneau présente aussi quelques options que vous pouvez modifier. Par exemple, l'option **Les rebords peuvent être saisis** permet au personnage de s'accrocher au bord de la plateforme. Si nous activons cette option maintenant, le comportement du personnage paraîtra étrange car nous n'avons pas encore d'animation à afficher lorsque le personnage attrape un bord.

## Lancer une prévisualisation

Arrivés à ce point, vous devriez pouvoir tester votre jeu en pressant le bouton de prévisualisation situé dans la barre d'outils de l'écran.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.13.25.png)

Lorsque vous pressez ce bouton, GDevelop génère une prévisualisation et ouvre ensuite une nouvelle fenêtre.

Vous devriez alors pouvoir vous délacer sur les plateformes et sauter d'une plateforme à l'autre avec les touches par défaut. Sentez-vous libres d'ajouter quelques autres plateformes à la scène, comme vous l'avez fait pour la première. N'oubliez pas d'ajouter aussi les comportements adéquats aux plateformes créées pour que le personnage ne passe pas au travers.

Vous pouvez maintenant faire bouger le personnage avec les touches par défaut, qui sont les touches fléchées pour le déplacer horizontalement et les touches **Maj** ou **Espace** pour le faire sauter. Remarquez que, pour le moment, notre personnage n'est pas animé : nous l'animerons pas le suite.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.14.18.png)

Si le personnage ne se déplace pas, assurez-vous d'avoir activé les comportements adéquats. Assurez-vous aussi d'avoir ajouté le comportement **Platform** aux objets `GrassPlatform`, sinon le joueur les traversera et sortira de l'écran par le bas.

## Changer la couleur de l'arrière-plan 

Un arrière-plan gris est un peu ennuyeux. Nous pourrons y ajouter une image par la suite, mais ne nous compliquons pas les choses pour le moment. Faites un clic-droit dans l'éditeur de la scène et sélectionnez **Scene properties** :

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.16.03.png)

Dans la fenêtre qui s'est ouverte, cliquez sur **Couleurs d'arrière plan de la scène**, choisissez la couleur qui vous convient dans la palette des couleurs et confirmez en cliquant **OK**.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.18.08.png)

## Étape suivante : animer le joueur

Pour le moment, notre jeu est très basique : le joueur n'est pas animé lorsqu'il saute ou qu'il marche. L'étape suivante de ce tutoriel vous montrera comment ajouter différentes animations et comment utiliser des événements pour changer les animations lorsque l'état du joueur change. 

➡️ Lisez **[la suite du tutoriel se trouve ici !](/fr/gdevelop5/tutorials/platform-game/2-player-animations)** 