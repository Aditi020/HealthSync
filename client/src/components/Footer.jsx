import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Heart } from 'lucide-react'; // Added Mail and Heart icons

const Footer = () => {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4">About HealthApp</h3>
                        <p className="text-sm text-gray-400">
                            HealthApp helps you track your symptoms, manage your health journal, and get personalized insights to improve your well-being.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/about" className="text-sm text-gray-400 hover:text-blue-400">About Us</a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-sm text-gray-400 hover:text-blue-400">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-sm text-gray-400 hover:text-blue-400">Contact</a>
                            </li>
                            <li>
                                <a href="/faq" className="text-sm text-gray-400 hover:text-blue-400">FAQ</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media and Contact */}
                    <div className="text-center md:text-right">
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <div className="flex justify-center md:justify-end space-x-4">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-blue-400">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-blue-400">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="mailto:support@healthapp.com" className="text-gray-400 hover:text-blue-400">
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright and Attribution */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} HealthApp. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                        Made with <Heart className="inline h-4 w-4 text-red-500" /> by the HealthApp Team.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;