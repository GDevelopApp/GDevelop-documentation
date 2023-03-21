---
title: Étape numéro 2  - Ajout du décors
---
# Étape numéro 2 : Ajout du décors

### Résumé

  * Ajout des décors, comme des objets de type sprite. Utilisation des numéros d'animation pour chaque partie de l'image du fond du jeu.

## Ajout de l'objet Decor de type Sprite :

  * Nous allons ajouter les décors de la même manière que précédemment avec l'objet du personnage.

Cliquez dans l'onglet Object, Add an object puis Sprite. Renommez l'objet en Decor puis cliquez sur le **+** et encore le **+** au milieu du carré pour ajouter une première image à cet objet, sélectionnez l'image row-1-col-1.jpg dans le répertoire tiled-bg, vous obtenez :

![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-decor-1.png)

Apply

Puis recommencez, cliquez tout en bas à droite sur Add an animation puis **+** et sélectionnez l'image row-1-col-2.jpg. L'objet Decor contient maintenant deux "animations" référencées respectivement **Animation #0** et **#1** .

![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-decor-2.png)

Maintenant revenons à notre scène, il suffit alors de sélectionner l'objet Decor et de le poser sur la scène comme ceci :

![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-decor-3.png)

Le panneau Properties est ouvert, on y retrouve le nom de l'objet, la position relative au point en haut à gauche de notre scène, dans l'image au-dessus X=14 et Y=7. Cela signifie que le pixel en haut et à gauche de ce bout de décor est un peu décalé.
En sélectionnant l'instance 0 de l'objet Decor je peux la faire bouger avec les flèches du clavier pour que les coordonnées deviennent X=0 et Y=0 comme ceci :

![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-decor-4.png)

Pour la deuxième partie du décor, il y a plusieurs manières de faire :

  * Soit en refaisant un glisser-déposer de l'objet Decor vers la scène.
  * Soit en appuyant sur la touche ctrl  et en cliquant sur la première instance Decor et en faisant un glisser déposer, pour faire une copie du même objet automatiquement.

Une erreur ? Aucune importance, ctrl+Z permet bien sûr de revenir en arrière, et pour effacer une instance d'un objet, il suffit de le sélectionner et de le supprimer.

Et n'oubliez pas :

> 
> Sauvegardez avec Ctrl + s
warning


Maintenant nous avons donc deux fois la même image, pour avoir la deuxième "animation" de l'objet Decor, il faut regarder dans les propriétés de l'instance, et descendre tout en bas, pour écrire animation : 1.

Vous devez maintenant avoir :

![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-decor-5.png)
Apply

Et de même déplacez cette deuxième instance de l'objet Decor avec les flèches. Vous devriez avoir dans les coordonnées de cette instance dans les propriétés, X=0 et Y=256.

Renouvelez l'opération avec les images jusqu'à row-1-col-8.jpg. Pour cela aidez-vous de l'outil de zoom (molette de la souris), et également des poignées bleues ![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-molette-bleue.png) pour déplacer l'affichage dans votre scène.

Vous devez obtenir :

![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-images-fond-ligne-1.png)
## Finalisation du décor de la première scène.

Continuez la même opération que pour la première ligne, avec l'image row-2-col-1.jpg jusqu'à row-2-col-8.jpg et ainsi de suite jusqu'à l'image row-2-col-1.jpg. Bravo ! L'étape la plus fastidieuse de ce tutoriel est réalisée.
Pensez à sauvegarder.

Il est possible de gagner du temps, en sélectionnant l'ensemble de la première ligne des images de fond à l'aide de la souris (les images deviennent grisées), et en appuyant sur Ctrl puis clic sur cette zone grisée, vous copiez d'un coup les 8 images.

Il suffit alors de changer la valeur de l'animation, de 8 à 15. Vous obtenez :

![](/fr/gdevelop5/tutorials/isometric-rpg/tuto-rpg-decor-deux-lignes.png)

Pour résumé, l'objet Decor, est composée de 64 "animations", placée en carré de 256x256 pixels.
L'image globale composant le décor est donc de 2048*2048 pixels. Il est à noté que normalement chaque animation de cet objet se retrouve dans la couche (layer) Base Layer.