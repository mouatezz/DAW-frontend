import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!formData.email.includes("@")) {
        throw new Error("Invalid email format");
      }

      if (formData.password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
      }

      switch (formData.userType) {
        case "admin":
          navigate("/AdminDashboard");
          break;
        case "teacher":
          navigate("/TeacherDashboard");
          break;
        case "student":
          navigate("/StudentDashboard");
          break;
        default:
          throw new Error("Please select a user type");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/src/assets/NTIC(1).jpg')` }}
    >
      <div className="w-[32rem] p-10 rounded-3xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center hover:text-blue-500 cursor-default">
          Master Projects Platform
        </h2>

        {error && (
          <div className="mb-6 text-red-500 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
              disabled={isLoading}
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
              disabled={isLoading}
              minLength={6}
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2">
              User Type
            </label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              disabled={isLoading}
            >
              <option value="" className="text-gray-500">
                Select type
              </option>
              <option value="admin" className="text-black">
                Admin
              </option>
              <option value="teacher" className="text-black">
                Teacher
              </option>
              <option value="student" className="text-black">
                Student
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold uppercase tracking-wide shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? "Connecting..." : "Connect"}
          </button>
        </form>

        <div className="mt-6 flex justify-between text-sm text-blue-400">
          <button
            type="button"
            className="hover:underline"
            onClick={() => navigate("/Register")}
          >
            Register
          </button>
          <button
            type="button"
            className="hover:underline"
            onClick={() => navigate("/ForgotPassword")}
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
