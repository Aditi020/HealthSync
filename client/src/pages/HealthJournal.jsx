import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const HealthJournal = () => {
    return (
        <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Health Journal</h1>
                <Button variant="outline">🔙</Button>
            </div>

            {/* Health Log Entry Form */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Log New Entry</CardTitle>
                </CardHeader>
                <CardContent>
                    <Input placeholder="Date & Time" className="mb-4" />
                    <Input placeholder="Symptoms" className="mb-4" />
                    <Input placeholder="Medications" className="mb-4" />
                    <Input placeholder="Doctor Visit Notes" className="mb-4" />
                    <Button className="bg-blue-600 hover:bg-blue-700">Save Entry</Button>
                </CardContent>
            </Card>

            {/* Recent Logs */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Logs</CardTitle>
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

export default HealthJournal;