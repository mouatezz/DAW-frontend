import React, { useState } from 'react';

const ProjectList = () => {
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

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');

  const handleApply = (projectId) => {
    console.log(`Applied to project ${projectId}`);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === 'all' || project.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Available Projects</h1>
      
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <select
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Domains</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="text-sm text-gray-500 mb-4">
              <p><strong>Domain:</strong> {project.domain}</p>
              <p><strong>Supervisor:</strong> {project.supervisor}</p>
              <p><strong>Max Team Size:</strong> {project.maxTeamSize}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.keywords.map((keyword, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">{keyword}</span>
              ))}
            </div>
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-md w-full hover:bg-blue-700 focus:outline-none transition"
              onClick={() => handleApply(project.id)}
            >
              Apply for Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
