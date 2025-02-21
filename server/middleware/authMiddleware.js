import jwt from 'jsonwebtoken';
import config from '../config/jwt.js';

const authenticate = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200); 
  }
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, config.accessToken.secret);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export default authenticate;