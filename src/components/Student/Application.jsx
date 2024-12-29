import React, { useState } from 'react';

const Applications = ({ applications = [] }) => {
  const [showTeamModal, setShowTeamModal] = useState(false);

  const toggleTeamModal = () => {
    setShowTeamModal(!showTeamModal);
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

      {showTeamModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Form a Team</h3>
            <p className="text-gray-600 mb-4">Search for students to invite to your team:</p>

            <input
              type="text"
              placeholder="Search by name, email, or skills"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              className="w-full mb-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Invitation
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
