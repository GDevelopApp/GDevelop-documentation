---
title: Health points and damage
---
# Health points and damage

![](https://resources.gdevelop-app.com/assets/Icons/heart-half-full.svg)
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

---

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

*This page is an auto-generated reference page about the **Health points and damage** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).