---
title: themes
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**  
*(remove this paragraph once the translation is finished)*

# Creating Themes in GDevelop

Creating new and interesting themes in GDevelop requires some knowledge of CSS. Knowledge of Javascript and React coding is a definite advantage, but not necessarily a requirement. Creating a theme is a way to give back to the GDevelop community. It is also a way to learn more about the inner workings or GDevelop. Mostly though, it is fun, and allows you to exercise a different sort of creativity!

### Some 'gotchas' when developing a new theme.

    If you are familiar with CSS, it is relatively simple to switch out theme colors. However, you will need to dig a lot deeper into the program's inner workings to change the colors of the icons and some of the text/string features. \<note tip\>When developing your theme, you will also need to keep in mind that the Events/Table Editor group comments background color of yellow cannot, as of this writing, be changed. That means that your color theme should be created to work well with a bold yellow background color (#E8DC59) in the Events/Table comments. The blues of the included icons should also be considered when designing your new theme. It is more difficult to change their colors but it can be accomplished with some additional coding. You can add a CSS filter to the toolbar icons in order to change their color to match your theme. Other icons changes will still have to be coded.

![](/gdevelop5/all-features/yelloweventscomment.png)

### Where to Start

Modifying a theme means that you will be working with the source code of GDevelop. You will need to have a way to view and modify the source code. This can be done using a simple text editor, but a much easier and efficient way is to use an integrated development environment (IDE). An IDE is an application that provides a myriad of tools that help computer programmers in software development. The creator of GDevelop, Florian Rival, recommends Visual Studio Code. It is a free IDE that can be used on Linux, MacOS, and Windows. For the purpose of this document, I will use Visual Studio Code as the editor. There are many IDEs. Each one has its own strengths and weaknesses. Use the one that you understand and enjoy.

I am not going to go into all of the details about setting up the development environment. It is well defined on GDevelop git-hub. You will need to be somewhat familiar with installing and using npm, yarn, brew, or similar tools from the command line/terminal. If you have never done this, there are many tutorials on the internet. It is a good learning experience on its own.

## The Files

After you have loaded GDevelop into your IDE, you will see numerous files. To find the current Themes included, go to "newIDE/src/UI/Theme/". There you will find the themes, that are included with GDevelop. At the time of this writing, you will see two themes:

- DefaultTheme
- DarkTheme

![](/gdevelop5/all-features/gdthemefileslocation.png)

Next, decide whether your new theme will be light or dark. If it is light, copy the entire DefaultTheme and paste it into the Theme folder. Likewise, if you want to work with darker colors, copy the DarkTheme and paste it into the Theme folder. Depending on your IDE, you may need to use your file manager to duplicate the file outside of your IDE and then reload it.

Rename the newly copied theme folder to your own theme's description. A short description is best. ie Sunrise, Sunset, etc.

![](/gdevelop5/all-features/sunrisethemefolder.png)

## Working with the new theme

Now that you have your newly copied theme, you will see four files included in the theme's folder: ![](/gdevelop5/all-features/sunrisethemefiles.png)

You can change the theme colors in each of these files.

Notice also, that there is an index.js file that resides in the Theme folder but outside of the themes. You will also be using this file.

![](/gdevelop5/all-features/index.js.png)

### index.js is the place to start your theme.

In order for the new theme to be recognized and displayed in GDevelop Preferences, you need to place some coding information into index.js. For this explanation, I will continue to use the name "Sunrise" for the new theme's name. Substitute your theme's name for "Sunrise".

The code below demonstrates what the main index.js file should look like after adding the Sunrise theme:

` //imports and exports the new Sunrise theme 
 import Sunrise from './Sunrise';
 import DarkTheme from './DarkTheme';
 import DefaultTheme from './DefaultTheme';

export const themes = {
  'GDevelop default': DefaultTheme,
  Sunrise: Sunrise,
  Dark: DarkTheme,
};

export const getTheme = themeName =>
  themes[themeName] || themes['GDevelop default']; 
  ` Now, when you run GDevelop, you will see your new theme referenced in "Preferences": ![](/gdevelop5/all-features/preferencessunrise.png) For additional information check out the link that is included in GDevelop: ![](/gdevelop5/all-features/gdpreferencesthemehelp.png)

Read **[Part 2 of Creating Themes here](gdevelop5/all-features//2-themes.txt)**!
