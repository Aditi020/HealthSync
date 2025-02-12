const Medication = require('../models/Medication');

const addMedication = async (req, res) => {
    try {
        const medication = new Medication({ ...req.body, user: req.userId });
        await medication.save();
        res.status(201).json(medication);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add medication' });
    }
};

const getMedications = async (req, res) => {
    try {
        const medications = await Medication.find({ user: req.userId });
        res.json(medications);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch medications' });
    }
};

const markAsTaken = async (req, res) => {
    try {
        const medication = await Medication.findById(req.params.id);
        medication.lastTaken = new Date();

        // Calculate next dose
        const nextDose = new Date(medication.nextDose);
        switch (medication.frequency) {
            case 'daily': nextDose.setDate(nextDose.getDate() + 1); break;
            case 'weekly': nextDose.setDate(nextDose.getDate() + 7); break;
            case 'monthly': nextDose.setMonth(nextDose.getMonth() + 1); break;
        }

        medication.nextDose = nextDose;
        await medication.save();
        res.json(medication);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update medication' });
    }
};

module.exports = { addMedication, getMedications, markAsTaken };