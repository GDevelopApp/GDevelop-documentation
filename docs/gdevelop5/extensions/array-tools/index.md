# Array tools

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Text Editing/9bfb52500e68d0fd164b1e30bc696e40566187245b80c345848379f40bb6fad7_Text Editing_bullet_points_list.svg" class="extension-icon"></img>
A collection of utilities and tools for working with arrays.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555).

---

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

**Index of number**  
Compare The index of the first variable that equals to a specific number in an array.

**Index of text**  
Compare The index of the first variable that equals to a specific text in an array.

**Last index of number**  
Compare The index of the last variable that equals to a specific number in an array.

**Last index of text**  
Compare The index of the last variable that equals to a specific text in an array.

**Array has number**  
Checks if an array contains a specific number.

**Array has string**  
Checks if an array contains a specific string.

**Index of number**  
Compare The index of the first variable that equals to a specific number in an array.

**Index of text**  
Compare The index of the first variable that equals to a specific text in an array.

**Last index of number**  
Compare The index of the last variable that equals to a specific number in an array.

**Last index of text**  
Compare The index of the last variable that equals to a specific text in an array.

**Get and remove last variable from array (as number)**  
Compare Removes the last array child of an array, and return it as a number.

**Random number in array**  
Compare Returns a random number of an array of numbers.

**Random string in array**  
Compare a random string of an array of strings.

**Get and remove last variable from array (as number)**  
Compare Removes the last array child of an array, and return it as a number.

**Random number in array**  
Compare Returns a random number of an array of numbers.

**Random string in array**  
Compare a random string of an array of strings.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `ArrayTools::IndexOf(variable, number)` | Return The index of the first variable that equals to a specific number in an array. ||
| | _🗄️ Any variable_ | Array to search the value in |
| | _🔢 Number_ | Number to search in the array |
| `ArrayTools::IndexOfStr(variable, string)` | Return The index of the first variable that equals to a specific text in an array. ||
| | _🗄️ Any variable_ | Array to search the value in |
| | _string_ | String to search in the array |
| `ArrayTools::Join(variable, string)` | Returns a string made from all strings in an array. ||
| | _🗄️ Any variable_ | The name of the array to join into a string |
| | _string_ | Optional separator text between each element |
| `ArrayTools::LastIndexOf(variable, number)` | Return The index of the last variable that equals to a specific number in an array. ||
| | _🗄️ Any variable_ | Array to search the value in |
| | _🔢 Number_ | Number to search in the array |
| `ArrayTools::LastIndexOfStr(variable, string)` | Return The index of the last variable that equals to a specific text in an array. ||
| | _🗄️ Any variable_ | Array to search the value in |
| | _string_ | String to search in the array |
| `ArrayTools::Max(variable)` | Gets the biggest number in an array. ||
| | _🗄️ Any variable_ | The array |
| `ArrayTools::Mean(variable)` | Gets the average number in an array. ||
| | _🗄️ Any variable_ | The array |
| `ArrayTools::Median(variable)` | Gets the median number in an array. ||
| | _🗄️ Any variable_ | The array |
| `ArrayTools::Min(variable)` | Gets the smallest number in an array. ||
| | _🗄️ Any variable_ | The array |
| `ArrayTools::ObjectIndexOf(object, object variable, number)` | Return The index of the first variable that equals to a specific number in an array. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | Array to search the value in |
| | _🔢 Number_ | Number to search in the array |
| `ArrayTools::ObjectIndexOfStr(object, object variable, string)` | Return The index of the first variable that equals to a specific text in an array. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | Array to search the value in |
| | _string_ | String to search in the array |
| `ArrayTools::ObjectJoin(object, object variable, string)` | Returns a string made from all strings in an array. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | The name of the array to join into a string |
| | _string_ | Optional separator text between each element |
| `ArrayTools::ObjectLastIndexOf(object, object variable, number)` | Return The index of the last variable that equals to a specific number in an array. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | Array to search the value in |
| | _🔢 Number_ | Number to search in the array |
| `ArrayTools::ObjectLastIndexOfStr(object, object variable, string)` | Return The index of the last variable that equals to a specific text in an array. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | Array to search the value in |
| | _string_ | String to search in the array |
| `ArrayTools::ObjectMax(object, object variable)` | Gets the biggest number in an array. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | The array |
| `ArrayTools::ObjectMean(object, object variable)` | Gets the average number in an array. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | The array |
| `ArrayTools::ObjectMedian(object, object variable)` | Gets the median number in an array. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | The array |
| `ArrayTools::ObjectMin(object, object variable)` | Gets the smallest number in an array. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | The array |
| `ArrayTools::ObjectPopNumber(object, object variable)` | Return Removes the last array child of an array, and return it as a number. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | Array to pop a child from |
| `ArrayTools::ObjectPopString(object, object variable)` | Removes the last array child of an array, and return it as a string. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | Array to pop a child from |
| `ArrayTools::ObjectRandomNumberInArray(object, object variable)` | Return Returns a random number of an array of numbers. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | Array to get a number from |
| `ArrayTools::ObjectRandomStringInArray(object, object variable)` | Return a random string of an array of strings. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | Array to get a string from |
| `ArrayTools::ObjectShiftNumber(object, object variable)` | Removes the first array child of an array, and return it as a number. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | Array to shift a child from |
| `ArrayTools::ObjectShiftString(object, object variable)` | Removes the first array child of an array, and return it as a string. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | Array to shift a child from |
| `ArrayTools::ObjectSum(object, object variable)` | Get the sum of all numbers in an array. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | The array |
| `ArrayTools::PopNumber(variable)` | Return Removes the last array child of an array, and return it as a number. ||
| | _🗄️ Any variable_ | Array to pop a child from |
| `ArrayTools::PopString(variable)` | Removes the last array child of an array, and return it as a string. ||
| | _🗄️ Any variable_ | Array to pop a child from |
| `ArrayTools::RandomNumberInArray(variable)` | Return Returns a random number of an array of numbers. ||
| | _🗄️ Any variable_ | Array to get a number from |
| `ArrayTools::RandomStringInArray(variable)` | Return a random string of an array of strings. ||
| | _🗄️ Any variable_ | Array to get a string from |
| `ArrayTools::ShiftNumber(variable)` | Removes the first array child of an array, and return it as a number. ||
| | _🗄️ Any variable_ | Array to shift a child from |
| `ArrayTools::ShiftString(variable)` | Removes the first array child of an array, and return it as a string. ||
| | _🗄️ Any variable_ | Array to shift a child from |
| `ArrayTools::Sum(variable)` | Get the sum of all numbers in an array. ||
| | _🗄️ Any variable_ | The array |

---

*This page is an auto-generated reference page about the **Array tools** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).