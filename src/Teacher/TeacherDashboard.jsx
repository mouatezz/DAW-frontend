import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Teacher Dashboard</h1>
            <button 
              onClick={() => navigate('/')}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard title="My Projects" count="0" />
          <DashboardCard title="Pending Applications" count="0" />
          <DashboardCard title="Messages" count="0" />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, count }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    <p className="text-3xl font-bold text-blue-600 mt-2">{count}</p>
  </div>
);

export default TeacherDashboard;