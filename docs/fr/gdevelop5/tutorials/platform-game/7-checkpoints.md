---
title: Ajouter des points de contrôle à votre jeu
---
# Ajouter des points de contrôle à votre jeu

Nous avons terminé notre tutoriel précédent en supprimant le joueur quand il entre en collision avec l'ennemi. Mais cela ne fonctionne pas de cette manière dans la plupart des jeux. Au lieu de supprimer le joueur, il y a normalement un « point de contrôle » (checkpoint) où l'état du jeu et celui du joueur sont sauvegardés et au cas où le joueur mourrait, le jeu redémarrerait à partir du point de contrôle.

Enregistrer la totalité de l'état du jeu et la situation du joueur est peut-être un peu trop avancé pour le moment. Donc, ce que nous allons faire en cas de rencontre avec un objet « point de contrôle », consiste à stocker la position de l’objet dans des variables et au lieu de supprimer le joueur, nous enregistrons sa position dans les variables. Passons à la réalisation… .

####  Créer un objet point de contrôle 

Commencez par créer un nouvel objet **sprite** dans le jeu et appelez-le `checkpoint`. Son image peut être n'importe quoi. Ici, nous allons utiliser un  cactus pour représenter le ou les points de contrôle.

![](/gdevelop5/tutorials/platform-game/checkpoint-object.png)

Ajoutez maintenant l'objet à votre scène, là où nous aimeriez avoir un point de contrôle. Vous pouvez ajouter l'objet à plusieurs endroits dans la scène.

####  Ajouter des événements 

Maintenant que nos objets point de contrôle sont placés dans la scène, ajoutons les événements qui y sont liés. Commençons avec une condition pour vérifier la collision entre le joueur `player` et le point de contrôle `checkpoint` et, si la collision se produit, stockons la position X et Y du point de contrôle dans deux variables de scène appelées `checkpointX` et `checkpointY`.

![](/gdevelop5/tutorials/platform-game/checkpoint_event.png)

Tout comme lorsque nous mettons à jour le texte du score, nous utilisons des expressions pour obtenir la position X et Y de l’objet `checkpoint`. Vous trouverez plus d'expressions dans l'éditeur d'expression en cliquant sur l'icône bleue à côté des champs de valeur :

![](/gdevelop5/tutorials/platform-game/expression-icon.png)

Lorsque vous cliquez sur cette icône, vous pouvez rechercher toutes les expressions disponibles triées par catégories.

![](/gdevelop5/tutorials/platform-game/expression-editor.png)

Nous avons maintenant stocké les positions X et Y de l’objet `checkpoint` avec lequel nous sommes entrés en collision. La seule chose qui reste à faire est de donner au joueur la position X et Y du point de contrôle au lieu de supprimer l’objet `player` en utilisant le coordonnées stockées dans les variables que nous venons de définir.

![](/gdevelop5/tutorials/platform-game/checkpoint-event2.png)

Nous utilisons ici un autre ensemble d'expressions pour obtenir la valeur des variables.

####  Résolution de bogues 

Au cas où vous avez suivi scrupuleusement et que vous avez également choisi le cactus comme point de contrôle, vous remarquerez peut-être que nous venons de créer un bogue. Puisque le personnage du joueur est plus grand que le cactus, nous définissons la position du joueur trop bas et le joueur reste coincé dans le sol lorsque nous définissons sa coordonnée Y :

![](/gdevelop5/tutorials/platform-game/checkpoint_bug.png)

Dans ce cas particulier, nous pouvons facilement résoudre le problème en redimensionnant le cactus sur l’axe des Y pour qu’il soit aussi haut ou même plus haut que le joueur. Mais nous pouvons aussi utiliser les mathématiques pour contourner ce problème. Puisque tout le monde sait comment redimensionner un sprite « manuellement », voyons comment le faire avec les maths.

![](/gdevelop5/tutorials/platform-game/checkpoint-bug-fix.png)

La solution présente ici paraît un peu trop compliquée, mais elle n'est là que pour vous montrer à quel point les expressions peuvent être puissantes.  Donc, ma solution est la suivante : lorsque je définis la position Y du joueur en utilisant la variable `checkpointY`, je soustrais la hauteur du point de contrôle `checkpoint.Height()` du cactus de la hauteur du joueur `Player.Height()`, et la différence obtenue de cette manière est soustraite  à la variable `checkpointY`. La différence de hauteur obtenue est donc calculée automatiquement, quelles que soient les hauteurs des objets en question .

Bien entendu, pour rester simple, nous pourrions également soustraire 30 à la valeur de `checkpointY`.

![](/gdevelop5/tutorials/platform-game/checkpoint-bug-fix-simple.png)

Donc, avec la méthode des essais et erreurs, vous pouvez trouver la valeur qui vous convient le mieux ou vous pouvez essayer la manière plus compliquée de déterminer la valeur exacte.

Peut-être que vous vous demandez maintenant pourquoi je soustrais cette différence de hauteur à Y au lieu de l'ajouter à Y. Le problème est que, la hauteur du point de contrôle étant plus petite, je dois placer le joueur plus haut. La raison est que le valeur de la coordonnée sur l'axe Y augmente de haut en bas. Elle commence à 0 en haut et augmente de plus en plus vers le bas de l'écran, donc techniquement j'ai besoin d'une valeur inférieure pour déplacer quelque chose vers le haut :

![](/gdevelop5/tutorials/platform-game/2d-coordinates.png)

Les coordonnées de la scène de jeu de la plupart des moteurs 2D sont définies de la manière suivante : 

L'origine est placée dans le coin supérieur droit de la scène, de cordonnées (0,0). La valeur de l'abscisse (coordonnée horizontale X le long de l'axe du même nom) augment de gauche à droite et celle de l'ordonnée (coordonnée verticale Y le long de l'axe du même nom) augmente de haut en bas, comme vous pouvez le voir sur l'image ci-dessus.

Maintenant, si nous lançons un aperçu et que notre joueur meurt, sa position est définie sur les dernières valeurs de point de contrôle enregistrées. Mais il y a un autre bug.

Si le joueur meurt avant d'entrer en collision avec un point de contrôle, les variables renverront 0 et le joueur va se retrouver à la position 0,0 qui est le coin supérieur gauche.

Nous pouvons facilement résoudre ce problème en définissant des valeurs par défaut pour les points de contrôle, valeurs correspondant à la position de départ du joueur au début de la scène.

![](/gdevelop5/tutorials/platform-game/checkpoint-bug2-fix.png)

Donc, lorsque la scène commence, le  joueur doit normalement être déjà en position de départ ce qui fait que nous obtenons simplement la position du joueur, position que nous stockons comme position du point de contrôle. Si le joueur meurt avant d'entrer en collision avec l'un des points de contrôle, nous le positionnons au début de la scène.
####  Améliorer le système 

En utilisant ce que vous avez appris jusqu'ici, vous pouvez aller de l'avant et ajouter un texte pour afficher un message lorsque le joueur a atteint un point de contrôle et peut-être jouer une animation, faire sauter le cactus ou quelque chose de plus intéressant.


