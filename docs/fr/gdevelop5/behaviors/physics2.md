---
title: Comportement Physique
---
# Comportement Physique

Le moteur (comportement) physique peut être ajouté aux objets pour les faire bouger de manière réaliste, en suivant les lois de la physique. En arrière-plan, l'extension utilise Box2D, une bibliothèque de simulation physique des corps rigides rapide et très complète.   
  
Le comportement physique est basé sur trois grands concepts : le **_monde_** qui contient les corps, les **_corps_** eux-mêmes et les **_joints_** qui relient les corps. Tous sont expliqués en détail dans ce texte.
  
!!! warning

    **Limite** : Comme indiqué ci-dessus, l'extension simule la physique des **_corps rigides_**, ce qui signifie que les corps ne peuvent pas être déformés. Des objets comme les formes molles, les vêtements et les liquides ne sont pas pris en charge.

##Le monde

Le **_monde_** est l'endroit où se déroulent les simulations, les corps et les contacts sont rattachés à un monde pour pouvoir interagir avec d'autres entités.   
Vous n'avez pas à vous soucier de placer des objets dans le monde, les objets utilisant le comportement Physique sont automatiquement ajoutés au monde. De plus, il ne peut y avoir qu'un seul monde à la fois, vous ne pouvez pas exécuter deux simulations indépendantes en même temps.   
La taille du monde, comme celle de GDevelop, est infinie. Vous n'avez donc pas à vous soucier de l'emplacement de vos objets, ils suivront toujours les lois de la physique.   
  
Le monde comporte 3 propriétés :

   * **Gravity** (la gravité) : elle est constituée de deux composantes (**X** et **Y**), et fonctionne comme la gravité terrestre. Elle ajoute une force à chaque objet, le poussant dans la direction donnée. Les objets supportent également un facteur d'échelle de gravité, plus à ce sujet dans la section des corps.
   * **Timescale** (échelle temporelle) : Cette propriété définit l'échelle de temps utilisée par la simulation. Avec une échelle de temps de 0,5, la simulation s'exécute à la moitié de la vitesse normale, avec une échelle de temps de 2, la simulation est deux fois plus rapide et si elle est égale à 0, la simulation s'interrompt. Super utile pour les effets "bullet time" !
   * **Scale** (Échelle) : Dans GDevelop, les distances et les tailles sont définies en pixels mais le moteur physique utilise des mètres. Pour que la conversion se fasse, il faut fournir un facteur d'échelle (celui -ci comporte aussi, comme la gravité, deux composantes, l'échelle en **X** et l'échelle en **Y**). Les valeurs d'échelle indiquent le nombre de pixels par mètre. Par exemple, une valeur de 50 signifie qu'une distance de 50 pixels dans GDevelop est convertie en 1 mètre dans le monde physique.

!!! note

    La règle numéro un pour décider de l'échelle du monde consiste à le choisir de manière à ce que la taille de vos objets mobiles / dynamiques soit comprise entre 0,1 et 10 mètres ; en dehors de cette plage, les simulations perdront en précision. Par exemple, si vous travaillez avec des tailles d’objets d’environ 100 x 100 pixels, une échelle mondiale de 100 serait parfaite, car la taille de votre corps sera d’environ 1x1 mètre. Les objets statiques peuvent être beaucoup plus longs, jusqu'à 50 mètres.

## Les corps

Les **_corps_** sont la _vie_ de l'extension **Physics**, ils définissent le mouvement de l'objet, sa forme, son rebond, sa capacité de rotation ou de déplacement.   
  
Lorsque vous ajoutez le comportement **Physics** à un objet, vous pouvez définir la configuration du corps directement à partir de l'EDI.   

Vous pouvez "jouer" avec les nombreuses options de **Physics** pour modéliser le monde physique selon vos besoin. Ces options sont décrites ci-dessous.

###Les types de corps

GDevelop supporte trois types de corps de base :

   * **Dynamic** : est le type le plus courant. Les **_corps dynamiques_** sont affectés par la gravité et peuvent entrer en collision avec d'autres corps _dynamiques_, _statiques_ et _cinématiques_. Vous pouvez leur appliquer des forces et des impulsions, ainsi que modifier leur vitesse. Presque tout ce qui doit bouger devrait être un corps dynamique.
   * **Static** : Les **_objets statiques_** _ne sont pas_ affectés par la gravité et vous ne pouvez pas les déplacer en utilisant des forces, des impulsions ou en modifiant leur vitesse. Ils ne peuvent entrer en collision qu'avec des objets dynamiques, tout en ignorant la cinématique et les autres corps statiques. Ils sont destinés à être utilisés pour la géométrie statique du monde, comme le sol, les murs non mobiles et les plates-formes.
   * **Kinematic** (Cinématique) : Les **_objets cinématiques_** sont très spécialisés. En tant qu'objets statiques, ils ne sont pas affectés par la gravité, ni par les forces ou les impulsions, mais vous pouvez, tout comme pour les corps dynamiques, les faire se mouvoir par leur vitesse. Les corps cinématiques entrent en collision avec les objets dynamiques uniquement et sont utiles pour simuler des murs et des plates-formes mobiles.

Et quelques paramètres liés à la dynamique :

  * **Bullet** (Obus, balles) : Si la valeur est **true**, l'objet utilisera un algorithme de détection de collision en continu, ce qui réduira légèrement les performances, mais améliorera la réponse lors des déplacements très rapides. Utile pour simuler correctement ... évidemment ... des balles de fusil (ou tout objet très rapide) et réduire les risques que les balles traversent des objets minces.

!!! danger

     Utilisez cette option sur les objets qui en ont vraiment besoin. L'impact sur les performances lorsqu'il est utilisé dans chaque objet déplacé n'est pas * léger *. 

  * **Fixed Rotation** (Rotation bloquée) : Si la valeur est **true**, l'objet ne pourra pas pivoter. Imaginez que votre joueur tourne à chaque fois qu’il heurte un mur ou en descendant une pente.
  * **Can Sleep** (Peut dormir) : Si défini à **true**, le moteur peut améliorer les performances des objets qui ne sont pas déplacés depuis un moment, ce qui les met en veille. C'est juste un paramètre de performance qui ne devrait pas avoir d'impact sur la simulation elle-même.
  
!!! note

     Vous pouvez vérifier si un corps "dort" en utilisant les conditions d'événements. Si un objet dort, cela signifie qu'il est dans un état d'équilibre depuis un moment, utile pour créer des jeux d'équilibre. 

###La forme du corps (Body shape)

Les options **Body shape** (forme du corps) déterminent la forme et la taille du corps et, en fonction du type de forme, vous disposez de différentes options pour définir les dimensions.

  * **Box** (Boîte) : //Un rectangle aligné sur l'axe et centré sur l'objet//. Si la largeur et la hauteur personnalisées ne sont pas définies, c'est la taille de l'objet qui est utilisée.
  * **Circle** (Cercle) : // Un cercle centré sur l'objet //. Si aucun rayon personnalisé n'est défini, il sera calculé comme une moyenne à partir de la largeur et de la hauteur de l'objet. Si l'objet se présente sous la forme d'un carré, le résultat sera un cercle inscrit à l'intérieur de la boîte englobante.
  * **Edge** (Arête) : // Une fine ligne centrée dans l'objet //. Cette forme n'ayant pas de volume, elle ne fonctionne pas bien en tant que corps dynamique, elle est prévue pour être utilisée pour la géométrie statique, le sol et les plateformes. Si une longueur et un angle personnalisés ne sont pas définis, l'arête sera une ligne horizontale avec une longueur égale à la largeur de l'objet.
  * **Polygon** : _Une forme personnalisée définie par ses sommets_. Le polygone doit être convexe et si cette condition échoue, la forme revient à la boîte par défaut. Le nombre de sommets doit être supérieur ou égal à 3 (sinon, il ne peut pas être convexe) et inférieur ou égal à 8 (nombre maximal de sommets pris en charge par polygone) : 3 ≤ nombre de sommets ≤ 8.

Outre le type et la dimension personnalisés de la forme, **Body shape** prend en charge deux options supplémentaires :

   * **Offset** (Décalage) : Le décalage a deux composantes (X et Y) et peut être utilisé pour déplacer la forme à partir du centre de l'objet.
   * **Scale** (Échelle) : Vous pouvez aussi redimensionner la forme. **Scale** redimensionne les dimensions et le décalage personnalisés de la forme. Si vous n'utilisez pas des dimensions personnalisées, par exemple si vous utilisez la forme **Box** et laissez la largeur et la hauteur égales à la taille d'origine de l'objet, il n'est pas nécessaire de modifier l'échelle de la forme car la mise à l'échelle sera effectuée automatiquement. Si le type de forme est **Polygon**, l'échelle modifiera également la position des sommets et l'origine de l'échelle sera **Polygon origin** (Origine du polygone). Si vous définissez l'origine du polygone sur **Center** et réduisez la taille de la forme, les sommets seront réduits jusqu'à et dans la direction du centre de l'objet.

###Paramètres du corps (Body settings)

Outre le type et la forme, les corps physiques disposent de paramètres supplémentaires qui déterminent le comportement du corps en cas de collision, l'impact de la gravité sur celui-ci et l'énergie perdue en raison du frottement de l'air. Chaque réglage est expliqué ci-dessous.

  * **Density** (Densité) : La densité détermine la masse corporelle. La formule générale est `densité = masse/volume`, mais comme il n’y a pas de troisième dimension, nous pouvons partir du fait qu’il s’agit de `densité = masse/surface`. Deux corps ayant la même densité mais des aires/tailles différentes auront une masse différente, vous devez donc en tenir compte lors du redimensionnement des objets.  
  
 __La densité ne peut pas être négative !__  
  
  * **Friction** (Frottement) : Le frottement ajoute une force aux corps en contact, dans le sens opposé à celui de leur mouvement. Plus le frottement est élevé, plus les objets ralentissent au contact. Pour mieux le comprendre, une plate-forme en sable aura un frottement proche de 1 (très haut), alors qu'une plate-forme en glace aura un facteur de frottement proche de zéro.  
  
 __Le frottement ne peut être négatif ! __  
  
Lorsque deux objets sont en contact, le frottement total est calculé à partir des frottement des objets en contact par la formule : `friction = sqrt (frictionA * frictionB)`  
  
* **Restitution** : Détermine la quantité d'énergie que l'objet garde ou perd à chaque collision. Une valeur de **0** signifie que les collisions seront parfaitement inélastiques et que l'objet ne rebondira pas du tout. Alors qu'une restitution valant **1** signifie que les collisions seront parfaitement élastiques et que l'objet rebondira avec la même énergie à chaque fois. Imaginez une balle qui rebondit sur le sol et qui atteint toujours la même hauteur. Les valeurs de restitution supérieures à 1 sont valides, mais l'objet gagne de l'énergie à chaque collision et la simulation risque de ne plus être maîtrisée.   
  
 __La restitution ne peut pas être négative! __   
  
Lorsque deux objets entrent en contact. , la restitution totale est calculée à l'aide de la restitution des objets en collision via la formule : `restitution = max (restitutionA, restitutionB)`  
  
* **Linear Damping** (Amortissement linéaire) : L'amortissement linéaire réduit la vitesse de l'objet à tout moment. Plus la valeur est élevée, plus les objets sont ralentis. Vous pouvez vous la représenter en comparant la viscosité de l’air (qui est faible) à cette de l'eau (plus élevée) et à celle de la mélasse (qui est encore plus élevée. Autrement dit, un objet lancé dans l'air va plus loin que s'il était lancé dans l'eau.   
   
 __Bien que vous puissiez utiliser n’importe quelle valeur, l’amortissement négatif fait que l’objet gagne en vélocité à chaque étape, générant un comportement non-physique.__  
  
* **Angulaire Damping** (Amortissement angulaire) : Analogue à l'amortissement linéaire, mais plutôt que de ralentir la vitesse linéaire de l'objet, il ralentit la vitesse angulaire, autrement dit la vitesse de rotation de l'objet à chaque étape.   
  
__Bien que vous puissiez utiliser n'importe quelle valeur, un amortissement négatif fait que l’objet gagne en vitesse angulaire à chaque étape, générant un comportement non-physique.__  
  
* **Gravity Scale** (Échelle de gravité) : Ce facteur est multiplié par la gravité du monde pour déterminer la gravité appliquée à l'objet. Notez qu'il s'agit d'un nombre et non d'un vecteur, vous ne pouvez pas modifier l'orientation de la gravité, mais uniquement sa magnitude et son sens. Tout nombre est valide, par exemple si **Gravity Scale** vaut `1`, la gravité appliquée sera la gravité du monde, si elle vaut `2`, la gravité sera deux fois plus forte pour cet objet et si elle est égale à `0,5`, elle sera deux fois plus faible. Avec une valeur de `0`, l'objet ne sera pas affecté par la gravité, et si elle vaut `-1`, la gravité sera inversée.  
  
!!! note

     Vous pouvez utiliser une échelle de gravité négative pour inverser la gravité d'un objet spécifique. 

### Calques et  masques

Les calques et les masques permettent de filtrer les collisions entre objets. Imaginez que vous construisez un jeu de zombies et que vous voulez que votre joueur entre en collision avec le sol et que les zombies entrent en collision avec le joueur et avec le sol également, mais vous ne voulez pas que les zombies se heurtent avec d'autres zombies, Dans ce cas, vous avez besoin de filtres de collision.

Comment fonctionnent les filtres ?
Il n'y a qu'une seule règle :

!!! warning

     Deux objets `A` et `B` peuvent entrer en collision si n'importe quel calque de `A` correspond à n’importe quel masque de `B` **et** que n'importe quel calque de `B` correspond à n’importe quel masque de `A` 

Voici une solution possible au problème des zombies évoqué ci-dessus :

   * Sol : activez le premier calque et les premier et deuxième masques.
   * Joueur : activez le premier calque et les premier et deuxième masques.
   * Zombie : Activer le deuxième calque et le premier masque uniquement.
Pourquoi cela fonctionne-t-il ?

   * Sol et joueur : un calque de sol correspond à un masque de joueur (premier) **et** un calque de joueur correspond à un masque de sol (premier).
   * Sol & Zombie : un calque de sol correspond à un masque de zombie (premier) **et** un calque de zombie correspond à un masque de sol (deuxième).
   * Joueur & Zombie : un calque joueur correspond à un masque de zombie (premier) **et** un calque zombie correspond à un masque de joueur (deuxième).
   * Zombie & Zombie : seul le deuxième calque est activé pour le zombie, et seul le premier masque est activé, afin que les zombies ne puissent pas se heurter.

Notez que vous disposez de 16 calques et de 16 masques, et pour résoudre notre petit problème, il ne vous a fallu que 2 calques et masques.

###Mouvement

Après avoir configuré vos objets, il est temps de commencer la simulation : la gravité commence d'agir, les objets bougent et se heurtent, mais vous ne pouvez pas interagir avec le jeu. Il est temps de déplacer les objets vous-même et pour ce faire, vous devez utiliser le système des événements. Voici quelques actions utiles pour interagir avec les objets et les déplacer comme vous le souhaitez.

!!! danger

     Les forces intégrées de GDevelop ne conviennent pas au comportement **Physics**. Pour définir la vitesse linéaire, utilisez les forces spécifiques à la physique ou aux actions de la physique. 

* **Forces** : Les forces modifient le mouvement d'un objet et sont destinées à être utilisées pendant un certain temps pour générer un effet appréciable. La vitesse que l'objet gagne lorsque vous lui appliquez une force dépend de la magnitude de la force et de la masse de l'objet. Un objet lourd se déplacera plus lentement qu'un objet plus léger si la même force est appliquée sur les deux masses.   
  
__Il faut définir un point d'application pour ajouter et utiliser une force.__   
  
* **Torques** (Couples) : Analogues aux forces mais pour la rotation. Un couple générera une accélération angulaire sur l'objet, le faisant tourner plus vite ou plus lentement dans le temps.  
  
* **Impulses** (Impulsions) : Semblables aux forces, mais ne dépendent pas du temps, elles ajoutent instantanément une "quantité" de vélocité. Elles sont censées être utilisées une seule fois. Une utilisation courante pourrait être de simuler des sauts : chaque fois que vous appuyez sur le bouton de saut, vous ajoutez une impulsion vers le haut.   
  
__Il faut définir un point d'application pour ajouter une impulsion.__   
  
* **Angular Impulses** (Impulsions angulaires) : Analogues aux impulsions mais pour la rotation. Change la vitesse de rotation d'un objet instantanément.

* **Velocity** (Vélocité) : Vous permet de modifier directement la vélocité d'un objet. Par exemple, vous pouvez faire marcher votre personnage à vitesse constante, puis modifier la vélocité tant que vous appuyez sur un bouton de mouvement.

* **Angular Velocity** (Vitesse angulaire) : Vous pouvez également définir directement la vitesse angulaire (vitesse de rotation).

!!! warning

     Vous pouvez modifier directement la position des objets, mais cela générera des comportements non physiques, du moins jusqu'à ce que la nouvelle position soit corrigée. Après tout, les objets ne se téléportent pas dans la vie réelle. 

Notez que les forces et les impulsions ont besoin d’un //point d’application//. C’est important car c n'est pas pareil de pousser un verre à la base (pour déplacer le verre) que de le pousser dans le haut (le verre va probablement tomber), ni de pousser une porte vers sa poignée ou vers ses charnières.   
Si le point d'application est différent du centre de gravité de l'objet, il générera une sorte de couple/rotation.

!!! note

     Vous pouvez obtenir le centre de gravité d'un objet en utilisant les expressions de comportement **Physics** `MassCenterX ()` et `MassCenterY ()` 

##Les joints (Joints)

Les joints sont des restrictions données aux objets pour leur faire suivre des règles de mouvement supplémentaires. Certains joints font pivoter les objets autour d’un point fixe, d’autres maintiennent deux objets ensemble, les plus complexes simulent les roues du véhicule, limitant la distance entre les corps tout en leur permettant de tourner librement.

** Joint ID ** (ID du joint) :   
Lorsque vous créez un joint, vous pouvez lui transmettre un nom de variable. Si vous le faites, GD stockera le numéro d'identification unique (**ID**) du joint dans la variable donnée. En vous servant de **Joint ID**, vous pourrez le modifier après sa création, vérifier ses valeurs et le supprimer. Imaginez que vous créez un joint pour attacher une clé à une ficelle fixée au toit. Si vous enregistrez l'ID du joint dans une variable, vous pourrez vérifier si un objet entre en collision avec la ficelle et supprimer le joint à l'aide de l'ID enregistrée pour faire tomber la clé.
!!! note

     Un **Joint ID** sera toujours un nombre supérieur à zéro.

En règle générale, vous aurez besoin de deux objets pour définir un joint (dans l'exemple précédent, la corde et la clé), mais il existe des "exceptions". Consultez l'explication fournie dans  **Revolute joint** si vous souhaitez en savoir plus.

Voici une liste des propriétés, conditions et actions communes à tous les types de joints.

* ** Joint first/second object ** (Premier/second objet du joint) : conditions qui vous permettent de sélectionner des objets s’ils sont le premier ou le second objet reliés par le joint.
* ** Joint first/second anchor X/Y ** (Ancrage X/Y du premier/second  objet) : expressions permettant d'obtenir la position du premier ou du deuxième point d'ancrage de l'objet relié par le joint.
* ** Joint reaction force/torque **  (Force/couple de réaction du joint) : Conditions et expressions permettant de vérifier la force ou le couple de réaction du joint, cette valeur indique à quelle distance se situe le joint par rapport à son état d'équilibre. Si la force de réaction du joint est trop élevée, cela signifie que le joint a été séparée de sa position d'équilibre par une force considérable. Utile pour faire des joints cassables.
* **Remove joint** (Supprimer le joint) : Action pour supprimer le joint spécifié. Si le joint est l'un des enfants d'un joint de type engrenage, l'engrenage sera également supprimé. Si l'un des objets relié par le joint est supprimé, le joint sera également supprimé.

Il existe de nombreux types de joint, chacun avec des comportements et des propriétés uniques. Ils sont énumérés ci-dessous.

!!! warning

     Assurez-vous de créer les joints dans les événements qui ne s'exécutent qu'une seule fois (par exemple, au début de la scène). La créations de joints à chaque image créera des centaines de de joints en quelques secondes, ce qui entraînera des performances médiocres, des comportements non physiques, voire faire planer la machine en raison de l'énorme consommation de mémoire. 

### Distance Joint

**Distance joint** essaie de garder deux objets séparés par une distance donnée, la distance est calculée à partir des points d'ancrage du joint.
Les objets ne seront pas à la distance donnée tout le temps mais auront tendance à l'atteindre, en utilisant une formule d'oscillateur.

Paramètres :
* **Length** (Longueur) : La distance de la cible. Si une valeur négative est donnée, c'est la distance entre les objets au moment de la création du joint qui est utilisée.
* **Damping ratio** (Rapport d'amortissement) : Le "frottement" des objets va souffrir, des valeurs faibles font osciller davantage les objets, des valeurs plus élevées réduisent les oscillations mais les objets bougent plus lentement.
* **Frequency** (Fréquence) : Spécifie à quelle vitesse les objets vont osciller, des valeurs faibles génèrent des joints souples se déplaçant plus lentement pour atteindre la distance cible, des valeurs plus élevées simulent des joints plus rigides avec des objets se déplaçant très rapidement pour atteindre la cible.

!!! note

     Les valeurs d'amortissement et de fréquence faibles généreront des joints souples, avec de nombreuses oscillations avant de se rapprocher de la distance cible, tandis que des valeurs élevées pour les deux réglages génèrent des joints très rigides. 

### Revolute Joint

Les joints **Revolute** fonctionnent comme des axes, ils sont également appelés **_charnières_**. Ils font pivoter les objets autour d’un point.
Il existe deux types de joints **Revolute**, qui sont presque les mêmes, mais avec une petite différence.

* **Revolute joint between two objects** (Joint tournant entre deux objets) : il relie deux objets qui les objets se déplacent ensemble de manière à ce que leurs points d'ancrage se chevauchent, et chaque objet pivote autour de son point d'ancrage. Imaginez que vous épingliez deux cartes ensemble et les lanciez afin qu'elles bougent et tournent librement autour de l'épingle.
* **Revolute joint in a single object** (Joint tournant dans un seul objet) : Les joints fonctionnant généralement entre deux objets, celui-ci représente l'une des exceptions. Ce joint nécessite un seul objet et son point d'ancrage épingle l'objet à la position fixe donnée. Pensez-y comme si vous épingliez une note sur un tableau d'affichage : la note peut pivoter autour de l'épingle mais ne peut pas bouger.

!!! note

     Notez que, dans la version du joint à objet unique, l'objet est ajouté en tant que deuxième objet du joint, le premier objet est un corps statique masqué, ce qui permet d'utiliser ce type de joint dans les engrenages (expliqué dans la section joint d'engrenage). 

Voici la liste des paramètres spécifiques aux joints **Revolute** :

* **Angle limits** (Limites d'angle) : Si activé, la rotation sera limitée entre les angles `minimum` et `maximum`. Notez que les deux angles sont relatifs au premier objet.
* **Reference angle** (Angle de référence) : L'angle entre les objets sera considéré comme nul. Il décale toutes les propriétés de l'angle. Si l'angle de référence est de 15 degrés, demander l'angle courant de l'articulation lorsque l'angle entre les objets est de 15 degrés en coordonnées universelles retournera 0, et si vous définissez l'angle maximal à 30, il retournera 45 (par rapport au premier objet).
* **Minimum angle** : L'angle minimal entre les objets, par rapport au premier objet. Doit être inférieur ou égal à l'angle maximal.
* **Maximum angle** : L'angle maximal entre les objets, par rapport au premier objet. Doit être supérieur ou égal à l'angle minimal.

!!! tip

     Vous pouvez utiliser des joints **Revolute** avec des limites d’angle pour simuler des articulations charnières 

* **Motor** : Si activé, ce joint ajoutera du couple au second objet pour le faire tourner sans avoir besoin d'une force externe ... comme un moteur. Si vous l'activez, pensez à définir une vitesse de moteur et un couple moteur maximal !
* **Motor speed** (Vitesse du moteur) : La vitesse du moteur cible, en degrés par seconde. Il s’agit de la vitesse que le deuxième objet essaiera d’atteindre en tournant autour du premier objet. La vitesse du moteur peut être positive pour faire tourner l'objet dans le sens des aiguilles d'une montre ou négative pour le faire tourner dans le sens contraire des aiguilles d'une montre.
* **Maximum motor torque** (Couple moteur maximal) : Le couple maximal que le moteur peut utiliser pour atteindre la vitesse de rotation cible. Doit être positif.

Vous pouvez de plus accéder aux valeurs suivantes pendant la simulation :

* **Joint angle** (Angle du joint) : L'angle actuel entre les objets, par rapport au premier objet et affecté par l'angle de référence.
* **Joint speed** (Vitesse du joint) : vitesse angulaire actuelle du joint, c'est-à-dire la vitesse autour de laquelle tourne le deuxième objet, par rapport à la rotation du premier objet.
* **Joint motor torque** (Couple moteur commun) : Le couple du moteur actuel peut être inférieur au couple moteur maximal, car il s'agit du couple requis pour atteindre la vitesse cible du moteur.

!!! note

     Les joints tournants peuvent également être utilisés pour : des leviers de flipper, des portes de type store, des machines tournantes automatiques en tant ponts levis ou tournants. 



### Prismatic Joint

Les joints prismatiques **Prismatic Joint** fonctionnent comme des **_pistons_** et sont également appelées _curseurs_. Ils font glisser des objets les uns sur les autres selon une direction donnée. Un bon exemple est un ascenseur, l’ascenseur se déplaçant dans un sens vertical le long d’un rail, le rail serait le premier corps du joint et l’ascenseur le second, la direction de l’axe serait un angle dirigé vers le haut ou le bas (-90 ou 90 degrés) .

Paramètres  spécifiques aux joints prismatiques

* **Axis angle** (Angle de l'axe) : L'angle déterminant la direction du mouvement. Un angle d'axe égal à **`0`** définit un mouvement horizontal. La valeur est donnée en coordonnées universelles, mais l'axe pivote en suivant la direction du premier objet (si vous faites pivoter les rails de votre ascenseur, l'angle de mouvement de l'ascenseur pivote également).
* **Reference angle** (Angle de référence) : Comme pour les joints  tournants, cet angle ajoute un décalage à l'axe, établissant un nouvel "angle zéro". Si l'angle de référence est 15, un angle d'axe de 15 en coordonnées du monde (par rapport à la direction du premier objet) sera traité en tant que 0.
* **Translation limits** (Limites de translation) : Si activé, le mouvement du second objet sera limité entre les translation minimale et maximale données.
* **Minimum translation** : La distance minimale dont le deuxième objet peut se déplacer par rapport au premier. Dans notre exemple d'ascenseur, la translation minimale serait le sol.
* **Maximum translation** : La distance maximale dont le second objet peut se déplacer par rapport au premier. Dans notre exemple d'ascenseur, le toit.

!!! warning

     La plage des limites de translation doit inclure le zéro. Une tranlation minimale de 5 et maximale de 10 (plage [5, 10]) sera convertie en plage [0, 10] pour inclure le zéro. 

* **Motor** : Si activé, le joint appliquera une force au second objet pour que le moteur atteigne une vitesse donnée. Si vous l'activez, pensez à définir une vitesse et une force maximales pour le moteur !
* **Motor speed** (Vitesse du moteur) : La vitesse finale que le moteur essaiera d'atteindre. Si positif, le second objet se déplace dans la direction de l'axe et dans la direction opposée si elle est négative.
* **Maximum motor force** (Force maximale du moteur) : La grandeur maximale de la force que le moteur peut dépenser pour atteindre la vitesse cible. Doit être positif.

Vous pouvez en plus accéder aux paramètres ci-dessous pendant la simulation.

* **Joint translation** (Translation du joint) : La distance actuelle dont le deuxième objet a été déplacé par rapport au premier.
* **Joint speed** (Vitesse du joint) : La vitesse actuelle du deuxième objet le long de son axe par rapport à la vitesse du premier objet.
* **Joint motor force** (Force motrice du joint) : Force actuelle appliquée par le moteur au deuxième objet. Cette valeur peut être inférieure à la force motrice maximale car il s'agit de la force nécessaire pour atteindre la vitesse cible du moteur.


###Pulley joint (joint de type poulie)

Un joint simple avec un nom simple. Ce joint rend la somme des distances de chaque objet à leur position par rapport au sol (point d'ancrage) constante. Il est beaucoup plus facile à comprendre en utilisant d'autres mots : il simule une poulie).

Imaginez que vous ayez une boîte suspendue à 3 mètres sous un point fixe A et un cercle suspendu à 2 mètres sous un point fixe B, les deux objets étant fixés aux extrémités de la même corde passant par une poulie. La corde a une longueur constante. Ainsi,  si vous déplacez la boîte vers le haut de 2 mètres, donc maintenant suspendue à seulement 1 mètre sous A, le cercle doit descendre de la même distance, donc maintenant être à 4 mètres sous B. Il en résulte que la distance entre la boîte et le point A plus la distance entre le cercle et le point B est toujours de 5 mètres:   
  
`distance (boîte, A) + distance (cercle, B) = constante`


**Ratio** :  
Facile, non ? Maintenant la partie un peu folle : ce joint supporte un paramètre supplémentaire : **ratio** (rapport). **Ratio** rend la corde plus extensible d'un côté que de l'autre. Par exemple, 1 mètre de corde du côté de la boîte peut être équivalent à 2 mètres de corde du côté cercle (rapport = 1/2 = 0,5).

Revenons à notre exemple initial : la boîte à 3 mètres sous A, le cercle à 2 mètres sous B, mais avec un rapport de 0,5. Si vous déplacez la boîte de 2 mètres vers le haut, le cercle se déplace de 4 mètres vers le bas. La longueur de la corde n’est clairement plus constante, mais :   
  
`distance (boîte, A) + rapport * distance (cercle, B) = constante`  
  
(Notez que la première équation est un cas particulier de celle-ci, avec **ratio** = 1).

Veuillez également noter qu'il n'y a véritablement pas de "corde" du tout, le joint fonctionne uniquement avec la distance entre les objets et les points d'ancrage !

Voici les paramètres courants :

* **First ground point** (Premier point d'ancrage) : Le point fixe auquel le premier objet est attaché (dans les exemples, le point A).
* **Second ground point** (Deuxième point d'ancrage) : Le point fixe auquel le deuxième objet est attaché (dans les exemples, le point B).
* **First length** (Première longueur) : Longueur initiale de la corde entre le premier objet et son point d'ancrage. Si la valeur est négative ou égale à zéro, c'est la distance au moment de la création du joint qui est utilisée.
* **Second length** (Deuxième longueur) : Longueur initiale de la corde entre le deuxième objet et son point d'ancrage. Si la valeur est négative ou égale à zéro, c'est la distance au moment de la création du joint qui est utilisée.
* **Ratio** (Rapport) : Expliqué ci-dessus. C'est le rapport entre les distances de chaque côté. Si le rapport est égal à 0,33, 1 mètre du premier côté équivaut à 3 mètres du deuxième côté.

###Gear Joint (joint engrenage)

Ce joint est très spécial car, au lieu de joindre deux corps directement, les engrenages joignent deux autres joints. Ces joints enfants doivent être de type **revolute** ou **prismatic**.   
Lorsque deux joints sont reliés par un joint **Gear**, le mouvement de l'un des joints provoque le déplacement de l'autre joint. Par exemple, le déplacement d'un objet le long de l'axe d'un joint **prismatic** entraîne la rotation du joint **revolute** qui lui est liée, et inversement.

Mais ce joint est aussi très délicat à manier ! Pour faire fonctionner un engrenage, le premier corps du joint de chaque enfant doit être _statique_ et le second _dynamique_.   
Vous pouvez assembler deux joints **revolute**, deux joints **prismatic** ou un joint **revolute** et un joint **prismatic**, mais le premier corps de chaque joint doit toujours être **_statique_** !

!!! note

     Le premier corps des joints enfants de l'engrenage doit être statique. C'est pourquoi la version à objet unique du joint **revolute** précise que le premier corps est un objet statique masqué 

Les paramètres du joint **Gear** :

* **First joint** (Premier joint) : Un joint **revolute** ou **prismatic** sera lié au second joint.
* **Second joint** (Second joint) : Un joint **revolute** ou **prismatic** sera liée au premier joint.
* **Ratio** (Rapport) : comme le joint de type poulie, les engrenages supportent un "rapport" et fonctionnent de manière similaire : si vous reliez deux joints **revolute** avec un rapport de 0,33, chaque tour dans le premier **revolute** équivaut à trois tours dans le second. Il existe toutefois une différence par rapport au rapport des joints de type poulie : les rapports des engrenages peuvent être négatifs, ce qui permet à un mouvement positif dans l’une des articulations de générer un mouvement négatif dans l’autre. Par exemple, lorsque vous reliez deux joints avec un ratio de –1, une rotation dans le sens des aiguilles d'une montre génère une rotation dans le sens inverse des aiguilles d'une montre dans l'autre, un peu comme un engrenage, non ?

!!! warning

     La condition nécessaire à l'existence d'un engrenage est l'existence des deux joints enfants. Si l'un des deux joints est supprimé, l'engrenage est automatiquement supprimé. 


###Mouse Joint (joint souris)

Ce joint n'est pas nécessairement liée à la souris, mais c'est très courant. Ce joint ne fait que déplacer un objet vers une position cible. Si vous mettez continuellement à jour la position de l'objet  pour cibler la souris ou l'endroit où vous avez appuyé, vous pouvez faire glisser des objets.

Notez que **Mouse Joint** une autre exception parmi les joints, car il ne nécessite qu'un seul corps pour fonctionner : l'objet qui sera déplacé vers la cible.

Paramètres pour le joint souris :

* **Object** : L'objet à déplacer, vers la position cible.
* **Target** (Cible) : le point cible que l'objet essaiera d'atteindre. Vous pouvez le mettre à jour autant de fois que vous le souhaitez après la création du joint
.
!!! warning

     La position initiale de la cible (au moment de la création du joint) est également utilisée comme point d'ancrage de l'objet. Veillez donc à la définir ! 

* **Maximum force** (Force maximale) : La force maximale que le joint peut appliquer à l’objet pour atteindre la position de  la cible. Plus la force est grande, plus l’objet se déplace rapidement. Ce paramètre doit être positif.
* **Frequency** (Fréquence) : Fonctionne comme la fréquence du joint distance. Il déterminant la vitesse à laquelle l'objet oscille autour de la cible.
* **Damping ration** (Rapport d'amortissement) : Fonctionne comme le rapport d'amortissement du joint distance, en ralentissant l'objet au cours du temps.

!!! note

     **Mouse Joint** n'est pas limité à son utilisation avec la souris, il accepte n'importe quel point du monde comme cible. 


###Wheel Joint

**Wheel Joint** (joint de roue) est  un joint très spécifique. Vous aurez besoin de ce joint lorsque vous voulez utiliser une ou des roues, et il est difficile de penser à un cas différent de celui d'une roue de véhicule pour laquelle le meilleur joint est **Wheel Joint**.   
  
Conçu pour simuler les roues de véhicules, ce joint ne fait que cela, mais le fait très bien !

Vous pouvez vous représenter le joint **Wheel** comme une combinaison du joint **Revolute** et du joint **Prismatic** :

* Le joint **Revolute** permet de faire tourner le deuxième objet (la roue) et, comme le joint **Revolute** classique, il comporte un moteur simulant le moteur du véhicule faisant tourner la roue.
* La fonction du joint **Prismatic** consiste à simuler la suspension de la roue du véhicule et, tout comme avec le joint **Prismatic** classique, vous pouvez définir l'angle de l'axe pour définir le sens de translation de la roue. C'est généralement la direction de l'axe vertical, mais, par exemple, les motos ont une direction de suspension de la roue avant différente (et parfois très éloignée) de la verticale.

!!! warning

     Le corps qui fera office de roue doit être le deuxième objet de l'articulation. 

Voici les paramètres du joint **Wheel**

* **Axis angle** (Angle d'axe) : Équivalent à l'angle d'axe du joint **Prismatic**, il détermine la direction du mouvement (ou du glissement) entre la roue et le premier objet.
* **Frequency** (Fréquence) : La fréquence de l'oscillation de la suspension, équivalent à la fréquence du joint **Distance**. Des valeurs élevées font osciller la roue plus rapidement.
* **Damping ratio** (Rapport d'amortissement) : L'amortissement de la suspension, équivalent au rapport d'amortissement du joint **Distance**. Plus la valeur est élevée, plus le mouvement de la roue est ralenti.
* **Motor** : Si activé, le joint ajoutera un couple à la roue (deuxième objet) pour atteindre la vitesse souhaitée du moteur. Si vous l'activez, n'oubliez pas de régler la vitesse du moteur et le couple moteur maximal !
* **Motor speed** (Vitesse du moteur) : La vitesse angulaire que la roue tentera d'atteindre. Peut être positif pour une rotation dans le sens horaire ou négatif pour une rotation dans le sens anti-horaire.
* **Maximum motor torque** (Couple moteur maximal) : Couple maximal que l'articulation peut appliquer à la roue pour atteindre la vitesse désirée du moteur. Doit être positif.

Et voici quelques paramètres supplémentaires auxquels vous pouvez accéder pendant la simulation :

* **Joint translation** (Translation du joint) : La translation actuelle de la roue le long de l'axe de suspension.
* **Joint speed** (Vitesse du joint) : La vitesse de rotation actuelle de la roue.
* **Joint motor torque** (Couple moteur du joint) : Le couple actuel que le joint applique à la roue, il peut être inférieur au couple maximal du moteur, car il s'agit du couple nécessaire pour atteindre la vitesse cible.


###Weld Joint

Ce joint (soudure en français) est super basique, il essaye juste de coller deux objets ensemble et de les déplacer comme s'il s'agissait d'un seul objet.

!!! warning

     Vous pouvez l'utiliser pour fabriquer des objets cassables, mais n'abusez pas ! Si presque tous les objets sont attachés par des joints souples et que de nombreux objets sont collés ou ont densités très différentes, des résultats physiquement inexacts peuvent se produire 

Paramètres spécifiques du joint **Weld** :

* **Reference angle** : L'angle que le second objet a par rapport à l'angle du premier objet.

!!! note

     Pour coller les objets dans l'angle qu'ils ont au moment de la création du joint, utilisez l'angle relatif entre les objets comme angle de référence : \\ `SecondObject.Angle () - FirstObject.Angle ()` 

 * **Frequency** : Fonctionne comme la fréquence du joint **Distance**. Il déterminant la vitesse à laquelle les objets vont osciller pour atteindre la position de repos.
* **Damping ratio** (Rapport d'amortissement) : Fonctionne comme le rapport d'amortissement du joint **Distance**, en ralentissant les objets au cours du temps.


###Rope Joint

Le joint **Rope** (corde) est autre joint simple : il fait en sorte que deux objets soient virtuellement reliés par une corde. Il en résulte qu'ils ne peuvent pas être séparés par une distance supérieure à la longueur de la corde, mais peuvent bien sûr être séparés d'une distance inférieure à celle-ci.

Comme dans le joint **Pulley**, il n'y a pas du tout de corde réelle, le joint vérifie simplement la distance entre les objets et réagit si la distance est supérieure à la longueur donnée.

Le seul paramètre spécifique pour le joint **Rope** est :

* **Maximum length** (Longueur maximale) : La distance maximale entre les objets. Si la valeur initiale est négative, c'est la distance entre les objets au moment de la création du joint qui est utilisée.


###Friction Joint

Le joint de friction simule le frottement selon un axe Z, il ralentit la vitesse relative et/ou la vitesse angulaire entre deux objets, de manière à pouvoir simuler un frottement linéaire et/ou angulaire.

!!! tip

     Si l'un des objets est statique, vous pouvez utiliser le joint de friction pour simuler correctement la friction dans un jeu "top-down", comme une table de billard ou des jeux de course "top-down". 

Paramètres du joint **Friction**

* **Maximum force** (Force maximale) : La force maximale que le joint peut appliquer aux objets, des valeurs plus élevées génèrent un frottement linéaire plus important.
* **Maximum torque** (Couple maximal) : Le couple maximal que le joint peut appliquer aux objets, des valeurs plus élevées génèrent un frottement angulaire plus élevé.


###Motor Joint

Le joint **Motor** n'a pas grand-chose à voir avec les vrais moteurs, du moins pas directement. Lorsque vous liez deux objets avec un joint **Motor**, ils essaieront d'atteindre une position cible et/ou un angle par rapport à l'autre objet, plus un décalage.

Deux choses sont à prendre en compte :

* Le joint n'est pas du tout rigide, les objets peuvent être éloignés de leur position ou de leur angle cible. Un facteur de correction indiquera la vitesse à laquelle ils se déplaceront et pivoteront pour atteindre la position finale.

Par exemple, imaginez un sac de frappe (utilisé par les boxeurs)  qui se relève toujours. Vous pouvez le simuler en utilisant un joint moteur, reliant le sol et le sac. Ainsi, quel que soit le nombre de poussées sur l'objet sac, le joint tentera de le replacer dans l'angle initial, mais pas automatiquement.

* Les joints **Motor** s’arrêtent si ils rencontrent des obstacles.

Revenons à l'exemple du sac de frappe : si vous le poussez avec un gros objet pour le maintenir au sol, le joint moteur ne pourra pas le repousser, comme dans la vraie vie.

!!! note

     Notez que ce joint n'utilise pas de points d'ancrage, la position de décalage doit être définie à l'aide des décalages linéaires et angulaires uniquement. L'accès aux points d'ancrage de ce joint renvoie les positions des objets. 

Les paramètres spécifiques du joint **Motor** :

* ** Offset X/Y ** (Décalage X / Y) : Décalage du deuxième objet par rapport au premier. Pour utiliser la position actuelle des objets au moment de créer le joint, utilisez les formules :

`SecondObject.X () - FirstObject.X ()` et  `SecondObject.Y () - FirstObject.Y ()`

* **Offset angle** (Angle de décalage) : Décalage angulaire du deuxième objet par rapport au premier. Pour utiliser l'angle relatif des objets actuels au moment de la création du joint, utilisez la formule :

`SecondObject.Angle () - FirstObject.Angle ()`

* **Maximum force** (Force maximale) : Force maximale que le joint peut appliquer aux objets pour les déplacer vers la position cible. Des valeurs plus élevées déplacent les objets plus rapidement, au besoin. Si cette valeur est égale à zéro, il n'y aura pas de déplacement linéaire et les objets ne se déplaceront pas pour atteindre la position cible.
* **Maximum torque** (Couple maximal) : Couple maximal que le joint peut appliquer aux objets pour les faire pivoter selon l'angle désiré. Des valeurs plus élevées feront tourner les objets plus rapidement, au besoin. Si cette valeur est égale à zéro, il n'y aura pas de déplacement angulaire et les objets ne pivoteront pas pour atteindre l'angle cible.
* **Correction factor** (Facteur de correction) : Vitesse à laquelle les objets doivent se déplacer et pivoter pour atteindre la position et l'angle désirés. Plus la correction est élevée, plus les objets bougent et/ou pivotent rapidement. La correction est limitée par la quantité maximale d'effort et de couple que le joint peut utiliser.