import React, { useState } from 'react';

const StudentExplorer = () => {
  // Sample data for students
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Doe',
      specialization: 'Web Development',
      skills: ['React', 'JavaScript', 'CSS'],
      phone: '123-456-7890',
      email: 'john@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      specialization: 'Data Science',
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
      phone: '234-567-8901',
      email: 'jane@example.com',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      specialization: 'Machine Learning',
      skills: ['TensorFlow', 'Deep Learning', 'Python'],
      phone: '345-678-9012',
      email: 'alice@example.com',
    },
  ]);

  // Function to display the student profile details
  const viewProfile = (studentId) => {
    const selectedStudent = students.find(student => student.id === studentId);
    alert(`
      Name: ${selectedStudent.name}
      Specialization: ${selectedStudent.specialization}
      Skills: ${selectedStudent.skills.join(', ')}
      Phone: ${selectedStudent.phone}
      Email: ${selectedStudent.email}
    `);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Student Explorer</h1>

      {/* Student List */}
      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white p-4 rounded-lg shadow-md border border-blue-200"
          >
            <h3 className="text-lg font-semibold text-blue-700">{student.name}</h3>
            <p className="text-gray-600">Specialization: {student.specialization}</p>
            <p className="text-gray-600">Skills: {student.skills.join(', ')}</p>
            <div className="mt-4">
              <button
                onClick={() => viewProfile(student.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentExplorer;
