import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-50 to-green-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to HealthSync</h1>
      <p className="text-gray-600 mb-8">Your health, simplified.</p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;