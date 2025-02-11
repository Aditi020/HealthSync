const express = require('express');
// CORRECTED IMPORT: Use medicationController
const { addMedication, getMedications, markAsTaken } = require('../controllers/medicationController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.route('/')
    .post(addMedication)
    .get(getMedications);

router.post('/:id/taken', markAsTaken);

module.exports = router;