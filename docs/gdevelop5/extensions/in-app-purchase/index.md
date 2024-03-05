# Mobile In-App Purchase (experimental)

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Shopping and Ecommerce/Shopping and Ecommerce_wallet_money_cash.svg" class="extension-icon"></img>
Add products to buy directly in your game ("In-App Purchase"), for games published on Android or iOS.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555), [4ian](https://gd.games/4ian), [Clem](https://gd.games/Clem).

---

> To set up In App Purchase, you'll need a developer account on Google Play Console or Apple App Store Connect. You will also need **real phones/devices** to test IAP, because emulators are not supported.

It's highly recommended to **read the [help page](https://wiki.gdevelop.io/gdevelop5/extensions/in-app-purchase) to begin**. 

> ⚠️ In-App Purchase **will only work after you exported your game and uploaded it to Google Play Console or Apple App Store Connect**, at least in a testing track.

The general worflow is the following:


- Register your products on the Google Play Console or App Store Connect,
- In your game, register the same products using the action *"Register a Product"*,
- Call the action to finalize the store registration,
- Register a variable that will be updated when an product purchase is approved (and other variables for when other things happen),
- Wait for "the store is ready" condition to be true,
- Get the products data to know what to display (in particular the *price* of each product),
- Display the price and available products in your game,
- When the player clicks on a product, use the action to order it,
- If the purchase is approved (the variable you set up is set to true), give the user what they bought


[Read more...](/gdevelop5/extensions/in-app-purchase/setup)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Finalize a purchase**  
Mark a purchase as delivered, after you delivered the rewards the user has paid for and saved it somewhere. If you don't do so, the user will get the money refunded as the purchase will be considered as incomplete, with the rewards not given.

**Finalize registration**  
Finalize store registration. Do this after registering every product and before ordering or getting information about a product.

**Load product data in a variable**  
Get all the data about a product from the IAP provider and store it into a structure variable.  
Check [this page](https://github.com/j3k0/cordova-plugin-purchase/blob/master/api/classes/CdvPurchase.Product.md) for the exhaustive list of what can be retrieved from the product.

**Order a product**  
Opens the purchase menu to let the user buy a product.  

Ensure you use the condition to check if the store is ready and that the product ID has been registered and finalized before calling this action.

**Register a Product**  
Register a Product of your store. This is required to do for all products you want to display or order from the app.   

Make sure you register them all and finalize registration before ordering a product.

**Update a variable when a product event is triggered**  
When an event is triggered for a product (approved or finished), this sets a scene variable to true.   
You can then compare the value of the variable in a condition, and have actions launched to react to the changes.
Use with Trigger Once to avoid registering multiple watchers unnecessarily.

Approved is triggered after the purchase is complete.
Finished is triggered after you have marked the purchased as delivered (less useful).

## Conditions

**Store is ready**  
Triggers after finalizing the registration. Products can then be retrieved and purchased (you can get data of a product like the price, you can use the action to order a product...).



---

*This page is an auto-generated reference page about the **Mobile In-App Purchase (experimental)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).