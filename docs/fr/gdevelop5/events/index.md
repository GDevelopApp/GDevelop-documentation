---
title: Événements
---
# Événements
![](/gdevelop5/event-screenshot.png)
Les événements dans GDevelop vous permettent de programmer visuellement votre jeu sans aucune connaissance de programmation et sans expérience requise, donc n'importe qui est capable de créer le gameplay qu'il souhaite et permettre aux joueurs d'interagir avec le jeu.

####  Types d'événements

Il existe différents types d'événements dans GDevelop qui peuvent être utilisés à différentes fins:

  * **standard event**:   cet événement est déclenché à toutes les images et exécute les actions une fois que la condition est vraie puis passe à l'événement suivant.
  * **for each event:** cet événement est déclenché pour chaque instance de l'objet sélectionné, vérifiez les conditions et exécutez les actions pour chaque instance avant de passer à l'événement suivant.
  * **repeat event:** cet événement est répété le nombre de fois spécifié avant de passer à l'événement suivant.
  * **while event:** cet événement se répète continuellement tant que les conditions spécifiées sont remplies et ne passe à l'événement suivant qu'après la condition si cet événement n'est plus vrai.
  * **sub-event:** (Événement enfant) cet événement peut être ajouté en tant qu'enfant à tout événement mentionné ci-dessus et ne peut être déclenché qu'après l'exécution de l'événement parent.
  * **Javascript event:** cet événement vous permet d'utiliser le code Javascript avec d'autres événements
  * **External event:** cet événement vous permet de stocker un ensemble d'événements en externe, de les appeler et de les exécuter, n'importe où, n'importe quand et ceci un nombre illimité de fois.
  * **Link:** il vous permet d'appeler un événement externe spécifié

####  Ajouter des événements
Pour ajouter des événements à notre jeu, nous devons d'abord passer à l'éditeur d'événements. Nous pouvons le faire en utilisant l'onglet Events à côté de notre onglet Scene.
![](/gdevelop5/objects/events-tab.png)

Après cela, nous pouvons trouver les outils en haut de la page pour ajouter des événements.
![](/gdevelop5/events-editor-toolset.png)
Comme les événements standards et les sous-événements sont les plus utilisés, nous avons un bouton rapide à utiliser en haut.
Pour ajouter un événement standard, nous pouvons utiliser le bouton Ajouter un événement
![](/gdevelop5/add-event-button.png)
Pour ajouter des sous-événements, il faut d'abord sélectionner un événement dans l'éditeur, puis cliquer sur le bouton Add sub-event
![](/gdevelop5/sub-event-button.png)
Vous pouvez trouver toutes les options disponibles en cliquant sur l'icône plus
![](/gdevelop5/add-special-events.png)

####  Ajouter des conditions et Actions
Après avoir ajouté un événement, nous allons trouver un événement vide dans notre éditeur
![](/gdevelop5/blank-event.png)

Nous pouvons ajouter un nombre illimité de conditions et d'actions à chaque événement.
Pour ajouter des conditions et des actions, nous devons cliquer sur Add condition et Add action à l'intérieur de l'événement, puis nous pouvons choisir parmi de nombreuses options triées dans différentes catégories.

Pour en savoir plus sur l'utilisation des différentes conditions et actions, je vous recommande de lire les tutoriels et guides disponibles sur le wiki:  [tutorials](/gdevelop5/tutorials)
