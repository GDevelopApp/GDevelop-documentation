# Color Conversion

<img src="https://resources.gdevelop-app.com/assets/Icons/invert-colors.svg" class="extension-icon"></img>
Expressions to convert color values between various formats (RGB, HSV, HSL, named colors), calculate luminance according to WCAG 2.0 standards, and to blend two colors.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames), [Add00](https://gd.games/Add00), [D8H](https://gd.games/D8H), [Ahnaf30e](https://gd.games/Ahnaf30e).

---

Expressions to convert color values between various formats (RGB, HSV, HSL, named colors), calculate luminance according to WCAG 2.0 standards, and to blend two colors.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `ColorConversion::HexToLuminance()` | Calculate luminance of a hexadecimal color.  Example input: "0459AF". ||
| `ColorConversion::HexToRgb()` | Converts a hexadecimal string into a RGB string.  Example input: "0459AF". ||
| `ColorConversion::HslToRgb()` | Converts HSL color values into a RGB string.  Valid input ranges:  H(0 to 360), S(0 to 100), L(0 to 100). ||
| `ColorConversion::HsvToRgb()` | Converts HSV color values into a RGB string.  Valid input ranges:  H(0 to 360), S(0 to 100), V(0 to 100). ||
| `ColorConversion::HueToRgb()` | Converts a color hue (range: 0 to 360) into an RGB color string with 100% saturation and 50% lightness. ||
| `ColorConversion::NameToRgb()` | Converts a color name into a RGB string.  (Examples: black, gray, white, red, purple, green, yellow, blue)  Full list of colors: https://www.w3schools.com/colors/colors_names.asp. ||
| `ColorConversion::RgbMean()` | Blend two RGB colors by applying a weighted mean. ||
| `ColorConversion::RgbToHex()` | Converts a RGB string into a hexadecimal string.  Example input: "0;128;255". ||
| `ColorConversion::RgbToHsl()` | Converts a RGB string into a HSL string.  Example input: "0;128;255"". ||
| `ColorConversion::RgbToHsv()` | Converts a RGB string into a HSV string.  Example input: "0;128;255". ||
| `ColorConversion::RgbToLuminance()` | Calculate luminance of a RGB color.  Example input: "0;128;255". ||

---

*This page is an auto-generated reference page about the **Color Conversion** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).