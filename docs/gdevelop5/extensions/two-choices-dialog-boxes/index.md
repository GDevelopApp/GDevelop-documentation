# Two choices dialog boxes

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Interface Elements/0842ffc478006e9b6687fca9a5761494c4efd1df873220637af5b4ac7253f850_Interface Elements_interface_ui_window_application_app_button_cta.svg" class="extension-icon"></img>
A dialog box with buttons to let users make a choice.

**Authors and contributors** to this experimental extension: [Bouh](https://gd.games/Bouh).

---

A dialog box showing multiple options (usually "yes" and "no") and a customizable text message.
It handles keyboard, gamepad and touch controls.

There are ready-to-use dialog boxes in the asset-store [dialog boxes pack](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=dialog-boxes-dialog-boxes).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Two choices dialog box  

A dialog box showing two options. 

### Object properties

- **Message** (🔤 Multiline text (String)). Default value is `Default message. Continue?`.
- **Cancel with Escape key** (🔘 Boolean). Enable or disable the escape key to close the dialog. Default value is `true`.
- **Label for the "Yes" button** (string). This is the button with identifier 0. Default value is `Yes`.
- **Label for the "No" button** (string). This is the button with identifier 1. Default value is `No`.

??? quote "See internal technical details"


    - **Message** is stored as `TextMessage` (MultilineString). Default value is `Default message. Continue?`.
    - **Cancel with Escape key** is stored as `EnableEscape` (Boolean). Default value is `true`.
    - **Label for the "Yes" button** is stored as `LabelButtonID0` (String). Default value is `Yes`.
    - **Label for the "No" button** is stored as `LabelButtonID1` (String). Default value is `No`.

### Object conditions

**"No" button is clicked**  
Check if the "No" button of the dialog was selected.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TwoChoicesDialogBoxes::TwoChoicesDialogBox::IsNoClicked`.

**"Yes" button is clicked**  
Check if the "Yes" button of the dialog was selected.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TwoChoicesDialogBoxes::TwoChoicesDialogBox::IsYesClicked`.


_No expressions for this object._



---

*This page is an auto-generated reference page about the **Two choices dialog boxes** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).