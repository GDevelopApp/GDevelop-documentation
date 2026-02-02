online game---
title: Build with AI
-is game mein bahut sare romantic card and running moment and shooting in firing in future and object gaming fuse filter teacher and note top up ok--
# Build with AI: the AI agent

The **AI agent** is an AI designed specifically to help with game implementation with GDevelop. It helps discover offical extensions and organize the architecture (global/scene) of game elements depending on the project's needs.

![A conversation with the AI agent building a feature in a game](./ai-agent-conversation.png)

## What the AI agent can build for you

The AI agent has knowledge of all GDevelop features and official reviewed extensions. It also has a view of your whole game, and can inspect your game events or scenes if necessary.

The AI agent is good for:

- Doing simple changes ("Make object_X 25% bigger"),
- Creating game mechanics ("Make an enemy that shoots the player once it's within a 20px reach"),
- Experimenting ("Make the key move away from the player when they try to reach it")
- Learning new concepts - by studying the events that the AI has written and how does it resolve your implementation requests.

The AI will reply in a few seconds after your request. It will then progressively take actions in your game. This can be:

- Creating a scene,
- Adding objects,
- Adding behaviors to an object,
- Creating or modifying events to build the logic of your game,
- Placing game objects on the scene,
- Creating global or scene elements, etc.

## How agent implementations work

The AI will try to fulfill the instructions in your prompt as much as it can. 

As it works on your request, it will show a step-by-step implementation summary of everything it is doing. Some steps can also have extra details you can inspect. In the cases of dealing with a hard to fulfill request, some implementation task could fail (for example: generating complex, heavy dependent game logic). In these cases, the AI agent will move foreward and try alternative ways to continue.

!!! note

    As all AIs in the market, answers might not be perfect. From time to time the agent can confuse some concepts, misunderstand your game or lack clarity on what you're trying to do. Always verify its answers, and use them as suggestions rather than truths. 
    **Always double check what the AI does.** Move foreward as long as its implementations are useful, or pause and rework the unuseful bits it has created.


You can continue the conversation by asking follow-up requests. **We strongly recommend to use the "[Ask](/gdevelop5/interface/ai/agent/)" mode to model the next steps of the project**. This will give you more visibility on the agent's reasoning and will save you credits if the plan has flaws.

 If you want to switch topics or ask something unrelated, click **"Start a new chat"** — this helps the AI better focus on your new request.

!!! note

    High AI demand can temporarily slow processing down or prevent the AI to give a proper response. In that case — don’t worry — you won’t be charged any credits.

## How to use it (good practices)

Before using the AI agent, **make sure to save your project** or make a working copy to prevent any undesired changes. In the future, cloud projects will support automatic restore versioning points.

Here are a few best practices to work with the AI agent:

- **Be highly specific in your instructions:** Describe what you want to create followed by how you'd like it to behave. Write as if you were explaining your idea to a developer who has never seen your game before. Use clear language, describe specific values, specify what you *want* to change and what you *do not* want to change.
- **Plan your mechanics before asking the agent to build them:** Use the "[Ask](/gdevelop5/interface/ai/chat/)" mode to have the AI suggest a plan to implement. Chat with it to make sure it has understood your scope before switching to Build mode.
- **Use one chat per task:** When you’ve finished an implementation task, start a new conversation. This keeps things focused and avoids confusing the AI with unrelated details.
- **Keep an eye on what the AI is doing:** If the implementation plan starts going off-track, you can click the "Pause" button to stop the implementation process.
- **Expect variations:** Results may differ from one attempt to another. You can try to rephrase your requests for better outcomes. Feel free to document your used promts as well as their results to fine-tune your process.

## Cost of an AI request

"Build" mode requests require more credits than "Ask" conversations. Agent's actions could be between 15 to 20 credits depending on the complexity of the implementation, the number of events created, and the number of documentation the AI has to "study" to give an answer.

As a rule of thumb, a package of 500 credits usually represents 60 to 100 requests to the AI.
Each GDevelop account starts with a few **free AI credits**. If you have a GDevelop Silver, Gold or Pro subscription, you’ll receive more every week: 200 with Silver, 1000 with Gold and 3000 with Pro.

!!! tip

     If you've run out of free AI requests you can wait for them to reset every Sunday at 23:50 UTC, upgrade your [GDevelop Subscription](https://editor.gdevelop.io/?initial-dialog=subscription) to get more AI requests, or get more [GDevelop credits](https://editor.gdevelop.io/?initial-dialog=credits-purchase).


**Monitoring credit usage**

The interface displays the number of AI requests left in the bottom right of the chat's input. Hover or tap the "question" button to see credit reset time.

Prioritizing the "[Ask](/gdevelop5/interface/ai/chat/)" mode over "Build" mode will save you credits by reducing implementation misunderstanding from the AI. Consider planning your implementations before executing them.

## How to improve the AI

**GDevelop is not using any projects from the community to train the AI**.

This is why the only way to improve it is by rating the AI’s answers with a 👍 or 👎: positive ratings will signal the AI to follow that rationale. Negative feedback will nudge the GDevelop team that the answer wasn't correct.

In the case of negative feedback, adding context to why the answer wasn't correct will help the engineers stir the AI to the right direction.
