---
title: Analytics
---
# Analytics

Firebase Analytics enables collecting and processing user information. Analytics for a day takes usually about 24h to get shown on the dashboard.

To get started with the Firebase analytics, use the action **Activate analytics** in an event.

## Logging Custom Events

To send custom data, such as a player finishing a level, a "log event" can be used. Here is an example:

- When the players exits the level, before switching scenes:
    - Create a new event or update an existing event with the **log event action**
    - Ensure that "level1_finished" is listed as the event name.
- The users who have beaten level 1 will now show on the dashboard.

!!! tip

        Scores can also be transmitted by sending an event called "score", with as additional data, the value of the variable containing the score. The additional data must be formatted like so:
    // "{\"score\":\"" + ToString(Variable(totalscore)) + "\"}"//

## Using Properties

Properties are something useful to differentiate player groups. As an example, at the beginning of the game the player provide's their favorite color, it is then set as a custom property and logged as part of the score using Custom Events. Firebase will then be able to display the average score of people who have blue as favorite color and the difference with the average score of people that chose red.

This can be useful for collecting data on users and using for example [Remote Configuration](/gdevelop5/all-features/firebase/rc) to scale difficulty (or other parameters) depending on user properties.

## How to Debug/Test Custom Events and Properties

Firebase analytics are not shown immediately on the dashboard. This can make it hard to validate that the integration is working. You can use a Google Chrome extension to verify that the data is being sent properly.

- Download the [Google Analytics debugging extension for Chrome](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna).
- Start the Network Preview feature or export the game as HTML5 game and host it on any Web server (remote or local).
- Go to the Firebase console and open the DebugView panel: ![](/gdevelop5/all-features/firebase/analytics1.png)
- Finally, navigate to the Web server page (or Network Preview URL) and click on the extension icon to enable the debug mode. The game should reload and now everytime something is logged or a user property changes, you will see it in DebugView with a little delay.