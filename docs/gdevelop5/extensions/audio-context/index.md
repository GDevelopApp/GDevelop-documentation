# Audio Context

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Music/308ee40b08fc7798832654e3ab95d1df6a66bfb8e7aae0a19697e120449931d0_Music_speaker_audio_sound.svg" class="extension-icon"></img>
Create procedural audio.

**Authors and contributors** to this community extension: [aliustaoglu](https://gd.games/aliustaoglu).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

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

**Add multiple detunes to a synth**  
Add comma separated detune values to a synth.

**Add/update filter**  
Add or update biquad filter.

**Create chord**  
Create a new chord.

**Create an Audio Context**  
Create a new audio context (In most cases you only need one context and reuse it with the name).

**Create/update synth**  
Create or update synth with attack, decay, sustain, release gain and apply filters.

**Play chord**  
Play an existing chord on a synth.

**Play note**  
Play a note a synth you've created before.

## Conditions

**Context exists**  
Check if the context already created.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `AudioContext::ChordNameByIndex(number)` | Get chord name by index. ||
| | _🔢 Number_ | Chord index |
| `AudioContext::NumberOfChords()` | Number of chords (For looping). ||

---

*This page is an auto-generated reference page about the **Audio Context** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).