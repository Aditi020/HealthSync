import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: String,
  preferences: {
    theme: { type: String, default: 'light' },
    notifications: { type: Boolean, default: true }
  }
});

export default mongoose.model('User', userSchema);
