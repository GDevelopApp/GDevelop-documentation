---
title: Ajouter des ennemis à notre jeu de plateforme
---
# Ajouter des ennemis à notre jeu de plateforme
Terminons ce tutoriel en ajoutant un ennemi qui se déplacera à gauche et à droite et que nous pourrons détruire en lui sautant dessus.


##Créer et ajouter un objet ennemi à notre scène

Créons d'abord un nouvel objet **Sprite** et ajoutons-y les images `slimeWalk1.png` et `slimeWalk2.png` dans une seule animation. Appelons cette animation `Walk`.

Puisque cet ennemi est constamment en mouvement, nous n'avons pas besoin d'une animation « immobile » ou d'une quelconque autre animation.

Activez l'animation en boucle en cliquant le bouton **Don't Loop** (en haut à droite) et réglez la vitesse d'animation (à droite du symbole d'un chronomètre) à `0.5`.

La fenêtre devrait ressembler à :

![](/gdevelop5/tutorials/platform-game/gd5_platormertut_slimeeditor.png)

Confirmez ensuite les modifications en cliquant le bouton **Apply** dans le coin inférieur droit.

Renommez finalement l'objet en `Slime` et ajoutez-le à la scène. Assurez-vous qu'il repose bien sur le dessus de la plateforme et qu'il se trouve sur le calque `Base`.

Si vous lancez maintenant un aperçu, il ne se passe pas grand chose. L'ennemi se pose gentiment sur la plateforme et joue l'animation `Walk`. Faisons-le bouger.


##Déplacer l'ennemi à gauche et à droite
Dans ce tutoriel, l'ennemi devra se déplacer à gauche à et droite. Les changements de directions se feront lorsque l'ennemi entre en collision avec un obstacle.

Il nous faut donc ajouter deux objets qui serviront d'obstacle et permettront de détecter les collisions avec l'ennemi.

Créez un premier objet **Sprite**, ajoutez-lui l'image `Left.png` et renommez cet objet `left`. Créez ensuite un second objet **Sprite**, ajoutez-lui l'image `Right.png` et renommez-le `right`.

Placez enfin l'objet `left` sur l'extrémité droite de la plateforme et l'objet `right` sur l'extrémité gauche de la plateforme.

La plateforme devrait alors ressembler à :

![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_slimedirection.png)

Vous devinez peut-être ce que nous allons faire avec ces deux objets. Si ce n'est pas le cas,  je vais vous l'expliquer. L'idée est que, si la bave rose `Slime` entre en collision avec l'objet appelé `left`, nous changeons sa direction pour la faire aller à gauche et si elle entre en collision avec l'objet appelé `right`, nous changeons sa direction pour la faire aller à droite. Passons donc à l'action.

Nous allons commencer par créer une variable objet appelée `direction` en lui donnant la valeur `left` par défaut. Cette variable nous permettra de stocker le sens du déplacement de la bave et de la faire changer de direction. Pour ajouter une variable d'objet à la bave `Slime`:

sélectionnez une bave dans la scène et, dans l'onglet **Properties**, cliquez sur **EDIT VARIABLES**.

![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_objectvariable1.png)

GDevelop affiche une fenêtre vide qui contient la liste des variables d'objet déjà déclarées pour l'objet `Slime`. Elle est évidemment vide puisque, jusqu'à maintenant, nous n'en avons déclaré aucune. Pour ajouter une variable d'objet :

cliquez sur le signe **+**  **Click to add a variable** dans le coin inférieur droit.

GDevelop affiche maintenant une variable appelée `Variable` dans le champ **Name**.

Cliquez sur ce nom et remplacez-le par `direction`. Cliquez ensuite dans le champ **Value** et entrez `left`. La fenêtre devrait alors ressembler à :

![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_objectvariable2.png)

Confirmez les modifications en cliquant sur le bouton **APPLY**.

Nous avons maintenant une variable d'objet appelée `direction` ayant la valeur par défaut `left`. Utilisons cette variable pour faire bouger la bave. L'idée est que, si la valeur de `direction` est  `left` la bave doit se déplacer vers la gauche et si la valeur est  `right`  la bave doit se déplacer vers la droite.

Ouvrez l'onglet des événements **NEWSCENE (EVENTS)** et créez un nouvel événement vide (bouton **Add a new empty event** dans la barre du haut).

Ajoutez-y une condition en cliquant **Add condition** pour tester le contenu texte d'une variable d'objet. Vous la trouverez dans **Common condition for all objects > Variables > Text of an object's variable** dans la liste de gauche.

Dans le panneau de droite, cliquez sur **Object** et sélectionnez `Slime` dans la liste des objets. Dans le champ **Variable**, sélectionnez `direction` ou, s'il n'y figure pas pour une raison ou l'autre, écrivez-le. Pour le champ **Sign of the test**, choisissez **= (equal to)** ou tapez simplement le signe `=` et finalement, pour le champ **Text to test**, tapez `"left"`. N'oubliez pas de mettre cette valeur **entre guillemets** !

La fenêtre devrait ressembler à :

![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_objectvariable3.png)

Pressez **OK** pour confirmer et ajouter la condition à l'événement.

La condition étant fixée, ajoutons une action pour déplacer la bave vers la gauche.

Cliquez sur **Add an action** pour paramétrer le déplacement vers la gauche. Sélectionnez **Common action for all objects > Movement > Add a force (angle)** dans le menu de gauche.

Rappelons que vous pouvez toujours utiliser la boîte de recherche **Search** pour trouver ce que vous cherchez à condition de savoir ce que vous cherchez.

Dans le panneau de droite, sélectionnez `Slime` dans le  champ **Object**. Entrez la valeur `180` dans **Angle**, angle qui correspond à la direction vers la gauche dans le système de coordonnées de GDevelop. Pour la vitesse, entrez `100` dans le champ **Speed (in pixels per second)**.

La fenêtre devrait ressembler à :

![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_moveslimeleft.png)

Pressez **OK** pour confirmer et ajouter l'action.

Si nous lançons maintenant un test, la bave devrait commencer par se déplacer vers la gauche, mais vous constaterez probablement qu'elle continue à se déplacer sans jamais changer de direction. Il est temps de remédier à cet situation.

À cet effet, nous devons tester s'il y a collision entre l'objet `Slime` et l'objet appelé `right` et, si c'est le cas, changer la valeur de la variable `direction` en `"right"`.

La suite des opérations est, à quelques détails près, la même que pour le déplacement vers la gauche.

Ajoutez un événement vide (bouton **Add a new empty event**) puis une condition (**Add condition**) pour tester la collision entre l'objet `Slime` et l'objet `Right`.

Sélectionnez **Common conditions for all objects > Variables > Text of a variable** dans la liste de gauche. Dans le panneau de droite, sélectionnez `Slime` dans le champ **Object**, `direction` dans le champ **Variable** (entrez ce nom manuellement s'il ne figure pas dans la liste). Sélectionnez **= (equal to)** ou tapez un signe égal `=` dans le champ **Sign of the test**. Pour finir, entrez `"right"` dans le champ **Text to test** (n'oubliez pas les guillemets doubles !).

La fenêtre devrait ressembler à :

![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_checkobjectvariable.png)

Il reste encore à dire à GDevelop ce qu'il faut faire quand la variable `direction` vaut `right`.

Cliquez **Add action** dans la condition qui vient d'être créée. Sélectionnez **Common action for all objects > Movement > Add a force (angle)** dans la liste de gauche. Sélectionnez `Slime` dans le champ **Object**, mettez **Angle** à `0` et **Speed (in pixels per second)** à `100`, puis cliquez **OK** pour confirmer.

La figure ci-dessous, qui représente le système de coordonnées utilisé par GDevelop, montre que le déplacement vers la droite correspond bien à un angle de 0°.

![](/gdevelop5/tutorials/platform-game/gdevelop_co.png)

Si nous testons maintenant le jeu, nous constatons que rien ne se passe comme prévu : bien que GDevelop sache ce qu'il faut faire quand `direction` vaut `right` ou `left`, la bave poursuit son chemin vers la gauche sans se préoccuper des limites.

Il faut donc tester les conditions les collisions avec les objets limite `Right` et `Left` et ajuster la variable `direction` en conséquence.

Créez un nouvel événement et ajoutez-y une condition (**Add condition**) pour tester la collision avec la borne située à gauche appelée `Right`.

Sélectionnez **Common condition for all objects > Collision > Collision** dans la liste de gauche. Sélectionnez `Slime` dans le premier champ **Object** et `Right` dans le second. Cliquez **OK** pour confirmer.

Indiquez à GDevelop  ce qu'il doit faire quand il y a collision en ajoutant une action en cliquant **Add action**.

Sélectionnez **Common action for all objects > Variables > Modify the text of a variable of an object** dans la liste de gauche. Dans le panneau de droite, sélectionnez `Slime` dans le champ **Object**, écrivez `direction` dans le champ **Variable**, sélectionnez `= (set to)` dans le champ **Modification's sign** et tapez `"right"` dans le champ **Text**. Cliquez **OK** pour confirmer.

Il reste à dire à GDevelop ce qu'il doit faire en cas de collision à droite (donc avec la borne `Left`).

Répétez ce que vous venez de faire pour la borne `Right` en utilisant l'objet `Left` et la valeur `"left"`.

Si vous avez bien suivi, les événement devraient ressembler à :

![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_moveslimeevent1.png)

Si vous testez maintenant le jeu, la bave devrait changer de direction chaque fois qu'elle touche une limite, mais elle continue de regarder vers la gauche quelle que soit la direction de son déplacement. Il s'agit dont de retourner l'image de la bave chaque fois que c'est nécessaire.

Il suffit d'ajouter une action de retournement horizontal du sprite de la bave dans les événements spécifiant la direction de cette bave.

Cliquez **Add action** dans l'événement qui déplace la bave vers la gauche (`The text of variable direction of Slime is = "left"`.

Sélectionnez **Sprite > Effects > Flip the object horizontally** dans la liste de gauche. Sélectionnez `Slime` dans le champ **Object** du panneau de droite. Cliquez `NO` dans le champ **Activate flipping** puisque dans ce cas, l'image regarde dans la bonne direction.

Répétez ces deux derniers paragraphes pour l'événement déplaçant la bave vers la droite. Sélectionnez cette fois le bouton **YES** dans le champ **Activate flipping** car nous voulons que la bave regarde vers la droite quand elle va à droite..

Les événements devraient maintenant ressembler à :

![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_moveslimeevent2.png)

Si vous effectuez un test, la bave devrait bien regarder dans la direction de son mouvement.

#Faire en sorte que le joueur tue l'ennemi

Il suffit de faire en sorte que le joueur détruise la bave quand il lui saute dessus. À cet effet,

Ajoutez un événement vide (bouton **Add a new empty event**). La suite du procédé est la même que celui utilisé pour faire disparaître les pièces de monnaie.

Testez la survenue d'une collision en cliquant **Add condition** puis en sélectionnant **Common conditions for all objects > Collision > Collision**. Sélectionnez `Player` pour le premier **Object** et `Slime` pour le second. Confirmer avec **OK**.

La condition étant remplie, il faut encore y ajouter une action avec **Add action**. Sélectionnez **Common action for all objects > Objects > Delete an object** dans la liste de gauche et sélectionnez ensuite `Slime` pour **Object** à droite. Confirmez avec **OK**.

Si nous testons le jeu maintenant, la bave est supprimée dès que le joueur entre en collision avec elle, mais ce n'est pas ce que nous voulons. Nous voulons la supprimer seulement si le joueur lui saute dessus (retombe sur elle).

Pour ce faire, il faut ajouter une condition supplémentaire à l'événement qui vérifie si le joueur est en train de tomber.

Cliquez **Add condition** dans le dernier événement. Sélectionnez **Platform Behavior > is falling** dans la liste de gauche et `Player` pour **Object**. Cliquez **OK** pour confirmer.

Si nous testons le jeu, la bave n'est détruite que lorsqu'elle entre en collision avec le joueur qui est en train de lui tomber dessus, et seulement dans ce cas.

Mais ce n'est pas encore parfait car il n'a pas de poids, il tombe tout simplement sur la bave et la bave disparaît. Faisons en sorte que le joueur puisse sauter encore lorsqu'il tombe sur la bave.

Pour ce faire, ajoutez une action supplémentaire (**Add action**) pour que le joueur puisse sauter à nouveau puis de le faire sauter en simulant une pression sur la touche de saut.

Pour lui permettre de refaire un saut, sélectionnez **Platform behavior > Options > Allow again jumping** dans la liste de droite et `Player` dans le champ **Object**. Cliquez **OK** pour confirmer.

Pour le faire sauter « automatiquement », ajoutez une action **Add action** puis sélectionnez **Platform behavior > Controls > Simulate jump key press** à gauche et `Player` dans le champ **Object** à droite. Confirmez avec **OK**.

À ce stade, l'événement devrait ressembler à :

![](/gdevelop5/tutorials/platform-game/gd5_platformertutoriual_killtheslime.png)

Si nous démarrons maintenant le jeu et sautons sur la bave, le joueur devrait sauter encore une fois et la bave disparaître.

#Faire que l'ennemi puisse tuer le joueur

Il est temps de faire que l'ennemi puisse tuer le joueur.

Dans l'onglet **NEWSCENE (EVENTS)**, ajoutez un événement vide (bouton **Add a new empty event**) et, dans cet événement, une condition pour vérifier la collision entre le joueur et la bave puis ajoutez une action pour supprimer le joueur.

Évidemment, cela ne fonctionnera pas car nous pourrions juste supprimer le joueur avant de pouvoir supprimer la bave  ou supprimer la bave avant de pouvoir supprimer le joueur. Pour l'éviter, ajoutez une action de plus à notre événement pour vérifier que le joueur n'est pas seulement en collision avec la bave mais que le joueur est également sur le sol.

Si nous lançons maintenant le jeu, nous devrions être en mesure de tuer la bave en lui sautant dessus et la bave devrait pouvoir tuer le joueur si le joueur est au sol au moment de la collision.

La dernière chose que nous avons à faire est de cacher les objets  flèches gauche et droite.

À cet effet, ajoutons un événement vide et la condition `At the beginning of the scene` qui sera déclenchée une seule fois au démarrage de la scène et ajoutera l'action pour `Hide the object left` (cacher l'objet à gauche) et  `Hide the object right` (cacher l'objet à droite).

L'événement final complet de ce tutoriel devrait ressembler à :

![](/gdevelop5/tutorials/platform-game/gd5_platformertutorial_enemycompletevent.png)

Si nous lançons maintenant un aperçu, les objets à gauche et à droite portant une flèche doivent être cachés. La bave doit bouger constamment de gauche à droite. Nous sommes capables de tuer la bave en lui sautant dessus et la bave devrait être capable de tuer le joueur quand elle entre en collision avec lui lorsqu'il est au sol.


##Étape suivante : ajouter des points de contrôle (checkpoints)

Pour l'instant, la «mort» du joueur est un peu brutale : on le supprime. Faisons-le réapparaître au dernier point de contrôle qu'il a traversé. Les points de contrôle sont essentiels dans un jeu de plateforme si vous ne voulez pas forcer le joueur à recommencer depuis le début lorsqu'il meurt.

➡️ LIsez  **[7 checkpoints](/fr/gdevelop5/tutorials/platform-game/7-checkpoints) !**



