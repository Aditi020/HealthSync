const constants = require('./constants');

// Validation
const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePassword = (password) => {
    return password.length >= 8;
};

// Formatting
const formatDate = (date) => {
    return new Date(date).toISOString().split('T')[0];
};

// Error handling
const handleError = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

module.exports = {
    validateEmail,
    validatePassword,
    formatDate,
    handleError,
    ...constants
};