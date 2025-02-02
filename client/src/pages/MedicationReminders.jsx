import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const MedicationReminders = () => {
    return (
        <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Medication Reminders</h1>
                <Button variant="outline">🔙</Button>
            </div>

            {/* Medication List */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Your Medications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <h3 className="font-bold">Paracetamol</h3>
                        <p>2 Tablets at 6:00 PM</p>
                        <Button variant="destructive" className="mt-2">Delete</Button>
                    </div>
                    {/* Add more medications here */}
                </CardContent>
            </Card>

            {/* Add New Reminder */}
            <Card>
                <CardHeader>
                    <CardTitle>Add New Reminder</CardTitle>
                </CardHeader>
                <CardContent>
                    <Button className="bg-blue-600 hover:bg-blue-700">Add Reminder</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default MedicationReminders;