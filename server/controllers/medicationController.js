import Medication from '../models/Medication.js'; // Ensure to include the file extension

export const addMedication = async (req, res) => {
    try {
        const medication = new Medication({ ...req.body, user: req.userId });
        await medication.save();
        res.status(201).json(medication);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add medication' });
    }
};

export const getMedications = async (req, res) => {
    try {
        const medications = await Medication.find({ user: req.userId });
        res.json(medications);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch medications' });
    }
};

export const markAsTaken = async (req, res) => {
    try {
        const medication = await Medication.findById(req.params.id);
        if (!medication) {
            return res.status(404).json({ error: 'Medication not found' });
        }

        medication.lastTaken = new Date();

        // Calculate next dose
        const nextDose = new Date(medication.nextDose);
        switch (medication.frequency) {
            case 'daily':
                nextDose.setDate(nextDose.getDate() + 1);
                break;
            case 'weekly':
                nextDose.setDate(nextDose.getDate() + 7);
                break;
            case 'monthly':
                nextDose.setMonth(nextDose.getMonth() + 1);
                break;
        }

        medication.nextDose = nextDose;
        await medication.save();
        res.json(medication);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update medication' });
    }
};

export default { addMedication, getMedications, markAsTaken };
