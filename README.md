# EZ-GPT-Summary

EZ-GPT-Summary is a Node.js module that provides an easy way to summarize webpage content. It uses web scraping to gather the content of a webpage, and then leverages the power of OpenAI to generate a concise and comprehensive summary.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js >= v14.0.0
- npm >= v6.14.0

### Installation

1. Clone the repo:
    ```bash
    git clone https://github.com/codingtoolskev/ez-gpt-summary.git
    ```
2. Navigate into the project directory:
    ```bash
    cd your-app-name
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory of the project and add your OpenAI API key:
    ```bash
    OPENAI_API_KEY=<YourOpenAIAPIKey>
    ```
5. Run the application:
    ```bash
    node index.js
    ```

## Usage

Here is a basic example of how to use EZ-GPT-Summary in your code:
```const Summarizer = require('./src/classes/Summarizer.js');

const url_to_summarize = "http://example.com/";

async function main() {
    const app = new Summarizer(url_to_summarize);
    const summary = await app.summarize();
    console.log(summary);
}

main();


console.log(summary);
```
## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

