import React, { useState } from 'react';

const StudentExplorer = () => {
  // Sample data for students
  const [students] = useState([
    {
      id: 1,
      name: 'John Doe',
      specialization: 'Web Development',
      domain: 'Frontend Development',
      skills: ['React', 'JavaScript', 'CSS'],
      phone: '123-456-7890',
      email: 'john@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      specialization: 'Data Science',
      domain: 'Data Analysis',
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
      phone: '234-567-8901',
      email: 'jane@example.com',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      specialization: 'Machine Learning',
      domain: 'Artificial Intelligence',
      skills: ['TensorFlow', 'Deep Learning', 'Python'],
      phone: '345-678-9012',
      email: 'alice@example.com',
    },
  ]);

  // State for search input
  const [searchTerm, setSearchTerm] = useState('');

  // Filter students based on search term
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Student Explorer</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
          />
        </div>

        {/* Student List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white p-6 rounded-xl shadow-lg border border-blue-200 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">{student.name}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Personal Information</h4>
                  <p className="text-gray-600"><span className="font-medium">Email:</span> {student.email}</p>
                  <p className="text-gray-600"><span className="font-medium">Phone:</span> {student.phone}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Academic Information</h4>
                  <p className="text-gray-600"><span className="font-medium">Domain:</span> {student.domain}</p>
                  <p className="text-gray-600"><span className="font-medium">Specialization:</span> {student.specialization}</p>
                  <p className="text-gray-600"><span className="font-medium">Skills:</span> {student.skills.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentExplorer;

