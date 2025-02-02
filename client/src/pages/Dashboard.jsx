import { useAuth } from "../hooks/useAuth";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Welcome, {user?.name}!</h1>
                <div className="flex items-center gap-4">
                    <Input placeholder="Search symptoms..." className="w-64" />
                    <Button variant="outline">🔔</Button>
                    <Button variant="outline">🌙</Button>
                </div>
            </div>

            {/* Quick Health Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Latest Symptoms</CardTitle>
                        <CardDescription>🤒 Fever, 🤕 Headache</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Next Medication</CardTitle>
                        <CardDescription>Paracetamol – 2 Tablets at 6:00 PM</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Appointment</CardTitle>
                        <CardDescription>Dr. Smith – Cardiologist, Tomorrow at 10:00 AM</CardDescription>
                    </CardHeader>
                </Card>
            </div>

            {/* Symptom Checker Section */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Symptom Checker</CardTitle>
                    <CardDescription>Enter your symptoms to get possible conditions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Input placeholder="Enter symptoms..." className="mb-4" />
                    <Button className="bg-blue-600 hover:bg-blue-700">Check Symptoms</Button>
                    <p className="mt-2 text-sm text-gray-500">View past entries</p>
                </CardContent>
            </Card>

            {/* Recent Logs Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Health Logs</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <p className="text-sm text-gray-500">2023-10-15</p>
                            <p>🤒 Fever, 🤕 Headache</p>
                            <p>Feeling unwell after dinner.</p>
                            <Button variant="link" className="p-0">View More</Button>
                        </div>
                        {/* Add more logs here */}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;