import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import medicationRoutes from './routes/medicationRoutes.js';
import symptomRoutes from './routes/symptomRoutes.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import logger from './middleware/logger.js';
import 'dotenv/config';

// Create Express app
const app = express();

// ========== MIDDLEWARE ==========
app.use(cors());
app.use(helmet());
app.use(express.json());

// Request logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});

// ========== DATABASE CONNECTION ==========
connectDB();

// ========== ROUTES ==========
app.use('/api/auth', authRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/symptoms', symptomRoutes);
app.use('/api/users', userRoutes);

// ========== ERROR HANDLING ==========
app.use(errorHandler);

// ========== START SERVER ==========
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`Listening on port ${PORT}`);
});
