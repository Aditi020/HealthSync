const express = require('express');
const { analyzeSymptoms } = require('../controllers/symptomController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);
router.post('/check', analyzeSymptoms);

module.exports = router;