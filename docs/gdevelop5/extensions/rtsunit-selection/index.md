# RTS-like unit selection

<img src="https://resources.gdevelop-app.com/assets/Icons/pencil-box-outline.svg" class="extension-icon"></img>
Allow player to select units by clicking on them or dragging a selection box.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames), [Slash](https://gd.games/Slash).

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

**Assign a unique ID to each "Selected" unit**  
Assign a unique ID to each "Selected" unit.  This should be ran every time there is a change in the number of "Selected" units.

**Enable control groups using default controls**  
Enable control groups using default controls.

**Allow player to select units by clicking on them or dragging a selection box**  
Allow player to select units by clicking on them or dragging a selection box.

**Set unit as "Preselected"**  
Set unit as "Preselected".

**Set unit as "Selected"**  
Set unit as "Selected".

## Conditions

**Check if a unit is assigned to a control group**  
Check if a unit is assigned to a control group.

**Is unit "Preselected"**  
Check if the unit is "Preselected".

**Is unit "Selected"**  
Check if the unit is "Selected".

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