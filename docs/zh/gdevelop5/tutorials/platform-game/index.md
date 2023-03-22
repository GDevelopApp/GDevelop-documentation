---
title: 如何制作一个平台游戏
---
# 如何制作一个平台游戏

这个教程将帮助您开始使用 **GDevelop**:
您将要创建一个非常简单的平台类型的游戏，玩家可以在平台上跳跃及收集钱币。

请注意，您可以阅读 [入门](/gdevelop5/getting_started)  页面以获得软件的概述：它解释了主要概念并描述了**GDevelop**的界面。

## 下载 GDevelop

如果您还没有安装 **GDevelop 5**, 从以下网址下载 [official website](https://gdevelop-app.com). 它适用于Windows、macOS和Linux。

请始终从该页面下载GDevelop，以确保具有最新版本。安装（或提取）GDevelop并启动它。


![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_22.57.02.png)

## 创建一个新游戏

在开始页面点击 `Create a new project`. 在窗口中, 为你的项目选择一个文件夹并且选择`Empty project` 开始一个新的游戏。

![](/gdevelop5/tutorials/platform-game/screenshot_20190604200258.png)

为了制作我们的游戏, 我们需要我们可以使用的资源 (玩家角色, 几个平台, 可以收集的物体...). 您可以从此处下载资源: http://www.compilgames.net/dl/PlatformerTutorialResources.zip.

下载完这个文件之后,在您项目所在的文件夹解压出其中的内容.

## 添加一个场景

场景是你游戏的部件之一. 通常情况下，你游戏中的每个不同的屏幕都是一个场景： 主菜单, 暂停菜单以及关卡都是场景.

场景包含显示在屏幕上的对象. 这些对象可以被放置在场景中来创建关卡 (这些对象被叫做"实例"). 场景中也包含事件用于在场景中运行动画.

在左侧已经打开的项目管理器中，在“场景（Scenes）”下点击 `+` 按钮:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.26.09.png)

一个叫做 "New scene"的新场景被创建了, 并且添加到了列表中. 点击并打开它.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.30.40.png)

## 创建一个玩家对象

玩家将会控制一个角色，它可以在平台上跳跃并移动. 我们将要创建这个对象.

在右侧, 有一个叫做"对象"的面板. 点击 `+` 按钮创建一个对象.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.32.40.png)

将弹出一个窗口，显示您可以从中选择的不同类型的对象。

![](/gdevelop5/tutorials/platform-game/gd5_object_types1.png)

不同种类的对象提供特定的功能。对于大多数对象，我们将使用Sprite对象，这些对象是动画对象，可以用于许多元素（播放器、平台、敌人、项目…）。

在列表中点击 `Sprite`. 新对象将添加到场景中，并打开了对象编辑器：

![](/gdevelop5/tutorials/platform-game/screenshot_20190604200645.png)

对象暂时为空。精灵对象由动画组成，每个动画可以包含一个或多个图像。让我们添加一个动画！单击“+”按钮。

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.35.50.png)

动画已添加，但仍为空，没有图像。若要添加图像，请单击空白缩略图中的“+”。

在项目文件夹中选择名为“p1_stand”的图像。图像将添加到对象：

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.44.56.png)

现在可以通过单击右下角的“应用（Apply）”按钮关闭编辑器。

## 将对象放置在场景中

为了在关卡中显示玩家, 我们将其放置在场景中。我们添加到场景中的每个对象都被叫做对象的“实例”.

我们的玩家实例是唯一的，因为我们在此关卡中只能有一个。但是其他对象(例如平台、钱币、敌人。。。) 可以在场景中有多个实例同时存活。

要添加对象到场景, 简单地从列表中拖拽对象到场景中即可.

![](/gdevelop5/tutorials/platform-game/add-player.gif)

## 给对象起一个合适的名字

为了非常容易地在游戏中引用对象, 给他起一个名字而不使用默认名字. 在其上鼠标右键(或者点击 `⋯` 图标) 选择“重命名”.然后你可以输入 "Player" 并在屏幕的任意位置点击一下或者按下回车键给这个对象改名.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.53.10.png)

## 添加平台

当前关卡还没有任何平台，还是空的，我们添加一些。

在对象列表中点击`+` 按钮添加一个新对象。 此时当被询问对象类型, 选择`Tiled Sprite（瓦块精灵）` :

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.54.52.png)

对象编辑器被打开了. 它与精灵对象编辑器稍有不同, 因为瓦块精灵是没有动画的.

点击 `Select an image（选择一个图片）` 然后 `Choose a new image（选择一个新图片）`. 此时, 选择名字叫 `grassHalfMid`的图片.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.57.28.png)

点击右下角的"Apply（应用）" 按钮关闭编辑器. 在对象列表中选择刚才创建的对象，并将其拖拽到场景中:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.59.05.png)

对象被加入到了场景之中，但是它非常小.  单击它并使用手柄调整大小，使其看起来像一个平台：:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.00.01.png)

另外，不要忘记将对象重命名为“GrassPlatform”，而不是默认名称。

### 保存的时候到了

让我们不要丢去我们到目前为止所做的：在应用程序“文件”菜单中，单击“保存”（或按Ctrl+s/Cmd+s）保存您的更改。

## 向对象添加行为

### 玩家

玩家的移动可以通过GDevelop事件来创建，但是要重建一个好的platformer引擎将是一个相当长且困难的任务。幸运的是，GDevelop已经内置了一个完整的platformer引擎，我们可以使用它。为此，我们需要使用“platformer行为”，它允许我们访问和使用内置的platformer引擎。

打开“（Player）玩家”对象编辑器：

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.02.34.png)

切换到“行为”选项卡并单击“+”按钮向对象添加行为。在可用行为列表中选择“Platformer character”。

然后，您可以在编辑器中看到该行为，并使用许多可以调整的参数：

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.04.41.png)

你可以改变一些属性，比如跳跃速度。例如，将其设置为800，以便跳跃更有力。

### 平台

我们还需要将对象设置为平台，以便玩家可以在平台上行走和跳跃。否则，玩家会从物体上掉下来，因为我们没有告诉我们的角色当他们着陆时该怎么做。通过将对象设置为平台，platformer角色将与之碰撞并能够在其上行走。



要将GrassPlatform对象设置为平台，请打开GrassPlatform对象编辑器。切换到“行为”选项卡，然后添加行为：这次，选择“平台”行为。

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.09.42.png)

您还可以更改一些选项。例如，选项“Can grab platform ledges”允许platformer角色抓取平台的边缘。如果我们现在启用这个选项，结果看起来会很奇怪，因为当角色抓取边缘时，我们没有要显示的动画。让我们不受限制。

## 开始预览

此时，您应该可以通过按工具栏屏幕顶部的“预览”按钮来测试您的游戏。

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.13.25.png)

当您按下按钮时，将生成一个预览，然后，将打开一个新窗口。

您应该可以使用默认键来走动和跳跃：使用箭头键移动字符，然后按“Shift”或“Space”来跳跃！请随意添加一些其他平台到场景中，就像我们以前做的那样。确保将行为添加到平台中，以避免角色失败。

目前，该对象没有动画，我们稍后将添加一些动画。

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.14.18.png)

如果对象没有移动，请检查前面的步骤确保添加了正确的行为。

## 更改背景颜色

灰色的背景有点乏味。稍后我们可以添加一个图像，但现在，让我们保持简单。在编辑器中，右键单击灰色背景并选择“场景属性”：

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.16.03.png)

在打开的新窗口中，单击“Scene background color”，然后为背景选择一种漂亮的颜色：

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-25_at_00.18.08.png)

## 下一步: 让玩家动起来

我们的游戏目前非常基础，玩家在跳跃或奔跑时没有动画。本教程的下一部分将介绍如何添加不同的动画，以及如何使用事件在玩家状态更改时更改动画。

➡️ 阅读 **[教程的下一部分在这里](/gdevelop5/tutorials/platform-game/2-player-animations)**!