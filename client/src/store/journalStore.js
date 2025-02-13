import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useJournalStore = create(
  persist(
    (set, get) => ({
      logs: [],
      isLoading: false,
      error: null,

      addLog: (log) => {
        const newLog = {
          ...log,
          id: `log-${Date.now()}-${Math.random()}`,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({
          logs: [newLog, ...state.logs],
        }));
      },

      updateLog: (id, updatedLog) => {
        set((state) => ({
          logs: state.logs.map((log) =>
            log.id === id ? { ...log, ...updatedLog } : log
          ),
        }));
      },

      deleteLog: (id) => {
        set((state) => ({
          logs: state.logs.filter((log) => log.id !== id),
        }));
      },

      getLogsByDateRange: (startDate, endDate) => {
        const { logs } = get();
        return logs.filter(
          (log) => log.date >= startDate && log.date <= endDate
        );
      },
    }),
    {
      name: 'health-journal-storage',
    }
  )
);