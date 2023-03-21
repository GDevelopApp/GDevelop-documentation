---
title: L'objet Text entry
---
# L'objet Text entry

!!! tip
    
        **Voir en action !** 🎮  
    [Je préférerais examiner des exemples d'objet Text entry ! SVPt, faites-les moi voir maintenant.](/#Examples)
    

L'objet **Text entry** (Saisie de texte) capture le texte entré (tapé) par le joueur et le stocke en mémoire. Vous pouvez utiliser cet objet pour simuler des champs de saisie de texte. Par exemple, vous pouvez utiliser l'objet de saisie de texte pour permettre au joueur d'entrer son nom ou toute autre information.

## Ajouter un objet Text entry

Après avoir créé un nouvel objet dans la liste de l'éditeur d'objets, sélectionnez **Text entry** dans la liste des choix affichée.

![](/gdevelop5/objects/add-text-entry-object.png)

Renommez ensuite l'objet **Text entry** comme bon vous semble, puis ajoutez l'objet **Text entry** dans la scène.

Dès maintenant, si vous exécutez une pré-visualisation de la scène, toutes les touches sur lesquelles vous appuierez seront capturées par l'objet et stockées en mémoire. Pour lire les données stockées dans la mémoire, vous devez utiliser une expression comme celle-ci: **`TextEntry.String ()`** (voir un exemple ci-dessous).

## Afficher une information à l'aide d'un objet Text

Commencez par ajoute un objet **Text** à la scène. Ajoutez ensuite un événement pour modifier le contenu de l'objet Text :

![](/gdevelop5/objects/text-entry-object-display-value.png)

Pour le dernier paramètre, qui est le nouveau contenu du texte, utilisez l'expression mentionnée ci-dessus :

![](/gdevelop5/objects/expression-get-text-entry-value.png)

!!! note

     __Entry__ doit être le nom de l'objet **Text entry** . Vous devez remplacer ce nom par défaut par le nom de votre objet **Text entry**.

Si vous exécutez maintenant une pré-visualisation de la scène, lorsque vous commencerz à taper, vous verrez l'objet **Text** afficher tout ce que vous tapez.

En utilisant des événements, il est possible d'activer ou de désactiver l'objet **Text entry**. Les événements vous permettent également de contrôler quand saisir du texte et ne pas saisir du texte.

![](/gdevelop5/objects/textentryobjectevents.png)

## Exemple 

!!! tip
    
        **Voir en action !** 🎮  
    Ouvrez cet exemple en ligne.

![](/gdevelop5/objects/textexample.png)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://text-entry-object){ .md-button .md-button--primary }