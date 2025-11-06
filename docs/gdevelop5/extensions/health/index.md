# Health points and damage

<img src="https://resources.gdevelop-app.com/assets/Icons/heart-half-full.svg" class="extension-icon"></img>
Manage health (life) points, shield and armor.

**Authors and contributors** to this experimental extension: [4ian](https://gd.games/4ian), [Muzan7](https://gd.games/Muzan7), [VictrisGames](https://gd.games/VictrisGames).

---

Manage health (life) points, shield and armor of instances of an object. 

It handles:

- Damage cooldown
- Health and shield regeneration
- Over healing

It can be used on:

- Players
- Enemies
- NPCs
- Inanimate objects (for insance breakable doors or mining rocks)

The top-down RPG example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://top-down-rpg)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Health 

Manage health (life) points, shield and armor. 

### Behavior properties

- **Allow heals to increase health above max health (regen will never exceed max health)** (🔘 Boolean). Default value is `false`.
- **Block excess damage when shield is broken** (🔘 Boolean). Default value is `false`.
- **Chance to dodge incoming damage (between 0 and 1)** (🔢 Number). When a damage is dodged, no damage is applied. Default value is `0`.
- **Damage cooldown** (🔢 Number, Duration). Default value is `0`.
- **Flat damage reduction from armor** (🔢 Number). Incoming damages are reduced by this value. Default value is `0`.
- **Starting health** (🔢 Number). Default value is `100`.
- **Health regeneration delay ** (🔢 Number, Duration). Delay before health regeneration starts after a hit. Default value is `0`.
- **Rate of health regeneration (points per second)** (🔢 Number). Default value is `0`.
- **Maximum health** (🔢 Number). Use 0 for no maximum. Default value is `100`.
- **Maximum shield** (🔢 Number). Leave 0 for unlimited. Default value is `0`.
- **Percentage damage reduction from armor (between 0 and 1)** (🔢 Number). Default value is `0`.
- **Duration of shield** (🔢 Number, Duration). Use 0 to make the shield permanent. Default value is `5`.
- **Shield regeneration delay** (🔢 Number, Duration). Delay before shield regeneration starts after a hit. Default value is `0`.
- **Rate of shield regeneration (points per second)** (🔢 Number). Default value is `0`.

??? quote "See internal technical details"


    - **Allow heals to increase health above max health (regen will never exceed max health)** is stored as `AllowOverHealing` (Boolean). Default value is `false`.
    - **Block excess damage when shield is broken** is stored as `BlockExcessDamage` (Boolean). Default value is `false`.
    - **Chance to dodge incoming damage (between 0 and 1)** is stored as `ChanceToDodge` (Number). Default value is `0`.
    - **Damage cooldown** is stored as `DamageCooldown` (Number). Unit is Second. Default value is `0`.
    - **Flat damage reduction from armor** is stored as `FlatDamageReduction` (Number). Default value is `0`.
    - **Starting health** is stored as `Health` (Number). Default value is `100`.
    - **Health regeneration delay ** is stored as `HealthRegenDelay` (Number). Unit is Second. Default value is `0`.
    - **Rate of health regeneration (points per second)** is stored as `HealthRegenRate` (Number). Default value is `0`.
    - **Maximum health** is stored as `MaxHealth` (Number). Default value is `100`.
    - **Maximum shield** is stored as `MaxShieldPoints` (Number). Default value is `0`.
    - **Percentage damage reduction from armor (between 0 and 1)** is stored as `PercentDamageReduction` (Number). Default value is `0`.
    - **Duration of shield** is stored as `ShieldDuration` (Number). Unit is Second. Default value is `5`.
    - **Shield regeneration delay** is stored as `ShieldRegenDelay` (Number). Unit is Second. Default value is `0`.
    - **Rate of shield regeneration (points per second)** is stored as `ShieldRegenRate` (Number). Default value is `0`.

### Behavior actions

**Activate shield**  
Activate the shield by setting the shield points and renewing the shield duration (optional).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Shield points
    - Parameter 3 (❓ Yes or No): Renew shield duration

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::ActivateShield`.

**Allow over-healing**  
Allow heals to increase health above max health.  Regeneration will not exceed max health.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Allow over-healing

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::AllowOverHealing`.

**Heal object**  
Heal the object by increasing its health points.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Points to heal (will be added to object health)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::Heal`.

**Apply damage to an object**  
Apply damage to the object. Shield and armor can reduce this damage if enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Points of damage
    - Parameter 3 (❓ Yes or No): Shield can reduce damage taken
    - Parameter 4 (❓ Yes or No): Armor can reduce damage taken

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::Hit`.

**Renew shield duration**  
Renew shield duration to it's full value.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::RenewShieldDuration`.

**Dodge chance**  
Change the chance to dodge incoming damage (range: 0 to 1).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetChanceToDodgeOp`.

**Damage cooldown**  
Change the duration of damage cooldown (seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetCooldownDurationOp`.

**Armor flat damage reduction**  
Change the flat damage reduction from the armor. Incoming damage is reduced by this value.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetFlatDamageReductionOp`.

**Change health points**  
Change the health points of the object. Will not trigger damage cooldown.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): New health value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetHealth`.

**Health regeneration delay**  
Change the delay before health regeneration starts after last being hit (seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetHealthRegenDelayOp`.

**Rate of health regeneration**  
Change the rate of health regeneration (points per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetHealthRegenRateOp`.

**Maximum health points**  
Change the maximum health points of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetMaxHealthOp`.

**Maximum shield points**  
Change the maximum shield points of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetMaxShieldOp`.

**Armor percent damage reduction**  
Change the percent damage reduction from armor (range: 0 to 1).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetPercentDamageReductionOp`.

**Block excess damage when shield breaks**  
Enable (or disable) blocking excess damage when shield breaks.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Block excess damage

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetShieldBlockExcessDamage`.

**Duration of shield**  
Change the duration of the shield (seconds). A value of "0" means the shield is permanent.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetShieldDurationOp`.

**Shield points**  
Change the current shield points of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetShieldPointsOp`.

**Shield regeneration delay**  
Change the delay before shield regeneration starts after being hit (seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetShieldRegenDelayOp`.

**Rate of shield regeneration**  
Change the rate of shield regeneration (points per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::SetShieldRegenRateOp`.

**Trigger damage cooldown**  
Trigger damage cooldown.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Health::Health::TriggerDamageCooldown`.


### Behavior conditions

**Dodge chance**  
Compare the chance to dodge incoming damage (range: 0 to 1).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::ChanceToDodge`.

**Damage cooldown**  
Compare the duration of damage cooldown (seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::DamageCooldownDuration`.

**Time remaining in damage cooldown**  
Compare the time before damage cooldown ends (seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::DamageCooldownRemaining`.

**Armor flat damage reduction**  
Compare the flat damage reduction from the armor. Incoming damage is reduced by this value.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::FlatDamageReduction`.

**Health points**  
Compare current health points of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::Health`.

**Health regeneration delay**  
Compare the delay before health regeneration starts after last being hit (seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::HealthRegenDelay`.

**Rate of health regeneration**  
Compare the rate of health regeneration (points per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::HealthRegenRate`.

**Is damage cooldown active**  
Check if damage cooldown is active. Object and shield cannot be damaged while this is active.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::IsDamageCooldownActive`.

**Is dead**  
Check if the object is considered dead (no health points).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::IsDead`.

**Is health just damaged**  
Check if health was just damaged previously in the events.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::IsJustDamaged`.

**Damage was just dodged**  
Check if incoming damage was just dodged.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::IsJustDodged`.

**Is just healed**  
Check if the object was just healed previously in the events.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::IsJustHealed`.

**Is shield active**  
Check if the shield is active (based on shield points and duration).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::IsShieldActive`.

**Is shield just damaged**  
Check if the shield was just damaged previously in the events.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::IsShieldJustDamaged`.

**Maximum health points**  
Compare the maximum health points of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::MaxHealth`.

**Maximum shield points**  
Compare the maximum shield points of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::MaxShield`.

**Armor percent damage reduction**  
Compare the percent damage reduction from armor (range: 0 to 1).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::PercentDamageReduction`.

**Health damage taken from most recent hit**  
Compare the health damage taken from most recent hit.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::PreviousDamageTaken`.

**Shield damage taken from most recent hit**  
Compare the shield damage taken from most recent hit.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::PreviousDamageToShield`.

**Health points gained from previous heal**  
Compare the health points gained from previous heal.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::PreviousHealAmount`.

**Duration of shield**  
Compare the duration of the shield (seconds). A value of "0" means the shield is permanent.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::ShieldDuration`.

**Shield points**  
Compare the current shield points of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::ShieldPoints`.

**Shield regeneration delay**  
Compare the delay before shield regeneration starts after being hit (seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::ShieldRegenDelay`.

**Rate of shield regeneration**  
Compare the rate of shield regeneration (points per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::ShieldRegenRate`.

**Time before shield duration ends**  
Compare the time before the shield duration ends (seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::ShieldTimeRemaining`.

**Time since last hit**  
Compare the time since last taken hit (seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Health::Health::TimeSinceLastHit`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Health::ChanceToDodge()` | Return the chance to dodge incoming damage (range: 0 to 1). ||
| `Object.Health::DamageCooldownDuration()` | Return the duration of damage cooldown (seconds). ||
| `Object.Health::DamageCooldownRemaining()` | Return the time before damage cooldown ends (seconds). ||
| `Object.Health::FlatDamageReduction()` | Return the flat damage reduction from the armor. Incoming damage is reduced by this value. ||
| `Object.Health::Health()` | Return current health points of the object. ||
| `Object.Health::HealthRegenDelay()` | Return the delay before health regeneration starts after last being hit (seconds). ||
| `Object.Health::HealthRegenRate()` | Return the rate of health regeneration (points per second). ||
| `Object.Health::MaxHealth()` | Return the maximum health points of the object. ||
| `Object.Health::MaxShield()` | Return the maximum shield points of the object. ||
| `Object.Health::PercentDamageReduction()` | Return the percent damage reduction from armor (range: 0 to 1). ||
| `Object.Health::PreviousDamageTaken()` | Return the health damage taken from most recent hit. ||
| `Object.Health::PreviousDamageToShield()` | Return the shield damage taken from most recent hit. ||
| `Object.Health::PreviousHealAmount()` | Return the health points gained from previous heal. ||
| `Object.Health::ShieldDuration()` | Return the duration of the shield (seconds). A value of "0" means the shield is permanent. ||
| `Object.Health::ShieldPoints()` | Return the current shield points of the object. ||
| `Object.Health::ShieldRegenDelay()` | Return the delay before shield regeneration starts after being hit (seconds). ||
| `Object.Health::ShieldRegenRate()` | Return the rate of shield regeneration (points per second). ||
| `Object.Health::ShieldTimeRemaining()` | Return the time before the shield duration ends (seconds). ||
| `Object.Health::TimeSinceLastHit()` | Return the time since last taken hit (seconds). ||


---

*This page is an auto-generated reference page about the **Health points and damage** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).