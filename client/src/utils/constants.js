// API Endpoints
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        LOGOUT: '/auth/logout',
        REGISTER: '/auth/register',
        CHECK_AUTH: '/auth/check-auth',
    },
    HEALTH: {
        JOURNAL_ENTRIES: '/health/journal-entries',
        ANALYZE_SYMPTOMS: '/health/analyze-symptoms',
        HEALTH_INSIGHTS: '/health/insights',
    },
    DOCTORS: {
        NEARBY: '/doctors/nearby',
    },
    REMINDERS: {
        REMINDERS: '/reminders',
    },
};

// LocalStorage Keys
export const LOCAL_STORAGE_KEYS = {
    TOKEN: 'token',
    USER: 'user',
};

// Theme Constants
export const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
};

// Error Messages
export const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Network error. Please check your internet connection.',
    UNAUTHORIZED: 'Unauthorized access. Please log in.',
    DEFAULT: 'Something went wrong. Please try again later.',
};