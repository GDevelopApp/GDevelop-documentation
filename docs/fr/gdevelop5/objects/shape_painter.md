---
title: L'objet Shape painter
---
# L'objet Shape painter

!!! tip
    
        **Voir en action !** 🎮  
    [Je préférerais examiner des exemples de l'objet Shape painter ! SVP, faites-les moi voir maintenant.](/#Examples)
    

Un objet **Shape painter** (peintre de formes) permet de dessiner des formes dans le  jeu. Ce qui peut être utile pour créer des éléments d'interface utilisateur simples. Le **Shape painter** peut même être utilisé pour créer une boîte de sélection.

####  Ajouter un objet Shape Painter 

Pour ajouter un objet **Shape painter**, créez un nouvel objet à partir de la liste **Properties Editor** (Editeur de propriétés) à droite de l'interface de l'Éditeur de scène. Sélectionnez-cliquez ensuite sur le nouvel objet, sélectionnez **Edit object** et dans la liste qui s'affiche, cliquez sur ** Shape painter**.
Vous devrez peut-être faire défiler la liste pour le trouver.

![](/gdevelop5/objects/add-shape-painter-object.png)

####  Éditer les propriétés 

Il s'agit ensuite d'éditer les propriétés de l'objet pour le faire correspondre à ce que nous voulons. De nouveau, cliquez sur l’objet créé dans la liste des propriétés à droite. Sélectionnez **Edit object** dans la liste déroulante qui s'affiche. Une nouvelle fenêtre s'ouvre. Elle affiche les propriétés de l'objet **Shape painter**.

![](/gdevelop5/objects/shape-painter-properties.png)

####  Changer la couleur et l'opacité 

La fenêtre des propriétés du **Shape painter** présente des options permettant de changer

* la couleur du contour de l'objet (**Outline color**),
* l'opacité de contour de l'objet (**Outline opacity**),
* l'épaisseur de ce contour (**Outline size**),
* la couleur de remplissage de l'objet (**Fill color**),
* l'opacité du remplissage (**Fill opacity**).

![](/gdevelop5/objects/change-color-of-shape-painter.png)

####  Position relative de l'object 

La position par défaut des formes que nous dessinons à l'écran est relative à la positon de l'objet **Shape painter** dans la scène.

![](/gdevelop5/objects/shape-painter-relative-position-property.png)

Dans le cas d'une position relative activée (case cochée dans la figure ci-dessus), la position de la forme dessinée sur l'écran correspondra à la positon 0 sur les axes X et Y. Ce sera la position de l'objet **Shape painter**. Autrement dit, si nous voulons dessiner une forme dont la position sur l’écran est de 100 pixels sur X et de 100 pixels sur Y, sa position sera située à 100 pixels de l’objet **Shape painter** où que ce dernier se trouve sur l’écran.

Lorsque la case est décochée, la position 0 sur les axes X et Y se trouve dans le coin supérieur gauche de la scène, quelle que soit la position de l'objet.

####  Dessiner une forme 

Pour dessiner une forme, créez comme d'habitude un nouvel objet à l'aide de l'Éditeur d'objets. Ajoutez ensuite l'objet **Shape painter** à la scène. Si nous lançons l'aperçu maintenant, nous ne verrons rien. L'objet **Shape painter** ajoute simplement la fonctionnalité pour l'objet. Pour l'instant, il ne contient que les propriétés / paramètres du **Shape painter**. Pour dessiner une forme, nous devons utiliser l'Éditeur de scènes (**Scene Events Editor**). // Si vous n'êtes pas familier avec les événements, je vous recommande de consulter la page des événements sur le wiki .//

Allons dans l'éditeur d'événements de scène (**Scene Events Editor**) pour ajouter un événement. Une fois l'événement ajouté, cliquez sur le texte **add action** (ajouter une action).
Les formes primitives sont listées dans le menu déroulant **Primitive drawing**.

![](/gdevelop5/objects/primitivedrawingeventchoices.png)

Nous avons le choix entre 3 types de formes à dessiner : le cercle, la ligne et le rectangle. Nous allons dessiner un rectangle. Sélectionnez **Rectangle** dans la liste déroulante.

![](/gdevelop5/objects/draw-shape-event.png)

Sur le côté droit, sélectionnez l'objet **Shape painter** à utiliser. Pour la position en haut à gauche (**Top left side**), entrez `0` pour **X** et pour **Y**. Pour la position en bas à droite (**Bottom right side**), entrez `100` pour **X** et **Y**.

![](/gdevelop5/objects/draw-shape-event-properties.png)

Maintenant, si nous lançons un aperçu de la scène, un rectangle de 100 pixels de large et 100 pixels de haut sera dessiné dans la scène.

![](/gdevelop5/objects/rectanlge-shape-painter.png)

Si nous laissons la position relative activée, nous remarquerons que le rectangle est à la même position que l'objet **Shape painter**, même si son point d'origine est 0. Si nous désactivons cette option et lançons à nouveau l'aperçu, nous verrons que l'objet est dessiné dans le coin supérieur gauche de la scène.

L'utilisation des événements permet de modifier les propriétés d’une forme à la volée.

![](/gdevelop5/objects/shapepaintereventsexample.png)

## Exemple 

!!! tip
    
        **Voir en action !** 🎮  
    Ouvrez cet exemple en ligne.

[![](/gdevelop5/objects/shapepainterobject.png)](https://editor.gdevelop-app.com/?project=example://advanced-shape-based-painter)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://advanced-shape-based-painter){ .md-button .md-button--primary }


 