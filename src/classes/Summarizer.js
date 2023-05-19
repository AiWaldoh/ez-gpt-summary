const WebScraper = require('./WebScraper');
const OpenAIChatBot = require('./OpenAIChatBot');

const prompt = `The following data is html hierarchy with 4 words of text for elements that contain text. Return me specific xpath for fields that contain text data such as paragraph and heading tags.
###EXAMPLE###
[{"tag":"main","id":"jump-content","class":"site-content","text":null,"children":[{"tag":"article","id":"","class":"uni-article-wrapper","text":null,"children":[{"tag":"section","id":"","class":"article-hero","text":null,"children":[{"tag":"div","id":"","class":"article-hero__container","text":null,"children":[{"tag":"h1","id":"","class":"article-hero__h1","text":"Being bold on AI","children":[]}]}]}]
###RESPONSE###
{
  "xpath": [
    "//div[@class='article-hero__container']/h1",
  ]
}`;

let model = "gpt-4";

class RunApp {
  constructor(url) {
    this.url = url;
    this.scraper = new WebScraper();

    this.chatBot = new OpenAIChatBot(model);
  }

  async summarize() {
    console.log(`Initializing application...`);
    await this.scraper.init();

    console.log(`Navigating to ${this.url}...`);
    await this.scraper.goToPage(this.url);

    console.log(`Scraping page...`);
    const data = await this.scraper.scrapePage();
    // console.log(data);
    console.log(`Using AI to find relevant data...`);
    this.chatBot.send_message(prompt);
    this.chatBot.send_message(JSON.stringify(data));
    const jsonXpaths = JSON.parse(await this.chatBot.get_response(0));
    // console.log(jsonXpaths);
    console.log(`Parsing important data using xpath...`);
    const text = await this.scraper.getTextFromXPath(this.url, jsonXpaths.xpath);

    console.log(`Summarizing text using AI...`);
    this.chatBot.clear_messages();
    this.chatBot.set_role("You are a summarization AI.")
    this.chatBot.send_message("comprehensively summarize the following text so it's about 3000 tokens size for an AI to understand:");
    // console.log(text);
    this.chatBot.send_message(text);
    const summary = await this.chatBot.get_response(0.5);
    this.scraper.close();

    return summary;
  }

}

module.exports = RunApp;


