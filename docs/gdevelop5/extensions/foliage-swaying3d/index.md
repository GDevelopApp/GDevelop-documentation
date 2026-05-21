# 3D foliage swaying

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/732ef90b7fcf5dd9171fe95d0cf262e09159b487304915a4693baa893d9ce16c_grass.svg" class="extension-icon"></img>
Sway foliage of 3D objects according to the wind.

**Authors and contributors** to this experimental extension: [justBo](https://gd.games/justBo), [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Sway foliage of 3D objects according to wind.


* Multiple sway types: **Grass**, **Bush**, **Tree Trunk** (dead tree), and **Tree Leaves** (more coming soon)
* Works with both **regular meshes** and **GPU-instanced foliage** for better performance
* Global wind controls: `strength`, `speed`, and `wind direction`
* Optional **gust system** with texture-driven gust masks
* Optional **visual tuning**: gradient tint, saturation/contrast, PBR tweaks
* Distance-based fading/culling for better performance

### Limitations


* Collision is not yet supported for GPU instanced objects but is planned.
* The mesh complexity auto-detection (`SwayResponse` parameter) is not perfect and can produce inconsistent sway intensity across assets. If you encounter overly strong or weak sways, experiment with the `SwayResponse` value to make your asset's sway consistent. Use the debug option to find the auto-selected value, then increase or decrease it.
* Foliage material auto-detection works well and can usually be left empty, but there are edge cases with multi-material objects. If you don't have access to the source file of your 3D object, you can find your object's material name using the debug option in object's _Foliage swaying behavior_.
* The optional wind gust texture can create natural-looking gusts and is worth creating. If not, one will be automatically created.<br>To make one yourself, use only black and red colors (black will be ignored and red will be the actual gust map). For the best results, create a tileable 512x512 image or download one of the examples below. [01](https://i.imgur.com/ZbtDo8o.png) / [02](https://i.imgur.com/XyR58TO.png) / [03](https://i.imgur.com/qbIKlyD.png) / [04](https://i.imgur.com/yxThP42.png)<br><br>![Gust map examples](https://i.imgur.com/VmcU9IB.png)
* Hot reload supports all basic behavior property changes, excluding Sway settings (`Material to sway`, `Sway type`, `Enable uniform sway toggle`) and `Distance culling`, `Debug output`, `GPU instancing`, and `Custom PBR settings` toggles. However, if PBR settings are enabled as you start the preview, changes to specific PBR values will be updated on hot-reload.<br><br>


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Fading update frequency**  
Change how often distance-fade culling updates (times per second; 1-120; default: 10).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FoliageSwaying3D::SetFadingFrequency`.

**De/activate wind**  
Activate or deactivate the wind.

??? quote "See parameters & details"

    - Parameter 1 (❓ Yes or No): Enable wind gust

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FoliageSwaying3D::SetWindActivated`.

**Wind direction angle**  
Change the wind direction angle (default: 0).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FoliageSwaying3D::SetWindAngle`.

**De/activate wind gust**  
Activate or deactivate wind gust.

??? quote "See parameters & details"

    - Parameter 1 (❓ Yes or No): Enable wind gust

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FoliageSwaying3D::SetWindGustActivated`.

**Wind gust contrast**  
Change the sharpness/strength of gust mask transition (default: 1.6).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FoliageSwaying3D::SetWindGustContrast`.

**Wind gust scale**  
Change the wind gust noise/wave spatial scale, pattern size (default: 0.0005).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FoliageSwaying3D::SetWindGustScale`.

**Wind gust speed**  
Change the wind gust animation speed (default: 0.25).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FoliageSwaying3D::SetWindGustSpeed`.

**Wind gust strength scale**  
Change the wind gust strength multiplier (default: 3).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FoliageSwaying3D::SetWindGustStrenghtScale`.

**Wind gust texture**  
Change the image used for the wind gust map texture (optional; red channel drives gust mask).

??? quote "See parameters & details"

    - Parameter 1 (imageResource): Gust texture

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FoliageSwaying3D::SetWindGustTexture`.

**Wind gust threshold**  
Change where gust texture starts affecting motion (0-1, default: 0.28).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FoliageSwaying3D::SetWindGustThreshold`.

**Wind speed**  
Change the wind speed. It controls sway animation speed (default: 4).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FoliageSwaying3D::SetWindSpeed`.

**Wind strength**  
Change the wind strength. It controls how strong the sway is (default: 6).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FoliageSwaying3D::SetWindStrength`.


## Conditions

**Fading update frequency**  
Compare how often distance-fade culling updates (times per second; 1-120; default: 10).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FoliageSwaying3D::FadingFrequency`.

**Wind gust activated**  
Check if the wind gust activated.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FoliageSwaying3D::IsWindActivated`.

**Wind gust activated**  
Check if the wind gust activated.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FoliageSwaying3D::IsWindGustActivated`.

**Wind direction angle**  
Compare the wind direction angle (default: 0).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FoliageSwaying3D::WindAngle`.

**Wind gust contrast**  
Compare the sharpness/strength of gust mask transition (default: 1.6).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FoliageSwaying3D::WindGustContrast`.

**Wind gust scale**  
Compare the wind gust noise/wave spatial scale, pattern size (default: 0.0005).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FoliageSwaying3D::WindGustScale`.

**Wind gust speed**  
Compare the wind gust animation speed (default: 0.25).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FoliageSwaying3D::WindGustSpeed`.

**Wind gust strength scale**  
Compare the wind gust strength multiplier (default: 3).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FoliageSwaying3D::WindGustStrenghtScale`.

**Wind gust threshold**  
Compare where gust texture starts affecting motion (0-1, default: 0.28).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FoliageSwaying3D::WindGustThreshold`.

**Wind speed**  
Compare the wind speed. It controls sway animation speed (default: 4).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FoliageSwaying3D::WindSpeed`.

**Wind strength**  
Compare the wind strength. It controls how strong the sway is (default: 6).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FoliageSwaying3D::WindStrength`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `FoliageSwaying3D::FadingFrequency()` | Return how often distance-fade culling updates (times per second; 1-120; default: 10). ||
| `FoliageSwaying3D::WindAngle()` | Return the wind direction angle (default: 0). ||
| `FoliageSwaying3D::WindGustContrast()` | Return the sharpness/strength of gust mask transition (default: 1.6). ||
| `FoliageSwaying3D::WindGustScale()` | Return the wind gust noise/wave spatial scale, pattern size (default: 0.0005). ||
| `FoliageSwaying3D::WindGustSpeed()` | Return the wind gust animation speed (default: 0.25). ||
| `FoliageSwaying3D::WindGustStrenghtScale()` | Return the wind gust strength multiplier (default: 3). ||
| `FoliageSwaying3D::WindGustThreshold()` | Return where gust texture starts affecting motion (0-1, default: 0.28). ||
| `FoliageSwaying3D::WindSpeed()` | Return the wind speed. It controls sway animation speed (default: 4). ||
| `FoliageSwaying3D::WindStrength()` | Return the wind strength. It controls how strong the sway is (default: 6). ||

## Foliage swaying 

Sway foliage according to the wind. 

### Behavior properties

- **Ambient Occlusion strength** (🔢 Number). Ambient occlusion intensity (0-1; default: 1). Default value is `1`.
- **Bottom color** (🎨 Color). Bottom gradient color. Default value is `65;117;5`.
- **Color contrast** (🔢 Number). Color contrast multiplier (0-3; default: 1.05). Default value is `1.05`.
- **Color saturation** (🔢 Number). Color saturation multiplier (0-3; default: 1.2). Default value is `1.2`.
- **Culling mode** (Choice, one of: "UseSource", "BackfaceCullingOn", "BackfaceCullingOff"). 3D model face culling mode. Default value is `UseSource`.
- **Debug output** (🔘 Boolean). Prints material/mesh and auto-scale debug info to console (requires object to be in the scene; default: off). Default value is `false`.
- **Fade distance end** (🔢 Number, Distance). Distance where fade reaches zero. Requires enabled distance culling (0-100000; default: 1600). Default value is `1600`.
- **Fade distance start** (🔢 Number, Distance). Distance where fade-out starts. Requires enabled distance culling (0-100000; default: 1200). Default value is `1200`.
- **Environment strength** (🔢 Number). Environment reflection intensity (0-1; default: 1). Default value is `1`.
- **Gradient end** (🔢 Number). Gradient end point (0-1; default: 1). Default value is `1`.
- **Gradient start** (🔢 Number). Gradient start point (0-1; default: 0). Default value is `0`.
- **Ignore UV map** (🔘 Boolean). Uses world-height gradient instead of UV gradient (only when color grading is on; default: off). Default value is `false`.
- **Material to sway** (🔤 String). Material name to target (empty = auto-pick).
- **Metallic factor** (🔢 Number). PBR metallic value (0-1; default: 0). Default value is `0`.
- **Normal strength** (🔢 Number). Normal map strength (0-1; default: 1). Default value is `1`.
- **Roughness factor** (🔢 Number). PBR roughness value (0-1; default: 1). Default value is `1`.
- **Specular factor** (🔢 Number). Specular intensity (where supported; 0-1; default: 0.1). Default value is `0.1`.
- **Sway response** (🔢 Number). How much the object is deformed by the wind. For low-poly models use small number around 0.5. (0-200; 0 = auto). Default value is `0`.
- **Sway type** (Choice, one of: "Grass", "Leaves", "Bush", "TreeTrunk"). Wind animation model. Default value is `Grass`.
- **Top color** (🎨 Color). Top gradient color. Default value is `184;233;134`.
- **Use color gradient** (🔘 Boolean). Enables top/bottom gradient tint and color grading (default: off). Default value is `false`.
- **Custom PBR settings** (🔘 Boolean). Enables custom PBR tuning controls (default: off). Default value is `false`.
- **Distance culling** (🔘 Boolean). Enables distance-based dither fade/culling (default: off). Default value is `false`.
- **GPU instancing** (🔘 Boolean). Uses GPU instancing for supported sway types (better performance; default: off). Default value is `false`.
- **Use two sided lighting** (🔘 Boolean). If enabled, both frontface and backface are lit. Useful for planes/cards (default: on). Default value is `true`.
- **Enable uniform sway** (🔘 Boolean). If enabled, all instances sway similarly. If off, each gets random phase variation (default: on). Default value is `true`.

??? quote "See internal technical details"


    - **Ambient Occlusion strength** is stored as `AmbientOcclusionStrength` (Number). Default value is `1`.
    - **Bottom color** is stored as `BottomColor` (Color). Default value is `65;117;5`.
    - **Color contrast** is stored as `ColorContrast` (Number). Default value is `1.05`.
    - **Color saturation** is stored as `ColorSaturation` (Number). Default value is `1.2`.
    - **Culling mode** is stored as `CullingMode` (Choice). Default value is `UseSource`.
    - **Debug output** is stored as `DebugOutput` (Boolean). Default value is `false`.
    - **Fade distance end** is stored as `DistanceFadeEnd` (Number). Unit is Pixel. Default value is `1600`.
    - **Fade distance start** is stored as `DistanceFadeStart` (Number). Unit is Pixel. Default value is `1200`.
    - **Environment strength** is stored as `EnvironmentStrength` (Number). Default value is `1`.
    - **Gradient end** is stored as `GradientEnd` (Number). Default value is `1`.
    - **Gradient start** is stored as `GradientStart` (Number). Default value is `0`.
    - **Ignore UV map** is stored as `IgnoreUV` (Boolean). Default value is `false`.
    - **Material to sway** is stored as `MaterialName` (String). Default value is ``.
    - **Metallic factor** is stored as `Metallic` (Number). Default value is `0`.
    - **Normal strength** is stored as `NormalStrength` (Number). Default value is `1`.
    - **Roughness factor** is stored as `Roughness` (Number). Default value is `1`.
    - **Specular factor** is stored as `Specular` (Number). Default value is `0.1`.
    - **Sway response** is stored as `SwayResponse` (Number). Default value is `0`.
    - **Sway type** is stored as `SwayType` (Choice). Default value is `Grass`.
    - **Top color** is stored as `TopColor` (Color). Default value is `184;233;134`.
    - **Use color gradient** is stored as `UseColorGradient` (Boolean). Default value is `false`.
    - **Custom PBR settings** is stored as `UseCustomPBR` (Boolean). Default value is `false`.
    - **Distance culling** is stored as `UseDistanceFade` (Boolean). Default value is `false`.
    - **GPU instancing** is stored as `UseGPUInstancing` (Boolean). Default value is `false`.
    - **Use two sided lighting** is stored as `UseTwoSidedLighting` (Boolean). Default value is `true`.
    - **Enable uniform sway** is stored as `UseUniformSway` (Boolean). Default value is `true`.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **3D foliage swaying** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).