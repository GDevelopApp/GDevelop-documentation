# Ink Dialog Tree

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Education and Learning/ee949224f4dd4fa7a0c1b17879f4fde192fe97bf4b419c72a5e4ea6d3e747327_Education and Learning_education_book_open_reading.svg" class="extension-icon"></img>
Support for Ink writing system.

**Authors and contributors** to this experimental extension: [infokubarcade](https://gd.games/infokubarcade).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Ink is a non-linear writing technique created by Inkle.
It helps you to write rich stories where the player can choose where to go.
Export your story from Inky (the writing software) and import it directly to GDevelop.

This extension supports all the major features : 

- Load a JSON story
- Read dialogs and choices
- Read any tag (global, knot, line and choice)
- Catch external events and call internal functions
- Observe variables
- Save history and snapshot

This extension does not support: 

- Multiple flows (beta)
- Partial list support

[Read more...](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Activate story history**
Set a scene variable for saving the story choice history.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🗄️ Scene variable): History array

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Add parameter for Ink function**
Call an internal Ink function set inside the story.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔤 Name (String)): Internal Ink method name
    - Parameter 3 (string): Parameter value

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Link story event**
Link an external Ink function to the game.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔤 Name (String)): Ink event name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Call Ink function**
Call an internal Ink function set inside the story.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔤 Name (String)): Internal Ink method name
    - Parameter 3 (🗄️ Scene variable): Save result in

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Call Ink function with story output**
Call an internal Ink function set inside the story and collect value and text output.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔤 Name (String)): Internal Ink method name
    - Parameter 3 (🗄️ Scene variable): Save result in
    - Parameter 4 (🗄️ Scene variable): Save text output in

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Change story chapter**
Change the current story chapter.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔤 Name (String)): Chapter name
      In Ink, a chapter (or knot) is a large part of the story.
      
      You can combine it with a subchapter (a stich) for reaching a specific part of the chapter. The format is "knot.stich".
      
      For example:
      - castle
      - castle.hall
      
      are valid chapter names.

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Change story variable boolean**
Change the story variable boolean.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔤 Name (String)): Variable name
    - Parameter 3 (❓ True or False): Value

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Story variable value**
Change the story variable value.

??? quote "See parameters"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔤 Name (String)): Variable name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Story variable text**
Change the story variable text.

??? quote "See parameters"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔤 Name (String)): Variable name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Chapter tags to array**
Export the chapter tag list to an array variable.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔤 Name (String)): Chapter name
      In Ink, a chapter (or knot) is a large part of the story.
      
      You can combine it with a subchapter (a stich) for reaching a specific part of the chapter. The format is "knot.stich".
      
      For example:
      - castle
      - castle.hall
      
      are valid chapter names.
    - Parameter 3 (🗄️ Scene variable): Scene array variable

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Choice tags to array**
Export the choice tag list to an array variable.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔢 Number): Choice index
    - Parameter 3 (🗄️ Scene variable): Scene array variable

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Continue the story**
Load the next story line.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Create story snapshot**
Create a temporary snapshot of the story.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Current line tags to array**
Export the current line tag list to an array variable.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🗄️ Scene variable): Scene array variable

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Discard story snapshot**
Discard the last snapshot of the story.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Global tags to array**
Export the global tag list to an array variable.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🗄️ Scene variable): Scene array variable

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Load story state from JSON**
Load a previous state of an existing story from a JSON string.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (string): JSON text

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Load story history**
Load an already prepared scene variable for saving the story choice history.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🗄️ Scene variable): History array

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Load JSON Story**
Create a story from an Ink JSON resource.

??? quote "See parameters"

    - Parameter 1: jsonResource
    - Parameter 2 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Observe a story variable**
Activate the observation of any change to the story variable.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔤 Name (String)): Variable name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Reset story state**
Reset the story back to its initial state.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Restore story snapshot**
Restore the last snapshot of the story.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Rewind last choice**
Come back to the previous state of the story.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Validate a choice**
Validate a choice using its Ink index before continuing the story.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔢 Number): Choice index

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

## Conditions

**Can continue**
The story flow can progress.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Chapter tag value**
Compare chapter tag.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔤 Name (String)): Chapter name
      In Ink, a chapter (or knot) is a large part of the story.
      
      You can combine it with a subchapter (a stich) for reaching a specific part of the chapter. The format is "knot.stich".
      
      For example:
      - castle
      - castle.hall
      
      are valid chapter names.
    - Parameter 5 (🔢 Number): Tag list index

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

**Chapter tag count**
Compare chapter tag count.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔤 Name (String)): Chapter name
      In Ink, a chapter (or knot) is a large part of the story.
      
      You can combine it with a subchapter (a stich) for reaching a specific part of the chapter. The format is "knot.stich".
      
      For example:
      - castle
      - castle.hall
      
      are valid chapter names.

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Current choices count**
Compare current choice count.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Choice tag value**
Compare choice tag.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔢 Number): Choice index
    - Parameter 5 (🔢 Number): Tag list index

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

**Choice tag count**
Compare choice tag count.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔢 Number): Choice index

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Current story chapter**
Compare current story chapter.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Current Story Line**
Compare the current story line.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Current line tag value**
Compare current line tag.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔢 Number): Tag list index

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Current line tag count**
Compare current line tag count.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Ink function story output**
Compare the internal Ink function story output.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔤 Name (String)): Internal Ink method name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Ink function text result**
Compare the internal Ink function text value.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔤 Name (String)): Internal Ink method name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Ink function result value**
Compare the internal Ink function value.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔤 Name (String)): Internal Ink method name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Event parameter count**
Compare the event parameter count.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔤 Name (String)): Ink event name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Event parameter value**
Compare the event parameter value.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔤 Name (String)): Ink event name
    - Parameter 5 (🔢 Number): Parameter index

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

**Event parameter text**
Compare the event parameter text.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔤 Name (String)): Ink event name
    - Parameter 5 (🔢 Number): Parameter index

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

**Global tag value**
Compare global tag.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔢 Number): Tag list index

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Global tag count**
Compare global tag count.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Has ended**
The story reached its end.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Chapter has tags**
Check if the current story chapter contains tags.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔤 Name (String)): Chapter name
      In Ink, a chapter (or knot) is a large part of the story.
      You can combine it with a subchapter (a stich) for reaching a specific part of the chapter. The format is "knot.stich".
      For example:
      
      - castle
      - castle.hall
      
      are valid chapter names.

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Choice has tags**
Check if the choice contains tags.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔢 Number): Choice index

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Current line has tags**
Check if the current story line contains tags.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Has global tags**
Check if the current story contains global tags.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Event is called**
Check if the story event is called by Ink.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔤 Name (String)): Ink event name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Is loaded**
Check if the story is already loaded.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Story variable boolean**
The story variable boolean is true.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔤 Name (String)): Variable name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Story variable changed**
A story variable observed has changed.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔤 Name (String)): Variable name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Story variable exists**
Check if the story variable exists.

??? quote "See parameters"

    - Parameter 1 (🔤 Name (String)): Story name
    - Parameter 2 (🔤 Name (String)): Variable name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Story variable value**
Compare the story variable value.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔤 Name (String)): Variable name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Story variable text**
Compare the story variable text.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔤 Name (String)): Variable name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Story chapter visit count**
Compare the chapter visit count of the story.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Story name
    - Parameter 4 (🔤 Name (String)): Chapter name
      In Ink, a chapter (or knot) is a large part of the story.
      You can combine it with a subchapter (a stich) for reaching a specific part of the chapter. The format is "knot.stich".
      For example:
      - castle
      - castle.hall
      are valid chapter names.

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `InkJS::ChapterTag(string, string, number)` | Return chapter tag. ||
| | _🔤 Name (String)_ | Story name |
| | _🔤 Name (String)_ | Chapter name In Ink, a chapter (or knot) is a large part of the story.You can combine it with a subchapter (a stich) for reaching a specific part of the chapter. The format is "knot.stich".For example:- castle- castle.hallare valid chapter names. |
| | _🔢 Number_ | Tag list index |
| `InkJS::ChapterTagCount(string, string)` | Return chapter tag count. ||
| | _🔤 Name (String)_ | Story name |
| | _🔤 Name (String)_ | Chapter name In Ink, a chapter (or knot) is a large part of the story.You can combine it with a subchapter (a stich) for reaching a specific part of the chapter. The format is "knot.stich".For example:- castle- castle.hallare valid chapter names. |
| `InkJS::ChoiceCount(string)` | Return current choice count. ||
| | _🔤 Name (String)_ | Story name |
| `InkJS::ChoiceInternalIndex(string, number)` | Get the choice internal index. ||
| | _🔤 Name (String)_ | Story name |
| | _🔢 Number_ | Choice index |
| `InkJS::ChoiceLabel(string, number)` | Get the choice label. ||
| | _🔤 Name (String)_ | Story name |
| | _🔢 Number_ | Choice index |
| `InkJS::ChoiceTag(string, number, number)` | Return choice tag. ||
| | _🔤 Name (String)_ | Story name |
| | _🔢 Number_ | Choice index |
| | _🔢 Number_ | Tag list index |
| `InkJS::ChoiceTagCount(string, number)` | Return choice tag count. ||
| | _🔤 Name (String)_ | Story name |
| | _🔢 Number_ | Choice index |
| `InkJS::CurrentChapter(string)` | Return current story chapter. ||
| | _🔤 Name (String)_ | Story name |
| `InkJS::CurrentLine(string)` | Return the current story line. ||
| | _🔤 Name (String)_ | Story name |
| `InkJS::CurrentLineTag(string, number)` | Return current line tag. ||
| | _🔤 Name (String)_ | Story name |
| | _🔢 Number_ | Tag list index |
| `InkJS::CurrentLineTagCount(string)` | Return current line tag count. ||
| | _🔤 Name (String)_ | Story name |
| `InkJS::EvaluateInternalMethodOuput(string, string)` | Return the internal Ink function story output. ||
| | _🔤 Name (String)_ | Story name |
| | _🔤 Name (String)_ | Internal Ink method name |
| `InkJS::EvaluateInternalMethodText(string, string)` | Return the internal Ink function text value. ||
| | _🔤 Name (String)_ | Story name |
| | _🔤 Name (String)_ | Internal Ink method name |
| `InkJS::EvaluateInternalMethodValue(string, string)` | Return the internal Ink function value. ||
| | _🔤 Name (String)_ | Story name |
| | _🔤 Name (String)_ | Internal Ink method name |
| `InkJS::ExternalFunctionParameterCount(string, string)` | Return the event parameter count. ||
| | _🔤 Name (String)_ | Story name |
| | _🔤 Name (String)_ | Ink event name |
| `InkJS::ExternalFunctionParameterNumber(string, string, number)` | Return the event parameter value. ||
| | _🔤 Name (String)_ | Story name |
| | _🔤 Name (String)_ | Ink event name |
| | _🔢 Number_ | Parameter index |
| `InkJS::ExternalFunctionParameterText(string, string, number)` | Return the event parameter text. ||
| | _🔤 Name (String)_ | Story name |
| | _🔤 Name (String)_ | Ink event name |
| | _🔢 Number_ | Parameter index |
| `InkJS::GlobalTag(string, number)` | Return global tag. ||
| | _🔤 Name (String)_ | Story name |
| | _🔢 Number_ | Tag list index |
| `InkJS::GlobalTagCount(string)` | Return global tag count. ||
| | _🔤 Name (String)_ | Story name |
| `InkJS::ToJSON(string)` | Export the current state of the story to a JSON string. ||
| | _🔤 Name (String)_ | Story name |
| `InkJS::VariableNumber(string, string)` | Return the story variable value. ||
| | _🔤 Name (String)_ | Story name |
| | _🔤 Name (String)_ | Variable name |
| `InkJS::VariableText(string, string)` | Return the story variable text. ||
| | _🔤 Name (String)_ | Story name |
| | _🔤 Name (String)_ | Variable name |
| `InkJS::VisitCount(string, string)` | Return the chapter visit count of the story. ||
| | _🔤 Name (String)_ | Story name |
| | _🔤 Name (String)_ | Chapter name In Ink, a chapter (or knot) is a large part of the story.You can combine it with a subchapter (a stich) for reaching a specific part of the chapter. The format is "knot.stich".For example:- castle- castle.hallare valid chapter names. |


---

*This page is an auto-generated reference page about the **Ink Dialog Tree** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).