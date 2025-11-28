# Animated Score Counter

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/48ec8784eacd92181e4a3bde4755962b5f6edf986e624fc85ea423a31408450d_counter.svg" class="extension-icon"></img>
An animated score counter with an icon and a customisable font.

**Authors and contributors** to this experimental extension: [Bouh](https://gd.games/Bouh).

---

An animated score counter with an icon and a customisable font.

There are ready-to-use counters in the asset-store [score counters pack](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=score-counters-score-counters).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Animated Score Counter 

An animated score counter with an icon and a customisable font. 

### Object properties

- **Score** (🔢 Number, Dimensionless). Default score. Default value is `0`.
- **Increasing score sound** (🗂️ Resource).
- **Min baseline pitch** (🔢 Number). Default value is `0.7`.
- **Max baseline pitch** (🔢 Number). Default value is `0.8`.
- **Pitch factor** (🔢 Number). Default value is `1.01`.
- **Pitch reset timeout** (🔢 Number, Duration). Default value is `1`.

??? quote "See internal technical details"


    - **Score** is stored as `Score` (Number). Unit is Dimensionless. Default value is `0`.
    - **Increasing score sound** is stored as `IncreasingScoreSound` (Resource). Default value is ``.
    - **Min baseline pitch** is stored as `PitchBaselineMin` (Number). Default value is `0.7`.
    - **Max baseline pitch** is stored as `PitchBaselineMax` (Number). Default value is `0.8`.
    - **Pitch factor** is stored as `PitchFactor` (Number). Default value is `1.01`.
    - **Pitch reset timeout** is stored as `PitchTimeout` (Number). Unit is Second. Default value is `1`.

### Object actions

**Score**  
Change the score of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScoreCounter::ScoreCounter::SetScore`.


### Object conditions

**Score**  
Compare the score of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ScoreCounter::ScoreCounter::Score`.


### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Score()` | Return the score of the object. ||


---

*This page is an auto-generated reference page about the **Animated Score Counter** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).