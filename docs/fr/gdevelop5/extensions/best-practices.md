---
title: Conventions d'écriture d'extensions
---
# Conventions d'écriture d'extensions

Cette page recense les conventions pour les extensions [partageable avec la communauté](/gdevelop5/extensions/share):

* **Évènements:**
  * Toutes les **noms de variables** doivent commencer avec `__NomDeLExtension_`. Ceci est nécessaire pour ne pas avoir de nom en conflit avec les variables des utilisateurs. Dans le futur,  les extension auront peut être des variables à part, mais c'est pour le moment nécessaire.
  * Les noms d'actions, conditions et expressions doivent être écrit avec la `PascalCase` et en anglais.
  * Les expressions ne doivent pas commencer en `Get`, vu qu'une expression est toujours un moyen d'obtenir quelque chose et que c'est donc inutile a préciser.

* **Descriptions:**
  * Toutes les descriptions doivent être écrites en anglais. **N'utilisez pas d'abréviations**. Les phrases affichées dans les événements en particulier doivent être claires.
  * Décrivez en détail comment les comportent doivent être utilisés.
  * Pour les descriptions longues d'extensions, veuillez utiliser les tables en format Markdown, et entourer les noms de conditions, actions, expressions et comportements avec ` pour les afficher avec une fonte spéciale.

* **Compatibilité**:
  * Si l'extension utilise des fonctionnalitées qui dépendent de la plateforme, et non des actions inter-plateformes de GDevelop, veuillez tester l'extension sur toutes les plateformes. Il est important qu'elles fonctionnent partout.