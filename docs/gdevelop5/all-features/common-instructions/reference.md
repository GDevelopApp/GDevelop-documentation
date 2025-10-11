# Events and control flow Reference

GDevelop comes with a set of events and conditions that allow to express the game logic and rules. [Read more explanations about it.](/gdevelop5/all-features/advanced-conditions)

## Conditions

**And**
Checks if all sub-conditions are true. If no sub-condition is specified, it will always be false. This is rarely needed, as events already check all conditions before running actions.

**Compare two numbers**
Compare the two numbers.

??? quote "See parameters"

    - Parameter 0 (🔢 Number): First expression
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Second expression

**Compare two strings**
Compare the two strings.

??? quote "See parameters"

    - Parameter 0 (string): First string expression
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Second string expression

**Not**
Returns the opposite of the sub-condition(s) result. This is rarely needed, as most conditions can be inverted or expressed more simply.

**Trigger once while true**
Run actions only once, for each time the conditions have been met.

**Or**
Checks if at least one sub-condition is true. If no sub-condition is specified, it will always be false. This is rarely used — multiple events and sub-events are usually a better approach.





---

The Events and control flow extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Events and control flow** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).