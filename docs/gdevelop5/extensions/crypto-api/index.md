# Crypto Api

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/fac7ecb74ef7da92ab59c3e431fb9587c105c2889a41cfac489135c0eb4643d1_shield-key.svg" class="extension-icon"></img>
Random number generator for integers and floats using the Crypto API.

**Authors and contributors** to this experimental extension: (not specified).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

This uses the Crypto API to create a random number see help for more details. 

You might ask how this differs from the built-in random functions in GDevelop like RandomInRange. In basic terms, it provides a more random number than Math.random() which is what the built-in functions use.
That randomness does come at a cost of performance so be aware of your usage of this. 


**This has nothing to do with crypto currency**

[Read more...](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `CryptoApi::RandomFloatInRange(number, number)` | Uses the Crypto API to create a longer random number in an float range. ||
| | _🔢 Number_ | Minimum Value  |
| | _🔢 Number_ | Maximum Value  |
| `CryptoApi::RandomInRange(number, number)` | Uses the Crypto API to create a longer random number in an integer range. ||
| | _🔢 Number_ | Minimum Value  |
| | _🔢 Number_ | Maximum Value  |


---

*This page is an auto-generated reference page about the **Crypto Api** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).