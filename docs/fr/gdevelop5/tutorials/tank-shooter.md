---
title: tank-shooter
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**  
*(remove this paragraph once the translation is finished)*

##Tirs sur tanks – Tutoriel pour débutant

Ce tutoriel vous introduit à l’utilisation de GDevelop : vous allez créer un jeu très simple, avec des ennemis qui se déplacent vers le joueur, celui-ci pouvant tirer dessus afin qu'ils explosent au contact des missiles. ![](/gdevelop5/tutorials/beginner-tutorial-screenshot.png)

Pour obtenir une vue d'ensemble du logiciel, je recommande de commencer par lire la page [](/fr/gdevelop5/getting_started).

### Télécharger GDevelop

Si vous n'avez pas encore GDevelop, téléchargez-le sur le site officiel : [gdevelop-app.com](http://gdevelop-app.com)

Téléchargez toujours GDevelop à partir de cette page pour être sûr d'avoir la dernière version. Une fois que GDevelop est installé et lancé, la page de démarrage est affichée : ![](/gdevelop5/start_page.png)

### Télécharger les sources

Vous pouvez télécharger le projet terminé ![](/gdevelop5/tutorials/beginner-tutorial.zip) afin de voir comment il est fait au cas où vous seriez bloqué ou ne comprendriez pas quelque chose.

### Créer un nouveau projet

Cliquez sur **Create a new project** sur la page d'accueil.

Ensuite, vous avez le choix entre créer un nouveau projet à partir d'un modèle ou créer un projet vide. ![](/gdevelop5/create-new-project-window.png)

Nous avons besoin d'un projet vide, mais avant de faire ce choix, nous devons définir un dossier en bas de la page dans lequel notre projet sera stocké.

![](/gdevelop5/tutorials/select-project-folder.png)

Pour choisir un emplacement personnalisé, nous devons cliquer sur le bouton **Choose folder** et parcourir le système de fichiers de notre ordinateur pour trouver le dossier que nous voulons utiliser. ![](/gdevelop5/choose-folder-button.png)

Une fois que vous avez sélectionné un dossier, cliquez sur l'option **Empty game** dans la liste. ![](/gdevelop5/empty-game-button.png)

### Créer une nouvelle scène

La première chose que nous avons à faire est créer une nouvelle scène. Cliquez sur le bouton dans le gestionnaire de projet : ![](/gdevelop5/tutorials/add-scene-button.png)

Ensuite, cliquez sur la nouvelle scène **NewScene** que nous venons de créer, afin d'ouvrir l'éditeur de scène.

### Obtenir les images et ressources

Avant de continuer, nous avons besoin de quelques images pour notre jeu. Vous pouvez les télécharger ici : [Télécharger les images](http://www.compilgames.net/dl/BeginnerTutorial2Images.zip)

Une fois que vous avez téléchargé ce fichier, extrayez son contenu dans le dossier dans lequel vous avez créé le projet.

### Créer la tourelle du joueur

Le joueur contrôlera une tourelle pour tirer sur les ennemis. Dans l'éditeur d'objets, cliquez sur le bouton pour ajouter un nouvel objet. ![](/gdevelop5/tutorials/add_new_object.png) Une fenêtre demande le type d'objet à créer : ![](/gdevelop5/objects/object-types.png)

Nous avons besoin d'un objet **Sprite**, donc choisissez ce type dans la liste. Ensuite, le panneau de propriétés de l'objet devrait apparaitre par défaut. Si ce n'est pas le cas, faites un clic droit sur le **NewObject** dans l'éditeur d'objets et sélectionnez **Edit object** dans le menu.

Ensuite, nous devons ajouter une animation à l'objet, donc cliquez sur le bouton correspondant dans la fenêtre de propriétés. ![](/gdevelop5/tutorials/add-animation.png)

À présent, vous devriez voir les propriétés d'animation de l'objet. ![](/gdevelop5/objects/animation-properties.png)

Ensuite, nous devons ajouter l'image de la tourelle comme animation. Cliquez sur le gros bouton « plus » et sélectionnez l'image aaguntopdown.png dans le dossier du projet. L'image devrait dès lors être affichée dans la fenêtre. ![](/gdevelop5/tutorials/turret-animation-window.png)

Terminez en cliquant sur **Apply** pour enregistrer.

Ensuite, renommez l'objet si vous ne l'avez pas encore fait. Faites un clic droit sur l'objet tourelle dans l'éditeur d'objets, sélectionnez **Rename** dans le menu et entrez le nom `turret`, afin que nous puissions par la suite désigner l'objet par ce nom. ![](/gdevelop5/tutorials/rename-turret.png)

### Ajouter la tourelle à la scène

Pour ajouter la tourelle à la scène, sélectionnez-la dans l'éditeur d'objets puis cliquez sur l'éditeur de scène. Cela devrait créer une tourelle dans la scène et nous permettre de la sélectionner, la déplacer et la pivoter. ![](/gdevelop5/tutorials/turret-selected-inscene.png)

### Premiers évènements

Nous allons créer les évènements qui vont servir à animer l'ensemble du jeu. D'abord, la tourelle doit se tourner vers le pointeur de la souris.

Allez dans l'éditeur d'évènements en cliquant sur l'onglet des évènements : ![](/gdevelop5/tutorials/scene-events-tab.png)

Ensuite, en haut, cliquez sur le bouton pour créer un nouvel évènement. ![](/gdevelop5/add-event-button.png)

L'évènement est créé, avec une liste vide de conditions (sur la gauche) et une liste vide d'actions (sur la droite). Placez votre souris sur la liste d'actions et cliquez sur **Add action** : ![](/gdevelop5/tutorials/add-action.png)

La première action tournera la tourelle vers la souris : dans la fenêtre suivante, choisissez l'action **Common action for all objects \> Angle \> Rotate toward position**. ![](/gdevelop5/tutorials/rotate-toward-position-action.png) La partie droite de la fenêtre montre alors le nom de l'action ainsi que les paramètres. Définissez la valeur du premier paramètre en cliquant sur le paramètre et en sélectionnant la tourelle parmi les objets disponibles. ![](/gdevelop5/tutorials/select-turret-object-parameter.png) Pour les paramètres suivants, entrez `MouseX()` et `MouseY()` afin que l'objet se tourne vers la position de la souris. Lorsque le jeu sera lancé, ces deux expressions obtiendront les abscisse et ordonnée de la souris. Pour la vitesse angulaire, 0 signifie rotation instantanée et c'est ce que nous voulons ici. Si vous préférez que la tourelle se déplace lentement vers la position de la souris, vous pouvez entrer une petite valeur telle que 100.

Maintenant, les paramètres de cet évènement devraient ressembler à cela : ![](/gdevelop5/tutorials/rotate-toward-pos-event-parameters.png)

Nous avons utilisé comme valeurs des expressions pour obtenir l'abscisse et l'ordonnée de la souris. Vous pouvez trouver d'autres formules dans l'éditeur d'expressions en cliquant sur l'icône bleue à côté des champs de valeur :

![](/gdevelop5/tutorials/platform-game/expression-icon.png)

En cliquant sur l'icône, vous pouvez fouiller toutes les expressions classées par catégories.

![](/gdevelop5/tutorials/platform-game/expression-editor.png)

Pour enregistrer les changements, cliquez sur OK dans le coin en bas à droite de la page.

Nous pouvons lancer un aperçu en cliquant sur le bouton prévu à cet effet en haut. ![](/gdevelop5/preview-button.png)

Si nous le faisons correctement, notre tourelle devrait se tourner vers la position de la souris. ![](/gdevelop5/tutorials/turret-rotate-toward-mouse.png)

### Tirer des missiles avec la tourelle

Le joueur doit pouvoir tirer des missiles sur les ennemis. Nous avons d'abord besoin d'un objet missile : dans la liste d'objets sur la droite, faites un clic droit sur l'objet tourelle et choisissez **Add a new object** ou bien cliquez sur le bouton pour ajouter un nouvel objet. ![](/gdevelop5/tutorials/turret-add-new-object.png) Choisissez **Sprite**, puis ajoutez une animation et choisissez l'image bullet.png, puis nommez l'objet **missile**. Tout comme nous avons fait précédemment pour la tourelle.

Ensuite, nous voudrions créer les missiles lorsque le bouton gauche de la souris est enfoncé. Allez dans l'onglet des évènements, et ajoutez un nouvel évènement de la même façon que nous l'avons fait pour la tourelle. La première action sera une action **Create a new object**, disponible dans la catégorie **Common actions for all objects \> Objects**. ![](/gdevelop5/tutorials/create-object-action.png) Sur le côté droit, le premier paramètre doit être le missile, puisque nous voulons créer un objet missible. Les autres paramètres sont la position de la tourelle : entrez `turret.X()` et `turret.Y()` comme valeurs des 2^(e) et 3^(e) paramètres. ![](/gdevelop5/tutorials/create-object-action-parameters.png)

Il n'est pas nécessaire de préciser un calque (**Layer**) puisque nous n'en avons qu'un seul dans notre jeu. Cliquez sur OK pour disposer l'action.

Ajoutez ensuite une autre action après cette première action. Ne créez pas un autre évènement, cliquez seulement sur **Add action** sous la première action ! ![](/gdevelop5/tutorials/add-second-action.png) Cette fois, choisissez l'action appelée **Common action for all objects \> Movement \> Add a force (angle)**. ![](/gdevelop5/tutorials/add-force-angle-action.png) GDevelop contient un système de forces intégré qui permet de déplacer les objets facilement. Cette action sera utilisée pour déplacer le missile vers la souris lorsqu'il est lancé. Comme premier paramètre, entrez `bullet` afin que GDevelop déplace le missile tout juste créé dans l'action précédente. Comme angle, nous allons utiliser la direction de la tourelle : entrez `turret.Direction()` comme valeur du 2^(e) paramètre. Pour le 3^(e) paramètre, entrez 400 afin que le missile se déplace avec une vitesse de 400 par seconde. Enfin, entrez 1 comme valeur du dernier paramètre, afin que la force soit appliquée au missile de façon constante et que le missile continue de se déplacer après son lancement. ![](/gdevelop5/tutorials/add-force-angle-parameters.png)

Nos deux actions doivent être lancées uniquement lorsque le joueur tire (en enfonçant le bouton gauche de la souris). Pour ce faire, nous devons ajouter une condition à l'évènement : cliquez sur **Add condition** dans l'évènement. ![](/gdevelop5/tutorials/add-condition.png)

Choisissez la condition **Mouse and touch \> Mouse button pressed or touch held**. ![](/gdevelop5/tutorials/mouse-button-pressed-condition.png) Sur le côté droit, cliquez sur **Button to test parameter** et choisissez **Left** dans la liste. ![](/gdevelop5/tutorials/mouse-button-pressed-parameter.png) Enfin, fermez la fenêtre en cliquant sur le bouton OK. La condition est alors ajoutée à l'évènement.

Si vous prévisualisez le jeu maintenant, vous verrez qu'il y a deux problèmes : les missiles sont tirés trop rapidement, et ils apparaissent à l'origine de la tourelle, ce qui n'est pas très réaliste.

Afin de résoudre le premier problème nous allons utiliser un timer. Ajoutez une seconde condition au dernier évènement que nous avons créé. Choisissez la condition Timers and time \> Value of a timer ![](/gdevelop5/tutorials/timer-value-condition.png) Dans la partie droite, entrez 0.25 comme premier paramètre qui représente le temps écoulé en secondes, et "firerate" comme second paramètre, qui est le nom du timer que nous allons utiliser (n'oubliez pas les guillemets doubles autour du nom du timer !). ![](/gdevelop5/tutorials/timer-value-condition-parameters.png)

Nous n'avons cependant pas encore fini, car comme nous voulons tirer des balles toutes les 0.25 secondes, nous avons besoin de remettre à zéro le timer à 0 après avoir atteint 0.25. Nous allons donc ajouter une action Timers and time \> Reset a timer juste en dessous de l'action de mouvement dans le même évènement. ![](/gdevelop5/tutorials/reset-timer-action.png) Entrez le paramètre "firerate", qui est le nom du timer (encore une fois, attention au guillements !). ![](/gdevelop5/tutorials/reset-timer-action-parameter.png) Cette paire de condition et action garantira que les actions utilisées pour tirer la balle ne soient répétées que lorsqu'au moins 0.25 secondes se sont écoulées après la dernière création de balle : ![](/gdevelop5/tutorials/shoot-bullet-event1.png)

Nous devons maintenant nous assurer que les balles sont bien tirées depuis le canon de la tourelle.

Pour ce faire, nous allons ajouter un point personnalisé à notre objet tourelle et créer les balles à partir de ce point.

Pour cela, ouvrons les propriétés de l'objet en cliquant avec le bouton droit de la souris sur l'objet tourelle sur le côté droit et sélectionnons "Edit Object" dans la liste. Cela fait apparaître la fenêtre dans laquelle nous pouvons ajouter des animations à nos objets et nous devrions voir un bouton appelé EDIT POINTS. ![](/gdevelop5/tutorials/edit-point-button.png)

Après avoir cliqué sur le bouton, nous pouvons voir que notre objet a actuellement 2 points par défaut, le point Origin et le point Center. ![](/gdevelop5/tutorials/default-points.png) Nous ne pouvons pas renommer ces points, mais nous pouvons modifier leur position par défaut si nécessaire. Mais notre but est d'ajouter un point de plus à l'objet.

Cliquez sur le bouton d'ajout (symbole plus) pour ajouter un point personnalisé à notre objet tourelle. Nous voyons immédiatement le nouveau point ajouté à la liste avec le nom Point et la position 0,0. Renommons ce point en Canon et fixons la position X à 110 et la position Y à 35 ![](/gdevelop5/tutorials/custom-point-name-position.png)

Maintenant, dans l'aperçu en haut, nous devrions voir que notre point personnalisé est situé à la fin de notre canon ![](/gdevelop5/tutorials/custom-point-preview.png) Nous pouvons maintenant fermer la fenêtre et appliquer les modifications que nous avons apportées.

La seule chose qu'il reste à faire est de dire à GDevelop de tirer les balles depuis la pointe Canon de la tourelle. Donc dans notre action de création de balles, nous devons changer les expressions turret.X() et turret.Y(), en turret.PointX(Canon) et turret.PointY(Canon). Nous pouvons les modifier en cliquant sur les expressions dans l'éditeur. ![](/gdevelop5/tutorials/replace-expression-in-editor.png) N'oubliez pas le C majuscule de Canon car les noms des points sont sensibles à la casse.

Si nous lançons l'aperçu maintenant, nos balles devraient être tirées depuis le canon de la tourelle mais vous remarquerez peut-être que la balle est parfois un peu décalée. Cela est dû au fait que le point d'origine de la balle se trouve dans le coin supérieur gauche. De la même façon que nous l'avons fait avec la pointe du canon de la tourelle, changez la position du point Origin de la balle pour qu'il soit au milieu. ![](/gdevelop5/tutorials/bullet_origin_point.png)

### Création d'ennemis attaquant la tourelle

D'abord, nous devons créer les objets utilisés pour les ennemis : ajoutez un objet à la liste d'objets ( Clic droit sur un objet existant \> Add an object. Choisissez un objet Sprite comme précédemment. ). Nommez le enemy.

Editez l'objet (clic droit dans la liste et sélectionner Edit object from the list) puis ajouter une animation à l'objet et deux images : tank2fr1.png et tank2fr2.png. ![](/gdevelop5/tutorials/enemy-animation.png) Ensuite, modifiez le temps entre les images à 0,05 et changez l'animation en Loop pour répéter l'animation. ![](/gdevelop5/tutorials/enemy-animation-speed.png)

Cliquez sur Apply lorsque vous avez terminé.

### Stop ! Gagnez du temps !

Avant d'aller plus loin, pensez à sauvegarder fréquemment : cliquez sur File\>Save pour sauvegarder votre projet. ![](/gdevelop5/tutorials/save-project.png)

## IA ennemie

Revenons au jeu. Nous voulons que les ennemis se dirigent vers la tourelle : Allez dans l'éditeur d'événements et ajoutez un nouvel événement. Ce que nous voulons, c'est créer un ennemi à chaque seconde : ajoutons une condition Timers and time \> Value of a timer. Entrez 1 dans le premier paramètre et "EnemyCreation" pour le nom du timer. N'oubliez pas les guillemets lorsque vous entrez le nom du timer.

Ajoutons ensuite l'action de créer un objet ennemi : Ajouter une action Common action for all objects \> Objects \> Create an object. Sélectionnez enemy dans le premier paramètre. Pour le deuxième paramètre, la position X du nouvel objet à créer, entrez l'expression Random(800) : ceci renverra un nombre aléatoire entre 0 et 800, de sorte que chaque ennemi que nous créerons aura une position différente lors de sa création. Pour la position Y, entrez -50. Cela créera l'ennemi en dehors de l'écran, de sorte que le joueur n'aura pas l'impression qu'un char ennemi vient d'apparaître de nulle part.

Enfin, ajoutons l'action pour réinitialiser le minuteur ( Timers and time \> Reset a timer avec "EnemyCreation" comme parameter ). Encore une fois, n'oubliez pas les guillemets lorsque vous entrez le nom du timer. À ce stade, notre événement devrait ressembler à ceci : ![](/gdevelop5/tutorials/create-enemy-event.png)

Si nous lançons un aperçu maintenant, nous ne remarquerons probablement rien car l'ennemi est créé en dehors de l'écran. Déplaçons les ennemis vers le joueur. Ajoutez un autre événement sans aucune condition et choisissez l'action Common action for all objects \> Movement \> Add a force to move towards an object. ![](/gdevelop5/tutorials/move-object-toward-other-event.png) Sur le côté droit, pour le premier paramètre, sélectionnez enemy, et sélectionnez turret pour le second paramètre. Entrez 150 pixels par seconde pour la vitesse, et l'amortissement (damping) est de 0, car la force sera appliquée en continu. ![](/gdevelop5/tutorials/move-object-toward-another-parameters.png)

Maintenant, si nous lançons un aperçu, nous devrions voir que nos ennemis se déplacent vers la tourelle, mais vous remarquerez peut-être qu'ils ne se tournent pas réellement vers la tourelle, alors faisons quelque chose à ce sujet. Ajoutons une deuxième action après le mouvement, qui est Common action for all objects \> Angle \> Rotate toward position et pour le premier paramètre sur la droite, sélectionnons l'ennemi pendant que nous faisons tourner l'ennemi et pour les positions X et Y, nous allons utiliser une expression pour obtenir le point central de la tourelle et faire tourner les ennemis vers ce point et la vitesse angulaire est de 0, donc elle va tourner immédiatement. ![](/gdevelop5/tutorials/rotate-object-toward-position.png) À ce stade, notre événement ennemi devrait ressembler à ceci : ![](/gdevelop5/tutorials/create-rotate-move-enemies-event.png)

Si nous lançons l'aperçu maintenant, nos ennemis devraient se déplacer et tourner vers la tourelle. ![](/gdevelop5/tutorials/turret-screenshot-enemies-moving.png)

### Ajout d'explosions

Il est temps de détruire les tanks. La première chose que nous voulons faire est de créer une explosion à la place des tanks lorsqu'ils entrent en collision avec la balle. Ajoutons donc un nouvel objet sprite, appelons-le explosion et ajoutons toutes les images à une animation commençant par Explosion_. ![](/gdevelop5/tutorials/select-all-explosion-images.png)

Après avoir ajouté toutes les images à l'animation, réglez le temps entre les images à 0,01 seconde. ![](/gdevelop5/tutorials/explosion-animation-speed.png)

Enregistrez-le en cliquant sur Apply.

Ensuite, nous voulons créer l'explosion lorsque la balle est en collision avec l'ennemi. Ajoutons un nouvel événement vide et ajoutons la condition Common conditions for all objects \> Collision \> Collision ![](/gdevelop5/tutorials/collision-check-event.png) Et sur la droite pour le premier paramètre sélectionner la balle et le second paramètre sélectionner enemy ![](/gdevelop5/tutorials/collision-between-object-condition-parameters.png)

Lorsque c'est fait, ajoutons une action pour créer l'objet d'explosion comme nous avons créé les balles et les ennemis auparavant, mais pour la position X et Y, utilisons l'expression enemy.X() et enemy.Y() qui va obtenir la position X et Y de l'objet ennemi qui est en collision avec la balle. ![](/gdevelop5/tutorials/create-explosion-event-parameters.png)

Enfin, ajoutez l'action après avoir créé l'explosion Common actions for all objects \> Object \> Delete an object et dans la partie droite pour le paramètre sélectionner l'objet enemy puisque nous voulons supprimer l'ennemi. Ajoutez à nouveau la même action, pour supprimer également la balle juste après la suppression de l'ennemi. À ce stade, notre événement devrait ressembler à ceci ![](/gdevelop5/tutorials/enemy-moving-rotating-exploding.png)

Si nous lançons un aperçu maintenant, nous devrions remarquer quelques problèmes. Nos objets explosifs ne sont pas créés exactement dans la position de l'ennemi et une fois qu'il a créé l'objet explosif, il reste dans la scène. Pour résoudre le second problème, il faut supprimer l'objet d'explosion une fois l'animation terminée. Ajoutez un nouvel événement vide et la condition Sprite \> Animations and Images \> Animation finished ![](/gdevelop5/tutorials/animation-finished-event.png) Pour le paramètre de droite, sélectionnez l'objet explosion car nous voulons faire quelque chose si l'animation de l'objet d'explosion est terminée. ![](/gdevelop5/tutorials/check-animation-finished-event-parameter.png) Et ce que nous voulons faire, c'est supprimer l'objet explosion, alors ajoutons ensuite l'action, supprimons l'objet explosion.

Pour résoudre le premier problème, nous devons comprendre quelle est sa cause. Lorsque nous créons l'objet explosion en utilisant les expressions enemy.X() et enemy.Y(), nous créons les objets au point d'origine de l'objet ennemi, qui est le coin supérieur gauche de l'ennemi, et nous créons également les explosions à partir de leur point d'origine, qui est le coin supérieur gauche de l'objet explosion.

Pour résoudre le problème, nous devons changer la position du point d'origine de l'explosion pour qu'il se trouve au milieu de l'objet. Pour modifier l'objet explosion, il suffit de cliquer avec le bouton droit de la souris sur l'objet de l'explosion et de sélectionner "Modifier l'objet" dans la liste. Dans la fenêtre suivante, sélectionnez EDIT POINTS. Ensuite, nous voulons changer la position X et Y du point d'origine à 120 qui est juste au milieu de l'image ![](/gdevelop5/tutorials/change-origin-point-position.png)

Ensuite, ce que nous voulons faire, au lieu de créer l'objet explosion au point d'origine de l'ennemi, nous voulons créer l'objet au point central. Changeons donc l'expression dans l'action de création d'explosion de enemy.X() en enemy.PointX(Centre) et formons enemy.Y() en enemy.PointY(Centre) ![](/gdevelop5/tutorials/create-explosion-new-expression.png)

Si nous lançons un aperçu maintenant, nos ennemis devraient exploser et cela devrait également paraître correct. ![](/gdevelop5/tutorials/turret-screenshot-enemies-are-exploding.png)

### Ajout de nouvelles explosions et d'un Game Over

Jusqu'à présent, le joueur ne pouvait pas mourir. Nous voulons que la tourelle du joueur soit détruite lorsqu'un char ennemi la frappe. D'abord, ajoutez un nouvel événement, et faites comme pour l'événement utilisé pour détruire les ennemis : ajoutez un test de condition pour une collision entre un char et la tourelle. Ensuite, créez une explosion à la position de la tourelle. Enfin, ajoutez une action pour détruire la tourelle : ![](/gdevelop5/tutorials/delete-turret-on-collision-event.png)

Il serait également intéressant d'afficher un texte "Game Over" lorsque la tourelle est détruite : Ajouter un objet à la liste des objets. Cette fois, choisissez un objet Text et nommez-le GameOver. ![](/gdevelop5/tutorials/select-text-object-from-list.png)

Modifiez l'objet en cliquant avec le bouton droit de la souris sur l'objet et sélectionnez Edit object dans la liste. Changeons le texte en Game Over, la couleur du texte en rouge et la taille du texte en 40. ![](/gdevelop5/tutorials/edit-text-object.png) Ensuite, nous pouvons définir une police personnalisée en entrant simplement le chemin de la police. Comme dans ce cas notre police se trouve dans le dossier du projet, il nous suffit d'entrer le nom du fichier de police : ![](/gdevelop5/tutorials/custom-text-font.png)

Enfin, ajoutons l'objet texte à notre scène.

Ce que nous voulons faire ensuite, c'est cacher l'objet texte et l'afficher s'il n'y a pas de tourelle dans la scène, ce qui signifie que la tourelle est détruite. Ajoutons un nouvel événement vide et ajoutons la condition Scene \> At the beginning of the scene ![](/gdevelop5/tutorials/at-the-binning-of-the-scene-condition.png)

Cette condition n'a pas de paramètres car la seule chose qu'elle fait est d'exécuter l'action une seule fois au début de la scène. Ensuite, ajoutez l'action au même événement Common Actions for all objects \> Visibility \> Hide ![](/gdevelop5/tutorials/hide-object-event.png) Pour le paramètre, sélectionnez l'objet GameOver car nous voulons cacher cet objet ![](/gdevelop5/tutorials/hide-object-event-parameter.png)

Maintenant, ce que nous voulons faire, c'est montrer l'objet texte s'il n'y a pas de tourelle dans la scène Ajouter un nouvel événement vide et ajouter la condition Common conditions for all objects \> Objects \> Objects count ![](/gdevelop5/tutorials/objects-count-condition.png)

Pour le premier paramètre sur le côté droit, sélectionnez l'objet tourelle, pour le signe du test, sélectionnez le signe égal et pour la valeur du test, entrez 0 car nous voulons tester si le nombre de tourelles dans la scène est 0. ![](/gdevelop5/tutorials/object-count-condition-parameters.png)

Et ce que nous voulons faire, c'est afficher le texte GameOver s'il n'y a pas de tourelle dans la scène, donc ajouter l'action Common action for all objects \> Visibility \> Show et pour paramètre nous voulons sélectionner l'objet GameOver. ![](/gdevelop5/tutorials/destroy-turret-event.png)

Enfin, un effet intéressant est d'arrêter le jeu et d'afficher Game Over avec un peu de retard. Ajoutez une deuxième condition imers and time \> Value of a timer pour le paramètre de temps entrez 0.1 et pour le paramètre de nom entrez "GameOver". Ensuite, ajoutez une deuxième action : Timers and time \> Change time scale et entrer 0 comme paramètre pour arrêter le jeu et afficher le texte Game Over après 0,1 seconde.

Voici à quoi devraient ressembler tous les événements à ce stade. ![](/gdevelop5/tutorials/all-events.png) Vous pouvez prévisualiser le jeu et vous devriez voir qu'une fois la tourelle détruite, avec un peu de retard, le texte Game Over s'affiche et le jeu est arrêté. ![](/gdevelop5/tutorials/gameover-screenshot.png)

## Optimiser le jeu

Lorsqu'une balle sort de l'écran, nous n'avons plus besoin de cette balle mais nous lui appliquons toujours un mouvement et nous vérifions la collision entre la balle et le char. Chaque ordinateur dispose de ressources limitées, telles que la mémoire et la puissance de traitement, et nous gaspillons ces précieuses ressources dont nous avons besoin pour faire face, sinon notre jeu peut ralentir, s'arrêter et devenir injouable lorsqu'il atteint la limite de l'appareil sur lequel nous jouons. Vous voulez que votre jeu soit jouable sur le plus grand nombre d'appareils possible, vous devez donc toujours optimiser votre jeu et une façon de le faire est de supprimer les objets qui ne sont plus nécessaires dans notre jeu et de limiter ainsi la quantité de mémoire et la puissance de traitement utilisée par le jeu.

Nous pourrions ajouter un événement pour détruire les balles lorsqu'elles sont trop éloignées de la tourelle, c'est assez facile. Mais nous pouvons aussi utiliser un comportement. Un comportement dans GDevelop est l'ajout d'un certain comportement et d'une certaine fonctionnalité à un objet, dans ce cas nous allons ajouter le comportement "Détruire en dehors de l'écran" aux balles pour qu'elles soient détruites en dehors de l'écran.

Faites un clic droit sur l'objet dans la liste d'objets et choisissez Modifier l'objet dans la liste. Dans la fenêtre suivante en haut, cliquez sur l'onglet Behaviours, cet onglet va afficher tous les comportements que nous avons ajoutés à notre objet. Il est maintenant vide.

Cliquez sur le bouton " Add behavior " (ajouter un comportement) ![](/gdevelop5/add-behavior-button.png)

Ensuite, sélectionnez dans la liste le comportement Destroy outside screen ![](/gdevelop5/behaviors/destroy-outside-screen-behavior-inlist.png)

Ensuite, vous allez voir que le comportement est ajouté à la liste. Normalement, si le comportement a des paramètres, il est également affiché ici pour que vous puissiez le modifier, mais ce comportement n'a pas de paramètres car la seule chose qu'il fait est de détruire l'objet lorsqu'il est en dehors de l'écran. Cliquez sur Appliquer et nous avons terminé.

Si vous lancez l'aperçu maintenant, vous ne remarquerez probablement aucune différence car le jeu est très simple et vous utilisez très probablement un appareil avec au moins 2 Go de RAM et un processeur double cœur. Il y a donc beaucoup de ressources pour notre jeu simple, mais au cas où nous créerions des centaines et des milliers de balles que vous êtes libre d'essayer, vous remarquerez peut-être un petit ralentissement au bout d'un moment sans les détruire.

### Add a background

One last thing to make the game good looking is to add a background.

Add a Sprite object, name it background and add the background.jpg image to the object. Next, you can add the object to the scene as usual and make sure it fills the entire scene. To make it easier, you can enable the grid using the button on the top and it should help with positioning the object. ![](/gdevelop5/toggle-grid-button.png) But you may notice the background object cover all the other objects, to solve this problem we need to change the Z-order of the object. While the background object is selected, on the left you should notice the object properties. In case you have closed this tab, you can re-open it using the button on the top. ![](/gdevelop5/object-properties-button.png) We can change all kind of properties here such as the position, angle and size of the object but what we are interested in is the Z-order. ![](/gdevelop5/objects/object-zorder-properties.png) Change the value of the Z-order to a low number, in this case we need a negative number something like - 1. The reason for the negative value is that when we are creating the bullets, enemies and explosions we are creating them at Z-order 0 by default and so we need to position the background below 0 otherwise we won't see anything but the turret in our game. An other way to fix it is to tell GDevelop to position the tanks and explosions and bullets on a higher Z-order so we can position the background at 0 but it is something that you the developer need to decide for your self how you want to do it. Every problem can have number of different solutions.

And we are done. The game is complete and ready to be shared.

### Add comments

So, our game is done and playable but what if you want to share the source with someone else? Let say you are working in a team and someone else would like to make modifications to the game. How that person know where to look for the events of enemies, bullets, the turret? Of course it may sound silly to you as most of the events in GDevelop are self explaining and our game is simple enough to see it through but imagine the situation you have a game made out of hundreds and thousands of events. This is where comments come in handy as we can leave reminders in our game for others and also for our self. Trust me, even though you are the one who made it, in a big complex game, even you won't remember where to find different things especially months later. So always use comments regardless how small or big your project is.

To add comments, you can simply click the add comment button on the top. ![](/gdevelop5/add-comment-button.png) After you should see a yellow box in the events editor, by clicking in the box you can start writing a comment ![](/gdevelop5/tutorials/comment.png)

You can change the position of each event and comment by moving the mouse over the blue edge on the left and drag it up and down. Once you done it, you should have something like this: ![](/gdevelop5/tutorials/all-events-with-comments.png)

### Let's discover GDevelop by yourself

You can browse the other [](/gdevelop5/tutorials) and read the [](/gdevelop5/getting_started) page.

There is also lots of examples and templates bundled with GDevelop and you can find more by visiting: [gametemplates.itch.io](https://gametemplates.itch.io/gdevelop-examples)

And you can also ask questions on the [official forum](http://forum.compilgames.net/)
