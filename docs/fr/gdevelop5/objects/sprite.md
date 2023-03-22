---
title: sprite
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**
*(remove this paragraph once the translation is finished)*

# Les objets sprite

!!! note

        **Voir en action !** 🎮
    [Je préférerais examiner des exemples d'objet Sprite ! S'il vous plaît, faites-les moi voir maintenant.](#Examples)

Les objets Sprite sont les objets les plus souvent utilisés dans GDevelop.

Un objet sprite permet d'afficher une image ou d'afficher une série d'images sous forme d'animation. Il peut être utilisé pour représenter beaucoup de choses dans les jeux, comme des boutons, des personnages ou des plateformes. Tout ce qui peut être représenté par une image peut être un objet sprite.

## Créer un objet sprite

Pour ajouter un sprite à votre scène, sélectionnez l'option **Click to add an object** (Cliquez pour ajouter un objet) située à droite au bas de la liste des objets.

![](/gdevelop5/objects/clicktoaddanobject.png)

S'ouvre alors un nouveau panneau qui montre les différents types d'objets disponibles dans GDevelop.

![](/gdevelop5/tutorials/platform-game/gd5_object_types1.png)

Sélectionnez **Sprite** dans la liste pour créer un nouvel objet sprite dans votre scène de jeu.

![](/gdevelop5/objects/select-sprite.png)

Cette sélection ouvre la fenêtre des propriétés de l'objet. Cette fenêtre vous montre propriétés de l'objet sprite.

![](/gdevelop5/objects/sprite-object-properties.png)

## Ajouter une animation

Une animation permet d'ajouter une image ou une série d'images à l'objet sprite. Pour ajouter une animation, cliquez sur le bouton **Click to add animation** (Cliquez pour ajouter une animation).

![](/gdevelop5/objects/add-animation-button.png)

Cette action agrandit la boîte de dialogue qui vous montre alors une grande variété d’options que vous pouvez modifier.

![](/gdevelop5/objects/animation-properties.png)

### Ajouter une image à l'animation

Nous pouvons ajouter des images à l'animation de notre objet en cliquant sur le symbole plus (**+**).

![](/gdevelop5/objects/add-symbol.png)

Ce clic ouvria l'explorateur de fichiers afin que vous puissiez parcourir les fichiers et choisir une image appropriée pour votre animation. Après avoir choisi l'image, celle-ci s'affiche dans la fenêtre.

![](/gdevelop5/objects/add-image.png)

### Collisions et points

Vous pouvez personnaliser la zone de collision du sprite à l'aide de la liste **EDIT HITBOXES** (Editer les boîtes de collision) située au bas de la boîte de dialogue. Cette liste vous permet de définir la zone à prendre en compte lors d'une collision. Vous pouvez en savoir plus sur [les masques de collision ici](/gdevelop5/ objects/ sprite/ collision-mask)

À côté de l'option **EDIT HITBOXES**, vous trouverez l'option **EDIT POINTS** (Editer les points) au bas de la boîte de dialogue des propriétés du sprite. Cette option permet d’avoir des points de référence supplémentaires pour un objet. Ces points de référence peuvent être utilisés dans des événements en cas de besoin. [En savoir plus sur les points dans les sprite ici.](/gdevelop5/objects/sprite/edit-points)

### Ajouter plusieurs animations

Un objet peut parfois nécessiter plusieurs animations. Pour ajouter des animations, cliquez sur le bouton **Click to add an animation** (Cliquez pour ajouter une animation) de la même manière que nous l'avions fait la première fois. Cette fonctionnalité permet de séparer facilement les différentes animations.

![](/gdevelop5/objects/multiple_animations.png)

Plus tard, nous pourrons basculer entre les différentes animations en utilisant des événements.

### Nommer une animation

En haut de la section animation de la fenêtre, vous avez un champ à côté de **Animation \#** avec un "nom d'animation facultatif" grisé. Pour entrer un nom pour votre animation, cliquez dans le champ et entrez le nom désiré.

![](/gdevelop5/objects/name-animation.png)

!!! note

        Dans les objets comportant plusieurs animations, il peut être difficile de différencier les animations sans noms. Il est généralement recommandé d'utiliser des noms d'animation significatifs pour les objets comportant plusieurs animations.

    Si nous n'entrons pas de nom, nous devons utiliser le numéro d'animation pour faire référence à cette animation.

### Ajouter plusieurs images dans une animation

Pour ajouter plusieurs images à une animation, vous pouvez sélectionner toutes les images dans l'explorateur de fichier et les ajouter d'un coup à l'animation.

![](/gdevelop5/objects/animation-multiple-images.png)

Les images seront lues dans le même ordre que celui affiché.

### Répéter l'animation

Par défaut, chaque animation n'est jouée qu'une fois, ce qui signifie que l'animation s'arrête dès la fin de la dernière image. Pour répéter l'animation, nous pouvons faire *boucler* l'animation. Nous pouvons mettre l'animation en mode boucle en cliquant sur l'icône **Loop** (Boucle).

![](/gdevelop5/objects/set-animation-loop.png)

Une fois qu'une animation est configurée pour être en boucle, elle est lue en continu.

### Régler la vitesse de l'animation

La vitesse de l'animation peut être définie en modifiant la valeur à l'aide de l'icône d'horloge.

![](/gdevelop5/objects/set-animation-speed.png)

La valeur entrée dans le champ est le temps écoulé entre deux images consécutives. La valeur par défaut est 0,08 seconde. Pour une lecture plus rapide, utilisez une durée d'animation réduite, et pour une lecture plus lente, une durée d'animation plus élevée.

## Donner un nom aux objets

En haut de la boîte de dialogue est affiché le nom de l'objet dans le champ **Object name** (Nom de l'objet). Le nom de l'objet décrit généralement le contenu ou le rôle de cet objet, ce qui permet de le distinguer facilement des autres.

![](/gdevelop5/objects/annotation_2019-06-09_152442.png)

## Ajouter des objets à la scène

Pour ajouter un objet sprite à la scène, sélectionnez-le dans la liste et cliquez dans la scène pour ajouter une occurrence de cet objet à la scène.

Votre nouveau sprite est maintenant terminé, mais vous devez toujours l'ajouter à votre scène de jeu. Cliquez sur la nouvelle image-objet dans la liste des objets. Ensuite, cliquez sur la scène à laquelle vous souhaitez ajouter le sprite. Vous verrez maintenant votre sprite ajouté à la scène. Vous pouvez ajouter plusieurs *instances* de votre sprite à votre écran de jeu. Répétez simplement le processus pour ajouter le premier sprite.

![](/gdevelop5/objects/addspritetoscene.gif)

## Utiliser plusieurs animations à l'aide d'événements

Après avoir créé plusieurs animations, chacune avec son propre ensemble d'images, vous pouvez utiliser des événements pour basculer entre les diverses animations. Régler la vitesse d'animation entre 0 et 1 garantira qu'elle reste active lors de l'utilisation d'événements.

!!! note

        L'utilisation d'une durée d'animation négative désactive les actions d'événement.

    _Ne pas utiliser de valeurs négatives._

Lorsque vous avez défini plusieurs animations pour un objet, vous pouvez utiliser l'onglet événements pour **Change the animation (by name)** (Modifier l'animation (par le nom)). Ceci est contrôlé dans la section **Add action** (Ajouter une action) de la condition. Cela permet de passer à l'animation correcte chaque fois que la condition utilisée dans la section**Add condition**(Ajouter une condition) est vraie.

![](/gdevelop5/objects/eventanimationexample.png)

Comme conseillé précédemment, utilisez des noms d'animation significatifs pour plusieurs animations dans un objet afin de les différencier facilement.

Pour ajouter une action permettant de modifier l'animation à l'aide du nom de l'animation, choisissez la condition **Change the animation (by name)** (Modifier l'animation (par le nom)).

Placez ensuite ce nom dans le champ **Animation name** (Nom de l'animation) entouré de guillemets.

![](/gdevelop5/objects/eventanimnameexample.png)

Pour plus de détails, suivez [les tutoriaux ici](http://wiki.compilgames.net/doku.php/gdevelop5/tutorials).

## Exemples

!!! note

        **Voir en action !** 🎮
    Cliquez sur les images pour ouvrir les exemples en ligne.

[![](/gdevelop5/objects/createaspritenew.png)](https://editor.gdevelop.io/?project=example://change-scale-of-sprites)

------------------------------------------------------------------------

[![](/gdevelop5/objects/changespriteanimationexamplenew.png)](https://editor.gdevelop.io/?project=example://change-sprite-animation)

------------------------------------------------------------------------

[![](/gdevelop5/objects/changespritecolorexamplenew.png)](https://editor.gdevelop.io/?project=example://change-sprite-color)

------------------------------------------------------------------------

[![](/gdevelop5/objects/changespriteanimationexample2new.png)](https://editor.gdevelop.io/?project=example://play-stop-sprite-animation)
