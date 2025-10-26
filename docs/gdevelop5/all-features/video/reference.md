# Video Reference

Provides an object to display a video on the scene. The recommended file format is MPEG4, with H264 video codec and AAC audio codec, to maximize the support of the video on different platform and browsers. [Read more explanations about it.](/gdevelop5/objects/video)



## Video 

Displays a video. 

### Object actions

**Loop a video**  
Loop the specified video.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1 (❓ Yes or No): Activate loop

    > Technical note: this action internal type (in GDevelop JSON) is `Video::Loop`.

**Mute a video**  
Mute, or unmute, the specified video.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1 (❓ Yes or No): Activate mute

    > Technical note: this action internal type (in GDevelop JSON) is `Video::Mute`.

**Pause a video**  
Pause the specified video.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object

    > Technical note: this action internal type (in GDevelop JSON) is `Video::Pause`.

**Play a video**  
Play a video (recommended file format is MPEG4, with H264 video codec and AAC audio codec).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object

    > Technical note: this action internal type (in GDevelop JSON) is `Video::Play`.

**Set playback speed**  
Set playback speed of the specified video object, (1 = the default speed, >1 = faster and <1 = slower).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Playback speed (1 by default)

    > Technical note: this action internal type (in GDevelop JSON) is `Video::SetPlaybackSpeed`.

**Current time**  
Set the time of the video

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Position (in seconds)

    > Technical note: this action internal type (in GDevelop JSON) is `Video::SetTime`.

**Volume**  
Set the volume of the video object.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Volume (0-100)

    > Technical note: this action internal type (in GDevelop JSON) is `Video::SetVolume`.

### Object conditions

**Current time**  
Compare the current time of a video object

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Time to compare to (in seconds)

    > Technical note: this condition internal type (in GDevelop JSON) is `Video::CurrentTime`.

**Duration**  
Compare the duration of a video object

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Duration to compare to (in seconds)

    > Technical note: this condition internal type (in GDevelop JSON) is `Video::Duration`.

**Is ended**  
Check if a video is ended

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object

    > Technical note: this condition internal type (in GDevelop JSON) is `Video::Ended`.

**Playback speed **  
Compare the playback speed of a video object

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Playback speed (1 by default)

    > Technical note: this condition internal type (in GDevelop JSON) is `Video::GetPlaybackSpeed`.

**Is looped**  
Check if the video is looped.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object

    > Technical note: this condition internal type (in GDevelop JSON) is `Video::Loop`.

**Is muted**  
Check if a video is muted.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object

    > Technical note: this condition internal type (in GDevelop JSON) is `Video::Mute`.

**Is paused**  
Check if the video is paused.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object

    > Technical note: this condition internal type (in GDevelop JSON) is `Video::Pause`.

**Is played**  
Check if a video is played.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object

    > Technical note: this condition internal type (in GDevelop JSON) is `Video::Play`.

**Volume**  
Compare the current volume of a video object.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Video object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Volume to compare to (0-100)

    > Technical note: this condition internal type (in GDevelop JSON) is `Video::Volume`.

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