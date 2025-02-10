const logger = require('./logger');

const errorHandler = (err, req, res, next) => {
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    res.status(err.statusCode || 500).json({
        success: false,
        error: process.env.NODE_ENV === 'development' ? err.message : 'Server Error'
    });
};

module.exports = errorHandler;