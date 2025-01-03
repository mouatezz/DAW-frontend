import React, { useState } from 'react';

const TeacherProjectManagement = () => {
  // State for managing projects
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'AI-Powered Image Recognition',
      description: 'Develop an AI system for image recognition using deep learning',
      domain: 'Artificial Intelligence',
      keywords: ['AI', 'Deep Learning', 'Computer Vision'],
      status: 'Open',
      supervisor: 'Dr. Johnson',
      maxTeamSize: 3
    },
  ]);

  // State for managing the form
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    domain: '',
    keywords: '',
    supervisor: '',
    maxTeamSize: '',
  });

  // State for tracking editing mode
  const [editingId, setEditingId] = useState(null);

  // Available domains matching the student view
  const domains = [
    'Artificial Intelligence',
    'Web Development',
    'Data Science'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProject = {
      id: editingId || Date.now(),
      ...formData,
      keywords: formData.keywords.split(',').map(k => k.trim()),
      status: 'Open'
    };

    if (editingId) {
      setProjects(projects.map(p => p.id === editingId ? newProject : p));
      setEditingId(null);
    } else {
      setProjects([...projects, newProject]);
    }

    setFormData({
      title: '',
      description: '',
      domain: '',
      keywords: '',
      supervisor: '',
      maxTeamSize: '',
    });
  };

  const handleEdit = (project) => {
    setEditingId(project.id);
    setFormData({
      ...project,
      keywords: project.keywords.join(', ')
    });
  };

  const handleDelete = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Project Management</h1>

      {/* Project Creation/Edit Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          {editingId ? 'Edit Project' : 'Create New Project'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Project Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Domain</label>
            <select
              name="domain"
              value={formData.domain}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Domain</option>
              {domains.map(domain => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Supervisor</label>
            <input
              type="text"
              name="supervisor"
              value={formData.supervisor}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Max Team Size</label>
            <input
              type="number"
              name="maxTeamSize"
              value={formData.maxTeamSize}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              min="1"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">Keywords (comma-separated)</label>
            <input
              type="text"
              name="keywords"
              value={formData.keywords}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="AI, Machine Learning, Python"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none transition"
        >
          {editingId ? 'Update Project' : 'Create Project'}
        </button>
      </form>

      {/* Project List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="text-sm text-gray-500 mb-4">
              <p><strong>Domain:</strong> {project.domain}</p>
              <p><strong>Supervisor:</strong> {project.supervisor}</p>
              <p><strong>Max Team Size:</strong> {project.maxTeamSize}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.keywords.map((keyword, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                  {keyword}
                </span>
              ))}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(project)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none transition flex-1"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none transition flex-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherProjectManagement;