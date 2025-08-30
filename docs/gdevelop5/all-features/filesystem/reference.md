# File system Reference

Access the filesystem of the operating system - only works on native, desktop games exported to Windows, Linux or macOS. [Read more explanations about it.](/gdevelop5/all-features/filesystem)

## Actions

**Delete a file**  
Delete a file from the filesystem.

**Delete a file (Async)**  
Delete a file from the filesystem asynchronously. The option result variable will be updated once the file is deleted.

**Load a text from a file (Async)**  
Load a text from a file, asynchronously. Use this for large files to avoid any lag or freeze during game execution. The content of the file will be available in the scene variable after a small delay (usually a few milliseconds). The 'result' variable gets updated when the operation has finished.

**Load a text from a file**  
Load a text from a file. Only use this on small files to avoid any lag or freeze during the game execution.

**Load a scene variable from a JSON file (Async)**  
Load a JSON formatted text from a file and convert it to a scene variable (potentially a structure variable with children), asynchronously. Use this for large files to avoid any lag or freeze during game execution. The content of the file will be available as a scene variable after a small delay (usually a few milliseconds). The 'result' variable gets updated when the operation has finished.

**Load a scene variable from a JSON file**  
Load a JSON formatted text from a file and convert it to a scene variable (potentially a structure variable with children). Only use this on small files to avoid any lag or freeze during the game execution.

**Create a directory**  
Create a new directory at the specified path.

**Read a directory**  
Reads the contents of a directory (all files and sub-directories) and stores them in an array.

**Save a text into a file (Async)**  
Save a text into a file asynchronously. Use this for large files to avoid any lag or freeze during game execution. The 'result' variable gets updated when the operation has finished.

**Save a text into a file**  
Save a text into a file. Only use this on small files to avoid any lag or freeze during the game execution.

**Save a scene variable into a JSON file (Async)**  
Save the scene variable (including, for structures, all the children) into a file in JSON format, asynchronously. Use this for large files to avoid any lag or freeze during game execution. The 'result' variable gets updated when the operation has finished.

**Save a scene variable into a JSON file**  
Save a scene variable (including, for structure, all the children) into a file in JSON format. Only use this on small files to avoid any lag or freeze during the game execution.

## Conditions

**File or directory exists**  
Check if the file or directory exists.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `FileSystem::DesktopPath()` | Get the path to the desktop folder. ||
| `FileSystem::DirectoryName(string)` | Returns the portion of the path that represents the directories, without the ending file name. ||
| | _string_ | File or folder path |
| `FileSystem::DocumentsPath()` | Get the path to the documents folder. ||
| `FileSystem::ExecutableFolderPath()` | Get the path to this game executable folder. ||
| `FileSystem::ExecutablePath()` | Get the path to this game executable file. ||
| `FileSystem::ExtensionName(string)` | Returns the extension of the file designated by the given path, including the extension period. For example: ".txt". ||
| | _string_ | File path |
| `FileSystem::FileName(string)` | Returns the name of the file with its extension, if any. ||
| | _string_ | File path |
| `FileSystem::PathDelimiter()` | Get the operating system path delimiter. ||
| `FileSystem::PicturesPath()` | Get the path to the pictures folder. ||
| `FileSystem::TempPath()` | Get the path to temp folder. ||
| `FileSystem::UserHomePath()` | Get the path to the user home folder. ||
| `FileSystem::UserdataPath()` | Get the path to userdata folder (for application settings). ||



---

The File system extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **File system** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).