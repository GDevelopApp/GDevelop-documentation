---
title: The Dialogue Tree extension
---
# The Dialogue Tree extension

!!! tip

    **Try out these game examples!** 🎮
    
    - [Dialogue tree simple demo](https://editor.gdevelop.io/?project=https://resources.gdevelop-app.com/examples/dialogue-tree-simple-demo/dialogue-tree-simple-demo.json)
    - [Dialogue tree with yarn online](https://editor.gdevelop.io/?project=https://resources.gdevelop-app.com/examples/dialogue-tree-with-yarn/dialogue-tree-with-yarn.json)
    - [Yarnalia game](https://editor.gdevelop.io/?project=https://resources.gdevelop-app.com/examples/dialogue-tree-simple-demo/dialogue-tree-simple-demo.json)


The Dialogue Tree extension can be used to quickly create a dynamic dialogue tree behaviour. It comes with actions, conditions and expressions that make it extremely easy to set such a system with text scrolling, animated avatars and conditional dialogues. The example demo project does that in only 16 events.

If you want to make a game that is heavy on the story - be it an RPG, a Visual Novel or something else altogether, this extension will help you get there very fast and let you focus on your story.

GDevelop not only provides the extension but it also gets bundled with a popular story editor called [YARN](https://github.com/YarnSpinnerTool/YarnEditor) to author the data the extension uses.

Yarn has been battle-tested on a number of commercial and indie games. If you come from Ren'Py, RPG Maker, AGS or some other engine focused on story-heavy games, you will feel right at home with GDevelop. Just keep reading ;)

## Getting started

Yarn uses a special JSON file format to store its dialogue data.
To create or edit an existing yarn JSON file, you need to first add an action to the event sheet in GD that requires it.
That action is called "Load dialogue data from JSON file". Under the resource dropdown - regardless if you have any JSON resources yet - you will find a little brush button, which will let you open yarn and create/edit one.

![](/gdevelop5/all-features/yarngd.png)

## About Yarn: the anatomy of interactive story syntax

The Dialogue Tree extension is built on top of a javascript library called [bondagejs](https://github.com/hylyh/bondage.js).
Yarn and that library follow a syntax that is similar to [twine](https://twinery.org).

It has a very easy to learn, but also very powerful syntax which can be used to create complex story events based on user choices or other events the user has visited.

Yarn Dialogue syntax is designed to be accessible to writers who have little or no programming knowledge. It makes no assumptions about how your game presents dialogue to the player, or about how the player chooses their responses.

Yarn files are built of **nodes** - those little square notes that are connected by arrows between them. When you have a bunch of them linked with arrows - that forms a **dialogue tree**. We refer to each node of that tree as a **branch**.
You can have more than one tree in a single file and for example have the dialogues of an entire village worth of NPCs laid down in front of you, with each villager being one of the trees.
To edit a node in Yarn, you just double click on it. To close and save it, just click outside of its editor area.

When you edit a node, you are writing in Yarn syntax.
Writing stories in Yarn is just like writing dialogue, but also sprinkling it with behind the scenes hidden to the player instructions wrapped in special tags. These instructions can be used to drive what happens in the game. Depending on <<the>> \[\[wrapping\]\] tags, there are three types of data that Yarn understands — these three types are called "Dialogue line types" in the extension:

### 1. Text line type
The text is what the user will see displayed when they reach the dialogue branch it is on. If you don't put any special wrappers of the other type around your text - it will remain ordinary text. Yarn will give you a hint when that is not the case by changing its colour.

!!! note

    New lines are interpreted by yarn as logical pauses between two text line types. So whenever you write text on a new line - that is also used to tell the game engine to start printing the text on the new line after the player has pressed a button. Of course that behaviour is entirely optional and depends on how you use the  extension. Since it is the most common one, it should be noted that it is there by design.

### 2. <<Command>> line type
Remember the magic Yarn syntax we mentioned earlier - the words we place between the ordinary text the player reads to make things happen in the game?
We call them commands. They are wrapped between **<<** and **>>**. Anything you place between these two symbols is a  **<<hidden message>>** that the player will not see, but the Gdevelop will. These messages can be used to trigger events for you. If you are using the extension's built in scrolling logic, these commands will be triggered whenever the text scrolling has reached the <<command>>.

Commands can also take parameters that the engine can use to decide on how to trigger something. To pass parameters to a command, just type them after the first word which is the command,  using spaces like this:

**<<mycommand parameter0 parameter1 parameter2>>** and so on.

An example of that in the demo project is the way the animated avatar is changed:

![](/gdevelop5/all-features/yarncommandsexample.png)

**<<avatar ant>>**  when the command **avatar** is  triggered, the avatar's sprite object is set to change its animation to the word after it - CommandParameter(0) (**ant**)

!!! tip

    If you are using the extension's built in scrolling functionality, you can insert pauses between text/other commands with the built in <<wait 1000>> command. 1000 in this case is equal to 1 second, but can be anything you choose. <<wait 500>> will for example pause the text scrolling for half a second, then continue. If you have another command after it, it won't get triggered before that half second is over. So wait can be used to insert pauses between a chain of custom commands too - similar to rpg maker :)

Apart from the commands you can define yourself and the ones built into the extension, Yarn's parser library — bondage.js — also provides built-in commands for storing information and conditionally showing text to the player.
For example, if the player visits a dialogue branch of an item once and reads it, that information can be used when the player later talks to an NPC — the NPC can say something different depending on whether the player has seen the item. The syntax for this is straightforward:

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

    The dialogue tree extension stores all the $variables the player sets while playing the game and also comes with expressions/actions to get/set them - in case you want to store  them when the game is saved by the player and be able to reload them.


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

* **Using a `->` shortcut crashes the game** — This is a known bug in bondage.js (the library used to parse Yarn files). bondage.js requires any linked text to be indented with tabs; otherwise it is treated as a syntax error. If you want to use the shortcut syntax, see [this example JSON file](https://github.com/hylyh/bondage.js/blob/master/tests/yarn_files/shortcuts.json) for the correct format.

* **An empty space is clipped from text that comes after `<<command>>`** — This is a known bug in bondage.js.

!!! warning

    If an error in your game mentions the file **bondage.min.js**, the issue is likely in the bondage.js library itself. Please report it at the [bondage.js issue tracker](https://github.com/hylyh/bondage.js/issues/), not GDevelop's.

* **A problem occurred while using Yarn to edit dialogue** — Unless the problem happens when opening or saving the dialogue, it is likely a bug in Yarn, not GDevelop.

!!! warning

    Report Yarn editor bugs at the [Yarn bug tracker](https://github.com/YarnSpinnerTool/YarnEditor).

* **Text styling from the Dialogue Tree does not render correctly** — If you are using the BBCode extension and underlined text or combinations of styles do not work, the issue is likely in the pixi-multistyle-text library used by that extension. Note that **pixi does not support text underlining in general** — it will appear in the Yarn editor but will not render in the game.

!!! warning

    Report pixi-multistyle-text bugs at the [pixi-multistyle-text issue tracker](https://github.com/tleunen/pixi-multistyle-text).

## Setting up the event sheet in GDevelop

The best thing to do to get started really is to open the demo project  for the dialogue tree extension. From there on you can build your own functionality on top or even your own extensions.
If you look at the event sheet, you will find that the entire logic fits on a single screenshot

![](/gdevelop5/all-features/yarngdeventsheet.png)


The demo does not use the entire capability of the extension and is aiming to provide the functionality in the simplest/quickest way. The extension contains many more actions, conditions and expressions which can be used to build very customisable presentations to the player.

### The basic life cycle of a dialogue

-  Load the dialogue tree data at the beginning of the game or the level
- Set when a dialogue gets triggered — using the "Start Dialogue from branch..." action, passing the name of the node title where it will start from (typically the root of a tree). A common pattern is to store the branch name in an object variable (e.g., `dialogueBranch`) so that many NPCs can share the same logic with different starting points.
- Tell the game engine how you want the dialogue data to be displayed to the player and used by the engine - for each of the three types
- Set reusable commands to be triggered by Yarn - such as changing of avatars, playing of sound effects and any other game events to help tell your story.

# Examples

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://dialogue-tree-with-yarn){ .md-button .md-button--primary }

## Reference

All actions, conditions and expressions are listed in [the dialogue tree reference page](/gdevelop5/all-features/dialogue-tree/reference/).
