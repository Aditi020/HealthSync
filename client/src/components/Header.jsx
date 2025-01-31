import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, User, Moon, Sun } from 'lucide-react'; // Added Moon and Sun icons for theme toggle
import { Button } from './Button'; // Reusable Button component
import { useTheme } from '../context/ThemeProvider'; // Use the ThemeContext

const Header = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme and toggle function from context

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

                {/* User Profile, Theme Toggle, and Mobile Menu */}
                <div className="flex items-center space-x-4">
                    {/* Theme Toggle Button */}
                    <Button variant="ghost" onClick={toggleTheme}>
                        {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
                    </Button>

                    {/* Mobile Menu Button (Hidden on Desktop) */}
                    <Button variant="ghost" className="md:hidden">
                        <Menu className="h-6 w-6" />
                    </Button>

                    {/* User Profile Button */}
                    <Button variant="ghost">
                        <User className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;