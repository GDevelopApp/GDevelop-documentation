---
title: Guide for submitting examples
---
# Guide for submitting examples

Submitting example is a great way to contribute to GDevelop and help others. If your example is good enough, it will be accepted to the example library and will be available in GDevelop.

This Guide shows how you can submit an example to GDevelop example library.


## Choose a scope

### Make a full game template

A game that could almost be published as it is. It should be well organized and easy to tweak or build upon.

!!! note

    Full games templates are good candidates to be sold in the asset store.


### Make game as a proof of concept

A game that is as simple as possible. The amount of content should be kept to the bare minimum. Visual effects are welcomed but functions must be used to avoid to cluttered events. 


### Showcase engine or extension features

A toy that uses some features in a smart or fun way. They are a good way to show how a feature may help to make a game without actually making one.


### Test an extension

An example that focuses on 1 feature and allows users to see how it works in every situation. It can also help users to check if a community extension works as expected.

!!! note

    The engine is checked with automatic tests, but these examples can be useful for users to check the features themselves and investigate an issue before retorting it.


## Check if the same example already exists

The first thing you should do is check if an example that does the same thing already exists. You won't be excited to take your time making something that already has been done.

Search through the examples list in GDevelop (**Create a new project** → **Examples tab**), and make sure the same example doesn't exist.


## Discussing with the community

You can discuss with the GDevelop community on [Discord](https://discord.com/invite/rjdYHvj) or open a new thread on the [GDevelop forum](https://forum.gdevelop.io) on how the example can be improved or if you have any doubts before starting something.


## License

The free examples will be MIT licensed (see [this](https://en.wikipedia.org/wiki/MIT_License) for more info about the MIT license).

You will have to make sure the example can be MIT licensed and make sure the resources can also be distributed under the MIT license. If you are having doubts about the license of the resources, ask the creator and ask for permission (this is important!).


## Best Practices

!!! tip

    In general, try to keep your example as minimal as possible. It will ensure it's easier to make sure it's very high quality and can be added easily.


#### Naming conventions

- Names should describe its use well and clearly. Example: a variable for storing player's health can be named `PlayerHealth`. The object name can be `Player`, but avoid crytic/shorthand names like `PyrObj`.

- Names should not have spaces in them. Example: use `PlayerName` instead of `Player Name`.



-  `PascalCase` is recommended, but using other styles is fine.


#### Variables

- Variables should be initialized in the variable editor. It is ok to leave them uninitialized for some situations, but it's generally recommended.

- Unused variables should be deleted


#### Extensions

- If custom extensions are used, add proper comments, description to the events see [Extension best practices](/gdevelop5/extensions/best-practices) for more info


#### Structuring events

- Related events should be added into a group with proper naming.
    - You can use color code to allow differentiating them quickly if you want.
- If the same events are used in multiple places, you can use external events or a function in an extension.
- Remove empty events.
- Remove disabled events or events that were used for testing.
- Unfold any events so that they are easily visible.
- Move events that are not the main focus of the example into external events or other scenes (for instance, an example that shows a character movement should not be cluttered with events about unrelated UI). 


#### Write insightful comments

##### Don't paraphrase

Comments should not paraphrase the events. For instance, "Delete the block when the ball collides it." is a useless comment for the following event:

![](collision-event.png)


##### Give the bigger picture

Every event doesn't need to be commented. It's usually a good idea to comment a group of events as a whole to give the bigger picture.


##### Pinpoint oddities

It can happen that you have no other choice but to use big formulas or use engine features in a smart but uncommon way. Comments are really important in these situations. 


##### Write a documentation page if necessary

Sometimes words alone are not enough. If you feel diagrams will help, you can submit a documentation page for your example and add a link in a comment.


##### Keep simple colors

You can change the color of the comments according to its use (for example, green for a tip, orange for a warning). Otherwise, just keep the default color.


#### Resources

- Remove unused resources from both the [resource manager](/gdevelop5/interface/project-manager/resources) and then from the project folder

- It is recommended to add all the resources in a folder called `assets`, and add sub-folders according to the use of the assets (GUI, Player, Power-ups) if needed.
- The images should not be too large (2000x2000 is a maximum).
- You will have to confirm that this example and all of its resources can be integrated to the GitHub repository (where all the example are stored), distributed and MIT licensed.


#### Keep everything clean

- Remove any unnecessary scenes, external events, external layouts
- Remove unused variables
- Remove unused resources, images, sounds, fonts, from the project folder
- Remove any unnecessary events from the event sheet


#### Projects folder

- the `.json` file and the project folder's name should be renamed to the example's name, with `-` instead of spaces. For example: an example with `Not a vania` as name should have `not-a-vania` as its folder name and its `.json` filename.
- The project should not be using multiple files for saving (using a single JSON file).
- The project should have a `README.md` file with a text describing the example (see *Submitting examples* section for more information).


#### Project Properties

- The project properties should be properly filled out.
- *Project Name* The project name should be the example name.
- *Package Name* The package name should follow `com.example.<projectname>`. In PascalCase, e.g: `com.example.RotateSprite`
- *Version* The version that is added to the library (after review) should be `1.0.0`, and incremented as changes are added after it's added.
- *Author* is your username. An account will have to be registered and a proper username will be needed to be able to add the username. Type the username and pick the username from the drop-down menu


##### Game Resolution

 - Game resolution shouldn't exceed **1920x1080** so that the example can run on all devices without any performance issues .
 - If the example uses pixel art with small assets, "nearest neighbor" rendering is recommended.


## Thumbnail and example description

- You can include a `thumbnail.png` which is the icon for the example and will be shown in the examples library
- The project folder should include a `README.md` file that has a description of the example.
 You can create a `.md` file by opening any text editor (like Notepad on Windows), writing the description and saving the files with the name `README.md`.
- Both the thumbnail and the Readme.md file should be in the main folder and not in any sub-folders.


## Submitting the example

You can submit the example to the [Example repository](https://github.com/GDevelopApp/GDevelop-examples/issues) as an issue.

  - Go to the site,
  - Click The Green **New Issue** button:

![](newissuegithub.png)

  - A option to select issue template will be shown, click **New Example**:

![](example-templategithub.png)

  - You will get a text box where you can write the "issue" which is where you can upload the project file (as a `zip` file) and add a proper description about it.
  - Change the title to the example's name.

![](github-example-submission-title.png)

  - Under `## Describe the example` in the textbox, add a proper description about the example, feel free to add any screenshots.
  - You will also be given a checklist of what is necessary. If you have done them, add `x` in the in brackets against each checklist.

  ```
  - [ ] My Game has a proper name in the game properties.
  - [ ] My Game package name begins with 'com.examples'.
  - [ ] My Game has all events unfolded.
  - [ ] I've added myself as the author in the game properties.
  - [ ] I've included a file called 'README.md' with a description in proper English, explaining what this example is doing.
  - [ ] I confirm that this game and all its resources can be integrated to this Github repository, distributed and MIT licensed.
  - [ ] I've cleaned unused resources in the project.
  ```

  - Under `## Game folder`, add a zip of your project and drag and drop it into the text box.
  - Now click `Submit Issue`.

![](github-submit-issue.png)

Congratulations! Now your example has been submitted, but it won't be directly added to the library. A **review** of the example will be done to make sure the example is ready to be added. You might have to refactor some events if the review suggests to.

!!! warning

        There is no guarantee that your example will be accepted, it can be rejected if the example is not suitable
     for the library. Also remember that while it's hard to get some feedback, reviewers are asking for changes because they believe this will improve your example. Try to rework the example using their feedback! Once you think it's good enough, you can ask for another review or discuss points where you might disagree.
