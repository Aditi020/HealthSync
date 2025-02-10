module.exports = {
    apiKey: process.env.OPENAI_KEY,
    defaultParams: {
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        maxTokens: 500
    }
};