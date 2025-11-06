# Record

<img src="https://resources.gdevelop-app.com/assets/Icons/video-vintage.svg" class="extension-icon"></img>
Actions to record the game and players download the clips. Works on desktop, and in the browser.

**Authors and contributors** to this experimental extension: [Add00](https://gd.games/Add00).

---

Actions to record the game and let players download the clips. Includes options to pause and resume recordings. Additionally, frame rate and file format can be chosen.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Pause recording**  
Pause recording.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Record::Pause`.

**Resume recording**  
Resume recording.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Record::Resume`.

**Save recording**  
Save recording to the file system on destop, or to the downloads folder for web. Always ask for permission to save a file.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): File location, set using a FileSystem path e.g. FileSystem::DesktopPath() (only used for desktop saves)
    - Parameter 2 (🔤 String): Name to save file as

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Record::Save`.

**Set codec**  
Set the video codec, if a selected codec is unsupported on the users platform a supported one will be picked by deafult.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): codec

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Record::SetCodec`.

**Set GIF Dithering**  
Enable dithering in GIF, must be set before starting a recording. Defaults to false.

??? quote "See parameters & details"

    - Parameter 1 (❓ True or False): Dithering

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Record::SetDithering`.

**Set file format**  
Set the file format, if a selected file format is unsupported on the users platform a supported one will be picked by deafult.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Recording format (one of: "webm", "mp4", "ogg", "gif")

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Record::SetFormat`.

**Set frame rate**  
Set the frame rate, must be set before starting a recording. Defaults to the min FPS set in the game properties.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Recommended fps for video: 25, 30, 60, for GIFs use 5, 10, 20

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Record::SetFrameRate`.

**Set GIF quality**  
Set the GIF quality, must be set before starting a recording. Defaults to 10.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Quality

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Record::SetQuality`.

**Set video bit rate**  
Set the video bit rate, must be set before starting a recording. Defaults to 2500000.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): video bits per second

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Record::SetVideoBitRate`.

**Start recording**  
Start the recording.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Record::Start`.

**Stop recording**  
End the recording.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Record::Stop`.


## Conditions

**Is format supported on user device**  
Check if the specified format is available on the users device. To avoid unsupported formats pick commons ones like MP4 or WebM.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Select a common format for the best results (one of: "webm", "mp4", "ogg", "gif")

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Record::IsFormatSupported`.

**When an errror has occurred **  
Check if an error has occurred.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Record::OnError`.

**When recording has paused**  
Check if a recording has just been paused.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Record::OnPause`.

**When recording has resumed**  
Check if a recording has just been resumed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Record::OnResume`.

**When recording has saved**  
Check if recording has just been saved.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Record::OnSave`.

**When recording has started**  
Check if recording has just started.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Record::OnStart`.

**When recording has stopped**  
Check if recording has just stopped.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Record::OnStop`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Record::Codec()` | Returns the current video codec. ||
| `Record::Dithering()` | Returns whether or not dithering is enabled for GIFs. ||
| `Record::ErrorType()` | When an error occurs this method will return what type of error it is. ||
| `Record::Format()` | Returns the current video format. ||
| `Record::FrameRate()` | Get the current framerate. ||
| `Record::Quality()` | Get the current GIF quality. ||
| `Record::Status()` | Returns the current status of the reccorder: inactive (not recording), recording, or paused. ||
| `Record::VideoBitRate()` | Returns the current video bit rate per second. ||


---

*This page is an auto-generated reference page about the **Record** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).