import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import Loader from '../components/Loader';

// Lazy load components
const Home = React.lazy(() => import('../pages/Home'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const SymptomChecker = React.lazy(() => import('../pages/SymptomChecker'));
const HealthJournal = React.lazy(() => import('../pages/HealthJournal'));
const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes */}
                <Route
                    path="/dashboard" element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                  }/>
                <Route
                    path="/symptom-checker" element={
                        <ProtectedRoute>
                            <SymptomChecker />
                        </ProtectedRoute>
                  }/>
                <Route
                    path="/health-journal" element={
                        <ProtectedRoute>
                            <HealthJournal />
                        </ProtectedRoute>
                  }/>

                {/* 404 Page */}
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;