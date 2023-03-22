---
title: tiled_sprite
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**
*(remove this paragraph once the translation is finished)*

# Les objets Tiled Sprite

!!! note

        **Voir en action !** 🎮
    [Je préférerais examiner des exemples d'objet Tiled Sprite ! S'il vous plaît, faites-les moi voir maintenant.](#Examples)

Un objet **tiled sprite** (que l'on pourrait traduire par_mosaïque de spirites_ ou *mosaïque de tuiles*) permet d'afficher une image sous la forme d'une mosaïque de sprites. Vous pouvez augmenter et diminuer la taille de la mosaïque en redimensionnant l'objet dans la scène.

Un objet mosaïque de sprite peut être utilisé pour créer des plateformes dans un jeu de plateforme. Il peut également être utilisé en tant que groupe d'images identiques. Dans ce cas, il n'est pas nécessaire de manipuler plusieurs objets sprite.

![](/gdevelop5/objects/tiled-sprite-object.png)

## Ajouter un objet tiled sprite

Pour ajouter un objet tiled sprite à une scène, créez un nouvel objet à partir de la liste **Objects**. Sélectionnez l'option **Tiled Sprite** dans le panneau qui s'ouvre.

![add-tiled-sprite-object.png](/gdevelop5/objects/add-tiled-sprite-object.png)

## Ouvrir les propriété de l'objet

Ensuite, à nouveau dans la liste d'objets à droite, ouvrez les propriétés de l'objet en cliquant avec le bouton droit de la souris sur l'objet. Sélectionnez **Edit object** (Modifier l'objet) dans la liste déroulante qui apparaît.

![tiled-sprite-properties.png](/gdevelop5/objects/tiled-sprite-properties.png)

## Ajouter une image

Pour ajouter une image à l'objet, cliquez sur le champ **Select an image** (Sélectionner une image). Votre navigateur de fichiers s'ouvre alors sur votre ordinateur. Sélectionnez l'image de votre choix.

![add-image-to-tiled-sprite.png](/gdevelop5/objects/add-image-to-tiled-sprite.png)

L'image sélectionnée sera affichée dans la fenêtre d'aperçu à droite.

![tiled-sprite-image-preview.png](/gdevelop5/objects/tiled-sprite-image-preview.png)

## Modifier la taille par défaut

Nous pouvons changer la taille par défaut de l'objet mosaïque de sprites en modifiant les valeurs **Default width** (Largeur par défaut) et **Default height** (Hauteur par défaut).

![](/gdevelop5/objects/tiled-sprite-default-size.png)

La taille par défaut affecte la grandeur de l' image qui sera visible dans l'objet. Par exemple, voici à quoi ressemble mon image avec un objet de taille 32x32.

![](/gdevelop5/objects/tiled-sprite-3232.png)

Comme vous pouvez le constater, l’image ci-dessus n’est pas une mise à l'échelle de l’objet, elle ne montre qu'une partie de l'objet.

Si la taille de l'objet est réglée sur 100x100 (comme indiqué ci-dessous), la taille de l'objet est supérieure à celle de l'image originelle, de sorte que l'objet continue à répéter l'image jusqu'à remplir tout l'espace vide.

![](/gdevelop5/objects/tiled-sprite-100100.png)

## Mettre l'objet à l'échelle

Vous pouvez obtenir des résultats immédiats en mettant l'objet à l'échelle dans l'éditeur de scène pour créer l'aspect / la taille dont vous avez besoin.

![](/gdevelop5/objects/scale-tiled-sprite.png)

L'éditeur de scène (Events) peut également être utilisé pour modifier la taille d'une mosaïque de sprite. L'utilisation de l'éditeur de scène rend le jeu plus fluide et intéressant.

![](/gdevelop5/objects/scaleasprite.png)

## Exemples

!!! note

        **Voir en action !** 🎮
    Ouvrir cet exemple en ligne.

[![](/gdevelop5/behaviors/platformerbehavior.png)](https://editor.gdevelop.io/?project=example://platformer)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://platformer){ .md-button .md-button--primary }
