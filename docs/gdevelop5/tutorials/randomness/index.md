---
title: Randomness
---

# How to work with randomness?

## Pick a random number

Random numbers can be generated using the [expressions](/gdevelop5/all-features/expressions/): `Random`, `RandomFloat`, `RandomFloatInRange`, `RandomInRange` and `RandomWithStep`.


## Create a random object

Random object can be creating according to a random number. 

<!---
TODO screenshot of events and small example link.
-->


## Roll dices

Rolling one dice is the same as picking a random number between 1 an 6 using the expression `RandomInRange(1, 6)`. But, rolling 2 dices is not the same as picking a number between 2 and 12. Indeed, there is only one way to make a 2 with:

- 1 and 1

whereas there are 6 ways to make a 7:

- 1 and 6
- 2 and 5
- 3 and 4
- 4 and 3
- 5 and 2
- 6 and 1

Rolling 2 dices is actually the same as picking 2 number between 1 and 6 and sum them using this expression `RandomInRange(1, 6) + RandomInRange(1, 6)`.

<!---
TODO Create an example that compares visually different way of doing randomness.
Add a side by side comparison between `RandomInRange(1, 6) + RandomInRange(1, 6)` and `RandomInRange(2, 12)` and add a link to the example.
-->

!!! tip

Using a roll of several dices to pick random number can be a good tool for [fairness](#make-randomness-feel-fair) as it gives more changes to get a medium value.


## Pick cards from a deck

The [Array tools](/gdevelop5/extensions/array-tools/) extension can be used to shuffle arrays.

<!---
TODO Add a screenshot of the instruction editor showing the shuffle action.
-->

The [Object stack](/gdevelop5/extensions/object-stack/) extension can be used to shuffle objects.

<!---
TODO Add a screenshot of the instruction editor showing the shuffle action.
-->

!!! tip

Even if a game is not about cards, using a deck can be a good tool for [fairness](#make-randomness-feel-fair) as it gives more control on what happens in a time frame.

**Card system example**

[Open in GDevelop](https://editor.gdevelop.io/?project=example://card-system){ .md-button .md-button--primary }

[![](card-system-example.png){ width="300" }](https://editor.gdevelop.io/?project=example://card-system)


## Make randomness feel fair

Randomness is actually more than just pick random numbers. Finding a suitable randomness for a game is part of the game design.


### Chose better random sequences

A Tetris run when a player would never get a "I" piece doesn't sound fair nor fun. However, if a 7-faces dice is rolled to choose the next piece this could happen. Indeed, each time there is 1/7 chance not to roll a "I".

To ensure that every type of pieces is given to players regularly. The next 14 pieces can be decided in advanced. For instance, it can be decided to give 2 pieces of each type. To still give some randomness, the order can be shuffle like a deck of cards.

<!---
TODO Create an example that compares visually different way of doing randomness.
Add a side by side comparison and a link to the example.
-->

!!! tip

Learn [how to shuffle a deck](#pick-cards-from-a-deck).


### Make something more or less rare

One way to make something rarer than other is to choose a probability for each things to happens. For instance, 10% change for a rare item, 25% chance for an uncommon item and 65% for a common item.

Defining each probability is fine when there are only few quality levels but some games like Pokemon can have hundreds of quality levels. In this case, it's faster to calculate the quality rather than listing every cases.

Bell-shaped functions are often used to show how many people have a given characteristic for instance the IQ. Most peoples are on the center where the curve is high and the curve is going down as it becomes rarer and rarer to find people. Most of these curves have complicated formulas but rolling several dices gives similar results.

!!! tip

Learn [how to roll dices](#roll-dices).

[
  ![](dices-probabilities-dark.svg#only-dark)
  ![](dices-probabilities-light.svg#only-light)
](https://en.wikipedia.org/wiki/File%3ADice_sum_central_limit_theorem.svg)


