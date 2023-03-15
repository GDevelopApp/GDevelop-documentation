---
title: 12-main-menu
---
FIXME **Cette page est entièrement traduite. Veuillez cependant corriger toutes les erreurs et les éventuelles imprécisions.**_(supprimer ce paragraphe une fois les modifications terminées)_

⬅️ **[Étape précédente : 11. Jeu terminé](/fr/gdevelop5/tutorials/geometry-monster/11-game-over)** ➡️ **[Étape suivante : 13. Améliorations !](/fr/gdevelop5/tutorials/geometry-monster/13-juice-it)**

# 12. Menu principal

Pour compléter l'expérience de jeu, nous devrions avoir au moins les écrans du menu principal et du gameplay. Si vous pouvez créer plus d'une scène, en avoir des distinctes concernant les paramètres, les crédits ou toute autre chose ne devrait pas être un problème. Créons donc la scène du menu principal, différente de celle du gameplay.

Cliquez sur le boutoin **Project manager** (Gestionnaire de projet) pour ouvrir le panneau de gauche.

![](/gdevelop5/tutorials/geometry-monster/203.png)

Ensuite, sous la section **Scènes**, où apparaît **Level1**, sélectionnez **Click to add a scene** (Cliquez pour ajouter une scène).

![](/gdevelop5/tutorials/geometry-monster/204.png)

Le nom par défaut de la nouvelle scène est **NewScene**, mais vous pouvez cliquer avec le bouton droit sur les trois points verticaux à droite pour ouvrir le menu contextuel et sélectionner **Rename** (Renommer).

![](/gdevelop5/tutorials/geometry-monster/205.png)

Nommez notre nouvelle scène `MainMenu`.

![](/gdevelop5/tutorials/geometry-monster/206.png)

Cliquez sur l'onglet **MAIN MENU** (Menu principal), puis cliquez avec le bouton droit sur la scène et sélectionnez **Scene properties** (Propriétés de la scène).

![](/gdevelop5/tutorials/geometry-monster/207.png)

Changez la couleur de la scène à l'aide du sélecteur de couleurs : dans notre cas, c'est `#560921`.

![](/gdevelop5/tutorials/geometry-monster/208.png)

Elle devrait ressembler à cela. Cliquez sur le panneau de droite (**Objects**) pour ajouter un nouvel objet et sélectionnez **Sprite**.

![](/gdevelop5/tutorials/geometry-monster/209.png)

Le nom de l'objet est `GameTitle` et celui de l'animation `GeometryMonster`. Ajoutez l'image du titre et cliquez sur **BEHAVIORS** (Comportements).

![](/gdevelop5/tutorials/geometry-monster/211.png)

Cliquez sur le bouton **ADD A BEHAVIOR TO THE OBJECT**.

![](/gdevelop5/tutorials/geometry-monster/212.png)

Cliquez ensuite sur l'onglet **SEARCH NEW BEHAVIORS** ...

![](/gdevelop5/tutorials/geometry-monster/213.png)

... et recherchez et sélectionnez **movement**. Nous utiliserons le mouvement **Sine (or ellipsis) movement** (Mouvement sinusoïdal (ou elliptique)) pour animer l'image du titre, qui ne sera donc pas statique, et tout le menu principal aura meilleure allure.

![](/gdevelop5/tutorials/geometry-monster/214.png)

Cette extension fonctionne de la même manière que les extensions que nous avons déjà utilisées. Installez-le dans le projet.

![](/gdevelop5/tutorials/geometry-monster/215.png)

Parcourez la liste des comportements et cliquez sur le nouveau **Sine movement** (Mouvement sinusoïdal).

![](/gdevelop5/tutorials/geometry-monster/216.png)

Configurez-le comme suit : (**Object name**) a pour nom `GameTitle`, **Amplitude of the movement on the X axis to** (Amplitude du mouvement sur l'axe X) à `20`, **Amplitude of the movement on the Y axis** (Amplitude du mouvement sur l'axe Y) à `10` et **Speed** (Vitesse) à `60` degrés par seconde, puis cliquez sur **APPLY**.

![](/gdevelop5/tutorials/geometry-monster/217.png)

Il est maintenant temps d'ajouter le bouton Démarrer. Créez un nouvel objet (**New object**) de type **Sprite**. Nommez-le `ButtonStart` et l'animation `StartNormal` pour l'animation et l'image du bouton lui-même.

![](/gdevelop5/tutorials/geometry-monster/219.png)

Ajoutez deux autres animations avec leurs images respectives : `StartHover` et `StartPressed`.

![](/gdevelop5/tutorials/geometry-monster/221.png)

Faites glisser le titre sur la scène puis faites de même avec le bouton.

![](/gdevelop5/tutorials/geometry-monster/222_5.png)

Activez l'onglet **MAINMENU (EVENTS)**, et créez un nouvel événement (bouton en haut à droite).

![](/gdevelop5/tutorials/geometry-monster/224.png)

Ajoutez une nouvelle condition : cliquez sur **OTHER CONDITIONS** (Autres conditions), puis sur **The cursor/touch is on an object** (Le curseur/toucher est sur un objet), et affectez-le à `ButtonStart`. N'oubliez pas de sélectionner **Invert condition** (Inverser la condition) pour que cela fonctionne comme nous le voulons.

![](/gdevelop5/tutorials/geometry-monster/226.png)

Ajoutons les animations à ce bouton. Sélectionnez **ButtonStart** dans le panneau de gauche, cliquez sur **Change the animation (by name)** (Modifier l'animation (par son nom)) dans celui du milieu et entrez `StartNormal` dans le panneau de droite.

![](/gdevelop5/tutorials/geometry-monster/227.png)

Ajoutez une nouvelle condition.

![](/gdevelop5/tutorials/geometry-monster/228.png)

Dans le panneau **OTHER CONDITIONS**, sélectionnnez **The cursor/touch is on an object** entrez `ButtonStart`.

![](/gdevelop5/tutorials/geometry-monster/230.png)

Répétez ces étapes pour **Change the animation (by name)** et entrez `"StartHover"`.

![](/gdevelop5/tutorials/geometry-monster/231.png)

Créez un sous-événement (bouton **Add a sub-event...**), ajoutez la condition **Mouse button pressed or touch held** (Bouton de la souris enfoncé ou touché maintenu), le bouton à tester (**Button to test**) est **Left (primary)** (Gauche (principal)).

![](/gdevelop5/tutorials/geometry-monster/232.png)

Maintenant **ButtonStart**, **Change the animation (by name)**, `"StartPressed"` ...

![](/gdevelop5/tutorials/geometry-monster/232_1.png)

... et **Mouse button released**, **Left (primary)**.

![](/gdevelop5/tutorials/geometry-monster/232_2.png)

L'action que ce bouton va effectuer consiste à changer de scène pour passer à celle du jeu proprement dit. Recherchez **Change the scene** (Changer la scène), puis sélectionnez `"Level1"`.

![](/gdevelop5/tutorials/geometry-monster/233.png)

Lancez le jeu et voyez si le menu principal se comporte comme prévu (titre en vol stationnaire, bouton Démarrer fonctionnel), et le gameplay réel est lancé après avoir cliqué sur le bouton.

![](/gdevelop5/tutorials/geometry-monster/234.png)

Puisque nous savons maintenant comment passer d'une scène à l'autre, faisons-le pour le bouton Réessayer que nous avons créé plus tôt, mais pour lequel nous n'avons pas encore implémenté l'action réelle. Cliquez sur l'onglet **Level1 (Events)** et **Add condition**.

![](/gdevelop5/tutorials/geometry-monster/235.png)

Cliquez sur **OTHER CONDITIONS**, **The cursor/touch is on an object**, puis spécifiez l'objet `ButtonTryAgain`, activez **Invert condition** et finalement pressez **OK**.

![](/gdevelop5/tutorials/geometry-monster/236.png)

Maintenant ajoutez une action : **ButtonTryAgain**, **Change the animation (by name)**, et `"TryAgainNormal"`.

![](/gdevelop5/tutorials/geometry-monster/236_1.png)

Répétez pour `"TryAgainHover"`.

![](/gdevelop5/tutorials/geometry-monster/237.png)

Créez un sous-événement et sa condition. Sélectionnez le **ButtonTryAgain** puis **OTHER CONDITIONS**, **Mouse button pressed or touch held**, `Left (primary)`.

![](/gdevelop5/tutorials/geometry-monster/238.png)

Répétez l'action : **ButtonTryAgain**, **Change the animation (by name)**, `"TryAgainPressed"`.

![](/gdevelop5/tutorials/geometry-monster/239.png)

Un autre sous-événement, la condition **Left mouse button was released** puis l'action : **Change the scene** pour `"Level1"`, de sorte que le bouton pour réessayer le jeu redémarre le gameplay.

![](/gdevelop5/tutorials/geometry-monster/240.png)

Maintenant, pour vous laisser un peu faire par vous-même, compte tenu de ce que vous avez appris jusqu'à présent, essayez d'ajouter de l'interactivité au bouton **ButtonMainMenu**, de sorte qu'il changera son animation pour planer une fois survolé, détecter la pression du bouton gauche, changer l'animation en **MainMenuPressed**, détectez le relâchement du bouton et changez la scène en **MainMenu**.

![](/gdevelop5/tutorials/geometry-monster/241.png)

À la fin, cela devrait ressembler à cette capture d'écran ci-dessus.

Ça marche ! La prochaine étape sera consacrée à l'ajout de la touche finale au jeu : [Améliorations !](/fr/gdevelop5/tutorials/geometry-monster/13-juice-it).

![](/gdevelop5/tutorials/geometry-monster/247.png)

⬅️ **[Étape précédente : 11. Jeu terminé](/fr/gdevelop5/tutorials/geometry-monster/11-game-over)** ➡️ **[Étape suivante : 13. Améliorations !](/fr/gdevelop5/tutorials/geometry-monster/13-juice-it)**
