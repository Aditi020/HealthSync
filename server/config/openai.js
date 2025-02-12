if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY environment variable missing');
}

module.exports = {
    apiKey: process.env.OPENAI_API_KEY,
    defaultParams: {
        model: "gpt-4-turbo",
        temperature: 0.5,
        maxTokens: 500,
        timeout: 10000
    }
};