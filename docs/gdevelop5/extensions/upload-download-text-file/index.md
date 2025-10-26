# Upload Download Text File

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/16a8e2514d1c9a57f65f506bb7a420bf63e53dc56c58dfceff63178893031c69_upload.svg" class="extension-icon"></img>
Allows users to upload/download text content to a filename and vice versa. 

**Authors and contributors** to this experimental extension: [planktonfun](https://gd.games/planktonfun).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Allows users to upload/download text content to a filename and vice versa. 
(The current gdevelop only supports desktop version, this one is compatible with browsers)

[Open this example](https://editor.gdevelop.io/?project=https://resources.gdevelop-app.com/examples/extension-upload-download-text/extension-upload-download-text.json) to learn how to use this extension.

[Read more...](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Download file with text content**  
Download file with text content.

??? quote "See parameters & details"

    - Parameter 1 (string): FileName
    - Parameter 2 (string): TextContent

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `UploadDownloadTextFile::DownloadTextFile`.

**Upload a text file to text input**  
Upload a text file to text input.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Scene variable): SceneVariable

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `UploadDownloadTextFile::UploadTextFile`.

## Conditions

**Uploading text file finished?**  
Uploading text file finished.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `UploadDownloadTextFile::UploadFinished`.




---

*This page is an auto-generated reference page about the **Upload Download Text File** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).