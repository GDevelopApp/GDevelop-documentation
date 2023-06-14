---
title: How to backup and maintain your project using GitHub and GitHub Desktop
---
# How to backup and maintain your project using GitHub and GitHub Desktop

During game development, there are usually hundreds of changes from the beginning to the end of the project. There may be times when the developer needs to move back to an earlier version of the game or project. Without continual backups, this means manually undoing all of the work done days before, which can create other accidental errors.  GitHub provides a way to host the game project files, as well as complete Version Control for the game as development continues.

### Requirements

To complete this process, the following requirements must be met:

  * Have a 64 Bit Operating System (required for GitHub Desktop)
  * [Have an active GitHub account](https://www.wikihow.com/Create-an-Account-on-GitHub)
  * [Have GitHub Desktop installed](https://docs.github.com/en/desktop/getting-started-with-github-desktop/installing-github-desktop)

### Step 1 - Set Up a GitHub Repository

The following should be completed before creating the game project in GDevelop. If the game project has already been created, there are some additional steps to complete at the bottom of Step 2.

1. Launch **GitHub Desktop**.
1. Click the **File** menu.
1. Click **New Repository...**.
1. Within the **Name** field, type the desired name of the repository, without spaces.
    - e.g. If the game is named **My Game**, the repository should be named **My-Game**. If you don't remove the spaces, GitHub will do this for you, so make sure to pay attention to the repository name.
1. Within the **Description** field, type a short description of your game.
1. Within the **Local** path field, type or browse to the _parent directory_ of where you want your repository stored.
    - e.g. If the final repository location should be **D:\My Documents\My-Game** \\ browse to **D:\My Documents\\** _only_
1. Leave all other settings as default.
1. Click **Create repository**. The local copy of the repository will be created and the screen will refresh.
1. Click the blue **Publish repository** button towards the upper right.
1. Ensure the **Name** and **Description** fields have the appropriate information.
1. If the repository _should not be_ available to the public, make sure the **Keep this code private** box is checked.  Your repository will be published to the Github site.

### Step 2 - Create your Initial Commit

#### For new Game Projects

1. Within the GDevelop start page, click **CREATE A BLANK PROJECT**.
1. Within the new window, populate the **PROJECT NAME** field with the desired project name.
1. Click **CHOOSE FOLDER**. The **Choose a folder for the new game window** will appear.
1. Browse to the repository directory.
1. Click **Select Folder**. The game project path will update.
1. Click the desired example or **Empty game**. The game project will be created.
1. Make any initial changes.
    - It is strongly recommended to use Multiple File mode within the **Game Settings** > **Properties** window. This ensures that each scene and external event can be tracked separately.
1. Click the **File** menu.
1. Click **Save**.
1. Within Github Desktop, the list of files on the left should update to show all of the project files.
1. Within the **Summary** field on the lower left, type **initial commit**.
1. Click **commit to master**. The files will disappear and the screen will update.
1. Click the blue **Push origin** button near the upper right. The initial commit of the game project is now completed.

#### For existing Game Projects

1. Within GDevelop, ensure the game project is currently open.
    - It is strongly recommended to use Multiple File mode within the **Game Settings** > **Properties** window. This ensures that each scene and external event can be tracked separately.
1. Click the **File** menu.
1. Click **Save As...**. The **Save As** window will display.
1. Browse to the repository directory.
1. Click **Save**. The project files will be saved to this folder, and the original project location should no longer be used.
1. Within Github Desktop, the list of files on the left should update to show all of the project files.
1. Within the **Summary** field on the lower left, type **initial commit**.
1. Click **commit to master**. The files will disappear and the screen will update.
1. Click the blue **Push origin** button near the upper right. The initial commit of the game project is now completed.

### Step 3 - Create the first branch

1. Within GitHub Desktop, click the **Current branch** drop down. ![](/gdevelop5/tutorials/using-github-desktop/pasted/20200710-024151.png)
1. Click **New Branch**. The **Create a branch** window will display.
1. Type the name for the branch. Commonly this will be the name of a feature or function currently being worked on.
    - e.g. If working on level graphics, consider naming each separate branch for the level _currently_ being worked on such as Level-1. Remember, spaces in GitHub names aren't allowed. If a space is used, GitHub will automatically replace it with a hyphen.
1. Click **Create branch**. The screen will update.
1. Click the blue **Publish branch** button. The branch will be created on Github.
1. Ensure that the **Current branch** dropdown now shows the newly created branch.
1. Begin making changes to the game in GDevelop.
1. After saving in GDevelop, consider making an **initial commit** to this branch similar to Step 2 above.
1. Going forward, after making large changes related to this branch, make sure to commit the changes to the branch within Github Desktop.

### Step 4 - Additional processes

  1. Once the focus of the branch is completed, a pull request must be created to merge all of the changes. [Follow the process here to create the pull request.](https://docs.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request#creating-a-new-pull-request)
  1. After the pull request is created, it must be merged to the master branch. [Follow this process to merge the pull request on the GitHub website.](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request)
  1. Going forward, new branches should be created as the game project moves on to each new feature or bugfix. Because Github allows for restoring the game code only to different commits, commits to branches should be completed frequently. Here are some examples of how frequently commits are completed in just one day, along with descriptions to easily identify what is changed: ![](/gdevelop5/tutorials/using-github-desktop/pasted/20200710-030250.png)
  1. If changes are ever completed in error, GitHub and GitHub desktop allows to restore from the change history.[Complete this process if a restore is needed.](https://docs.github.com/en/desktop/contributing-to-projects/reverting-a-commit)
