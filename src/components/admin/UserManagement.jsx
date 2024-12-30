import React, { useState } from 'react';

const UserManagement = () => {
  const [users] = useState([
    { id: 1, name: 'John Doe', role: 'Student', status: 'Active', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', role: 'Teacher', status: 'Active', email: 'jane@example.com' },
    { id: 3, name: 'Bob Wilson', role: 'Student', status: 'Inactive', email: 'bob@example.com' },
  ]);

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen">
      <div className="bg-white shadow-md rounded-xl border-t-4 border-blue-500 hover:shadow-lg transition-all">
        {/* Header Section */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-blue-700">User Management</h2>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md transition-all">
              + Add User
            </button>
          </div>
        </div>

        {/* Search Section */}
        <div className="p-6 border-b border-gray-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full md:w-96 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 rounded-lg">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 rounded-l-lg">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 rounded-r-lg">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr 
                  key={user.id}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-700">{user.name}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3">
                      <button className="text-blue-600 hover:text-blue-800 transition-colors">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800 transition-colors">
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
    </div>
  );
};

export default UserManagement;