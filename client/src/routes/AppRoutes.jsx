import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import SymptomChecker from '../pages/SymptomChecker';
import HealthJournal from '../pages/HealthJournal';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoute from './ProtectedRoute'; // For protecting private routes

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes (Require Authentication) */}
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/symptom-checker"
                element={
                    <ProtectedRoute>
                        <SymptomChecker />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/health-journal"
                element={
                    <ProtectedRoute>
                        <HealthJournal />
                    </ProtectedRoute>
                }
            />

            {/* 404 Page (Fallback) */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    );
};

export default AppRoutes;