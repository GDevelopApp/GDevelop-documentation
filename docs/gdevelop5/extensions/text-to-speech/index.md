# Text-to-Speech

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Users/Users_user_chat_talk.svg" class="extension-icon"></img>
Read text aloud using system Text-to-Speech. Configurable voice and speed.

**Authors and contributors** to this experimental extension: [jugule](https://gd.games/jugule).

---

Use the system's Text-to-Speech features to read any text aloud.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Speak out a message**  
Speaks a text message aloud through the system text-to-speech.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): The message to be spoken
    - Parameter 2 (🔤 String): The voice to be used
      Voices vary depending on the operating system. 
      Here is a list of windows voice names: https://bit.ly/windows-voices 
      And here is a list of voice names for MacOS: https://bit.ly/mac-voices
    - Parameter 3 (🔢 Number): Volume between 0% and 100%
    - Parameter 4 (🔢 Number): Speed between 10% and 1000%
    - Parameter 5 (🔢 Number): Pitch between 0% and 200%

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `TextToSpeech::Speak`.

**Force stop speaking**  
Forces all Text-to-Speech to be stopped.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `TextToSpeech::StopSpeaking`.





---

*This page is an auto-generated reference page about the **Text-to-Speech** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).