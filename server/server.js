import dotenv from 'dotenv';
dotenv.config();

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

const app = express();
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// ========== SECURITY MIDDLEWARE ==========
app.use(helmet({
  contentSecurityPolicy: process.env.NODE_ENV === 'production',
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// ========== CORS CONFIGURATION ==========
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://your-production-domain.com'
];

// Enhanced CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  optionsSuccessStatus: 200,
  preflightContinue: false
};

// Must be the first middleware after security headers
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

// ========== HEADERS MIDDLEWARE ==========
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Expose-Headers', 'Authorization'); 
  next();
});

// ========== LOGGING MIDDLEWARE ==========
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl} - ${req.ip}`);
  next();
});

// ========== DATABASE CONNECTION ==========
const startDatabase = async () => {
  try {
    await connectDB();
    if (process.env.NODE_ENV !== 'production') {
      console.log('📦 MongoDB connection established');
    }
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

// ========== ROUTES ==========
app.use('/api/auth', authRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/symptoms', symptomRoutes);
app.use('/api/users', userRoutes);

// ========== HEALTH CHECK ==========
app.get('/api/healthcheck', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// ========== ERROR HANDLING ==========
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.use(errorHandler);

// ========== SERVER INITIALIZATION ==========
const startServer = async () => {
  await startDatabase();
  const PORT = process.env.PORT || 5000;

  if (process.env.NODE_ENV === 'production') {
    module.exports = app;
  } else {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🔗 http://localhost:${PORT}`);
    });
  }
};

startServer();