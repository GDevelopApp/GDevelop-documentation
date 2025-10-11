# Video Reference

Provides an object to display a video on the scene. The recommended file format is MPEG4, with H264 video codec and AAC audio codec, to maximize the support of the video on different platform and browsers. [Read more explanations about it.](/gdevelop5/objects/video)



## Video 

Displays a video. 

### Object actions

**Loop a video**
Loop the specified video.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1 (❓ Yes or No): Activate loop

**Mute a video**
Mute, or unmute, the specified video.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1 (❓ Yes or No): Activate mute

**Pause a video**
Pause the specified video.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object

**Play a video**
Play a video (recommended file format is MPEG4, with H264 video codec and AAC audio codec).

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object

**Set playback speed**
Set playback speed of the specified video object, (1 = the default speed, >1 = faster and <1 = slower).

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Playback speed (1 by default)

**Current time**
Set the time of the video

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Position (in seconds)

**Volume**
Set the volume of the video object.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Volume (0-100)

### Object conditions

**Current time**
Compare the current time of a video object

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Time to compare to (in seconds)

**Duration**
Compare the duration of a video object

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Duration to compare to (in seconds)

**Is ended**
Check if a video is ended

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object

**Playback speed **
Compare the playback speed of a video object

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Playback speed (1 by default)

**Is looped**
Check if the video is looped.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object

**Is muted**
Check if a video is muted.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object

**Is paused**
Check if the video is paused.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object

**Is played**
Check if a video is played.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object

**Volume**
Compare the current volume of a video object.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Volume to compare to (0-100)

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.CurrentTime()` | Return the current time of a video object (in seconds). ||
| `Object.Duration()` | Return the duration of a video object (in seconds). ||
| `Object.PlaybackSpeed()` | Return the playback speed of a video object ||
| `Object.Volume()` | Get the volume of a video object, between 0 (muted) and 100 (maximum). ||



---

The Video extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Video** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).