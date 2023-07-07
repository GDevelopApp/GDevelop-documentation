# Screen Wrap

<img src="https://resources.gdevelop-app.com/assets/Icons/monitor-screenshot.svg" class="extension-icon"></img>
Teleport object when it moves off the screen and immediately appear on the opposite side while maintaining speed and trajectory.

**Authors and contributors** to this community extension: [Entropy](https://gd.games/Entropy), [VictrisGames](https://gd.games/VictrisGames).

---

The teleport happens when the center point of the object crosses a border. 
Change behavior properties to increase or decrease the margin used to trigger this teleport.
By default, the borders of the wrapping area match the screen size, but they can alo be changed.

The Asteroid-like example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://space-asteroid)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Screen Wrap 

Teleport the object when leaving one side of the screen so that it immediately reappears on the opposite side, maintaining speed and trajectory. 

### Behavior actions

**Enable horizontal wrapping**  
Enable wrapping on the left and right borders.

**Enable vertical wrapping**  
Enable wrapping on the top and bottom borders.

**Set bottom border**  
Set bottom border (Y position).

**Set left border**  
Set left border (X position).

**Bottom border of wrapped area (Y) property**  
Change the property value for the bottom border of wrapped area (Y).

**Left border of wrapped area (X) property**  
Change the property value for the left border of wrapped area (X).

**Right border of wrapped area (X) property**  
Change the property value for the right border of wrapped area (X).

**Top border of wrapped area (Y) property**  
Change the property value for the top border of wrapped area (Y).

**Horizontal wrapping property**  
Update the property value for "horizontal wrapping".

**Number of pixels past the center where the object teleports and appears property**  
Change the property value for the number of pixels past the center where the object teleports and appears.

**Vertical wrapping property**  
Update the property value for "vertical wrapping".

**Set right border**  
Set right border (X position).

**Set top border**  
Set top border (Y position).

**Set trigger offset**  
Set trigger offset (pixels).

**Toggle Horizontal wrapping property**  
Toggle the property value for horizontal wrapping.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Vertical wrapping property**  
Toggle the property value for vertical wrapping.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is horizontal wrapping**  
Check if the object is wrapping on the left and right borders.

**Is vertical wrapping**  
Check if the object is wrapping on the top and bottom borders.

**Bottom border of wrapped area (Y) property**  
Compare the property value for the bottom border of wrapped area (Y).

**Left border of wrapped area (X) property**  
Compare the property value for the left border of wrapped area (X).

**Right border of wrapped area (X) property**  
Compare the property value for the right border of wrapped area (X).

**Top border of wrapped area (Y) property**  
Compare the property value for the top border of wrapped area (Y).

**Horizontal wrapping property**  
Check the property value for horizontal wrapping.

**Number of pixels past the center where the object teleports and appears property**  
Compare the property value for the number of pixels past the center where the object teleports and appears.

**Vertical wrapping property**  
Check the property value for vertical wrapping.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ScreenWrap::BorderBottom()` | Bottom border (Y position). ||
| `Object.ScreenWrap::BorderLeft()` | Left border (X position). ||
| `Object.ScreenWrap::BorderRight()` | Right border (X position). ||
| `Object.ScreenWrap::BorderTop()` | Top border (Y position). ||
| `Object.ScreenWrap::PropertyBorderBottom()` | Return the property value for the bottom border of wrapped area (Y). ||
| `Object.ScreenWrap::PropertyBorderLeft()` | Return the property value for the left border of wrapped area (X). ||
| `Object.ScreenWrap::PropertyBorderRight()` | Return the property value for the right border of wrapped area (X). ||
| `Object.ScreenWrap::PropertyBorderTop()` | Return the property value for the top border of wrapped area (Y). ||
| `Object.ScreenWrap::PropertyTriggerOffset()` | Return the property value for the number of pixels past the center where the object teleports and appears. ||
| `Object.ScreenWrap::TriggerOffset()` | Number of pixels past the center where the object teleports and appears. ||

## Screen Wrap (physics objects) 

Teleport the object when leaving one side of the screen so that it immediately reappears on the opposite side, maintaining speed and trajectory. 

### Behavior actions

**Apply saved velocity values**  
Apply saved velocity values.

**Enable horizontal wrapping**  
Enable wrapping on the left and right borders.

**Enable vertical wrapping**  
Enable wrapping on the top and bottom borders.

**Save current velocity values**  
Save current velocity values.

**Set bottom border**  
Set bottom border (Y position).

**Set left border**  
Set left border (X position).

**Angular Velocity property**  
Change the property value for the angular Velocity.

**Bottom border of wrapped area (Y) property**  
Change the property value for the bottom border of wrapped area (Y).

**Left border of wrapped area (X) property**  
Change the property value for the left border of wrapped area (X).

**Right border of wrapped area (X). property**  
Change the property value for the right border of wrapped area (X)..

**Top border of wrapped area (Y) property**  
Change the property value for the top border of wrapped area (Y).

**Horizontal wrapping property**  
Update the property value for "horizontal wrapping".

**Linear Velocity X property**  
Change the property value for the linear Velocity X.

**Linear Velocity Y property**  
Change the property value for the linear Velocity Y.

**Number of pixels past the center where the object teleports and appears property**  
Change the property value for the number of pixels past the center where the object teleports and appears.

**Vertical wrapping property**  
Update the property value for "vertical wrapping".

**Set right border**  
Set right border (X position).

**Set top border**  
Set top border (Y position).

**Set trigger offset**  
Set trigger offset (pixels).

**Toggle Horizontal wrapping property**  
Toggle the property value for horizontal wrapping.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Vertical wrapping property**  
Toggle the property value for vertical wrapping.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is horizontal wrapping**  
Check if the object is wrapping on the left and right borders.

**Is vertical wrapping**  
Check if the object is wrapping on the top and bottom borders.

**Angular Velocity property**  
Compare the property value for the angular Velocity.

**Bottom border of wrapped area (Y) property**  
Compare the property value for the bottom border of wrapped area (Y).

**Left border of wrapped area (X) property**  
Compare the property value for the left border of wrapped area (X).

**Right border of wrapped area (X). property**  
Compare the property value for the right border of wrapped area (X)..

**Top border of wrapped area (Y) property**  
Compare the property value for the top border of wrapped area (Y).

**Horizontal wrapping property**  
Check the property value for horizontal wrapping.

**Linear Velocity X property**  
Compare the property value for the linear Velocity X.

**Linear Velocity Y property**  
Compare the property value for the linear Velocity Y.

**Number of pixels past the center where the object teleports and appears property**  
Compare the property value for the number of pixels past the center where the object teleports and appears.

**Vertical wrapping property**  
Check the property value for vertical wrapping.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ScreenWrapPhysics::BorderBottom()` | Bottom border (Y position). ||
| `Object.ScreenWrapPhysics::BorderLeft()` | Left border (X position). ||
| `Object.ScreenWrapPhysics::BorderRight()` | Right border (X position). ||
| `Object.ScreenWrapPhysics::BorderTop()` | Top border (Y position). ||
| `Object.ScreenWrapPhysics::PropertyAngularVelocity()` | Return the property value for the angular Velocity. ||
| `Object.ScreenWrapPhysics::PropertyBorderBottom()` | Return the property value for the bottom border of wrapped area (Y). ||
| `Object.ScreenWrapPhysics::PropertyBorderLeft()` | Return the property value for the left border of wrapped area (X). ||
| `Object.ScreenWrapPhysics::PropertyBorderRight()` | Return the property value for the right border of wrapped area (X).. ||
| `Object.ScreenWrapPhysics::PropertyBorderTop()` | Return the property value for the top border of wrapped area (Y). ||
| `Object.ScreenWrapPhysics::PropertyLinearVelocityX()` | Return the property value for the linear Velocity X. ||
| `Object.ScreenWrapPhysics::PropertyLinearVelocityY()` | Return the property value for the linear Velocity Y. ||
| `Object.ScreenWrapPhysics::PropertyTriggerOffset()` | Return the property value for the number of pixels past the center where the object teleports and appears. ||
| `Object.ScreenWrapPhysics::TriggerOffset()` | Number of pixels past the center where the object teleports and appears. ||

---

*This page is an auto-generated reference page about the **Screen Wrap** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).