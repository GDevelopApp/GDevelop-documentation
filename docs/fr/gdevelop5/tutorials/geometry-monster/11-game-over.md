---
title: 11-game-over
---
FIXME **Cette page est entièrement traduite. Veuillez cependant corriger toutes les erreurs et les éventuelles imprécisions.**_(supprimer ce paragraphe une fois les modifications terminées)_

⬅️ **[Étape précédente : 10. Plus de vies](/fr/gdevelop5/tutorials/geometry-monster/10-more-lives)** ➡️ **[Étape suivante : 12. Menu principal](/fr/gdevelop5/tutorials/geometry-monster/12-main-menu)**

# 11. Jeu terminé

Avec le monstre ayant [plus de vies](/fr/gdevelop5/tutoriels/geometry-monster/10-more-lives), capable de [détecter les collisions](/fr/gdevelop5/tutorials/geometry-monster/6-collision-detection) et devant faire au danger de [bombes](/fr/gdevelop5/tutoriels/geometry-monster/9-add-bombs) tombant avec les formes, nous arrivons à un point où le joueur peut perdre toutes les vies : qu'advient-il alors ? C'est **Jeu terminé** !

Ajoutons un nouvel objet, qui sera à nouveau un sprite.

![](/gdevelop5/tutorials/geometry-monster/167.png)

Appelez-le `GameOver`, ajoutez l'image respective et enregistrez-la.

![](/gdevelop5/tutorials/geometry-monster/168.png)

Faites-la glisser du panneau des objets sur la scène.

![](/gdevelop5/tutorials/geometry-monster/169.png)

Ajoutez un autre sprite, qui sera le bouton permettant de rejouer. Nommez-le `ButtonTryAgain` (Bouton réessayer) et nommez l'animation `TryAgainNormal` pour l'état du bouton par défaut. Importez l'image.

![](/gdevelop5/tutorials/geometry-monster/171.png)

Ajoutez une deuxième animation appelée `Try AgainHover` (RéessayerSurvol) qui sera utilisée pour indiquer que l'utilisateur a positionné le curseur de la souris sur le bouton.

![](/gdevelop5/tutorials/geometry-monster/172.png)

La troisième et dernière animation est `TryAgainPressed` (RéessayerPressé), montrant que le joueur veut recommencer.

![](/gdevelop5/tutorials/geometry-monster/173.png)

Faites glisser le bouton sur la scène.

![](/gdevelop5/tutorials/geometry-monster/174.png)

Répétez cette opération pour le `ButtonMainMenu` (BoutonMenuPrincipal) qui amènera le lecteur au menu principal que nous allons créer bientôt en tant que scène séparée.

![](/gdevelop5/tutorials/geometry-monster/176.png)

Après **MainMenuNormal**, le deuxième nom de l'animation est `MainMenuHover` (MenuPrincipalSurvol) ...

![](/gdevelop5/tutorials/geometry-monster/177.png)

... et le troisième `MainMenuPressed`, appliquez les modifications.

![](/gdevelop5/tutorials/geometry-monster/178.png)

Faites glisser le bouton du menu principal sur la scène.

![](/gdevelop5/tutorials/geometry-monster/179.png)

Double-cliquez sur le monstre et ajoutez-lui une deuxième animation (bouton **ADD AN ANIMATION**).

![](/gdevelop5/tutorials/geometry-monster/180.png)

C'est l'animation `MonsterDead` qui sera utilisée lorsque le monstre est à court de vies disponibles.

![](/gdevelop5/tutorials/geometry-monster/181.png)

Créez un commentaire `Health` dans le panneau de l'onglet **Level1 (Events)**.

![](/gdevelop5/tutorials/geometry-monster/182.png)

Ajoutez ensuite un nouvel événement avec une nouvelle condition.

![](/gdevelop5/tutorials/geometry-monster/183.png)

Sélectionnez **Monster**, puis **Is just damaged** (Vient juste d'être endommagé) et **OK**.

![](/gdevelop5/tutorials/geometry-monster/184.png)

!!! note

    Cette condition **Is just damaged** se trouve ici car elle fait partie du comportement **Health** que nous avions précédemment ajouté à l'objet.

Cliquez ensuite sur **Life**, **Change the animation (by name)** (Changer l'animation (par son nom), entrez `"Vie" +` dans le champ **Animation name**, puis cliquez sur le bouton **ABC** à droite. Choisissez **Conversion**, puis **Nombre \> Text** (parce que nous voulons transformer la santé du joueur, qui est un nombre, en un texte qui sera utilisé pour choisir l'animation à afficher).

![](/gdevelop5/tutorials/geometry-monster/185_1.png)

Dans la fenêtre contextuelle, cliquez sur le bouton **123** ...

![](/gdevelop5/tutorials/geometry-monster/185_2.png)

... puis choisissez **Health**.

![](/gdevelop5/tutorials/geometry-monster/185_3.png)

Vous serez ensuite invité à entrer le nom de l'objet et le comportement (qui est automatiquement rempli pour vous après avoir sélectionné l'objet).

![](/gdevelop5/tutorials/geometry-monster/185_4.png)

Optez pour **Monster**. **Health** est automatiquement écrit dans le deuxième champ. Cliquez sur **APPLY**.

![](/gdevelop5/tutorials/geometry-monster/185_5.png)

!!! note

    Il est possible d'avoir plusieurs comportements de même nature pour un objet ! Par exemple, un énorme vaisseau spatial dans un jeu de tir peut avoir plusieurs comportements de santé, correspondant à différentes parties du vaisseau. En général cependant, un seul comportement suffit !

GDevelop vous présente la fonction **Monster.Health::Health()** qui retourne la variable de santé. Cette expression sera convertie en texte.

![](/gdevelop5/tutorials/geometry-monster/185_6.png)

!!! note

    Confus par la notation `Monster.Health::Health()` ? Le premier **Health** est le nom du comportement, tandis que le second **Health** correspond à la fonction à appeler sur le comportement. 

La valeur finale de **Animation name** sera `"Life" + ToString (Monster.Health::Health())`.

![](/gdevelop5/tutorials/geometry-monster/185_7.png)

!!! note

    La fonction **ToString()** est importante, car elle convertit la valeur de la santé (un nombre) en un texte. Sinon, GDevelop essaiera d'ajouter un texte à un nombre, ce qui n'a pas de sens. 

De retour à **Monster**, recherchez l'action **Flash (blink)** (Flash (clignotement)), puis réglez la durée du clignotement sur `1,5` secondes, et cliquez **OK**.

![](/gdevelop5/tutorials/geometry-monster/186.png)

Sous le commentaire **Health**, ajoutez une autre condition.

![](/gdevelop5/tutorials/geometry-monster/187.png)

Sélectionnez **Monster**, puis **Is dead** (Est mort), et **OK**.

![](/gdevelop5/tutorials/geometry-monster/188.png)

!!! note

    Il s'agit là encore d'une condition fournie par le comportement **Health**.

Cliquez **Add action**. Sélectionnez **Life**, **Change the animation (by name)** (Changer l'animation (par son nom)), puis `"Life0"`. Ainsi, quand le monstre meurt, l'image de vie montre qu'il n'y a plus de cœurs disponibles.

![](/gdevelop5/tutorials/geometry-monster/189.png)

Ajoutez encore une autre action, cette fois pour **Monster**, puis **Change the animation (by name)**, et **MonsterDead**. Cela montre l'image du monstre lorsqu'il est à court de vies.

![](/gdevelop5/tutorials/geometry-monster/190.png)

L'action suivante dont nous avons besoin consiste à supprimer le groupe **Shapes** en en activant **Delete an object** (Supprimer un objet) ...

![](/gdevelop5/tutorials/geometry-monster/191.png)

... et faire de même avec **Obstacle**.

![](/gdevelop5/tutorials/geometry-monster/192.png)

Sélectionnez ensuite le sprite **GameOver** et affichez-le à l'écran avec **Show**.

![](/gdevelop5/tutorials/geometry-monster/193.png)

Faites de même avec le sprite **ButtonTryAgain** ...

![](/gdevelop5/tutorials/geometry-monster/194.png)

... et le sprite **ButtonMainMenu**.

Tous ces sprites seront affichés en fin de partie, mais nous devons les cacher au début du jeu.

![](/gdevelop5/tutorials/geometry-monster/195.png)

Créez un nouveau commentaire appelé **Game Over**, un nouvel événement et ajoutez-y une condition.

![](/gdevelop5/tutorials/geometry-monster/196.png)

Recherchez **At the beginning of the scene** (Au début de la scène).

![](/gdevelop5/tutorials/geometry-monster/198.png)

Créez ensuite une action où **Hide** (Masquer) est appliqué à l'objet **GameOver**.

![](/gdevelop5/tutorials/geometry-monster/199.png)

Faites de même pour le sprite **ButtonTryAgain** ...

![](/gdevelop5/tutorials/geometry-monster/200.png)

... et pour le sprite **ButtonMainMenu**.

![](/gdevelop5/tutorials/geometry-monster/201.png)

De cette façon, lorsque vous lancez le jeu et perdez toutes vos vies, les cœurs sont presque entièrement transparents, les formes et les bombes disparaissent, l'animation de Monster devient inerte et le message **"Game Over"** est affiché avec le bouton avec une maison et le bouton Réessayez.

![](/gdevelop5/tutorials/geometry-monster/202.png)

Le gameplay lui-même est terminé, mais nous aimerions ajouter plus de possibilités dans le jeu. Il serait bien d'introduire plus de scènes dans le jeu en ayant un [Menu principal](/fr/gdevelop5/tutorials/geometry-monster/12-main-menu) au début, et permettre au joueur de démarrer le jeu par lui-même.

⬅️ **[Étape précédente : 10. Plus de vies](/fr/gdevelop5/tutorials/geometry-monster/10-more-lives)** ➡️ **[Étape suivante : 12. Menu principal](/fr/gdevelop5/tutorials/geometry-monster/12-main-menu)**
