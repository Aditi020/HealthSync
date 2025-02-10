const User = require('../models/User');

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
};

const updateProfile = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.userId,
            { $set: req.body },
            { new: true, runValidators: true }
        ).select('-password');

        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Update failed' });
    }
};

const updatePreferences = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.userId,
            { $set: { preferences: req.body } },
            { new: true }
        ).select('-password');

        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Preferences update failed' });
    }
};

module.exports = { getProfile, updateProfile, updatePreferences };