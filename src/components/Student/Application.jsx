import React from 'react';

const Applications = ({ applications = [] }) => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Applications</h2>
      {applications.length === 0 ? (
        <p className="text-gray-500">No applications submitted yet.</p>
      ) : (
        <div className="space-y-6">
          {applications.map((application, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{application.jobTitle}</h3>
              <p className="text-gray-700 font-medium">{application.companyName}</p>
              <p className="text-sm text-gray-500">{application.submissionDate}</p>
              <p
                className={`mt-3 px-4 py-2 inline-block rounded-full text-sm font-medium ${
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
