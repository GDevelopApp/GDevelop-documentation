# 3D lights

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/f237ae4e3b857c556846c7b2c0b132556fd4bcdeff217034b4d9c97dc1aab1d6_lightbulb-on-outline.svg" class="extension-icon"></img>
A collection of light object for 3D.

**Authors and contributors** to this extension: [D8H](https://gd.games/D8H).

---

A collection of light object for 3D.

[Read more...](/gdevelop5/objects/3d-light)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Max lights count**  
Change the maximum number of nearest lights displayed simultaneously.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SetLightCountMax`.

**Max lights with shadow count**  
Change the maximum number of nearest lights displayed with shadow simultaneously.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SetLightShadowCountMax`.


## Conditions

**Max lights count**  
Compare the maximum number of nearest lights displayed simultaneously.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::LightCountMax`.

**Max lights with shadow count**  
Compare the maximum number of nearest lights displayed with shadow simultaneously.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::LightShadowCountMax`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Light3D::LightCountMax()` | Return the maximum number of nearest lights displayed simultaneously. ||
| `Light3D::LightShadowCountMax()` | Return the maximum number of nearest lights displayed with shadow simultaneously. ||

## 3D point light 

Light up in all directions like a fire. 

### Object properties

- **Color** (🎨 Color). Default value is `255;255;255`.
- **Intensity** (🔢 Number). Default value is `1`.
- **Decay** (🔢 Number). The amount the light dims along the distance of the light. Default value is `2`.
- **Shadow casting** (🔘 Boolean). Default value is `true`.
- **Shadow quality** (Choice, one of: "Low", "Medium", "High"). Default value is `Medium`.
- **Shadow camera near plane** (🔢 Number, Distance). Default value is `20`.
- **Shadow camera far plane** (🔢 Number, Distance). Default value is `2000`.
- **Range** (🔢 Number, Distance). 0 means no limit. Default value is `2000`.
- **Shadow Bias** (🔢 Number). Use this to avoid "shadow acne" due to depth buffer precision. Choose a value small enough like 0.001 to avoid creating distance between shadows and objects but not too small to avoid shadow glitches on low/medium quality. This value is used for high quality, and multiplied by 2 for medium quality and 4 for low quality. Default value is `0`.

??? quote "See internal technical details"


    - **Color** is stored as `Color` (Color). Default value is `255;255;255`.
    - **Intensity** is stored as `Intensity` (Number). Default value is `1`.
    - **Decay** is stored as `Decay` (Number). Default value is `2`.
    - **Shadow casting** is stored as `IsCastingShadow` (Boolean). Default value is `true`.
    - **Shadow quality** is stored as `ShadowQuality` (Choice). Default value is `Medium`.
    - **Shadow camera near plane** is stored as `ShadowCameraNearPlane` (Number). Unit is Pixel. Default value is `20`.
    - **Shadow camera far plane** is stored as `ShadowCameraFarPlane` (Number). Unit is Pixel. Default value is `2000`.
    - **Range** is stored as `Range` (Number). Unit is Pixel. Default value is `2000`.
    - **Shadow Bias** is stored as `ShadowBias` (Number). Default value is `0`.

### Object actions

**Shadow casting**  
Change if the light is casting shadows.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Shadow casting

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::PointLight3D::SetCastingShadow`.

**Color**  
Change the color of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🎨 Color): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::PointLight3D::SetColor`.

**Decay**  
Change the decay of the light. The amount the light dims along the distance of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::PointLight3D::SetDecay`.

**Intensity**  
Change the intensity of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::PointLight3D::SetIntensity`.

**Range**  
Change the range of the light. 0 means no limit.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::PointLight3D::SetRange`.

**Shadow bias**  
Change the shadow bias of the light. Use this to avoid "shadow acne" due to depth buffer precision. Choose a value small enough like 0.001 to avoid creating distance between shadows and objects but not too small to avoid shadow glitches on low/medium quality. This value is used for high quality, and multiplied by 2 for medium quality and 4 for low quality.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::PointLight3D::SetShadowBias`.

**Shadow camera far plane**  
Change the shadow camera far plane of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::PointLight3D::SetShadowCameraFarPlane`.

**Shadow camera near plane**  
Change the shadow camera near plane of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::PointLight3D::SetShadowCameraNearPlane`.

**Shadow quality**  
Change the shadow quality of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 String): Value (one of: "Low", "Medium", "High")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::PointLight3D::SetShadowQuality`.


### Object conditions

**Color**  
Compare the color of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🎨 Color): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::PointLight3D::Color`.

**Decay**  
Compare the decay of the light. The amount the light dims along the distance of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::PointLight3D::Decay`.

**Intensity**  
Compare the intensity of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::PointLight3D::Intensity`.

**Shadow casting**  
Check if the light is casting shadows.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::PointLight3D::IsCastingShadow`.

**Range**  
Compare the range of the light. 0 means no limit.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::PointLight3D::Range`.

**Shadow bias**  
Compare the shadow bias of the light. Use this to avoid "shadow acne" due to depth buffer precision. Choose a value small enough like 0.001 to avoid creating distance between shadows and objects but not too small to avoid shadow glitches on low/medium quality. This value is used for high quality, and multiplied by 2 for medium quality and 4 for low quality.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::PointLight3D::ShadowBias`.

**Shadow camera far plane**  
Compare the shadow camera far plane of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::PointLight3D::ShadowCameraFarPlane`.

**Shadow camera near plane**  
Compare the shadow camera near plane of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::PointLight3D::ShadowCameraNearPlane`.

**Shadow quality**  
Compare the shadow quality of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Value to compare (one of: "Low", "Medium", "High")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::PointLight3D::ShadowQuality`.


### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Color()` | Return the color of the light. ||
| `Object.Decay()` | Return the decay of the light. The amount the light dims along the distance of the light. ||
| `Object.Intensity()` | Return the intensity of the light. ||
| `Object.Range()` | Return the range of the light. 0 means no limit. ||
| `Object.ShadowBias()` | Return the shadow bias of the light. Use this to avoid "shadow acne" due to depth buffer precision. Choose a value small enough like 0.001 to avoid creating distance between shadows and objects but not too small to avoid shadow glitches on low/medium quality. This value is used for high quality, and multiplied by 2 for medium quality and 4 for low quality. ||
| `Object.ShadowCameraFarPlane()` | Return the shadow camera far plane of the light. ||
| `Object.ShadowCameraNearPlane()` | Return the shadow camera near plane of the light. ||
| `Object.ShadowQuality()` | Return the shadow quality of the light. ||

## 3D spot light 

Light up a cone like a flashlight. 

### Object properties

- **Color** (🎨 Color). Default value is `255;255;255`.
- **Cone angle** (🔢 Number, Angle). Default value is `30`.
- **Intensity** (🔢 Number). Default value is `1`.
- **Smoothing** (🔢 Number). Percent of the spotlight cone that is attenuated due to penumbra (between 0 and 1). Default value is `1`.
- **Decay** (🔢 Number). The amount the light dims along the distance of the light. Default value is `2`.
- **Shadow casting** (🔘 Boolean). Default value is `true`.
- **Shadow quality** (Choice, one of: "Low", "Medium", "High", "VeryHigh"). Default value is `Medium`.
- **Shadow camera near plane** (🔢 Number, Distance). Default value is `20`.
- **Shadow camera far plane** (🔢 Number, Distance). Default value is `2000`.
- **Cone length** (🔢 Number, Distance). 0 means no limit. Default value is `2000`.
- **Shadow bias** (🔢 Number). Use this to avoid "shadow acne" due to depth buffer precision. Choose a value small enough like 0.001 to avoid creating distance between shadows and objects but not too small to avoid shadow glitches on low/medium quality. This value is used for high quality, and multiplied by 2 for medium quality and 4 for low quality. Default value is `0`.

??? quote "See internal technical details"


    - **Color** is stored as `Color` (Color). Default value is `255;255;255`.
    - **Cone angle** is stored as `ConeAngle` (Number). Unit is DegreeAngle. Default value is `30`.
    - **Intensity** is stored as `Intensity` (Number). Default value is `1`.
    - **Smoothing** is stored as `Smoothing` (Number). Default value is `1`.
    - **Decay** is stored as `Decay` (Number). Default value is `2`.
    - **Shadow casting** is stored as `IsCastingShadow` (Boolean). Default value is `true`.
    - **Shadow quality** is stored as `ShadowQuality` (Choice). Default value is `Medium`.
    - **Shadow camera near plane** is stored as `ShadowCameraNearPlane` (Number). Unit is Pixel. Default value is `20`.
    - **Shadow camera far plane** is stored as `ShadowCameraFarPlane` (Number). Unit is Pixel. Default value is `2000`.
    - **Cone length** is stored as `ConeLength` (Number). Unit is Pixel. Default value is `2000`.
    - **Shadow bias** is stored as `ShadowBias` (Number). Default value is `0`.

### Object actions

**Look at object**  
Rotate the light to light up an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SpotLight3D::LookAtObject`.

**Look at position**  
Rotate the light to light up a position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): Target X
    - Parameter 2 (🔢 Number): Target Y
    - Parameter 3 (🔢 Number): Target Z

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SpotLight3D::LookAtPosition`.

**Shadow casting**  
Change if the light is casting shadows.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Shadow casting

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SpotLight3D::SetCastingShadow`.

**Color**  
Change the color of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🎨 Color): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SpotLight3D::SetColor`.

**Cone angle**  
Change the cone angle of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SpotLight3D::SetConeAngle`.

**Cone length**  
Change the cone length of the light. 0 means no limit.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SpotLight3D::SetConeLength`.

**Decay**  
Change the decay of the light. The amount the light dims along the distance of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SpotLight3D::SetDecay`.

**Intensity**  
Change the intensity of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SpotLight3D::SetIntensity`.

**Shadow bias**  
Change the shadow bias of the light. Use this to avoid "shadow acne" due to depth buffer precision. Choose a value small enough like 0.001 to avoid creating distance between shadows and objects but not too small to avoid shadow glitches on low/medium quality. This value is used for high quality, and multiplied by 2 for medium quality and 4 for low quality.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SpotLight3D::SetShadowBias`.

**Shadow camera far plane**  
Change the shadow camera far plane of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SpotLight3D::SetShadowCameraFarPlane`.

**Shadow camera near plane**  
Change the shadow camera near plane of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SpotLight3D::SetShadowCameraNearPlane`.

**Shadow quality**  
Change the shadow quality of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 String): Value (one of: "Low", "Medium", "High")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SpotLight3D::SetShadowQuality`.

**Smoothing**  
Change the smoothing of the light. Percent of the spotlight cone that is attenuated due to penumbra (between 0 and 1).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Light3D::SpotLight3D::SetSmoothing`.


### Object conditions

**Color**  
Compare the color of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🎨 Color): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::SpotLight3D::Color`.

**Cone angle**  
Compare the cone angle of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::SpotLight3D::ConeAngle`.

**Cone length**  
Compare the cone length of the light. 0 means no limit.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::SpotLight3D::ConeLength`.

**Decay**  
Compare the decay of the light. The amount the light dims along the distance of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::SpotLight3D::Decay`.

**Intensity**  
Compare the intensity of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::SpotLight3D::Intensity`.

**Shadow casting**  
Check if the light is casting shadows.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::SpotLight3D::IsCastingShadow`.

**Shadow bias**  
Compare the shadow bias of the light. Use this to avoid "shadow acne" due to depth buffer precision. Choose a value small enough like 0.001 to avoid creating distance between shadows and objects but not too small to avoid shadow glitches on low/medium quality. This value is used for high quality, and multiplied by 2 for medium quality and 4 for low quality.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::SpotLight3D::ShadowBias`.

**Shadow camera far plane**  
Compare the shadow camera far plane of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::SpotLight3D::ShadowCameraFarPlane`.

**Shadow camera near plane**  
Compare the shadow camera near plane of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::SpotLight3D::ShadowCameraNearPlane`.

**Shadow quality**  
Compare the shadow quality of the light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Value to compare (one of: "Low", "Medium", "High")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::SpotLight3D::ShadowQuality`.

**Smoothing**  
Compare the smoothing of the light. Percent of the spotlight cone that is attenuated due to penumbra (between 0 and 1).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Light3D::SpotLight3D::Smoothing`.


### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Color()` | Return the color of the light. ||
| `Object.ConeAngle()` | Return the cone angle of the light. ||
| `Object.ConeLength()` | Return the cone length of the light. 0 means no limit. ||
| `Object.Decay()` | Return the decay of the light. The amount the light dims along the distance of the light. ||
| `Object.Intensity()` | Return the intensity of the light. ||
| `Object.ShadowBias()` | Return the shadow bias of the light. Use this to avoid "shadow acne" due to depth buffer precision. Choose a value small enough like 0.001 to avoid creating distance between shadows and objects but not too small to avoid shadow glitches on low/medium quality. This value is used for high quality, and multiplied by 2 for medium quality and 4 for low quality. ||
| `Object.ShadowCameraFarPlane()` | Return the shadow camera far plane of the light. ||
| `Object.ShadowCameraNearPlane()` | Return the shadow camera near plane of the light. ||
| `Object.ShadowQuality()` | Return the shadow quality of the light. ||
| `Object.Smoothing()` | Return the smoothing of the light. Percent of the spotlight cone that is attenuated due to penumbra (between 0 and 1). ||


---

*This page is an auto-generated reference page about the **3D lights** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).