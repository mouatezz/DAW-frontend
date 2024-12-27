import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Dashboard', section: 'dashboard', icon: '📊' },
    { name: 'Projects', section: 'projects', icon: '📁' },
    { name: 'Applications', section: 'applications', icon: '📝' },
    { name: 'Messages', section: 'messages', icon: '✉️' },
    { name: 'Profile', section: 'profile', icon: '👤' },
  ];

  return (
    <div
      className={`flex flex-col transition-all duration-300 ${
        isOpen ? 'w-48' : 'w-14'
      } bg-gray-800 min-h-screen text-white`}
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-center p-4">
        <button
          className="text-2xl focus:outline-none"
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
                ? 'bg-blue-600'
                : 'hover:bg-gray-700'
            }`}
            onClick={() => setActiveSection(item.section)}
          >
            <div
              className={`flex items-center justify-center w-full ${
                isOpen ? 'text-left' : 'text-center'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {isOpen && <span className="ml-3">{item.name}</span>}
            </div>
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="px-2 mb-4">
        <button
          className={`flex items-center w-full p-2 text-sm rounded-lg bg-red-500 hover:bg-red-600 transition-all duration-300 ${
            isOpen ? 'justify-start' : 'justify-center'
          }`}
          onClick={handleLogout}
        >
          <span className="text-lg">⎋</span>
          {isOpen && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
