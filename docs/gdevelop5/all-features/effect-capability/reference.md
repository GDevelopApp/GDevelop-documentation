# Objects with effects Reference

Actions/conditions to enable/disable and change parameters of visual effects applied on objects. [Read more explanations about it.](/gdevelop5/objects)



## Objects with effects 

Actions/conditions to enable/disable and change parameters of visual effects applied on objects. 

### Behavior actions

**Enable an object effect**  
Enable an effect on the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🔤 Object Effect Name (String)
    - Parameter 3 (❓ Yes or No): Enable?

    > Technical note: this action internal type (in GDevelop JSON) is `EffectCapability::EffectBehavior::EnableEffect`.

**Effect property (enable or disable)**  
Enable or disable a property of an effect.  
You can find the property names (and change the effect names) in the effects window.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🔤 Object Effect Name (String)
    - Parameter 3: 🔤 Object Effect Property Name (String)
    - Parameter 4 (❓ Yes or No): Enable this property

    > Technical note: this action internal type (in GDevelop JSON) is `EffectCapability::EffectBehavior::SetEffectBooleanParameter`.

**Effect property (number)**  
Change the value of a property of an effect.  
You can find the property names (and change the effect names) in the effects window.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🔤 Object Effect Name (String)
    - Parameter 3: 🔤 Object Effect Property Name (String)
    - Parameter 4 (🔢 Number): New value

    > Technical note: this action internal type (in GDevelop JSON) is `EffectCapability::EffectBehavior::SetEffectDoubleParameter`.

**Effect property (string)**  
Change the value (string) of a property of an effect.  
You can find the property names (and change the effect names) in the effects window.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🔤 Object Effect Name (String)
    - Parameter 3: 🔤 Object Effect Property Name (String)
    - Parameter 4 (🔤 String): New value

    > Technical note: this action internal type (in GDevelop JSON) is `EffectCapability::EffectBehavior::SetEffectStringParameter`.


### Behavior conditions

**Effect is enabled**  
Check if the effect on an object is enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🔤 Object Effect Name (String)

    > Technical note: this condition internal type (in GDevelop JSON) is `EffectCapability::EffectBehavior::IsEffectEnabled`.


_No expressions for this behavior._




---

The Objects with effects extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Objects with effects** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).