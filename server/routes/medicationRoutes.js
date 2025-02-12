import express from 'express';
import { addMedication, getMedications, markAsTaken } from '../controllers/medicationController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.route('/')
    .post(addMedication)
    .get(getMedications);

router.post('/:id/taken', markAsTaken);

export default router;
