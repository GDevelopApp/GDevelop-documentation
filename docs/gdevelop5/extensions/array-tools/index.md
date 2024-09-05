# Array tools

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Text Editing/9bfb52500e68d0fd164b1e30bc696e40566187245b80c345848379f40bb6fad7_Text Editing_bullet_points_list.svg" class="extension-icon"></img>
A collection of utilities and tools for working with arrays.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555).

---

> Note: The v2.0.0 is not compatible with v1.0.0. If you update, you wil have to update ALL USAGES of the extension.

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

**Get and remove last variable from array (as number)**  
Compare Removes the last array child of an array, and return it as a number.

**Random number in array**  
Compare Returns a random number of an array of numbers.

**Random string in array**  
Compare a random string of an array of strings.

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
| `ArrayTools::GlobalIndexOf()` | Return The index of the first variable that equals to a specific number in an array. ||
| `ArrayTools::GlobalIndexOfStr()` | Return The index of the first variable that equals to a specific text in an array. ||
| `ArrayTools::GlobalJoin()` | Returns a string made from all strings in an array. ||
| `ArrayTools::GlobalLastIndexOf()` | Return The index of the last variable that equals to a specific number in an array. ||
| `ArrayTools::GlobalLastIndexOfStr()` | Return The index of the last variable that equals to a specific text in an array. ||
| `ArrayTools::GlobalMax()` | Gets the biggest number in an array. ||
| `ArrayTools::GlobalMean()` | Gets the average number in an array. ||
| `ArrayTools::GlobalMedian()` | Gets the median number in an array. ||
| `ArrayTools::GlobalMin()` | Gets the smallest number in an array. ||
| `ArrayTools::GlobalPopNumber()` | Return Removes the last array child of an array, and return it as a number. ||
| `ArrayTools::GlobalPopString()` | Removes the last array child of an array, and return it as a string. ||
| `ArrayTools::GlobalRandomNumberInArray()` | Return Returns a random number of an array of numbers. ||
| `ArrayTools::GlobalRandomStringInArray()` | Return a random string of an array of strings. ||
| `ArrayTools::GlobalShiftNumber()` | Removes the first array child of an array, and return it as a number. ||
| `ArrayTools::GlobalShiftString()` | Removes the first array child of an array, and return it as a string. ||
| `ArrayTools::GlobalSum()` | Get the sum of all numbers in an array. ||
| `ArrayTools::IndexOf()` | Return The index of the first variable that equals to a specific number in an array. ||
| `ArrayTools::IndexOfStr()` | Return The index of the first variable that equals to a specific text in an array. ||
| `ArrayTools::Join()` | Returns a string made from all strings in an array. ||
| `ArrayTools::LastIndexOf()` | Return The index of the last variable that equals to a specific number in an array. ||
| `ArrayTools::LastIndexOfStr()` | Return The index of the last variable that equals to a specific text in an array. ||
| `ArrayTools::Max()` | Gets the biggest number in an array. ||
| `ArrayTools::Mean()` | Gets the average number in an array. ||
| `ArrayTools::Median()` | Gets the median number in an array. ||
| `ArrayTools::Min()` | Gets the smallest number in an array. ||
| `ArrayTools::ObjectIndexOf()` | Return The index of the first variable that equals to a specific number in an array. ||
| `ArrayTools::ObjectIndexOfStr()` | Return The index of the first variable that equals to a specific text in an array. ||
| `ArrayTools::ObjectJoin()` | Returns a string made from all strings in an array. ||
| `ArrayTools::ObjectLastIndexOf()` | Return The index of the last variable that equals to a specific number in an array. ||
| `ArrayTools::ObjectLastIndexOfStr()` | Return The index of the last variable that equals to a specific text in an array. ||
| `ArrayTools::ObjectMax()` | Gets the biggest number in an array. ||
| `ArrayTools::ObjectMean()` | Gets the average number in an array. ||
| `ArrayTools::ObjectMedian()` | Gets the median number in an array. ||
| `ArrayTools::ObjectMin()` | Gets the smallest number in an array. ||
| `ArrayTools::ObjectPopNumber()` | Return Removes the last array child of an array, and return it as a number. ||
| `ArrayTools::ObjectPopString()` | Removes the last array child of an array, and return it as a string. ||
| `ArrayTools::ObjectRandomNumberInArray()` | Return Returns a random number of an array of numbers. ||
| `ArrayTools::ObjectRandomStringInArray()` | Return a random string of an array of strings. ||
| `ArrayTools::ObjectShiftNumber()` | Removes the first array child of an array, and return it as a number. ||
| `ArrayTools::ObjectShiftString()` | Removes the first array child of an array, and return it as a string. ||
| `ArrayTools::ObjectSum()` | Get the sum of all numbers in an array. ||
| `ArrayTools::PopNumber()` | Return Removes the last array child of an array, and return it as a number. ||
| `ArrayTools::PopString()` | Removes the last array child of an array, and return it as a string. ||
| `ArrayTools::RandomNumberInArray()` | Return Returns a random number of an array of numbers. ||
| `ArrayTools::RandomStringInArray()` | Return a random string of an array of strings. ||
| `ArrayTools::ShiftNumber()` | Removes the first array child of an array, and return it as a number. ||
| `ArrayTools::ShiftString()` | Removes the first array child of an array, and return it as a string. ||
| `ArrayTools::Sum()` | Get the sum of all numbers in an array. ||

---

*This page is an auto-generated reference page about the **Array tools** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).