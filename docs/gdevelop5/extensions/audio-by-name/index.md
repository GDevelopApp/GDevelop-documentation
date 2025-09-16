# Sounds and music by filename

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Music/Music_speaker_audio_sound.svg" class="extension-icon"></img>
Play audio with an expression as filename.

**Authors and contributors** to this experimental extension: [krunkster](https://gd.games/krunkster), [Silver-Streak](https://gd.games/Silver-Streak).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Allows for playing a sound resource by filename as a string. This also allows for dynamically selecting a filename via string expressions, which can be useful for things like reducing the number of events required for playing voiced dialogue in larger games or dynamic music based on the current room.

Please note, you may need to preload your audio files via events or resources panel because of how resources are now loaded gradually. 

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Play music on a channel by name**  
Play a music file on a specific channel by name or string expression.   
This can be useful to reduce the number of events needed to dynamically play different music files.  e.g. Playing music based off a room ID variable for the current room the player is in.

Note: Music files should be preloaded before using these actions, such at the start of the first scene, current scene, or in the resources panel for the entire game. This is to avoid any potential audio pause since the normal resource loading at the start of the game or scene won't load these files by default. For web games, music files must be preloaded to start at all.

**Play sound on a channel by name**  
Play a sound file on a specific channel by name or string expression.   
This can be useful to reduce the number of events needed to dynamically play different sound files. e.g. Playing a voice over line based off the current dialogue node name.

Note: Sound files should be preloaded before using these actions, such at the start of the first scene, current scene, or in the resources panel for the entire game. This is to avoid any potential audio pause since the normal resource loading at the start of the game or scene won't load these files by default.

**Preload a music file by name**  
Preload a music file by name or string expression.

**Preload a sound file by name**  
Preload a sound file by name or string expression. 




---

*This page is an auto-generated reference page about the **Sounds and music by filename** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).