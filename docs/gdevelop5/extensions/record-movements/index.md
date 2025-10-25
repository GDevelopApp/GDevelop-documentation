# Record Movements

<img src="https://resources.gdevelop-app.com/assets/Icons/record-rec.svg" class="extension-icon"></img>
Allow the user to record object movements and recall them to make reverse time mechanic.

**Authors and contributors** to this experimental extension: [VegeTato](https://gd.games/VegeTato).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

# Actions

**Record Movements:** to record the object movements,  
such as (Xposition, Yposition, AnimationID, FrameID, HorziontalFlip, VerticalFlip, Angle,Width, Height, Visibility, Opacity).  

**•** Ability to set the recording speed.  
**Clear all object records:** to clear all previous records for the object.  
**Load Movements:** to load the recorded movements of an object.  
# Conditions

**Condition Recorded frames has finished loading:** to check if the loaded frames has finished (= to 0).  
**Condition Record limit is (below) number:** to check if the number of recorded frames is below number.  
**Condition Record limit is (above) number:** to check if the number of recorded frames is above number.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Clear all object records**  
Clear object records and reset all records back to 0.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Remove this object records

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RecordMovements::ClearRecords`.

**Load Movements**  
Allow the user to load saved object movements.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to load its movements

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RecordMovements::Load`.

**Record Movements**  
Allow the user to record object movements.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to record its movements
    - Parameter 2 (🔢 Number): Recording speed .per second (Ex: 0.01 | 0.02 | 0.03 | 0.06)
      The higher the number the faster loading.
      Set to 0 to record every single frame.
    - Parameter 3 (❓ Yes or No): Record object X position
    - Parameter 4 (❓ Yes or No): Record object Y position
    - Parameter 5 (❓ Yes or No): Record object animation ID & Frame ID
    - Parameter 6 (❓ Yes or No): Record object horizontal flip direction
    - Parameter 7 (❓ Yes or No): Record object vertical flip direction
    - Parameter 8 (❓ Yes or No): Record object angle
    - Parameter 9 (❓ Yes or No): Record object width
    - Parameter 10 (❓ Yes or No): Record object height
    - Parameter 11 (❓ Yes or No): Record object visibility
    - Parameter 12 (❓ Yes or No): Record object opacity

    > Technical note: parameters 0, 13 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RecordMovements::Record`.

## Conditions

**Recorded frames has finished loading**  
Check if the recorded frames has finished loading (= to 0).

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to check its recorded frames

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RecordMovements::RecordFinished`.

**Record limit is (below) number**  
Set recording limit to object (per frame).

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Set recording limit to this object
    - Parameter 2 (🔢 Number): The maximum recorded frames
      Set to 0 or remove the limit condition for infinite recording frames

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RecordMovements::RecordLimit`.

**Record limit is (above) number**  
Set recording limit to object (per frame).

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Set recording limit to this object
    - Parameter 2 (🔢 Number): The maximum recorded frames
      Set to 0 or remove the limit condition for infinite recording frames

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RecordMovements::RecordLimit2`.




---

*This page is an auto-generated reference page about the **Record Movements** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).