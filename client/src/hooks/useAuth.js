import { useEffect } from "react";
import useAuthStore from "../store/authStore";

const useAuth = () => {
    const { user, isAuthenticated, login, logout, register } = useAuthStore();

    useEffect(() => {
        // Check for existing session or token
        const token = localStorage.getItem("token");
        if (token) {
            // Fetch user data and set authentication state
        }
    }, []);

    return { user, isAuthenticated, login, logout, register };
};

export default useAuth;