---
title: Comment faire un jeu de casse-briques
---
# Comment faire un jeu de casse-briques

!!! warning

    Avant de commencer ce tutoriel, vous devriez lire [Commencer](/fr/gdevelop5/getting_started) et [Concepts de base pour créer un jeu](/fr/gdevelop5/tutorials/basic-game-making-concepts) pour avoir un aperçu de GDevelop et une compréhension des principaux concepts.

Avec ce tutoriel, vous apprendrez quelques tâches de base dans GDevelop tout en créant un jeu amusant. Comme dans le jeu d'arcade classique Breakout, vous allez créer un ensemble de briques qui peuvent être brisées par une balle rebondissante. Le joueur contrôle la balle avec une raquette - une fois que la balle est tombée, c'est la fin du jeu.

![](/gdevelop5/tutorials/breakout-game/breakout_game_shot.png)


----

## Créer un nouveau jeu

Cliquez sur **Create a new project** sur la page d'accueil.  Faites défiler vers le bas et choisissez un dossier pour votre projet, puis sélectionnez **Empty game**.

## Ajouter des ressources de jeu

!!! tip

    Vous rencontrerez souvent le terme " ressources" lorsque vous travaillerez avec GDevelop. En langage de développement de jeux vidéo, les _ressources_ sont les fichiers qui constituent le contenu du jeu - des choses comme les personnages, les plateformes, les fichiers audio, etc. 

Pour un jeu de casse-briques, vous aurez besoin des ressources suivantes :

  * Fichier image d'une balle
  * Fichier image d'une raquette
  * Fichier image d'une barrière
  * Fichiers d'images de différentes briques

Téléchargez-les en cliquant sur le lien ci-dessous et extrayez les fichiers dans votre dossier de projet. (Merci à Eric Matyas de soundimage.org pour l'image de la barrière !)
http://www.wiki.compilgames.net/lib/exe/fetch.php/gdevelop5/tutorials/breakout-game/breakout-images.zip 


----

## Ajouter une nouvelle scène

Les _scènes_ sont les écrans de votre jeu. Par exemple, les différents niveaux d'un jeu sont souvent créés comme des scènes différentes, tout comme les menus de démarrage ou de pause.

Les scènes contiennent des _objets_ affichés à l'écran en tant que contenu du jeu. Chaque objet que vous placez sur une scène est appelé une _instance_. Votre jeu de casse-briques aura plusieurs instances de l'objet brique sur une scène de niveau de jeu. Les scènes contiennent également des _événements_ - des actions qui se produisent dans des conditions spécifiques - pour animer la scène.

Pour ajouter une nouvelle scène :

  - Dans le panneau **Project** sur la gauche, cliquez sur **+** pour ajouter une scène.

![](/gdevelop5/tutorials/breakout-game/newscene.jpg)

  - Une nouvelle scène est ajoutée à la liste. Cliquez sur **NewScene** pour l'ouvrir.

![](/gdevelop5/tutorials/breakout-game/blank_scene.jpg)


----

## Créer l'objet raquette
Commencez par ajouter la raquette à la scène. Le joueur déplace cette raquette en ligne droite vers la gauche et vers la droite afin de faire rebondir la balle et d'éviter qu'elle ne tombe hors du jeu.

  - Dans le panneau **Objects** sur la droite, cliquez sur **+** pour ajouter un objet.

![](/gdevelop5/tutorials/breakout-game/add-object.jpg)

Une fenêtre apparaîtra, affichant les différents types d'objets que vous pouvez ajouter. Chaque type d'objet possède son propre ensemble de caractéristiques.

![](/gdevelop5/tutorials/object_types.jpg)

  - Pour la raquette, vous avez besoin du type d'objet Sprite. Cliquez sur **Sprite**. 
!!! tip

    Les _Sprites_ sont des objets animés qui sont utilisés pour de nombreux éléments de jeu courants (joueurs, plateformes, ennemis, briques, etc.).

Le nouvel objet est ajouté à votre scène et la boîte de dialogue de l'éditeur d'objet s'ouvre.

![](/gdevelop5/tutorials/empty_object_editor.jpg)

Pour l'instant, votre objet sprite n'a pas d'animations, ni d'images associées. 

  - Cliquez sur **+** pour ajouter une animation.
  - Cliquez sur **+** dans la vignette vierge pour ajouter une image à l'animation.
  - Sélectionnez l'image appelée "paddle.png" dans votre dossier de projet et cliquez sur **Ouvrir**. L'image est ajoutée à l'objet.

![](/gdevelop5/tutorials/paddle_animation.jpg)


  - Dans le champ **Object Name**, tapez **Paddle** pour renommer votre objet.

  - Cliquez sur **Apply** pour enregistrer et fermer l'éditeur. 

!!! warning

    Les noms d'objets sont sensibles à la casse, tout comme les autres éléments de GDevelop. Soyez cohérent dans votre dénomination pour éviter les erreurs fréquentes comme taper "Paddle" quand vous voulez dire "paddle". Il en va de même pour les noms d'animation comme "Run" ou "run" - peu importe la convention de nommage que vous utilisez tant que vous êtes cohérent. 


----

### Ajouter l'objet raquette à la scène

Pour afficher la raquette dans votre jeu, vous devez l'ajouter à votre scène. Comme une seule raquette est nécessaire, on l'appelle une instance _unique_. D'autres objets, comme les briques, auront plusieurs instances dans votre scène.

  - Pour ajouter la raquette à la scène, cliquez et faites-la glisser du panneau **Objets** vers la scène. Placez-la près du fond.

![](/gdevelop5/tutorials/paddle_drag.gif)

----

## Créer l'objet barrière

Ensuite, vous ajouterez une barrière visuelle qui apparaîtra pour empêcher la balle de rebondir sur l'écran. La barrière sera faite avec un sprite en mosaïque. Les sprites en mosaïque sont des objets répétables et évolutifs, utiles pour créer des plateformes, des murs et d'autres objets inanimés.

Pour créer l'objet barrière :

  - Dans le panneau **Objects** à droite, cliquez sur **+** pour ajouter un objet.
  - Cliquez sur **Tiled Sprite**.
  - Dans la boîte de dialogue **Object Editor**, cliquez sur **+** pour ajouter une animation.
  - Cliquez sur **+** dans la vignette vierge pour ajouter une image.
  - Sélectionnez "barrier.jpg" dans le dossier de votre projet et cliquez sur **Open**.
  - Dans le champ **Object Name**, renommez votre objet "Barrier".
  - Cliquez sur **Apply** pour enregistrer et fermer l'éditeur d'objet.

----

### Ajouter l'objet barrière à la scène

Vous devrez ajouter trois instances de votre objet barrière à votre scène - une barrière gauche, une barrière droite et une barrière supérieure. La taille par défaut de la fenêtre du jeu est de 800 x 600 pixels, ce qui correspond au contour gris de votre vue de la scène. Créez votre barrière légèrement à l'intérieur de ces limites.

!!! note
    
        Déplacez et redimensionnez les objets avec précision en utilisant le **panneau des propriétés** qui s'ouvre lorsque vous cliquez sur une instance d'objet.
    

  - Glissez et déposez la première instance de la barrière sur la scène.
  - Cliquez sur la barrière. Redimensionnez-la à 15 x 585 avec le panneau Propriétés ou en faisant glisser la poignée en bas à droite. Placez-la sur le côté gauche de l'écran à (15, 15).
  - Créez une barrière correspondante sur le côté droit et positionnez-la à (770,15).
  - Ajoutez une dernière barrière en haut pour relier les deux. Redimensionnez-la à 770 x 15, et positionnez-la à (15, 15).

![](/gdevelop5/tutorials/breakout-game/barriers_added.jpg)

----


## Faire bouger la raquette

Le joueur contrôlera la raquette en utilisant les flèches gauche et droite du clavier. Vous pouvez créer ces contrôles à l'aide d'_événements_ (actions qui se produisent si les conditions sont vraies).

Créez un événement pour lequel si le joueur appuie sur la flèche gauche du clavier, la raquette se déplace vers la gauche :

  - Cliquez sur l'onglet **NewScene (Events)** pour ouvrir l'**Events Editor**.
  - Cliquez sur **Add a new empty event** ![](/gdevelop5/tutorials/breakout-game/empty_event_button.jpg).
  - Cliquez sur **Add condition**.
![](/gdevelop5/tutorials/breakout-game/add-condition.jpg)

  - Cliquez sur **Keyboard > Key pressed**.
![](/gdevelop5/tutorials/breakout-game/keyboard-key-pressed.jpg)

  - Dans le champ **Key**, tapez **Left** et cliquez sur **OK**. Cette condition est vraie si le joueur appuie sur la flèche gauche du clavier.

Vous devez maintenant ajouter une action correspondante à la condition. La raquette doit se déplacer vers la gauche sur un axe horizontal si la condition est remplie. 

!!! tip
    
        Pour déplacer des objets avec une force appliquée, vous devez spécifier un angle. L'image ci-dessous illustre comment GDevelop comprend l'angle de rotation. 
    Sur un axe horizontal, la gauche est de 180°, la droite est de 0°.  
    ![](/gdevelop5/tutorials/breakout-game/angles.png) 

  - Cliquez sur **Add action**.

  - Cliquez sur **Common actions for all objects > Movement > Add a force (angle).**

  - Sélectionnez **Paddle** dans le champ **Object**.

  - Dans le champ **Angle**, tapez **180**.

  - Dans le champ **Speed (in pixels per second)**, tapez **300**.

  - Cliquez sur **Instant**.

  - Cliquez sur **OK**.

![](/{ /gdevelop5/tutorials/breakout-game/add_force_to_paddle.jpg)

!!! tip

    C'est le bon moment pour sauvegarder votre travail. Prenez l'habitude de sauvegarder régulièrement. Vous pouvez appuyer sur **Ctrl+S** pour sauvegarder votre jeu, ou utiliser votre souris et aller sur **File>Save**. 

----


Utilisez la fonction de prévisualisation pour vérifier votre travail. Cliquez sur le bouton **Launch a preview of the scene** ![](/{/gdevelop5/tutorials/breakout-game/preview-button.jpg)

Appuyez sur votre flèche gauche pour déplacer la raquette. Vous verrez que la raquette ne s'arrête pas lorsqu'elle atteint la barrière - elle continue juste hors de l'écran. Vous pouvez y remédier en fermant la fenêtre de prévisualisation et en ajoutant une autre condition au mouvement de la raquette.

Pour ajouter une autre condition pour arrêter la raquette :

  - Dans le même condition, sous votre première condition, cliquez sur **Add condition**.

  - Cliquez sur **Common conditions for all objects > Position > Compare X position of an object**.

  - Dans le champ **Objet**, sélectionnez **Paddle**.

  - Dans le champ **Sign of the test**, sélectionnez **> (greater than)**.

  - Dans le champ **X Position**, saisissez la coordonnée X du côté droit de la barrière gauche. Dans cet exemple, il s'agit de 30.

  - Cliquez sur **OK**.

![](/gdevelop5/tutorials/breakout-game/x_position.jpg)


Prévisualisez à nouveau votre jeu. La raquette doit s'arrêter au moment où elle heurte la barrière de gauche.

Vous devez maintenant créer le même événement pour le côté droit. Essayez-le vous-même avant de lire le processus ci-dessous.

  * Cliquez sur **Add a new empty event**.
  * Cliquez sur **Add condition**.
  * Cliquez sur **Keyboard > Key pressed**.
  * Dans le champ **Key**, tapez **Right**.
  * Cliquez sur **OK**.
----

  * Cliquez sur **Add action**.
  * Cliquez sur **Common actions for all objects > Movement > Add a force (angle).**
  * Dans le champ **Object**, sélectionnez **Paddle**.
  * Dans le champ **Angle**, tapez **0**.
  * Dans le champ **Speed (in pixels per second)**, tapez **300**.
  * Dans le champ **OK**, tapez **OK**.
----

  * Cliquez sur **Add condition**.
  * Cliquez sur **Common conditions for all objects > Position > Compare X position of an object**.
  * Dans le champ **Object**, sélectionnez **Paddle**.
  * Dans le champ **Sign of the test**, sélectionnez **< (less than)**.
  * Dans le champ **X position**, saisissez la coordonnée X du côté gauche de la barrière droite. Dans cet exemple, il s'agit de 770.
  * Cliquez sur **OK**.


Prévisualisez votre jeu pour vous assurer qu'il fonctionne.

!!! tip

     Trouvez-vous que votre raquette passe toujours la barrière de droite ? C'est parce que GDevelop utilise le point le plus haut à gauche d'un objet pour comparer les positions X. Une façon simple de résoudre ce problème est de soustraire la largeur de la raquette de la coordonnée X de votre barrière. Dans notre exemple, la raquette a une largeur de 58 px, donc la nouvelle position X pour arrêter la raquette sur le côté droit devrait être **< 712** (770 - 58). Modifiez-la maintenant. 


----


## Ajouter des commentaires dans l'éditeur d'événements
Lorsque vous travaillez dans votre éditeur d'événements, il est bon d'ajouter des commentaires pour chaque série d'événements. Vous pourrez trouver et comprendre rapidement vos événements au fur et à mesure de l'évolution de votre jeu si vous les commentez au fur et à mesure de votre travail.

  - Pour ajouter une ligne de commentaire, cliquez sur **Add a comment**. ![](/gdevelop5/tutorials/breakout-game/add_a_comment.jpg)

  - Saisissez le texte de votre commentaire et utilisez la barre bleue à gauche du commentaire pour le faire glisser et le déposer où vous le souhaitez.

![](/gdevelop5/tutorials/breakout-game/moved_comment.jpg)


----


## Bougez la balle - Partie 1

La prochaine étape consistera à ajouter l'objet en forme de balle à la scène. Comme vous l'avez fait avec la raquette, ajoutez l'objet balle comme un sprite en utilisant ball-1.png comme animation. Glissez et déposez la balle juste au-dessus de la raquette dans la scène.

Lorsque vous pensez au jeu, la balle devra faire quatre choses :

  * Se déplacer lorsque le joueur commence le jeu
  * Rebondir lorsqu'elle entre en collision avec la raquette ou avec la barrière
  * Casser les briques et rebondir lorsqu'elle entre en collision avec des briques
  * Fin du jeu quand elle tombe de l'écran sous la raquette


### Mettre la balle en mouvement


Pour faire bouger la balle lorsque le joueur appuie sur la barre d'espace pour démarrer :


   * Dans l'onglet **NewScene (Events)**, cliquez sur **Add a new empty event**.

   * Cliquez sur **Add condition**.

   * Cliquez sur **Keyboard > Key pressed**.

   * Dans le champ **Key**, tapez **Space** et cliquez sur **OK**.


![](/gdevelop5/tutorials/breakout-game/space_bar.jpg)

----

  * Cliquez sur **Add action**.
  * Cliquez sur **Common actions for all objects > Movement > Add a force (angle)**.
  * Dans le champ **Object**, sélectionnez **Ball**.
  * Dans le champ **Angle**, tapez **-45+RandomInRange(-5, 5)**. Cela lancera la balle à un angle de -45 degrés, avec une variation aléatoire supplémentaire de 5 degrés dans les deux sens pour ajouter un défi au joueur.

!!! tip

     Vous n'avez pas besoin de mémoriser toutes les expressions. Vous pouvez ouvrir l' **Éditeur d'expressions** pour vous aider à remplir les champs. ![](/gdevelop5/tutorials/breakout-game/expression_editor_button.jpg) Dans ce cas, vous pourriez taper **-45** dans le champ **Angle** puis cliquer sur **Expression Editor** et rechercher par **Random**. L'expression **Random integer in range** avec une valeur minimale de -5 et une valeur maximale de 5 générera RandomInRange(-5, 5) dans votre champ. Vous pouvez l'utiliser dans votre calcul de vitesse comme vous le souhaitez. 

  * Dans le champ **Speed (in pixels per second)**, tapez **300**. Ajustez cela comme vous le souhaitez ; plus le chiffre est élevé, plus l'objet est rapide.
  * Cliquez sur **Permanent**, car vous voulez que la balle continue à se déplacer tout au long du jeu.
  * Cliquez sur **OK**. 

![](/{ /gdevelop5/tutorials/breakout-game/ball-start-movement.jpg)

C'est le bon moment pour ajouter un commentaire, enregistrer et prévisualiser votre jeu. La balle doit se déplacer lorsque vous appuyez sur la barre d'espace.


----


### Faire rebondir la balle sur la barrière et la raquette

Pour une bonne jouabilité, votre balle doit rebondir de manière réaliste chaque fois qu'elle entre en collision avec la barrière, la raquette ou une brique. GDevelop a un comportement de rebond facile que vous pouvez appliquer à n'importe quel objet pour simuler un rebond réel. 

#### Ajouter un comportement de rebond

Pour ajouter un comportement de rebond à votre objet balle :

  * Dans l'onglet **NewScene**, cliquez sur **⋮** à côté de votre objet "Balle" et cliquez sur **Edit object**.
  * Cliquez sur l'onglet **Behaviors**.
  * Cliquez sur **+** pour ajouter un nouveau comportement à l'objet.
  * Le comportement de rebond n'est pas un comportement installé, vous devez donc le trouver. Cliquez sur l'onglet **Recherche de nouveaux comportements**.
  * Dans la liste du bas, sélectionnez **Bounce** et cliquez sur **Install in project**.
![](/gdevelop5/tutorials/breakout-game/add_bounce_behaviour.png)

  * Vous pouvez maintenant ajouter le nouveau comportement à l'objet. Faites défiler vers le bas, sélectionnez **Bounce**, et cliquez sur **Apply**.

![](/gdevelop5/tutorials/apply_bounce.png)

Votre balle est maintenant prête à rebondir !

----

#### Ajouter les événements de collision

Ensuite, ajoutez des événements pour faire rebondir la balle sur la barrière et la raquette. Il est temps d'ajouter une condition que vous utiliserez beaucoup dans la création de jeux : une condition de _collision_.

Pour créer une condition de collision entre la balle et la barrière :

  * Dans l'onglet **NewScene (Events)**, cliquez sur **Add a new empty event**.
  * Cliquez sur **Add condition**.
  * Cliquez sur **Common conditions for all objects > Collision > Collision**.
  * Dans le premier champ **Object**, sélectionnez **Ball**. Dans le deuxième champ **Object**, sélectionnez **Barrier**.
  * Cliquez sur **OK**.

----

Pour ajouter l'action qui fait que la balle rebondit sur la barrière en cas de collision :

  * Cliquez sur **Add action**.
  * Cliquez sur **Bounce > Bounce > Bounce off another object**.
  * Dans le champ **Object**, sélectionnez **Ball**.
  * Dans le champ **Object to bounce on**, sélectionnez **Barrier**.
  * Cliquez sur **OK**.

![](/gdevelop5/tutorials/breakout-game/add_bounce_action_in_event.png)

----

Vous devez maintenant faire exactement la même chose pour faire rebondir la balle sur la raquette. Créez un nouvel événement, définissez votre condition de collision et ajoutez l'action pour faire rebondir la balle.

!!! tip

     Vous pouvez faire un clic droit et copier une condition ou une action précédente, puis faire un clic droit pour la coller dans un nouvel événement. C'est un moyen facile d'économiser du temps et des efforts, surtout lorsque vous avez affaire à des événements similaires ! 


Enregistrez et prévisualisez votre jeu. Ça commence à devenir amusant...


----

## Ajoutez les briques


Votre balle doit casser quelque chose ! La prochaine étape consistera à ajouter des briques à la scène. Pour en apprendre plus sur les calques externes, ce tutoriel fera apparaître les briques dans différents calques.

Pour ajouter vos briques :

  * Cliquez sur l'onglet **NewScene** pour accéder à l'éditeur de scène.
  * Dans le panneau **Object**, cliquez sur **+** pour ajouter un nouvel objet.
  * Nommez cet objet **Brick**. Donnez-lui trois animations séparées en utilisant les fichiers brick-green.png, brick-red.png et brick-yellow.png de votre dossier de projet. Nommez les animations en conséquence.
  * Cliquez sur **Appliquer**.

![](/gdevelop5/tutorials/brick_colours.png)

----

### Créer des mises en page externes

Vous pouvez utiliser des mises en page externes pour créer différents niveaux avec différentes formations de briques.
 Une _mise en page externe_ est une couche d'objets qui est créée en dehors d'une scène, mais qui peut être insérée dynamiquement à n'importe quel endroit.

Pour créer une mise en page externe :

  * Cliquez sur le bouton **Project manager** en haut à gauche. ![](/{/gdevelop5/tutorials/breakout-game/project_manager.jpg)
  * Cliquez sur **External layouts** et **+** pour ajouter une mise en page externe.
  * Cliquez sur **⋮** à côté de votre nouvelle mise en page et renommez-la **Layout1**.

![](/gdevelop5/tutorials/breakout-game/external_layout_add.png)

  * Cliquez sur **Layout1**. Il vous sera demandé de choisir la scène dans laquelle il sera inclus. Choisissez **NewScene** - c'est la scène où se déroule tout le jeu. Un nouvel onglet s'ouvrira et ressemblera à votre NewScene existante. 
  * Ajoutez des briques dans la configuration de votre choix. Amusez-vous bien avec cette partie - soyez créatif ! 

!!! tip
    
        Pour accélérer les choses, cliquez ou sélectionnez des objets puis maintenez la touche Ctrl enfoncée, cliquez et faites glisser pour reproduire les instances à l'écran. En maintenant Ctrl+Maj enfoncé, les nouvelles instances restent sur le même axe X ou Y.
    
    
    ![](/gdevelop5/tutorials/breakout-game/duplating_objects.gif)
     

  * Créez deux ou plusieurs nouvelles mises en page et nommez-les Layout1, Layout2, etc.

!!! warning

    Suivez la convention d'appellation Layout1, Layout2, etc. Elle sera bientôt liée à une variable. 


----

### Faire apparaître une disposition aléatoire des briques

Pour faire apparaître une disposition aléatoire au début de chaque scène, ajoutez d'abord votre condition :

  * Cliquez sur l'onglet **NewScene (Events)** pour retourner dans votre éditeur d'événements.
  * Cliquez sur le bouton **Add a new empty event** (Ajouter un nouvel événement vide).
  * Cliquez sur le bouton **Add condition**.
  * Cliquez sur **Scene > At the beginning of the scene** (Scène > Au début de la scène). 

 ----

Plutôt que d'attacher des actions à cette condition, vous allez maintenant créer des sous-événements qui se produisent au début de la scène.

Pour commencer, créez une nouvelle variable de scène appelée Random_layout :

  * Cliquez sur un espace vide dans l'événement que vous venez de créer et cliquez sur le bouton **Add a sub-event to the selected event**. ![](/gdevelop5/tutorials/breakout-game/subevent_button.jpg)
  * Dans le nouveau sous-événement, cliquez sur **Add action**.
  * Cliquez sur **Variables > Value of a scene variable**.
  * Dans le champ **Variable**, tapez **Random_layout** pour créer une nouvelle variable de scène.
  * Dans le champ **Modification's sign**, sélectionnez **= (set to)**.
  * Dans le champ **Valeur**, tapez **Random(2)+1**.
  * Cliquez sur **OK**.

![](/gdevelop5/tutorials/breakout-game/modify_scene_variable_value.jpg)

!!! tip
    
         Essayez d'utiliser l'éditeur d'expression pour créer vos expressions. ![](/gdevelop5/tutorials/breakout-game/expression_editor_button.jpg) 
    
    Plus vous jouerez avec les expressions, plus vous comprendrez la logique qui les sous-tend. N'ayez pas peur d'expérimenter ! 

----

Vous allez maintenant associer votre numéro de variable au nom de la mise en page externe Layout. Ce nom déterminera la mise en page qui apparaîtra à l'écran. (C'est pourquoi il était important d'être cohérent en les nommant plus tôt).

Pour ajouter une disposition aléatoire de briques au début de la scène :

  * Ajoutez un autre sous-événement pour le début de la scène, puis cliquez sur **Add action**.
  * Cliquez sur **External layouts > Create objects from an external layout**.
  * Dans le champ **Name of the external layout**, tapez **" Layout " + ToString(Variable(Random_layout))**. Cela ajoutera aléatoirement un des modèles externes à la scène.
  * Cliquez sur **OK**. 

![](/gdevelop5/tutorials/breakout-game/random_layout_selection.jpg)


----

Vous pouvez ajouter de l'intérêt en rendant la couleur de la brique aléatoire au début de chaque scène.

Pour choisir une couleur de brique aléatoire :

  * Ajoutez un autre sous-événement pour le début de la scène, puis cliquez sur **Add action**.
  * Cliquez sur **Variables > Value of a scene variable**.
  * Dans le champ **Variable**, tapez **Brick_colour**.
  * Dans le champ **Signe de modification**, sélectionnez **= (set to)**.
  * Dans le champ **Value**, tapez **Random(2)**.
  * Cliquez sur **OK**.

![](/gdevelop5/tutorials/modify_scene_variable_value2.png)


----

  * Ajoutez un dernier sous-événement pour le début de la scène, puis cliquez sur **Add action**.
  * Cliquez sur **Sprite > Animations et images > Change the animation**.
  * Dans le champ **Object**, sélectionnez **Brick**.
  * Dans le champ **Modification's sign**, sélectionnez **= (set to)**.
  * Dans le champ **Value**, tapez **Variable( Brick_colour)**.
  * Cliquez sur **OK**.

![](/gdevelop5/tutorials/breakout-game/brick_colour_change.jpg)

Enregistrez et prévisualisez votre jeu. Un joueur verra maintenant une disposition externe choisie au hasard avec des briques d'une couleur aléatoire à chaque fois que le jeu sera lancé.


----

## Déplacez la balle - Partie 2
### Faire rebondir la balle sur les briques

Maintenant que vous avez des briques sur la scène, vous voulez que la balle rebondisse sur les briques lorsqu'elle les frappe. Exactement comme vous l'avez fait avec la raquette et la barrière, vous devrez :

  - Créer un nouvel événement.
  - Ajouter une condition de collision entre la balle et la brique.
  - Faire rebondir votre balle loin des briques.

<N'oubliez pas que vous pouvez couper et coller des conditions et des actions à partir d'événements existants !

----

## Détruire les briques

Lorsque la balle rebondit sur les briques, elle devrait les détruire. Détruire un objet dans GDevelop est facile.

  * Dans le même événement de collision, cliquez sur **Add action**.
  * Cliquez sur **Common actions for all objects > Objects > Delete an object**.
  * Dans le champ Objet, sélectionnez **Brick**.
  * Cliquez sur **OK**.

![](/gdevelop5/tutorials/breakout-game/delete_a_brick.jpg)

Enregistrez et prévisualisez votre jeu. Vous devriez être capable de faire rebondir la balle sur la raquette et de détruire les briques. C'est le bon moment pour vérifier à nouveau votre vitesse - voulez-vous que la balle ou la raquette soit plus rapide ou plus lente ? Si oui, jouez avec vos valeurs de vitesse jusqu'à ce que vous soyez satisfait du jeu.

----
## Gagner ou perdre le jeu

Si le joueur casse toutes les briques, le jeu doit le féliciter en lui offrant la possibilité de jouer à nouveau. Si le joueur rate la balle avec la raquette, il doit dire au joueur qu'il a perdu et lui donner la possibilité de jouer à nouveau.

### Créer un message de félicitations

Vous voulez que le message de félicitations soit caché, pour n'apparaître que lorsque toutes les briques ont disparu.

Pour ajouter un objet texte à la scène :

  * Cliquez sur l'onglet **NewScene**.
  * Dans le panneau **Objects**, cliquez sur **+** pour ajouter un nouvel objet et sélectionnez **Text**.
  * Dans le champ **Nom de l'objet**, tapez **Congratulations**.
  * Dans le champ **Text**, tapez un message de félicitations (par exemple : Félicitations ! Vous avez effacé tous les blocs !). Incluez également une ligne disant au joueur "Appuyez sur Entrée pour rejouer".
  * Cliquez sur **Apply**.

![](/gdevelop5/tutorials/breakout-game/congratulations_message.jpg)

  * Glissez et déposez votre objet Congratulations au milieu de la scène.


----

Pour cacher votre objet texte au début de la scène :

  * Cliquez sur **NewScene (Events)**.
  * Allez à l'événement existant contenant la condition "At the beginning of the scene" et cliquez sur **Add action**.
  * Cliquez sur **Common actions for all objects > Visibility > Hide**.
  * Dans le champ **Object**, sélectionnez **Congratulations**.
  * Cliquez sur **OK**.

![](/{ /gdevelop5/tutorials/breakout-game/hide_congratulations.jpg)


----

Pour faire apparaître votre objet texte lorsque toutes les briques sont détruites :

  * Cliquez sur le bouton **Add a new empty event**.
  * Cliquez sur **Add condition**.
  * Cliquez sur **Common conditions for all objects > Objects > Number of objects**.
  * Dans le champ **Object**, sélectionnez **Brick**.
  * Dans le champ **Sign of the test**, sélectionnez **= (égal à)**.
  * Dans le champ **Value**, tapez **0**.
  * Cliquez sur **OK**.

----

S'il y a 0 brique, la balle doit être supprimée et l'objet de félicitations doit être rendu visible.
Ces deux actions sont communes à tous les objets. Ajoutez-les maintenant.

![](/gdevelop5/tutorials/breakout-game/if_no_bricks.png)

----

Vous voulez également donner au joueur la possibilité de commencer une nouvelle partie :

  * Créer un nouveau sous-événement ![](/gdevelop5/tutorials/breakout-game/subevent_button.jpg) à l'événement que vous venez de créer où le nombre d'objets brique est =0.
  * Cliquez sur **Add Condition**.
  * Cliquez sur **Keyboard > Key pressed**.
  * Dans le champ **Key**, tapez **Return**. (N'oubliez pas que le message de félicitations indique au joueur d'appuyer sur la touche Entrée pour recommencer).
  * Cliquez sur **OK**.

----

Ajoutez une action pour revenir à la première scène :

  * Cliquez sur **Add action**.
  * Cliquez sur **Scene > Change the scene**.
  * Dans le champ **Name of the new scene**, tapez **"NewScene"**. N'oubliez pas les guillemets !
  * Cliquez sur **OK**.

Maintenant, lorsque le joueur casse toutes les briques, il recevra un message de félicitations et la possibilité de recommencer !

----

### Créer un message de fin de partie

Si le joueur rate la balle, la partie est terminée. Tout comme si un joueur gagne, il s'agira de rendre un message visible au moment opportun et de donner au joueur la possibilité de rejouer.

Tout d'abord, ajoutez un objet texte à la scène qui restera caché à moins que le joueur ne rate la balle. 

Suivez les mêmes étapes que pour créer l'objet Félicitations à l'écran, mais changez le message en "Game Over". Incluez la ligne concernant le fait de recommencer. Appelez cet objet texte **GameOver**.

Glissez et déposez votre objet GameOver au milieu de la scène. C'est bon s'il est au-dessus de l'objet Congratulations.

----

Ensuite, allez dans l'éditeur d'événements pour cacher votre objet GameOver au début de la scène.

Suivez les mêmes étapes pour cacher l'objet GameOver que pour l'objet Congratulations. Ajoutez-le comme deuxième action à l'événement.
![](/gdevelop5/tutorials/breakout-game/gameover_hide.png)

----

L'étape suivante consistera à faire réapparaître le message si le joueur rate la balle. Pour ce faire, vous avez besoin d'une condition qui vérifie si la position Y de la balle se trouve en dehors de la fenêtre de jeu.

Pour ajouter une condition permettant de vérifier si le joueur a manqué la balle :

  * Cliquez sur le bouton **Add a new empty event**.
  * Cliquez sur le bouton **Add condition**.
  * Cliquer sur **Common conditions for all objects > Position > Compare Y position of an object**.
  * Dans le champ **Object**, sélectionnez **Ball**.
  * Dans le champ **Sign of the test**, sélectionnez **> (greater than)**.
  * Dans le champ **Value**, tapez **600**. (600 est la hauteur de la fenêtre de jeu par défaut, ce qui signifie que la balle est hors écran).
  * Cliquez sur **OK**.

Ajoutez une action correspondante pour rendre l'objet GameOver visible. Vous devez également ajouter un sous-événement qui entraîne la suppression de la balle et le redémarrage du jeu si le joueur appuie sur Entrée. Ajoutez-les maintenant.

![](/gdevelop5/tutorials/breakout-game/player_misses_ball.png)


Enregistrez et prévisualisez votre jeu.

----

#### C'est bon ! Vous avez terminé votre premier jeu de base.

Maintenant que vous avez appris les bases, essayez de changer les vitesses, la disposition des briques, etc. pour le rendre plus difficile. Vous pouvez ajouter un système de points où les points augmentent avec chaque brique détruite, ou vous pouvez faire en sorte que la balle augmente de vitesse avec chaque scène. Comme le comportement de rebondissement dépend de l'angle et de la vitesse de la force appliquée, vous pouvez aussi vous amuser à jouer avec la forme de la raquette, à ajouter des obstacles plus difficiles, etc.

Ce serait également un bon exercice d'ajouter des instructions au début de la scène qui disparaissent lorsque le jeu commence (voir la toute première image de ce tutoriel).

**D'autres tutoriels seront bientôt disponibles, mais en attendant, expérimentez et jouez !