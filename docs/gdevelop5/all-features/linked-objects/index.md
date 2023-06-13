---
title: Linked Objects
---
# Linked Objects

Actions and conditions of "Linked Objects" category allow us to make virtual connections between objects. We can later reference them by their links to each other. Typically, you can only link two objects when creating them.

!!! tip

    You can also use a “For each object” event to take each instance of an object individually, and create links to other objects. Learn more about the "For each object" event by visiting [this page about For each event](/gdevelop5/events/foreach).

!!! tip

    Some of the conditions of Linked Objects are available as both, conditions as well as actions. Conditions will be considered as false if no object is picked. If you don't want this behavior, use their action counterparts.

#### Link two objects

This action creates links between the object(s) in the first parameter and the object(s) in the second parameter.

#### Take into account linked objects

There is both an action and a condition called "Take into account linked objects".

This action scans through the objects in the first parameters and for each one, if there is a link registered from it to any of the objects in the second parameter, they will be picked for the next actions. After executing this action, the actions that are executed next (as well as the subevents) will only execute on the objects that were picked.

The condition works the same in all cases, except if no object was picked (i.e: no object in the first parameter had a link to any object in the second parameter). In such a case, the condition will be false.

#### Unlink all objects from an object

This action removes all links to the specified object(s). They won't be virtually linked to any other objects.

#### Unlink two objects

This action removes the links between the given pair of objects.

### Examples

In this example, for every existing "Pathfinder" object, a new "Terrain" object is created.  This creation and linking step only needs to be performed one time.  The bottom event is run every frame and will cause the "Terrain" objects to always follow the "Pathfinder" object they are linked to.

![](/gdevelop5/all-features/linkobjectsandfollowposition.png)

!!! tip

        **See it in action!** 🎮
    Open these examples online.

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://magnet){ .md-button .md-button--primary }
[Open example in GDevelop](https://editor.gdevelop.io/?project=example://basic-artificial-intelligence){ .md-button .md-button--primary }
[Open example in GDevelop](https://editor.gdevelop.io/?project=example://pin-object-to-another-multiple-parents){ .md-button .md-button--primary }

!!! tip

    To see more advance usages, take a look at the [Linked Objects Tools extension page](/gdevelop5/all-features/extensions/linked-objects-tools)

## Reference

All actions, conditions and expressions are listed in [the linked objects reference page](/gdevelop5/all-features/linked-objects/reference/).
