---
title: Ajouter des pièces de monnaie et afficher le nombre de pièces récoltées
---
# Ajouter des pièces de monnaie et afficher le nombre de pièces récoltées

!!! note

    Ce tutoriel fait partie du tutoriel [start](/gdevelop5/tutorials/platform-game) , mais vous pouvez aussi le réutiliser pour n'importe quel jeu dans lequel vous récoltez des objets.

Dans le jeu de plateforme que nous avons créé jusqu'ici, le joueur n'a pas grand chose à faire : ajoutons des pièces de monnaie que le joueur devra récolter.

## Ajouter des pièces de monnaie

Commencez par créer un nouvel objet **Sprite** et donnez-lui une animation contenant une image `coinGold.png`. 

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-28_at_23.29.30.png)

Nommez ce sprite `Coin`.

Vous pouvez placer plusieurs pièces de monnaie dans ce niveau. Si vous avez besoin de nombreuses pièces, il vaut la peine d'utiliser la technique  **_drag and clone_** offerte par l'éditeur de scène : sélectionnez une pièce déjà placée sur la scène et, tout en maintenant la touche CTRL (ou CMD sur macOS), tirez la pièce avec la touche gauche de la souris. La pièce sera dupliquée à chaque relâché de la touche gauche.

Si vous maintenez aussi la touche MAJ, la pièce dupliquée sera à la même hauteur que la pièce d'origine (cela marche aussi bien horizontalement que verticalement).

![](/gdevelop5/tutorials/platform-game/clone.gif)

## Effacer les pièces récoltées

Il faut faire disparaître les objets pièces de monnaie lorsque le joueur les touche.

Créer un nouvel événement et ajoutez-y une nouvelle condition (**Add condition**). Sélectionnez **Common conditions for all objects** dans la liste de gauche, puis **Collision** et enfin **Collision** pour tester la survenue d'une collision entre deux objets. Sélectionnez `Player` pour le premier paramètre et `Coin` pour le second.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-28_at_23.36.12.png)

Cliquez **OK** pour confirmer.

Il faut maintenant ajouter une action pour supprimer la pièce touchée. Seuls les objets `Coin` qui ont rempli la première condition seront utilisés par cette action, ce qui fait que seule la pièce touchée par le joueur sera effacée. 

Activez les actions **Add action** et sélectionnez dans la liste de gauche **Common action for all objects**, **Objects** et **Delete an object**. Sélectionnez `Coin` dans le premier paramètre pour spécifier l'objet à détruire.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-28_at_23.41.46.png)

L'événement doit ressembler à :

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-28_at_23.42.34.png)

Vous pouvez maintenant faire un test et voir si les pièces disparaissent lorsque le joueur les touche.

## Jouer un son lors de la collecte d'une pièce

Pour que le jeu soit plus dynamique et gratifiant, faisons jouer un son lorsqu'une pièce est récoltée. C'est facile : nous avons déjà un fichier son appelé `sound.wav` dans le dossier des ressources de notre jeu (si ce n'est pas le cas, vous pouvez télécharger les ressources à l'adresse [http://www.compilgames.net/dl/PlatformerTutorialResources.zip](http://www.compilgames.net/dl/PlatformerTutorialResources.zip) et les extraire dans le dossier adéquat).


Pour jour un son, il faut ajouter une autre action à l'événement que nous avons utilisé pour effacer les pièces.

Cliquez **Add action** juste en dessous de l'action **Delete object Coin** et activez l'action **Play a sound** dans la catégorie **Audio**, ce qui fera jouer un son en même temps q'une pièce est effacée.

L'action **Play a sound** présente plusieurs paramètres. Entrez le nom du fichier son `coin.wav` dans le premier paramètre. Laissez les autres paramètres tels qu'ils sont (par exemple, ne répétez pas le son, laissez le volume à 100 par défaut et le **Pitch** à 1 par défaut. )

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.50.22.png)

C'est tout ! Lancez une test et le son sera joué chaque fois qu'une pièce est récoltée. 👍

## Augmenter un score en utilisant des variables

Nous allons utiliser une variable pour mettre à jour et mémoriser le score du joueur.

Les variables sont des conteneurs que nous pouvons utiliser pour stocker et mémoriser certaines informations telles que des nombres et des chaînes de caractères.

GDevelop utilise différents types de variables.

* __**Les variables d'objet**__  sont privées à chaque instance d'un objet, ce qui a pour conséquence que chaque instance peut stocker ses propres valeurs qui ne sont pas partagées avec les autres instances. Cette « privatisation » est par exemple utile lorsqu'on veut gérer séparément la vie de chaque ennemi.

* __**Les variables de scène**__  (les plus fréquemment utilisées) sont privées (réservées) à chaque scène : leurs valeurs ne sont pas partagées avec les autres scènes de notre jeu. Elles sont utiles pour stocker des informations pertinentes pour la scène actuellement en cours, comme par exemple la vie du joueur ou un score.

* __**Les variables globales**__  sont, comme leur nom l'indique, globales (c'est à dire visibles et atteignables) dans l'ensemble du jeu. Leurs valeurs sont partagées entre toutes les scènes et les objets de l'ensemble du jeu. Elles sont utiles pour stocker des informations que nous voulons partager entre plusieurs ou toutes les scènes du jeu, par exemple la quantité de balles ou la somme d'argent accumulée par le joueur.

La variable que nous allons utiliser est une variable **Scene** que nous appellerons `Score`. 

Ajoutons une action dans le dernier événement que nous avons créé. Sélectionnez l'action **Variables > Value of a variable**. Cette action sera utilisée pour ajouter 100 à la variable `Score`.

Renseignez les paramètres comme montré ci-dessous.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.52.43.png)

Dans GDevelop, il n'est pas nécessaire de déclarer les variables avant de les utiliser : nous pouvons utiliser n'importe quelle variable sans la déclarer, il suffit de lui donner un nom dans une action ou une condition. Dans le cas où nous utilisons une action sur une variable qui n'est pas déclarée, GDevelop la crée automatiquement pour nous en lui affectant la valeur par défaut `0` ou une chaîne vide `""` puis exécute ensuite l'action sur la variable pour nous éviter tout problème.

Toutefois, pour mieux organiser notre jeu, il vaut toujours mieux déclarer les variables avant de les utiliser. Cette bonne pratique permet de se souvenir plus facilement des variables utilisées et nous permet aussi de changer leur valeur par défaut si nous voulons qu'elle soit différente de 0 ou d'une chaine vide.

Pour déclarer une variable, cliquez sur le bouton **…** à droite du nom de la variable pour afficher la liste des variables déclarées.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.54.46.png)

La liste qui s'affiche est vide car aucune variable n'a encore été déclarée.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.55.27.png)

Vous pouvez cliquez sur le bouton **+** pour ajouter une variable et entrer `Score` pour son nom. 

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.56.23.png)

Rappelez-vous que ceci est facultatif, ce n'est qu'une bonne pratique fortement recommandée ! 

## Afficher un score à l'aide d'un objet texte

### Ajouter un objet texte

Pour le moment, la variable `Score` ne peut pas être vue, ce qui fait que nous ne pouvons pas vérifier si le score a augmenté.

Nous avons besoin d'un objet **Text** pour afficher la valeur de la variable `Score`. Ajoutez un nouvel objet dans la liste des objets (en cliquant sur le signe **+** au bas de la liste) et sélectionnez le type **Text** quand GDevelop  vous demande quel type d'objet créer.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.58.27.png)

Dans la fenêtre qui vient de s'ouvrir, modifiez les propriétés de l'objet `Score` afin que le texte soit affiché en noir et plus grand que la taille de la police par défaut.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.09.28.png)

Vous pouvez ensuite placer l'objet sur la scène.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.20.23.png)
### Modifier du calque du texte

Si vous lancez le jeu, vous pouvez constater que le texte `Score:` est affiché avec le reste des objets et que sa position n'est pas fixe sur l'écran.

Nous pouvons résoudre facilement ce problème en créant un nouveau calque au-dessus du calque de base. Pour ce faire, ouvrez l'éditeur de calques en cliquant ce bouton :

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.34.33.png)

La liste des calques est alors affichée, mais elle ne contient pour le moment que le calque de base.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.35.00.png)

Cliquez sur le bouton **+** pour ajouter un calque. Entrez `UI` pour son nom (UI pour User Interface ou Interface Utilisateur) :

Pour finir, déplacez l'objet texte `Score` sur ce nouveau calque en sélectionnant l'objet texte sur la scène
(ce qui ouvre son panneau des propriétés sur la gauche de l'écran.

Cliquez sur **Base layer** et sélectionnez `UI` dans la liste :

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.40.44.png)

Assurez-vous que l'objet texte soit affiché de manière visible quelque part sur l'écran, par exemple en le déplaçant dans le coin supérieur gauche de la scène.

Le rectangle noir de l'éditeur de scène représente la taille de la scène (ce que l'on voit quand le jeu est lancé).

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.42.46.png)

### Afficher la valeur du score

Maintenant que nous avons un objet texte sur l'écran, il est temps de lui faire afficher la valeur de la variable `Score`.

Ajoutez un nouvel événement (Ouvrez le panneau **NEWSCENE (EVENTS)** et cliquez le bouton **Add a new empty event** dans le haut de la fenêtre.)

Cet événement n'aura aucune condition, ce qui signifie que l'action sera exécutée à chaque image, soit environ 60 fois par seconde.

Ajoutez une action **Add action** et sélectionnez l'action **Modify the text** dans la catégorie appelée **Text object**.

Pour le premier paramètre, sélectionnez l'objet `Score` car c'est cet objet que nous voulons mettre à jour.

Pour le deuxième paramètre, sélectionnez l'opérateur `= (set to)` dans la liste `Modification's sign` (nous voulons donner une autre valeur au texte).

Finalement, le dernier paramètre représente le nouveau contenu du texte. Ce contenu est une expression de type chaîne de caractères qui sera évaluée par GDevelop pendant le jeu lorsque l'action sera exécutée. 

Nous pouvons spécifier un texte en le plaçant entre guillemets (comme ceci `"Hello World"`). Mais nous pouvons aussi utiliser quelque chose appelée **_expression_**, qui est une fonction qui retourne une certaine valeur que nous pouvons utiliser d'une manière ou d'une autre.

Dans notre cas, nous avons besoin de la valeur de la variable `Score` que nous voulons utiliser pour mettre à jour l'objet texte.

Les expressions étant un sujet quelque peu avancé, je ne pense pas que ce soit le bon moment pour s'y atteler.

Tout ce que vous devez savoir pour le moment est que, pour obtenir la valeur d'une variable de scène, nous devons utiliser l'expression `Variable(nom_de_la_variable)`. Mais la variable obtenue est une valeur numérique (ici un nombre entier)  alors que nous voulons une valeur de type texte. C'est pourquoi nous devons convertir la valeur retournée par cette expression en une chaîne de caractères, conversion qui sera faite en utilisant une autre expression appelée `ToString(valeur_a_convertir)`.  

Ce qui fait que l'expression finale dont nous avons besoin est `ToString(Variable(Score))`.

Finalement, nous pouvons ajouter cette pression à la suite d'un texte statique en utilisant l'opérateur **+** pour obtenir :

`"Score : " + ToString(Variable(Score))`

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.58.12.png)

Bien d'autres fonctions ou expressions sont disponibles dans GDevelop. En les combinant, vous pouvez obtenir des actions puissantes qui peuvent effectuer un travail complexe.

Voici l'élément final :

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.59.31.png)

Vous pouvez maintenant tester le jeu et constater que le score est affiché et mis à jour chaque fois que vous récoltez une pièce de monnaie.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_19.00.24.png)

## Bonus : corriger le bug de score

Vous avez peut-être remarqué que si vous collectez deux pièces en même temps, le score n'augmente que d'une unité. Par exemple, si chaque pièce vaut 100 points et que vous collectez 2 pièces, le score n'augmentera que de 100 au lieu de 200. La correction est facile ; il suffit d'utiliser une fonction que nous n'avons pas encore rencontrée : un événement appelé **For each object**. Cette fonction nous permet de dire au moteur du jeu qu'il doit ajouter 100 au score pour chaque pièce ramassée.

Pour commencer, cliquez sur la bouton **+** dans le barre des outils.

![](/gdevelop5/tutorials/platform-game/gdevelop_5_2018-05-30_11-30-39.png)

Sélectionnez **For each object** dans le menu :

![](/gdevelop5/tutorials/platform-game/2018-05-30_11-33-09.png)

et GDevelop ajoute un événement au bas de la page de l'événement.

Faites-le glisser vers le haut pour en faire un sous-événement de la collision du joueur avec la pièce :

![](/gdevelop5/tutorials/platform-game/click-to-choose-4.png)

Cliquez `_Click to chose for which object this event will be repeted_`.

Tapez `coin` dans le champ qui apparaît et cliquez sur l'objet.

![](/gdevelop5/tutorials/platform-game/click-to-choose2.png)

Maintenant que l'objet a été ajouté au sous-événement, déplaçons les actions vers ce sous-événement. Sélectionnez la première action avec la souris, cliquez ave son bouton droit et coupez la sélection. Placez le curseur dans l'action du sous-événement et collez avec le bouton droit (il s'agit donc d'un banal couper-coller). 
Faites la même chose pour les eux autres actions

![](/gdevelop5/tutorials/platform-game/move-to-sub1.png)

Voilà à quoi devrait ressembler l'événement final :

![](/gdevelop5/tutorials/platform-game/move-to-sub2.png)

Lancez le jeu, et vous verrez que si vous récoltez deux pièces en même temps, le score sera mis à jour pour refléter le fait que vous avez effectivement récolté deux pièces plutôt qu'une.

## Prochaine étape : ajouter des ennemis

Chaque jeu de plateforme comporte des ennemis qu'il faut éviter ou tuer en leur sautant dessus ! Ajoutons-en et voyons comment nous pouvons les faire bouger.

➡️ Pour continuer **[6 add enemies](/fr/gdevelop5/tutorials/platform-game/6-add-enemies)**! 