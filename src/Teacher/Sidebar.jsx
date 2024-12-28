import React, { useState } from 'react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Dashboard', section: 'dashboard', icon: '📊' },
    { name: 'Projects', section: 'projects', icon: '📁' },
    { name: 'Applications', section: 'applications', icon: '📝' },
    { name: 'Messages', section: 'messages', icon: '✉️' },
    { name: 'Students', section: 'studentExplorer', icon: '🎓' }, // Added Student Explorer
    { name: 'Profile', section: 'profile', icon: '👤' },
  ];

  return (
    <div
      className={`flex flex-col transition-all duration-300 ${isOpen ? 'w-48' : 'w-14'} bg-gray-200 min-h-screen text-gray-700`}
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-center p-4">
        <button
          aria-label="Toggle Sidebar"
          className="text-2xl focus:outline-none text-blue-600 hover:text-blue-500 transition-colors"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-2 px-2">
        {menuItems.map((item) => (
          <button
            key={item.section}
            className={`flex items-center w-full p-2 text-sm rounded-lg transition-all duration-300 ${
              activeSection === item.section
                ? 'bg-blue-600 text-white'
                : 'hover:bg-blue-100 hover:text-blue-600'
            }`}
            onClick={() => {
              setActiveSection(item.section); // Update active section on click
              if (!isOpen) toggleSidebar(); // Close the sidebar if collapsed
            }}
          >
            <div className={`flex items-center justify-center w-full ${isOpen ? 'text-left' : 'text-center'}`}>
              <span className="text-2xl">{item.icon}</span>
              {isOpen && <span className="ml-3">{item.name}</span>}
            </div>
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="px-2 mb-4">
        <button
          aria-label="Logout"
          className={`flex items-center w-full p-2 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white ${
            isOpen ? 'justify-start' : 'justify-center'
          }`}
          onClick={() => {
            // Handle logout logic
            console.log('Logout clicked!');
          }}
        >
          <span className="text-2xl">⎋</span>
          {isOpen && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
