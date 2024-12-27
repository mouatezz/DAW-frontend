import React, { useState } from 'react';

const Notification = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { title: 'New Assignment', description: 'Your math assignment is due.', time: '1 day ago' },
    { title: 'Meeting Reminder', description: 'Project meeting at 3 PM.', time: '2 hours ago' },
  ];

  return (
    <div className="relative">
      {/* Bell Icon */}
      <button
        className="p-2 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-500 transition"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        🔔
      </button>

      {/* Notification Badge */}
      {notifications.length > 0 && (
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-4 h-4 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
          {notifications.length}
        </span>
      )}

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div
          className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          style={{ transform: 'translateX(-20%)' }} // Shift dropdown leftwards for better alignment
        >
          <div className="p-4 text-lg font-bold border-b bg-gray-100 text-black">Notifications</div>
          <ul className="divide-y divide-gray-200">
            {notifications.map((notification, index) => (
              <li key={index} className="p-4 hover:bg-gray-50">
                <h4 className="font-semibold text-black">{notification.title}</h4>
                <p className="text-sm text-black">{notification.description}</p>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notification;
