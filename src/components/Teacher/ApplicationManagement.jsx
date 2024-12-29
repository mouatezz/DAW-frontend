import React, { useState } from 'react';

const ApplicationManagement = () => {
  // Sample data for student applications
  const [applications, setApplications] = useState([
    {
      id: 1,
      studentName: 'John Doe',
      projectTitle: 'Web Development with React',
      status: 'Pending',
      message: 'Looking forward to work on this project!',
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      projectTitle: 'Data Analysis with Python',
      status: 'Accepted',
      message: 'Excited to dive into data analysis!',
    },
    {
      id: 3,
      studentName: 'Alice Johnson',
      projectTitle: 'Machine Learning with TensorFlow',
      status: 'Rejected',
      message: 'Ready to learn more about AI and ML.',
    },
  ]);

  // Function to update application status
  const updateStatus = (id, newStatus) => {
    setApplications((prevApplications) =>
      prevApplications.map((application) =>
        application.id === id
          ? { ...application, status: newStatus }
          : application
      )
    );
  };

  // Function to handle application rejection
  const handleReject = (id) => {
    updateStatus(id, 'Rejected');
  };

  // Function to handle application acceptance
  const handleAccept = (id) => {
    updateStatus(id, 'Accepted');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Application Management</h1>

      {/* Application List */}
      <div className="space-y-4">
        {applications.map((application) => (
          <div
            key={application.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-800">{application.studentName}</h3>
            <p className="text-gray-600">Project: {application.projectTitle}</p>
            <p className="text-gray-600">{application.message}</p>
            <p
              className={`text-sm font-medium ${
                application.status === 'Accepted'
                  ? 'text-green-600'
                  : application.status === 'Rejected'
                  ? 'text-red-600'
                  : 'text-blue-600' // Change to blue for Pending
              }`}
            >
              Status: {application.status}
            </p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => handleAccept(application.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Accept
              </button>
              <button
                onClick={() => handleReject(application.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationManagement;
