---
title: Linked Objects Tools Extension
---
# Linked Objects Tools Extension

This extension allows to create graphs (like a road networks) and use it to find path and evaluate distances on this graph (to oppose to distance as the crow flies).

3 examples illustrate how this can be used in games:

  - Match-3 game: a Bust-a-Move clone ([open the project online](https://editor.gdevelop.io/?project=example://bim-bam))
      - to find cluster of bubbles of the same colors
      - to find bubbles that no longer held when some bubbles are removed
  - Tactical games: selection and movement of units on a hexagonal grid ([open the project online](https://editor.gdevelop.io/?project=example://tactical-game-grid-movement))
      - to find cells where a unit can go
      - to make the unit move to the selected cell
  - City builders: evaluator demo ([open the project online](https://editor.gdevelop.io/?project=example://city-builder))
      - to evaluate distance between houses and facilities

## Understand graphs

Graphs are a way to schematize networks like roads, Internet etc. Graphs are composed of nodes (crossroads) represented by a circle and edges (roads) represented by a line between 2 nodes. In GDevelop, nodes are objects and edges are links between objects. If you are not familiar with Linked Objects, it may be better to go through the examples from the [Linked Objects](/gdevelop5/all-features/linked-objects) first.

## Build grids

It's not an obligation to organize nodes on a grid. But, for grid-based games, some actions can help to build such grids:

  - Rectangular Grids
  - Isometric Grids
  - Hexagonal Grids

![](/gdevelop5/all-features/extensions/isometricgrid.png)

The link action doesn't allow to link 2 instances of the same objects. So, 2 objects must be used to build the grid and they will be connected alternatively. Each cell contains one instance of these 2 objects. One will likely be shown to the screen and the other one hidden and only used for calculations on the graph.

## Search objects in a graph

The "can reach" actions pick objects that can be found going from one link to another. Without any filter, every objects of the grid would be picked and it would not be very useful. There several ways to filter which object can be traveled.

### Filter with conditions

Conditions can be added before the search to keep only a subset of the nodes. The match-3 example uses this to keep only the bubbles of one color and find a cluster.

### Filter using several objects

The grid can be build using different kind of object. The search can be done on one object specifically or some group of objects. The city builder example uses roads and houses objects.

![](/gdevelop5/all-features/extensions/isometricgridselection.png)

### Filter on length or cost sum limit

The action allows to limit how far the search will go. The search start by the nearest nodes from the target and spread until a constraint on the number of link or a cost sum to build a path is reached. This is used by the tactical example to show the cells where a unit can go when its selected.

![](/gdevelop5/all-features/extensions/hexagonalgridunitselection.png)

### Search in several steps

Sometimes a search must be done in several steps with different filters. The city builder does this to find a path from a well using roads first and some houses at the end.
