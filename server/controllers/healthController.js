import HealthMetric from '../models/HealthMetric.js'; // Ensure to include the file extension
import JournalEntry from '../models/JournalEntry.js'; // Ensure to include the file extension

// Health Metrics
export const addMetric = async (req, res) => {
    try {
        const metric = new HealthMetric({ ...req.body, user: req.userId });
        await metric.save();
        res.status(201).json(metric);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add metric' });
    }
};

export const getMetrics = async (req, res) => {
    try {
        const metrics = await HealthMetric.find({ user: req.userId });
        res.json(metrics);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch metrics' });
    }
};

// Journal Entries
export const addJournalEntry = async (req, res) => {
    try {
        const entry = new JournalEntry({ ...req.body, user: req.userId });
        await entry.save();
        res.status(201).json(entry);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add journal entry' });
    }
};

export const getJournalEntries = async (req, res) => {
    try {
        const entries = await JournalEntry.find({ user: req.userId });
        res.json(entries);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch journal entries' });
    }
};

export default { addMetric, getMetrics, addJournalEntry, getJournalEntries };
