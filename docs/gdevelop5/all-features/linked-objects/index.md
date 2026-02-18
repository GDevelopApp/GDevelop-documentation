---
title: Linked Objects
---
# Linked Objects

Actions and conditions of the "Linked Objects" category allow you to create virtual connections between object instances. You can later retrieve those connected instances by their link, without needing to store object references in variables. Links are **bidirectional**: linking object A to object B also makes B linked to A.

!!! tip

    You can also use a "For each object" event to iterate over each instance of an object individually and create links to other objects. Learn more about the "For each object" event by visiting [this page about For each event](/gdevelop5/events/foreach).

!!! tip

    Some of the linked object operations are available as both a condition and an action. The condition variant is false if no linked object was found (useful to branch logic), while the action variant always succeeds even if nothing is picked.

## Linking objects

Use the **Link two objects** action to create a connection between instances. Links are set up once — typically when an object is created — and then used repeatedly throughout the game. A single object can be linked to many others, and there is no hard limit on the number of links.

## Picking linked objects

Use **Take into account linked objects** to narrow the current object selection to only instances that are linked to another specific set of objects. The picked instances then carry forward into the next actions and sub-events. This is the core mechanism for acting on relationships, for example: "for each enemy, deal damage to the health bar linked to that enemy."

When used as a **condition**, it also returns false if nothing was picked — useful for checking whether a link exists at all before acting on it.

## Removing links

- **Unlink two objects** removes the connection between a specific pair of instances.
- **Unlink all objects from an object** removes every link associated with the given instance(s).

When an object is **deleted from the scene**, all its links are automatically cleaned up so that other objects no longer point to the removed instance.

## Use cases

Linked objects are well suited for **permanent one-to-one or one-to-many relationships** that would be cumbersome to track with variables:

- Attach a health bar object to a character and always update the correct bar.
- Link equipment items to the character currently holding them.
- Connect terrain tiles to the pathfinder or enemy that "owns" them, so the terrain follows when the owner moves.
- Build graph structures for AI, where each node object is linked to its neighbours.

!!! tip

    For grid-based linking (rectangular, hexagonal, or isometric grids) and graph traversal, see the [Linked Objects Tools extension](/gdevelop5/all-features/extensions/linked-objects-tools).

## Examples

In this example, for every existing "Pathfinder" object, a new "Terrain" object is created.  This creation and linking step only needs to be performed one time.  The bottom event is run every frame and will cause the "Terrain" objects to always follow the "Pathfinder" object they are linked to.

![](/gdevelop5/all-features/linkobjectsandfollowposition.png)

!!! tip

        **See it in action!** 🎮
    Open these examples online.

**Magnet**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://magnet){ .md-button .md-button--primary }

**Pin objects**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://pin-object-to-another-multiple-parents){ .md-button .md-button--primary }

!!! tip

    The [Sticker](/gdevelop5/all-features/extensions/sticker) behavior also allows to pin objects.

**Basic artificial intelligence**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://basic-artificial-intelligence){ .md-button .md-button--primary }

!!! tip

    To see more advance usages, take a look at the [Linked Objects Tools extension page](/gdevelop5/all-features/extensions/linked-objects-tools)

## Reference

All actions, conditions and expressions are listed in [the linked objects reference page](/gdevelop5/all-features/linked-objects/reference/).
