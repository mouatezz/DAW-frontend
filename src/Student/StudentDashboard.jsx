import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import ProjectList from './ProjectList';
import Applications from './Application';
import Messages from './Messages';
import Profile from './Profile';
import Notification from './Notification';

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <ProjectList />;
      case 'applications':
        return (
          <Applications
            applications={[
              {
                jobTitle: 'Web Developer',
                companyName: 'TechCorp',
                submissionDate: '2023-12-15',
                status: 'Pending',
              },
            ]}
          />
        );
      case 'messages':
        return (
          <Messages
            messages={[
              {
                sender: 'Admin',
                content: 'Welcome to your dashboard!',
                time: '2 hours ago',
              },
            ]}
          />
        );
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
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
        <div className="p-4">{renderSection()}</div>
      </div>
    </div>
  );
};

export default StudentDashboard;
