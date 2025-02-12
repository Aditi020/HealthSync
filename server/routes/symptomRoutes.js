import express from 'express';
import { analyzeSymptoms } from '../controllers/symptomController.js'; 
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.use(authMiddleware);

router.post('/check', analyzeSymptoms);

export default router;
