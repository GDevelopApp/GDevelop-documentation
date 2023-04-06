# Mobile In-App Purchase (experimental)

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Shopping and Ecommerce/Shopping and Ecommerce_wallet_money_cash.svg" class="extension-icon"></img>
Add items to buy directly in your game ("In-App Purchase"), for games published on Android or iOS.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555), [4ian](https://gd.games/4ian).

---

> To set up In App Purchase, you'll need a developer account on Google Play Console or Apple App Store Connect. You will also need **real phones/devices** to test IAP, because emulators are not supported.

It's highly recommended to **read the [help page](https://wiki.gdevelop.io/gdevelop5/extensions/in-app-purchase) to begin**. 

> ⚠️ In-App Purchase **will only work after you exported your game and uploaded it to Google Play Console or Apple App Store Connect**, at least in a testing track.

The general worflow is the following:


- Register your products on the Google Play Console or App Store Connect,
- In your game, register the same products using the action *"Register an item"*,
- Call the action to finalize the store registration,
- Wait for "the store is ready" condition to be true,
- Get the items data to know what to display (in particular the *price* of each items),
- Display the price and available items in your game,
- Register a variable that will be updated when an item purchase is approved (and other variables for when other things happen),
- When the player clicks on an item, use the action to order it,
- If the purchase is approved (the variable you set up is set to true), give the user what they bought,
- Mark the purchase as completed for the user to be charged the money


[Read more...](https://wiki.gdevelop.io/gdevelop5/extensions/in-app-purchase/setup)

---

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

*This page is an auto-generated reference page about the **Mobile In-App Purchase (experimental)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).