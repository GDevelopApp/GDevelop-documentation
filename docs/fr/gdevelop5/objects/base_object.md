---
title: base_object
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**

*(remove this paragraph once the translation is finished)*

Dans les jeux développés avec GDevelop, tout est lié aux objets.

# Caractéristiques communes à tous les objets

Dans un jeu GDevelop, tout ce qui apparaît à l'écran est un objet.

## Ajouter un objet à votre jeu

Vous pouvez ajouter des objets dans une scène en cliquant sur le bouton **Click to add an object** (Cliquez pour ajouter un objet) à droite, en bas de la liste des objets :

![](/gdevelop5/objects/add-object-button.png)

Vous pouvez choisir parmi de nombreux types d'objets, tous dotés de propriétés spécifiques et destinés à jouer un rôle bien défini :

![](/gdevelop5/objects/object-types.png)

En fonction du type d'objet choisi, l'éditeur, l'aspect de l'objet et les fonctionnalités disponibles dans les événements seront différents. Le but de cette page étant d'expliquer les objets en général, nous n'entrerons pas dans les détails des propriétés propres à chaque type d'objets. Vous pouvez trouver des [informations détaillées ici](http://wiki.compilgames.net/doku.php/gdevelop5/objects).

# Les objets dans la scène

## Ajouter une instance d'objet à la scène

Un objet peut être placé sur la scène en le sélectionnant dans l'onglet **Object** (cliquez dessus), puis en le faisant glisser dans la scène pour placer une * instance * de cet objet. Une * instance * est fondamentalement une *copie* de l'objet vivant sur la scène. Chaque instance a ses propres variables, position, animations (pour les objets sprite), contenu (pour les textes), etc ...

Nous pouvons modifier la position d'un objet en sélectionnant l'objet dans l'éditeur de scène et en le faisant glisser. Nous pouvons redimensionner l'objet en le sélectionnant et en faisant glisser l'une des poignées d'échelle blanches.

![](/gdevelop5/objects/coin-selected.png)

## Modifier les propriétés d'un objet

Lorsque nous sélectionnons un objet dans l'éditeur de scène, le panneau de propriétés situé à gauche affiche des informations sur la ou les instances sélectionnées. S'il n'est pas ouvert, vous pouvez l'ouvrir en cliquant sur le bouton des propriétés situé dans la barre d'outils :

![](/gdevelop5/objects/object-propeties-button.png)

## Position de l'instance d'un objet

Vous pouvez définir avec précision la position des instances sélectionnées en modifiant les valeurs **X** et **Y** dans le panneau des propriétés :

![](/gdevelop5/objects/object-position-properties.png)

## Angle (orientation) de l'instance d'un objet

Vous pouvez définir l'angle (l'orientation) de l'instance en modifiant la valeur de l'angle :

![](/gdevelop5/objects/object-angle-properties.png)

L'angle peut prendre n'importe quelle valeur de 0 à 360 degrés. Rappelez-vous ce diagramme pour voir quelle est l'orientation d'un angle donné :

![](/gdevelop5/objects/gdevelop_co.png)

## L'ordre Z

Vous pouvez modifier l'ordre Z d'une instance dans le panneau des propriétés :

![](/gdevelop5/objects/object-zorder-properties.png)

Le but de l'ordre Z est de permettre de spécifier quel objet sera affiché en premier, lorsque les instances se chevauchent. Plus précisément, nous pouvons contrôler si l'objet est derrière un autre objet ou s'il est devant en définissant des valeurs différentes : lorsque deux objets se chevauchent, l'objet avec la valeur d'ordre Z inférieure sera affiché derrière l'autre.

Les valeurs peuvent être n'importe quel entier, y compris les nombres négatifs et 0.

![](/gdevelop5/objects/coin-bush-zorder.png)

Sur l'image ci-dessus, l'ordre Z du buisson à gauche est 2, l'ordre Z de la pièce est 1 et l'ordre Z du buisson à droite est 0.

## Les calques (layers)

Vous pouvez définir le calque d'une instance :

![](/gdevelop5/objects/object-layer-properties.png)

Par défaut, chaque scène de GDevelop est fournie avec un seul calque (ou couche) appelé **Base layer** (calque de base). C'est là que tous les objets de notre scène sont situés. Nous pouvons ajouter plus de calques à des fins diverses et mettre n'importe quelle instance sur n'importe quel calque. Par exemple, il peut y avoir un calque pour afficher les commandes à l'écran, une autre pour afficher un menu, une carte ou un arrière-plan.

## Verrouiller la position / l'angle

En cochant la case**Locked**(Verrouiller) la position / l'angle dans l'éditeur, vous pouvez rendre l'instance inamovible dans l'éditeur.

![](/gdevelop5/objects/lock-sprite.png)

Quand une instance est verrouillée, nous ne pouvons plus la sélectionner dans la scène. Il y a des moments où nous avons beaucoup d'objets qui se chevauchent dans la scène ce qui rend difficile la sélection de certains d'entre eux, car nous continuons à sélectionner ceux que nous n'avons pas l'intention de manipuler. Dans ce cas, nous pouvons verrouiller les instances.

Vous pouvez déverrouiller une instance verrouillée en ouvrant le panneau d'instances, qui affiche toutes les instances de notre scène et en sélectionnant l'objet dans la liste.

## Les variables d'instance

Le bouton **Edit variables** (Editer les variables) permet de définir des variables spécifiques à l'instance sélectionnée :

![](/gdevelop5/objects/instance-variables-property.png)

Une variable est essentiellement un conteneur qui renferme une valeur (un nombre, un texte) pouvant être comparée et modifiée au cours du jeu. Il existe différents types de variables dans GDevelop, en particulier chaque objet peut contenir des variables. Lorsque le jeu est en cours d'exécution, chaque *instance* de l'objet vivant sur la scène aura ses propres variables.

L'éditeur de variables permet de définir des variables spécifiques à l'instance sélectionnée. Par exemple, si vous avez sur la scène des objets représentant des coffres contenant de l'or, vous pouvez modifier la variable nommée "Or" de chaque instance pour définir un nombre différent. Ensuite, dans les événements, lorsque le joueur entre en collision avec un coffre, vous pouvez lire la valeur de la variable pour l’ajouter au montant en or du joueur.

## Dimensions personnalisées

Vous pouvez modifier la taille des objets en activant la taille personnalisée dans le panneau de propriétés, puis entrez les dimensions personnalisées **Width** (largeur) et **Height** (hauteur) en pixels :

![](/gdevelop5/objects/customsize-properties.png)

# Les groupes d'objets

Un groupe d'objets est un ensemble d'objets. Par exemple, un groupe appelé "Ennemis" peut contenir des objets "Champignon", "Bombe", "Dinosaure". Vous pouvez ensuite utiliser le nom du groupe dans les événements pour faire référence à tous les objets contenus dans le groupe.

Cela permet de créer des événements qui s'appliquent à un grand nombre d'objets sans les répéter plusieurs fois, ce qui augmente les performances du jeu, la facilité de maintenance et la lisibilité des événements.

Pour ouvrir l’éditeur de groupes, cliquez sur l’icône des groupes dans la barre d’outils :

![](/gdevelop5/objects/groups-button.png)

L'éditeur de groupes répertorie tous les groupes de la scène (ainsi que les groupes globaux disponibles dans toutes les scènes du jeu). Pour ajouter un groupe, cliquez sur le bouton **Click to add a group** (Cliquez pour ajouter un groupe) en bas de la liste :

![](/gdevelop5/objects/add-group-button.png)

Un nouveau groupe est ajouté dans la liste :

![](/gdevelop5/objects/group-group.png)

* Pour renomer un groupe, faites un clic droit sur le groupe et sélectionnez **Rename** (Renommer). * Pour ajouter un objet au groupe, cliquez ou tapez sur le groupe.

Dans la fenêtre qui s'ouvre pour éditer le groupe, cliquez sur le champ du bas et choisissez un objet (ou écrivez le nom d'un objet) pour l'ajouter au groupe.

![](/gdevelop5/objects/edit-group.png)

# Les variables

Chaque objet peut contenir des variables, qui sont des cellules de mémoire que vous pouvez utiliser pour stocker des informations. Lorsque le jeu est en cours d'exécution, chaque *instance* de l'objet vivant sur la scène aura ses propres variables.

Consultez [cette page](/gdevelop5/all-features/variables) pour en savoir plus sur les variables.

# Les chronomètres ou minuteries

Les objets peuvent contenir leurs propres chronomètres et chaque chronomètre sera unique pour chaque instance de l'objet vivant sur la scène. Les chronomètres d’objets sont utiles pour créer des instances permettant de lancer des actions toutes les X secondes.

Par exemple, une utilisation classique consiste à simuler des balles tirées par une arme. Si vous avez un seul char sur la scène, vous pouvez utiliser un chronomètre de scène pour que ce char puisse tirer (créer une balle) toutes les 3 secondes, puis réinitialiser le chronomètre (pour que le char puisse tirer à nouveau).

Le problème est que si vous avez 2 chars et utilisez un chronomètre de scène, vous remarquerez que les deux chars tirent en même temps, car ils partagent le même chronomètre de scène. Vous devez disposer de deux chronomètres distincts, indépendants l’un de l’autre, pour que le second char tire à son rythme. Mais que faire si vous avez 100 chars ? Vous ne voudrez certainement pas créer 100 chronomètres de scène, un par instance.

C'est à ce moment que les chronomètres d'objets deviennent utiles : remplacez chaque condition / action utilisant le chronomètre de scène par des conditions / actions permettant d'utiliser les chronomètres d'objet. Pendant le jeu, GDevelop créera un chronomètre pour chaque instance de char. Lorsque vous utiliserez une condition pour vérifier la valeur d'un chronomètre, seule l'instance dont le chronomètre a une valeur en secondes supérieure au nombre que vous avez entré sera sélectionnée.

Vous pouvez en apprendre plus sur les chronomètres en étudiant : [](/gdevelop5/all-features/timers)

# La visibilité

La visibilité d'un objet est la propriété qui lui permet d'être visible après sa création. La visibilité d'un objet peut être activée ou désactivée. Si l'objet n'est pas visible, cela ne signifie pas que l'objet n'existe pas. Par contre, si l'objet cesse d'exister, cela implique directement que l'objet n'est pas visible. Si l'objet existe, il est visible et inversement.

Si l'objet existe et que sa visibilité est désactivée, toutes les actions et conditions auront lieu exactement comme si l'objet était visible.

# Dans l'éditeur d'événements

Vous pouvez modifier et manipuler les propriétés d'une instance d'objet ou de plusieurs instances à l'aide d'événements au cours du jeu. C’est même ce qu’est le gameplay dans GDevelop : manipuler des objets en temps réel pendant que nous jouons. Comme les événements et l’éditeur d’événements sortent du cadre de cette page, reportez-vous à la page [Concepts de base du jeu](/fr/gdevelop5/tutorials/basic-game-making-concepts) pour commencer.

* Tous les objets partagent les mêmes caractéristiques communes (comme la position, l'angle et tout ce qui est décrit sur cette page). De nombreuses conditions et actions peuvent être utilisées pour tous les objets. Vous pouvez [en savoir plus sur les conditions / actions communes pour tous les objets ici.](/gdevelop5/ objects/ base_object/ events)
* Les objets peuvent également vous fournir une fonctionnalité spécifique. Par exemple, [les objets sprite](/[gdevelop5/ objects/ sprite) peuvent avoir des animations et l'animation en cours de lecture peut être modifiée à l'aide d'une action.
