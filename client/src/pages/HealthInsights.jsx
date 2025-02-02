import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

const HealthInsights = () => {
    return (
        <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Health Insights</h1>
                <Button variant="outline">🔙</Button>
            </div>

            {/* Graphical Analytics */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Symptom Frequency</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 bg-gray-200 rounded-lg">
                        {/* Line graph here */}
                    </div>
                </CardContent>
            </Card>

            {/* Weekly/Monthly Reports */}
            <Card>
                <CardHeader>
                    <CardTitle>Reports</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 bg-gray-200 rounded-lg">
                        {/* Bar chart here */}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default HealthInsights;