---
title: Leaderboard Administration
---
# Leaderboard Administration

!!! note

        Once you created a leaderboard, you can configure it. See more below on how to achieve that.
    To learn about how to send a score to a leaderboard and then display it, see [leaderboards](/gdevelop5/all-features/leaderboards).

To manage leaderboards, start by opening the GDevelop application and clicking on "File" -> "Games Dashboard".  Find the game you want to manage and click "Manage game".  Next, click on the tab named "Leaderboards".

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220429-164150.png)

## Set up a leaderboard

The left panel is dedicated to the configuration of your leaderboard.

### Set the name

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220412-120735.png)

Choose a name for your leaderboard that is clear and direct such as "Level 1 - Best score". It will be displayed in the event sheet as well as on your game's page if you choose to make it public on gd.games.

## Change the sorting order

There are a few settings that you can change to manage your leaderboard's sort order. You can find them under this item:

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220519-110604.png)

### Choose the sort order of your leaderboard

A leaderboard can be sorted in ascending order (lower is better - for speed runs for example) or in descending order (higher is better - for collecting coins for instance).
![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220519-110104.png)

### Limit the value of submitted score

If you have a rough idea of the extreme achievable score (minimum score for lower is better configuration and maximum score for higher is better configuration), it is advised to set a score limit that will prevent any score submission that go past this limit from being saved in your leaderboard, thus avoiding obvious cheaters with impossible values.

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220519-110035.png)

### Hide or publish your leaderboard

A leaderboard can either be public or hidden.

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220412-121057.png)

You can hide a leaderboard so that it does not appear on your game's page. Nevertheless, it will still be available when displaying it in-game. This can be useful to have some testing leaderboards that you can save scores to when running your game in a preview.

### Change display of leaderboard entries

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220412-121117.png)

There are 2 ways of displaying your leaderboard. The first option is to display every entry submitted to your leaderboard, whereas the second one only displays the best entry for each player (identified by their player name).

You can choose to have your leaderboard displayed according to either one of these options, or you can let the viewer select which one of these options they want to see.

### Reset your leaderboard

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220412-121016.png)

It can be useful to reset a leaderboard, meaning that all current entries will be deleted and the start date and time of the leaderboard will be set to now. This can prove useful when publishing a new version of your game with increased difficulty makes former scores irrelevant.

### Working with variables

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220412-120924.png)

Each leaderboard has a unique id that looks like `55846d3f-ccb8-4ab3-9322-1a57b74a15ff`. You can copy it from this interface to store it into scene variables for example.

## Manage the entries of a leaderboard

You can see the current entries on the right part of the admin.

### Remove a particular entry

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220412-121351.png)

You can remove a particular entry if you think a player cheated or if you submitted an entry by error when previewing it for example.

### Only display player's best entries

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220412-121331.png)

You can choose to only display the player's best entries. This option is only used when listing the entries on this interface, it won't change the leaderboard configuration. It is useful if you want to see what would be the leaderboard if you changed this configuration.

## Change the appearance of a leaderboard

There are a few settings that you can change to customize a leaderboard. You can find them under this item:

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220429-164214.png)

### Choose the number of displayed entries

You can choose to display between one (the top score) and 25 entries in the leaderboard.

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220429-163717.png)

### Customize how a score is displayed

You can choose the title of the score column to set what is most appropriate for your game.

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220429-164409.png)

And you can configure how scores will be displayed. You will learn about this in the next sections but notice the Preview section that allows you to see what is the effect of the different settings:

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220429-170116.png)

!!! tip

    We recommend that you send scores to the leaderboard without modifying them first. For example, a score of `156.4557784121` should be sent as it is. It's the job of the leaderboard to display them in a way that is legible and appropriate to your game.

Here is more details on the 2 options you have to format the score:

#### 1.Custom display

* Configure a custom display so that scores have a prefix and a suffix
* Choose the number of decimal places you want to be displayed
* Here are a few examples for you to see what you can achieve with these settings:
    * `$150`
    * `96 coins`
    * `250.60`

#### 2.Display as time

!!! warning

    To use this option, you must make sure that you send time scores expressed as seconds.

Choose the format you want to use:

![](/gdevelop5/interface/games-dashboard/leaderboard-administration/pasted/20220429-165539.png)

* `HH` corresponds to hours
* `MM` corresponds to minutes
* `SS` corresponds to seconds
* `ms` corresponds to milliseconds

!!! note

    If you choose the format `MM:SS`, a time of 1 hour and a half will be displayed `90:00`. If you want it to be displayed `01:30:00`, please choose the format `HH:MM:SS`

## Send scores to your leaderboard

!!! tip

    This page is all about configuring a leaderboard. To learn about how to to send score to your leaderboard, please read [leaderboards](/gdevelop5/all-features/leaderboards).