---
title: 6-collision-detection
---
FIXME **Cette page est entièrement traduite. Veuillez cependant corriger toutes les erreurs et les éventuelles imprécisions.**_(supprimer ce paragraphe une fois les modifications terminées)_

⬅️ **[Étape précédente : 5. Ajout et déplacement de formes](/fr/gdevelop5/tutorials/geometry-monster/5-adding-and-moving-shapes)** ➡️ **[Étape suivante : 7. Bruitages amusants](/fr/gdevelop5/tutorials/geometry-monster/7-sounds-fun)**

# 6. Détection des collisions

Les formes tombent, mais elles n'interagissent pas avec le monstre. Nous aimerions pouvoir contrôler le monstre et lui permettre de collecter les formes qui tombent - c'est à cela que sert la ***détection des collisions***.

Ajoutez un nouveau commentaire et appelez-le `Collision`.

![](/gdevelop5/tutorials/geometry-monster/95.png)

Ajoutez ensuite une nouvelle condition (**Add condition**).

![](/gdevelop5/tutorials/geometry-monster/96.png)

Comme toujours, assurez-vous que **Shapes** soit sélectionné, puis recherchez **Collision** (qui testera la collision entre deux objets). Dans le panneau de droite, entrez `Monster` et cliquez sur **OK**.

![](/gdevelop5/tutorials/geometry-monster/97.png)

Nous avons la condition, il est maintenant temps d'ajouter une action (**Add action**).

![](/gdevelop5/tutorials/geometry-monster/99.png)

Activez **Shapes**, recherchez et activez **Delete an object** (Supprimer un objet) puis cliquez **OK**:

![](/gdevelop5/tutorials/geometry-monster/100.png)

Ce fut rapide ! La détection de collisions en elle-même est simple, mais sa puissance se révélera dans les chapitres suivants, où nous ajouterons de nombreuses actions à la condition de collision créée ci-dessus.

⬅️ **[Étape précédente : 5. Ajout et déplacement de formes](/fr/gdevelop5/tutorials/geometry-monster/5-adding-and-moving-shapes)** ➡️ **[fr/gdevelop5:tutorials:geometry-monster:7-sounds-fun\|Étape suivante : 7. Bruitages amusants](/gdevelop5/tutorials/geometry-monster/7-sounds-fun)**
