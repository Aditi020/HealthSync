import React from 'react';
import { Calendar, Activity, BookOpen } from 'lucide-react';
import Button from '../components/Button';
import { useFetch } from '../hooks/useFetch';

const Dashboard = () => {
    const { data: healthData, loading, error } = useFetch('/health/insights');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Recent Journal Entries</h2>
                    <p className="text-gray-600">View your latest health logs.</p>
                    <Button className="mt-4" variant="outline">
                        <BookOpen className="mr-2 h-4 w-4" />
                        View Journal
                    </Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Symptom Checker</h2>
                    <p className="text-gray-600">Check your symptoms now.</p>
                    <Button className="mt-4" variant="outline">
                        <Activity className="mr-2 h-4 w-4" />
                        Check Symptoms
                    </Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Upcoming Appointments</h2>
                    <p className="text-gray-600">View your schedule.</p>
                    <Button className="mt-4" variant="outline">
                        <Calendar className="mr-2 h-4 w-4" />
                        View Calendar
                    </Button>
                </div>
            </div>

            {/* Health Insights */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Health Insights</h2>
                {healthData ? (
                    <p className="text-gray-600">Your health trends and recommendations will appear here.</p>
                ) : (
                    <p className="text-gray-600">No data available.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;