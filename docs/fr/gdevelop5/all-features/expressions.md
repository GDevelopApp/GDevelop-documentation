---
title: expressions
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**  
*(remove this paragraph once the translation is finished)*

# Écriture des expressions CDevelop prend en charge les expressions ! Les expressions sont des valeurs dynamiques qui peuvent être utilisées dans les paramètres d'événement. Par exemple, pour définir la position d'un objet, vous pouvez utiliser un nombre fixe comme ``75`` ou vous pouvez utiliser une expression telle que ``AnotherObject.X() - Variable(position_offset)``.

Il existe deux types d'expressions :

1.   ***Les expressions numériques***

![](/gdevelop5/all-features/number_expression.png)

Les expressions numériques peuvent être utilisées dans les paramètres d'événement. Ils reçoivent une valeur numérique telle que la position de l'objet, la cote z, le nombre de variables, etc.

1.   ***Les chaînes de caractères***

![](/gdevelop5/all-features/text_expression.png)

Les chaînes de caractères peuvent être utilisées dans les paramètres qui reçoivent une valeur de texte / chaîne. Vous pouvez utiliser cette expression pour lire le contenu d'une chaîne d'objet texte, sa couleur, le texte d'une autre variable, etc.

## Les expressions numériques Comme indiqué ci-dessus, les expressions numériques peuvent être utilisées dans les paramètres numériques.

### Valeurs aléatoires

``Random(max)`` - Renvoie un entier entre `0` et la valeur maximale `max` définie. La plage est \[0, max\].

*Exemples utilisant l'expression de génération aléatoire : Random()*

``` Javascript
Random(3)  // Les quatre valeurs entières possibles sont : 0, 1, 2 et 3
```

``RandomInRange(min, max)`` - Renvoie un entier compris entre le minimum `min` et le maximum `max`. La plage est \[min, max\].

*Exemples utilisant l'expression de génération aléatoire : RandomInRange()*

``` Javascript
RandomInRange(-1, 2) // Les quatre valeurs possibles sont : -1, 0, 1 et 2  

// A noter que "RandomInRange(min, max)" est équivalent à "min + Random(max - min)" :

-1 + Random(2 - -1) // Cela donne les mêmes résultats que ci-dessus.
```

``RandomFloat(max)`` - Renvoie un nombre à virgule compris entre `0` et `max`. La plage est ``\[0, max)``. A noter que ``max`` n'est pas inclus dans la plage. Il est important de noter aussi que les résultats possibles sont infinis. En effet, il existe une infinité de nombres réels entre deux valeurs différentes.  
*Exemples utilisant l'expression de génération aléatoire : RandomFloat(max)*

    RandomFloat(2.5) //CERTAINES des nombreuses valeurs possibles sont 0, 1.467798, 2.000587 et 2.499999

``RandomFloatInRange(min, max)`` - Renvoie un nombre à virgule compris entre `min` et `max`. La plage est ``\[min, max\]``. A noter que ``max`` n'est pas inclus dans la plage. Il est important de noter aussi que les résultats possibles sont infinis. En effet, il existe une infinité de nombres réels entre deux valeurs différentes.  
*Exemples utilisant l'expression de génération aléatoire : RandomFloatInRange()*

    RandomFloatInRange(-1.5, 2) //CERTAINES des nombreuses valeurs possibles sont -1.5, -0.598156, 1.000874 et 1.99999

``RandomWithStep(min, max, step)`` - Renvoie un nombre compris entre `min` and `max` avec un pas égal à `step`. La plage est ``\[min, min + N*step\]`` avec ``min + N*step ≤ max \< min + (N+1)*step``. Cela signifie que l'expression peut renvoyer toutes les valeurs échelonnées inférieures ou égales à ``max``.  
*Exemples utilisant l'expression de génération aléatoire : RandomWithStep(min, max, step)*

    RandomWithStep(1, 3, 0.6) // Les nombres générés sont : ``1``, ``1.6``, ``2.2`` et ``2.8``
