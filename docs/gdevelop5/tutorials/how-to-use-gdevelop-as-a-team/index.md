---
title: How to use GDevelop as a team (multiple developers or teammates)
---
# How to use GDevelop as a team (multiple developers or teammates)

## Enable multiple files mode

As a team of multiple developers, you probably want to activate the option to save the project as **multiple files in a folder** (in the [project properties](/gdevelop5/interface/project-manager/properties)). This will save the scenes, external layouts, external events and extensions in **different files**.

Organize then your project to ensure that as many things as possible can be saved in these different files:

* Make sure to separate your scene events into external events for a good organization.
* Try if possible to make your events into custom extension actions/conditions or custom behaviors.
* Use external layouts for the levels (load them with a scene that serves as the main game scene).

!!! note

    The advantage is that you can now separate the tasks and have some people work on the levels (external layouts), other on some logic in extensions or external events.

## Split your game functionalities

[External Events](/gdevelop/documentation/manual/link_events), [External Layouts](/gdevelop/documentation/manual/external_layouts) and [Functions/Behaviors](/gdevelop5/extensions/create) allow better organization and flexibility in your project. With **multiple files** enabled, they will be saved to separate files, making developers able to work on different parts of the game at the same time, with less chance of conflict.

## Handling shared project files

You then have multiple solutions to work with these multiple files:

* Ideally, if you know a bit about version control like [git](https://git-scm.com/), [mercurial](https://www.mercurial-scm.org/) or [subversion (a.k.a "svn")](https://subversion.apache.org/), it's strongly recommended to use it. A version control system allows you to inspect changes you made on the files (and even only select some to share), then "push" these changes in a common repository.
* Otherwise, you can have a Dropbox/OneDrive/Cloud storage service where you have a "master project" folder. You create a copy of this folder when starting to work. Then you can periodically copy files back to this master project when you're done with some work on a level.
   * If using Dropbox, OneDrive, or something like Google Drive, ensure that they are not actively monitoring the project folder. The way these systems sync files constantly can cause file corruption in the project json file, and prevent bundled tools like Piskel from working correctly.


!!! warning

    Be sure not to erase someone else work when copying files! A version control system allows avoiding such mistakes by keeping a history of all files. Whatever your solution is, be sure to do **regular backups** of your games.

## Project-specific editor settings

When working as a team, you may want to ensure all developers use the same editor settings while working on a project. You can create a `gdevelop-settings.yaml` file in your project folder (next to your `.json` project file) to define editor preferences that will be applied when anyone opens the project.

Example `gdevelop-settings.yaml`:

```yaml
preferences:
  autosaveOnPreview: true
  eventsSheetZoomLevel: 10
```

Examples of available settings are:

* `autosaveOnPreview` - Automatically save before previewing
* `showDeprecatedInstructionWarning` - Show warnings for deprecated actions/conditions
* `themeName` - Editor theme name
* `eventsSheetZoomLevel` - Zoom level for the events sheet

These settings override personal preferences only while the project is open and do not permanently change each developer's preferences. This file works with version control, so your team can share consistent editor settings alongside the game files.

!!! note

    Project-specific settings are only supported in the desktop version of GDevelop.