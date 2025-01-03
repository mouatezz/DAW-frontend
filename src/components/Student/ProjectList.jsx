import React, { useState } from 'react';

const ProjectList = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'AI-Powered Image Recognition',
      description: 'Develop an AI system for image recognition using deep learning',
      domain: 'Artificial Intelligence',
      keywords: ['AI', 'Deep Learning', 'Computer Vision'],
      status: 'Open'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [teamMembers, setTeamMembers] = useState([]);
  const [studentSearch, setStudentSearch] = useState('');
  const [showStudentList, setShowStudentList] = useState(false);
  const [students] = useState([
    'Alice Johnson',
    'Bob Smith',
    'Charlie Brown',
    'Diana Prince',
    'Eve Adams'
  ]);

  const handleApply = (projectId) => {
    console.log(`Applied to project ${projectId} with team:`, teamMembers);
  };

  const addTeamMember = (member) => {
    if (!teamMembers.includes(member)) {
      setTeamMembers([...teamMembers, member]);
    }
  };

  const removeTeamMember = (member) => {
    setTeamMembers(teamMembers.filter(m => m !== member));
  };

  const filteredStudents = students.filter(student => 
    student.toLowerCase().includes(studentSearch.toLowerCase())
  );

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === 'all' || project.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-10">Available Projects</h1>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-6 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none"
          />
          <select
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
            className="px-6 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none"
          >
            <option value="all">All Domains</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>

        {/* Team Formation Section */}
        <div className="mb-10 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Form Your Team</h2>
          <button
            onClick={() => setShowStudentList(!showStudentList)}
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            {showStudentList ? 'Hide Student List' : 'Show Student List'}
          </button>

          {showStudentList && (
            <div className="mt-6 bg-slate-50 rounded-xl p-6">
              <input
                type="text"
                placeholder="Search students..."
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                className="w-full px-6 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none mb-4"
              />
              <ul className="space-y-2">
                {filteredStudents.map((student, index) => (
                  <li key={index} className="flex items-center justify-between p-3 bg-white rounded-xl hover:bg-blue-50">
                    <span className="font-medium text-slate-700">{student}</span>
                    <button
                      onClick={() => addTeamMember(student)}
                      className="text-blue-600 font-semibold hover:text-blue-800"
                    >
                      Add to Team
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Current Team</h3>
            {teamMembers.length > 0 ? (
              <ul className="space-y-2">
                {teamMembers.map((member, index) => (
                  <li key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <span className="font-medium text-slate-700">{member}</span>
                    <button
                      onClick={() => removeTeamMember(member)}
                      className="text-red-500 font-semibold hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-500 italic">No team members added yet</p>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{project.title}</h3>
              <p className="text-slate-600 mb-6 text-lg">{project.description}</p>
              <p className="text-blue-600 font-semibold mb-6">Domain: {project.domain}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.keywords.map((keyword, index) => (
                  <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-lg">
                    {keyword}
                  </span>
                ))}
              </div>
              <button
                onClick={() => handleApply(project.id)}
                className="w-full py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Apply for Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;