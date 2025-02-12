const express = require('express');
const { addMetric, getMetrics, addJournalEntry, getJournalEntries } = require('../controllers/healthController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.route('/metrics')
    .post(addMetric)
    .get(getMetrics);

router.route('/journal')
    .post(addJournalEntry)
    .get(getJournalEntries);

module.exports = router;