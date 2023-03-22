---
title: 8-tracking-score
---
FIXME **Cette page est entièrement traduite. Veuillez cependant corriger toutes les erreurs et les éventuelles imprécisions.**_(supprimer ce paragraphe une fois les modifications terminées)_

⬅️ **[Étape précédente : 7. Bruitages amusants](/fr/gdevelop5/tutorials/geometry-monster/7-sounds-fun)** ➡️ **[Étape suivante : 9. Ajout de bombes](/fr/gdevelop5/tutorials/geometry-monster/9-adding-bombs)**

# 8. Suivi du score

C'est génial d'avoir déjà [des bruitages](/fr/gdevelop5/tutorials/geometry-monster/7-sounds-fun), mais la partie la plus importante est en fait de compter le nombre de formes que le monstre a pu collecter. Nous allons profiter de la [détection des collisions](/fr/gdevelop5/tutorials/geometry-monster/6-collision-detection) de la même manière : lorsque une forme est collectée, non seulement nous jouons un son, mais nous augmentons également le ***score***.

Pour commencer, ajoutons une action après les actions servant à supprimer une forme et jouer un son, que nous avions ajoutées dans les chapitres précédents. Choisissez **Add an action** (Ajouter une action).

Cliquez sur **OTHER ACTIONS** (Autres actions), recherchez **Variables** et sélectionnez **Value of a scene variable** (Valeur d'une variable de scène). Ensuite, dans le panneau de droite, mettez `Score` dans le champ **Variable**, **Modification's sign** (signe de la modification) sur `+ (add)` et **value** à `1`. Ces réglages signifient que chaque fois qu'une forme est collectée par le monstre, la forme disparaît et le joueur obtient un point.

![](/gdevelop5/tutorials/geometry-monster/107.png)

!!! note

    Ces instructions sont en fait un peu incomplètes : au cas où nous collecterions deux formes en même temps, nous n'obtiendrions qu'un seul point ! En effet, la condition sera considérée comme "vraie" pour les deux formes qui entrent en collision avec le monstre, mais l'action n'est alors exécutée qu'une seule fois. Nous corrigerons cela dans quelques instants avec un événement **For Each**.

Nous avons maintenant la possibilité de suivre le score, mais le joueur ne peut pas le voir. Pour afficher le score, nous avons besoin de créer un objet de type texte.

Cliquez sur l'onglet **Level1**, puis sur **Add a new object** (Ajouter un nouvel objet).

![](/gdevelop5/tutorials/geometry-monster/108.png)

Dans la fenêtre contextuelle **Add a new object**, sélectionnez **Text**.

![](/gdevelop5/tutorials/geometry-monster/109.png)

Entrez maintenant les propriétés de l'objet texte : **Object Name** (Nom de l'objet) est `Score`, la taille du texte **Size** est `30`, la couleur **Color** jaune, et le style est **Bold** (gras). Le texte lui-même est `Score :` . Confirmez en cliquant **APPLY**.

![](/gdevelop5/tutorials/geometry-monster/110.png)

Activez l'onglet **Level1 (Events)**, cliquez sur **Add an action**, et dans la fenêtre contextuelle, sélectionnez notre nouvelle variable **Score**. Recherchez et sélectionnez **Modify the text** (Modifier le texte), et dans le panneau de droite, sélectionnez **= (set to)** pour **Modification's sign**, en entrez dans le champ **Text** : `" Score : " + ToString(Variable(Score))`.

![](/gdevelop5/tutorials/geometry-monster/112.png)

Ces instructions mettent à jour le texte **Score** avec la valeur actuelle de la variable chaque fois qu'une forme entre en collision avec le monstre.

!!! note

    Comme mentionné précédemment, cela est quelque peu incomplet car si le monstre entre en collision avec deux objets en même temps, les actions d'événement ne seront exécutées qu'une seule fois, donc un seul point sera ajouté au score. Nous devons dire à GDevelop d'exécuter les actions pour chaque forme entrée en collision à un moment donné. Faisons-le donc !

Activez l'onglet **Level1 (Events)**. Cliquez ensuite sur le bouton **Choose and add an event** (Choisir et ajouter un événement) dans la barre des outils, puis sur **For each object** (Pour chaque objet) dans le menu contextuel.

![](/gdevelop5/tutorials/geometry-monster/113_5.png)

Entrez le nom de l'objet, qui dans notre cas est le groupe appelé **Shapes**.

![](/gdevelop5/tutorials/geometry-monster/115.png)

Assurez-vous de faire glisser **Shapes in collision with Monster** (Formes en collision avec Monster) afin que cette instruction soit répétée pour chaque objet **Shapes**.

![](/gdevelop5/tutorials/geometry-monster/116.png)

Enfin, faites glisser toutes les actions dans le nouvel événement **For Each**.

![](/gdevelop5/tutorials/geometry-monster/117.png)

Vous pouvez ensuite supprimer l'événement vide.

![](/gdevelop5/tutorials/geometry-monster/118.png)

Activez maintenant l'onglet **Level1**, prenez l'objet **Score** dans le panneau de droite et faites-le glisser sur la scène.

![](/gdevelop5/tutorials/geometry-monster/119_5.png)

Lancez le jeu pour tester si le comptage du score et l'affichage des informations mises à jour fonctionnent comme prévu.

![](/gdevelop5/tutorials/geometry-monster/121.png)

⬅️ **[Étape précédente : 7. Bruitages amusants](/fr/gdevelop5/tutorials/geometry-monster/7-sounds-fun)** ➡️ **[Étape suivante : 9. Ajout de bombes](/fr/gdevelop5/tutorials/geometry-monster/9-adding-bombs)**
