# Ink Dialog Tree

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Education and Learning/ee949224f4dd4fa7a0c1b17879f4fde192fe97bf4b419c72a5e4ea6d3e747327_Education and Learning_education_book_open_reading.svg" class="extension-icon"></img>
Support for Ink writing system.

**Authors and contributors** to this community extension: [infokubarcade](https://gd.games/infokubarcade).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

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

**Add parameter for Ink function**  
Call an internal Ink function set inside the story.

**Link story event**  
Link an external Ink function to the game.

**Call Ink function**  
Call an internal Ink function set inside the story.

**Call Ink function with story output**  
Call an internal Ink function set inside the story and collect value and text output.

**Change story chapter**  
Change the current story chapter.

**Change story variable boolean**  
Change the story variable boolean.

**Story variable value**  
Change the story variable value.

**Story variable text**  
Change the story variable text.

**Chapter tags to array**  
Export the chapter tag list to an array variable.

**Choice tags to array**  
Export the choice tag list to an array variable.

**Continue the story**  
Load the next story line.

**Create story snapshot**  
Create a temporary snapshot of the story.

**Current line tags to array**  
Export the current line tag list to an array variable.

**Discard story snapshot**  
Discard the last snapshot of the story.

**Global tags to array**  
Export the global tag list to an array variable.

**Load story state from JSON**  
Load a previous state of an existing story from a JSON string.

**Load story history**  
Load an already prepared scene variable for saving the story choice history.

**Load JSON Story**  
Create a story from an Ink JSON resource.

**Observe a story variable**  
Activate the observation of any change to the story variable.

**Reset story state**  
Reset the story back to its initial state.

**Restore story snapshot**  
Restore the last snapshot of the story.

**Rewind last choice**  
Come back to the previous state of the story.

**Validate a choice**  
Validate a choice using its Ink index before continuing the story.

## Conditions

**Can continue**  
The story flow can progress.

**Chapter tag value**  
Compare chapter tag.

**Chapter tag count**  
Compare chapter tag count.

**Current choices count**  
Compare current choice count.

**Choice tag value**  
Compare choice tag.

**Choice tag count**  
Compare choice tag count.

**Current story chapter**  
Compare current story chapter.

**Current Story Line**  
Compare the current story line.

**Current line tag value**  
Compare current line tag.

**Current line tag count**  
Compare current line tag count.

**Ink function story output**  
Compare the internal Ink function story output.

**Ink function text result**  
Compare the internal Ink function text value.

**Ink function result value**  
Compare the internal Ink function value.

**Event parameter count**  
Compare the event parameter count.

**Event parameter value**  
Compare the event parameter value.

**Event parameter text**  
Compare the event parameter text.

**Global tag value**  
Compare global tag.

**Global tag count**  
Compare global tag count.

**Has ended**  
The story reached its end.

**Chapter has tags**  
Check if the current story chapter contains tags.

**Choice has tags**  
Check if the choice contains tags.

**Current line has tags**  
Check if the current story line contains tags.

**Has global tags**  
Check if the current story contains global tags.

**Event is called**  
Check if the story event is called by Ink.

**Is loaded**  
Check if the story is already loaded.

**Story variable boolean**  
The story variable boolean is true.

**Story variable changed**  
A story variable observed has changed.

**Story variable exists**  
Check if the story variable exists.

**Story variable value**  
Compare the story variable value.

**Story variable text**  
Compare the story variable text.

**Story chapter visit count**  
Compare the chapter visit count of the story.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `InkJS::ChapterTag()` | Return chapter tag. ||
| `InkJS::ChapterTagCount()` | Return chapter tag count. ||
| `InkJS::ChoiceCount()` | Return current choice count. ||
| `InkJS::ChoiceInternalIndex()` | Get the choice internal index. ||
| `InkJS::ChoiceLabel()` | Get the choice label. ||
| `InkJS::ChoiceTag()` | Return choice tag. ||
| `InkJS::ChoiceTagCount()` | Return choice tag count. ||
| `InkJS::CurrentChapter()` | Return current story chapter. ||
| `InkJS::CurrentLine()` | Return the current story line. ||
| `InkJS::CurrentLineTag()` | Return current line tag. ||
| `InkJS::CurrentLineTagCount()` | Return current line tag count. ||
| `InkJS::EvaluateInternalMethodOuput()` | Return the internal Ink function story output. ||
| `InkJS::EvaluateInternalMethodText()` | Return the internal Ink function text value. ||
| `InkJS::EvaluateInternalMethodValue()` | Return the internal Ink function value. ||
| `InkJS::ExternalFunctionParameterCount()` | Return the event parameter count. ||
| `InkJS::ExternalFunctionParameterNumber()` | Return the event parameter value. ||
| `InkJS::ExternalFunctionParameterText()` | Return the event parameter text. ||
| `InkJS::GlobalTag()` | Return global tag. ||
| `InkJS::GlobalTagCount()` | Return global tag count. ||
| `InkJS::ToJSON()` | Export the current state of the story to a JSON string. ||
| `InkJS::VariableNumber()` | Return the story variable value. ||
| `InkJS::VariableText()` | Return the story variable text. ||
| `InkJS::VisitCount()` | Return the chapter visit count of the story. ||

---

*This page is an auto-generated reference page about the **Ink Dialog Tree** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).