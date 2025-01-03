import React, { useState } from 'react';

const Applications = ({ applications = [] }) => {
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [students] = useState([
    { id: 1, name: 'Alice Johnson', skills: 'React, JavaScript' },
    { id: 2, name: 'Bob Smith', skills: 'Python, Data Analysis' },
    { id: 3, name: 'Charlie Brown', skills: 'Machine Learning, AI' },
  ]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [teams, setTeams] = useState([]);

  const toggleTeamModal = () => {
    setShowTeamModal(!showTeamModal);
  };

  const handleStudentSelect = (student) => {
    if (selectedStudents.includes(student)) {
      setSelectedStudents(selectedStudents.filter((s) => s !== student));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  const formTeam = () => {
    if (selectedStudents.length > 0) {
      setTeams([...teams, selectedStudents]);
      setSelectedStudents([]);
      setShowTeamModal(false);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-b from-gray-50 to-white shadow-lg rounded-xl">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-8 text-center">Applications</h2>

      <div className="text-center mb-8">
        <button
          onClick={toggleTeamModal}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Form a Team
        </button>
      </div>

      {applications.length === 0 ? (
        <p className="text-center text-gray-500">No applications submitted yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-all"
            >
              <h3 className="text-lg font-extrabold text-blue-800 mb-2">{application.jobTitle}</h3>
              <p className="text-gray-700 font-medium">{application.companyName}</p>
              <p className="text-sm text-gray-500">
                Submitted on: {new Date(application.submissionDate).toLocaleDateString()}
              </p>
              <p
                className={`mt-4 px-4 py-2 inline-block rounded-full text-sm font-medium ${
                  application.status === 'Accepted'
                    ? 'bg-green-100 text-green-700'
                    : application.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {application.status}
              </p>
            </div>
          ))}
        </div>
      )}

      {teams.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Formed Teams</h3>
          {teams.map((team, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow-md mb-4 border border-gray-300"
            >
              <h4 className="text-lg font-bold text-blue-800 mb-2">Team {index + 1}</h4>
              <ul className="list-disc list-inside text-gray-700">
                {team.map((student) => (
                  <li key={student.id}>{student.name} ({student.skills})</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {showTeamModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Form a Team</h3>
            <p className="text-gray-600 mb-4">Select students for your team:</p>

            <div className="space-y-2">
              {students.map((student) => (
                <div key={student.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(student)}
                    onChange={() => handleStudentSelect(student)}
                    className="mr-2"
                  />
                  <label className="text-gray-700">
                    {student.name} ({student.skills})
                  </label>
                </div>
              ))}
            </div>

            <button
              onClick={formTeam}
              className="w-full mt-4 mb-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Form Team
            </button>

            <button
              onClick={toggleTeamModal}
              className="w-full px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Sample data with multiple applications
const sampleApplications = [
  {
    jobTitle: 'Web Developer',
    companyName: 'TechCorp',
    submissionDate: '2024-01-01',
    status: 'Accepted',
  },
  {
    jobTitle: 'Data Analyst',
    companyName: 'DataWorks',
    submissionDate: '2024-01-02',
    status: 'Pending',
  },
  {
    jobTitle: 'AI Researcher',
    companyName: 'AI Lab',
    submissionDate: '2024-01-03',
    status: 'Rejected',
  },
  {
    jobTitle: 'Frontend Developer',
    companyName: 'DevHub',
    submissionDate: '2024-01-04',
    status: 'Accepted',
  },
  {
    jobTitle: 'Backend Engineer',
    companyName: 'CodeFactory',
    submissionDate: '2024-01-05',
    status: 'Pending',
  },
];

export default function App() {
  return <Applications applications={sampleApplications} />;
}
