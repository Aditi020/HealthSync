import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    login: (user) => set({ user, isAuthenticated: true }),
    logout: () => set({ user: null, isAuthenticated: false }),
        register: (user) => set({ user, isAuthenticated: true }),
}));

export default useAuthStore;