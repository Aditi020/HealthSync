import { create } from 'zustand';
import { healthService } from '../services/api';

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