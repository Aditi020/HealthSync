import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const checkSymptoms = async (symptoms) => {
    const response = await api.post("/check-symptoms", { symptoms });
    return response.data;
};

export const fetchDoctors = async () => {
    const response = await api.get("/doctors");
    return response.data;
};

export const fetchHealthLogs = async () => {
    const response = await api.get("/health-logs");
    return response.data;
};

export const fetchMedications = async () => {
    const response = await api.get("/medications");
    return response.data;
};

export default api;