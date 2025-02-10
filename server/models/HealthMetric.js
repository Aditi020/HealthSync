const mongoose = require('mongoose');

const healthMetricSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    temperature: Number,
    heartRate: Number,
    sleep: Number,
    weight: Number,
    water: Number,
    mood: { type: String, enum: ['good', 'okay', 'bad'] },
    goals: {
        weight: Number,
        sleep: Number,
        water: Number
    }
});

module.exports = mongoose.model('HealthMetric', healthMetricSchema);