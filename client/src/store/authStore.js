import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { useJournalStore } from './journalStore';
import { useMedicationStore } from './medicationStore';
import { useHealthMetricsStore } from './healthMetricsStore';
import { useSymptomStore } from './symptomStore';

const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

// Configure axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});

// Add interceptor to inject token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

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
          const response = await api.post('/auth/register', userData);

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
            return true;
          }
          return false;
        } catch (error) {
          const errorMessage = error.response?.data?.error
            || error.message
            || 'Registration failed';
          set({ error: errorMessage, isLoading: false });
          return false;
        }
      },

      // Login function
      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const response = await api.post('/auth/login', { email, password });

          if (response.data?.token && response.data?.user) {
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
            localStorage.setItem('token', response.data.token);
            return true;
          }
          return false;
        } catch (error) {
          const errorMessage = error.response?.data?.error
            || error.message
            || 'Login failed';
          set({ error: errorMessage, isLoading: false });
          return false;
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