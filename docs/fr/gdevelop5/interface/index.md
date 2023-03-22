---
title: Aperçu de l'interface de GDevelop
---
# Aperçu de l'interface de GDevelop

L'interface de travail de GDevelop est basée sur des éditeurs affichés dans des onglets. Ces éditeurs vous permettent de modifier différentes parties de votre jeu.
![](/gdevelop5/screen_shot_2017-09-18_at_01.30.20.png)


# Page de démarrage

L'écran de démarrage initial s'affiche lorsque vous lancez GDevelop pour la première fois. C'est ici que vous créez vos projets, chargez des projets précédemment enregistrés ou chargez des tutoriels.

![](/gdevelop5/gdevelop5startpage.png)

Au démarrage, GDevelop recherchera de nouvelles mises à jour. Si une nouvelle mise à jour est disponible, la mise à jour sera automatiquement téléchargée.
Vous pouvez en voir la progression en cliquant sur [About GDevelop](/gdevelop5/interface/updates)
.
# Gestionnaire de projet

Lorsqu'un projet est ouvert, vous pouvez cliquer sur le bouton en haut à gauche pour accéder au gestionnaire de projet.
![](/gdevelop5/project-manager-button.png)
Le gestionnaire de projet montre la structure de votre jeu.
![](/gdevelop5/project-manager-tab.png)
Vous pouvez plier et déplier chaque catégorie en cliquant sur la petite flèche.

  *** Ressources:** C'est ici que GDevelop stocke toutes les images et les sons utilisés dans votre jeu.

   * **Scènes:**  Les scènes sont les différents niveaux de votre jeu mais pas seulement car dans GDevelop tout est une question de scène, le menu principal, écran de démarrage, écran de crédits, tous sont des scènes.

  *** Événements externes:** Pour rendre le développement de notre jeu plus flexible, nous pouvons rendre externes des événements souvent utilisés et les lier à des scènes quand nous en avons besoin. Considérez-les comme des méthodes de programmation, mais si vous n'êtes pas familier avec le terme méthode, rappelez-vous simplement que si vous avez souvent besoin d'utiliser un des événements, vous pouvez le rendre externe et l'appeler quand vous en avez besoin.

  *** Agencements externes:** Comme pour les événements, vous pouvez décider que des agencements utilisés à diverses reprises méritent d'être conçus comme des agencements externes qui pourront être chargés à de multiples endroits de vos scènes.

Dans la version **bureau**, le menu Fichier vous permet de sauvegarder votre jeu, d'en ouvrir un autre ou de le fermer. Vous pouvez aussi [exporter votre jeu](/gdevelop5/publishing).
![](/gdevelop5/file-menu.png)
Dans la version navigateur de GDevelop5, ces options sont en haut du gestionnaire de projet.
![](/gdevelop5/web-project-manager-tab.png)

# Éditeur de scènes

Lorsque vous ouvrez une scène (ou un agencement externe), un éditeur de scène s'ouvre.
C'est ici que vous pouvez concevoir et construire vos niveaux et menus de jeu en créant et ajoutant des objets à la scène.

Nous avons une sélection d'outils et d'éditeurs disponibles dans l'éditeur de scènes:
![](/gdevelop5/scene-editor-toolset.png)

[Pour en apprendre plus sur l'utilisation de l'éditeur de scènes](/fr/gdevelop5/interface/scene-editor).
}
## Éditeur d'objets
L'éditeur d'objets se trouve à droite. C'est ici que vous pouvez voir tous les objets utilisés dans votre scène et en ajouter de nouveaux.
![](/gdevelop5/objects-manager-tab.png)
Si vous avez fermé cette barre, vous pouvez l'ouvrir à nouveau en utilisant le bouton en haut.
![](/gdevelop5/objects-manager-button.png)

## Propriétés de l'objet
Vous trouverez les propriétés de l'objet à gauche, sous le gestionnaire de projet. Fermez le gestionnaire de projet si vous ne pouvez pas le voir.
![](/gdevelop5/object-properties-bar.png)
Ici, vous pouvez modifier les propriétés des objets sélectionnés tels que la position, la rotation, l'échelle, l'ordre Z, etc.

Si vous avez fermé cette barre, vous pouvez l'ouvrir en cliquant sur le bouton en haut.
![](/gdevelop5/object-properties-button.png)

Dans ce cas, la barre peut s'ouvrir sur le côté droit, vous pouvez déplacer et mettre à l'échelle via les bords n'importe quel élément de l'écran en faisant glisser et en déplaçant.

## Éditeur des Groupes d'objets
Dans l'éditeur des Groupes d'objets nous pouvons trouver la liste des groupes que nous avons dans notre scène et nous pouvons en créer de nouveaux.
![](/gdevelop5/objects-groups-editor.png)
Pour ouvrir l'éditeur, il faut cliquer sur le bouton en haut.
![](/gdevelop5/objects-groups-editor-button.png)

Les groupes d'objets nous permettent de rassembler des objets dans des groupes, puis d'y faire appel à l'intérieur de nos événements. Cela sert à faire appel à un groupe plutôt qu' à des objets individuels.

## Éditeur d'instances
L'éditeur d'instances affiche une liste de toutes les instances présentes dans notre scène et nous pouvons sélectionner n'importe quelle instance de la liste et voir sa position, angle, couche et ordre Z dans notre scène.
![](/gdevelop5/instances-editor.png)

On peut ouvrir l'éditeur d'instances en cliquant sur le bouton en haut dans la barre d'outils.
![](/gdevelop5/instances-editor-button.png)

## Éditeur de calques
L'éditeur de calques affiche la liste des calques dans nos scènes et nous permet d'en ajouter de nouveaux, de modifier leurs ordres, de les masquer et de les supprimer.
![](/gdevelop5/layers-editor.png)

On peut ouvrir l'éditeur de calques en cliquant sur le bouton en haut dans la barre d'outils.
![](/gdevelop5/layers-editor-button.png)

## Masque de fenêtre
En cliquant sur le bouton Masque de fenêtre situé en haut, nous pouvons activer et désactiver la bordure noire de notre scène qui indique la taille de notre fenêtre de jeu.
![](/gdevelop5/toggle-window-mask-button.png)

## Editer la grille
En cliquant sur le bouton d'édition de la grille en haut, nous obtenons deux options:
![](/gdevelop5/toggle-grid-button.png)

  * **Toggle grid:** il nous permet d'activer et de désactiver la grille dans l'éditeur de scènes, la grille est utile lorsque nous avons besoin de placer des objets avec précision ou que nous avons à faire à des sprites de tuiles.
  * **Setup grid:** il nous permet de personnaliser la taille de la grille.

## Changer le zoom de l'éditeur
En cliquant sur le bouton Modifier le zoom, on peut changer le niveau de zoom dans l'éditeur de scène.
![](/gdevelop5/toggle-zoom-button.png)

## Lancement de la prévisualisation de la scène
En cliquant sur le bouton Prévisualiser, nous pouvons lancer un aperçu de notre jeu et le tester avant de l'exporter.
![](/gdevelop5/preview-button.png)

##  Éditeur d'événements

Lors de l'ouverture d'une scène (ou lors de l'ouverture d'événements externes), un éditeur d'événements est également ouvert. C'est ici que vous pouvez utiliser les événements pour créer le gameplay réel et permettre aux joueurs d'interagir avec votre jeu et de le jouer.
L'éditeur d'événements est un outil qui vous permet de programmer visuellement votre jeu sans aucune connaissance de programmation ou d'expérience requise afin que n'importe qui avec n'importe quel niveau puisse faire un jeu dans GDevelop.

Pour basculer entre l'éditeur de scène et l'éditeur d'événements, vous pouvez utiliser les onglets en haut de l'écran.
![](/gdevelop5/scene-events-tab.png)

Lorsque vous passez à l'éditeur d'événements, vous remarquerez peut-être qu'en haut un choix de différents outils est désormais disponible.
![](/gdevelop5/events-editor-toolset.png)

## Ajouter un événement
Nous pouvons ajouter un événement en cliquant sur le bouton Ajouter un événement
![](/gdevelop5/add-event-button.png)

En cliquant sur ce bouton, un évènement vide apparaît dans notre éditeur.
![](/gdevelop5/blank-event.png)

Nous pouvons ajouter autant de blocs d'événements à notre éditeur et ajouter diverses conditions et actions à chaque bloc d'événements pour faire notre logique de jeu. Pour en savoir plus sur les événements, consultez cette page: [events](/gdevelop5/events)

## Ajouter un sous-événement
En cliquant sur le bouton Ajouter un sous-événement, nous pouvons ajouter un bloc d'événement enfant à l'événement sélectionné.
![](/gdevelop5/sub-event-button.png)

Après avoir cliqué sur le bouton, un sous-événement vide apparaît en dessous de l'événement sélectionné.
![](/gdevelop5/blank-sub-event.png)

Les sous-événements ne sont exécutés que si l'événement parent est exécuté, de cette façon nous pouvons freiner nos événements et déclencher des événements seulement quand/si c'est nécessaire et ne pas les déclencher si ce n'est pas le cas.

## Ajouter un commentaire
En cliquant sur le bouton ajouter un commentaire, nous pouvons ajouter des commentaires à nos événements afin que nous puissions nous rappeler quels événements correspondent à quel but.
![](/gdevelop5/add-comment-button.png)
Bien sûr, la plupart des événements s'expliquent d'eux-mêmes, mais dans les jeux gigantesques et complexes, il est toujours utile d'ajouter des commentaires pour nous rappeler ce que fait exactement cette partie. Dans un projet à plusieurs mettre des commentaires est utile pour que vos collègues comprennent la logique des évènements plus simplement.
![](/gdevelop5/comment-in-editor.png)

## Ajouter des événements spéciaux
En cliquant sur le bouton Ajouter un événement, en plus de ceux que nous avons déjà mentionnés, nous avons accès à quelques événements spéciaux
![](/gdevelop5/add-special-events.png)

  * **For each object:** cet événement va être déclenché sur chaque instance d'un objet un par un et s'assurer que les actions sont appliquées à chaque instance individuellement.
  * **Group:** Les groupes nous permettent de trier les événements dans des groupes, cela nous aide à rendre nos événements plus organisés.
  * **Javascript code:** il nous permet d'utiliser le code Javascript dans l'éditeur d'événements
  * **Link:** nous pouvons lier un événement externe en utilisant cette option
  * **Repeat:** cet événement va être répété un nombre spécifié de fois.
  * **While:** cet événement va être exécuté tant qu'une certaine condition est remplie

## Supprimer les événements sélectionnés
En cliquant sur le bouton Supprimer les événements sélectionnés, ce bouton fait exactement ce qui est écrit.
![](/gdevelop5/delete-selected-events-button.png)

## Annuler/Rétablir les modifications
En cliquant sur le bouton Annuler ou Rétablir les modifications, ceci sera fait.
![](/gdevelop5/undo-redo-buttons.png)

## Rechercher dans les événements
En cliquant sur le bouton de recherche dans les événements, recherchez n'importe quelle expression dans les événements et trouvez ce que vous voulez.
![](/gdevelop5/search-events-button.png)