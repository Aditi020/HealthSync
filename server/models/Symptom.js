const mongoose = require('mongoose');

const symptomSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    symptoms: [String],
    analysis: {
        conditions: [String],
        urgency: { type: String, enum: ['mild', 'moderate', 'severe'] },
        suggestedActions: [String]
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Symptom', symptomSchema);