import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Stethoscope, ClipboardList } from 'lucide-react'; // Icons for features
import Button from '../components/Button';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="text-center py-20 bg-blue-600 text-white">
                <h1 className="text-5xl font-bold mb-4">Your Health, Simplified</h1>
                <p className="text-xl mb-8">Track symptoms, manage your health journal, and get insights—all in one place.</p>
                <Link to="/register">
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">Get Started</Button>
                </Link>
            </div>

            {/* Key Features Section */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose HealthApp?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <HeartPulse className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                        <h3 className="text-xl font-semibold mb-2">Symptom Checker</h3>
                        <p className="text-gray-600">Quickly identify possible conditions based on your symptoms.</p>
                    </div>
                    <div className="text-center">
                        <Stethoscope className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                        <h3 className="text-xl font-semibold mb-2">Health Journal</h3>
                        <p className="text-gray-600">Log your symptoms, medications, and doctor visits.</p>
                    </div>
                    <div className="text-center">
                        <ClipboardList className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                        <h3 className="text-xl font-semibold mb-2">Personalized Insights</h3>
                        <p className="text-gray-600">Get actionable insights to improve your health.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;