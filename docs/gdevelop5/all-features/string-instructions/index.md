---
title: Manipulate text with expressions
---
# Manipulate text with expressions

String instructions are the expressions that you'd find in the "Manipulation of text" drop-down in numerical as well as string expressions.

## Get character from code point

This expression returns a character from the code point entered. A code point is a number that represents a unique character. For example, using the code point 9731 would return ☃.

## Insert a new line

This expression is equivalent to pressing return within quotes for a string expression. This allows you to add a new line to the string.

## Get a character from a text

This expression returns the character at the position entered in a text. The numbering of the letters start from 0, i.e. the expression returns the first letter if the position entered is 0.

## Repeat a text

This expression will perform repetitions of the text entered in the "Text to repeat" value. The number of repetitions can be controlled using the "Repetition count" field.

## Get a portion of a text

This expression will return a portion of the text entered. The "Start position of the portion" and "Length of the portion" denote the starting position of the portion with respect to the text entered and the length of the text portion respectively.

## Lowercase a text

This expression will return the text entered in the text field in the lowercase form. The text entered can be lowercase, uppercase or a combination of both.

## Uppercase a text

This expression will return the text entered in the text field in the uppercase form. The text entered can be lowercase, uppercase or a combination of both.

## Search in a text

This expression returns the position of a text in another text. Make sure that the text to be searched in is greater than the text to be searched.

If the string exists at the start of the text, it will return 0. If there are multiple occurrences of the string in the text, the position of the first occurrence will be returned. If the string does not exist in the text, -1 will be returned.

## Search in a string, starting from a position

This expression returns the position of a text in another text, but the search starts from the position entered in the field. Make sure that the text to be searched in is greater than the text to be searched.

If the string exists at the start of the text, it will return 0. If there are multiple occurrences of the string in the text, the position of the first occurrence will be returned. If the string does not exist in the text, -1 will be returned.

## Length of a text

This expression will return the length of the text entered. Unlike other expressions, the counting in this expression starts from 1.

## Search in a text from the end

In this expression, the string entered is searched in the text but in the backward direction. This will give us the position of the last occurrence of the string.

If the string does not exist, -1 will be returned.

!!! note

    In "search from the end" functions, the count remains the same, i.e. if the expression has to return the first position, it will still return 0 like previous search expressions.

## Search in a text from the end, starting from a position

In this expression, the string entered is searched in the text in the backward direction but rather than starting from the end, it starts from the position entered. This will give us the position of the last occurrence of the string in the text considered for search.

If the string does not exist, -1 will be returned.