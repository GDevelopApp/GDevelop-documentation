# Video

Provides an object to display a video on the scene. The recommended file format is MPEG4, with H264 video codec and AAC audio codec, to maximize the support of the video on different platform and browsers. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/video)



## Video 

Displays a video. 

### Object actions

**Loop a video**  
Loop the specified video.

**Mute a video**  
Mute, or unmute, the specified video.

**Pause a video**  
Pause the specified video.

**Play a video**  
Play a video (recommended file format is MPEG4, with H264 video codec and AAC audio codec).

**Set opacity**  
Set opacity of the specified video object.

**Set playback speed**  
Set playback speed of the specified video object, (1 = the default speed, >1 = faster and <1 = slower).

**Set time**  
Set the time of the video

**Set volume**  
Set the volume of the video object.

### Object conditions

**Current time**  
Compare the current time of a video object

**Duration**  
Compare the duration of a video object

**Is ended**  
Check if a video is ended

**Opacity**  
Compare the opacity of a video object

**Playback speed **  
Compare the playback speed of a video object

**Is looped**  
Check if the video is looped.

**Is muted**  
Check if a video is muted.

**Is paused**  
Check if the video is paused.

**Is played**  
Check if a video is played.

**Volume**  
Compare the current volume of a video object.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.CurrentTime()` | Return the current time of a video object (in seconds). ||
| `Object.Duration()` | Return the duration of a video object (in seconds). ||
| `Object.Opacity()` | Return the opacity of a video object ||
| `Object.PlaybackSpeed()` | Return the playback speed of a video object ||
| `Object.Volume()` | Get the volume of a video object, between 0 (muted) and 100 (maximum). ||

---
*This page is an auto-generated reference page about the **Video** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).