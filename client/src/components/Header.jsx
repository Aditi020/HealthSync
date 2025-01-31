import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, User } from 'lucide-react';
import { useTheme } from '../context/ThemeProvider';
import Button from './Button';
import { THEME } from '../utils/constants';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto" />
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">HealthApp</span>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                    <Link to="/symptom-checker" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Symptom Checker</Link>
                    <Link to="/health-journal" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Health Journal</Link>
                    <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Dashboard</Link>
                </nav>

                {/* Theme Toggle and User Profile */}
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" onClick={toggleTheme}>
                        {theme === THEME.LIGHT ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
                    </Button>
                    <Button variant="ghost">
                        <User className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;