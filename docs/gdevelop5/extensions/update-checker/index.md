# Update checker

<img src="https://resources.gdevelop-app.com/assets/Icons/update.svg" class="extension-icon"></img>
Checks if the version of the game on liluo is different than the current game version.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

---

With this extension, you can get a very simple update checking mechanism. It will look at the version of your game on liluo, and compare it with the one of the currently running game. If it is different, you can display a message to tell your users they are on an outdated version.
If you want your users to see that an update is available, simply change the version in your project properties, and deploy your game to liluo like you would (make an instant build and promote it to the game page's public build).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Re-check for updates**  
Loads the latest game version from liluo. This is already called at the beginnign of the scene, but you can still re-call it if it failed or if you want to add a "check again" button. Make sure to not call this too often (or at all), as otherwise it will DDoS the version-checking server!.

## Conditions

**Update is available**  
Checks if the game version on liluo is different from the one of the currently running game. It may take a few seconds for the liluo game version to be obtained, and in this time frame, the condition will not trigger. If disconnected from the internet, this will not function.

**Updates check failed**  
Checks if the fetching of the latest version from liluo succeeded.




---

*This page is an auto-generated reference page about the **Update checker** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).