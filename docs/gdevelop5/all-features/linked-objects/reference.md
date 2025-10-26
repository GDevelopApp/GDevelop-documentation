# Linked objects Reference

These actions and conditions allow to virtually link two objects. It's then useful in the events to quickly retrieve one or more objects attached to another. For example, this can be used to link some equipment objects with the character holding them. More generally, this can be used to store and retrieve objects in a way that is more efficient than using variables. [Read more explanations about it.](/gdevelop5/all-features/linked-objects)

## Actions

**Link two objects**  
Link two objects together, so as to be able to get one from the other.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object 1
    - Parameter 2 (👾 Object): Object 2

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkedObjects::LinkObjects`.

**Take into account linked objects**  
Take objects linked to the object into account for next actions.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Pick these objects...
    - Parameter 2 (👾 Object): ...if they are linked to this object

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkedObjects::PickObjectsLinkedTo`.

**Unlink all objects from an object**  
Unlink all objects from an object.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkedObjects::RemoveAllLinksOf`.

**Unlink two objects**  
Unlink two objects.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object 1
    - Parameter 2 (👾 Object): Object 2

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkedObjects::RemoveLinkBetween`.

## Conditions

**Take into account linked objects**  
Take some objects linked to the object into account for next conditions and actions.  
The condition will return false if no object was taken into account.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Pick these objects...
    - Parameter 2 (👾 Object): ...if they are linked to this object

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinkedObjects::PickObjectsLinkedTo`.





---

The Linked objects extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Linked objects** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).