---
title: Use JavaScript in extensions
---
# Use JavaScript in extensions

## Embed JavaScript libraries in extensions

Use or build a UMD library
Add a function for an action to declare the library
Assign it to gdjs
Call the action at 1st scene and at object creation


```javascript
// Avoid to declare the library several times.
if (gdjs._myNewExtension) {
  return;
}

class MyPrivateClass {
  // Some code here.
}

class MyPublicClass {
  // Some code here.
}

// Add all public classes to `gdjs` namespace.
gdjs._myNewExtension = {
  MyPublicClass,
};
```

!!! warning

    Make sure never to use the `runtimeScene` given by the JS event when declaring a library because it is the scene at the declaration which is unlikely to be the same one when the code is called. Instead pass the caller `runtimeScene` as parameter.

## Wrap JavaScript libraries in events functions

### Get parameter values in JavaScript

```javascript
const angle = eventsFunctionContext.getArgument("Angle");
```


```javascript
const players = eventsFunctionContext.getObjects("Player");

for (const player of players) {

}
```

### Call a library from an event-function

```javascript
gdjs._myNewExtension.doSomething();
```

### Return an expression value in JavaScript

```javascript
eventsFunctionContext.returnValue = gdjs._myNewExtension.getSomeValue();
```

### Return a condition value in JavaScript

```javascript
gdjs._myNewExtension.isSomethingRight();
```

## Wrap JavaScript libraries in events-based behaviors

When to use a behavior

### Get an object behavior in Javascript

```javascript
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
```

### Get behavior property values in Javascript

```javascript
const myPropertyValue = behavior._getMyProperty();
```

Declare expressions rather than setting properties from JavaScript

### Instantiate a state on a scene

```javascript
runtimeScene._myNewExtension = runtimeScene._myNewExtension || {
    myAttribute: new gdjs._myNewExtension.MyPublicClass(),
};
```

### Instantiate a state on an object

```javascript
behavior._myNewExtension = behavior._myNewExtension || {
    myAttribute: new gdjs._myNewExtension.MyPublicClass(),
};
```

## Use the power of both events and JavaScript

When to use one or another
- events to use the engine features
- JS for code independent from GDeveop or impossible to do with events

Add code for the warping in the library event
Add logic with events using the wrapped library
Don't use event variables from JavaScript unless necessary (structures...)

## Learn by reading code from the community

Extensions can be implemented with events and JavaScript or a mix of both. Looking at existing extensions can help a lot to understand the API or how the extension system works.

This is a few instances of extensions that use JavaScript:

* The [Noise generator](/gdevelop5/extensions/noise/) extension uses a noise library and exposes its features through expressions, action and conditions.
* The [3D object shake](/gdevelop5/extensions/shake-object3d/) extension uses the same noise library from the above extension but exposes a behavior that makes 3D objects shake.
* The [Curved movement](/gdevelop5/extensions/curved-movement/details/) extension evaluates Bézier curves using JavaScript and handles movement logics with events.
* The [Boids movement](/gdevelop5/extensions/boids-movement/) extension exposes a behavior to users and uses a R-Tree internally to quickly check neighbors.
* The [Object stack](/gdevelop5/extensions/object-stack/) extension exposes conditions that pick object instances according to their position in a stack.
* The [Clipboard](/gdevelop5/extensions/clipboard/) extension uses an asynchronous web API and implements fallbacks to Electron API or Cordova plugins.