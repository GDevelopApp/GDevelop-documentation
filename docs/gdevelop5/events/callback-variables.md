---
title: Callback Variables
---
# Callback Variables

## What are they?

Callback variables are **variables** passed to an **action** for passing a result to the user.

## Why do they exist?

Some actions have a very long execution time. So, to not block the game, they are designed in an **asynchronous** way.
That means that they are being executed for a little while every frame until they are completed.
Normally, you would use **[expressions](/gdevelop5/all-features/expressions)** for getting a value,
but asynchronous actions **cannot** do that as they **would return nothing for multiple frames** (the time it takes to execute them).
So they accept as argument a variable, and **set its value** to the returned value **once finished**.
You usually have two callback variables: one to say if the asynchronous action executed successfully,
and one with the actual return value of the action.