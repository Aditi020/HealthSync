import express from 'express';
import { getProfile, updateProfile, updatePreferences } from '../controllers/userController.js'; 
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.route('/profile')
    .get(getProfile)
    .put(updateProfile);

router.put('/preferences', updatePreferences);

export default router;