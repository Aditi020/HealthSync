import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const SymptomChecker = () => {
    return (
        <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Symptom Checker</h1>
                <Button variant="outline">🔙</Button>
            </div>

            {/* Symptom Input Section */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Enter Your Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                    <Input placeholder="Enter symptoms..." className="mb-4" />
                    <div className="flex gap-4">
                        <Button className="bg-blue-600 hover:bg-blue-700">Check Symptoms</Button>
                        <Button variant="outline">Clear</Button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Be specific about your symptoms for accurate suggestions.</p>
                </CardContent>
            </Card>

            {/* Suggested Conditions */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Suggested Conditions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <h3 className="font-bold">Fever</h3>
                        <p>High body temperature caused by infection.</p>
                        <span className="text-sm text-red-500">High Urgency</span>
                        <Button variant="link" className="p-0">More Info</Button>
                    </div>
                    {/* Add more conditions here */}
                </CardContent>
            </Card>

            {/* Doctor Recommendations */}
            <Card>
                <CardHeader>
                    <CardTitle>Doctor Recommendations</CardTitle>
                </CardHeader>
                <CardContent className="flex overflow-x-auto gap-4">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow min-w-[300px]">
                        <h3 className="font-bold">Dr. Emily Watson</h3>
                        <p>Neurologist</p>
                        <p>⭐️⭐️⭐️⭐️⭐️ (2.5 miles away)</p>
                        <Button className="mt-2 bg-blue-600 hover:bg-blue-700">Book Appointment</Button>
                    </div>
                    {/* Add more doctors here */}
                </CardContent>
            </Card>
        </div>
    );
};

export default SymptomChecker;