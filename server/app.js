const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const healthRoutes = require('./routes/healthRoutes');
const medicationRoutes = require('./routes/medicationRoutes');
const symptomRoutes = require('./routes/symptomRoutes');
const userRoutes = require('./routes/userRoutes'); // New import
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger'); // New import

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Request logging
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl}`);
    next();
});

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/symptoms', symptomRoutes);
app.use('/api/users', userRoutes); // New route

// Error handling
app.use(errorHandler);

module.exports = app;