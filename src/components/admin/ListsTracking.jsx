import React, { useState } from 'react';

const ListsTracking = () => {
  // UI State
  const [activeTab, setActiveTab] = useState('projects');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'students', label: 'Students' },
    { id: 'teachers', label: 'Teachers' }
  ];

  // Sample data - would come from backend
  const projectsList = [
    { id: 1, title: 'Web Development Platform', teacher: 'Dr. Smith', status: 'Active', students: 2, description: 'A platform for learning web development fundamentals' },
    { id: 2, title: 'Mobile App Project', teacher: 'Prof. Johnson', status: 'Pending', students: 3, description: 'Creating a mobile application for student collaboration' },
    { id: 3, title: 'AI Research Project', teacher: 'Dr. Williams', status: 'Active', students: 1, description: 'Research project on machine learning applications' },
  ];

  // UI-only filtering
  const filteredProjects = projectsList.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-xl border-t-4 border-blue-500 p-6 hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Projects</h3>
              <p className="text-4xl font-bold text-blue-600">45</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <div className="w-8 h-8 flex items-center justify-center text-blue-600">📊</div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl border-t-4 border-green-500 p-6 hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Assigned Projects</h3>
              <p className="text-4xl font-bold text-green-600">32</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <div className="w-8 h-8 flex items-center justify-center text-green-600">✓</div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl border-t-4 border-purple-500 p-6 hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Available Projects</h3>
              <p className="text-4xl font-bold text-purple-600">13</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <div className="w-8 h-8 flex items-center justify-center text-purple-600">🔍</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="bg-white shadow-md rounded-xl border-t-4 border-blue-500 hover:shadow-lg transition-all">
        <div className="border-b border-gray-100">
          <div className="flex p-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium rounded-lg mr-2 transition-all ${
                  tab.id === activeTab
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-blue-700">Projects Overview</h2>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button 
              onClick={() => alert('Add New Project clicked - to be implemented by backend')}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md transition-all"
            >
              Add New Project
            </button>
          </div>

          {/* Project Details Modal */}
          {selectedProject && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-blue-700">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mb-3">{selectedProject.description}</p>
              <div className="flex gap-4">
                <span className="text-gray-600">Teacher: {selectedProject.teacher}</span>
                <span className="text-gray-600">Students: {selectedProject.students}</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  selectedProject.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {selectedProject.status}
                </span>
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 rounded-lg">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 rounded-l-lg">Project Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Teacher</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Students</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 rounded-r-lg">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-700">{project.title}</td>
                    <td className="px-6 py-4 text-gray-600">{project.teacher}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        project.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {project.students} Students
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListsTracking;