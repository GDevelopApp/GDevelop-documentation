---
title: topdown
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**  
*(remove this paragraph once the translation is finished)*

## Comportement du mouvement en vue du dessus

Le comportement "Top-down Movement" permet d'avoir la fonctionalité de déplacement d'un objet dans 4 ou 8 directions.

### Ajout d'un comportement à un objet

Pour ajouter un comportement a un objet, tout d'abord éditez l'objet (clic droit sur l'objet) et sélectionnez l'onglet Behavior. Puis cliquez sur le **+** pour ajouter un comportement.

### Comportement mouvement en vus du dessus

En sélectionnant Top-down Movement dans la liste, cela ajoute la focntionalité à l'obbjet.

![](/gdevelop5/behaviors/top-down-movement-behav-inlist.png)

Après avoir sélectionné ce comportement, les options s'affichent :

![](/gdevelop5/behaviors/topdown-movement-options.png)

### Changer la vitesse du déplacement et de la rotation

En changeant la valeur de Acceleration ou de Deceleration et de Max speed, cela change la vitesse de déplacement de l'objet.

En changeant la valeur de Rotation speed , cela change la vitesse de rotation de l'objet, si vous avez laissé Rotate object. J'expliquerai plus en détail la rotation ci-dessous.

### Modifier l'angle d'orientation d'un sprite

Par défaut, l'angle d'orientation de notre sprite est 0, ce qui est le côté droit de notre sprite, mais nous pouvons changer cela en changeant la valeur du décalage angulaire. Voici une image pour vous aider avec les coordonnées dans GDevelop : ![](/gdevelop5/behaviors/gdevelop_co.png)

### Autoriser le déplacement en diagonales

![](/gdevelop5/behaviors/allow-diagonals-box.png) Cette option est activée par défaut et nous permettons à notre objet de se déplacer également en diagonale, ce qui signifie un mouvement dans 8 directions. En désactivant cette option, nous n'autorisons pas les mouvements diagonaux et donc nous ne pouvons nous déplacer que dans 4 directions, gauche, droite, haut et bas mais pas en diagonale.

### Default controls

![](/gdevelop5/behaviors/top-down-movement-default-controls-box.png) The behavior comes with default controls enabled which is the arrow keys. If we would like to use custom controls to move the object we need to disable this option by unchecking the box and after we need to use the top down movement events to move the object. ![](/gdevelop5/behaviors/top-down-movement-events.png)

### Rotate object

![](/gdevelop5/behaviors/top-down-movement-rotateobject-box.png) By default our object is rotating toward the direction of movement at the speed we specify at the Rotation speed option. If we don't want the object to rotate, we need to disable this option by unchecking the box.

We can change any of these options also using events at any time during the game.

### Examples

List of examples coming soon

- custom controls
