// Part 1: Core State and Functions
import React, { useState } from 'react';

const ListsTracking = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [editGroup, setEditGroup] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState([]);
  
  const [projectsList, setProjectsList] = useState([
    { id: 1, title: 'Web Development Platform', teacher: 'Dr. Smith', status: 'Pending', students: 2 },
    { id: 2, title: 'Mobile App Project', teacher: 'Prof. Johnson', status: 'Pending', students: 3 },
    { id: 3, title: 'AI Research Project', teacher: 'Dr. Williams', status: 'Pending', students: 1 },
  ]);

  const [applicationsList, setApplicationsList] = useState([
    { id: 1, student: 'Alice & Bob', project: 'Web Development Platform', status: 'Pending' },
    { id: 2, student: 'Eve', project: 'Mobile App Project', status: 'Pending' },
    { id: 3, student: 'Charlie, David & Frank', project: 'AI Research Project', status: 'Pending' },
  ]);

  // Added members array to track individual students in each group
  const [studentsList, setStudentsList] = useState([
    { id: 1, name: 'Alice & Bob', members: ['Alice', 'Bob'], group: 'Binôme', status: 'Has Project' },
    { id: 2, name: 'Eve', members: ['Eve'], group: 'Monôme', status: 'No Project' },
    { id: 3, name: 'Charlie, David & Frank', members: ['Charlie', 'David', 'Frank'], group: 'Trinôme', status: 'Has Project' },
  ]);

  // Available students for group formation
  const [availableStudents, setAvailableStudents] = useState([
    'George', 'Helen', 'Ivan', 'Julia', 'Karl', 'Linda', 'Mike', 'Nancy'
  ]);

  const teachersList = [
    { id: 1, name: 'Dr. Smith', status: 'Proposed Topics', projects: 2 },
    { id: 2, name: 'Prof. Johnson', status: 'No Topics', projects: 0 },
    { id: 3, name: 'Dr. Williams', status: 'Proposed Topics', projects: 3 },
  ];

  const tabs = [
    { id: 'projects', label: 'Projects', icon: '📋' },
    { id: 'applications', label: 'Applications', icon: '📝' },
    { id: 'groups', label: 'Groups', icon: '🤝' }
  ];

  // Core Functions
  const determineGroupType = (memberCount) => {
    switch(memberCount) {
      case 1: return 'Monôme';
      case 2: return 'Binôme';
      case 3: return 'Trinôme';
      default: return 'Invalid';
    }
  };

  const handleEditGroup = (group) => {
    setEditGroup(group);
    setSelectedStudents(group.members);
    setAvailableStudents(prevStudents => 
      [...new Set([...prevStudents, ...availableStudents].filter(student => 
        !group.members.includes(student)
      ))].sort()
    );
  };

  const handleStudentSelection = (student) => {
    if (selectedStudents.includes(student)) {
      setSelectedStudents(prev => prev.filter(s => s !== student));
      setAvailableStudents(prev => [...prev, student].sort());
    } else if (selectedStudents.length < 3) {
      setSelectedStudents(prev => [...prev, student].sort());
      setAvailableStudents(prev => prev.filter(s => s !== student));
    } else {
      setAlertMessage('Maximum 3 students allowed per group');
      setShowAlert(true);
    }
  };

  const handleSaveGroup = () => {
    if (selectedStudents.length === 0) {
      setAlertMessage('Please select at least one student');
      setShowAlert(true);
      return;
    }

    const groupType = determineGroupType(selectedStudents.length);
    const updatedStudentsList = studentsList.map(group => {
      if (group.id === editGroup.id) {
        return {
          ...group,
          members: selectedStudents,
          name: selectedStudents.join(' & '),
          group: groupType
        };
      }
      return group;
    });

    setStudentsList(updatedStudentsList);
    setEditGroup(null);
    setSelectedStudents([]);
    setAlertMessage('Group updated successfully');
    setShowAlert(true);
  };

  const handleApproveReject = (id, action, type = 'project') => {
    if (type === 'project') {
      setProjectsList(prevProjects =>
        prevProjects.map(project =>
          project.id === id ? { ...project, status: action } : project
        )
      );
    } else {
      setApplicationsList(prevApplications =>
        prevApplications.map(application =>
          application.id === id ? { ...application, status: action } : application
        )
      );
    }
    setAlertMessage(`${type.charAt(0).toUpperCase() + type.slice(1)} ${action.toLowerCase()}`);
    setShowAlert(true);
  };// Part 2: UI Components
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'text-green-600 bg-green-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const StatusBadge = ({ status }) => (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
      {status}
    </span>
  );

  const ActionButtons = ({ id, type = 'project' }) => (
    <div className="flex space-x-2">
      <button
        onClick={() => handleApproveReject(id, 'Approved', type)}
        className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200"
      >
        Approve
      </button>
      <button
        onClick={() => handleApproveReject(id, 'Rejected', type)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors duration-200"
      >
        Reject
      </button>
    </div>
  );

  const GroupEditForm = () => {
    if (!editGroup) return null;
    return (
      <div className="mt-6 p-6 bg-gray-50 border rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit Group Members</h3>
        <p className="mb-6 text-gray-600">Current Group: {editGroup.name}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-3 text-blue-700">
              Selected Students ({selectedStudents.length}/3)
            </h4>
            <div className="space-y-2">
              {selectedStudents.map(student => (
                <div key={student} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <span className="font-medium text-blue-800">{student}</span>
                  <button
                    onClick={() => handleStudentSelection(student)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium mb-3 text-gray-700">Available Students</h4>
            <div className="space-y-2">
              {availableStudents.map(student => (
                <div
                  key={student}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleStudentSelection(student)}
                >
                  <span className="text-gray-800">{student}</span>
                  <button className="text-blue-500 hover:text-blue-700 font-medium">
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          <button
            onClick={handleSaveGroup}
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
          >
            Save Changes
          </button>
          <button
            onClick={() => {
              setEditGroup(null);
              setSelectedStudents([]);
            }}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };// Part 3: Main UI Render
  const renderTabContent = () => {
    switch (activeTab) {
      case 'projects':
        return (
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Projects Overview</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left">Project Title</th>
                    <th className="px-6 py-4 text-left">Teacher</th>
                    <th className="px-6 py-4 text-left">Status</th>
                    <th className="px-6 py-4 text-left">Students</th>
                    <th className="px-6 py-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {projectsList
                    .filter(project =>
                      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      project.teacher.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(project => (
                      <tr key={project.id} className="hover:bg-blue-50">
                        <td className="px-6 py-4">{project.title}</td>
                        <td className="px-6 py-4">{project.teacher}</td>
                        <td className="px-6 py-4"><StatusBadge status={project.status} /></td>
                        <td className="px-6 py-4">{project.students}</td>
                        <td className="px-6 py-4"><ActionButtons id={project.id} type="project" /></td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'groups':
        return (
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Groups Overview</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left">Group Name</th>
                    <th className="px-6 py-4 text-left">Members</th>
                    <th className="px-6 py-4 text-left">Group Type</th>
                    <th className="px-6 py-4 text-left">Status</th>
                    <th className="px-6 py-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {studentsList
                    .filter(group =>
                      group.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(group => (
                      <tr key={group.id} className="hover:bg-blue-50">
                        <td className="px-6 py-4">{group.name}</td>
                        <td className="px-6 py-4">{group.members.join(', ')}</td>
                        <td className="px-6 py-4">{group.group}</td>
                        <td className="px-6 py-4">{group.status}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleEditGroup(group)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors duration-200"
                          >
                            Edit Members
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {editGroup && <GroupEditForm />}
          </div>
        );

      case 'applications':
        return (
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Applications Overview</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left">Student</th>
                    <th className="px-6 py-4 text-left">Project</th>
                    <th className="px-6 py-4 text-left">Status</th>
                    <th className="px-6 py-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {applicationsList
                    .filter(application =>
                      application.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      application.project.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(application => (
                      <tr key={application.id} className="hover:bg-blue-50">
                        <td className="px-6 py-4">{application.student}</td>
                        <td className="px-6 py-4">{application.project}</td>
                        <td className="px-6 py-4"><StatusBadge status={application.status} /></td>
                        <td className="px-6 py-4"><ActionButtons id={application.id} type="application" /></td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return <div>Invalid Tab</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Lists Tracking System</h1>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2
                ${activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="mb-6">
          <input
            type="text"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {renderTabContent()}
      </div>

      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-2">Notification</h3>
            <p className="text-gray-600 mb-4">{alertMessage}</p>
            <button
              onClick={() => setShowAlert(false)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListsTracking;