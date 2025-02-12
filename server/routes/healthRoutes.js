import express from 'express';
import { addMetric, getMetrics, addJournalEntry, getJournalEntries } from '../controllers/healthController.js'; 
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.use(authMiddleware);

router.route('/metrics')
    .post(addMetric)
    .get(getMetrics);

router.route('/journal')
    .post(addJournalEntry)
    .get(getJournalEntries);

export default router;
