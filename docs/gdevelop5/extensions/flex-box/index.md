# Flexbox

<img src="https://resources.gdevelop-app.com/assets/Icons/page-layout-body.svg" class="extension-icon"></img>
Allows using flexbox for positioning objects.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555).

---

A behavior to position objects using the CSS Flexible Box layout. Find more information at https://css-tricks.com/snippets/css/a-guide-to-flexbox/

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Flex container 

A container for flex items. 

### Behavior actions

**Set flex direction**  
Sets the flexbox direction property.

**Set flex wrap**  
Sets the flexbox wrap property.

**Set alignement of the lines**  
Sets the alignement method for the lines/rows of objects in the box.

**The alignement of the lines (row/columns) property**  
Change the property value for the the alignement of the lines (row/columns).

**The alignement of the items on the Y axis property**  
Change the property value for the the alignement of the items on the Y axis.

**The direction of the items property**  
Change the property value for the the direction of the items.

**Minimal gap between each item in pixels property**  
Change the property value for the minimal gap between each item in pixels.

**The ID of the container property**  
Change the property value for the the ID of the container.

**The alignement of the items on the X axis property**  
Change the property value for the the alignement of the items on the X axis.

**Warpping (adding lines to fit everything inside the Flexbox) property**  
Change the property value for the warpping (adding lines to fit everything inside the Flexbox).

**Set alignement on the X axis**  
Sets the alignement method for items on the X axis.

**Set alignement on the Y axis**  
Sets the alignement method for items on the Y axis.

### Behavior conditions

**The alignement of the lines (row/columns) property**  
Compare the property value for the the alignement of the lines (row/columns).

**The alignement of the items on the Y axis property**  
Compare the property value for the the alignement of the items on the Y axis.

**The direction of the items property**  
Compare the property value for the the direction of the items.

**Minimal gap between each item in pixels property**  
Compare the property value for the minimal gap between each item in pixels.

**The ID of the container property**  
Compare the property value for the the ID of the container.

**The alignement of the items on the X axis property**  
Compare the property value for the the alignement of the items on the X axis.

**Warpping (adding lines to fit everything inside the Flexbox) property**  
Compare the property value for the warpping (adding lines to fit everything inside the Flexbox).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FlexContainer::PropertyAlignContent()` | Return the property value for the the alignement of the lines (row/columns). ||
| `Object.FlexContainer::PropertyAlignItems()` | Return the property value for the the alignement of the items on the Y axis. ||
| `Object.FlexContainer::PropertyDirection()` | Return the property value for the the direction of the items. ||
| `Object.FlexContainer::PropertyGap()` | Return the property value for the minimal gap between each item in pixels. ||
| `Object.FlexContainer::PropertyID()` | Return the property value for the the ID of the container. ||
| `Object.FlexContainer::PropertyJustifyContent()` | Return the property value for the the alignement of the items on the X axis. ||
| `Object.FlexContainer::PropertyWrap()` | Return the property value for the warpping (adding lines to fit everything inside the Flexbox). ||

## Flex Item 

An item in a flex container. 

### Behavior actions

**Set alignement of the object**  
Sets the alignement method for this object.

**Set growth of the object**  
Sets the growth for this object.

**Set order of the object**  
Sets the order for this object.

**Override the alignement for that object property**  
Change the property value for the override the alignement for that object.

**The ID of the container property**  
Change the property value for the the ID of the container.

**Occupy the maximum height possible property**  
Update the property value for "occupy the maximum height possible".

**Occupy the maximum width possible property**  
Update the property value for "occupy the maximum width possible".

**Ability to grow (flex-grow) property**  
Change the property value for the ability to grow (flex-grow).

**The order of the object in the container property**  
Change the property value for the the order of the object in the container.

**Ability to shrink (flex-shrink) property**  
Change the property value for the ability to shrink (flex-shrink).

**Set shrink of the object**  
Sets the shrink for this object.

**Toggle Occupy the maximum height possible property**  
Toggle the property value for occupy the maximum height possible.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Occupy the maximum width possible property**  
Toggle the property value for occupy the maximum width possible.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Override the alignement for that object property**  
Compare the property value for the override the alignement for that object.

**The ID of the container property**  
Compare the property value for the the ID of the container.

**Occupy the maximum height possible property**  
Check the property value for occupy the maximum height possible.

**Occupy the maximum width possible property**  
Check the property value for occupy the maximum width possible.

**Ability to grow (flex-grow) property**  
Compare the property value for the ability to grow (flex-grow).

**The order of the object in the container property**  
Compare the property value for the the order of the object in the container.

**Ability to shrink (flex-shrink) property**  
Compare the property value for the ability to shrink (flex-shrink).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FlexItem::PropertyAlignSelf()` | Return the property value for the override the alignement for that object. ||
| `Object.FlexItem::PropertyContainerID()` | Return the property value for the the ID of the container. ||
| `Object.FlexItem::PropertyGrowth()` | Return the property value for the ability to grow (flex-grow). ||
| `Object.FlexItem::PropertyOrder()` | Return the property value for the the order of the object in the container. ||
| `Object.FlexItem::PropertyShrink()` | Return the property value for the ability to shrink (flex-shrink). ||

---

*This page is an auto-generated reference page about the **Flexbox** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).