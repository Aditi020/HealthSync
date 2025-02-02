import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import SymptomChecker from "../pages/SymptomChecker";
import HealthJournal from "../pages/HealthJournal";
import DoctorRecommendations from "../pages/DoctorRecommendations";
import MedicationReminders from "../pages/MedicationReminders";
import HealthInsights from "../pages/HealthInsights";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="/dashboard"
                element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
            />
            <Route
                path="/symptom-checker"
                element={<ProtectedRoute><SymptomChecker /></ProtectedRoute>}
            />
            <Route
                path="/health-journal"
                element={<ProtectedRoute><HealthJournal /></ProtectedRoute>}
            />
            <Route
                path="/doctor-recommendations"
                element={<ProtectedRoute><DoctorRecommendations /></ProtectedRoute>}
            />
            <Route
                path="/medication-reminders"
                element={<ProtectedRoute><MedicationReminders /></ProtectedRoute>}
            />
            <Route
                path="/health-insights"
                element={<ProtectedRoute><HealthInsights /></ProtectedRoute>}
            />
        </Routes>
    );
};

export default AppRoutes;