import React from 'react';

const StatCard = ({ title, value, type }) => {
  const typeStyles = {
    total: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      border: 'border-blue-300',
    },
    pending: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-700',
      border: 'border-yellow-300',
    },
    accepted: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      border: 'border-green-300',
    },
    rejected: {
      bg: 'bg-red-100',
      text: 'text-red-700',
      border: 'border-red-300',
    },
  };

  const { bg, text, border } = typeStyles[type] || {};

  return (
    <div
      className={`p-6 rounded-lg shadow-md ${bg} ${border} border-t-4 transition-all hover:shadow-lg`}
    >
      <div>
        <h3 className="text-gray-800 font-medium">{title}</h3>
        <p className={`text-3xl font-bold mt-2 ${text}`}>{value}</p>
      </div>
    </div>
  );
};

const NotificationItem = ({ notification }) => {
  return (
    <div className="p-4 mb-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 hover:bg-blue-100 transition-all shadow-sm hover:shadow-md">
      <p className="text-gray-800 font-medium">{notification.message}</p>
      <span className="text-gray-600 text-sm block mt-1">
        {new Date(notification.timestamp).toLocaleString()}
      </span>
    </div>
  );
};

const Dashboard = ({
  stats = {
    totalApplications: 0,
    pendingApplications: 0,
    acceptedApplications: 0,
    rejectedApplications: 0,
  },
  notifications = [],
  isLoading = false,
  onNotificationClick = () => {},
  refreshData = () => {},
}) => {
  const statsData = [
    {
      title: 'Total Applications',
      value: stats.totalApplications,
      type: 'total',
    },
    {
      title: 'Pending',
      value: stats.pendingApplications,
      type: 'pending',
    },
    {
      title: 'Accepted',
      value: stats.acceptedApplications,
      type: 'accepted',
    },
    {
      title: 'Rejected',
      value: stats.rejectedApplications,
      type: 'rejected',
    },
  ];

  return (
    <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-blue-700">Student Dashboard</h1>
        <button
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all disabled:bg-gray-400"
          onClick={refreshData}
          disabled={isLoading}
        >
          Refresh
        </button>
      </div>

      {isLoading ? (
        <div className="text-center text-gray-600">Loading dashboard data...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <StatCard key={index} title={stat.title} value={stat.value} type={stat.type} />
            ))}
          </div>

          <div className="mt-8">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-blue-700">Recent Activity</h2>
              {notifications.length === 0 && (
                <p className="text-gray-500">No recent activity to display</p>
              )}
            </div>
            <div>
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => onNotificationClick(notification)}
                  className="cursor-pointer"
                >
                  <NotificationItem notification={notification} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
