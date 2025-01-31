import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../utils/constants';
import { handleApiError } from '../utils/helpers';

// Utility function to make API requests
const makeRequest = async (method, endpoint, data = null, headers = {}) => {
    const authToken = localStorage.getItem('token'); // Get token from localStorage
    if (authToken) {
        headers.Authorization = `Bearer ${authToken}`;
    }

    try {
        const response = await axios({
            method,
            url: `${API_BASE_URL}${endpoint}`,
            data,
            headers,
        });
        return response.data;
    } catch (error) {
        throw handleApiError(error); // Use helper function for error handling
    }
};

// Authentication Services
export const authService = {
    login: async (email, password) => {
        return makeRequest('post', API_ENDPOINTS.AUTH.LOGIN, { email, password });
    },
    logout: async () => {
        return makeRequest('post', API_ENDPOINTS.AUTH.LOGOUT);
    },
    register: async (email, password) => {
        return makeRequest('post', API_ENDPOINTS.AUTH.REGISTER, { email, password });
    },
    checkAuth: async () => {
        return makeRequest('get', API_ENDPOINTS.AUTH.CHECK_AUTH);
    },
};

// Health Data Services
export const healthService = {
    fetchJournalEntries: async () => {
        return makeRequest('get', API_ENDPOINTS.HEALTH.JOURNAL_ENTRIES);
    },
    addJournalEntry: async (entry) => {
        return makeRequest('post', API_ENDPOINTS.HEALTH.JOURNAL_ENTRIES, entry);
    },
    analyzeSymptoms: async (symptoms) => {
        return makeRequest('post', API_ENDPOINTS.HEALTH.ANALYZE_SYMPTOMS, { symptoms });
    },
    fetchHealthInsights: async () => {
        return makeRequest('get', API_ENDPOINTS.HEALTH.HEALTH_INSIGHTS);
    },
};

// Doctor Recommendations Services
export const doctorService = {
    fetchNearbyDoctors: async (location) => {
        return makeRequest('post', API_ENDPOINTS.DOCTORS.NEARBY, { location });
    },
};

// Medication Reminders Services
export const reminderService = {
    fetchReminders: async () => {
        return makeRequest('get', API_ENDPOINTS.REMINDERS.REMINDERS);
    },
    addReminder: async (reminder) => {
        return makeRequest('post', API_ENDPOINTS.REMINDERS.REMINDERS, reminder);
    },
};