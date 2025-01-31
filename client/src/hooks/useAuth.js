import { useAuthStore } from '../store';

export const useAuth = () => {
    return useAuthStore((state) => ({
        user: state.user,
        loading: state.loading,
        error: state.error,
        login: state.login,
        logout: state.logout,
        register: state.register,
        checkAuth: state.checkAuth,
        clearError: state.clearError,
    }));
};