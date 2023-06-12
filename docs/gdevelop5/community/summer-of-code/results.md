---
title: Google Summer of Code 2020 results
---
# Google Summer of Code 2020 results

## Dynamic Lighting and shadows

##### Student: Harsimran Virk

The original proposal to this project focused on implementing pixi libraries (pixi-layers, pixi-lights and pixi-shadows),
but we decided to implement our own ray casting algorithm using the existing data structures in the codebase (b-trees).
It was decided like this because the libraries weren’t well maintained and they would’ve had a lot of performance issues
as well.

### Light Runtime Object

We've defined a new gdjs.RuntimeObject for lighting, it uses [PIXI.Mesh](https://pixijs.download/dev/docs/PIXI.Mesh_.html) for
rendering. The idea is really simple, keep track of all the objects in the area of light, ray cast against them to define a geometry
 for the mesh, and render them using a shader that has some fading property.

1. [PR: GDevelop#1783](https://github.com/4ian/GDevelop/pull/1783): This is the first draft PR where we started
experimenting with ray casting and rendering. We needed Pixi v5 for rendering and the master branch was still at v4.8.6.

2. [PR: GDevelop#1825](https://github.com/4ian/GDevelop/pull/1825): This is the second draft PR. Pixi v5 was
merged in the code base, (still not in the master branch), we had a working algorithm. We had to add new features to the
existing layer system so that it could support lighting. Added a bit of new UI as well.

3. [PR: GDevelop#1881](https://github.com/4ian/GDevelop/pull/1881): This is the final PR which was merged
into master, opened after we had upgraded to pixi v5. Also, we added some documentation and tests. There were still
some issues, however.

4. [PR: GDevelop#1929](https://github.com/4ian/GDevelop/pull/1929): This PR addressed some issues and
we tried to fix a particular problem related to the bounding box of the light objects.

### Normal Maps

In the original proposal, we also planned to introduce normal maps for rendering "depth-based" effects using pixi-lights. As we
decided not to use the library, we have to implement our own solution here. Now, the idea is to use another gdjs.RuntimeObject
for normal-map based lights, we'll render the lights in a single pass using a render texture of all the normal maps.

1. [PR: GDevelop#1932](https://github.com/4ian/GDevelop/pull/1932): This is a draft PR for experimenting and
making a working prototype of diffused rendering which would work with normal maps (to add depth effects). It is still
work in progress and we’ll be able to add this feature post-GSoC.

### Challenges

* The most challenging part here was to write efficient JS code, both in terms of time and memory. We've tried to minimize
the use of functions like map and filter since they create a new array, and increase pressure on the GC. We've also tried to use
single instances for other objects like Float32Array.

* Debugging the code for rendering was the hardest part, since it was all visual. It's really hard to use the "text-based"
debugging techniques (such as breakpoints, console logs, etc) for code which is meant to render something on screen, and
it becomes even harder to debug off-screen elements (framebuffers, render textures, etc). Therefore, it was always challenging
to find a bug related to rendering glitches.

### Possible improvements

* One of the possible improvement is to use the [separating axis theorem](https://en.wikipedia.org/wiki/Hyperplane_separation_theorem)
to minimize the number of rays to be cast.

* We've tried to find a solution for edge cases that expands the bounding box. It works well for a lot of cases, but there are
still some cases remaining to be handled correctly.

* We need to have better tests and benchmarks that account for the edge cases as well.

## Command Palette and Revamped Shortcuts

##### Student: Nilay Majorwar

This project focuses on boosting users' efficiency and productivity by:

- **Building a fully featured command palette**, akin to code editors like Visual Studio Code and other productivity apps. This allows the user to quickly access a lot of the app's main functionalities via the keyboard.
- **Adding support for customizable keyboard shortcuts**. Earlier the app only supported some standard shortcuts for the scene and events editor - the new shortcuts would allow the user to do almost anything via a shortcut press.

### The Structure

The rough workings of the system we decided are fairly simple:

- each command has mainly a name and a callback handler. The callback handler for a command is provided dynamically by the relevant React component.
- a React context acts as the central store for all commands registered at any time. Custom hooks allow any React component to dynamically register and deregister commands easily. The command palette UI gets the list of commands from the central store and displays it.
- These commands can also have a corresponding keyboard shortcut. An event listener listens for keypresses, checks if an identified shortcut is pressed, and calls the respective command.

### Timeline

The project was divided into broadly three phases:

1. [PR: GDevelop#1821](https://github.com/4ian/GDevelop/pull/1821): **Basic command palette**

    This phase was for setting up the basic framework of commands - React context for storage, custom hooks for registration and deregistration and the UI for the command palette.

2. [PR: GDevelop#1864](https://github.com/4ian/GDevelop/pull/1864): **Adding advanced commands**

    In this phase, I worked on adding more powerful commands like "Edit object...", that allow the user to select an object to edit, right from the command palette dropdown. This was probably the most difficult part of the project, as maintaining handlers for each option was slightly tough to do right.

3. [PR: GDevelop#1938](https://github.com/4ian/GDevelop/pull/1938): **Customizable keyboard shortcuts**

    Finally, I worked on adding support for customizable keyboard shortcuts. Since the command system was completely ready, this phase was quite straightforward, with only a few hitches regarding single-key shortcuts and Electron.

There was also a [minor PR](https://github.com/4ian/GDevelop/pull/1896) for adding a command and fixing some existing ones.

### Challenges

- **Storing options of commands with options**: Storing and dynamically updating an array of options for each such command was hard, especially for React components that have slightly tricky lifecycles. This was solved by instead storing a function that generates the list of options for the command, right from the project or layout object - which meant this function would give up-to-date results whenever and wherever it's called.
- **Single-key shortcuts**: Single-key shortcuts are slightly tricky because they can clash with the user typing. To solve that, I used a bit of vanilla JS to check whether the user is currently typing, and if it is so, ignore any shortcut keypresses.
- **Commands overlapping with Electron**: Some commands like "Save Project" overlap with menu items in Electron's app menu. This means on pressing "Ctrl+S", both Electron and the in-house shortcut system would have tried to save the project. So on the Electron app, we pass on these overlapping command and allow Electron to do the job.

### Possible Improvements

- There's a **lack of tab-related commands and shortcuts**, like "Next tab". These shortcuts are really helpful and quite ubiquitous in productivity apps. Such commands and shortcuts can be added to the app.
- There is still quite a bit of keyboard productivity remaining to be added to the app - for instance, the **events editor does not support navigating with arrow keys**. Adding this would make keyboard control much more intuitive.
- The detect shortcut dialog works great but it's **not very helpful to the user in telling why a certain shortcut is not allowed**, or whether some shortcut may cause problems like clashing with the browser. This can be improved to show a help message in such cases.