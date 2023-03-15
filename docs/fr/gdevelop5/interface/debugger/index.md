---
title: Débogueur de jeu et Profiler
---
# Débogueur de jeu et Profiler

Le * débogueur * est un outil qui vous permet d'inspecter le contenu de votre jeu, en particulier les variables (variables globales, variables de scène et variables d'instances d'objets) et les instances vivant dans les scènes de votre jeu.
Vous pouvez mettre le jeu en pause à tout moment. C'est une excellente façon de comprendre pourquoi quelque chose ne fonctionne pas comme prévu ou de faire des tests rapides dans le jeu.

Le * profiler * est un outil qui mesure le temps passé dans différentes parties du moteur pendant que votre jeu est en cours d'exécution. Il aide à trouver des goulets d'étranglement ou des événements qui pourraient prendre beaucoup de ressources dans votre jeu. [En savoir plus sur l'utilisation du profileur ici!](/fr/gdevelop5/interface/debugger/profile-your-game)

!!! note
    
        
    Ceci est une fonctionnalité avancée de GDevelop. Si vous l'utilisez, nous aimerions que vous montriez votre soutien pour GDevelop par [abonnement payant](/fr/gdevelop5/interface/profile)!
    

![](/gdevelop5/interface/gdevelop-debugger_2x.png)

## Lancer le débogueur

Pour lancer le débogueur, dans la barre d'outils d'un éditeur de scène, cliquez sur l'icône "Debug":

![](/gdevelop5/interface/debug-icon_2x.png)

Dans le menu, choisissez "Aperçu avec débogueur et profileur de performances".
Cela ouvrira un nouvel onglet appelé "Débogueur" et lancera également un aperçu de votre jeu comme d'habitude.

Notez que même si vous fermez l'aperçu, vous pouvez laisser l'onglet débogueur ouvert. De cette façon, tout aperçu que vous lancez (avec le bouton Aperçu habituel) sera connecté au débogueur.

Lorsque le jeu est lancé, le débogueur est vide:

![](/gdevelop5/interface/empty-debugger_2x.png)

Cliquez sur ** "Actualiser" ** à tout moment pour récupérer les données du jeu.

![](/gdevelop5/interface/debugger-refresh-button_2x.png)

Vous pouvez également utiliser le bouton **Pause** dans la barre d'outils.

## Inspecter les scènes du jeu

Les scènes actuellement en cours sont listées sous l'élément Scenes de la liste:

![](/gdevelop5/interface/inspector-list.png)

Si vous cliquez sur un nom de scène, vous verrez à droite l'inspecteur de cette scène. Cet inspecteur contient la couche de la scène et un bouton pour créer une nouvelle instance d'un objet sur la scène.


### Créer une nouvelle instance de la scène

Pour créer une nouvelle instance, cliquez sur le nom de la scène où vous souhaitez créer l'instance.
Écrivez le nom de l'objet et cliquez sur Créer:

![](/gdevelop5/interface/create-instance.png)

L'instance sera créée à la position 0; 0, sur la couche de base avec l'ordre Z 0.
Vous pouvez alors le trouver dans la liste des instances et changer sa position, son angle, sa couche ...

## Inspecter et éditer les instances

Dans la liste, vous pouvez trouver **Instances** de chaque scène en cours d'exécution.
Les instances sont regroupées par nom d'objet. Cliquez sur un nom d'objet pour voir la liste des occurrences de cet objet vivant sur la scène. Cliquez sur un numéro d'instance (chaque instance a un numéro unique) pour l'inspecter:
![](/gdevelop5/interface/instance-inspector.png)

L'inspecteur affiche les propriétés générales de l'instance, par exemple la position, la rotation, la couche ... Pour chacune de ces propriétés, vous pouvez ** les modifier en cliquant sur la valeur **:

![](/gdevelop5/interface/debugger-inspector-edit-value.png)


Validez vos modifications en cliquant sur le petit bouton **valider** (celui avec l'icône en forme de coche).

Vous pouvez également voir les ** variables de l'instance ** et les modifier (voir ci-dessous pour plus d'informations sur les variables).

## Inspecter et éditer les variables

Vous pouvez inspecter des variables du jeu (variables globales), d'une scène (variables de scène) ou d'une instance particulière d'un objet (variables d'instance).

Pour ce faire, dans la liste, cliquez sur ** Variables globales **, **Variables de scène** ou le numéro d'instance que vous souhaitez inspecter.

Les variables seront affichées dans une liste affichant le nom et les valeurs de la variable (un nombre ou un texte). Voici un exemple d'instance d'un objet ayant une variable "Life":
![](/gdevelop5/interface/instance-variables.png)


Comme les autres champs, vous pouvez **cliquer sur la valeur de la variable** pour la modifier. C'est un bon moyen de voir comment votre jeu se comporte en fonction de la valeur des variables et de vérifier que vos événements fonctionnent correctement.

Les variables peuvent également être des ** structures **, ce qui signifie qu'elles contiennent d'autres variables. Dans ce cas, au lieu de voir la valeur (nombre ou texte) de la variable, vous verrez une sous-liste contenant les variables enfants:

Voici un exemple de variable "Options", contenant des variables enfants pour stocker les options d'un jeu:
![](/gdevelop5/interface/structure-variable-inspector.png)

Vous pouvez également modifier la valeur des variables enfants comme les autres.


## Profil de la performance de votre jeu.

Le profileur est un outil inclus dans le débogueur qui mesure le temps passé dans différentes parties du moteur pendant que votre jeu est en cours d'exécution. Il montre ensuite une ventilation de chaque section, y compris les événements.
[Lire plus sur le profileur ici!](/fr/gdevelop5/interface/debugger/profile-your-game) 