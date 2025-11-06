# Audio Context

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Music/308ee40b08fc7798832654e3ab95d1df6a66bfb8e7aae0a19697e120449931d0_Music_speaker_audio_sound.svg" class="extension-icon"></img>
Create procedural audio.

**Authors and contributors** to this experimental extension: [aliustaoglu](https://gd.games/aliustaoglu).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

This extension enables you to create your own sounds in real time without using any wav, mp3 or ogg files. It procedurally creates sounds using the Web Audio API and AudioContext.

The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning) and much more.

This extension can easily create chiptunes.

[Read more...](https://aliustaoglu.itch.io/audiocontext-gdevelop-extension)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Add detune to a synth**  
Add detune on top of the main frequency to get cool synth effects.

??? quote "See parameters & details"

    - Parameter 1 (string): Synth name
    - Parameter 2 (🔢 Number): Detune value in chips

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AudioContext::AddDetuneToSynth`.

**Add multiple detunes to a synth**  
Add comma separated detune values to a synth.

??? quote "See parameters & details"

    - Parameter 1 (string): Synth name
    - Parameter 2 (string): Comma separated detune values

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AudioContext::AddDetunesToSynth`.

**Add/update filter**  
Add or update biquad filter.

??? quote "See parameters & details"

    - Parameter 1 (string): Synth name
    - Parameter 2 (stringwithselector): Filter type (one of: "lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass")
    - Parameter 3 (🔢 Number): Frequency [0-20,000]
    - Parameter 4 (🔢 Number): Quality factor [0-100]
    - Parameter 5 (🔢 Number): Gain value

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AudioContext::AddFilterToSynth`.

**Create chord**  
Create a new chord.

??? quote "See parameters & details"

    - Parameter 1 (string): Chord name (imaginary or real)
    - Parameter 2 (string): Comma separated notes including octave eg. "C#4, Eb4, G4"

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AudioContext::CreateChord`.

**Create an Audio Context**  
Create a new audio context (In most cases you only need one context and reuse it with the name).

??? quote "See parameters & details"

    - Parameter 1 (string): Context name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AudioContext::CreateContext`.

**Create/update synth**  
Create or update synth with attack, decay, sustain, release gain and apply filters.

??? quote "See parameters & details"

    - Parameter 1 (string): Name of the synth
    - Parameter 2 (string): Context name
    - Parameter 3 (stringwithselector): Wave type (one of: "sine", "square", "triangle", "sawtooth")
    - Parameter 4 (🔢 Number): Attack value
    - Parameter 5 (🔢 Number): Decay value
    - Parameter 6 (🔢 Number): Sustain value
    - Parameter 7 (🔢 Number): Release value

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AudioContext::CreateSynth`.

**Play chord**  
Play an existing chord on a synth.

??? quote "See parameters & details"

    - Parameter 1 (string): Chord name
    - Parameter 2 (string): Synth name to play the chord on
    - Parameter 3 (🔢 Number): Duration

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AudioContext::PlayChord`.

**Play note**  
Play a note a synth you've created before.

??? quote "See parameters & details"

    - Parameter 1 (string): Synth name
    - Parameter 2 (stringwithselector): Note name (one of: "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B")
    - Parameter 3 (🔢 Number): Octave (0-8)
    - Parameter 4 (🔢 Number): Note duration (-1 to play until stopped manually)

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AudioContext::PlayNote`.


## Conditions

**Context exists**  
Check if the context already created.

??? quote "See parameters & details"

    - Parameter 1 (string): Context name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AudioContext::ContextExists`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `AudioContext::ChordNameByIndex(number)` | Get chord name by index. ||
| | _🔢 Number_ | Chord index |
| `AudioContext::NumberOfChords()` | Number of chords (For looping). ||


---

*This page is an auto-generated reference page about the **Audio Context** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).