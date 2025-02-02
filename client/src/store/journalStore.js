import { create } from "zustand";

const useJournalStore = create((set) => ({
    logs: [],
    addLog: (log) => set((state) => ({ logs: [...state.logs, log] })),
    deleteLog: (id) =>
        set((state) => ({ logs: state.logs.filter((log) => log.id !== id) })),
}));

export default useJournalStore;