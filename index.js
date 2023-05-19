const Summarizer = require('./src/classes/Summarizer.js');

let url_to_summarize = "https://blog.google/technology/ai/google-responsible-ai-io-2023/";
url_to_summarize = "https://www.haihai.ai/langchain/?ref=emergentmind";
async function main() {
    const app = new Summarizer();
    const summary = await app.summarize(url_to_summarize);
    console.log(summary);
}

main();
