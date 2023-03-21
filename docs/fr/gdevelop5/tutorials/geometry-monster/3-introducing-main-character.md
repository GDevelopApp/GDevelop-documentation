---
title: 3-introducing-main-character
---
FIXME **Cette page est entièrement traduite. Veuillez cependant corriger toutes les erreurs et les éventuelles imprécisions.**_(supprimer ce paragraphe une fois les modifications terminées)_

⬅️ **[Étape précédente : 2. Création de la première scène](/fr/gdevelop5/tutorials/geometry-monster/2-creating-first-scene)** ➡️ **[Étape suivante : 4. Commandes pour ordinateurs et téléphones mobiles](/fr/gdevelop5/tutorials/geometry-monster/4-desktop-and-mobile-controls)**

# 3. Création du personnage principal

Maintenant que la scène elle-même est prête, elle est plutôt vide - ajoutons-y quelque chose !

Nous pouvons le faire en cliquant sur le bouton **Add a new object** (Ajouter un nouvel objet) dans le panneau **Objects** à droite.

![](/gdevelop5/tutorials/geometry-monster/17.png)

Il ouvre une fenêtre contextuelle où une liste des options disponibles est affichée. Celles-ci vont des **Sprites** à l'option **Text entry** (Entrées de texte) en passant par l'option **Tiled Sprite**, **Text**, **Particles emitter** (émetteurs de particules), **Panel Sprite** et **Shape painter** (dessinateur de formes). Sélectionnez **Sprite**, vocable utilisé pour désigner les objets animés qui peuvent être utilisés pour la plupart des éléments d'un jeu.

![](/gdevelop5/tutorials/geometry-monster/18.png)

Une autre fenêtre apparaît alors, mais contenant cette fois-ci les options pour personnaliser le nouvel objet. Nous l'appellerons `Monster`. Il sera notre personnage principal dans le jeu, chargé de collecter des objets et tout en étant en même temps *mignon*.

![](/gdevelop5/tutorials/geometry-monster/19.png)

Après lui avoir donné un nom, ajoutons quelques images qui le représenteront sur la scène et dans le jeu. Cliquez sur le bouton **ADD AN ANIMATION** (Ajouter une animation) puis sur le gros bouton **ADD** à gauche pour ouvrir une fenêtre de sélection de fichier.

![](/gdevelop5/tutorials/geometry-monster/20.png)

Accédez au dossier où se trouvent les images (vous pouvez les télécharger à partir de ![ici](/ gdevelop5/ tutorials/ geometry-monster-sources.zip)), sélectionnez tout ce que vous souhaitez ajouter (Ici` **monster-idle1.png**` à `monster-idle11.png`), puis cliquez sur **Ouvrir**.

![](/gdevelop5/tutorials/geometry-monster/21.png)

Si vos images ne se trouvent pas dans le dossier du projet, GDevelop affiche un message disant que ces fichiers sont en dehors du dossier du projet, donc la prochaine étape recommandée est de permettre de les copier dans le dossier du projet avant de faire quoi que ce soit avec eux. Cliquez sur **OK** pour le faire.

![](/gdevelop5/tutorials/geometry-monster/22.png)

Toutes les images que nous venons d'importer serviront pour animer le personnage inactif – celle qui est lue lorsque rien ne se passe. L'animation étant en boucle, il semblera que le monstre ferme et ouvre les yeux de temps en temps, et ce indéfiniment.

Nous nommerons cette animation `MonsterIdle` (Monstre au repos), et chaque nouvelle image sera rendue après chaque dixième de seconde.

!!! note

    N'oubliez pas de sélectionner l'option **Loop** (Boucle) pour que l'animation se répète indéfiniment.

![](/gdevelop5/tutorials/geometry-monster/23.png)

Vous pouvez également modifier des images dans Piskel (**EDIT IN PISKEL**) ou prévisualiser (**PREVIEW**) l'animation si vous le souhaitez.

Lorsque tout est terminé, cliquez sur **APPLY** (Appliquer) pour enregistrer les modifications.

![](/gdevelop5/tutorials/geometry-monster/24.png)

Vous pouvez maintenant voir l'icône de notre petit monstre dans le panneau de droite, sous la liste **Objects**. N'est-il pas mignon ?

Pour rendre la scène un peu plus intéressante, ajoutons-lui une couleur d'arrière-plan. Faites un clic droit sur la scène et sélectionnez **Scene properties** (Propriétés de la scène) dans le menu contextuel.

![](/gdevelop5/tutorials/geometry-monster/25.png)

Cette commande ouvre une fenêtre contextuelle avec quelques options. Nous sommes intéressés à définir une couleur d'arrière-plan de la scène (**Scene background color**) de sorte que le monstre ait l'air élégant.

Cliquez sur le sélecteur de couleurs à droite et choisissez une couleur - la nôtre est `#560921`.

![](/gdevelop5/tutorials/geometry-monster/26.png)

Après confirmation, la couleur d'arrière-plan de la scène changera pour celle qui a été sélectionnée - succès !

![](/gdevelop5/tutorials/geometry-monster/27.png)

⬅️ **[Étape précédente : 2. Création de la première scène](/fr/gdevelop5/tutorials/geometry-monster/2-creating-first-scene)** ➡️ **[Étape suivante : 4. Commandes pour ordinateurs et téléphones mobiles](/fr/gdevelop5/tutorials/geometry-monster/4-desktop-and-mobile-controls)**
