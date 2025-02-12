const express = require('express');
const { getProfile, updateProfile, updatePreferences } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.route('/profile')
    .get(getProfile)
    .put(updateProfile);

router.put('/preferences', updatePreferences);

module.exports = router;