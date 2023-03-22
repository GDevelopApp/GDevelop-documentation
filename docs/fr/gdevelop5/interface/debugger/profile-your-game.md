---
title: Profiler votre jeu
---
# Profiler votre jeu

Le profileur est un outil qui mesure le temps passé dans les différentes parties du moteur pendant que votre jeu est en cours d'exécution. Il aide à trouver des goulots d'étranglement ou des événements qui pourraient prendre beaucoup de ressources dans votre jeu.

Le profiler fait partie du [Debugger](/fr/gdevelop5/interface/debugger).
!!! tip


    [Lisez ici comment ouvrir le Debugger pour votre jeu](/fr/gdevelop5/interface/debugger).

Lorsque le débogueur est ouvert, le profileur est affiché dans la partie inférieure de l'écran :

![](/gdevelop5/interface/debugger/profiler-open.png)

Pendant que le jeu est en cours d'exécution, cliquez sur le bouton **Start Profiling** pour lancer le profiler.
Après quelques secondes, cliquez sur **Stop Profiling** pour terminer les mesures. Le jeu ne stockera que 600 images de mesures, soit environ 10 secondes. Si vous avez mesuré plus de 600 images, les premières mesures seront effacées par les dernières.

Lorsque le profilage est terminé, les résultats sont affichés :

![](/gdevelop5/interface/debugger/profiler-with-results.png)

Chaque section du jeu est affichée. Les sections peuvent contenir d'autres sections.

Les sections sont :

* Objets (pré-événements) - Le temps passé à exécuter des comportements avant les événements.
* Événements - Le temps passé à exécuter les événements. Si vous avez ajouté *groupes* à vos événements, ils seront affichés sous forme de sous-sections. C'est une bonne façon de voir comment chaque partie de vos événements se déroule.
* Objets (post-événements) - Le temps passé à exécuter des comportements après les événements (selon les comportements, ils peuvent être exécutés avant ou après les événements).
* Objets (visibilité) - Le temps passé à vérifier quels objets seront rendus à l'écran.
* Rendu - Le temps passé par le processeur (CPU) pour émettre des appels de rendu vers la carte graphique (GPU).

Notez que le rendu réel sur le GPU n'est pas mesuré ici.

Pour chaque section, vous pouvez voir : le temps total passé dans cette section pendant le temps de profilage, le pourcentage de temps passé dans cette section par rapport au parent et le pourcentage de temps passé dans cette section par rapport au temps total.

* C'est une bonne idée de lancer le profiler pour voir quelle est la partie du jeu qui consomme le plus de ressources. En particulier, jetez un coup d'œil aux événements pour voir si certains groupes d'événements consomment plus de ressources que d'autres.
* Si certains comportements prennent beaucoup de temps, il peut être une bonne idée de voir si vous pouvez réduire le nombre d'objets ayant le comportement, ou désactiver le comportement si ce n'est pas nécessaire.