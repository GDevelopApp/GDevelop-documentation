# Sounds and music Reference

GDevelop provides several conditions and actions to play audio files. They can be either long music or short sound effects. [Read more explanations about it.](/gdevelop5/all-features/audio)

## Actions

**Fade the volume of a music played on a channel.**  
Fade the volume of a music played on a channel to the specified volume within the specified duration.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2 (🔢 Number): Final volume (0-100)
    - Parameter 3 (🔢 Number): Fading time in seconds

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FadeMusicVolume`.

**Fade the volume of a sound played on a channel.**  
Fade the volume of a sound played on a channel to the specified volume within the specified duration.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2 (🔢 Number): Final volume (0-100)
    - Parameter 3 (🔢 Number): Fading time in seconds

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FadeSoundVolume`.

**Pause the music of a channel**  
Pause the music on the specified channel.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PauseMusicChannel`.

**Pause the sound of a channel**  
Pause the sound played on the specified channel.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PauseSoundChannel`.

**Play a music file**  
Play a music file.

??? quote "See parameters & details"

    - Parameter 1 (musicfile): Audio file (or audio resource name)
    - Parameter 2 (❓ Yes or No): Repeat the sound
    - Parameter 3 (🔢 Number): Volume
      From 0 to 100, 100 by default.
    - Parameter 4 (🔢 Number): Pitch (speed)
      1 by default.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlayMusic`.

**Play a music file on a channel**  
Play a music file on a specific channel,  
so you'll be able to interact with it later.

??? quote "See parameters & details"

    - Parameter 1 (musicfile): Audio file (or audio resource name)
    - Parameter 2 (🔢 Number): Channel identifier
    - Parameter 3 (❓ Yes or No): Repeat the sound
    - Parameter 4 (🔢 Number): Volume
      From 0 to 100, 100 by default.
    - Parameter 5 (🔢 Number): Pitch (speed)
      1 by default.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlayMusicOnChannel`.

**Play a sound**  
Play a sound.

??? quote "See parameters & details"

    - Parameter 1 (soundfile): Audio file (or audio resource name)
    - Parameter 2 (❓ Yes or No): Repeat the sound
    - Parameter 3 (🔢 Number): Volume
      From 0 to 100, 100 by default.
    - Parameter 4 (🔢 Number): Pitch (speed)
      1 by default.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlaySound`.

**Play a sound on a channel**  
Play a sound (small audio file) on a specific channel,  
so you'll be able to manipulate it.

??? quote "See parameters & details"

    - Parameter 1 (soundfile): Audio file (or audio resource name)
    - Parameter 2 (🔢 Number): Channel identifier
    - Parameter 3 (❓ Yes or No): Repeat the sound
    - Parameter 4 (🔢 Number): Volume
      From 0 to 100, 100 by default.
    - Parameter 5 (🔢 Number): Pitch (speed)
      1 by default.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlaySoundOnChannel`.

**Preload a music file**  
Preload a music file in memory.

??? quote "See parameters & details"

    - Parameter 1 (musicfile): Audio file (or audio resource name)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PreloadMusic`.

**Preload a sound file**  
Preload a sound file in memory.

??? quote "See parameters & details"

    - Parameter 1 (soundfile): Sound file (or sound resource name)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PreloadSound`.

**Resume playing a music on a channel**  
Resume playing a music on a channel that was paused.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ResumeMusicChannel`.

**Resume playing a sound on a channel**  
Resume playing a sound on a channel that was paused.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ResumeSoundChannel`.

**Game global volume**  
This action modifies the global volume of the game.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Volume (0-100)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetGlobalVolume`.

**Pitch of the music on a channel**  
This action modifies the pitch of the music on the specified channel.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Pitch (1 by default)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetMusicChannelPitch`.

**Playing offset of the music on a channel**  
This action modifies the playing offset of the music on the specified channel

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Position (in seconds)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetMusicChannelPlayingOffset`.

**Volume of the music on a channel**  
This action modifies the volume of the music on the specified channel.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Volume (0-100)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetMusicChannelVolume`.

**Pitch of the sound of a channel**  
This action modifies the pitch (speed) of the sound on a channel.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Pitch (1 by default)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetSoundChannelPitch`.

**Playing offset of the sound on a channel**  
This action modifies the playing offset of the sound on a channel

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Position (in seconds)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetSoundChannelPlayingOffset`.

**Volume of the sound on a channel**  
This action modifies the volume of the sound on the specified channel.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Volume (0-100)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetSoundChannelVolume`.

**Stop the music on a channel**  
Stop the music on the specified channel

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `StopMusicChannel`.

**Stop the sound of a channel**  
Stop the sound on the specified channel.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `StopSoundChannel`.

**Unload all audio**  
Unload all the audio in memory. This will cause every sound and music of the game to stop.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `UnloadAllAudio`.

**Unload a music file**  
Unload a music file from memory. Unloading a music file will cause any music playing it to stop.

??? quote "See parameters & details"

    - Parameter 1 (musicfile): Audio file (or audio resource name)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `UnloadMusic`.

**Unload a sound file**  
Unload a sound file from memory. Unloading a sound file will cause any sounds playing it to stop.

??? quote "See parameters & details"

    - Parameter 1 (soundfile): Sound file (or sound resource name)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `UnloadSound`.


## Conditions

**Global volume**  
Test the global sound level. The volume is between 0 and 100.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Volume to compare to (0-100)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `GlobalVolume`.

**Pitch of the music on a channel**  
Test the pitch (speed) of the music on a specified channel.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Pitch to compare to (1 by default)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MusicChannelPitch`.

**Playing offset of the music on a channel**  
Test the playing offset of the music on the specified channel.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Position to compare to (in seconds)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MusicChannelPlayingOffset`.

**Volume of the music on a channel**  
Test the volume of the music on a specified channel. The volume is between 0 and 100.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Volume to compare to (0-100)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MusicChannelVolume`.

**A music file is paused**  
Test if the music on the specified channel is paused.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MusicPaused`.

**A music file is being played**  
Test if the music on a channel is being played

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MusicPlaying`.

**A music file is stopped**  
Test if the music on the specified channel is stopped.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MusicStopped`.

**Pitch of the sound of a channel**  
Test the pitch of the sound on the specified channel. 1 is the default pitch.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Pitch to compare to (1 by default)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SoundChannelPitch`.

**Playing offset of the sound on a channel**  
Test the playing offset of the sound on the specified channel.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Position to compare to (in seconds)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SoundChannelPlayingOffset`.

**Volume of the sound on a channel**  
Test the volume of the sound on the specified channel.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel identifier
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Volume to compare to (0-100)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SoundChannelVolume`.

**A sound is paused**  
Test if the sound on the specified channel is paused.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SoundPaused`.

**A sound is being played**  
Test if the sound on a channel is being played.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SoundPlaying`.

**A sound is stopped**  
Test if the sound on the specified channel is stopped.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Channel

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SoundStopped`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `GlobalVolume()` | Global volume value ||
| `MusicChannelPitch(number)` | Music's pitch ||
| | _🔢 Number_ | Channel |
| `MusicChannelPlayingOffset(number)` | Music playing offset ||
| | _🔢 Number_ | Channel |
| `MusicChannelVolume(number)` | Music volume ||
| | _🔢 Number_ | Channel |
| `SoundChannelPitch(number)` | Sound's pitch ||
| | _🔢 Number_ | Channel |
| `SoundChannelPlayingOffset(number)` | Sound playing offset ||
| | _🔢 Number_ | Channel |
| `SoundChannelVolume(number)` | Sound volume ||
| | _🔢 Number_ | Channel |



---

The Sounds and music extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Sounds and music** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).