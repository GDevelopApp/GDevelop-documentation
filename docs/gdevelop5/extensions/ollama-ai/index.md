# OllamaAI

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/17afc029e0ccfc314f5b7f5f53632ca24b3e6082d0cc87c0777dcfa79fd56e0b_chat-processing-outline.svg" class="extension-icon"></img>
This extension adds the functionality to your project to easily send requests to the "Ollama" AI, and get responses from it.

**Authors and contributors** to this experimental extension: (not specified).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Create a simple action to send the following data to a Ollama AI server:


- URL (The server's URL with port)
- Model (The model you want to generate the response)
- Prompt (The prompt you send to the server to reply to)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Send prompt to a model**  
Sends the prompt string, the model string, and the stream boolean from the given structure.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): The URL where the Ollama model is hosted (e.g. http://localhost:11434/api/generate)
      The URL should be in this format: "http://<ip address>:11434/api/generate". If you are hosting and testing locally, use this URL: "http://localhost:11434/api/generate". Read the extension's GitHub issue on how to host your own server. (one of: "http://localhost:11434/api/generate")
    - Parameter 2 (🔤 String): The model to be used when generating a response
      The recommended one is "llama3", an older version is "llama2", but you can also customize the models and use those. Read the extension's GitHub issue on how to do this. (one of: "llama3", "llama2", "codegemma")
    - Parameter 3 (string): Your prompt to the AI, for example: "Why is the sky blue?"
      The response will be stored in JSON in the variable "Ollama_AI_JSON". After that, you can convert the JSON to a structure. You can see how you can do it in the example on the extension's GitHub.

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `OllamaAI::Request`.




---

*This page is an auto-generated reference page about the **OllamaAI** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).