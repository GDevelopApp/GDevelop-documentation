# Voice Recognition API

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Music/Music_microphone_sing_voice_studio_record_vintage.svg" class="extension-icon"></img>
Converts voice to text.

**Authors and contributors** to this experimental extension: [planktonfun](https://gd.games/planktonfun).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Listens from the browser microphone then returns a text

Limitations: Voice recognition is only supported in https for security reasons

Can be used for:
   - Voice Based Games
   - Voice Mobile App

Features:

- Conditions:
    - OnSuccess
    - OnError


- Actions:
    - Start listening


- StringExpressions:
    - RetrieveResultText
    - RetrieveStatus
    - RetrieveError

[Example link](https://gdevelop.io/game-example/voice-recognition).

[Read more...](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Listen for speeches**  
Listen for speeches.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Language (Optional, defaults to the browser language setting if none given) (one of: "ar-SA (Arabic)", "bn-BD (Bangla)", "bn-IN (Bangla)", "cs-CZ (Czech)", "da-DK (Danish)", "de-AT (German)", "de-CH (German)", "de-DE (German)", "el-GR (Greek)", "en-AU (English)", "en-CA (English)", "en-GB (English)", "en-IE (English)", "en-IN (English)", "en-NZ (English)", "en-US (English)", "en-ZA (English)", "es-AR (Spanish)", "es-CL (Spanish)", "es-CO (Spanish)", "es-ES (Spanish)", "es-MX (Spanish)", "es-US (Spanish)", "fi-FI (Finnish)", "fr-BE (French)", "fr-CA (French)", "fr-CH (French)", "fr-FR (French)", "he-IL (Hebrew)", "hi-IN (Hindi)", "hu-HU (Hungarian)", "id-ID (Indonesian)", "it-CH (Italian)", "it-IT (Italian)", "jp-JP (Japanese)", "ko-KR (Korean)", "nl-BE (Dutch)", "nl-NL (Dutch)", "no-NO (Norwegian)", "pl-PL (Polish)", "pt-BR (Portugese)", "pt-PT (Portugese)", "ro-RO (Romanian)", "ru-RU (Russian)", "sk-SK (Slovak)", "sv-SE (Swedish)", "ta-IN (Tamil)", "ta-LK (Tamil)", "th-TH (Thai)", "tr-TR (Turkish)", "zh-CN (Chinese)", "zh-HK (Chinese)", "zh-TW (Chinese)")

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `VoiceRecognition::StartListening`.

## Conditions

**On Voice Recognition Error**  
On Voice Recognition Error.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `VoiceRecognition::OnError`.

**On Voice Recognition Success**  
On Voice Recognition Success.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `VoiceRecognition::OnSuccess`.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `VoiceRecognition::RetrieveError()` | Retrieves Voice Recognition Error. ||
| `VoiceRecognition::RetrieveStatus()` | Retrieves Voice Recognition Error Status. ||
| `VoiceRecognition::RetrievetResultText()` | Retrieves Voice Recognition Result Text. ||


---

*This page is an auto-generated reference page about the **Voice Recognition API** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).