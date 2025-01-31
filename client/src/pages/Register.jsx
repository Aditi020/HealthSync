import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import axios from 'axios'; // For API calls

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('/api/register', { email, password });
            console.log('Registration successful:', response.data);
            // Redirect to login or handle token storage
        } catch (error) {
            console.error('Error registering:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border border-gray-300 rounded-lg mb-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="w-full" onClick={handleRegister} disabled={isLoading}>
                    {isLoading ? 'Registering...' : 'Register'}
                </Button>
                <p className="text-center mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;