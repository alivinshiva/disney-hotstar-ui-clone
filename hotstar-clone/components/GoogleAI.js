 // this is not working

// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const dotenv = require("dotenv");
// dotenv.config();
// // const API_KEY = process.env.API_KEY;
// const readline = require("readline");

// // Access your API key as an environment variable (see "Set up your API key" above)
// // const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const genAI = new GoogleGenerativeAI(API_KEY);

// console.log(" Enter your movie choice");
// const UI = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// UI.prompt;
// UI.on("line", async (input) => {
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//   const prompt =
//     "You are a digital video assistant working for services such as Netflix, Disney Plus, Hotstar & Amazon Prime Video. Your job is to provide suggestions based on the videos the user specifies. Provide an quirky breakdown of what the user should watch next! It should only list the names of the films after the introduction. Keep the response short and sweet! Always list at least 3 films as suggestions. If the user mentions a genre, you should provide a suggestion based on that genre.";

//   const order = "Today i like to watch";

//   console.log("AI is thinking...");
//   const result = await model.generateContentStream(prompt + order + [input]);
//   for await (const chunk of result.stream) {
//     const chunkText = chunk.text();
//     console.log(chunkText);
//   }
// });
