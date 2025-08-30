# Health points and damage

<img src="https://resources.gdevelop-app.com/assets/Icons/heart-half-full.svg" class="extension-icon"></img>
Manage health (life) points, shield and armor.

**Authors and contributors** to this community extension: [4ian](https://gd.games/4ian), [Muzan7](https://gd.games/Muzan7), [VictrisGames](https://gd.games/VictrisGames).

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

### Behavior actions

**Activate shield**  
Activate the shield by setting the shield points and renewing the shield duration (optional).

**Allow over-healing**  
Allow heals to increase health above max health.  Regeneration will not exceed max health.

**Heal object**  
Heal the object by increasing its health points.

**Apply damage to an object**  
Apply damage to the object. Shield and armor can reduce this damage if enabled.

**Renew shield duration**  
Renew shield duration to it's full value.

**Dodge chance**  
Change the chance to dodge incoming damage (range: 0 to 1).

**Damage cooldown**  
Change the duration of damage cooldown (seconds).

**Armor flat damage reduction**  
Change the flat damage reduction from the armor. Incoming damage is reduced by this value.

**Change health points**  
Change the health points of the object. Will not trigger damage cooldown.

**Health regeneration delay**  
Change the delay before health regeneration starts after last being hit (seconds).

**Rate of health regeneration**  
Change the rate of health regeneration (points per second).

**Maximum health points**  
Change the maximum health points of the object.

**Maximum shield points**  
Change the maximum shield points of the object.

**Armor percent damage reduction**  
Change the percent damage reduction from armor (range: 0 to 1).

**Block excess damage when shield breaks**  
Enable (or disable) blocking excess damage when shield breaks.

**Duration of shield**  
Change the duration of the shield (seconds). A value of "0" means the shield is permanent.

**Shield points**  
Change the current shield points of the object.

**Shield regeneration delay**  
Change the delay before shield regeneration starts after being hit (seconds).

**Rate of shield regeneration**  
Change the rate of shield regeneration (points per second).

**Trigger damage cooldown**  
Trigger damage cooldown.

### Behavior conditions

**Dodge chance**  
Compare the chance to dodge incoming damage (range: 0 to 1).

**Damage cooldown**  
Compare the duration of damage cooldown (seconds).

**Time remaining in damage cooldown**  
Compare the time before damage cooldown ends (seconds).

**Armor flat damage reduction**  
Compare the flat damage reduction from the armor. Incoming damage is reduced by this value.

**Health points**  
Compare current health points of the object.

**Health regeneration delay**  
Compare the delay before health regeneration starts after last being hit (seconds).

**Rate of health regeneration**  
Compare the rate of health regeneration (points per second).

**Is damage cooldown active**  
Check if damage cooldown is active. Object and shield cannot be damaged while this is active.

**Is dead**  
Check if the object is considered dead (no health points).

**Is health just damaged**  
Check if health was just damaged previously in the events.

**Damage was just dodged**  
Check if incoming damage was just dodged.

**Is just healed**  
Check if the object was just healed previously in the events.

**Is shield active**  
Check if the shield is active (based on shield points and duration).

**Is shield just damaged**  
Check if the shield was just damaged previously in the events.

**Maximum health points**  
Compare the maximum health points of the object.

**Maximum shield points**  
Compare the maximum shield points of the object.

**Armor percent damage reduction**  
Compare the percent damage reduction from armor (range: 0 to 1).

**Health damage taken from most recent hit**  
Compare the health damage taken from most recent hit.

**Shield damage taken from most recent hit**  
Compare the shield damage taken from most recent hit.

**Health points gained from previous heal**  
Compare the health points gained from previous heal.

**Duration of shield**  
Compare the duration of the shield (seconds). A value of "0" means the shield is permanent.

**Shield points**  
Compare the current shield points of the object.

**Shield regeneration delay**  
Compare the delay before shield regeneration starts after being hit (seconds).

**Rate of shield regeneration**  
Compare the rate of shield regeneration (points per second).

**Time before shield duration ends**  
Compare the time before the shield duration ends (seconds).

**Time since last hit**  
Compare the time since last taken hit (seconds).

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

*This page is an auto-generated reference page about the **Health points and damage** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).