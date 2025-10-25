# RTS-like unit selection

<img src="https://resources.gdevelop-app.com/assets/Icons/pencil-box-outline.svg" class="extension-icon"></img>
Allow player to select units by clicking on them or dragging a selection box.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames), [Slash](https://gd.games/Slash).

---

How To Use:

- The "Allow player to select units" action must run every frame to work properly
- When a drag is in progress, all units inside the selection box will be "PreSelected"
- When the drag is released, all "PreSelected" units will be changed to "Selected"
- Hold the additive select key to add units to selection
- Hold the subtractive select key to remove units from selection

Control Group controls:

- Ctrl + (1,2,3,4,5,6,7,9,0) assigns that Control Group to Selected units
- (1,2,3,4,5,6,7,9,0) selects all units that are assigned to that Control Group

Selection box:

- When dragging, the selection area will be drawn by a Shape Painter object. 
- If a Shape Painter instance has not been added in the scene, it will be created automatically.
- To change the appearance of the selection area, change the Shape Painter properties.
- Reduce the fill opacity of the SelectionBox (shape painter object) so that units and terrain can be seen behind it.

Tips:

- Use the "Preselected" and "Selected" conditions to highlight units that are being interacted with
- Create an object group (i.e. "SelectableUnits") to control which types of objects can be selected
- Use conditions to restrict which object instances can be selected. 
- Use the "SelectedUnitID" to design formations of units.
- Shape painter object should be on the same layer as the units being selected
- Always use ForEach() events when using the conditions in this extension because extension conditions do not currently perform object picking.

[Read more...](https://victrisgames.itch.io/rts-like-unit-selection)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Assign unit to a control group**  
Assign unit to a control group.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🔢 Number): Control group ID

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RTSUnitSelection::AssignControlGroup`.

**Assign a unique ID to each "Selected" unit**  
Assign a unique ID to each "Selected" unit.  This should be ran every time there is a change in the number of "Selected" units.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Units

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RTSUnitSelection::AssignUnitID`.

**Enable control groups using default controls**  
Enable control groups using default controls.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Units
      Object (or object group) that will be assigned to a control group

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RTSUnitSelection::RTSControlGroups`.

**Allow player to select units by clicking on them or dragging a selection box**  
Allow player to select units by clicking on them or dragging a selection box.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Units
      Object (or object group) that can be Selected
    - Parameter 2 (👾 Object): Selection box
      Edit shape painter properties to change the appearance of this selection box
    - Parameter 3 (🔤 Layer name (String)): Layer (of selection box)
      Must be the same layer as the units being selected
    - Parameter 4 (🔢 Number): Z order (of selection box)
      Z order of the selection box
    - Parameter 5 (key): Additive select key
      Hold this key to add units to selection
    - Parameter 6 (key): Subtractive select key
      Hold this key to remove units from selection
    - Parameter 7 (mouse): Mouse button used to select units

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RTSUnitSelection::RTSUnitSelection`.

**Set unit as "Preselected"**  
Set unit as "Preselected".

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (❓ True or False): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RTSUnitSelection::SetPreSelected`.

**Set unit as "Selected"**  
Set unit as "Selected".

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (❓ True or False): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RTSUnitSelection::SetSelected`.

## Conditions

**Check if a unit is assigned to a control group**  
Check if a unit is assigned to a control group.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🔢 Number): Control group ID

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RTSUnitSelection::IsAssignedToControlGroup`.

**Is unit "Preselected"**  
Check if the unit is "Preselected".

??? quote "See parameters & details"

    - Parameter 1: 👾 Object

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RTSUnitSelection::IsPreSelected`.

**Is unit "Selected"**  
Check if the unit is "Selected".

??? quote "See parameters & details"

    - Parameter 1: 👾 Object

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RTSUnitSelection::IsSelected`.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `RTSUnitSelection::ControlGroupID(object)` | Control group this unit is assigned to. ||
| | _👾 Object_ | Unit |
| `RTSUnitSelection::SelectedUnitID(object)` | Unit ID of a selected unit. ||
| | _👾 Object_ | Unit |
| `RTSUnitSelection::TotalSelectedUnits(object)` | Provides the total number of _PARAM1_ that are currently "Selected". ||
| | _👾 Object_ | Unit |


---

*This page is an auto-generated reference page about the **RTS-like unit selection** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).