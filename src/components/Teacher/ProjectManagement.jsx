import React, { useState } from 'react';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Web Development with React',
      description: 'Build a responsive web application using React and Material UI.',
      keywords: ['React', 'Frontend', 'JavaScript'],
      status: 'Open',
    },
    {
      id: 2,
      title: 'Data Analysis with Python',
      description: 'Perform data analysis using Pandas and Matplotlib.',
      keywords: ['Python', 'Data Science', 'Pandas'],
      status: 'In Progress',
    },
  ]);

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    keywords: '',
    status: 'Open',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProject = () => {
    if (!newProject.title || !newProject.description) {
      alert('Please fill in all fields!');
      return;
    }
    setProjects((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...newProject,
        keywords: newProject.keywords.split(',').map((kw) => kw.trim()),
      },
    ]);
    setNewProject({ title: '', description: '', keywords: '', status: 'Open' });
  };

  const handleEditProject = (id) => {
    const project = projects.find((p) => p.id === id);
    setNewProject({
      title: project.title,
      description: project.description,
      keywords: project.keywords.join(', '),
      status: project.status,
    });
    setEditingProjectId(id);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === editingProjectId
          ? {
              ...project,
              ...newProject,
              keywords: newProject.keywords.split(',').map((kw) => kw.trim()),
            }
          : project
      )
    );
    setIsEditing(false);
    setEditingProjectId(null);
    setNewProject({ title: '', description: '', keywords: '', status: 'Open' });
  };

  const handleDeleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects((prev) => prev.filter((project) => project.id !== id));
    }
  };

  return (
    <div className="p-8 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 text-center mb-8">
        Project Management
      </h1>

      {/* Project Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-10">
        <h2 className="text-xl font-semibold text-blue-700 mb-6">
          {isEditing ? 'Edit Project' : 'Add New Project'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={newProject.title}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={newProject.description}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Keywords</label>
            <input
              type="text"
              name="keywords"
              value={newProject.keywords}
              onChange={handleInputChange}
              placeholder="e.g., React, JavaScript, Frontend"
              className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Status</label>
            <select
              name="status"
              value={newProject.status}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600"
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSaveEdit}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setNewProject({ title: '', description: '', keywords: '', status: 'Open' });
                }}
                className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleAddProject}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Project
            </button>
          )}
        </div>
      </div>

      {/* Project List */}
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-5 rounded-lg shadow-md border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-blue-700">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <p className="text-sm text-gray-500 mt-1">
              Keywords: <span className="font-medium">{project.keywords.join(', ')}</span>
            </p>
            <p
              className={`text-sm mt-1 font-medium ${
                project.status === 'Open'
                  ? 'text-green-600'
                  : project.status === 'In Progress'
                  ? 'text-blue-600'
                  : 'text-gray-500'
              }`}
            >
              Status: {project.status}
            </p>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => handleEditProject(project.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProject(project.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No projects available. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default ProjectManagement;
