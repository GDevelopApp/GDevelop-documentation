---
title: Concepts de base pour créer un jeu  - ce dont vous avez besoin pour démarrer avec GDevelop
---
# Concepts de base pour créer un jeu : ce dont vous avez besoin pour démarrer avec GDevelop

Les concepts de base de GDevelop sont simples. Lisez les informations suivante pour commencer sereinement avec cette application. Si vous n'avez pas encore GDevelop, [Téléchargez le depuis le site](https://gdevelop.io/download)!

## Coordonnées

Les objets sont repérés sur la scène à partir de leurs coordonnées X et Y correspondant respectivement à la position horizontale (axe-X) et la position verticale (axe-Y) sur un plan cartésien.

Les coordonnées en abscisse (axe des X) sont croissantes de gauche à droite et les coordonnées en ordonnées (axe des Y) sont croissantes de haut en bas.

![](/wiki/pres_coord1.png)

Parallèlement, pour déplacer ou tourner des objets, vous avez besoin de spécifier un angle en degré. Observez le schéma suivant pour comprendre comment sont ordonnés les degrés de 0 à 360° (en tournant dans le sens des aiguilles d’une montre à partir de 3h):

![](/wiki/pres_coord2.png)

Si vous utilisez des fonctions trigonométriques comme le **sinus** ou le **cosinus**, notez que vous devrez exprimer les angles en **radians** (1 radian =180/Π degrés et 1 degré= Π/180 radians, Π(Pi) étant approximativement égal à 3.14159)

## Comment les événements affectent les objets

Les événements, que vous utilisez pour créer les règles et interaction de votre jeu, sont composés de conditions et d’actions.
La majorité des conditions et actions se réfèrent à des objets. Les conditions effectuent des tests sur les objets et les actions les manipulent, les transforment.

  * Une action sans condition s’appliquera à tous les objets.
  * Si vous utilisez un objet pour la première fois dans un événement, GDevelop testera et modifiera **tous les objets** qui portent le même nom dans la scène.
  * Si vous ré-utilisez cet objet dans le même événement, GDevelop ne testera et ne modifiera que les objets qui ont été affectés par la condition initiale.

Ce processus est au cœur de la logique de l’application.
Ainsi l’exemple suivant supprimera **tous** les objets nommés "Square" (Carré):

![](/gdevelop5/tutorials/delete-square.png)

Tandis que l’événement suivant supprimera **seulement** les objets "Square"(Carré) dont la position X est inférieur à 100 pixels:

![](/gdevelop5/tutorials/delete-square-condition.png)

!!! tip

    **À voir en action!** 🎮Ouvrez cet exemple en ligne et allez observer les événements: https://editor.gdevelop.io/?project=example://object-selection

## Événement: L'importance de l'ordre

L'ordre dans lequel sont listés les événement est important: Les événement du haut de la liste sont exécutés les premiers. Chaque fois que votre jeu est affiché (appelé "Vue"), 60 fois par seconde les événements sont exécutés.
Les exemples suivantes ne sont pas équivalents:

![](/gdevelop5/tutorials/create-then-delete-square.png)

![](/gdevelop5/tutorials/delete-then-create-square.png)

* La première paire d'événements crée un objet "Square" (Carré) à la position 200;100 et le supprime immédiatement. **Aucun** "Square" n'est affiché à l'écran (car il a été supprimé dans la fraction de seconde de sa création).
* La seconde paire d'événements supprimera tous les objets "Square" de la scène et en créera un à la position  200;100. Ainsi un carré sera visible sur la scène (avant d'être effacé et recréé immédiatement lors du prochain affichage de la vue)

!!! note

        Par exemple: Un jeu tournant à 60 images par seconde, si vous avez un seul événement, sans condition à l'intérieur et juste une action pour créer un objet sur la scène, alors cette action sera exécuté 60 fois en une seconde.
    Vous aurez donc à chaque seconde 60 objets de plus sur la scène.

## Déplacer les objets en leur intégrant des forces

Les objets peuvent se déplacer en leur intégrant à des **forces** qui les "poussent".

Vous pouvez spécifier des coordonnées cartésiennes à une force (par exemple en spécifiant des X et des Y en pixels). Ces coordonnées polaires définissent une longueur et une direction vectorielle (un angle) qui sera soumis à une force de glissement (le contraire d’une force de résistance). Cette **force de glissement** aura un coefficient compris entre 0 et 1. Chaque seconde, la puissance (longueur) de la force est multipliée par ce coefficient. Ainsi si la valeur est de 1, la puissance ne diminue pas et la vitesse reste constante. Au contraire, si le coefficient est 0, la résistance est totale et l’objet stoppe immédiatement. Les valeurs intermédiaires feront que l’objet ralentira de plus en plus jusqu’à s’arrêter.

Certains [comportements](http://www.wiki.compilgames.net/doku.php/fr/gdevelop5/behaviors) que vous pouvez affecter à des objets pour les déplacer "par défaut" (par exemple un objet déplacé à l’aide de la souris). Vous n’aurez pas besoin d’utiliser les forces (voir plus loin).

### Exemple

Comment faire bouger ce personnage vers le bas:

![](/wiki/pres_vector.png)

Vous pouvez ajouter une force à l’aide des coordonnées X/Y en indiquant 0 pour X (on ne va ni à droite ni à gauche) et en précisant 150 (pixels) pour Y. Vous pourriez aussi utiliser les coordonnées polaires (vectorielles) en ajoutant une force avec un angle de 90 (degrés) et une longueur de 150 (pixels).

### Autres façons de déplacer les objets

Certains comportements, comme le comportement Physique ou le Détecteur de chemin  peuvent déplacer les objets eux-mêmes. Dans ces cas, il est préférable de ne pas utiliser les forces "internes" mais de s'en remettre seulement aux actions qui sont gérées au niveau du comportement lui-même.

!!! tip

    **À voir!** 🎮Ouvrez et décortiquez cet exemple en ligne: https://editor.gdevelop.io/?project=example://move-object-with-physics

## Les variables

Les variables vous servent à stocker des **données**, comme des nombres ou du texte. On pourrait les comparer à des tiroirs ou des boites dans lesquels on garderait en mémoire quelques petites notes et informations à réutiliser plus tard. Toutes les données qui peuvent être stockées si on peut les exprimer en _texte_ ou en _nombre_:  Nombre de vies restantes, meilleur score, nombre de balles en réserve, nombre d’ennemis neutralisés, pseudo de la personne qui joue… Vous allez probablement souvent utiliser des nombres, mais pas seulement si vous voulez personnaliser l’expérience :)

![](/wiki/pres_variable.png)

La _valeur_ d’une variable pourra donc être testée par des conditions ou modifiée par des actions.

#### Où sont les variables? (Typologie des "variables")

Il existe plusieurs types de variable qui différencient leur rayon d’utilisation. Il y a trois types de variable dans  GDevelop qui détermineront quand et comment elles sont utilisables.:

* **Globale**: variable accessible par toutes les scènes d’un jeu. Typiquement on les utilisera pour stocker le score du joueur d’un niveau à l’autre ou encore son pseudo tout au long de la partie.
* **Scène** : variable qu’on utilisera uniquement au sein d’une scène (ou d’un niveau). Par exemple pour compter le nombre d’ennemis encore présents dans le niveau, pour gérer le temps qu’il reste pour sortir de la scène.;
* **Objet**: chaque objet peut contenir ses propres variables. Par exemple un compteur de "santé" pour un objet qui à chaque fois qu’il sera touché diminuera. Ainsi si on génère automatiquement une horde d’ennemis, chacun aura sa propre variable "Santé".

!!! note

    Lisez le chapître des [Variables](/gdevelop5/all-features/variables). Les variables sont très utilisées et de nombreux exemples et tutoriaux illustreront une partie des infinies possibilités qu’elles offrent..
## Une notion avancée : le "temps écoulé" depuis la dernière image (TimeDelta)

Le jeu évalue les événements et repeint l'écran plusieurs fois par seconde : on dit que le jeu est _rafraîchi_, _mis à jour_ lors d'un "tick". La fréquence de ce phénomène dépend des ressources de votre ordinateur : un ordinateur lent peut rendre 25 images par seconde, un ordinateur rapide 60. GDevelop peut généralement s'assurer que cette valeur est la même sur tous les ordinateurs. Cependant, la vitesse de certaines opérations peut changer d'un ordinateur à l'autre, par exemple, les opérations mathématiques et le rendu des mouvements.

Pour rendre la vitesse des changements constante, utilisez l'expression //`TimeDelta()`//, qui retourne le temps en secondes depuis la dernière image.

Par exemple, ne faites pas :

![](/gdevelop5/tutorials/update-life-no-timedelta.png)

Mais plutôt :

![](/gdevelop5/tutorials/update-life-timedelta.png)

* Le premier événement consiste à ajouter 20 à la variable à chaque fois que le jeu est rafraîchi (c'est-à-dire autant que possible, jusqu'à 60 fois par seconde). Il n'est **pas correct** d'utiliser un tel événement car la vitesse d'augmentation de la variable ne sera pas la même d'un ordinateur à l'autre : nous ne pouvons pas prédire la valeur de la variable après 10 secondes par exemple - car elle dépend du nombre d'images du jeu peintes.

* Le deuxième événement est **correct et fiable** : le nombre 300 est multiplié par TimeDelta(). Ainsi, la variable sera augmentée en même temps sur tous les ordinateurs. Comme TimeDelta() renvoie un temps en seconde, il vous permet de quantifier exactement l'accroissement : dans notre cas, la variable augmentera à 300 unités/seconde. Ainsi, nous pouvons prédire que les points de vie augmenteront de 3000 unités en 10 secondes - indépendament du nombre de rafraîchissements effectués durant cette période.

!!! tip

    Comme GDevelop exécute votre jeu à un maximum de 60 images par seconde, vous ne remarquerez généralement pas de problème si vous utilisez le premier événement. C'est toujours une bonne idée de garder un oeil sur cela et d'utiliser la version avec `TimeDelta()` à la place.

**Règle de base : ** Utilisez _TimeDelta()_ lorsque vous souhaitez ajouter continuellement un certain montant à une valeur. Si votre action est censée être lancée une seule fois (par exemple, lors d'une collision où vous effacez ensuite l'objet), vous pouvez utiliser une valeur discrète sans TimeDelta - car elle ne dépend pas de la vitesse du jeu.

!!! danger

    Lorsque vous déplacez un objet en utilisant des forces, il n'est pas nécessaire d'utiliser TimeDelta() car GDevelop l'utilise automatiquement.

## Et… c’est l’essentiel de ce que vous devez savoir (ou presque)

➡️ Mais vous pouvez peut-être poursuivre votre lecture par **[les tutoriels](/fr/gdevelop5/tutorials)**  pour en savoir un peu plus à propos de la création de jeux interactifs, inventifs et puissants avec GDevelop!