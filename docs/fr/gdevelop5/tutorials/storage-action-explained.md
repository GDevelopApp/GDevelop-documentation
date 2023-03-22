---
title: Explications sur l'action de stockage
---
# Explications sur l'action de stockage

Quand vous voulez sauvegarder ou charger n'importe quelle donnée, votre jeu a besoin d'utiliser les évènements de stockage. Ici je vais vous expliquer ce que chaque option fait, comment lire et écrire des valeurs et comment bien commencer. Après avoir lu cette page, je vous recommande d'aller regarder l'exemple "Save-Load" inclus dans GDevelop.

!!! note

    Les actions de stockage vont stocker les données dans le **stockage interne**. Si vous souhaitez écrire ou lire des **fichiers**, lisez la page [File system](/gdevelop5/all-features/filesystem) mais cette option est uniquement disponible pour les versions ordinateurs natifs (Linux, Windows, MacOS)

### Écrire une valeur

**Stockage :** "nomdustockage"

Le nom du stockage dans lequel vous voulez écrire une valeur. Par exemple, vous voulez peut-être stocker des informations sur le joueur, pour cela, créez un stockage nommé "joueur".

Si vous souhaitez sauvegarder les préférences utilisateurs ou paramètres du jeu, vous pouvez créer un stockage nommé "parametres" ou vous pouvez juste créer un seul stockage pour ~~les contrôler tous~~ stocker toutes les informations à la fois et juste le nommer "sauvegarde".

C'est à vous d'organiser les sauvegardes comme vous le souhaitez.

Si le nom d'un stockage n'existe pas, GDevelop créera le stockage pour vous. Pour faire une analogie, le stockage est un meuble contenant plusieurs tiroirs.

**Groupe :** "nomdugroupe"

Un groupe peut être n'importe quoi, c'est basiquement un tiroir sur lequel vous mettez un nom et dans lequel vous mettez une valeur que vous gardez pour plus tard. En utilisant des groupes, vous pouvez stocker plusieurs valeurs dans le même stockage. Par exemple, la position du joueur peut être stockée dans un groupe et la vie du joueur dans un autre à l'intérieur du même stockage. Ce qui donne :

Groupe: "PositionXJoueur" pour stocker la position X du joueur

Groupe: "ViesDuJoueur" pour stocker le nombre de vies du joueur.

Quand vous chargez une valeur depuis le stockage, vous pouvez utiliser le nom du groupe pour spécifiez quelle valeur vous souhaitez lire. Dans le cas plus haut, la position X du joueur ou son nombre de vies ou n'importe quoi d'autre est enregistrée dans le stockage.

**Expression :** La valeur que vous voulez écrire dans le stockage

Une expression peut être un texte, un nombre, une variable ou n'importe quoi d'autre.

Pour récupérer la valeur stockée dans la variable, nous devons utiliser des *expressions variables* dans le champ d'entrée:

**Variable d'objet :**

objet_nom.Variable(variable_nom)

objet\nom.VariableString(variable_nom)

**Variable de scène :**

Variable(variable_nom)

VariableString(variable_nom)

**Variable globale :**

GlobalVariable(variable_nom)

GlobalVariableString(variable_nom)

Une chose importante à savoir ; **Écrire une valeur" peut être utilisée seulement pour ÉCRIRE UN NOMBRE** et **"Écrire un texte" peut seulement être utilisé pour ÉCRIRE UN TEXTE** dans le stockage. Souvenez-vous-en aussi quand vous utilisez des expressions. Les expressions de textes ne renvoient que du texte alors que les expressions numériques ne renvoies que des nombres. Cela vaut aussi pour les différents types de variables.

### Lire une valeur

Pour lire une valeur depuis le stockage, vous devez a peu près faire la même chose :

**Stockage :** Entrez le nom du stockage depuis lequel vous voulez lire la valeur.

**Groupe :** Entrez le nom du groupe qui contient la valeur.

(Souvenez vous de l'analogie de du meuble avec les tiroirs)

**Variable de scène :** Entrez le nom de la variable dans laquelle stocker la valeur chargée. Notez que cette variable **devrait être une variable de scène** et que le champ d'entrée attends le nom d'une variable de scène existante, pas une expression.

La variable **devrait** aussi être ajoutée (déclarée) à l'avance dans les propriétés de la scène. Si vous souhaitez stocker la valeur chargée dans une variable globale ou une variable d'objet, vous pouvez utiliser une variable de scène "tampon" pour passer la valeur du stockage, à la variable de scène puis à la variable globale/d'objet.

!!! note

    Conseil : Vous pouvez mettre un underscore ("_") ou juste le mot "tmp" devant le nom de la variable temporaire pour signaler qu'elle ne sert que de tampon entre le stockage et une variable de scène ou d'objet. Mais ce choix ne revient qu'à vous

N'oubliez pas : **L'action Lire une valeur est réservé aux nombres** et **L'action Lire un texte est réservé aux textes** ! Les types de variables sont importants et doivent être respectés.

#### Exemples

!!! note

        **Testez le stockage interne par vous même !** 🎮

    Ouvrez cet exemple dans l'éditeur en ligne !

- <https://editor.gdevelop.io/?project=example://save-load>
