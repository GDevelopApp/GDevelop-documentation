---
title: Resources
---
# Resources

You can find the resource manager at **Project manager** → **Game settings** → **Resources**.

![](/gdevelop5/interface/project-manager/resources/pasted/20230309-205340.png)

## Interface

When you click on **Resources**, a new tab is opened where you can edit and control the resources in your game, all the resources in this new tab will be exported during the export of the game.

This tab has a **properties panel**, with options based on the type of resource selected, will be displayed on the left side of the screen. And a list of resources in the project on the right side of the screen.

![](/gdevelop5/interface/project-manager/resources/pasted/20230309-205841.png)

!!! tip

    The changes you might have made (Ex: added a new object to the project, added new animations, etc... ) might not instantly apply to the resources tab if you have it opened. Close and reopen the tab to see the changes

The toolbar will be different inside of this tab, with buttons aligned to the right side of the toolbar, that allow you to:

* **Open the project folder** with the button on the left.
* **Toggle the properties panel visibility** with the button in the middle.
* **Remove the selected resource** with the button on the right.

![](/gdevelop5/interface/project-manager/resources/pasted/20230309-210717.png)

### Editing the file path

**File path** is the location where the resource is located on your computer.

When you have a resource selected and you click **edit**, you'll be prompted to choose a file to use for this resource. After you have chosen the file, that file path will be used instead of the old one.

![](/gdevelop5/interface/project-manager/resources/pasted/20230309-212114.png)

!!! note

    A file path can be a URL, this URL will be requested and loaded at the startup of the game.

### Smoothing

Images can appear blurry if they're scaled to a ratio they were not meant to be, or scaled at the correct ratio but to the wrong size. Image smoothing can help with scaling in any game that does not use pixel art. You can disable/enable image smoothing by toggling the option **Smooth the image** for the object that is selected in the resource tab. When your project properties **scale mode** is set to linear, all assets added to the project will start with this toggled on. But if **scale mode** is set to nearest, all assets added to the project will start with this toggled off.

![](/gdevelop5/interface/project-manager/resources/pasted/20230310-180753.png)

- Sprite with **smoothing enabled**:

![](/gdevelop5/interface/project-manager/resources/pasted/20230310-181104.png)

- Sprite with **smoothing disabled**:

![](/gdevelop5/interface/project-manager/resources/pasted/20230310-181038.png)

### Always loaded in memory

!!! note

    Currently the **Always loaded in memory** option is not yet supported. All the resources (except audio) are always loaded at the startup of the game during the loading.

### Preload as sound/music

This allows you to preload audio files as music/sound, making them start quickly as you don't have to wait for the audio to load. If the appropriate toggle isn't checked, the first time this audio file is played it may be distorted as it's loaded in.

![](/gdevelop5/interface/project-manager/resources/pasted/20230310-181721.png)

### Some other options/tools

For more options related to each resource file, you can open a drop-down menu by clicking on the three dots to the right of the resource name, or right click on the resource.

![](/gdevelop5/interface/project-manager/resources/pasted/20230310-182803.png)

### Renaming

Allows you to rename the resources. The name is the path to the resource by default. You may need to re-open the resource manager to apply the changes to the UI.

### Removing

Removes the selected resource from the project.

!!! warning

    Removing a resource only removes it from the game, it doesn't delete the file from the project folder, you will have to do it manually

### Open the file

Lets you open the selected resource in a player/viewer (Uses the default software for that file type on your system)

### Locate file

Opens the selected resource in the file manager of your system.

### Copy file path

Copies the file path of the resource to your clipboard, which you can then paste somewhere else.

### Scan for images/audio/fonts/videos

If there are files that exist in the project folder, but are not used by your project, you can add those files by selecting this option. It scans the project folder and adds them to your project.

### Remove unused images/audio/fonts

This will remove all unused resources from your project, or the specific type of unused file that you specify.(Audio, image, etc) These are resources that are not used by an object, audio action, etc..

!!! warning

    Removing a resource only removes it from the game, it doesn't delete the file from the project folder, you will have to do it manually

### Remove resources with Invalid paths

If a resources file path is missing, or the file path in your project doesn't lead to an appropriate file inside the project folder, that resource will have a broken image icon and when selected will be highlighted with a different color than other resources in the project.

![](/gdevelop5/interface/project-manager/resources/pasted/20230310-184125.png)

You can remove all resources with invalid paths by selecting this option from that drop-down menu.

!!! note

    Sometimes the text might be yellow, which might be indicating that the resource itself has an issue that needs to be corrected.
