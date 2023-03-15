# Sounds and music

GDevelop provides several conditions and actions to play audio files. They can be either long music or short sound effects. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/audio)

## Actions

**Fade the volume of a music played on a channel.**  
Fade the volume of a music played on a channel to the specified volume within the specified duration.

**Fade the volume of a sound played on a channel.**  
Fade the volume of a sound played on a channel to the specified volume within the specified duration.

**Game global volume**  
This action modifies the global volume of the game.

**Pitch of the music on a channel**  
This action modifies the pitch of the music on the specified channel.

**Pitch of the sound of a channel**  
This action modifies the pitch (speed) of the sound on a channel.

**Playing offset of the music on a channel**  
This action modifies the playing offset of the music on the specified channel

**Playing offset of the sound on a channel**  
This action modifies the playing offset of the sound on a channel

**Volume of the music on a channel**  
This action modifies the volume of the music on the specified channel.

**Volume of the sound on a channel**  
This action modifies the volume of the sound on the specified channel.

**Pause the music of a channel**  
Pause the music on the specified channel.

**Pause the sound of a channel**  
Pause the sound played on the specified channel.

**Play a music file**  
Play a music file.

**Play a music file on a channel**  
Play a music file on a specific channel,  
so you'll be able to interact with it later.

**Play a sound**  
Play a sound.

**Play a sound on a channel**  
Play a sound (small audio file) on a specific channel,  
so you'll be able to manipulate it.

**Preload a music file**  
Preload a music file in memory.

**Preload a sound file**  
Preload a sound file in memory.

**Resume playing a music on a channel**  
Resume playing a music on a channel that was paused.

**Resume playing a sound on a channel**  
Resume playing a sound on a channel that was paused.

**Stop the music on a channel**  
Stop the music on the specified channel

**Stop the sound of a channel**  
Stop the sound on the specified channel.

**Unload all audio**  
Unload all the audio in memory. This will cause every sound and music of the game to stop.

**Unload a music file**  
Unload a music file from memory. Unloading a music file will cause any music playing it to stop.

**Unload a sound file**  
Unload a sound file from memory. Unloading a sound file will cause any sounds playing it to stop.

## Conditions

**Global volume**  
Test the global sound level. The volume is between 0 and 100.

**Volume of the music on a channel**  
Test the volume of the music on a specified channel. The volume is between 0 and 100.

**Pitch of the music on a channel**  
Test the pitch (speed) of the music on a specified channel.

**Playing offset of the music on a channel**  
Test the playing offset of the music on the specified channel.

**A music file is paused**  
Test if the music on the specified channel is paused.

**A music file is being played**  
Test if the music on a channel is being played

**A music file is stopped**  
Test if the music on the specified channel is stopped.

**Volume of the sound on a channel**  
Test the volume of the sound on the specified channel.

**Pitch of the sound of a channel**  
Test the pitch of the sound on the specified channel. 1 is the default pitch.

**Playing offset of the sound on a channel**  
Test the playing offset of the sound on the specified channel.

**A sound is paused**  
Test if the sound on the specified channel is paused.

**A sound is being played**  
Test if the sound on a channel is being played.

**A sound is stopped**  
Test if the sound on the specified channel is stopped.

## Expressions

| Expression | Description |  |
|-----|-----|-----|

| `GlobalVolume()` | Global volume value ||
| `MusicChannelPitch(number)` | Music's pitch ||
| | _number_ | Channel |
| `MusicChannelPlayingOffset(number)` | Music playing offset ||
| | _number_ | Channel |
| `MusicChannelVolume(number)` | Music volume ||
| | _number_ | Channel |
| `SoundChannelPitch(number)` | Sound's pitch ||
| | _number_ | Channel |
| `SoundChannelPlayingOffset(number)` | Sound playing offset ||
| | _number_ | Channel |
| `SoundChannelVolume(number)` | Sound volume ||
| | _number_ | Channel |

---
*This page is an auto-generated reference page about the **Sounds and music** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).