---
title: Comment faire un jeu de plateforme  - animations du joueur
---
# Comment faire un jeu de plateforme : animations du joueur

Ce tutoriel explique comment ajouter différentes animations et comment utiliser les événements pour changer les animations lorsque l'état du joueur change.

[Cliquez ici pour lire l'étape précédente](/fr/gdevelop5/tutorials/platform-game/start) si vous ne l'avez par encore accomplie. 

## Ajouter des animations

Pour le moment, le joueur montre toujours la même « animation statique » ; nous allons changer cette situation en utilisant les événements.

Mais nous devons d'abord ajouter les animations appropriées à l'objet `Player`.

### Animation du saut

Ouvrez l'éditeur de l'objet `Player` (clic-droit sur son nom dans la liste des objets). Assurez-vous que le panneau **PROPERTIES** de l'éditeur soit sélectionné et cliquez le bouton **+** au bas de la fenêtre pour ajouter une animation.

Cliquez ensuite sur le gros bouton portant un signe **+** dans la nouvelle zone d'animation et sélectionnez `p1_jump.png` dans le navigateur de fichiers qui s'est ouvert pour charger l'image dans le jeu.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_00.56.03.png)

Il est recommandé de donner un nom significatif  à chaque animation afin de pouvoir différencier facilement les diverses animations et les référencer sans ambiguïté dans les événements.   
Il suffit de cliquer à la suite de **Animation #0** et d'écrire le nom que vous voulez.

Entrez `Idle` pour l'animation n° 0 et `Jumping` pour l'animation  n°2.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_00.56.53.png)

### Animation de la marche

Nous devons aussi ajouter l'animation à afficher lorsque le personnage marche sur une plateforme. Ajoutez une autre animation de la même manière que ci-dessus, et , lorsque vous chargez les images, sélectionnez les 5 images `p1walk03.png`, `p1walk04.png`, ... , et `p1walk07.png`. Vous pouvez sélectionner les 5 images d'un seul coup ou les charger les unes après les autres. Finalement, nommez cette animation `Running`.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_00.59.15.png)

Ces images seront affichées les unes après les autres pour créer l'animation. Pour que le cycle de la marche se répète, nous devons modifier quelques options : cliquez d'abord **Don't loop** pour commuter sur **Loop**. Cette option fera boucler l'animation sur elle-même pour qu'elle soit jouée de manière continue.
Dans le cas contraire, l'animation ne sera jouée qu'une seule fois chaque fois qu'elle sera appelée, et dans le cas d'un marche continue, ce n'est pas ce que nous voulons. Le minuteur affiche le temps écoulé en secondes entre chaque images, en d'autres mots, la vitesse de l'animation. Entrez `0.05`  à la place de `1` afin que l'animation soit jouée plus rapidement.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_01.02.03.png)

Notre objet étant terminé, cliquez le bouton **APPLY** situé dans le coin inférieur droit.

## Utiliser des événements pour changer les animations

### Le premier événement : animation du saut

Nous devons maintenant changer l'animation montrée par l'objet en fonction de ce que fait le joueur. À cet effet, nous allons nous servir des **_événements_**, qui sont utilisés pour décrire les règles du jeu ainsi que pour spécifier comment les objets sont animés, se déplacent et répondent aux sollicitations du joueur.   
Pour décrire ces règles, GDevelop met à notre disposition une « programmation visuelle » dont l'apprentissage est rapide et accessible à tous.

Ouvrez l'éditeur des événements de la scène en cliquant l'onglet **NEWSCENE (EVENTS)**.

Pour le moment, l'éditeur d'événements est encore vide.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_01.05.29.png)

Ajoutez le premier événement en cliquant le bouton **Add a new empty event** dans la barre d'outils.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.40.43.png)

Un événement est composé d'une liste de conditions (qui peuvent être utilisées pour tester si une collision s'est produite, si une touche a été pressée, si le niveau de vie du joueur est bas, …) et d'une liste d'actions qui sont exécutées lorsque la ou les conditions sont remplies.

Il n'y a actuellement aucun événement défini.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.41.32.png)

Dans le premier événement, nous allons tester si le joueur saute, et dans ce cas, modifier son animation.

Commencez par cliquer sur **Add condition** dans le coin supérieur gauche de la fenêtre.

La fenêtre qui vient de s'ouvrir présente dans sa partie gauche une liste de toutes les conditions disponibles pour programmer votre jeu.  
Nous voulons tester si l'objet `Player`, qui possède le comportement de personnage de plateforme, est en train de sauter.  
Ouvrez la catégorie **Platform Behavior** puis sélectionnez **Is jumping**.

La partie droite de la fenêtre affiche les paramètres qui sont nécessaires à la configuration de la condition. Ici, comme nous voulons tester si l'objet `Player` saute, sélectionnez `Player` pour le premier paramètre (intitulé **Object**). Le second paramètre est rempli automatiquement.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.45.29.png)

Le condition est maintenant prête. Cliquez le bouton **OK** dans le coin inférieur droit de la fenêtre pour la fermer et voir la condition ajoutée à l'événement.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.47.17.png)

Ajoutons maintenant l'action pour changer l'animation du joueur lorsque le personnage saute. Cliquez sur **Add action**.

La fenêtre qui s'ouvre est semblable à celle ouverte avec **Add condition**, à ceci près qu'elle affiche toutes les actions disponibles.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.51.10.png)

Nous allons changer l'animation de l'objet `Player`, qui est un objet de type **Sprite**.

Ouvrez la catégorie **Sprite**, puis **Animations and images** et sélectionnez finalement **Change the animation (by name)**. 

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.52.28.png)

Dans la fenêtre de droite, sélectionnez l'objet `Player` pour le premier paramètre et écrivez `"Jumping"` dans le champ **Animation name**.

!!! warning

    **Attention !** Vous devez entourer le nom de guillemets anglais doubles car tout texte dans les actions ou les conditions de GDevelop peut aussi être généré par une formule. Il est donc nécessaire d'utiliser ces guillemets pour indiquer à GDevelop qu'il s'agit d'un texte et pas d'une formule quelconque. 

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.54.51.png)

Lorsque vous avez terminé, cliquez le bouton **OK** dans le coin inférieur droit. Le premier événement est maintenant prêt.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.56.10.png)

### Jetons un coup d'oeil au résultat

Cliquez le bouton **Launch a preview of the scene** de la barre des outils pour démarrer la prévisualisation. Observez le changement de l'animation quand le joueur saute.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_20.58.31.png)

Mais lorsque le joueur retourne sur le sol, vous pouvez voir que l'animation n'a pas été remise à la position au repos. C'est tout simplement parce que nous n'avons pas dit à GDevelop de le faire ! Ajoutons une autre événement pour corriger cela.

## Animations de la pause et de la course

Ajoutez un nouvel événement vide en cliquant le bouton **Add a new empty event** dans la barre d'outils.

Cliquez **Add condition** et sélectionnez cette fois la condition **Is on floor** dans la catégorie **Platform Behavior**. Notez que vous pouvez utiliser l'outil de recherche **Search** dans le haut de la liste pour trouvez rapidement la condition désirée si vous connaissez son nom. 

Remplissez le premier paramètre en sélectionnant l'objet `Player`.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_21.52.02.png)

Cliquez **OK** pour valider la condition.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_21.54.47.png)

Ici, nous avons l'opportunité de faire que notre personnage n'affiche pas seulement son état inactif et son saut, mais aussi sa course.

Nous pouvons construire deux événements comprenant chacun deux conditions et une action :

  * Lorsque le joueur est sur le sol **et** ne court pas, c'est l'animation `Idle` qui doit être montrée.


  * Lorsque le joueur est sur le sol **et** court, c'est l'animation `Running` qui doit être montrée.

mais nous pouvons utiliser des *sous-événements* pour n'avoir à tester qu'une seule fois si le joueur est sur le sol.

Faisons donc comme nous l'avons dit. Nous pouvons maintenant ajouter deux autres événements qui seront des sous-événements de cet événement. Cela signifie qu'ils ne seront lancés que si leur *parent* (l'événement que nous venons juste de créer) a satisfait à ses conditions.

Sélectionnez l'événement que nous avons créé avec un clic droit dans un espace vide près de **Add condition** ou **Add action**.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_21.59.36.png)

Cliquez ensuite deux fois sur le bouton **Add a sub-event to the selected event** pour ajouter deux sous-événements.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.05.49.png)

Deux événements « enfant » ont été ajoutés sous l'événement sélectionné qui est maintenant  considéré comme l'événement « parent ». GDevelopp a mis ces deux événements en retraits (indentation) et les a reliés par une ligne pour confirmer visuellement qu'il sont bien connectés.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.07.02.png)

Vous pouvez maintenant ajouter des conditions dans ces événements .

Cliquez sur **Add condition** du premier sous-événement. Sélectionnez **Platform Behavior** dans la liste des comportements puis sur **Is moving** pour tester si le joueur est en train de courir. N'oubliez pas de spécifier que l'objet à tester est le `Player` (à mettre dans le premier paramètre, à gauche).

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.08.06.png)

Faites de même pour le second sous-évémenent, mais activez en plus le commutateur **Invert condition**. C'est ainsi que nous inversons techniquement la condition de manière à ce que les actions de l'événement ne seront lancées que lorsque le joueur n'est **PAS** en train de se déplacer.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.09.30.png)

Notre séquence d'événements doit maintenant ressembler à quelque chose comme :

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.10.03.png)

Nous en avons presque terminé : il reste encore à spécifier l'action requise par chaque événement. Les opérations à effectuer sont les mêmes que celles faites pour le saut.

Cliquez **Add action** du premier sous-événement, sélectionnez **Sprite** dans la liste, puis **Animations and images** et finalement **Change the animation (by name)**. Sélectionnez l'objet `Player` dans le premier paramètre et entrez `"Running"` dans le paramètre **Animation by name**. N'oubliez pas les guillemets anglais doubles autour de `Running`.

Répétez ces opération pour le second sous-événement. Le nom de l'animation est ici `"Idle"`.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.15.20.png)

## Il est temps de tester (et de sauvegarder)

Testez le jeu et voyez si l'animation du joueur change lorsqu'il court ou qu'il saute.

Vous avez peut-être remarqué un petit bug quand vous avez essayé de sauter d'une plateforme : le joueur continue de courir même lorsqu'il est en train de tomber. Ce n'est peut-être pas ce que nous voulons car nous préférerions avoir une animation de chute lorsque le joueur tombe. Pour corriger ce bug, nous pouvons aussi activer l'animation du saut `Jumping` lorsque le joueur tombe, tout comme nous l'avons fait avant avec les autres animations. Cela ne devrait pas poser de problèmes : il suffit d'ajouter un nouvel événement et de le configurer comme indiqué ci-dessous.

  * Ouvrez le panneau **NEWSCENE (EVENTS)**.
  * Activez le premier événement en cliquant dans la zone vide à droite de **Player is jumping**.
  * Créez un nouvel événement en cliquant le bouton **Add a new empty event**.
  * Cliquez **Add condition** dans le nouvel événement qui vient de se placer sous le premier.
  * Activez les événements **Platform Behavior** et sélectionnez **Is falling**.
  * Mettez `Player` dans le premier paramètre et cliquez **OK** pour confirmer.
  * Cliquez sur **Add action** pour spécifier l'action à accomplir.
  * Sélectionnez `Sprite` dans la liste de gauche qui vient de s'ouvrir puis
  * **Animations and images** et **Change the animation (by name)**.
  * Sélectionnez l'objet `Player` dans le premier paramètre du panneau de droite et inscrivez `"Jumping"` dans **Animation name**. (N'oubliez pas les guillemets doubles !)
  * Cliquez **OK** et comparez votre programme à la figure ci-dessous.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.23.10.png)
}
## Étape suivante : la caméra doit suivre le joueur

Pour le moment, il est difficile de construire un grand niveau à explorer car le joueur quitte rapidement l'écran ! L'étape suivante de ce tutoriel vous montrera comment faire que la caméra suive le joueur. C'est très simple : un seul événement suffira.

➡️ Lisez **[l'étape suivante de ce tutoriel ici !](/fr/gdevelop5/tutorials/platform-game/3-have-camera-follow-player)** 