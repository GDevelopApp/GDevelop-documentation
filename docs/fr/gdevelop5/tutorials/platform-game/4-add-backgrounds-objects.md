---
title: Ajouter des objets à l'arrière-plan
---
# Ajouter des objets à l'arrière-plan

!!! note

    Ce tutoriel fait partie du tutoriel [start](/gdevelop5/tutorials/platform-game), mais vous pouvez aussi l'utiliser  pour n'importe quel autre jeu.

Pour le moment, le niveau est assez simple, sans attraits particuliers. Ajoutons quelques objets statiques à l'arrière plan.

## Créer des objets

Ajouter des objets à l'arrière-plan est vraiment facile : il suffit d'ajouter quelques sprites avec les images à votre convenance puis les mettre dans la scène.

Par exemple, créez un objet de type **Sprite** en

  * cliquant le **+** à droite de **Click to add an object** au bas de la listes des objets et en sélectionnant `Sprite` dans la liste qui s'affiche ;
  * cliquant le **+** dans le fenêtre qui s'ouvre puis le bouton **+** dans la nouvelle fenêtre et sélectionnez l'image `bush.png` dans le navigateur de fichiers.
  * Renommez ensuite ce sprite `Bush`.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_22.45.14.png)

Ajoutez de la même manière un sprite de nuage (fichier `cloud2.png`) et renommez-le `Cloud`.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_22.46.01.png)

## Placer des objets sur la scène et modifier leur position z

Ajoutez quelques nuages dans le ciel et deux ou trois buissons sur la plateforme.
Vous pouvez constater que la joueur est affiché derrière les objets ajoutés.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_22.52.10.png)

Chaque instance d'un objet placé sur la scène possède une propriété appelée **z order** . Ce paramètre est un nombre et les objets ayant une valeur **z** plus grande sont affichés au-dessus (ou devant) les objets ayant un z plus petit. La valeur de z peut être n'importe quel nombre entier, même négatif.

Vous pouvez maintenant changer le **z order** des buissons et des nuages en leur donnant des valeurs négatives de manière à ce que le personnage du joueur (dont le z vaut 1 puisque c'est le premier objet placé sur la scène) soit toujours affiché devant les autres objets.

À cet effet, sélectionnez les instances sur la scène (vous pouvez faire une sélection multiple en maintenant la touche Majuscule pressée pendant la sélection)

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_22.59.47.png)

Changez ensuite la valeur du champ **Z Order** dans le panneau des propriétés **Properties** dans la partie droite de la fenêtre. Donnez-lui par exemple la valeur -2 (ou n'importe quel nombre négatif) de manière à ce que ces objets soient bien toujours derrière le joueur.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_23.00.40.png)

**Remarque** : si ce panneau n'est pas ouvert, cliquez la cinquième icône **Open the propreties pannel** dans la barre des outils.

Nous avons maintenant l'aspect visuel que nous voulions.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_23.01.44.png)

Vous pouvez lancer le jeu pour tester si tout fonctionne bien, et n'oubliez pas de sauvegarder.

## Étape suivante : ajouter des pièces de monnaie et afficher combien ont été récoltées

Donnons une tâche à accomplir à notre joueur : récolter autant de pièce de monnaie que possible. À cet effet, nous utiliserons des événements pour stocker le score du joueur,  jouer des sons et effacer les pièces récoltées.

➡️Lisez **[l'étape suivante de ce tutoriel ici !](/fr/gdevelop5/tutorials/platform-game/5-add-coins-and-number-of-collected-coins)**