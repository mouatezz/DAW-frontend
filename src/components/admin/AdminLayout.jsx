import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import AdminDashboard from './AdminDashboard';
import UserManagement from './UserManagement';
import ListsTracking from './ListsTracking';
import AcademicSettings from './AcademicSettings';
import Communication from './Communication';
import NotificationDropdown from './NotificationDropdown';

const AdminLayout = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'users':
        return <UserManagement />;
      case 'lists':
        return <ListsTracking />;
      case 'settings':
        return <AcademicSettings />;
      case 'communication':
        return <Communication />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Component */}
      <Sidebar activeSection={currentPage} setActiveSection={setCurrentPage} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Notification Dropdown Only */}
        <div className="flex justify-end items-center px-6 py-4">
          <NotificationDropdown />
        </div>

        {/* Page Content */}
        <main className="p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
