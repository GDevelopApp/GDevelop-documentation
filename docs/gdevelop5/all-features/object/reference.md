# Objects Reference

Common features that can be used for all objects in GDevelop. [Read more explanations about it.](/gdevelop5/objects/base_object/events)

## Actions

**Pick a random object**  
Pick one instance from all the specified objects. When an instance is picked, the next conditions and actions of this event work only on that object instance.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AjoutHasard`.

**Pick all object instances**  
Pick all instances of the specified object(s). When you pick all instances, the next conditions and actions of this event work on all of them.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AjoutObjConcern`.

**Create an object**  
Create an instance of the object at the specified position.The created object instance will be available for the next actions and sub-events.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to create
    - Parameter 2 (🔢 Number): X position
    - Parameter 3 (🔢 Number): Y position
    - Parameter 4: 🔤 Layer name (String)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Create`.

**Create an object from its name**  
Among the objects of the specified group, this action will create the object with the specified name.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Group of potential objects
      Group containing objects that can be created by the action.
    - Parameter 2 (string): Name of the object to create
      Text representing the name of the object to create. If no objects with this name are found in the group, no object will be created.
    - Parameter 3 (🔢 Number): X position
    - Parameter 4 (🔢 Number): Y position
    - Parameter 5: 🔤 Layer name (String)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CreateByName`.

**Apply movement to all objects**  
Moves all objects according to the forces they have. GDevelop calls this action at the end of the events by default.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MoveObjects`.

**Pick nearest object**  
Pick the instance of this object that is nearest to the specified position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): X position
    - Parameter 2 (🔢 Number): Y position

    > Technical note: this action internal type (in GDevelop JSON) is `PickNearest`.

## Conditions

**Pick a random object**  
Pick one instance from all the specified objects. When an instance is picked, the next conditions and actions of this event work only on that object instance.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AjoutHasard`.

**Pick all object instances**  
Pick all instances of the specified object(s). When you pick all instances, the next conditions and actions of this event work on all of them.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AjoutObjConcern`.

**Collision**  
Test the collision between two objects using their collision masks.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 👾 Object
    - Parameter 4 (❓ Yes or No): Ignore objects that are touching each other on their edges, but are not overlapping (default: no)

    > Technical note: parameters 2, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CollisionNP`.

**Distance between two objects**  
Compare the distance between two objects.  
If condition is inverted, only objects that have a distance greater than specified to any other object will be picked.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (👾 Object): Object 2
    - Parameter 2 (🔢 Number): Distance

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Distance`.

**An object is turned toward another**  
Check if an object is turned toward another

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Name of the object
    - Parameter 1 (👾 Object): Name of the second object
    - Parameter 2 (🔢 Number): Angle of tolerance, in degrees (0: minimum tolerance)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `IsTurnedTowardObject`.

**Pick nearest object**  
Pick the instance of this object that is nearest to the specified position. If the condition is inverted, the instance farthest from the specified position is picked instead.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): X position
    - Parameter 2 (🔢 Number): Y position

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PickNearest`.

**Number of object instances currently picked**  
Compare the number of instances picked by the previous conditions (or actions).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `PickedInstancesCount`.

**Raycast**  
Sends a ray from the given source position and angle, intersecting the closest object.  
The intersected object will become the only one taken into account.
If the condition is inverted, the object to be intersected will be the farthest one within the ray radius.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Objects to test against the ray
    - Parameter 1 (🔢 Number): Ray source X position
    - Parameter 2 (🔢 Number): Ray source Y position
    - Parameter 3 (🔢 Number): Ray angle (in degrees)
    - Parameter 4 (🔢 Number): Ray maximum distance (in pixels)
    - Parameter 5 (🗄️ Scene variable): Result X position scene variable
      Scene variable where to store the X position of the intersection. If no intersection is found, the variable won't be changed.
    - Parameter 6 (🗄️ Scene variable): Result Y position scene variable
      Scene variable where to store the Y position of the intersection. If no intersection is found, the variable won't be changed.

    > Technical note: parameter 7 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Raycast`.

**Raycast to position**  
Sends a ray from the given source position to the final point, intersecting the closest object.  
The intersected object will become the only one taken into account.
If the condition is inverted, the object to be intersected will be the farthest one within the ray radius.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Objects to test against the ray
    - Parameter 1 (🔢 Number): Ray source X position
    - Parameter 2 (🔢 Number): Ray source Y position
    - Parameter 3 (🔢 Number): Ray target X position
    - Parameter 4 (🔢 Number): Ray target Y position
    - Parameter 5 (🗄️ Scene variable): Result X position scene variable
      Scene variable where to store the X position of the intersection. If no intersection is found, the variable won't be changed.
    - Parameter 6 (🗄️ Scene variable): Result Y position scene variable
      Scene variable where to store the Y position of the intersection. If no intersection is found, the variable won't be changed.

    > Technical note: parameter 7 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RaycastToPosition`.

**Number of object instances on the scene**  
Compare the number of instances of the specified objects living on the scene.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SceneInstancesCount`.

**An object is moving toward another (using forces)**  
Check if an object moves toward another.  
The first object must move.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (👾 Object): Object 2
    - Parameter 2 (🔢 Number): Tolerance, in degrees

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SeDirige`.

**The cursor/touch is on an object**  
Test if the cursor is over an object, or if the object is being touched.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 2 (❓ Yes or No): Accurate test (yes by default)

    > Technical note: parameters 1, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SourisSurObjet`.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `PickedInstancesCount(object)` | Return the number of instances picked by the previous conditions (or actions). ||
| | _👾 Object_ | Object |
| `SceneInstancesCount(object)` | Return the number of instances of the specified objects living on the scene. ||
| | _👾 Object_ | Object |

### Object actions

**De/activate a behavior**  
De/activate the behavior for the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Activate?

    > Technical note: this action internal type (in GDevelop JSON) is `ActivateBehavior`.

**Add a force (angle)**  
Add a force to an object. The object will move according to all of the forces it has. This action creates the force using the specified angle and length.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): Angle
    - Parameter 2 (🔢 Number): Speed (in pixels per second)
    - Parameter 3: forceMultiplier

    > Technical note: this action internal type (in GDevelop JSON) is `AddForceAL`.

**Add a force to move toward an object**  
Add a force to an object to make it move toward another.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (👾 Object): Target Object
    - Parameter 2 (🔢 Number): Speed (in pixels per second)
    - Parameter 3: forceMultiplier

    > Technical note: this action internal type (in GDevelop JSON) is `AddForceVers`.

**Add a force to move toward a position**  
Add a force to an object to make it move toward a position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): X position
    - Parameter 2 (🔢 Number): Y position
    - Parameter 3 (🔢 Number): Speed (in pixels per second)
    - Parameter 4: forceMultiplier

    > Technical note: this action internal type (in GDevelop JSON) is `AddForceVersPos`.

**Add a force**  
Add a force to an object. The object will move according to all of the forces it has.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): Speed on X axis (in pixels per second)
    - Parameter 2 (🔢 Number): Speed on Y axis (in pixels per second)
    - Parameter 3: forceMultiplier

    > Technical note: this action internal type (in GDevelop JSON) is `AddForceXY`.

**Stop the object**  
Stop the object by deleting all of its forces.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this action internal type (in GDevelop JSON) is `Arreter`.

**Hide**  
Hide the specified object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this action internal type (in GDevelop JSON) is `Cache`.

**Layer**  
Move the object to a different layer.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔤 Layer name (String)): Move it to this layer

    > Technical note: this action internal type (in GDevelop JSON) is `ChangeLayer`.

**Z order**  
Modify the Z-order of an object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `ChangePlan`.

**Delete the object**  
Delete the specified object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Delete`.

**Put the object around another**  
Position an object around another, with the specified angle and distance. The center of the objects are used for positioning them.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (👾 Object): "Center" Object
    - Parameter 2 (🔢 Number): Distance
    - Parameter 3 (🔢 Number): Angle, in degrees

    > Technical note: this action internal type (in GDevelop JSON) is `MettreAutour`.

**Put around a position**  
Position the center of the given object around a position, using the specified angle and distance.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): X position
    - Parameter 2 (🔢 Number): Y position
    - Parameter 3 (🔢 Number): Distance
    - Parameter 4 (🔢 Number): Angle, in degrees

    > Technical note: this action internal type (in GDevelop JSON) is `MettreAutourPos`.

**X position**  
Change the X position of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `MettreX`.

**Position**  
Change the position of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): X position
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Y position

    > Technical note: this action internal type (in GDevelop JSON) is `MettreXY`.

**Y position**  
Change the Y position of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `MettreY`.

**Change number variable**  
Modify the number value of an object variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `ModVarObjet`.

**Change text variable**  
Modify the text of an object variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable
    - Parameter 2: 🟰 Operator
    - Parameter 3 (string): Value

    > Technical note: this action internal type (in GDevelop JSON) is `ModVarObjetTxt`.

**Show**  
Show the specified object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Montre`.

**Clear children**  
Remove all the children from the object array or structure variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Array or structure variable

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectVariableClearChildren`.

**Add existing variable**  
Adds an existing variable to the end of an object array variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Array variable
    - Parameter 2 (🗄️ Any variable): Scene variable with the content to add
      The content of the object variable will *be copied* and added at the end of the array.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectVariablePush2`.

**Add boolean variable**  
Adds a boolean to the end of an object array variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Array variable
    - Parameter 2 (❓ True or False): Boolean to add

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectVariablePushBool`.

**Add number variable**  
Adds a number to the end of an object array variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Array variable
    - Parameter 2 (🔢 Number): Number to add

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectVariablePushNumber`.

**Add text variable**  
Adds a text (string) to the end of an object array variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Array variable
    - Parameter 2 (string): Text to add

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectVariablePushString`.

**Remove variable by index**  
Removes a variable at the specified index of an object array variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Array variable
    - Parameter 2 (🔢 Number): Index to remove

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectVariableRemoveAt`.

**Remove a child**  
Remove a child from an object structure variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Structure variable
    - Parameter 2 (string): Child's name

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectVariableRemoveChild`.

**Pause an object timer**  
Pause an object timer.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔤 Name (String)): Timer's name

    > Technical note: this action internal type (in GDevelop JSON) is `PauseObjectTimer`.

**Add value to object array variable**  
Adds a boolean to the end of an object array variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Array variable
    - Parameter 2 (❓ True or False): Boolean to add

    > Technical note: this action internal type (in GDevelop JSON) is `PushBooleanToObjectVariable`.

**Add value to object array variable**  
Adds a number to the end of an object array variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Array variable
    - Parameter 2 (🔢 Number): Number to add

    > Technical note: this action internal type (in GDevelop JSON) is `PushNumberToObjectVariable`.

**Add value to object array variable**  
Adds a text (string) to the end of an object array variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Array variable
    - Parameter 2 (string): Text to add

    > Technical note: this action internal type (in GDevelop JSON) is `PushStringToObjectVariable`.

**Delete an object timer**  
Delete an object timer from memory.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔤 Name (String)): Timer's name

    > Technical note: this action internal type (in GDevelop JSON) is `RemoveObjectTimer`.

**Start (or reset) an object timer**  
Reset the specified object timer, if the timer doesn't exist it's created and started.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔤 Name (String)): Timer's name

    > Technical note: this action internal type (in GDevelop JSON) is `ResetObjectTimer`.

**Rotate**  
Rotate an object, clockwise if the speed is positive, counterclockwise otherwise. For 3D objects, this is the rotation around the Z axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): Angular speed (in degrees per second)

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Rotate`.

**Rotate toward angle**  
Rotate an object towards an angle with the specified speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): Angle to rotate towards (in degrees)
    - Parameter 2 (🔢 Number): Angular speed (in degrees per second)
      Enter 0 for an immediate rotation.

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RotateTowardAngle`.

**Rotate toward another object**  
Rotate an object towards another object, with the specified speed. Note that if multiple instances of the target object are picked, only the first one will be used. Use a For Each event or actions like "Pick nearest object", "Pick a random object" to refine the choice of the target object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (👾 Object): Target object
    - Parameter 2 (🔢 Number): Angular speed (in degrees per second)
      Enter 0 for an immediate rotation.

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RotateTowardObject`.

**Rotate toward position**  
Rotate an object towards a position, with the specified speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): X position
    - Parameter 2 (🔢 Number): Y position
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)
      Enter 0 for an immediate rotation.

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RotateTowardPosition`.

**Separate objects**  
Move an object away from another using their collision masks.  
Be sure to call this action on a reasonable number of objects
to avoid slowing down the game.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (👾 Object): Objects (won't move)
    - Parameter 2 (❓ Yes or No): Ignore objects that are touching each other on their edges, but are not overlapping (default: no)

    > Technical note: this action internal type (in GDevelop JSON) is `SeparateFromObjects`.

**Angle**  
Change the angle of rotation of an object (in degrees). For 3D objects, this is the rotation around the Z axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Angle (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `SetAngle`.

**Change object variable value**  
Modify the boolean value of an object variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable
    - Parameter 2: 🟰 Operator

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetBooleanObjectVariable`.

**Center position**  
Change the position of an object, using its center.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): X position
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Y position

    > Technical note: this action internal type (in GDevelop JSON) is `SetCenter`.

**Center X position**  
Change the X position of the center of rotation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `SetCenterX`.

**Center Y position**  
Change the Y position of the center of rotation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `SetCenterY`.

**Include in parent collision mask**  
Include or exclude a child from its parent collision mask.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Include in parent collision mask

    > Technical note: this action internal type (in GDevelop JSON) is `SetIncludedInParentCollisionMask`.

**Change object variable value**  
Modify the number value of an object variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `SetNumberObjectVariable`.

**Change boolean variable**  
Modify the boolean value of an object variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable
    - Parameter 2 (❓ True or False): New Value:

    > Technical note: this action internal type (in GDevelop JSON) is `SetObjectVariableAsBoolean`.

**Change object variable value**  
Modify the text of an object variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable
    - Parameter 2: 🟰 Operator
    - Parameter 3 (string): Value

    > Technical note: this action internal type (in GDevelop JSON) is `SetStringObjectVariable`.

**Toggle boolean variable**  
Toggles the boolean value of an object variable.  
If it was true, it will become false, and if it was false it will become true.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleObjectVariableAsBoolean`.

**Unpause an object timer**  
Unpause an object timer.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔤 Name (String)): Timer's name

    > Technical note: this action internal type (in GDevelop JSON) is `UnPauseObjectTimer`.

### Object conditions

**Angle**  
Compare the angle, in degrees, of the specified object. For 3D objects, this is the angle around the Z axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Angle to compare to (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `Angle`.

**Object is stopped (no forces applied on it)**  
Check if an object is not moving

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this condition internal type (in GDevelop JSON) is `Arret`.

**Behavior activated**  
Check if the behavior is activated for the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `BehaviorActivated`.

**Object variable value**  
Compare the boolean value of an object variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable
    - Parameter 2 (❓ True or False): Check if the value is

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `BooleanObjectVariable`.

**Bounding box bottom position**  
Compare the bounding box (the area encapsulating the object) bottom position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `BoundingBoxBottom`.

**Bounding box center X position**  
Compare the bounding box (the area encapsulating the object) center X position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `BoundingBoxCenterX`.

**Bounding box center Y position**  
Compare the bounding box (the area encapsulating the object) center Y position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `BoundingBoxCenterY`.

**Bounding box left position**  
Compare the bounding box (the area encapsulating the object) left position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `BoundingBoxLeft`.

**Bounding box right position**  
Compare the bounding box (the area encapsulating the object) right position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `BoundingBoxRight`.

**Bounding box top position**  
Compare the bounding box (the area encapsulating the object) top position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `BoundingBoxTop`.

**Center X position**  
Compare the X position of the center of rotation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `CenterX`.

**Center Y position**  
Compare the Y position of the center of rotation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `CenterY`.

**Point inside object**  
Test if a point is inside the object collision masks.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): X position of the point
    - Parameter 2 (🔢 Number): Y position of the point

    > Technical note: this condition internal type (in GDevelop JSON) is `CollisionPoint`.

**Value of an object timer**  
Compare the elapsed time of an object timer. This condition doesn't start the timer.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔤 Name (String)): Timer's name
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Time in seconds

    > Technical note: this condition internal type (in GDevelop JSON) is `CompareObjectTimer`.

**Angle of movement (using forces)**  
Compare the angle of movement of an object according to the forces applied on it.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): Angle, in degrees
    - Parameter 2 (🔢 Number): Tolerance, in degrees

    > Technical note: this condition internal type (in GDevelop JSON) is `IsTotalForceAngleAround`.

**Current layer**  
Check if the object is on the specified layer.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🔤 Layer name (String)

    > Technical note: this condition internal type (in GDevelop JSON) is `Layer`.

**Object variable value**  
Compare the number value of an object variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `NumberObjectVariable`.

**Object timer paused**  
Test if specified object timer is paused.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔤 Name (String)): Timer's name

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectTimerPaused`.

**Boolean variable**  
Compare the boolean value of an object variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable
    - Parameter 2 (❓ True or False): Check if the value is

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectVariableAsBoolean`.

**Number of children**  
Compare the number of children in an object array variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectVariableChildCount`.

**Child existence**  
Check if the specified child of the object structure variable exists.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Structure variable
    - Parameter 2 (string): Name of the child

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectVariableChildExists`.

**Z-order**  
Compare the Z-order of the specified object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Plan`.

**X position**  
Compare the X position of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `PosX`.

**Y position**  
Compare the Y position of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `PosY`.

**Object variable value**  
Compare the text of an object variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (string): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `StringObjectVariable`.

**Number variable**  
Compare the number value of an object variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `VarObjet`.

**Text variable**  
Compare the text of an object variable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🗄️ Object variable): Variable
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (string): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `VarObjetTxt`.

**Visibility**  
Check if an object is visible.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this condition internal type (in GDevelop JSON) is `Visible`.

**Speed (from forces)**  
Compare the overall speed of an object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Vitesse`.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Angle()` | Current angle, in degrees, of the object. For 3D objects, this is the angle around the Z axis. ||
| `Object.AngleToObject(object)` | Compute the angle between two objects (in degrees). If you need the angle to an arbitrary position, use AngleToPosition. ||
| | _👾 Object_ | Object |
| `Object.AngleToPosition(number, number)` | Compute the angle between the object center and a "target" position (in degrees). If you need the angle between two objects, use AngleToObject. ||
| | _🔢 Number_ | Target X position |
| | _🔢 Number_ | Target Y position |
| `Object.ArrayVariableFirstNumber(object variable)` | Get the value of the first element of an object array variable, if it is a number variable. ||
| | _🗄️ Object variable_ | Array variable |
| `Object.ArrayVariableFirstString(object variable)` | Get the value of the first element of an object array variable, if it is a text (string) variable. ||
| | _🗄️ Object variable_ | Array variable |
| `Object.ArrayVariableLastNumber(object variable)` | Get the value of the last element of an object array variable, if it is a number variable. ||
| | _🗄️ Object variable_ | Array variable |
| `Object.ArrayVariableLastString(object variable)` | Get the value of the last element of an object array variable, if it is a text (string) variable. ||
| | _🗄️ Object variable_ | Array variable |
| `Object.BoundingBoxBottom()` | Return the bounding box (the area encapsulating the object) bottom position. ||
| `Object.BoundingBoxCenterX()` | Return the bounding box (the area encapsulating the object) center X position. ||
| `Object.BoundingBoxCenterY()` | Return the bounding box (the area encapsulating the object) center Y position. ||
| `Object.BoundingBoxLeft()` | Return the bounding box (the area encapsulating the object) left position. ||
| `Object.BoundingBoxRight()` | Return the bounding box (the area encapsulating the object) right position. ||
| `Object.BoundingBoxTop()` | Return the bounding box (the area encapsulating the object) top position. ||
| `Object.CenterX()` | Return the X position of the center of rotation. ||
| `Object.CenterY()` | Return the Y position of the center of rotation. ||
| `Object.Distance(object)` | Distance between two objects ||
| | _👾 Object_ | Object |
| `Object.DistanceToPosition(number, number)` | Distance between an object and a position ||
| | _🔢 Number_ | Target X position |
| | _🔢 Number_ | Target Y position |
| `Object.ForceAngle()` | Angle of the sum of forces (in degrees) ||
| `Object.ForceLength()` | Length of the sum of forces ||
| `Object.ForceX()` | X coordinate of the sum of forces ||
| `Object.ForceY()` | Y coordinate of the sum of forces ||
| `Object.Height()` | Height of the object ||
| `Object.Layer()` | Return the name of the layer the object is on ||
| `Object.ObjectName()` | Return the name of the object ||
| `Object.ObjectTimerElapsedTime(string)` | Value of an object timer ||
| | _🔤 Name (String)_ | Timer's name |
| `Object.SqDistance(object)` | Square distance between two objects ||
| | _👾 Object_ | Object |
| `Object.SqDistanceToPosition(number, number)` | Square distance between an object and a position ||
| | _🔢 Number_ | Target X position |
| | _🔢 Number_ | Target Y position |
| `Object.Variable(object variable)` | Number value of an object variable ||
| | _🗄️ Object variable_ | Variable |
| `Object.VariableChildCount(object variable)` | Number of children in an object array or structure variable ||
| | _🗄️ Object variable_ | Array or structure variable |
| `Object.VariableString(object variable)` | Text of an object variable ||
| | _🗄️ Object variable_ | Variable |
| `Object.Width()` | Width of the object ||
| `Object.X()` | X position of the object ||
| `Object.XFromAngleAndDistance(number, number)` | Compute the X position when given an angle and distance relative to the starting object. This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. ||
| | _🔢 Number_ | Angle, in degrees |
| | _🔢 Number_ | Distance |
| `Object.Y()` | Y position of the object ||
| `Object.YFromAngleAndDistance(number, number)` | Compute the Y position when given an angle and distance relative to the starting object. This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. ||
| | _🔢 Number_ | Angle, in degrees |
| | _🔢 Number_ | Distance |
| `Object.ZOrder()` | Z-order of an object ||



---

The Objects extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Objects** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).