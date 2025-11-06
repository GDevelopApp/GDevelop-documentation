# Events and control flow Reference

GDevelop comes with a set of events and conditions that allow to express the game logic and rules. [Read more explanations about it.](/gdevelop5/all-features/advanced-conditions)

## Conditions

**And**  
Checks if all sub-conditions are true. If no sub-condition is specified, it will always be false. This is rarely needed, as events already check all conditions before running actions.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `BuiltinCommonInstructions::And`.

**Compare two numbers**  
Compare the two numbers.

??? quote "See parameters & details"

    - Parameter 0 (🔢 Number): First expression
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Second expression

    > Technical note: this condition internal type (in GDevelop JSON) is `BuiltinCommonInstructions::CompareNumbers`.

**Compare two strings**  
Compare the two strings.

??? quote "See parameters & details"

    - Parameter 0 (🔤 String): First string expression
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Second string expression

    > Technical note: this condition internal type (in GDevelop JSON) is `BuiltinCommonInstructions::CompareStrings`.

**Not**  
Returns the opposite of the sub-condition(s) result. This is rarely needed, as most conditions can be inverted or expressed more simply.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `BuiltinCommonInstructions::Not`.

**Trigger once while true**  
Run actions only once, for each time the conditions have been met.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `BuiltinCommonInstructions::Once`.

**Or**  
Checks if at least one sub-condition is true. If no sub-condition is specified, it will always be false. This is rarely used — multiple events and sub-events are usually a better approach.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: this condition internal type (in GDevelop JSON) is `BuiltinCommonInstructions::Or`.






---

The Events and control flow extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Events and control flow** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).