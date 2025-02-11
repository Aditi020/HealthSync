const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const healthRoutes = require('./routes/healthRoutes');
const medicationRoutes = require('./routes/medicationRoutes');
const symptomRoutes = require('./routes/symptomRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');

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