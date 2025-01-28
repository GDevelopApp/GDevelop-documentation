---
title: Trigger Once Condition
---
# Trigger Once Condition

When the "**Trigger once while true**" condition is used, the event actions are executed only once as long as the specified conditions are met.

## Simulating the "Trigger Once" Condition with Variables

The "trigger once" condition maintains a state that tracks whether the conditions above it were met in the previous frame. If the conditions are met:
- If the conditions were **previously met**, the actions are **not triggered**.
- If the conditions were **not previously met**, the actions are **triggered**.

The following event...

![](trigger-once-key-pressed.png)

...can be replicated using variables:

![](trigger-once-as-variables.png)

This example demonstrates how the "trigger once" condition functions. However, this is primarily to help understand its limitations, as explained in the next section.

## Triggering Actions Once Per Object Instance

The "trigger once" condition is **not evaluated per instance**. If at least one instance meets the conditions, the action will not be triggered for any other instances, even if they meet the conditions later. 

For example, if you want to play a "surprised" animation when the player gets close to an enemy, the "trigger once" condition may work if enemies are spaced far apart. However, if the player is already being chased by one enemy, other nearby enemies will not trigger the "surprised" animation.

To handle this, you need to use [object variables](/gdevelop5/all-features/variables/object-variables/) to track the state of each object instance individually. While boolean variables can be used, string variables are often clearer, especially when objects have more than two possible states.

![](trigger-once-as-fsm.png)

!!! info

    For a more detailed explanation, refer to the [finite state machines](/gdevelop5/tutorials/finite_state_machine) page.
