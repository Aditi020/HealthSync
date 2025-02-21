import { register } from '../../controllers/authController.js';

export default async (req, res) => {
    try {
        await register(req, res);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const config = {
    api: {
        bodyParser: { sizeLimit: '1mb' },
        externalResolver: true
    }
};