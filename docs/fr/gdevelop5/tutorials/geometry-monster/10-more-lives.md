---
title: 10-more-lives
---
FIXME **Cette page est entièrement traduite. Veuillez cependant corriger toutes les erreurs et les éventuelles imprécisions.**_(supprimer ce paragraphe une fois les modifications terminées)_

⬅️ **[Étape précédente : 9. Ajout de bombes](/fr/gdevelop5/tutorials/geometry-monster/9-adding-bombs)** ➡️ **[Étape suivante : 11. Jeu terminé](/fr/gdevelop5/tutorials/geometry-monster/11-game-over)**

# 10. Plus de vies

Avec des ***vies supplémentaires***, le joueur ne sera pas immédiatement pénalisé par un ***jeu terminé*** (Game over) lorsqu'il est touché par une bombe au lieu de l'être par une forme. Cette collision ne sera plus fatale mais supprimera une vie parmi celles disponibles, nombre que nous allons définir à 3.

Ce sera également une bonne occasion d'utiliser des ***des extensions***, qui ont l'avantage de faire que nous n'avons pas besoin de tout créer nous-mêmes.

!!! note

    Saviez-vous que les extensions sont également faites d'événements ? Vous pouvez inspecter la façon dont elles sont construites et fonctionnent en cliquant sur l'une d'entre-elles dans le gestionnaire de projets et en inspectant ses comportements, qui sont composés d'événements pour créer les conditions et les actions du comportement. 

Cliquez sur l'icône **Project manager** (Gestionnaire de projet) qui se trouve dans le coin supérieur gauche de l'éditeur.

![](/gdevelop5/tutorials/geometry-monster/136.png)

Cette action ouvre un panneau où la barre de recherche est dans le bas. Cliquez sur **Search for new extensions** (Rechercher de nouvelles extensions).

![](/gdevelop5/tutorials/geometry-monster/137.png)

L'extension que nous recherchons s'appelle **life** (la vie).

![](/gdevelop5/tutorials/geometry-monster/138.png)

Cette extension contient un **behavior** (comportement) appelé **Health** (Santé), que nous pouvons ensuite manipuler dans le jeu pour gérer la vie d'un objet. Cliquez sur **INSTALL IN PROJECT** (Installer dans le projet) pour pouvoir l'utiliser.

![](/gdevelop5/tutorials/geometry-monster/139.png)

!!! note

    Les comportements (behaviors) permettent d'ajouter de nouvelles fonctionnalités et de la logique aux objets. Elles sont utiles pour créer des objets en assemblant quelques comportements que l'on peut ensuite manipuler avec des événements. 

Pendant que nous y sommes, ajoutons une autre extension utile : **Flash**. Lorsque le monstre est touché par une bombe et perd une vie, nous le faisons cligner des yeux pendant une courte période pour donner au joueur des informations supplémentaires sur ce qui s'est passé.

![](/gdevelop5/tutorials/geometry-monster/140.png)

Installez-le également.

![](/gdevelop5/tutorials/geometry-monster/141.png)

Maintenant que nous avons installé les deux extensions, elles doivent être répertoriées dans le panneau de gauche, sous **Functions/Behaviors** (Fonctions/Comportements).

![](/gdevelop5/tutorials/geometry-monster/142.png)

Cliquez sur l'onglet **LEVEL1** pour revenir dans l'éditeur de scène puis, dans le panneau de droite **Objects**, double-cliquez sur **Monster**, ce qui ouvre une fenêtre contextuelle.

![](/gdevelop5/tutorials/geometry-monster/143.png)

Dans celle-ci, cliquez sur l'onglet **BEHAVIORS** (Comportements), car nous voulons ajouter ces comportements à l'objet ...

![](/gdevelop5/tutorials/geometry-monster/144.png)

... en cliquant sur **Add a behavior to the object**.

![](/gdevelop5/tutorials/geometry-monster/145.png)

Les deux extensions personnalisées que nous venons d'ajouter doivent être répertoriées dans la fenêtre **Ad a new behavior to the object** et disponibles pour utilisation. Cliquez sur l'extension **Health**.

![](/gdevelop5/tutorials/geometry-monster/146.png)

Nous fixons **Damage cooldown** (Temps de recharge des dégâts) à `0,8` secondes (durée pendant laquelle le monstre touché est indestructible afin qu'il ne soit pas immédiatement touché à nouveau par une autre bombe), **Health** (Santé) à `3` (nombre actuel de vies), et **Maximum health** (Santé maximale)n aussi à `3` (le monstre aura donc trois vies au total).

Cliquez finalement sur **Add behavior to the object** (Ajouter un comportement à l'objet) pour en activer un autre.

![](/gdevelop5/tutorials/geometry-monster/147.png)

Ce second comportement est **Flash**.

![](/gdevelop5/tutorials/geometry-monster/148.png)

Le paramètre **Half period** (demi-période) spécifie la durée pendant laquelle l'objet est invisible, et nous allons la fixer à `0,1` secondes. Dans le champ juste en dessous, vous pouvez voir le comportement **Health** que nous avons entré précédemment. Cliquez sur **APPLY** pour les enregistrer.

![](/gdevelop5/tutorials/geometry-monster/149.png)

Cliquez maintenant sur l'onglet **Level1 (Events)**, puis sur le label **Collision** (un commentaire) pour vous assurer que c'est bien celui qui est actif. Dans le menu en haut à droite, cliquez sur l'icône **Choose and add an event** (Choisir et ajouter un événement), puis sur **For each object** (Pour chaque objet) dans la liste déroulante qui s'est ouverte.

![](/gdevelop5/tutorials/geometry-monster/150.png)

Cela nous permet d'avoir la condition spécifique **Repeat for each Obstacle object** (Répéter pour chaque objet Obstacle).

![](/gdevelop5/tutorials/geometry-monster/152.png)

Cliquez sur **Add condition**. Sélectionnez **Obstacle**, **Collision** et **Monster** puis cliquez **OK**. De cette façon, les bombes entreront en collision avec le monstre, et nous pourrons soustraire le nombre actuel de vies lorsque cela se produira.

![](/gdevelop5/tutorials/geometry-monster/153.png)

Toujours pour **Obstacle**, sélectionnez l'action **Delete an object** (Supprimer un objet) pour supprimer la bombe. Chaque fois qu'une bombe frappe le monstre, elle est supprimée du jeu.

![](/gdevelop5/tutorials/geometry-monster/154.png)

Une autre action va être utilisée pour que le monstre soit endommagé par la bombe. Cliquez sur **Add action**. Sélectionnez **Monster**, **Damage the object** (Endommager l'objet), en entrez `1` dans le champ **Value of the damage to do** (Valeur du dommage). Cela signifie que chaque fois que la bombe frappe le monstre, il perd une vie.

![](/gdevelop5/tutorials/geometry-monster/155.png)

Dans l'onglet **OTHER ACTIONS**, ajoutons un son différent lorsque cela se produit. Sélectionnez **Audio**, **Play a sound** (Jouer un son), et **Choose a new audio file** (Choisir un nouveau fichier audio) pour ouvrir la fenêtre de l'explorateur de fichiers.

![](/gdevelop5/tutorials/geometry-monster/156.png)

Sélectionnez le fichier `kill.wav` et ouvrez-le pour l'ajouter au projet.

![](/gdevelop5/tutorials/geometry-monster/157.png)

Assurez-vous que le nom du fichier est bien là puis cliquez **OK**.

![](/gdevelop5/tutorials/geometry-monster/158.png)

Bien que les événements fonctionnent, ils ne font que changer la vie du monstre en mémoire. Affichons donc un compteur de vie à l'écran !

Cliquez sur l'onglet **LEVEL1**, puis dans la liste **Objects** sur **Add a new object** (Ajouter un nouvel objet).

![](/gdevelop5/tutorials/geometry-monster/160.png)

Faites-en un autre **Sprite**.

![](/gdevelop5/tutorials/geometry-monster/161.png)

Le nom de l'objet **Object Name:** est `Life`, l'animation **Animation \#0** s'appelle `Life3` (puisque l'état initial de l'animation a trois vies), puis ajoutez l'image avec 3 cœurs.

![](/gdevelop5/tutorials/geometry-monster/162.png)

Répétez l'opération pour l'animation `Life2` ...

![](/gdevelop5/tutorials/geometry-monster/163.png)

... et encore une fois pour `Life1`.

![](/gdevelop5/tutorials/geometry-monster/164.png)

Le dernier est **Life0** (sans images) lorsque toutes les vies sont perdues. Appliquez (**APPLY**) les modifications.

![](/gdevelop5/tutorials/geometry-monster/165.png)

Faites glisser et déposez l'objet **Life** sur la scène et placez-le dans le coin supérieur droit. Nous verrons au chapitre suivant comment animer cet objet en créant un écran **game over** lorsqu'il atteindra zéro.

![](/gdevelop5/tutorials/geometry-monster/166.png)

⬅️ **[Étape précédente : 9. Ajout de bombes](/fr/gdevelop5/tutorials/geometry-monster/9-adding-bombs)** ➡️ **[Étape suivante : 11. Jeu terminé](/fr/gdevelop5/tutorials/geometry-monster/11-game-over)**
