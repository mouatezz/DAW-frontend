import React from 'react';

const Dashboard = () => {
  // Sample data
  const stats = [
    { label: 'Projects Created', value: 12 },
    { label: 'Pending Applications', value: 8 },
    { label: 'Messages Received', value: 15 },
  ];

  const recentNotifications = [
    'New application received for Project X.',
    'Deadline approaching for Project Y.',
    'Student John Doe sent a message.',
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Teacher Dashboard</h1>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-blue-50 shadow-lg p-6 rounded-lg border border-blue-200 hover:border-blue-400 transition-all"
          >
            <h2 className="text-lg font-semibold text-blue-700 mb-2">{stat.label}</h2>
            <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Notifications */}
      <div className="bg-white shadow-lg p-6 rounded-lg border border-blue-200 mb-8 hover:border-blue-400 transition-all">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Recent Notifications</h2>
        <ul className="list-disc pl-5 space-y-2">
          {recentNotifications.map((notification, index) => (
            <li key={index} className="text-gray-700 hover:text-blue-600 transition-colors">
              {notification}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Overview */}
      <div className="bg-white shadow-lg p-6 rounded-lg border border-blue-200 hover:border-blue-400 transition-all">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Projects Overview</h2>
        <p className="text-gray-700 mb-4">You have 5 ongoing projects and 2 completed projects.</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          View Projects
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
