# Secret Code

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/16ec515c053b629042bd78e6098a05fb1bcc3172361820f7b2a2ce934a874aa7_key-chain-variant.svg" class="extension-icon"></img>
Allows to input a secret code for cheats and easter eggs.

**Authors and contributors** to this community extension: [Dekar](https://gd.games/Dekar).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

---

Allows to input a secret code for cheats and easter eggs.

There are two behaviors in this extension: `SecretCode` and `ManualSecretCode`.

To use `SecretCode`, simply attach the behavior to any object in a scene and set the desired code. Use the `Code entered` condition in the editor to trigger your desired effects with events.

To use `ManualSecretCode`, first attach the behavior to any object in a scene. To enter a key, use the `Input key` action, and use the `Code entered` condition in the editor to trigger your desired effects with events.

Inspired by Konami Code extension.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Manual Secret Code 

Allows to manually input a secret code for cheats and easter eggs. 

### Behavior actions

**Accept code**  
Accept code input.

**Change code**  
Change secret code.

**Input key**  
Input key.

**Reset code entered correctly status**  
Reset code entered correctly status.

**Reset inputted code**  
Reset currently inputted code.

### Behavior conditions

**Is the code currently being entered**  
Check if the code is currently being entered.

**Code entered correctly**  
Code entered correctly.

**Is accepting code**  
Check if the object is accepting code.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ManualSecretCode::LastValidIndex()` | Return the last valid index. ||
| `Object.ManualSecretCode::LastValidKey()` | Return the last valid key. ||

## Secret Code 

Allows to input a secret code for cheats and easter eggs. 

### Behavior actions

**Accept code**  
Accept code input.

**Change code**  
Change secret code.

**Reset code entered correctly status**  
Reset code entered correctly status.

### Behavior conditions

**Code entered correctly**  
Code entered correctly.

**Is accepting code**  
Check if the object is accepting code.

_No expressions for this behavior._


---

*This page is an auto-generated reference page about the **Secret Code** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).