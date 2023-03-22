---
title: 9-adding-bombs
---
FIXME **Cette page est entièrement traduite. Veuillez cependant corriger toutes les erreurs et les éventuelles imprécisions.**_(supprimer ce paragraphe une fois les modifications terminées)_

⬅️ **[Étape précédente : 8. Suivi du score](/fr/gdevelop5/tutorials/geometry-monster/8-tracking-score)** ➡️ **[Étape suivante : 10. Plus de vies](/fr/gdevelop5/tutorials/geometry-monster/10-more-lives)**

# 9. Ajout de bombes

Bien que ce soit génial d'avoir le mécanisme de base pour collecter les formes, cela devient ennuyeux assez rapidement, et c'est beaucoup trop facile. Et si nous pouvions augmenter le niveau de difficulté en introduisant des objets que vous ne devriez pas collecter ? Voici les **bombes** !

Cliquez le bouton **Add a new object** (Ajouter un nouvel objet) ...

![](/gdevelop5/tutorials/geometry-monster/122.png)

... et sélectionnez **Sprite**.

![](/gdevelop5/tutorials/geometry-monster/123.png)

Le nom de l'objet bombe **Object name** est `Obstacle`. Il en va de même pour le nom de l'animation (**Animation \#0**). L'animation est constituée de deux images, à charger. L'animation doit durer `0,1` secondes et se dérouler en boucle (**Loop**).

![](/gdevelop5/tutorials/geometry-monster/124.png)

Ajoutez un autre commentaire et appelez-le `Obstacle`.

![](/gdevelop5/tutorials/geometry-monster/125.png)

Ajouter un nouvel événement vide (bouton **Add a new empty event**) puis une nouvelle condition (**Add condition**) et activez l'onglet **OTHER CONDITIONS** (Autres conditions).

![](/gdevelop5/tutorials/geometry-monster/127.png)

Activez **Timers and time** (Temps et chronomètre), sélectionnez **Value of a scene timer** (Valeur d'un chronomètre de scène). Dans le panneau de droite, entrez `5` pour **Time in seconds** (Durée en secondes) et `"ObstacleCreation"` pour **Timer's name** .

![](/gdevelop5/tutorials/geometry-monster/128.png)

Ces instructions créent une nouvelle minuterie qui engendre une bombe indépendamment de la génération des formes.Une nouvelle bombe apparaîtra toutes les 5 secondes.

!!! note

    N'hésitez pas à modifier cette valeur pour rendre le jeu plus difficile. Nous verrons dans un prochain chapitre comment accélérer les bombes au fil du temps – pour rendre le jeu plus difficile. Vous pouvez également utiliser une variable au lieu d'un nombre, de sorte que vous pouvez changer pendant le jeu le temps écoulé entre la création des bombes !

Maintenant, passons à l'action ! Sélectionnez **Obstacle** dans l'onglet **OBJECTS** puis **Create an object** (Créer un objet) dans la liste à droite, et réglez la position X (**X position**) sur `RandomInRange(80, 640-80)` et la position Y (**Y position**) sur `-100`. C'est exactement la même approche que celle utilisée pour les formes.

![](/gdevelop5/tutorials/geometry-monster/129.png)

La deuxième action à ajouter (clic sur **Add action** puis **OTHER ACTIONS**) est **Start (or reset) a scene timer** (Démarrer (ou réinitialiser) un chronomètre de scène) dans la liste de **Timers and time** (Temps et chronomètres), puis lui donner le nom **Timer's name** de `ObstacleCreation`.

![](/gdevelop5/tutorials/geometry-monster/131.png)

Le panneau des événements devrait ressembler la figure ci-dessous après avoir terminé avec succès les différentes étapes. Si c'est le cas, ajoutez un commentaire intitulé `Move obstacles` (déplacement des obstacles) puis un autre événement vide dans lequel vous créez une nouvelle action (**Add action**).

![](/gdevelop5/tutorials/geometry-monster/132.png)

Dans le panneau **OBJECTS**, sélectionnez **Obstacle**, recherchez et sélectionnez **Add a force (angle)** (Ajouter une force (angle)). Entrez `90` dans le champ **Angle** et `100` dans le champ **Speed**.

![](/gdevelop5/tutorials/geometry-monster/133.png)

Nous voulons être sûr que la bombe soit devant les formes, et non derrière elles. À cet effet, nous allons utiliser **Z order**. C'est une manière de dire au jeu comment nous voulons que les objets soient rendus les uns au-dessus des autres. Sélectionnez **Obstacle**, puis **Z order** (PLan) dans la liste à droite, puis **= (set to)** pour le signe de la modification et pour terminer entrez **4** dans **Value**.

![](/gdevelop5/tutorials/geometry-monster/134.png)

Lancez le jeu et observez les formes tomber sur l'écran, avec des bombes apparaissant et tombant indépendamment une fois toutes les quelques formes. La récolte des formes vous donne des points, tandis que les bombes ne font encore rien.

![](/gdevelop5/tutorials/geometry-monster/135.png)

Les bombes sont une menace importante pour la vie du monstre. Rendons le gameplay un peu plus facile en introduisant des [vies](/gdevelop5/tutorials/geometry-monster/10-more-lives).

⬅️ **[Étape précédente : 8. Suivi du score](/fr/gdevelop5/tutorials/geometry-monster/8-tracking-score)** ➡️ **[Étape suivante : 10. Plus de vies](/fr/gdevelop5/tutorials/geometry-monster/10-more-lives)**
