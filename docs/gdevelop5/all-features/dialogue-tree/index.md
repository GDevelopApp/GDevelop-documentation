---
title: The Dialogue Tree extension
---
# The Dialogue Tree extension

The Dialogue Tree extension is used to create branching dialogues with choices, commands, and variables — driven by **Yarn Spinner** script files. It is well-suited for RPGs, visual novels, and any game with story-heavy content.

GDevelop bundles a **Yarn editor** directly in the IDE, so you can write and preview your dialogue without leaving GDevelop.

!!! tip

    **Try out these game examples!** 🎮
    
    - [Dialogue tree simple demo](https://editor.gdevelop.io/?project=https://resources.gdevelop-app.com/examples/dialogue-tree-simple-demo/dialogue-tree-simple-demo.json)
    - [Dialogue tree with yarn](https://editor.gdevelop.io/?project=https://resources.gdevelop-app.com/examples/dialogue-tree-with-yarn/dialogue-tree-with-yarn.json)

## Getting started

Yarn stores dialogue in a JSON file. There are two ways to load it at the start of a scene:

- **Load dialogue tree from a JSON file** — the most common approach. Pick or create a JSON resource; a brush icon opens the built-in Yarn editor directly.
- **Load dialogue tree from a scene variable** — useful when dialogue data is fetched from a server or constructed at runtime, and has been stored in a scene variable.

![](/gdevelop5/all-features/yarngd.png)

After loading, call **Start dialogue from branch** with the name of the starting node to begin a conversation.

## About Yarn: the anatomy of interactive story syntax

The Dialogue Tree extension is built on top of a JavaScript library called [bondage.js](https://github.com/hylyh/bondage.js).
Yarn and that library follow a syntax similar to [Twine](https://twinery.org).

It has a very easy to learn, but also very powerful syntax which can be used to create complex story events based on user choices or other events the user has visited.

Yarn Dialogue syntax is designed to be accessible to writers who have little or no programming knowledge. It makes no assumptions about how your game presents dialogue to the player, or about how the player chooses their responses.

Yarn files are built of **nodes** - those little square notes that are connected by arrows between them. When you have a bunch of them linked with arrows - that forms a **dialogue tree**. We refer to each node of that tree as a **branch**.
You can have more than one tree in a single file and for example have the dialogues of an entire village worth of NPCs laid down in front of you, with each villager being one of the trees.
To edit a node in Yarn, you just double click on it. To close and save it, just click outside of its editor area.

When you edit a node, you are writing in Yarn syntax.
Writing stories in Yarn is just like writing dialogue, but also sprinkling it with behind the scenes hidden to the player instructions wrapped in special tags. These instructions can be used to drive what happens in the game. Depending on <<the>> \[\[wrapping\]\] tags, there are three types of data that yarn understands - these three types are called "Dialogue line types":

### 1. Text line type
The text is what the user will see displayed when they reach the dialogue branch it is on. If you don't put any special wrappers of the other type around your text - it will remain ordinary text. Yarn will give you a hint when that is not the case by changing its colour.

!!! note

    New lines are interpreted by yarn as logical pauses between two text line types. So whenever you write text on a new line - that is also used to tell the game engine to start printing the text on the new line after the player has pressed a button. Of course that behaviour is entirely optional and depends on how you use the  extension. Since it is the most common one, it should be noted that it is there by design.

### 2. <<Command>> line type
Remember the magic Yarn syntax we mentioned earlier - the words we place between the ordinary text the player reads to make things happen in the game?
We call them commands. They are wrapped between **<<** and **>>**. Anything you place between these two symbols is a  **<<hidden message>>** that the player will not see, but the Gdevelop will. These messages can be used to trigger events for you. If you are using the extension's built in scrolling logic, these commands will be triggered whenever the text scrolling has reached the <<command>>.

Commands can also take parameters that the engine can use to decide on how to trigger something. To pass parameters to a command, just type them after the first word which is the command,  using spaces like this:

**<<mycommand parameter0 parameter1 parameter2>>** and so on.

An example from the demo project: changing the animated avatar.

![](/gdevelop5/all-features/yarncommandsexample.png)

**<<avatar ant>>** — when the command `avatar` is triggered, the avatar's sprite animation is set to `CommandParameter(0)` which is `ant`.

!!! tip

    If you are using the extension's built in scrolling functionality, you can insert pauses between text/other commands with the built in <<wait 1000>> command. 1000 in this case is equal to 1 second, but can be anything you choose. <<wait 500>> will for example pause the text scrolling for half a second, then continue. If you have another command after it, it won't get triggered before that half second is over. So wait can be used to insert pauses between a chain of custom commands too - similar to rpg maker :)

Apart from the commands you set up yourself, Yarn's built-in commands can store information and conditionally show text. The syntax is simple:

![](/gdevelop5/all-features/ifelsecommandsyarn.png)

(1) **<<set $myYarnVariable to aValue>>** will tell yarn to store your value in $myYarnVariable. You can put that after the player reads that the item has been seen or taken or whatever the story requires.

(2)  **<<if $myYarnVariable == aValue>>**

_blah blah blah_

** <<elseif $myYarnVariable == anotherValue>> **

_more blah_

** <<else>>**

_other blah_

**<<endif>>**

- will tell yarn to check **<<if $myYarnVariable** is equal to aValue, if so, _blah blah blah_ will be shown

- if not, it will check if the **<<elseif...** is true, if so _more blah_ will be shown

- if all fails, the  **<<else>>** will trigger  _other blah_ to happen. The **<<elseif ...>>** and **<<else>>** are optional. Don't forget to close it with the **<<endif>>**

!!! note


    __Example:__

    You found a weird rock **<<set $hasRandomRock to true>>**



!!! note


    __Example at another node tree:__

    There is a strange well.  Peering down, you can only see darkness...

    **<<if $hasRandomRock == true>>**

    Would you like throw the weird rock you found in the well?

    \[putRockNode\](/yes do it)

     \[otherNode\](/I rather not)

    **<<endif>>**



Don't forget that you can put anything inside this **<<if ...>>**...**<<endif>>**  block -  be it other commands or dialogue choices leading to other branches.

!!! note

    The dialogue tree extension stores all the `$variables` set during play. Use the **Save/Load dialogue state** actions (see below) to persist them with your game save so player choices survive across sessions.


### 3. Option line type

This is the type that creates arrows between the nodes. It is what yarn uses to display to the user what choices they can make. The syntax is as follows:

**\[\[player choice|otherNodeTitle\]\]**

**\[\[another choice|anotherNodeTitle\]\]**

The text of the left side of the **|** is what the player will see. The text on the right side is what you use to tell yarn  the title of the node that the player will be sent to if they take that choice.

You can also do

**\[\[anotherNodeTitle\]\]**

This will simply tell yarn to continue to that node, without any user input. Useful when nested in an if statement..

!!! note

        Yarn will autocomplete it for you when you start **\[\[**, but if you wonder how to write a **|**, on most english keyboards its **shift + \ **

!!! warning

     Please note that as of now node titles can not contain spaces, dashes or any strange characters. Just letters a-Z and numbers 0-9
!!! warning

     Avoid using options that contain a link to a non existent node or no link at all. That may cause the extension to crash your game

**Gotchas to watch out for:
**
If you try to do conditional options like this:
```
Ok kids we're gonna go with...
[NotSure](/Actually, I'm not sure yet...)
<<if $robot_head_0_done == 1>>
    [PickRobotMascot0](/Frog Head)
<<endif>>
```

Yarn will send the player to "NotSure" instead of displaying this as two options, even when the if is true.
The correct way to do this would be:

```
Ok kids we're gonna go with...
<<if $robot_head_0_done == 1>>
    [NotSure](/Actually, I'm not sure yet...)
    [PickRobotMascot0](/Frog Head)
<<else>>
    [NotSure](/Actually, I'm not sure yet...)
    [PickBirdMascot0](/Bird Head)
<<endif>>
```

If you want to just send the player to another node (PickRobotMascot0) without displaying any options when the if statement is true, you can do:
```
Ok kids we're gonna go with...
<<if $robot_head_0_done == 1>>
    [PickRobotMascot0](/Frog)
<<else>>
    [NotSure](/Actually, I'm not sure yet...)
    [PickBirdMascot0](/Bird Head)
<<endif>>
```

----

## Known issues

- **Using `->` shortcut crashes the game** — This is a known bug in bondage.js. It expects shortcut text to be indented with tabs; otherwise it is treated as a syntax error. See [https://github.com/hylyh/bondage.js/issues/31](https://github.com/hylyh/bondage.js/issues/31).

- **An empty space is clipped from text after `<<command>>`** — Known bondage.js bug: [https://github.com/hylyh/bondage.js/issues/61](https://github.com/hylyh/bondage.js/issues/61).

- **Yarn editor problems** — Issues when opening or saving a Yarn file are likely Yarn editor bugs. Report them at [https://github.com/YarnSpinnerTool/YarnEditor](https://github.com/YarnSpinnerTool/YarnEditor).

- **BBcode text styling issues** — Underlined text is not supported by pixi in general; it will not render in the game even if it appears in the Yarn editor preview.

!!! warning

    If an error message mentions **bondage.min.js**, it is a bondage.js library issue. Report it at [https://github.com/hylyh/bondage.js/issues/](https://github.com/hylyh/bondage.js/issues/), not in the GDevelop tracker.

## Setting up the event sheet in GDevelop

The best starting point is the demo project for the dialogue tree extension. The entire dialogue logic can fit in a single screenshot's worth of events:

![](/gdevelop5/all-features/yarngdeventsheet.png)

The demo shows the simplest approach. The extension has many more actions, conditions, and expressions for more customisable presentation — see the sections below and the reference page.

### The basic life cycle of a dialogue

1. **Load** the dialogue data at the beginning of a scene.
2. **Start** a dialogue with **Start dialogue from branch**, passing the node title (e.g. the NPC object's `dialogueBranch` variable so each NPC has its own entry point).
3. Each frame, check **Dialogue is running** to gate player movement and other actions.
4. On player input, call **Go to the next dialogue line** and then check which **line type** is active to decide what to render.
5. When the dialogue ends, `Dialogue is running` becomes false.

The three line types drive all display logic:

- **text** — a line of story text. Read it with `DialogueTree::LineText()` and display it in a text object. Call **Go to the next dialogue line** when the player confirms they've read it.
- **options** — a branching choice. Use `DialogueTree::OptionsCount()` and `DialogueTree::Option(index)` (0-based) to display each option, **Select next/previous option** or **Select option by number** to move the cursor, and **Confirm selected option** to advance to the chosen branch. `DialogueTree::HorizontalOptionsList(">")` and `DialogueTree::VerticalOptionsList(">")` can build a quick formatted list with a cursor marker in one expression.
- **command** — a hidden instruction from the Yarn script (e.g. `<<avatar ant>>`). Use the **Command is called** condition to catch it by name, and `DialogueTree::CommandParameter(index)` (0-based) to read its parameters.

## Typewriter effect

To reveal text character by character, use `DialogueTree::ClippedLineText()` instead of `DialogueTree::LineText()`. Each time the **Scroll clipped text** action runs, one more character is revealed. Call it repeatedly (e.g. every 30 ms with a timer) to animate the effect.

- **Complete clipped text scrolling** instantly reveals the full line — useful when the player wants to skip the animation.
- The condition **Clipped text has completed scrolling** becomes true once all characters are visible. Use it to prevent advancing to the next line before the text is fully shown.
- The Yarn command `<<wait 1000>>` (milliseconds) pauses the scrolling at that point for the given duration.

## Branch tags

Yarn nodes can have **tags** written at the top of the node body. Tags are an alternative to commands for attaching metadata to an entire branch — for example, to set background music or camera mode when a conversation begins.

Use the **Current dialogue branch contains a tag** condition to check for a tag by name, then read its parameters with `DialogueTree::TagParameter(index)` (0-based). You can also read all tags as a comma-separated string with `DialogueTree::BranchTags()` or a specific one by index with `DialogueTree::BranchTag(index)`.

## Dialogue state variables

Yarn's `<<set $variable to value>>` command stores variables inside the dialogue engine. These are separate from GDevelop variables.

From GDevelop events you can:

- Read them with `DialogueTree::Variable("varName")` (number) or `DialogueTree::VariableString("varName")` (string).
- Write them with **Set dialogue state string/number/boolean variable** — useful for seeding the dialogue with game state (e.g. the player's name or a quest flag) before starting a conversation.
- Compare them directly with the **Compare dialogue state string/number/boolean variable** conditions.

The condition **Branch title has been visited** checks whether the player has passed through a particular node. `DialogueTree::VisitedBranchTitles()` returns all visited titles as a comma-separated string.

## Saving and restoring dialogue state

Player choices and visited branches accumulate as *dialogue state*. To preserve this across game sessions:

1. Use **Save dialogue state** (stores all variables and visited branch history into a global variable).
2. Persist that global variable alongside your normal game save (e.g. with the Storage extension or the Save State extension).
3. On load, restore it with **Load dialogue state**.

Use **Clear dialogue state** when starting a new game to reset all choices and branch history.

## Stopping and checking dialogue

- **Stop running dialogue** interrupts a running conversation at any time.
- **Dialogue has branch** checks whether a named branch exists in the loaded data before starting it — useful to avoid errors when branches are optional.
- **Current dialogue branch title is** triggers game events when the player reaches a specific node.

# Examples

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://dialogue-tree-with-yarn){ .md-button .md-button--primary }

## Reference

All actions, conditions and expressions are listed in [the dialogue tree reference page](/gdevelop5/all-features/dialogue-tree/reference/).
