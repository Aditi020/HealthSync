import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // For API calls

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Check if the user is already logged in (e.g., on page refresh)
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('/api/check-auth'); // Endpoint to check auth status
                setUser(response.data.user);
            } catch (error) {
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    // Login function
    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/login', { email, password });
            setUser(response.data.user);
        } catch (error) {
            throw error;
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await axios.post('/api/logout');
            setUser(null);
        } catch (error) {
            throw error;
        }
    };

    // Register function
    const register = async (email, password) => {
        try {
            const response = await axios.post('/api/register', { email, password });
            setUser(response.data.user);
        } catch (error) {
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};