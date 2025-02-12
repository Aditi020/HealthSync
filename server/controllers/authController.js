import User from '../models/User.js'; import jwt from 'jsonwebtoken';
import config from '../config/jwt.js'; 
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // In production: const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: config.expiresIn });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // In production: const validPassword = await bcrypt.compare(password, user.password);
    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: config.expiresIn });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

export default { register, login };
