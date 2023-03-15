---
title: start
---
!!! note

    Tutoriel en cours de création (9/11/2018), revenez plus tard ?

# Comment faire un jeu de type RPG isometric

Ce tutoriel vous aidera à commencer à utiliser **GDevelop**: Vous allez créer un jeu de type RPG en vue isometric très simple où le joueur se déplacera dans un décor pour combattre des monstres et ramasser des trésors.

Notez que vous pouvez lire la page [Commencer](/fr/gdevelop5/getting_started) pour avoir une vue d'ensemble du logiciel : elle explique les principaux concepts et décrit l'interface de **GDevelop**.

## Télécharger GDevelop

Si vous n'avez pas **GDevelop 5**, téléchargez-le à partir du site officiel (<http://compilgames.net>\]. Il est disponible pour Windows, MacOS et Linux.

Téléchargez toujours GDevelop à partir de cette page pour être sûr d'avoir la dernière version. Installez ou extrayez GDevelop et lancez-le.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_22.57.02.png)

## Créer un nouveau jeu

Cliquez sur **CREATE A NEW PROJECT** sur la page d'accueil. Dans la fenêtre **Create a new game**, choisissez un dossier pour votre projet (dans le champ **CHOOSE FOLDER** situé au bas de la fenêtre) et sélectionnez **Empty game** pour démarrer un nouveau jeu à partir de zéro.

Pour faire notre jeu, nous aurons besoin de ressources pour représenter les objets ( images du personnage, éléments de décor, objets à récolter ...).

Vous pouvez télécharger les ressources ici :

- Les images du décor pour la première scène : ![](/fr/gdevelop5/tutorials/isometric-rpg/tiled-bg.zip)
- Les sprites pour les personnages : ![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-sprites.zip)
- Images généreusement prêtée par le studio indé japonais ![](/fr/gdevelop5/tutorials/isometric-rpg/smokymonkeys_foot_logo.png)[SmokymonkeyS](http://www.smokymonkeys.com)

Une fois ce fichier téléchargé, extrayez son contenu dans le dossier où vous avez créé le projet.

## Propriétés générales du jeu

Dans votre onglet Project, sélectionnez Game Settings, puis Properties. Remplissez ensuite les champs comme ci-dessous. La taille de la largeur et de la longueur du jeu exprimée en pixels sera la taille de la fenêtre du jeu. ![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-propriete-jeu.png)

## Ajouter une scène

Les ***scènes*** sont les différentes parties du jeu. Typiquement, chaque écran apparaissant dans le jeu est une scène : le menu principal, le menu pause et les niveaux sont des scènes.

Les ***scènes*** contiennent les objets qui sont affichés à l'écran. Les ***objets*** peuvent être mis en scène pour créer les niveaux (ces objets sont appelés ***instances***). Les scènes contiennent également les ***événements*** qui sont exécutés pour animer la scène.

Dans le gestionnaire de projet qui s'ouvre à gauche, cliquez sur le bouton **+** à droite de **Click to add a scene**.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.26.09.png)

Une nouvelle scène, appelée **NEWSCENE** est ajoutée à la liste. Cliquez dessus pour l'ouvrir.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.30.40.png)

Puis éditez les paramètres de la scène (clic droit sur scène), et renommez-là en Scene1, vous pouvez maintenant fermer la fenêtre Project Manager.

## Création des calques (layer)

Les calques permettent de modifier la façon dont les objets sont affichés : Lors de l'affichage, les calques sont visualisés les uns après les autres (c'est à dire en rendu dans le jeu, les uns au-dessus des autres), et chaque calque n'affiche que les objets qui sont positionnés sur ce calque.

Dans cet exemple nous allons utiliser 4 calques qui s'afficheront ainsi :

1.  Le calque **UI** (interface du joueur): Toujours visible et au-dessus de tout le reste.
2.  Le calque **Effets** qui contiendra quelques effets visuels qui s'afficheront juste en-dessous du calque UI mais au-dessus du reste.
3.  Le calque **Personnage** : Il contiendra uniquement les images de l'animation et des mouvements).
4.  Le calque **Base Layer** : Il contiendra l'image de fond du jeu, c'est aussi celui qui est créé par défaut à la création du jeu.

Pour ouvrir l'onglet calque (layer), cliquez sur ![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-icone-calques.png), (Open the layer editor). Puis ajoutez un calque avec le **+**., nommez-le UI puis continuez avec Effet et Personnage. Vous devez maintenant voir cela :

![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-icone-calques-liste.png)

Reste maintenant à les mettre dans le bon ordre, celui en haut étant celui qui contiendra les objets (images et autres) qui resteront toujours visible au-dessus du reste. Nous allons les mettre dans l'ordre :

- UI
- Personnage
- Effet
- Base layer

En utilisant la poignée de déplacement : ![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-icone-calques-poignee.png)

Et ainsi obtenir :

![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-icone-calques-liste-ordonnee.png)

Il est temps de fermer cet onglet de calques pour revenir à notre scène.

## Créer l'objet du personnage

Le joueur contrôlera un personnage qui peut sauter et se déplacer dans le jeu. Nous allons créer cet objet.

Sur la droite, vous pouvez voir un panneau intitulé **Objects**. Cliquez sur le bouton **+** pour ajouter un objet.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.32.40.png)

Ensuite, une fenêtre s'ouvre et affiche différents types d'objets parmi lesquels vous pouvez choisir.

![](/gdevelop5/tutorials/platform-game/gd5_object_types1.png)

Les différents types d'objets présentent des caractéristiques spécifiques. Pour la plupart de nos objets, nous utiliserons les objets **Sprite** qui sont des objets animés ou fixes pouvant être utilisés pour de nombreux éléments (joueur, plates-formes, ennemis, objets...).

Cliquez sur **Sprite** dans la liste. Le nouvel objet est ajouté à la scène et les propriété de l'objet s'ouvrent :

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.34.34.png)

L'objet est actuellement vide. Les objets **Sprite** sont composés d'animations, et chaque animation peut contenir une ou plusieurs images. Ajoutons une animation. Cliquez sur le bouton **+**.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.35.50.png)

L'animation est ajoutée mais toujours vide, sans images. Pour ajouter une image, cliquez sur le **+** dans la vignette vierge.

Choisissez l'image appelée `goblin_frame_0.png` dans le dossier player du projet. L'image est ajoutée à l'objet :

![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-player1.png)

C'est le moment de nommer cet objet, par exemple **LeGobelin** ;-). Vous pouvez maintenant fermer les propriétés en cliquant sur le bouton **APPLY** dans le coin inférieur droit. Cet objet n'est pas encore intégré à la scène, pour cela, sélectionnez l'objet **LeGobelin** et déplacez-le dans la fenêtre de votre scène vous obtiendrez :

![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-icone-scene-legobelin.png)

L'objet LeGobelin devient maintenant une **instance** incorporée dans votre scène. Vous pouvez en voir les propriétés, en sélectionannt l'instance du Gobelin dans votre scène et en cliquant ensuite sur l'icône ![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-icone-propriete.png) propriété : ![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-objet-fenetre-proprietes.png)

## Ajout des animations au personnage

Il est un peu fade ce Gobelin, pour lui ajouter des animations, il faut retourner aux propriétés de l'objet. Pour cela , cliquez sur ![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-icone-objet-trois-points.png), puis sélectionnez Edit Object. Nous allons ajouter avec le **+**, et ajouter goblin_frame_1.png, goblin_frame_2.png et goblin_frame_3.png, soit :

![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-sprite-gobelin-animations.png)

Il est alors possible de voir l'animation en cliquant sur PREVIEW, puis régler la vitesse à 0.2 en cliquant sur le chiffre pour régler la vitesse d'animation avec 0.2. L'option boucle (Loop) est désactivée par défaut, en cliquant sur Don't Loop, cela permet de faire tourner l'animation en continue. Ré-essayez PREVIEW maintenant, notre Gobelin respire !

>  Sauvegarde warning

A cette étape, il est grand temps de faire une sauvegarde du projet ! Menu File Save ou Ctrl S.

Un des points forts de Gdevelop, c'est qu'il permet de visualiser le rendu du jeu à n'importe quelle étape. Simplement en cliquant sur ![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-icone-launch-game-preview.png).

Puis fermer cette fenêtre de prévisualisation.

## Étape suivante : Placer les images du décor

Pour le moment, notre jeu est très basique : Juste un Gobelin qui s'anime ! L'étape suivante de ce tutoriel vous montrera comment ajouter des images pour le décor.

➡️ Lisez **[la suite du tutoriel se trouve ici !](/fr/gdevelop5/tutorials/isometric-rpg/2-decor)**
