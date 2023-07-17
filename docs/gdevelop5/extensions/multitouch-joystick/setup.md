---
title: Setup
---
# Multitouch Joystick and Buttons

The Multitouch Joystick extension allows players to select a direction and magnitude simply by dragging a virtual joystick that is displayed on the screen.

More than one joystick can be used at the same time. For instance, a twin stick shooter uses one joystick for player movement and the other joystick controls rotation of the player.

!!! note

    This page is outdated. The easiest way to setup a joystick is to insert one from the [Multitouch Joysticks asset pack](https://gdevelop.io/asset-store/free/multitouch-joysticks-multitouch-joysticks) or create a new **Multitouch Joystick** from scratch. Learn more on [this page](/gdevelop5/objects/multitouch-joystick).

!!! note

    [Open the Multitouch Joystick game example](https://gdevelop.io/game-example/virtual-joystick)

## How to add a Multitouch Joystick to a game

### 1) Install the "Multitouch Joystick" extension

  - Click on "Project Manager"
  - Click on "Create or Search for new extensions"
  - Search for "joystick" and hit "Enter"
  - Click on "Multitouch joystick and buttons"
  - Click "Install"
  - Click "Close"

![](/gdevelop5/extensions/multitouch-joystick/install_multitouch_joystick.gif)

### 2) Choose two objects to be used by this extension

  - **Joystick:** The position and size of this object defines the area where the joystick thumb can move. This often looks like the outline of a circle.

&nbsp;

  - **Joystick thumb:** This object moves to follow where the player is touching. This often looks like a solid circle.

![](/gdevelop5/extensions/multitouch-joystick/select_multitouch_joystick_objects.gif)

### 3) Place joystick object in the scene

  - Drag the "joystick" object into the scene
  - Create new layer called "UI"
  - Select "joystick" object and move it to the "UI" layer
  - This prevents the joystick from moving even if other layers move

!!! note

    The Joystick Thumb is automatically created by the Multitouch Joystick extension. It does not need to be added to the scene.

![](/gdevelop5/extensions/multitouch-joystick/add_joystick_to_ui_layer.gif)

### 4) Add "Multitouch Joystick" behavior to the Joystick object.

  - Double-click on your "Joystick" object - Click on "Behaviors" tab - Click "Add a behavior" - Search for "joystick" and select "Multitouch Joystick" - Select "Floating" if you want the player to be able to move the joystick position - Click "Apply"

![](/gdevelop5/extensions/multitouch-joystick/add_multitouch_joystick_behavior.gif)

### 5) In the event sheet, add the action "Activate multitouch joystick"

  - Click on the tab that ends with "(Events)"
  - Click "Add a new event"
  - Click "Add action"
  - Select "Joystick" object
  - Select "Activate multitouch joystick"
  - Select "Joystick thumb" object
  - Click "OK"

!!! note

    The "Activate multitouch joystick" action needs to run every on frame

![](/gdevelop5/extensions/multitouch-joystick/multitouch_joystick_action.gif)

### 6) Test joystick on a touchscreen device

  - Click on "Advanced Preview Options" button (next to "Preview" button)
  - Click "Start network preview (Preview over WiFi/LAN)"
  - Use a web-browser on a touchscreen device to test the game using the displayed IP address and port
  - The joystick thumb should move towards any touches that start on the joystick

![](/gdevelop5/extensions/multitouch-joystick/multitouch_joystick_network_preview.gif)

### 7) Use expression and conditions to take actions based on the state of the joystick

**Conditions:**

  - Joystick force (range: 0 to 1)
  - Joystick pushed in a direction (Left, Right, Up, Down)
  - Check if joystick floating is enabled (Yes, No)
  - Joystick pressed (Check if the user is touching the joystick)

**Expressions:**

  - MyJoystick.MultitouchJoystick::JoystickAngle()

1. Range: -180 to 180

  - MyJoystick.MultitouchJoystick::JoystickForce()

1. Range: 0 to 1

**Controlling an object with joystick**

  - Add an object to by controlled by the joystick
  - Rotate object based on the value of `JoystickAngle()`
  - Apply a force to move object based on the values of `JoystickAngle()` and `JoystickForce()`

![](/gdevelop5/extensions/multitouch-joystick/rotateandmovespaceshipwithjoystick.gif)

## How to add a Multitouch Button to a game

Multitouch buttons can allow a player to press a touchscreen in multiple places at the same time.

### 1) Install the "Multitouch Joystick" extension

  - Click on "Project Manager"
  - Click on "Create or Search for new extensions"
  - Search for "joystick" and hit "Enter"
  - Click on "Multitouch joystick and buttons"
  - Click "Install"
  - Click "Close"

![](/gdevelop5/extensions/multitouch-joystick/install_multitouch_joystick.gif)

### 2) Add the "Multitouch button" behavior to the object

  - Double-click on your "Button" object - Click on "Behaviors" tab - Click "Add a behavior" - Search for "button" and select "Multitouch button" - Click "Apply"

![](/gdevelop5/extensions/multitouch-joystick/add_multitouch_button_behavior.gif)

### 3) Place a multitouch button object on the scene

  - Drag the “button” object into the scene
  - Create new layer called “UI”
  - Select “button” object and move it to the “UI” layer
  - This prevents the button from moving even if other layers move

![](/gdevelop5/extensions/multitouch-joystick/place_multitouch_button.gif)

### 4) In the event sheet, use conditions to trigger actions based on the state of the button

**Conditions:**

  - Button is pressed - Button is released

![](/gdevelop5/extensions/multitouch-joystick/multitouchbuttonconditions.gif)

## FAQ

Q: Does the joystick thumb need the "Draggable" behavior?

A: No, it is not needed (and it could cause problems).
