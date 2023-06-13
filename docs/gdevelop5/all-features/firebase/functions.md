---
title: Firebase Functions
---
# Firebase Functions

!!! danger

    This feature is intended for experimented JavaScript developers.

    [Also note that this feature requires the Blaze plan as of March 15 2021](https://firebase.google.com/support/faq#expandable-13).

Firebase is meant to replace a whole backend server by itself. Sometimes though, you need to code some server logic yourself: that's where firebase functions come in.

Firebase let you code some server-side logic that triggers on certain events. To see the whole documentation go on <https://firebase.google.com/docs/functions/callable>.

One of those events are "https callables". You can trigger those via a GDevelop action. Use the trigger function action with the https callable name. You can pass arguments and let the https callable return an object.