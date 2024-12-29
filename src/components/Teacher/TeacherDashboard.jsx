import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dasboard';
import ProjectManagement from './ProjectManagement';
import ApplicationManagement from './ApplicationManagement';
import StudentExplorer from './StudentExplorer';
import Messages from './Messages';
import Profile from './Profile';
import Notification from './Notification';

const TeacherDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');  // Active section state

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <ProjectManagement />;
      case 'applications':
        return <ApplicationManagement />;
      case 'messages':
        return <Messages />;
        case 'studentExplorer':
        return <StudentExplorer />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;  // Default section if none selected
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <Sidebar setActiveSection={setActiveSection} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Notifications */}
        <div className="absolute top-4 right-4">
          <Notification />
        </div>

        {/* Main Section */}
        <div className="p-4">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
