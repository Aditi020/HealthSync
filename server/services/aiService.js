const { Configuration, OpenAIApi } = require('openai');
const config = require('../config/openai');

const aiConfig = new Configuration({
    apiKey: config.apiKey,
});

const openai = new OpenAIApi(aiConfig);

const analyzeSymptoms = async (symptoms) => {
    try {
        const response = await openai.createChatCompletion({
            ...config.defaultParams,
            messages: [{
                role: "user",
                content: `Analyze these symptoms: ${symptoms.join(', ')}. 
          Respond in JSON format: {
            "conditions": [],
            "urgency": "mild|moderate|severe",
            "recommended_actions": []
          }`
            }]
        });

        return JSON.parse(response.data.choices[0].message.content);
    } catch (error) {
        throw new Error('AI analysis failed: ' + error.message);
    }
};

module.exports = { analyzeSymptoms };