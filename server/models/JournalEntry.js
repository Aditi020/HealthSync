const mongoose = require('mongoose');

const journalEntrySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    symptoms: [String],
    medications: [String],
    doctorVisit: {
        doctorName: String,
        specialization: String,
        notes: String
    },
    notes: String
});

module.exports = mongoose.model('JournalEntry', journalEntrySchema);