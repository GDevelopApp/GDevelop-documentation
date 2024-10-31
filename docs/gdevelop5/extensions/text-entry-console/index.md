# Console (commands handler for Text Entry objects)

<img src="https://resources.gdevelop-app.com/assets/Icons/console.svg" class="extension-icon"></img>
A console behavior that allows parsing simple commands inputed via a Text Entry object.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

---

A behavior that makes a Text Entry behave like a console. Whenever Return is pressed, the Text Entry is cleared and the entered text parsed, and the first word is stored as the command name, and the rest as arguments. Each word is one argument, and you can get them with the expression `GetArg`. When a command is triggered, it triggers the condition bound to this command. Example:  
If you have entered `hello foo bar` and Return, then the condition `Entered command "hello"` will trigger, `Object::Console.GetArg(0)` will return `"foo"`, and `Object::Console.GetArg(1)` will return `"bar"`.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Text entry console 

A behavior that will parse any command endered via a text entry. 

### Behavior conditions

**A command has been entered**  
Triggers when a specific command has been entered.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.TextEntryConsole::GetArg()` | Get an argument from the last entered command. ||

---

*This page is an auto-generated reference page about the **Console (commands handler for Text Entry objects)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).