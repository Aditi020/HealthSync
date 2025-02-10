const axios = require('axios');
const Symptom = require('../models/Symptom');

const analyzeSymptoms = async (req, res) => {
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

    // Save to database
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

module.exports = { analyzeSymptoms };