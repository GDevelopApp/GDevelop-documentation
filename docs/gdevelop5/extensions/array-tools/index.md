# Array tools

<img src="https://resources.gdevelop-app.com/assets/Icons/code-array.svg" class="extension-icon"></img>
A collection of utilities and tools for working with arrays.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555).

---

> Note: This extension is currently made in JavaScript instead of the event sheet as variables cannot be passed to events based functions yet. Due to this hack, the extension **only works on root scene variables**, not on child variables or non-scene variables.

This extension adds features like:

- Combining arrays (concatenate into new array, append all children to another array)
- Finding a value in an array (find index expression, contains condition)
- Reversing arrays
- Get a portion of an array (slice)
- Add and remove lots of children at specific indices at once (fill, splice, shift, pop, add at index)
- Randomness (shuffle children, get a random child)
- Mathematical operations using arrays (sum of all numbers, biggest/smallest number, average number, median number)
- Sort numbers in an array
- String inter-operation (split string into array, join array array children to string)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Append all variable to another array**  
Appends a copy of all variables of one array to another array.

**Combine 2 arrays**  
Combines all elements of 2 scene arrays into one new scene array.

**Fill array with number**  
Fill an element with a number.

**Flatten array**  
Replaces all arrays inside of an array with their children. For example, [[1,2], [3,4]] becomes [1,2,3,4].

**Insert variable at**  
Insert a variable at a specific index of an array.

**Pop array child**  
Removes the last array child of an array, and stores it in another variable.

**Reverse an array**  
Reverses children of an array. The first array child becomes the last, and the last array child becomes the first.

**Shift array child**  
Removes the first array child of an array, and stores it in another variable.

**Shuffle array**  
Shuffles all children of an array.

**Slice an array**  
Copies a portion of a scene array variable into a new scene array variable.

**Sort an array**  
Sort an array of number from smallest to biggest.

**Splice an array**  
Cuts a portion of an array off.

**Split string into array**  
Split a string into an array of strings via a separator.

## Conditions

**Array has number**  
Checks if an array contains a specific number.

**Array has string**  
Checks if an array contains a specific string.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `ArrayTools::GetRandomNumber(string)` | Returns a random number of an array of numbers. ||
| | _string_ | The name of the scene array variable |
| `ArrayTools::GetRandomString(string)` | Returns a random string of an array of strings. ||
| | _string_ | The name of the scene array variable |
| `ArrayTools::IndexOf(string, number)` | The index of the first variable that equals to a specific number in an array. ||
| | _string_ | The name of the scene array variable |
| | _🔢 Number_ | The number to search in the array |
| `ArrayTools::IndexOfStr(string, string)` | The index of the first variable that equals to a specific text in an array. ||
| | _string_ | The name of the scene array variable |
| | _string_ | The string to search in the array |
| `ArrayTools::Join(string, string)` | Returns a string made from all strings in an array. ||
| | _string_ | The name of the array to join into a string |
| | _string_ | Optional separator text between each element |
| `ArrayTools::LastIndexOf(string, number)` | The index of the last variable that equals to a specific number in an array. ||
| | _string_ | The name of the scene array variable |
| | _🔢 Number_ | The number to search in the array |
| `ArrayTools::LastIndexOfStr(string, string)` | The index of the last variable that equals to a specific text in an array. ||
| | _string_ | The name of the scene array variable |
| | _string_ | The string to search in the array |
| `ArrayTools::Max(string)` | Gets the biggest number in an array. ||
| | _string_ | The array |
| `ArrayTools::Mean(string)` | Gets the average number in an array. ||
| | _string_ | The array |
| `ArrayTools::Median(string)` | Gets the median number in an array. ||
| | _string_ | The array |
| `ArrayTools::Min(string)` | Gets the smallest number in an array. ||
| | _string_ | The array |
| `ArrayTools::PopNumber(string)` | Removes the last array child of an array, and return it as a number. ||
| | _string_ | The array to pop a child from |
| `ArrayTools::PopString(string)` | Removes the last array child of an array, and return it as a string. ||
| | _string_ | The array to pop a child from |
| `ArrayTools::ShiftNumber(string)` | Removes the first array child of an array, and return it as a number. ||
| | _string_ | The array to shift a child from |
| `ArrayTools::ShiftString(string)` | Removes the first array child of an array, and return it as a string. ||
| | _string_ | The array to shift a child from |
| `ArrayTools::Sum(string)` | Get the sum of all numbers in an array. ||
| | _string_ | The name of the array |

---

*This page is an auto-generated reference page about the **Array tools** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).