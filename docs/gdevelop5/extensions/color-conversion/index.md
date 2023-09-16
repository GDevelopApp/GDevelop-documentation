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
| `ColorConversion::HexToLuminance(string)` | Calculate luminance of a hexadecimal color.  Example input: "0459AF". ||
| | _string_ | Hex value |
| `ColorConversion::HexToRgb(color)` | Converts a hexadecimal string into a RGB string.  Example input: "0459AF". ||
| | _color_ | Hex value |
| `ColorConversion::HslToRgb(number, number, number)` | Converts HSL color values into a RGB string.  Valid input ranges:  H(0 to 360), S(0 to 100), L(0 to 100). ||
| | _🔢 Number_ | Hue 0-360 |
| | _🔢 Number_ | Saturation 0-100 |
| | _🔢 Number_ | Lightness 0-100 |
| `ColorConversion::HsvToRgb(number, number, number)` | Converts HSV color values into a RGB string.  Valid input ranges:  H(0 to 360), S(0 to 100), V(0 to 100). ||
| | _🔢 Number_ | Hue 0-360 |
| | _🔢 Number_ | Saturation 0-100 |
| | _🔢 Number_ | Value 0-100 |
| `ColorConversion::HueToRgb(number)` | Converts a color hue (range: 0 to 360) into an RGB color string with 100% saturation and 50% lightness. ||
| | _🔢 Number_ | Hue 0-360 |
| `ColorConversion::NameToRgb(color)` | Converts a color name into a RGB string.  (Examples: black, gray, white, red, purple, green, yellow, blue)  Full list of colors: https://www.w3schools.com/colors/colors_names.asp. ||
| | _color_ | Name of a color |
| `ColorConversion::RgbMean(color, color, number)` | Blend two RGB colors by applying a weighted mean. ||
| | _color_ | First RGB color |
| | _color_ | Second RGB color |
| | _🔢 Number_ | Ratio Range: 0 to 1, where 0 gives the first color and 1 gives the second color |
| `ColorConversion::RgbToHex(color)` | Converts a RGB string into a hexadecimal string.  Example input: "0;128;255". ||
| | _color_ | RGB value |
| `ColorConversion::RgbToHsl(color)` | Converts a RGB string into a HSL string.  Example input: "0;128;255"". ||
| | _color_ | RGB value |
| `ColorConversion::RgbToHsv(color)` | Converts a RGB string into a HSV string.  Example input: "0;128;255". ||
| | _color_ | RGB value |
| `ColorConversion::RgbToLuminance(color)` | Calculate luminance of a RGB color.  Example input: "0;128;255". ||
| | _color_ | RGB color |

---

*This page is an auto-generated reference page about the **Color Conversion** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).