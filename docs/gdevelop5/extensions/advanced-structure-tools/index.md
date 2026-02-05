# Advanced structure tools

<img src="" class="extension-icon"></img>
Tools for working with structures and arrays of structures.

**Authors and contributors** to this experimental extension: [blopa285](https://gd.games/blopa285).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

This extension adds structure-oriented tools:

- Copy variable: deep copy of a structure or array
- Filter array: filter arrays of numbers, strings, or structures by field path and condition
- Sort structures by field: sort an array of structures by a field or nested path

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Copy variable**  
Copies a variable (structure or array) completely with all nested fields. Creates a real deep copy without any links.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Source variable (structure or array) to copy from
    - Parameter 2 (🗄️ Any variable): Target variable (structure or array) to copy to

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedStructureTools::CopyVariable`.

**Filter array**  
Filters an array based on a comparison condition. Can filter arrays of numbers, strings, or structures. If OutputArray is not specified, the input array is mutated.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Array to filter
    - Parameter 2 (🔤 String): Field name or path to check for structures (supports nested fields like "player.score")
      Leave empty to compare the array element directly. For structures, use dot notation to access nested fields (e.g., "player.score").
    - Parameter 3 (🔤 String): Comparison operator (one of: "==", "!=", ">", "<", ">=", "<=")
    - Parameter 4 (🔤 String): Value to compare against (can be regex like /pattern/, number, boolean, or text)
      For regex matching, use format /pattern/ (e.g., /^test/). For numbers, enter the number. For booleans, use "true" or "false". For strings, enter the text.
    - Parameter 5 (🗄️ Any variable): Output array (leave empty to mutate input array)
      If specified, filtered results will be stored in this array. If left empty, the source array will be modified in place.

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedStructureTools::Filter`.

**Sort structures by field**  
Sorts an array of structures by a specified field or path. Automatically detects if the value is a number or string and sorts accordingly.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Array of structures to sort
    - Parameter 2 (🔤 String): Field name or path to sort by (supports nested fields like "player.score")
      For structures, use dot notation to access nested fields (e.g., "player.score").

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedStructureTools::SortStructuresByField`.





---

*This page is an auto-generated reference page about the **Advanced structure tools** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).