import User from '../models/User.js'; 
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import config from '../config/jwt.js'; 
import bcrypt from 'bcryptjs';
console.log("JWT_SECRET in authController.js:", config.accessToken.secret);

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ userId: user._id }, config.accessToken.secret, { expiresIn: config.accessToken.expiresIn });

    // Log the response being sent
    console.log('Registration Response:', {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

    // Send response
    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ error: 'Registration failed', details: error.message });
  }
};

// login
  export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    // 2. Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

    // 3. Generate JWT token using config.accessToken.secret
    const token = jwt.sign({ userId: user._id }, config.accessToken.secret, {
      expiresIn: config.accessToken.expiresIn, // Use the same expiration as config
    });

    // 4. Send response
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

export default { register, login };
