import { create } from 'zustand';
import { authService, healthService } from '../services/api';

// Auth Store
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

// Journal Store
export const useJournalStore = create((set) => ({
    entries: [],
    loading: false,
    error: null,

    fetchJournalEntries: async () => {
        set({ loading: true, error: null });
        try {
            const entries = await healthService.fetchJournalEntries();
            set({ entries, loading: false });
        } catch (error) {
            set({ error: error.response?.data || error.message, loading: false });
        }
    },

    addJournalEntry: async (entry) => {
        set({ loading: true, error: null });
        try {
            const newEntry = await healthService.addJournalEntry(entry);
            set((state) => ({ entries: [...state.entries, newEntry], loading: false }));
        } catch (error) {
            set({ error: error.response?.data || error.message, loading: false });
        }
    },

    clearJournalError: () => set({ error: null }),
}));