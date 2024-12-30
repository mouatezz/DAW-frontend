import React from 'react';

const AdminDashboard = () => {
  const dashboardStats = [
    { title: 'Active Projects', count: 24, description: 'Currently ongoing' },
    { title: 'Total Users', count: 156, description: 'Students & Teachers' },
    { title: 'Pending Requests', count: 12, description: 'Awaiting review' },
  ];

  const recentActivities = [
    { activity: 'New project proposal submitted', time: '2 hours ago' },
    { activity: 'Student group formed', time: '5 hours ago' },
    { activity: 'Project assignment completed', time: '1 day ago' },
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen">
      {/* Dashboard Header */}
      <h1 className="text-4xl font-extrabold text-blue-800 mb-8">
        Admin Dashboard
      </h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {dashboardStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-xl border-t-4 border-blue-500 hover:shadow-lg transition-all"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{stat.title}</h2>
            <p className="text-4xl font-bold text-blue-600">{stat.count}</p>
            <p className="text-gray-600 mt-2">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white shadow-md p-6 rounded-xl border-t-4 border-blue-500 mb-10 hover:shadow-lg transition-all">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Recent Activities</h2>
        <div className="space-y-3">
          {recentActivities.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-blue-50 transition-all cursor-pointer"
            >
              <span className="text-gray-700 hover:text-blue-600 transition-colors">
                {item.activity}
              </span>
              <span className="text-sm text-gray-500">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-white shadow-md p-6 rounded-xl border-t-4 border-blue-500 hover:shadow-lg transition-all">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">System Overview</h2>
        <p className="text-gray-700 text-lg mb-6">
          You have <span className="font-semibold text-blue-600">24 active projects</span> and{' '}
          <span className="font-semibold text-blue-600">12 pending requests</span> to review.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md transition-all">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;