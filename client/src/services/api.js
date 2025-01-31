import axios from 'axios';

// Base URL for the backend API
const API_BASE_URL = 'http://localhost:5000/api'; // Update with your backend URL

// Utility function to make API requests
const makeRequest = async (method, endpoint, data = null, headers = {}) => {
    try {
        const response = await axios({
            method,
            url: `${API_BASE_URL}${endpoint}`,
            data,
            headers,
        });
        return response.data;
    } catch (error) {
        console.error(`API Error (${endpoint}):`, error.response?.data || error.message);
        throw error;
    }
};

// Authentication Services
export const authService = {
    login: async (email, password) => {
        return makeRequest('post', '/auth/login', { email, password });
    },
    logout: async () => {
        return makeRequest('post', '/auth/logout');
    },
    register: async (email, password) => {
        return makeRequest('post', '/auth/register', { email, password });
    },
    checkAuth: async () => {
        return makeRequest('get', '/auth/check-auth');
    },
};

// Health Data Services
export const healthService = {
    fetchJournalEntries: async () => {
        return makeRequest('get', '/health/journal-entries');
    },
    addJournalEntry: async (entry) => {
        return makeRequest('post', '/health/journal-entries', entry);
    },
    analyzeSymptoms: async (symptoms) => {
        return makeRequest('post', '/health/analyze-symptoms', { symptoms });
    },
    fetchHealthInsights: async () => {
        return makeRequest('get', '/health/insights');
    },
};

// Doctor Recommendations Services
export const doctorService = {
    fetchNearbyDoctors: async (location) => {
        return makeRequest('post', '/doctors/nearby', { location });
    },
};

// Medication Reminders Services
export const reminderService = {
    fetchReminders: async () => {
        return makeRequest('get', '/reminders');
    },
    addReminder: async (reminder) => {
        return makeRequest('post', '/reminders', reminder);
    },
};