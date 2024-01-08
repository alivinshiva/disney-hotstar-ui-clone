import React from 'react'
import { OpenAIClient, AzureKeyCredential, ChatResponseMessage, } from "@azure/openai"

async function OpenAIAzureSuggestions({ term }: { term: string }) {
    const fetchChatCompletion = async () => {
        const completions: (ChatResponseMessage | undefined)[] = [];
        const endpoint = process.env.ENDPOINT;
        const azureApiKey = process.env.AZURE_API_KEY;
        if (!endpoint) throw new Error("Missing endpoint")
        if (!azureApiKey) throw new Error("Missing Azure API Key")
        // console.log(
        //     `using endpoint:${endpoint}and Azure API KEY: ${azureApiKey}`
        // )
        const client = new OpenAIClient(
            endpoint,
            new AzureKeyCredential(azureApiKey)
        )
        const deploymentID = "alivin612003-3209"
        const result = await client.getChatCompletions(deploymentID, [
            {
                role: "system",
                content: `You are a digital video assistant working for services such as Netflix, Disney Plus, Hotstar & Amazon Prime Video. Your job is to provide suggestions based on the videos the user specifies. Provide an quirky breakdown of what the user should watch next! It should only list the names of the films after the introduction. Keep the response short and sweet! Always list at least 3 films as suggestions. If the user mentions a genre, you should provide a suggestion based on that genre.`
            }, {
                role: "user",
                content: `I Like: ${term}`,
            }
        ], {
            maxTokens: 128,
        }
        )
        for (const choice of result.choices) {
            console.log(choice.message)
            completions.push(choice.message)
        }
        return completions[0]
    }

    const completions = await fetchChatCompletion();
    return (
        <div className="flex space-x-5 xl:mt-42 p-10 pb-0">
            <div className="animate-pulse rounded-full bg-gradient-to-t from-purple-400 h-10 w-10 border-2 flex-shrink-0 border-white" />
            <div>
                <p className="text-sm text-purple-400">
                    Azure AI Assistant Suggests:{""}
                </p>
                <p className="italic text-xl">
                    "{completions?.content}"
                </p>
            </div>
        </div>
    )
}

export default OpenAIAzureSuggestions 