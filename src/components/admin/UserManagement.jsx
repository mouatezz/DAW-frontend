import { useState } from 'react';

export default function UserManagement() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      role: 'Student',
      status: 'Active',
      email: 'john@example.com',
      department: 'Computer Science',
      registrationDate: '2024-01-15',
      phoneNumber: '+1234567890',
      studentId: 'STU001',
      academicYear: '2023-2024'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Teacher',
      status: 'Active',
      email: 'jane@example.com',
      department: 'Computer Science',
      registrationDate: '2024-01-10',
      phoneNumber: '+1234567891',
      teacherId: 'TCH001',
      specialization: 'Artificial Intelligence'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showProfileDetails, setShowProfileDetails] = useState(null);

  const initialFormState = {
    name: '',
    email: '',
    role: 'Student',
    department: '',
    phoneNumber: '',
    status: 'Active'
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      setUsers(users.map(user => 
        user.id === currentUser.id ? { ...user, ...formData } : user
      ));
    } else {
      const newUser = {
        id: Date.now(),
        ...formData,
        registrationDate: new Date().toISOString().split('T')[0],
        ...(formData.role === 'Student' 
          ? { studentId: `STU${Math.floor(Math.random() * 1000)}` }
          : { teacherId: `TCH${Math.floor(Math.random() * 1000)}` })
      };
      setUsers([...users, newUser]);
    }
    setIsModalOpen(false);
    setCurrentUser(null);
    setFormData(initialFormState);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setFormData(user);
    setIsModalOpen(true);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const toggleStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
        : user
    ));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen">
      <div className="bg-white shadow-md rounded-xl border-t-4 border-blue-500 hover:shadow-lg transition-all">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-blue-700">User Management</h2>
            <button 
              onClick={() => {
                setCurrentUser(null);
                setFormData(initialFormState);
                setIsModalOpen(true);
              }}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md transition-all"
            >
              + Add User
            </button>
          </div>
        </div>

        <div className="p-6 border-b border-gray-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-96 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 rounded-lg">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 rounded-l-lg">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Department</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 rounded-r-lg">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-700">
                    <button
                      onClick={() => setShowProfileDetails(showProfileDetails === user.id ? null : user.id)}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {user.name}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 text-gray-600">{user.department}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleStatus(user.id)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {user.status}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">
              {currentUser ? 'Edit User' : 'Create New User'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setCurrentUser(null);
                    setFormData(initialFormState);
                  }}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {currentUser ? 'Update User' : 'Create User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showProfileDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
            {users.map(user => user.id === showProfileDetails && (
              <div key={user.id}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-700">User Profile Details</h3>
                  <button
                    onClick={() => setShowProfileDetails(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Close
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Name:</p>
                    <p className="text-gray-600">{user.name}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Role:</p>
                    <p className="text-gray-600">{user.role}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Department:</p>
                    <p className="text-gray-600">{user.department}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Registration Date:</p>
                    <p className="text-gray-600">{user.registrationDate}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Phone Number:</p>
                    <p className="text-gray-600">{user.phoneNumber}</p>
                  </div>
                  <div>
                    <p className="font-semibold">{user.role === 'Student' ? 'Student ID:' : 'Teacher ID:'}</p>
                    <p className="text-gray-600">{user.role === 'Student' ? user.studentId : user.teacherId}</p>
                  </div>
                  {user.role === 'Student' && (
                    <div>
                      <p className="font-semibold">Academic Year:</p>
                      <p className="text-gray-600">{user.academicYear}</p>
                    </div>
                  )}
                  {user.role === 'Teacher' && (
                    <div>
                      <p className="font-semibold">Specialization:</p>
                      <p className="text-gray-600">{user.specialization}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}