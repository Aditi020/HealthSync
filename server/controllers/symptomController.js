import axios from 'axios';
import Symptom from '../models/Symptom.js'; // Ensure to include the file extension

export const analyzeSymptoms = async (req, res) => {
    try {
        const { symptoms } = req.body;

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "user",
                    content: `Analyze these symptoms: ${symptoms.join(', ')}. 
                    Suggest possible conditions and recommended actions in JSON format.`
                }],
                temperature: 0.7
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const analysis = response.data.choices[0].message.content;

        const symptomEntry = new Symptom({
            user: req.userId,
            symptoms,
            analysis
        });
        await symptomEntry.save();

        res.json({ analysis });
    } catch (error) {
        res.status(500).json({ error: 'Failed to analyze symptoms' });
    }
};

export default { analyzeSymptoms };
