# Health points and damage

<img src="https://resources.gdevelop-app.com/assets/Icons/heart-half-full.svg" class="extension-icon"></img>
Manage health points and damage, including a protective shield and armor.

**Authors and contributors** to this community extension: [4ian](https://gd.games/4ian), [Mixen](https://gd.games/Mixen), [VictrisGames](https://gd.games/VictrisGames).

---

Manage health points including a protective shield and armor. Health can be assigned to players, enemies, NPCs, or even inanimate objects such as breaking doors and mining rocks.

Damage calculations are performed in this order:

Incoming Damage -> Is Damage Cooldown active? -> Chance to Dodge -> Flat Damage Reduction -> Percent Damage Reduction -> Damage to Shield -> Damage to Health

How to use:


- Set desired values in behavior properties
- To apply damage use “Apply damage to an object”
- To heal health, use “Heal object” action
- To activate the shield, use “Activate shield” action
- Health and shield regeneration will happen automatically based on properties
 
Tips:


- While damage cooldown is active, no damage will be applied to health or shield (the object is invincible)
- Try using the “Blink” extension while damage cooldown is active
- Use the “Is just damaged” or "Is just healed" conditions to trigger sound and visual effects

Health properties:


- Starting health points
- Maximum health points. Use "0" for no maximum
- Damage cooldown (seconds) Use "0" for no cooldown
- Rate of health regeneration (points per second)
- Delay before health regeneration starts after being hit (seconds)
- Allow heals to increase health above max health (regen will never exceed max health)

Shield properties:


- Max shield points. Use "0" for no maximum
- Duration of shield (seconds) Use "0" to make shield permanent
- Rate of shield regeneration (points per second)
- Delay before shield regeneration starts after being hit (seconds)
- Block excess damage when shield is broken (yes/no)

The top-down RPG example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://top-down-rpg)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Health 

Manage health (life) points including a protective shield and armor. 

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

**Chance to dodge incoming damage (deprecated)**  
Change the chance to dodge incoming damage.

**Dodge chance**  
Change the chance to dodge incoming damage (range: 0 to 1).

**Damage cooldown (deprecated)**  
Change the duration of damage cooldown (seconds).

**Damage cooldown**  
Change the duration of damage cooldown (seconds).

**Change health points (deprecated)**  
Change the health points of the object. Will not trigger damage cooldown.

**Flat damage reduction from armor (deprecated)**  
Change the flat damage reduction from armor. Incoming damage is reduced by this value.

**Armor flat damage reduction**  
Change the flat damage reduction from the armor. Incoming damage is reduced by this value.

**Change health points**  
Change the health points of the object. Will not trigger damage cooldown.

**Health regeneration delay (deprecated)**  
Change the delay before health regeneration starts after being hit.

**Health regeneration delay**  
Change the delay before health regeneration starts after last being hit (seconds).

**Rate of health regeneration (deprecated)**  
Change the rate of health regeneration.

**Rate of health regeneration**  
Change the rate of health regeneration (points per second).

**Mark object as hit at least once**  
Mark object as hit at least once.

**Mark object as just damaged**  
Mark object as just damaged.

**Maximum health points (deprecated)**  
Change the object maximum health points.

**Maximum health points**  
Change the maximum health points of the object.

**Maximum shield points (deprecated)**  
Change the maximum shield points of the object.

**Maximum shield points**  
Change the maximum shield points of the object.

**Max shield points (deprecated)**  
Change maximum shield points.

**Percent damage reduction from armor (deprecated)**  
Change the percent damage reduction from armor. Range: 0 to 1.

**Armor percent damage reduction**  
Change the percent damage reduction from armor (range: 0 to 1).

**Allow heals to increase health above max health (regen will never exceed max health) property**  
Update the property value for "allow heals to increase health above max health (regen will never exceed max health)".

**Block excess damage when shield is broken property**  
Update the property value for "block excess damage when shield is broken".

**Chance to dodge incoming damage (Range: 0 to 1) property**  
Change the property value for the chance to dodge incoming damage (Range: 0 to 1).

**Current health (life) points property**  
Change the property value for the current health (life) points.

**Current shield points property**  
Change the property value for the current shield points.

**Damage cooldown property**  
Change the property value for the damage cooldown.

**Damage to health from the previous incoming damage property**  
Change the property value for the damage to health from the previous incoming damage.

**Flat damage reduction from armor property**  
Change the property value for the flat damage reduction from armor.

**Health points gained from the previous heal property**  
Change the property value for the health points gained from the previous heal.

**Starting health (life) points property**  
Change the property value for the starting health (life) points.

**Delay before health regeneration starts after being hit property**  
Change the property value for the delay before health regeneration starts after being hit.

**Rate of health regeneration (points per second) property**  
Change the property value for the rate of health regeneration (points per second).

**HitAtLeastOnce property**  
Update the property value for "hitAtLeastOnce".

**IsHealthJustDamaged property**  
Update the property value for "isHealthJustDamaged".

**IsJustDodged property**  
Update the property value for "isJustDodged".

**IsJustHealed property**  
Update the property value for "isJustHealed".

**IsShieldJustDamaged property**  
Update the property value for "isShieldJustDamaged".

**Maximum health (points) Use "0" for no maximum property**  
Change the property value for the maximum health (points) Use "0" for no maximum.

**Maximum shield (points) property**  
Change the property value for the maximum shield (points).

**Percentage damage reduction from armor (Range: 0 to 1) property**  
Change the property value for the percentage damage reduction from armor (Range: 0 to 1).

**Damage to shield from the previous incoming damage property**  
Change the property value for the damage to shield from the previous incoming damage.

**Duration of shield property**  
Change the property value for the duration of shield.

**Delay before shield regeneration starts after being hit property**  
Change the property value for the delay before shield regeneration starts after being hit.

**Rate of shield regeneration (points per second) property**  
Change the property value for the rate of shield regeneration (points per second).

**Block excess damage when shield breaks**  
Enable (or disable) blocking excess damage when shield breaks.

**Duration of shield (deprecated)**  
Change duration of shield. Use "0" to make shield permanent.

**Duration of shield**  
Change the duration of the shield (seconds). A value of "0" means the shield is permanent.

**Shield points (deprecated)**  
Change current shield points. Will not trigger damage cooldown.

**Shield points**  
Change the current shield points of the object.

**Shield regeneration delay (deprecated)**  
Change delay before shield regeneration starts after being hit.

**Shield regeneration delay**  
Change the delay before shield regeneration starts after being hit (seconds).

**Shield regeneration rate (deprecated)**  
Change rate of shield regeneration.

**Rate of shield regeneration**  
Change the rate of shield regeneration (points per second).

**Toggle Allow heals to increase health above max health (regen will never exceed max health) property**  
Toggle the property value for allow heals to increase health above max health (regen will never exceed max health).  
If it was true, it will become false, and if it was false it will become true.

**Toggle Block excess damage when shield is broken property**  
Toggle the property value for block excess damage when shield is broken.  
If it was true, it will become false, and if it was false it will become true.

**Toggle HitAtLeastOnce property**  
Toggle the property value for hitAtLeastOnce.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsHealthJustDamaged property**  
Toggle the property value for isHealthJustDamaged.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsJustDodged property**  
Toggle the property value for isJustDodged.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsJustHealed property**  
Toggle the property value for isJustHealed.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsShieldJustDamaged property**  
Toggle the property value for isShieldJustDamaged.  
If it was true, it will become false, and if it was false it will become true.

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

**Object has been hit at least once**  
Check if the object has been hit at least once.

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

**Allow heals to increase health above max health (regen will never exceed max health) property**  
Check the property value for allow heals to increase health above max health (regen will never exceed max health).

**Block excess damage when shield is broken property**  
Check the property value for block excess damage when shield is broken.

**Chance to dodge incoming damage (Range: 0 to 1) property**  
Compare the property value for the chance to dodge incoming damage (Range: 0 to 1).

**Current health (life) points property**  
Compare the property value for the current health (life) points.

**Current shield points property**  
Compare the property value for the current shield points.

**Damage cooldown property**  
Compare the property value for the damage cooldown.

**Damage to health from the previous incoming damage property**  
Compare the property value for the damage to health from the previous incoming damage.

**Flat damage reduction from armor property**  
Compare the property value for the flat damage reduction from armor.

**Health points gained from the previous heal property**  
Compare the property value for the health points gained from the previous heal.

**Starting health (life) points property**  
Compare the property value for the starting health (life) points.

**Delay before health regeneration starts after being hit property**  
Compare the property value for the delay before health regeneration starts after being hit.

**Rate of health regeneration (points per second) property**  
Compare the property value for the rate of health regeneration (points per second).

**HitAtLeastOnce property**  
Check the property value for hitAtLeastOnce.

**IsHealthJustDamaged property**  
Check the property value for isHealthJustDamaged.

**IsJustDodged property**  
Check the property value for isJustDodged.

**IsJustHealed property**  
Check the property value for isJustHealed.

**IsShieldJustDamaged property**  
Check the property value for isShieldJustDamaged.

**Maximum health (points) Use "0" for no maximum property**  
Compare the property value for the maximum health (points) Use "0" for no maximum.

**Maximum shield (points) property**  
Compare the property value for the maximum shield (points).

**Percentage damage reduction from armor (Range: 0 to 1) property**  
Compare the property value for the percentage damage reduction from armor (Range: 0 to 1).

**Damage to shield from the previous incoming damage property**  
Compare the property value for the damage to shield from the previous incoming damage.

**Duration of shield property**  
Compare the property value for the duration of shield.

**Delay before shield regeneration starts after being hit property**  
Compare the property value for the delay before shield regeneration starts after being hit.

**Rate of shield regeneration (points per second) property**  
Compare the property value for the rate of shield regeneration (points per second).

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
| `Object.Health::PropertyChanceToDodge()` | Return the property value for the chance to dodge incoming damage (Range: 0 to 1). ||
| `Object.Health::PropertyCurrentHealth()` | Return the property value for the current health (life) points. ||
| `Object.Health::PropertyCurrentShieldPoints()` | Return the property value for the current shield points. ||
| `Object.Health::PropertyDamageCooldown()` | Return the property value for the damage cooldown. ||
| `Object.Health::PropertyDamageToBeApplied()` | Return the property value for the damage to health from the previous incoming damage. ||
| `Object.Health::PropertyFlatDamageReduction()` | Return the property value for the flat damage reduction from armor. ||
| `Object.Health::PropertyHealToBeApplied()` | Return the property value for the health points gained from the previous heal. ||
| `Object.Health::PropertyHealth()` | Return the property value for the starting health (life) points. ||
| `Object.Health::PropertyHealthRegenDelay()` | Return the property value for the delay before health regeneration starts after being hit. ||
| `Object.Health::PropertyHealthRegenRate()` | Return the property value for the rate of health regeneration (points per second). ||
| `Object.Health::PropertyMaxHealth()` | Return the property value for the maximum health (points) Use "0" for no maximum. ||
| `Object.Health::PropertyMaxShieldPoints()` | Return the property value for the maximum shield (points). ||
| `Object.Health::PropertyPercentDamageReduction()` | Return the property value for the percentage damage reduction from armor (Range: 0 to 1). ||
| `Object.Health::PropertyShieldDamageTaken()` | Return the property value for the damage to shield from the previous incoming damage. ||
| `Object.Health::PropertyShieldDuration()` | Return the property value for the duration of shield. ||
| `Object.Health::PropertyShieldRegenDelay()` | Return the property value for the delay before shield regeneration starts after being hit. ||
| `Object.Health::PropertyShieldRegenRate()` | Return the property value for the rate of shield regeneration (points per second). ||
| `Object.Health::ShieldDuration()` | Return the duration of the shield (seconds). A value of "0" means the shield is permanent. ||
| `Object.Health::ShieldPoints()` | Return the current shield points of the object. ||
| `Object.Health::ShieldRegenDelay()` | Return the delay before shield regeneration starts after being hit (seconds). ||
| `Object.Health::ShieldRegenRate()` | Return the rate of shield regeneration (points per second). ||
| `Object.Health::ShieldTimeRemaining()` | Return the time before the shield duration ends (seconds). ||
| `Object.Health::TimeSinceLastHit()` | Return the time since last taken hit (seconds). ||

---

*This page is an auto-generated reference page about the **Health points and damage** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).