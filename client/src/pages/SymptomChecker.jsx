import React, { useState } from 'react';
import { Search, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import axios from 'axios'; // For API calls

const SymptomChecker = () => {
    const [symptoms, setSymptoms] = useState('');
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckSymptoms = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('/api/symptom-checker', { symptoms });
            setResults(response.data);
        } catch (error) {
            console.error('Error checking symptoms:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-8">Symptom Checker</h1>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center border border-gray-300 rounded-lg p-2 mb-4">
                    <Search className="h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Enter your symptoms..."
                        className="flex-grow ml-2 outline-none"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                    />
                </div>
                <Button onClick={handleCheckSymptoms} disabled={isLoading}>
                    {isLoading ? 'Checking...' : 'Check Symptoms'}
                </Button>
            </div>

            {/* Results Section */}
            {results && (
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Results</h2>
                    <p className="text-gray-600">{results}</p>
                </div>
            )}
        </div>
    );
};

export default SymptomChecker;