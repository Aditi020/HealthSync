const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    dosage: { type: String, required: true },
    frequency: { type: String, enum: ['daily', 'weekly', 'monthly'], required: true },
    timeOfDay: { type: String, enum: ['morning', 'afternoon', 'evening', 'night'] },
    nextDose: { type: Date, required: true },
    lastTaken: Date
});

module.exports = mongoose.model('Medication', medicationSchema);