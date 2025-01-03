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
    <div className="p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-8">Teacher Dashboard</h1>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-xl border-t-4 border-blue-500 hover:shadow-lg transition-all"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</h2>
            <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Notifications */}
      <div className="bg-white shadow-md p-6 rounded-xl border-t-4 border-blue-500 mb-10 hover:shadow-lg transition-all">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Recent Notifications</h2>
        <ul className="space-y-3">
          {recentNotifications.map((notification, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <span className="block px-3 py-2 rounded-md hover:bg-blue-50 transition-all">
                {notification}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Overview */}
      <div className="bg-white shadow-md p-6 rounded-xl border-t-4 border-blue-500 hover:shadow-lg transition-all">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Projects Overview</h2>
        <p className="text-gray-700 text-lg mb-6">
          You have <span className="font-semibold text-blue-600">5 ongoing projects</span> and{' '}
          <span className="font-semibold text-blue-600">2 completed projects</span>.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
