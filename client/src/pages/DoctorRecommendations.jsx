import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const DoctorRecommendations = () => {
    return (
        <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Doctor Recommendations</h1>
                <Button variant="outline">🔙</Button>
            </div>

            {/* Google Maps Integration */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Nearby Doctors</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 bg-gray-200 rounded-lg">
                        {/* Google Maps integration here */}
                    </div>
                </CardContent>
            </Card>

            {/* Doctor List */}
            <Card>
                <CardHeader>
                    <CardTitle>Recommended Doctors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
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

export default DoctorRecommendations;