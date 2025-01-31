import { useAuthStore } from '../store';
import { saveToLocalStorage, removeFromLocalStorage, handleApiError } from '../utils/helpers';
import { LOCAL_STORAGE_KEYS } from '../utils/constants';

export const useAuth = () => {
    const { user, loading, error, login, logout, register, checkAuth, clearError } = useAuthStore((state) => ({
        user: state.user,
        loading: state.loading,
        error: state.error,
        login: state.login,
        logout: state.logout,
        register: state.register,
        checkAuth: state.checkAuth,
        clearError: state.clearError,
    }));

    const handleLogin = async (email, password) => {
        try {
            const userData = await login(email, password);
            saveToLocalStorage(LOCAL_STORAGE_KEYS.TOKEN, userData.token); // Save token to localStorage
            saveToLocalStorage(LOCAL_STORAGE_KEYS.USER, userData.user); // Save user data to localStorage
        } catch (error) {
            throw handleApiError(error); // Use helper function for error handling
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            removeFromLocalStorage(LOCAL_STORAGE_KEYS.TOKEN); // Remove token from localStorage
            removeFromLocalStorage(LOCAL_STORAGE_KEYS.USER); // Remove user data from localStorage
        } catch (error) {
            throw handleApiError(error); // Use helper function for error handling
        }
    };

    return {
        user,
        loading,
        error,
        login: handleLogin,
        logout: handleLogout,
        register,
        checkAuth,
        clearError,
    };
};