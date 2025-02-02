import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useTheme } from "../context/ThemeProvider";

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="bg-white dark:bg-gray-800 shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    HealthSync
                </Link>
                <div className="flex items-center gap-4">
                    <Button onClick={toggleTheme}>
                        {theme === "light" ? "🌙" : "☀️"}
                    </Button>
                    <Link to="/profile">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Profile"
                            className="rounded-full"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;