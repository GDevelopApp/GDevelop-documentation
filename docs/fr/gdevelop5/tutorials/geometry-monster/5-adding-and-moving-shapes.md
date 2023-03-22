---
title: 5-adding-and-moving-shapes
---
FIXME **Cette page est entièrement traduite. Veuillez cependant corriger toutes les erreurs et les éventuelles imprécisions.**_(supprimer ce paragraphe une fois les modifications terminées)_

⬅️ **[Étape précédente : 4. Commandes pour ordinateurs et téléphones mobiles](/fr/gdevelop5/tutorials/geometry-monster/4-desktop-and-mobile-controls)** ➡️ **[Étape suivante : 6. Détection des collisions](/fr/gdevelop5/tutorials/geometry-monster/6-collision-detection)**

# 5. Ajout et déplacement de formes

Après avoir réussi [l'implementation des déplacements](/fr/gdevelop5/tutorials/geometry-monster/4-desktop-and-mobile-controls) du monstre, il serait bien d'ajouter les formes qui vont tomber et de les déplacer vers le bas de le scène.

!!! note

    Notez qu'au lieu d'avoir un nombre fixe d'objets placés sur la scène, nous les générerons de manière à ce que le jeu soit de type réellement **sans fin**.

Dans le panneau **Level1**, cliquez sur **Add a new object** (Ajouter un nouvel objet) dans le panneau de droite pour ouvrir une fenêtre contextuelle.

![](/gdevelop5/tutorials/geometry-monster/57.png)

Sélectionnez un **Sprite**, comme nous l'avons fait auparavant avec Monster .

![](/gdevelop5/tutorials/geometry-monster/58.png)

Nommez-le `Shape1` et cliquez sur le bouton **ADD AN ANIMATION** (Ajouter une animation).

![](/gdevelop5/tutorials/geometry-monster/59.png)

L'animation de cet objet s'appelle **NewObject1**. Chargez l'image du triangle à partir du disque. Le temps de rendu n'est pas important car c'est la seule image que nous avons, il en va de même pour l'animation en boucle. Cliquez sur **APPLY** (Appliquer) pour l'enregistrer.

![](/gdevelop5/tutorials/geometry-monster/60.png)

Cliquez encore une fois sur **Add a new object**.

![](/gdevelop5/tutorials/geometry-monster/61.png)

Faites de même pour la deuxième forme **Shape2** avec comme nom d'animation **NewObject2**, importez l'image du carré, puis cliquez **APPLY**.

![](/gdevelop5/tutorials/geometry-monster/62.png)

Répétez les mêmes opérations pour le cercle.

![](/gdevelop5/tutorials/geometry-monster/63.png)

Répétez encore une fois pour la dernière et quatrième forme, un pentagone.

![](/gdevelop5/tutorials/geometry-monster/64.png)

Les quatre formes sont maintenant visibles dans la liste **Objects** dans le panneau de droite. Nous allons les regrouper avec l'éditeur de groupes d'objets **Object groups**. Pour ce faire, cliquez sur la quatrième icône située dans le menu en haut à droite, celle qui a trois cubes.

![](/gdevelop5/tutorials/geometry-monster/65.png)

Cette opération ajoute un panneau supplémentaire à droite du panneau **Objects**, intitulé **Object Groups**. Cliquez sur **Group** pour ouvrir une fenêtre contextuelle.

![](/gdevelop5/tutorials/geometry-monster/66.png)

Cliquez sur **Choose an object to add to the group** (Choisir un objet à ajouter au groupe), puis sélectionnez la première forme.

![](/gdevelop5/tutorials/geometry-monster/67.png)

Continuez à ajouter les formes jusqu'à ce que toutes soient répertoriées dans le groupe, puis cliquez sur **APPLY**.

!!! note

    Prenez garde de ne pas ajouter le monstre à ce groupe, uniquement les formes.

![](/gdevelop5/tutorials/geometry-monster/69.png)

Cliquez maintenant sur les trois points verticaux à côté de **Group** dans le panneau **Object Groups**pour ouvrir un menu contextuel et cliquez sur **Remane** (Renommer).

![](/gdevelop5/tutorials/geometry-monster/70.png)

Renommez le groupe `Shapes` (Formes) et confirmez.

![](/gdevelop5/tutorials/geometry-monster/71.png)

Activez le panneau **Level1 (Events)**, cliquez le quatrième bouton dans la barre des menus en haut à droite pour ajouter un commentaire indiquant que cette nouvelle section concerne les formes. Inscrivez `Shapes` dans ce commentaire.

![](/gdevelop5/tutorials/geometry-monster/73.png)

Cliquez ensuite sur le bouton **Add a new event** (Ajouter un nouvel événement) puis ajoutez une condition (**Add condition**) pour ouvrir une fenêtre contextuelle.

![](/gdevelop5/tutorials/geometry-monster/74.png)

Dans l'onglet **OTHER CONDITIONS** (Autres conditions), recherchez **Timers and time** (Temps et chronomètre), puis cliquez pour le sélectionner.

![](/gdevelop5/tutorials/geometry-monster/76.png)

!!! note

    Vous n'avez pas l'onglet **OTHER CONDITIONS** ? Pas de panique ! Allez dans les préférences de GDevelop (cliquez sur le menu **File**, ou **GDevelop 5** sur macOS, puis sur **Preferences**). Activez **Use the new action/condition editor** (Utiliser le nouvel éditeur d'action/condition). Vous pouvez ensuite revenir au didacticiel. ![](/gdevelop5/tutorials/geometry-monster/activate_new_editor.png)

Ensuite, dans la liste déroulante, sélectionnez **Value of a scene timer** (Valeur d'un chronomètre de scène) et entrez deux valeurs. La première est `1,3` dans le champ **Time in seconds** (Temps en secondes) qui spécifie la durée de la minuterie en secondes. Autrement dit, toutes les 1,3 secondes, nous déposons une nouvelle forme sur la scène.

Le deuxième est le nom de la minuterie **Timer's name** que vous appelez `"ShapeCreation"`, puis cliquez sur **OK** lorsque vous avez entré ces deux valeurs.

![](/gdevelop5/tutorials/geometry-monster/77_5.png)

Maintenant que la condition est définie, ajoutons l'action en cliquant sur **Add action**:.

![](/gdevelop5/tutorials/geometry-monster/79.png)

Cliquez sur **Other actions** (Autres actions).

![](/gdevelop5/tutorials/geometry-monster/80.png)

Recherchez ensuite **Create an object from its name** (Créer un objet à partir de son nom) qui se trouve dans la liste déroulante **Non-objects and other actions** (Non-objets et autres actions).

![](/gdevelop5/tutorials/geometry-monster/81.png)

Dans le panneau de droite, recherchez le groupe **Shapes** et cliquez-lui dessus.

![](/gdevelop5/tutorials/geometry-monster/82.png)

Les trois valeurs que nous devons spécifier sont : **Text representing the name of the object to create** (Texte représentant le nom de l'objet à créer), **X position** et **Y position**. La première est `"Shape"+ ToString (RandomInRange(1,4))`, de sorte que chaque fois qu'un nouvel objet est créé, ce sera l'une des quatre formes disponibles choisie au hasard.

La position X est `RandomInRange(80,640-80)` - ce qui signifie que nous choisissons une position aléatoire entre 80 et 560 pixels. Pourquoi ces valeurs spécifiques ? Pour nous assurer que les formes sont entièrement restituées sur la scène et ne soient pas partiellement découpées si elles sont rendues sur l'un des bords de l'écran.

La position Y est `-100`, donc la nouvelle forme apparaît au-dessus de la zone visible, puis descend. Cela semble plus naturel que de la faire apparaître directement dans la zone de jeu.

![](/gdevelop5/tutorials/geometry-monster/83.png)

!!! note

    Un peu perdu au sujet des positions sur l'écran ? Si vous déplacez votre curseur dans l'éditeur de scène, vous verrez en bas à gauche les positions X et Y du curseur. Utile pour se faire une idée de l'emplacement d'un objet tout en travaillant avec des événements comme ceux-ci.

Ajoutons une autre action (**Add action**) à celle que nous venons de créer.

![](/gdevelop5/tutorials/geometry-monster/84.png)

Assurez-vous que les formes **Shapes** sont bien sélectionnées, puis recherchez **Angle** dans le panneau à droite. Cette commancde change l'angle de rotation d'un objet. Dans **Modification's sign** (Signe de la modification), sélectionnez **= (set to)** (= (défini à)) et la valeur `RandomInRange(0, 360)`.

Désormais, chaque fois qu'une nouvelle forme est créée et déposée dans la zone de jeu, elle sera tournée d'une valeur aléatoire comprise entre 0 et 360 degrés. Cela ajoutera de la variété à la façon dont les formes apparaissent dans le jeu.

![](/gdevelop5/tutorials/geometry-monster/85.png)

Allons encore plus loin avec les personnalisations - cliquez à nouveau sur **Add action**.

![](/gdevelop5/tutorials/geometry-monster/86.png)

Cliquez sur **Shapes**, puis recherchez **Scale** (Echelle). Sélectionnez **= (set to)** et entrez `RandomInRange(0.8, 1.6)`. Cela personnalisera encore plus les formes en introduisant une mise à l'échelle aléatoire : certaines d'entre elles seront un peu plus petites que l'original (80% de l'original), et certaines seront plus grandes (160%).

![](/gdevelop5/tutorials/geometry-monster/87.png)

!!! note

    La rotation et la mise à l'échelle sont un excellent moyen de rendre le jeu plus amusant même si nous n'avons encore que quatre formes de base dans le jeu.

Cliquez **Add action** puis **OTHER ACTIONS** (Autres actions). Recherchez **Timers and time** (Temps et chronomètre), et sélectionnez **Start (or reset) a scene timer** "Démarrer (ou réinitialiser) un chronomètre de scène).

![](/gdevelop5/tutorials/geometry-monster/89.png)

Le nom du minuteur étant **ShapeCreation**, chaque fois qu'une nouvelle forme est créée, le minuteur est réinitialisé et nous attendons 1,3 seconde avant qu'une nouvelle forme ne soit créée à nouveau et cela indéfiniment.

![](/gdevelop5/tutorials/geometry-monster/90.png)

Nous avons presque terminé avec les formes. Créez un commentaire intitulé **Move shapes** (Déplacer les formes), cliquez sur **Add a new empty event** (Ajouter un nouvel événement vide), puis sur **Add action**.

![](/gdevelop5/tutorials/geometry-monster/91.png)

Définissez l'action de la manière suivante : sélectionnez **Shapes**, puis à droite **Add a force (angle)** (Ajouter une force (angle)), et réglez **Angle** sur` **90**` et **Speed (in pixels per second)** (Vitesse en (pixels par seconde)) sur `100`.

![](/gdevelop5/tutorials/geometry-monster/92.png)

Ajoutez une autre action : **Shapes**, puis **Rotate** (Rotation) et réglez la vitesse angulaire **Angular speed (in degrees per second)** sur `90`.

![](/gdevelop5/tutorials/geometry-monster/92_2.png)

C'est fait ! Non seulement less formes sont générées de manière aléatoire et indéfinie, elles ont non seulement une rotation et une mise à l'échelle aléatoires au début, mais elles tournent aussi en tombant.

![](/gdevelop5/tutorials/geometry-monster/94.png)

Lancez le jeu pour voir tout cela en action : les formes devraient tomber sur la scène. Mais on dirait que quelque chose manque, non ? Les formes passent sur le monstre. Nous devons donc introduire [la détection des collisions](/gdevelop5/tutorials/geometry-monster/6-collision-detection) pour pouvoir les collecter.

⬅️ **[Étape précédente : 4. Commandes pour ordinateurs et téléphones mobiles](/fr/gdevelop5/tutorials/geometry-monster/4-desktop-and-mobile-controls)** ➡️ **[Étape suivante : 6. Détection des collisions](/fr/gdevelop5/tutorials/geometry-monster/6-collision-detection)**
