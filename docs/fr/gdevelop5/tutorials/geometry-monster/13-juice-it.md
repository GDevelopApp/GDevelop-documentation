---
title: 13-juice-it
---
FIXME **Cette page est entièrement traduite. Veuillez cependant corriger toutes les erreurs et les éventuelles imprécisions.**_(supprimer ce paragraphe une fois les modifications terminées)_

⬅️ **[Étape précédente : 12. Menu principal](/fr/gdevelop5/tutorials/geometry-monster/12-main-menu)** ⬅️ **[Retour à l'index](/fr/gdevelop5/tutorials/geometry-monster)**

# 13. Améliorations !

Dans cette dernière partie, nous allons programmer de petites choses qui peuvent rendre le jeu vraiment intéressant : augmenter progressivement le niveau de difficulté et engendrer des effets de particules lorsque Monster collecte les formes.

Nous allons commencer par la première. Ajoutez un commentaire et intitulez-le `Progressively increase game speed` (Augmenter progressivement la vitesse de jeu).

![](/gdevelop5/tutorials/geometry-monster/291.png)

Créez un nouvel événement, ajoutez-y une action **Value of a scene variable** (Valeur d'une variable de scène), appelez cette variable `"GameSpeed"` (Vitesse de la scène) , réglez le signe des modifications sur **+ (add)** et sa valeur à `7 * TimeDelta()`.

![](/gdevelop5/tutorials/geometry-monster/293.png)

Ajoutez un autre commentaire, mais plus haut dans la liste des événements, juste en dessous de **Shapes**. Intitulez-le `Move shape according to the game speed` (Déplacer la forme en fonction de la vitesse du jeu). L'augmentation du niveau de difficulté fera tomber les formes plus rapidement.

![](/gdevelop5/tutorials/geometry-monster/294.png)

Modifiez l'action et remplacez `100` pixels par `Variable(GameSpeed)`.

![](/gdevelop5/tutorials/geometry-monster/295.png)

Cette modification doit être répétée pour l'obstacle bombe. Ajoutez le commentaire `"Déplacer l'obstacle en fonction de la vitesse de jeu"` ...

![](/gdevelop5/tutorials/geometry-monster/296.png)

... puis remplacez `100` pixels par `1.5 * Variable(GameSpeed)`, afin que les bombes tombent plus vite que les formes.

![](/gdevelop5/tutorials/geometry-monster/297.png)

Testez le jeu et jouez un peu pour voir si cela fonctionne vraiment comme prévu.

![](/gdevelop5/tutorials/geometry-monster/298.png)

!!! note

    Vous pouvez rendre le jeu plus facile ou plus difficile en modifiant vous-même la variable **GameSpeed**.

Passons maintenant aux particules. Cliquez sur **Add a new object** dans le panneau de droite ...

![](/gdevelop5/tutorials/geometry-monster/299.png)

... est sélectionnez **Particles emitter** (Émetteur de particules).

![](/gdevelop5/tutorials/geometry-monster/300.png)

Ces émetteurs engendrent de petites formes sous l'aspect de particules dès que le monstre ramasse une forme. Le nom de l'objet (**Object name:**) est `Shape1Explosion`, le type de particules : `Textured` (texturé). Sélectionnez ensuite l'image `geometry1.png` et entrez les valeurs des différents paramètres. **Particles start width** (largeur initiale des particules) : `20`, **Particles start height** (hauteur initiale des particules) : `20` pixels, l'opacité du début et de la fin **Start opacity** et **End opacity** est de `255` ; elles seront donc toujours entièrement visibles.

![](/gdevelop5/tutorials/geometry-monster/301.png)

Faites défiler vers le bas pour entrer d'autres valeurs. Assurez-vous de sélectionner **Delete when out of particles** (Supprimer quand il n'y a plus de particules) : l'émetteur fera apparaître toutes les particules qui lui sont attribuées et elles seront ensuite supprimées si elles ne sont plus nécessaires. Réglez le nombre maximum de particules (**Maximum number of particles displayed**) à `10`, le nombre de particules dans le réservoir (**Number of particles in tank**) à `5`, le débit (**Flow of particles**) à `45` particules par seconde, la force d'émission minimale appliquée sur les particules (**Minimum emitter force applied on particles**) également à `45`, et le maximum à `85`, l'angle du cône de pulvérisation à `360` degrés (de sorte que l'émetteur génère les particules dans toutes les directions) et le rayon de l'émetteur (**Radius of the emitter**) à `10`.

![](/gdevelop5/tutorials/geometry-monster/302.png)

Faites défiler encore plus vers le bas. Réglez la gravité des particules (**Gravity on particles**) sur les axes X et Y à `0` (nous n'avons pas besoin de la gravité dans ce jeu), le frottement sur les particules (**Friction on particles**) à `2`, la durée de vie minimale des particules (**Particle minimum lifetime**) à `0,5` secondes et la durée maximale (**Particle maximum lifetime**) à `1,5` secondes, la taille initiale des particules (**Particle start size**) à `100` pourcent et taille finale (**Particle start size**) à `80` pourcent (elles deviennent donc un peu plus petites après leur apparition), la vitesse de rotation minimale (**Particle minimum rotation speed**) à `0` degrés par seconde et la vitesse maximale à `40` degrés par seconde (donc certains d'entre-elles peuvent tourner un peu).

Confirmez le tout cela en cliquant sur **APPLY**.

![](/gdevelop5/tutorials/geometry-monster/303.png)

Répétez ces étapes pour les trois autres formes : **geometry2**, **geometry3** et **geometry4**.

![](/gdevelop5/tutorials/geometry-monster/304.png)

Créez un sous-commentaire pour générer les particules (`CREATE PARTICLES`), puis ajoutez une nouvelle condition.

![](/gdevelop5/tutorials/geometry-monster/305.png)

Sélectionnez **Shape1** dans la liste des objets, recherchez et sélectionnez **Number of objects** (Nombre d'objets), puis `≠(not equal to)` (différent de) et comparez à `0` dans le panneau de droite.

![](/gdevelop5/tutorials/geometry-monster/307.png)

Ajoutez une nouvelle action `Shape1Explosion` qui apparaît dans la liste des objets, recherchez et sélectionnez **Create and object** (Créer un objet), puis positionnez X (**X position**) sur `Shape1.PointX("Center")` et positionnez Y (**Y position**) sur `Shape1.PointY("Center")`. Elles apparaissent donc au milieu de la forme qu'elles vont remplacer.

![](/gdevelop5/tutorials/geometry-monster/309.png)

Ajoutez une autre action **Shape1Explosion**, avec **Size, parameter 1** (Taille, paramètre 1) puis `= (set to)` avec pour valeur `Shape1.Width()`. Confirmez avec **OK**

![](/gdevelop5/tutorials/geometry-monster/311.png)

Répétez ces étapes pour les trois autres formes.

![](/gdevelop5/tutorials/geometry-monster/312.png)

Nous allons maintenant, ajouter le sous-commentaire de la section concernant la suppression de la forme lorsqu'elle est récoltée, et ensuite déplacer la partie responsable de l'augmentation du score.

![](/gdevelop5/tutorials/geometry-monster/313.png)

Faites glisser la partie **Delete object Shapes** (Supprimer les formes des objets) vers le bas ...

![](/gdevelop5/tutorials/geometry-monster/314.png)

... pour que cela ressemble à ça.

![](/gdevelop5/tutorials/geometry-monster/315.png)

C'est ça ! Les treize étapes sont maintenant terminées et vous avez construit le jeu **Geometry Monster** à partir de zéro. **Félicitations !**

![](/gdevelop5/tutorials/geometry-monster/316.png)

Le jeu propose une quantité infinie de formes à collecter, des bombes pour le rendre un peu plus difficile, des vies pour contrer ces difficultés et "adoucir" les erreurs, suivre le score, terminer le jeu lorsque Monster est à court de vies, basculer entre le menu principal et les scènes de gameplay , augmentant le niveau de difficulté, les effets de particules et bien plus encore!

N'hésitez pas à l'utiliser comme base et à le compléter. Ajoutez des fonctionnalités, modifiez celles existantes et jouez pour en apprendre le plus possible.

⬅️ **[Étape précédente : 12. Menu principal](/fr/gdevelop5/tutorials/geometry-monster/12-main-menu)** ⬅️ **[Retour à l'index](/fr/gdevelop5/tutorials/geometry-monster)**
