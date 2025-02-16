import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { useJournalStore } from './journalStore';
import { useMedicationStore } from './medicationStore';
import { useHealthMetricsStore } from './healthMetricsStore';
import { useSymptomStore } from './symptomStore';

const API_BASE_URL = 'http://localhost:5000/api/auth';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Register function
      register: async (userData) => {
        set({ isLoading: true, error: null });
        try {
          const response = await axios.post(`${API_BASE_URL}/register`, userData);

          if (response.data?.token && response.data?.user) {
            // Reset all stores for new user
            useJournalStore.getState().resetLogs();
            useMedicationStore.getState().resetMedications();
            useHealthMetricsStore.getState().resetMetrics();
            useSymptomStore.getState().resetSymptoms();

            set({
              user: response.data.user,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
            localStorage.setItem('token', response.data.token);
          }
        } catch (error) {
          set({ error: error.response?.data?.error || 'Registration failed', isLoading: false });
        }
      },

      // Login function
      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const response = await axios.post(`${API_BASE_URL}/login`, { email, password });

          if (response.data?.token && response.data?.user) {
            // Store token in localStorage
            localStorage.setItem('token', response.data.token);

            // Reset all stores
            useJournalStore.getState().resetLogs();
            useMedicationStore.getState().resetMedications();
            useHealthMetricsStore.getState().resetMetrics();
            useSymptomStore.getState().resetSymptoms();

            set({
              user: response.data.user,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
          } else {
            throw new Error('Invalid server response');
          }
        } catch (error) {
          set({
            error: error.response?.data?.error || 'Invalid email or password',
            isLoading: false,
          });
        }
      },

      // Logout function
      logout: () => {
        // Reset all stores
        useJournalStore.getState().resetLogs();
        useMedicationStore.getState().resetMedications();
        useHealthMetricsStore.getState().resetMetrics();
        useSymptomStore.getState().resetSymptoms();

        // Clear auth state
        set({ user: null, isAuthenticated: false, error: null });
        localStorage.removeItem('token');
      },
    }),
    {
      name: 'auth-storage',
      storage: {
        getItem: (name) => localStorage.getItem(name),
        setItem: (name, value) => localStorage.setItem(name, value),
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);