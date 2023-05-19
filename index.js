const Summarizer = require('./src/classes/Summarizer.js');

let url_to_summarize = "https://blog.google/technology/ai/google-responsible-ai-io-2023/";
url_to_summarize = "https://dev.to/reaminated/run-chatgpt-style-questions-over-your-own-files-using-the-openai-api-and-langchain-1ii7";
async function main() {
    const app = new Summarizer(url_to_summarize);
    const summary = await app.summarize();
    console.log(summary);
}

main();
