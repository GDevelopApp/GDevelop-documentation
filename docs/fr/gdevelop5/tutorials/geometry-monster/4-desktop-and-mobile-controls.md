---
title: 4-desktop-and-mobile-controls
---
FIXME **Cette page est entièrement traduite. Veuillez cependant corriger toutes les erreurs et les éventuelles imprécisions.**_(supprimer ce paragraphe une fois les modifications terminées)_

⬅️ **[Étape précédente : 3. Création du personnage principal](/fr/gdevelop5/tutorials/geometry-monster/3-introducing-main-character)** ➡️ **[Étape suivante : 5. Ajout et déplacement de formes](/fr/gdevelop5/tutorials/geometry-monster/5-adding-and-moving-shapes)**

# 4. Commandes pour ordinateurs et téléphones mobiles

Maintenant que nous avons créer Monster, ce serait bien de pouvoir le contrôler.

Faites glisser le monstre du panneau de droite (contenant les objets) sur la scène et cliquez sur l'onglet **Level1 (Events)** pour passer à l'édition des événements.

![](/gdevelop5/tutorials/geometry-monster/28_5.png)

La liste des événements est videpar défaut – le message contextuel explique que les événements sont composés de **conditions **et d'**actions**.

![](/gdevelop5/tutorials/geometry-monster/30.png)

Dans la partie supérieure droite de l'éditeur sont affichées maintenant quelques icônes. Cliquez sur la troisième à partir de la gauche : un carré bleu clair avec un signe **+** blanc sur fond bleu foncé. Lorsque vous lui passez la souris dessus, l'infobulle indique **Add a new empty event** (Ajouter un nouvel événement vide).

![](/gdevelop5/tutorials/geometry-monster/31.png)

Quand l'événement vide est ajouté, cliquez sur **Add condition** (Ajouter une condition), ce qui ouvre une fenêtre contextuelle.

![](/gdevelop5/tutorials/geometry-monster/32.png)

Dans la fenêtre contextuelle, vous voyez que notre monstre figure dans la liste des objets. Mais, pour le moment, il ne nous intéresse pas. Cliquez sur l'onglet **OTHER CONDITIONS** (Autres conditions) pour développer la liste des options.

![](/gdevelop5/tutorials/geometry-monster/33.png)

!!! note
    
        Vous n'avez pas l'onglet **OTHER CONDITIONS** ? Pas de panique ! Allez dans les préférences de GDevelop (cliquez sur le menu **File**, ou **GDevelop 5** sur macOS, puis sur **Preferences**). Activez **Use the new action/condition editor** (Utiliser le nouvel éditeur d'action/condition). Vous pouvez ensuite revenir au didacticiel.
    
    ![](/gdevelop5/tutorials/geometry-monster/activate_new_editor.png) 

Les conditions incluent entre autres les collisions, les opérations sur les variables, la souris et les commandes tactiles. Cliquez sur l'option **Keyboard** (Clavier) pour développer la liste, puis sélectionnez **Key pressed** (Touche pressée).

![](/gdevelop5/tutorials/geometry-monster/34.png)

Cette condition teste si une touche spécifique a été pressée. Entrez **Left** (Gauche) dans le champ **Key** (Touche), puis cliquez sur **OK**.

![](/gdevelop5/tutorials/geometry-monster/35_5.png)

Revenons maintenant à notre Monster. Cliquez sur **Add an action** (Ajouter une action).

![](/gdevelop5/tutorials/geometry-monster/37.png)

Sélectionnez **Monster** dans la liste de gauche, recherchez puis cliquez **Add a force** (Ajouter une force), puis réglez la vitesse **Speed on X axis** sur `-450` et à `0` pour l'axe Y.

![](/gdevelop5/tutorials/geometry-monster/38.png)

!!! note

    Assurez-vous que l'option **INSTANT** (Instantané) est sélectionnée, car nous voulons que le monstre se déplace uniquement lorsque vous appuyez sur la touche gauche et s'arrête lorsqu'elle est relâchée.

Quand vous avez terminé, cliquez sur **OK** pour confirmer.

GDevelop affiche la version finale de l'événement que nous venons de terminer, avec les conditions à gauche et une action à droite. En langage courant, cela veut dire que lorsque vous appuyez sur la touche gauche, le monstre se déplace horizontalement (en appliquant la force de -450 unités le long de l'Axe X tout en ignorant l'axe Y doté d'une force valant 0) vers le bord gauche de l'écran.

![](/gdevelop5/tutorials/geometry-monster/45.png)

**Félicitations**, le monstre se déplace vers la gauche ! Maintenant, ajoutons le déplacement vers la droite. Essayez de le faire vous-même en suivant exactement les mêmes étapes que vous avez faites pour le mouvement vers la gauche.

![](/gdevelop5/tutorials/geometry-monster/51.png)

Lorsque vous avez terminé le mouvement vers la droite, les deux événements avec leurs conditions et actions devraient maintenant être en place, afin que le monstre puisse se déplacer dans les deux sens - vers la gauche ou vers la droite.

Cliquez sur le bouton **Add a comment** (Ajouter un commentaire) dans la barre des outils pour faire apparaître un champ supplémentaire.

![](/gdevelop5/tutorials/geometry-monster/52.png)

Faites-le glisser en haut des deux événements (avec la souris sur la barre bleue à gauche).

![](/gdevelop5/tutorials/geometry-monster/53.png)

Entrez ensuite le commentaire `Monster`. Ce commentaire nous permet clairement voir à qui s'adresse ces commandes quand nous avons beaucoup d'événements dans la liste.

Il nous faut maintenant limiter le mouvement du monstre à la partie visible de l'écran, de manière à ce qu'il ne se déplace pas à l'extérieur de celui-ci lorsque nous appuyons sur les touches du clavier.

![](/gdevelop5/tutorials/geometry-monster/54.png)

Cliquez sur l'onglet **Level1** pour revenir dans la fenêtre de configuration de la scène et double-cliquez **Monster** dans la liste de droite.

![](/gdevelop5/tutorials/geometry-monster/54_1.png)

Cliquez l'onglet **BEHAVIORS** (Comportements) dans la fenêtre qui s'ouvre.

![](/gdevelop5/tutorials/geometry-monster/54_2.png)

Puis ajouter un comportement à l'objet en cliquant **ADD A BEHAVIOR TO THE OBJECT** dans la nouvelle fenêtre.

![](/gdevelop5/tutorials/geometry-monster/54_3.png)

Cliquez sur l'onglet **SEARCH NEW BEHAVIORS** (Rechercher nouveaux comportements) dans la nouvelle fenêtre.

![](/gdevelop5/tutorials/geometry-monster/54_4.png)

Sélectionnez **Screen** (Écran) dans la liste des comportements disponibles.

![](/gdevelop5/tutorials/geometry-monster/54_5.png)

Cliquez sur le comportement personnalisé **Stay On Screen** (Rester sur l'écran) que nous allons utiliser pour le monstre.

![](/gdevelop5/tutorials/geometry-monster/54_6.png)

Installez-le dans notre projet (**INSTALL IN PROJECT**). Il sera ainsi disponible pour une utilisation ultérieure.

![](/gdevelop5/tutorials/geometry-monster/54_7.png)

Sélectionnez-le ensuite dans la liste.

![](/gdevelop5/tutorials/geometry-monster/54_8.png)

Entrez `133` pour la marge de droite (dans **Right margin, in pixels**).Cette valeur correspond à la largeur du monstre (en pixels), de manière à ce qu'il ne sorte pas de l'écran vers la droite (son origine se trouve dans la partie supérieure gauche du sprite), puis cliquez sur **APPLY**.

![](/gdevelop5/tutorials/geometry-monster/54_9.png)

Dans la barre d'outils (en haut à droite), cliquez sur le premier bouton – **Launch a preview of the scene** (Lancer un aperçu de la scène).

![](/gdevelop5/tutorials/geometry-monster/55.png)

Si tout à été fait correctement , l'aperçu du jeu Geometry Monster est lancé, et vous pouvez déjà contrôler le personnage principal !

![](/gdevelop5/tutorials/geometry-monster/56.png)

Maintenant que nous avons des commandes pour un ordinateur (déplacer le monstre avec le clavier), il serait génial d'ajouter la possibilité de le déplacer avec la souris ou avec les doigts sur un écran tactile. Le jeu sera plus facile à jouer avec la souris, et il sera également jouable sur un mobile.

Cliquez sur l'onglet **Level1 (Events)** puis sur le bouton sur **Add a new empty event** et ajoutez une condition (**(Add condition**).

![](/gdevelop5/tutorials/geometry-monster/56_1.png)

Dans l'onglet **OTHER CONDITIONS**, Recherchez **Mouse and touch** (Souris et touché) puis **Mouse button pressed or touch held** (Bouton de la souris enfoncé ou appuyé de manière prolongée), et le bouton à tester (**Button to test**) sera **Left (primary)** (Gauche (principal)).

![](/gdevelop5/tutorials/geometry-monster/56_2.png)

Ajoutez maintenant une sous-condition en cliquant dans le quatrième bouton de la barre d'outils en haut à droite.

![](/gdevelop5/tutorials/geometry-monster/56_3.png)

Sélectionnez **Monster**, puis **"Compare X position of an object** (Comparer la position X d'un objet) et entrez `> (greater than)` (supérieur à) pour **Sign of the test** (Signe du test) et `MouseX() + 5` pour la **Position X**.

* `MouseX ()` est une *expression* (aussi appelée *fonction*, comme les fonctions mathématiques). Elle renvoie la position de la souris, ou du toucher sur un écran tactile, en pixels sur l'axe X.

* Le `5` est un décalage en pixels, de manière à ce que le monstre ne saute pas entre les deux états s'il est cliqué ou touché au centre (vous verrez comment cela est utile en programmant le prochain événement).

![](/gdevelop5/tutorials/geometry-monster/56_4.png)

Copiez l'action effectuée à partir de la condition testant une pression sur la touche gauche du clavier. (Faites un clic droit dans zone et sélectionnez **Copy** dans le menu contextuel, comme montré dans la figure.) ...

![](/gdevelop5/tutorials/geometry-monster/56_5.png)

... et collez-la dans la condition de nous venons de créer.

![](/gdevelop5/tutorials/geometry-monster/56_6.png)

Créez ensuite une nouvelle sous-condition.

![](/gdevelop5/tutorials/geometry-monster/56_7.png)

Suivez le même schéma : **Monster**, **Compare X position of an object**, puis **\< (less than)** et **MouseX() - 5** pour le décalage de l'autre côté.

![](/gdevelop5/tutorials/geometry-monster/56_8.png)

Copiez et collez l'action de la condition pour la touche droite du clavier et collez-la ici.

![](/gdevelop5/tutorials/geometry-monster/56_9.png)

Excellent! Le monstre devrait maintenant se déplacer avec les commandes du clavier et de la souris!

![](/gdevelop5/tutorials/geometry-monster/56_10.png)

⬅️ **[Étape précédente : 3. Création du personnage principal](/fr/gdevelop5/tutorials/geometry-monster/3-introducing-main-character)** ➡️ **[Étape suivante : 5. Ajout et déplacement de formes](/fr/gdevelop5/tutorials/geometry-monster/5-adding-and-moving-shapes)**
