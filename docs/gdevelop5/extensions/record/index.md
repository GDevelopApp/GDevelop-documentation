# Record

<img src="https://resources.gdevelop-app.com/assets/Icons/video-vintage.svg" class="extension-icon"></img>
Adds events to record the game and players download the clips. Works on desktop, and in the browser.

**Authors and contributors** to this community extension: [Add00](https://gd.games/Add00).

---

Adds events to record the game and let players download the clips. Includes options to pause, and resume recordings. Additonally, frame rate, and file format can be picked.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Pause recording**  
Pause recording.

**Resume recording**  
Resume recording.

**Save recording**  
Save recording to the file system on destop, or to the downloads folder for web. Always ask for permission to save a file.

**Set codec**  
Set the video codec, if a selected codec is unsupported on the users platform a supported one will be picked by deafult.

**Set GIF Dithering**  
Enable dithering in GIF, must be set before starting a recording. Defaults to false.

**Set file format**  
Set the file format, if a selected file format is unsupported on the users platform a supported one will be picked by deafult.

**Set frame rate**  
Set the frame rate, must be set before starting a recording. Defaults to the min FPS set in the game properties.

**Set GIF quality**  
Set the GIF quality, must be set before starting a recording. Defaults to 10.

**Set video bit rate**  
Set the video bit rate, must be set before starting a recording. Defaults to 2500000.

**Start recording**  
Start the recording.

**Stop recording**  
End the recording.

## Conditions

**Is format supported on user device**  
Check if the specified format is available on the users device. To avoid unsupported formats pick commons ones like MP4 or WebM.

**When an errror has occurred **  
Check if an error has occurred.

**When recording has paused**  
Check if a recording has just been paused.

**When recording has resumed**  
Check if a recording has just been resumed.

**When recording has saved**  
Check if recording has just been saved.

**When recording has started**  
Check if recording has just started.

**When recording has stopped**  
Check if recording has just stopped.

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

*This page is an auto-generated reference page about the **Record** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).