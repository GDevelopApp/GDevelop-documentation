---
title: Guide for reporting a bug/crash
---
# Guide for reporting a bug/crash

Reporting a bug or a crash is a great way to contribute to GDevelop and also fix some issues you might be having with GDevelop. Here is a guide for making a great bug report.

The first thing you should do is to check if you are on the latest version. There is a great chance that the bug/crash might already been fixed in the later versions.

On the top toolbar, go to Help→About GDevelop → Click **Check for new update**.

You can see the latest version [here](https://github.com/4ian/GDevelop/releases). Some releases might be a pre-release, there will be a tag telling if it is a pre-release or the latest version.

!!! warning

    If you are on a version older than beta98, you might have to reinstall GDevelop as it might not update

Also, check if the bug/crash was already reported on the [official forum](https://forum.gdevelop.io). If it was already reported, reply to the thread/report and you can help out by giving more info.

!!! warning

    Do check if the report was recent. You don't want to reply to a 5 year old post!

## Writing a great bug report

A great bug report conveys the problem clearly and easily. It should also have clear info about the bug, all the info you can give related to the bug in a structured way. It should be written in as less sentences as possible (But, don't exclude anything that might be useful) as the developers might not have a lot reading though your whole essay. If you have written a bad or non-descriptive report of the bug, it might not get fixed.

### Things that would be needed

Here are some things that you will most likely need in a report. Do remember that not all bugs/crashes are the same. So, do add more info if needed.

#### Version of GDevelop

First see if you are using the web version or the desktop version (you will have to add that info to the report).

* if you are using the desktop version:
    * On the top toolbar, go to Help→About GDevelop

A window will open showing the version. It should go something like GDevelop-beta110.

#### Some screenshots of the bug

This might not be applicable to all the bugs or crashes, but it would help a lot in identifying the problem and fixing it.

* If you are using a _Windows_ OS, you can use the snipping tool that comes with it or press **Alt+PrtScn** (It will take a
screenshot of the active window).

* If you are using a _MacOS_, press **Shift+Command+3**

* If you are using a _Linux_ distro, it should come with a screenshot tool built-in or press **Alt+PrtScn** (It will take a
screenshot of the active window)

* If needed, edit the image and add some markers to show the bug

#### Instructions to reproduce the bug

If possible, add proper instructions to reproduce the bug. So that the developers can easily know what the problem that
might be causing the bug.

For example:

```md
* Go to Scene events
* Right click on an event
* Click edit
* The window should now be going crazy
```

#### What you were doing when the issue occurred

If it was a crash, you will have to describe what you were doing when it happened.

#### Errors or call stack

Some errors logs can hint the problem. So, do check (If possible) if there was any error in the developer tool kit.

- Press **Ctrl+Shift+I**, a tab should open

- Open the **Console** tab and check if there was any error shown

* Also, check the **sources** for call stacks

!!! note

    You might not be able to get any errors or even open the developer toolkit if GDevelop has crashed or is frozen

### Template for writing a report

Here is a template you can use when writing a report.

```md
## Describe the bug
A clear and concise description of what the bug is.

Any error or console logs

## To Reproduce
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

* Please include a link to a game if possible!
* If applicable, add screenshots to help explain your problem.

## Other details
* Include any OS/browser version/smartphone that you're using
* Which version of GDevelop are you using? The desktop app or the web-app?
* Add any other context about the problem here.
```

**Here is an example of a report that might not be helpful**

![](/gdevelop5/community/exampleofbadreport.png)

**Here is an example of a decent report**

>
> ![](/gdevelop5/community/exampleofgoodreport.png)

## Where to report a bug?

A bug can be reported on the [official forum](https://forum.gdevelop.io) or on [GDevelop's Github repo as an issue](https://github.com/4ian/GDevelop/issues).

!!! tip

    Reporting a bug in the [official forum](https://forum.gdevelop.io) is recommended over github

### Reporting a bug on the Forum

The first and foremost option you should chose to report a bug is on the [official forum](https://forum.gdevelop.io).

- Go to the forum, click on **+ New Topic**

- A panel should open,  select **Bug reports** from the categories and now you can start describing your issue.

- When you are done, don't forget to click on **+ Create Topic**

![](/gdevelop5/community/rg5.png)

### Reporting a bug on the Github

You can also report it on [GDevelop's Github repo as an issue](https://github.com/4ian/GDevelop/issues), but the forum is more preferred. Only do so if you are sure you have all the info needed.

![](/gdevelop5/community/rb1.png)

- Click on **New Issue**.

- You will be asked if the issue is a bug report or a feature request. Click on Bug Report.

![](/gdevelop5/community/rb2.png)

Now you will be given a space where you can describe your bug. There will be some text already written . Some asking you to write something, replace them with what the sentence asked.

Ex: if there is a sentence "A clear and concise description of what the bug is.", remove that sentence and add a description about the bug.

![](/gdevelop5/community/rg6.png)
