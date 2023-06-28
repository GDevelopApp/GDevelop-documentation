---
title: Audio
---
# Audio

Playing music or sounds is an essential part of any game. GDevelop provides you with several conditions and actions to play audio files.

!!! note

    All durations for audio (musics, sounds), and timers too, in GDevelop are in seconds.

## Playing a sound or a music file

!!! note

    Before a sound/music can be played, you have to first ensure that the player interacted with your game (a simple click/touch on the screen is ok to unlock audio). This is a limitation of browsers and cannot be worked around. In your final game, it's recommended to have on your first scene a "Press any key or touch the screen to continue" message.

The easiest way to play an audio file is to use the action "**Play a sound**" or "**Play a music file**". Choose the file to be played for the first parameter of both actions.

The supported audio file formats for GDevelop are Waveform Audio Format (wav), MPEG Layer 3 (mp3), Ogg Vorbis (ogg), and Advance Audio Coding (AAC)

!!! note

    .AAC files are much more broadly supported by different browsers and OSes, iOS included, so it is recommended to use this format if you can.

These formats can all be used for music or sound effects, although it is strongly recommended to use either AAC, mp3 or ogg for music.

If you distribute your game on the web, some browsers also support other file formats. See [more information on Wikipedia](https://en.wikipedia.org/wiki/HTML5_audio#Supported_audio_coding_formats).

!!! note

    You can use the in-built sound effect creator tool called Jfxr for making sound effects: [learn how to use Jfxr here](/gdevelop5/all-features/audio/using-jfxr).

When you choose an audio file, it is added to the game resources. You can open the [Resources Editor](/gdevelop5/interface/project-manager) to choose if the audio should be preloaded during game startup.

## Choosing between Sound or Music Events

GDevelop has two different methods of playing audio files. These are listed in the engine as **Play a Sound** or **Play a Music file** events, along with related events to these two different methods.

In the majority of use cases, audio can be played using the **Play a Sound** actions. It's adapted to short sound effects or longer musics, which will be fully loaded in memory before being played. Because of this, large audio files can take a bit of time to start playing

The **Play a Music** actions are useful to play background musics. They work better with large audio files as they *stream* the audio in memory - resulting in less memory usage.

## Keep music and sounds playing between scenes

When a new scene starts, by default, sounds and music are stopped. If you want to keep them playing, open the properties of the scene (right-click on the scene, in the scene editor) and uncheck the checkbox:

![20230303-230225.png](/gdevelop5/all-features/audio/pasted/20230303-230225.png)

## Using channels

When using the "Play a sound" or "Play a music file" action, audio files are played immediately. On completion, they are removed from memory. Looping is an exception. When you set the action to loop the audio file, it will be played forever (its' an "endless loop"). You must use the action to stop all sounds or music to stop them.

If you want more control over sounds, use the action "**Play a sound on a channel**" or "**Play a music file on a channel.**" The action is used in the same way, except that you have to enter a channel number. This channel number can then be reused in other actions or conditions. A "channel number" can be used to check to see if a sound is being played on a channel, or it can be used to modify some properties of the music being played. For example, you could use a "channel number" to update the music volume dynamically according to the presence of enemies around the player.

## Volume

Sounds and music are by default played with a volume of 100%, which is the maximum. When starting a new sound/music, you can enter a different value (between 0 and 100).

You can also use the action "Game global volume" to change the entire game's audio volume. A value of 0 means that no sounds and or music can be heard. This action is convenient when allowing the player to mute or change the game's volume. For instance, you might have a settings screen in your game that accesses the game's volume control. Mobile games usually have a button to mute the sounds of the game too.

## Performance considerations

The first time music or sound is played, there can be a lag while the audio file is being prepared if you do not preload the audio. If it's essential to avoid any lag, you can preload the audio files in the resources panel. Within the resource list, click on the sound file in question and choose the appropriate **Preload as Sound** or **Preload as Music** option depending on which events you are using.

Another option is to play the audio or music file at the beginning of the scene where it's used. Set the initial volume 0; this will force the game to load the sound or music. The audio will be cached in memory. It will quickly load when called using your action.

## More about the state of a sound/music

When you use the action to **play a sound or music on a channel**, it's put in the state **"playing,"** even if still **loading** in memory.

The condition "A sound is being played" (on this channel) is then true, while "A sound is stopped" (on this channel) will be false, as well as "A sound is paused" (on this channel again). When the sound is fully loaded, it will start to be really played on your device (so you will hear the audio).

The sound will be stopped when:

  * It reaches its **end** and is not configured to loop. *There is **an error during the loading** (in which case it will be considered as playing for a few milliseconds, then will be deemed to be stopped as it was unable to load).* Or you used **the action** to stop a sound or music on the channel.

## Reference

All actions, conditions and expressions are listed in [the audio reference page](/gdevelop5/all-features/audio/reference/).