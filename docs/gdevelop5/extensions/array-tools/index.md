# Array tools

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Text Editing/9bfb52500e68d0fd164b1e30bc696e40566187245b80c345848379f40bb6fad7_Text Editing_bullet_points_list.svg" class="extension-icon"></img>
Array utilities: search, sort, shuffle, slice, concat, reverse, pop, random element access.

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555).

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

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): The array to get the variables from
    - Parameter 2 (🗄️ Any variable): The variable to append the variables in

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::AppendAll`.

**Combine 2 arrays**  
Combines all elements of 2 scene arrays into one new scene array.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): The first array
    - Parameter 2 (🗄️ Any variable): The second array
    - Parameter 3 (🗄️ Any variable): The variable to store the new array in

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::Concatenate`.

**Fill array with number**  
Fill an element with a number.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): The array to fill
    - Parameter 2 (🔢 Number): The number to fill
    - Parameter 3 (🔢 Number): The index to start filling from
    - Parameter 4 (🔢 Number): The index to stop filling at
      Set to 0 to fill until the end of the array.

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::FillNumber`.

**Flatten array**  
Replaces all arrays inside of an array with their children. For example, [[1,2], [3,4]] becomes [1,2,3,4].

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): The array to flatten
    - Parameter 2 (❓ Yes or No): Deeply flatten
      If yes, will continue flattening until there is no arrays in the array anymore.

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::Flatten`.

**Insert variable at**  
Insert a variable at a specific index of an array.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): The array to insert a variable in
    - Parameter 2 (🔢 Number): The index to insert the variable at
    - Parameter 3 (🗄️ Any variable): The name of the variable to insert

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::InsertAt`.

**Append all variable to another array**  
Appends a copy of all variables of one array to another array.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): The array to get the variables from
    - Parameter 3 (👾 Object): The object the variable is from
    - Parameter 4 (🗄️ Object variable): The variable to append the variables in

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::ObjectAppendAll`.

**Combine 2 arrays**  
Combines all elements of 2 scene arrays into one new scene array.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): The first array
    - Parameter 3 (👾 Object): The object the variable is from
    - Parameter 4 (🗄️ Object variable): The second array
    - Parameter 5 (👾 Object): The object the variable is from
    - Parameter 6 (🗄️ Object variable): The variable to store the new array in

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::ObjectConcatenate`.

**Fill array with number**  
Fill an element with a number.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): The array to fill
    - Parameter 3 (🔢 Number): The number to fill
    - Parameter 4 (🔢 Number): The index to start filling from
    - Parameter 5 (🔢 Number): The index to stop filling at
      Set to 0 to fill until the end of the array.

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::ObjectFillNumber`.

**Flatten array**  
Replaces all arrays inside of an array with their children. For example, [[1,2], [3,4]] becomes [1,2,3,4].

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): The array to flatten
    - Parameter 3 (❓ Yes or No): Deeply flatten
      If yes, will continue flattening until there is no arrays in the array anymore.

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::ObjectFlatten`.

**Insert variable at**  
Insert a variable at a specific index of an array.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): The array to insert a variable in
    - Parameter 3 (🔢 Number): The index to insert the variable at
    - Parameter 4 (👾 Object): The object the variable is from
    - Parameter 5 (🗄️ Object variable): The name of the variable to insert

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::ObjectInsertAt`.

**Pop array child**  
Removes the last array child of an array, and stores it in another variable.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): The array to pop a child from
    - Parameter 3 (👾 Object): The object the variable is from
    - Parameter 4 (🗄️ Object variable): The variable to store the popped value into

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::ObjectPop`.

**Reverse an array**  
Reverses children of an array. The first array child becomes the last, and the last array child becomes the first.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): The array to reverse

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::ObjectReverse`.

**Shift array child**  
Removes the first array child of an array, and stores it in another variable.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): The array to shift a child from
    - Parameter 3 (👾 Object): The object the variable is from
    - Parameter 4 (🗄️ Object variable): The variable to store the shifted value into

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::ObjectShift`.

**Shuffle array**  
Shuffles all children of an array.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): The array to shuffle

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::ObjectShuffle`.

**Slice an array**  
Copies a portion of a scene array variable into a new scene array variable.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): The array to take a slice from
    - Parameter 3 (👾 Object): The object the variable is from
    - Parameter 4 (🗄️ Object variable): The array to store the slice into
    - Parameter 5 (🔢 Number): The index to start the slice from
    - Parameter 6 (🔢 Number): The index to end the slice at
      Set to 0 to copy all of the array. If you use a negative value, the index will be selected beginning from the end.  
      For example, slicing an array with 5 elements from 0 to -1 would take only elements from indices 0 to 3.

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::ObjectSlice`.

**Sort an array**  
Sort an array of number from smallest to biggest.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): The array to sort

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::ObjectSort`.

**Splice an array**  
Cuts a portion of an array off.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): The array to remove items from
    - Parameter 3 (🔢 Number): The index to start removing from
      If you use a negative value, the index will be selected beginning from the end.
    - Parameter 4 (🔢 Number): The amount of elements to remove
      Set to 0 to remove until the end of the array.

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::ObjectSplice`.

**Split string into array**  
Split a string into an array of strings via a separator.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): The string to split
    - Parameter 2 (🔤 String): The separator to use to split the string
      For example, if you have a string "Hello World", and the separator is a space (" "), the resulting array would be ["Hello", "World"]. If the separator is an empty string (""), it will make an element per character (["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]).
    - Parameter 3 (👾 Object): The object the variable is from
    - Parameter 4 (🗄️ Object variable): Array where to store the results

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::ObjectSplitString`.

**Pop array child**  
Removes the last array child of an array, and stores it in another variable.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): The array to pop a child from
    - Parameter 2 (🗄️ Any variable): The variable to store the popped value into

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::Pop`.

**Reverse an array**  
Reverses children of an array. The first array child becomes the last, and the last array child becomes the first.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): The array to reverse

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::Reverse`.

**Shift array child**  
Removes the first array child of an array, and stores it in another variable.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): The array to shift a child from
    - Parameter 2 (🗄️ Any variable): The variable to store the shifted value into

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::Shift`.

**Shuffle array**  
Shuffles all children of an array.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): The array to shuffle

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::Shuffle`.

**Slice an array**  
Copies a portion of a scene array variable into a new scene array variable.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): The array to take a slice from
    - Parameter 2 (🗄️ Any variable): The array to store the slice into
    - Parameter 3 (🔢 Number): The index to start the slice from
    - Parameter 4 (🔢 Number): The index to end the slice at
      Set to 0 to copy all of the array. If you use a negative value, the index will be selected beginning from the end.  
      For example, slicing an array with 5 elements from 0 to -1 would take only elements from indices 0 to 3.

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::Slice`.

**Sort an array**  
Sort an array of number from smallest to biggest.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): The array to sort

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::Sort`.

**Splice an array**  
Cuts a portion of an array off.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): The array to remove items from
    - Parameter 2 (🔢 Number): The index to start removing from
      If you use a negative value, the index will be selected beginning from the end.
    - Parameter 3 (🔢 Number): The amount of elements to remove
      Set to 0 to remove until the end of the array.

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::Splice`.

**Split string into array**  
Split a string into an array of strings via a separator.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): The string to split
    - Parameter 2 (🔤 String): The separator to use to split the string
      For example, if you have a string "Hello World", and the separator is a space (" "), the resulting array would be ["Hello", "World"]. If the separator is an empty string (""), it will make an element per character (["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]).
    - Parameter 3 (🗄️ Any variable): Array where to store the results

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ArrayTools::SplitString`.


## Conditions

**Array has number**  
Checks if an array contains a specific number.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Array to search the value in
    - Parameter 2 (🔢 Number): The number to search

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::HasNumber`.

**Array has string**  
Checks if an array contains a specific string.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Array to search the value in
    - Parameter 2 (🔤 String): The text to search

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::HasString`.

**Index of number**  
Compare The index of the first variable that equals to a specific number in an array.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🗄️ Any variable): Array to search the value in
    - Parameter 4 (🔢 Number): Number to search in the array

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::IndexOf`.

**Index of text**  
Compare The index of the first variable that equals to a specific text in an array.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🗄️ Any variable): Array to search the value in
    - Parameter 4 (🔤 String): String to search in the array

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::IndexOfStr`.

**Last index of number**  
Compare The index of the last variable that equals to a specific number in an array.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🗄️ Any variable): Array to search the value in
    - Parameter 4 (🔢 Number): Number to search in the array

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::LastIndexOf`.

**Last index of text**  
Compare The index of the last variable that equals to a specific text in an array.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🗄️ Any variable): Array to search the value in
    - Parameter 4 (🔤 String): String to search in the array

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::LastIndexOfStr`.

**Array has number**  
Checks if an array contains a specific number.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): Array to search the value in
    - Parameter 3 (🔢 Number): The number to search

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::ObjectHasNumber`.

**Array has string**  
Checks if an array contains a specific string.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object the variable is from
    - Parameter 2 (🗄️ Object variable): Array to search the value in
    - Parameter 3 (🔤 String): The text to search

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::ObjectHasString`.

**Index of number**  
Compare The index of the first variable that equals to a specific number in an array.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (👾 Object): The object the variable is from
    - Parameter 4 (🗄️ Object variable): Array to search the value in
    - Parameter 5 (🔢 Number): Number to search in the array

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::ObjectIndexOf`.

**Index of text**  
Compare The index of the first variable that equals to a specific text in an array.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (👾 Object): The object the variable is from
    - Parameter 4 (🗄️ Object variable): Array to search the value in
    - Parameter 5 (🔤 String): String to search in the array

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::ObjectIndexOfStr`.

**Last index of number**  
Compare The index of the last variable that equals to a specific number in an array.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (👾 Object): The object the variable is from
    - Parameter 4 (🗄️ Object variable): Array to search the value in
    - Parameter 5 (🔢 Number): Number to search in the array

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::ObjectLastIndexOf`.

**Last index of text**  
Compare The index of the last variable that equals to a specific text in an array.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (👾 Object): The object the variable is from
    - Parameter 4 (🗄️ Object variable): Array to search the value in
    - Parameter 5 (🔤 String): String to search in the array

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::ObjectLastIndexOfStr`.

**Get and remove last variable from array (as number)**  
Compare Removes the last array child of an array, and return it as a number.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (👾 Object): The object the variable is from
    - Parameter 4 (🗄️ Object variable): Array to pop a child from

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::ObjectPopNumber`.

**Random number in array**  
Compare Returns a random number of an array of numbers.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (👾 Object): The object the variable is from
    - Parameter 4 (🗄️ Object variable): Array to get a number from

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::ObjectRandomNumberInArray`.

**Random string in array**  
Compare a random string of an array of strings.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Value to compare
    - Parameter 3 (👾 Object): The object the variable is from
    - Parameter 4 (🗄️ Object variable): Array to get a string from

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::ObjectRandomStringInArray`.

**Get and remove last variable from array (as number)**  
Compare Removes the last array child of an array, and return it as a number.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🗄️ Any variable): Array to pop a child from

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::PopNumber`.

**Random number in array**  
Compare Returns a random number of an array of numbers.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🗄️ Any variable): Array to get a number from

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::RandomNumberInArray`.

**Random string in array**  
Compare a random string of an array of strings.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Value to compare
    - Parameter 3 (🗄️ Any variable): Array to get a string from

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ArrayTools::RandomStringInArray`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `ArrayTools::IndexOf(variable, number)` | Return The index of the first variable that equals to a specific number in an array. ||
| | _🗄️ Any variable_ | Array to search the value in |
| | _🔢 Number_ | Number to search in the array |
| `ArrayTools::IndexOfStr(variable, string)` | Return The index of the first variable that equals to a specific text in an array. ||
| | _🗄️ Any variable_ | Array to search the value in |
| | _🔤 String_ | String to search in the array |
| `ArrayTools::Join(variable, string)` | Returns a string made from all strings in an array. ||
| | _🗄️ Any variable_ | The name of the array to join into a string |
| | _🔤 String_ | Optional separator text between each element |
| `ArrayTools::LastIndexOf(variable, number)` | Return The index of the last variable that equals to a specific number in an array. ||
| | _🗄️ Any variable_ | Array to search the value in |
| | _🔢 Number_ | Number to search in the array |
| `ArrayTools::LastIndexOfStr(variable, string)` | Return The index of the last variable that equals to a specific text in an array. ||
| | _🗄️ Any variable_ | Array to search the value in |
| | _🔤 String_ | String to search in the array |
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
| | _🔤 String_ | String to search in the array |
| `ArrayTools::ObjectJoin(object, object variable, string)` | Returns a string made from all strings in an array. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | The name of the array to join into a string |
| | _🔤 String_ | Optional separator text between each element |
| `ArrayTools::ObjectLastIndexOf(object, object variable, number)` | Return The index of the last variable that equals to a specific number in an array. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | Array to search the value in |
| | _🔢 Number_ | Number to search in the array |
| `ArrayTools::ObjectLastIndexOfStr(object, object variable, string)` | Return The index of the last variable that equals to a specific text in an array. ||
| | _👾 Object_ | The object the variable is from |
| | _🗄️ Object variable_ | Array to search the value in |
| | _🔤 String_ | String to search in the array |
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

*This page is an auto-generated reference page about the **Array tools** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).