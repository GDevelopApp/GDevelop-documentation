# Shopify Reference

Interact with products and generate URLs for checkouts with your Shopify shop. [Read more explanations about it.](/gdevelop5/all-features/shopify)

## Actions

**Initialize a shop**  
Initialize a shop with your credentials. Call this action first, and then use the shop name in the other actions to interact with products.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Shop name
    - Parameter 2 (🔤 String): Domain (xxx.myshopify.com)
    - Parameter 3 (🔤 String): App Id
    - Parameter 4 (🔤 String): Access Token

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Shopify::BuildClient`.

**Get the URL for buying a product**  
Get the URL for buying a product from a shop. The URL will be stored in the scene variable that you specify. You can then use the action to open an URL to redirect the player to the checkout.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Shop name (initialized with "Initialize a shop" action)
    - Parameter 2 (🔤 String): Product id
    - Parameter 3 (🔢 Number): Quantity
    - Parameter 4 (🔢 Number): Variant (0 by default)
    - Parameter 5 (🗄️ Scene variable): Scene variable where the URL for checkout must be stored
    - Parameter 6 (🗄️ Scene variable): Scene variable containing the error (if any)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Shopify::GetCheckoutUrlForProduct`.






---

The Shopify extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Shopify** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).