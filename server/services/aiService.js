import { Configuration, OpenAIApi } from 'openai';
import config from '../config/openai.js'; 

const aiConfig = new Configuration({ apiKey: config.apiKey });
const openai = new OpenAIApi(aiConfig);

export const analyzeSymptoms = async (symptoms) => {
    try {
        const response = await openai.createChatCompletion({
            ...config.defaultParams,
            messages: [{
                role: "system",
                content: "You are a medical assistant. Analyze symptoms and respond with: { conditions: [], urgency: 'low|medium|high', recommendations: [] }"
            }, {
                role: "user",
                content: `Symptoms: ${symptoms.join(', ')}`
            }]
        });

        return JSON.parse(response.data.choices[0].message.content);
    } catch (error) {
        throw new Error(`AI analysis failed: ${error.message}`);
    }
};

export default { analyzeSymptoms };
