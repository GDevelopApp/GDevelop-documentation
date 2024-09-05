# Objects Reference

Common features that can be used for all objects in GDevelop. [Read more explanations about it.](/gdevelop5/objects/base_object/events)

## Actions

**Pick a random object**  
Pick one object from all the specified objects. When an object is picked, the next conditions and actions of this event work only on that object.

**Pick all instances**  
Pick all instances of the specified object(s). When you pick all instances, the next conditions and actions of this event work on all of them.

**Create an object**  
Create an object at specified position

**Create an object from its name**  
Among the objects of the specified group, this action will create the object with the specified name.

**Apply movement to all objects**  
Moves all objects according to the forces they have. GDevelop calls this action at the end of the events by default.

## Conditions

**Pick a random object**  
Pick one object from all the specified objects. When an object is picked, the next conditions and actions of this event work only on that object.

**Pick all objects**  
Pick all the specified objects. When you pick all objects, the next conditions and actions of this event work on all of them.

**Collision**  
Test the collision between two objects using their collision masks.

**Distance between two objects**  
Compare the distance between two objects.  
If condition is inverted, only objects that have a distance greater than specified to any other object will be picked.

**An object is turned toward another**  
Check if an object is turned toward another

**Pick nearest object**  
Pick the object of this type that is nearest to the specified position. If the condition is inverted, the object farthest from the specified position is picked instead.

**Number of object instances currently picked**  
Compare the number of instances picked by the previous conditions (or actions).

**Raycast**  
Sends a ray from the given source position and angle, intersecting the closest object.  
The intersected object will become the only one taken into account.
If the condition is inverted, the object to be intersected will be the farthest one within the ray radius.

**Raycast to position**  
Sends a ray from the given source position to the final point, intersecting the closest object.  
The intersected object will become the only one taken into account.
If the condition is inverted, the object to be intersected will be the farthest one within the ray radius.

**Number of object instances on the scene**  
Compare the number of instances of the specified objects living on the scene.

**An object is moving toward another (using forces)**  
Check if an object moves toward another.  
The first object must move.

**The cursor/touch is on an object**  
Test if the cursor is over an object, or if the object is being touched.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `PickedInstancesCount()` | Return the number of instances picked by the previous conditions (or actions). ||
| `SceneInstancesCount()` | Return the number of instances of the specified objects living on the scene. ||

### Object actions

**De/activate a behavior**  
De/activate the behavior for the object.

**Add a force (angle)**  
Add a force to an object. The object will move according to all of the forces it has. This action creates the force using the specified angle and length.

**Add a force to move toward an object**  
Add a force to an object to make it move toward another.

**Add a force to move toward a position**  
Add a force to an object to make it move toward a position.

**Add a force**  
Add a force to an object. The object will move according to all of the forces it has.

**Stop the object**  
Stop the object by deleting all of its forces.

**Hide**  
Hide the specified object.

**Layer**  
Move the object to a different layer.

**Z order**  
Modify the Z-order of an object

**Delete the object**  
Delete the specified object.

**Put the object around another**  
Position an object around another, with the specified angle and distance. The center of the objects are used for positioning them.

**Put around a position**  
Position the center of the given object around a position, using the specified angle and distance.

**X position**  
Change the X position of an object.

**Position**  
Change the position of an object.

**Y position**  
Change the Y position of an object.

**Change number variable**  
Modify the number value of an object variable.

**Change text variable**  
Modify the text of an object variable.

**Show**  
Show the specified object.

**Clear children**  
Remove all the children from the object array or structure variable.

**Add existing variable**  
Adds an existing variable to the end of an object array variable.

**Add boolean variable**  
Adds a boolean to the end of an object array variable.

**Add number variable**  
Adds a number to the end of an object array variable.

**Add text variable**  
Adds a text (string) to the end of an object array variable.

**Remove variable by index**  
Removes a variable at the specified index of an object array variable.

**Remove a child**  
Remove a child from an object structure variable.

**Pause an object timer**  
Pause an object timer.

**Add boolean variable**  
Adds a boolean to the end of an object array variable.

**Add variable array value**  
Adds a number to the end of an object array variable.

**Add text variable**  
Adds a text (string) to the end of an object array variable.

**Delete an object timer**  
Delete an object timer from memory.

**Start (or reset) an object timer**  
Reset the specified object timer, if the timer doesn't exist it's created and started.

**Rotate**  
Rotate an object, clockwise if the speed is positive, counterclockwise otherwise.

**Rotate toward angle**  
Rotate an object towards an angle with the specified speed.

**Rotate toward position**  
Rotate an object towards a position, with the specified speed.

**Separate objects**  
Move an object away from another using their collision masks.  
Be sure to call this action on a reasonable number of objects
to avoid slowing down the game.

**Angle**  
Change the angle of rotation of an object (in degrees).

**Change boolean variable**  
Modify the boolean value of an object variable.

**Center position**  
Change the position of an object, using its center.

**Center X position**  
Change the X position of the center of rotation.

**Center Y position**  
Change the Y position of the center of rotation.

**Include in parent collision mask**  
Include or exclude a child from its parent collision mask.

**Change variable value**  
Modify the number value of an object variable.

**Change boolean variable**  
Modify the boolean value of an object variable.

**Change text variable**  
Modify the text of an object variable.

**Toggle boolean variable**  
Toggles the boolean value of an object variable.  
If it was true, it will become false, and if it was false it will become true.

**Unpause an object timer**  
Unpause an object timer.

### Object conditions

**Angle**  
Compare the angle of the specified object.

**Object is stopped (no forces applied on it)**  
Check if an object is not moving

**Behavior activated**  
Check if the behavior is activated for the object.

**Boolean variable**  
Compare the boolean value of an object variable.

**Bounding box bottom position**  
Compare the bounding box (the area encapsulating the object) bottom position.

**Bounding box center X position**  
Compare the bounding box (the area encapsulating the object) center X position.

**Bounding box center Y position**  
Compare the bounding box (the area encapsulating the object) center Y position.

**Bounding box left position**  
Compare the bounding box (the area encapsulating the object) left position.

**Bounding box right position**  
Compare the bounding box (the area encapsulating the object) right position.

**Bounding box top position**  
Compare the bounding box (the area encapsulating the object) top position.

**Center X position**  
Compare the X position of the center of rotation.

**Center Y position**  
Compare the Y position of the center of rotation.

**Point inside object**  
Test if a point is inside the object collision masks.

**Value of an object timer**  
Compare the elapsed time of an object timer. This condition doesn't start the timer.

**Angle of movement (using forces)**  
Compare the angle of movement of an object according to the forces applied on it.

**Current layer**  
Check if the object is on the specified layer.

**Variable value**  
Compare the number value of an object variable.

**Object timer paused**  
Test if specified object timer is paused.

**Boolean variable**  
Compare the boolean value of an object variable.

**Number of children**  
Compare the number of children in an object array variable.

**Child existence**  
Check if the specified child of the object structure variable exists.

**Z-order**  
Compare the Z-order of the specified object.

**X position**  
Compare the X position of the object.

**Y position**  
Compare the Y position of an object.

**Text variable**  
Compare the text of an object variable.

**Number variable**  
Compare the number value of an object variable.

**Text variable**  
Compare the text of an object variable.

**Visibility**  
Check if an object is visible.

**Speed (from forces)**  
Compare the overall speed of an object

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Angle()` | Current angle, in degrees, of the object ||
| `Object.AngleToObject()` | Compute the angle between two objects (in degrees). If you need the angle to an arbitrary position, use AngleToPosition. ||
| `Object.AngleToPosition()` | Compute the angle between the object center and a "target" position (in degrees). If you need the angle between two objects, use AngleToObject. ||
| `Object.ArrayVariableFirstNumber()` | Get the value of the first element of an object array variable, if it is a number variable. ||
| `Object.ArrayVariableFirstString()` | Get the value of the first element of an object array variable, if it is a text (string) variable. ||
| `Object.ArrayVariableLastNumber()` | Get the value of the last element of an object array variable, if it is a number variable. ||
| `Object.ArrayVariableLastString()` | Get the value of the last element of an object array variable, if it is a text (string) variable. ||
| `Object.BoundingBoxBottom()` | Return the bounding box (the area encapsulating the object) bottom position. ||
| `Object.BoundingBoxCenterX()` | Return the bounding box (the area encapsulating the object) center X position. ||
| `Object.BoundingBoxCenterY()` | Return the bounding box (the area encapsulating the object) center Y position. ||
| `Object.BoundingBoxLeft()` | Return the bounding box (the area encapsulating the object) left position. ||
| `Object.BoundingBoxRight()` | Return the bounding box (the area encapsulating the object) right position. ||
| `Object.BoundingBoxTop()` | Return the bounding box (the area encapsulating the object) top position. ||
| `Object.CenterX()` | Return the X position of the center of rotation. ||
| `Object.CenterY()` | Return the Y position of the center of rotation. ||
| `Object.Distance()` | Distance between two objects ||
| `Object.DistanceToPosition()` | Distance between an object and a position ||
| `Object.ForceAngle()` | Angle of the sum of forces (in degrees) ||
| `Object.ForceLength()` | Length of the sum of forces ||
| `Object.ForceX()` | X coordinate of the sum of forces ||
| `Object.ForceY()` | Y coordinate of the sum of forces ||
| `Object.Height()` | Height of the object ||
| `Object.Layer()` | Return the name of the layer the object is on ||
| `Object.ObjectName()` | Return the name of the object ||
| `Object.ObjectTimerElapsedTime()` | Value of an object timer ||
| `Object.SqDistance()` | Square distance between two objects ||
| `Object.SqDistanceToPosition()` | Square distance between an object and a position ||
| `Object.Variable()` | Number value of an object variable ||
| `Object.VariableChildCount()` | Number of children in an object array or structure variable ||
| `Object.VariableString()` | Text of an object variable ||
| `Object.Width()` | Width of the object ||
| `Object.X()` | X position of the object ||
| `Object.XFromAngleAndDistance()` | Compute the X position when given an angle and distance relative to the starting object. This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. ||
| `Object.Y()` | Y position of the object ||
| `Object.YFromAngleAndDistance()` | Compute the Y position when given an angle and distance relative to the starting object. This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. ||
| `Object.ZOrder()` | Z-order of an object ||

---
*This page is an auto-generated reference page about the **Objects** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).