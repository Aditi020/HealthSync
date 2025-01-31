import { create } from 'zustand';
import { authService } from '../services/api';

export const useAuthStore = create((set) => ({
    user: null,
    loading: false,
    error: null,

    login: async (email, password) => {
        set({ loading: true, error: null });
        try {
            const user = await authService.login(email, password);
            set({ user, loading: false });
        } catch (error) {
            set({ error: error.response?.data || error.message, loading: false });
        }
    },

    logout: async () => {
        set({ loading: true });
        try {
            await authService.logout();
            set({ user: null, loading: false });
        } catch (error) {
            set({ error: error.response?.data || error.message, loading: false });
        }
    },

    register: async (email, password) => {
        set({ loading: true, error: null });
        try {
            const user = await authService.register(email, password);
            set({ user, loading: false });
        } catch (error) {
            set({ error: error.response?.data || error.message, loading: false });
        }
    },

    checkAuth: async () => {
        set({ loading: true });
        try {
            const user = await authService.checkAuth();
            set({ user, loading: false });
        } catch (error) {
            set({ user: null, loading: false });
        }
    },

    clearError: () => set({ error: null }),
}));