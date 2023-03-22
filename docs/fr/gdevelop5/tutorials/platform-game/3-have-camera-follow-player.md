---
title: Suivre le joueur avec la caméra
---
# Suivre le joueur avec la caméra

!!! note

    Ce tutoriel fait partie de [start](/gdevelop5/tutorials/platform-game) , mais vous pouvez aussi le réutiliser pour n'importe quel autre jeu !

Pour l'instant, il est difficile de construire un grand niveau à explorer car le joueur peut rapidement sortir de l'écran !

Ajoutons un autre événement pour que la caméra suive le joueur. Il y a plusieurs façons d'y parvenir. Le plus simple est d'ajouter un événement sans condition et de mettre l'action appelée **Center the camera on an object** :

  * Créez un nouvel événement vide ; n'y ajoutez aucune condition et cliquez sur **Add action**.
  * Dans la liste des actions, sélectionnez **Layers and cameras** puis **Center the camera on an object**.
  *Laissez les paramètres par défaut et cliquez sur **OK**.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.25.53.png)

Le nouvel événement ressemble à ceci :

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.26.20.png)

Vous pouvez lancer un aperçu pour voir que la caméra est désormais centrée sur le joueur :

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.27.31.png)

## C'est tout !

C'était facile, non ? D'autres actions peuvent être utiles. Par exemple, des actions peuvent être utilisées pour modifier les coordonnées de la caméra uniquement sur l'axe X ou Y. Cela peut être utile pour les jeux de plates-formes où vous ne pouvez pas monter/descendre, mais juste traverser le niveau avec un défilement latéral.

## Prochaine étape : ajouter un saut à travers la plate-forme

C'est assez ennuyeux d'avoir un seul type de plateforme. Ajoutons une autre plateforme sur laquelle nous pourrons monter  en arrivant d'en dessous en sautant pour la traverser.

➡️ Lisez  **[la suite par ici](/fr/gdevelop5/tutorials/platform-game/4-add-jump-thru-platforms)**!