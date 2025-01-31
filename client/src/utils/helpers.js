// Format a date to a readable string
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

// Get a value from localStorage
export const getFromLocalStorage = (key) => {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
    }
};

// Save a value to localStorage
export const saveToLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};

// Remove a value from localStorage
export const removeFromLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing from localStorage:', error);
    }
};

// Handle API errors
export const handleApiError = (error) => {
    if (error.response) {
        // Server responded with a status code outside 2xx
        console.error('API Error:', error.response.data);
        return error.response.data.message || ERROR_MESSAGES.DEFAULT;
    } else if (error.request) {
        // No response received (network error)
        console.error('Network Error:', error.request);
        return ERROR_MESSAGES.NETWORK_ERROR;
    } else {
        // Something else went wrong
        console.error('Error:', error.message);
        return ERROR_MESSAGES.DEFAULT;
    }
};

// Capitalize the first letter of a string
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Debounce function for delaying expensive operations
export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
};