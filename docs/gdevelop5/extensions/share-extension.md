---
title: Share your extension
---
# Share your extension

GDevelop [extensions](/gdevelop5/extensions/search) are created and shared by the community.

If you have created a reusable behavior that can be useful in more than one game, or a set of actions/conditions/expressions, consider sharing them with the community! Doing so is very easy.

## Export your extension

Open your extension from the [Project Manager](/gdevelop5/interface/project-manager). At the top of the list of functions, you can see a button "Edit Extension Options". Click on it to open the configuration of the extension:

![](/gdevelop5/extensions/share/pasted/20201220-192612.png)

#### Complete the extension information

Fill all the fields, in particular, the name and the descriptions of your extension:

* The *name* will be displayed in the search (and will be useful for people to search for your extension),
* The *short description* will also be displayed in the search results, along with the *icon*,
* The *description* will be displayed when [installing the extension](/gdevelop5/extensions/search). It should contain a quick explanation about how to use the extension.
* The *version* is a version number, in the format `X.Y.Z`. For example: `1.0.0`. Start with 1.0.0 if you're confident that your extension is ready, or `0.0.1` if it's still subject to changes.
* *Tags* is a list of comma-separated "tags", that help to search the extension. Read the existing tags when [you search for extensions](/gdevelop5/extensions/search) to get some inspiration. Reuse existing tags as possible.
* *Author* is your username. An account will have to be registered and a proper username will be needed to be able to add the username. Type the username and pick the username from the drop-down menu
* *Dimension* indicates whether the extension works in **2D**, **3D**, **2D/3D**, or is not applicable to a specific dimension. Set this to help users quickly identify compatibility.

#### Ensure your extension follow the best practices

Read the [best practices for extensions](/gdevelop5/extensions/best-practices) here.

#### Export the extension to a .json file

Once you're done, click on "Export Extension" at the bottom, then on "Export to a File".
Choose a file and enter the same name as your extension, finishing by `.json`. For example: `Flash.json`.

## Submit your extension to the community

!!! note

    All extensions submitted on Github must follow the [best practices](/gdevelop5/extensions/best-practices), otherwise you will be asked to follow them before getting a review.

To submit an extension to GDevelop you will need need a [GitHub profile](https://github.com/join) to continue.

Once you are logged into your Github account, open [a new issue on this GitHub repository](https://github.com/4ian/GDevelop-extensions/issues/new/choose).  Github will not let you upload a .json file, so you will need to use a tool to package your extension into ZIP format.   You can read other ways to submit extensions directly on [the repository README](https://github.com/4ian/GDevelop-extensions).

Complete **all the information** in the issue checklist, then attach your `.json` file and submit the issue. See an [example here](https://github.com/4ian/GDevelop-extensions/issues/1).

To help the reviewer understand your extension, it is beneficial to include a video, screenshot, or example game that demonstrates what your extension does.

Your extension will get reviewed to ensure high quality and a good experience for GDevelop users.  It is common for the reviewer to request changes, so don't feel discouraged if this happens to you!  Once your extension passes the final review, it will be added to GDevelop.  The extension will become available immediately and will not have to wait for a new version of GDevelop to be released.