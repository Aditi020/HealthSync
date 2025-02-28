import { login } from '../../controllers/authController.js'; // Correct path

export default async (req, res) => {
    try {
        await login(req, res);
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