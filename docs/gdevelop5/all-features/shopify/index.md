---
title: Shopify
---
# Shopify

If you have a Shopify powered online store, using this feature can be instrumental to your game. You can add special links from your game to buy real goods related to your game or brand. You can also add special "Easter Eggs" or surprises that are available when levels are reached in your game.

## Create an app in Shopify and get the identifiers of a few products

In Shopify, open your shop administration dashboard. Add an app and note the app identifier (a large number):

  * Go in *Apps* in the left menu,
  * At the bottom, choose *Manage private apps*,
  * Click on "Create a new private app" and enter the required information:

![](/gdevelop5/all-features/shopify-create-private-app.png)

  * When the app is created, note the *app identifier* in the address bar:

![](/gdevelop5/all-features/shopify-app-identifier.png)

  * Also note the "*Storefront access token*".

Then, we need to get the identifiers of the products we want to add to the game.
Choose the product that you want to add to your game:

  * Choose Products in the left menu,
  * Click on the chosen product,
  * Note the product identifier in the address bar:

![](/gdevelop5/all-features/shopify-product-identifier.png)

  * Verify that your previously created private app is listed in the *sales channels* (click on manage if that's not the case):

![](/gdevelop5/all-features/shopify-sales-channels.png)

For each product, repeat the procedure to note the product identifier and verify that it is enabled for your app.

## Initialize your shop in memory

Use the action "Initialize a shop", entering the URL to your shop, the app ID that you got from the URL for the app (see above) and the app **Storefront access token** :

![](/gdevelop5/all-features/shopify-initialize.png)

Choose a name for the shop that will be stored in memory. Don't forget the quotes around the name, the app ID and the access token!

## Get the URL for a specific product and open it

When you want the player, to open the page to buy a product, you must first get the URL to the product page, and then open it.
The product identifier is needed for this, to let Shopify know which URL to generate. You also have to enter the name of the variable where the URL will be stored (as this can take a bit of time, depending on the network connection):

![](/gdevelop5/all-features/shopify-get-url.png)

It's a good idea to display a text/loading indicator to the player to let them know that some work is being done, and disable/hide the button to buy. If the URL can't be generated (for example, if the user does not have an internet connection), the second variable will be set with the content of the error.

When the variable with the URL is filled, you can then open the link:

![](/gdevelop5/all-features/shopify-open-url.png)

You can also hide any object that was displayed to indicate that there was something loading.

## Reference

All actions, conditions and expressions are listed in [the shopify reference page](/gdevelop5/all-features/shopify/reference/).