# Pop-up

<img src="https://resources.gdevelop-app.com/assets/Icons/message-alert.svg" class="extension-icon"></img>
Display pop-ups to alert, ask confirmation, and let user type a response in text box.

**Authors and contributors** to this experimental extension: [Leo-Red](https://gd.games/Leo-Red), [Bouh](https://gd.games/Bouh), [arthuro555](https://gd.games/arthuro555).

---

This extension adds actions to display three kinds of pop-ups.

## Alert

 - Pops-up a message that will pause the game until dismissed by the player.

## Confirmation

 - Pops-up a dialogue containing a message with the option to either confirm or cancel.

## Prompt

**Note that this pop-up type is unsupported on previews and PC exports.**
 - Displays a message to the player with a text field to write an answer in. The player will also have the option to either confirm or discard their input.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Alert**  
Displays an alert box with a message and an OK button in a pop-up window.

**Confirm**  
Ask confirmation of user with a message in a dialog box with an OK button, and a Cancel button.

**Prompt**  
Displays a prompt in a pop-up that prompts the user for input. This action return the text input or the false boolean if canceled.

## Conditions

**Pop-up message confirmed**  
Check if a confirmation was accepted.

**Existing prompt response**  
The response to a pop-up message is filled.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `PopUp::PromptResponse()` | Return the text response by user to prompt. ||


---

*This page is an auto-generated reference page about the **Pop-up** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).