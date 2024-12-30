import React from 'react';

const Communication = () => {
  // Sample data structure expected from backend
  const messages = [
    {
      id: 1,
      from: 'Alice Smith',
      role: 'Student',
      subject: 'Question about Project Submission',
      preview: 'Hello, I have a question regarding the submission process for...',
      time: '3 hours ago',
      unread: true,
      fullMessage: 'Hello, I have a question regarding the submission process for the final project. Could you please clarify the required format?'
    },
    {
      id: 2,
      from: 'Dr. Johnson',
      role: 'Teacher',
      subject: 'Project Coordination',
      preview: 'We need to discuss the upcoming project phases...',
      time: '1 day ago',
      unread: false,
      fullMessage: 'We need to discuss the upcoming project phases and coordinate with other teachers. Can we schedule a quick meeting?'
    }
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen">
      <div className="bg-white shadow-md rounded-xl border-t-4 border-blue-500 hover:shadow-lg transition-all">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-blue-700">Messages</h2>
            <div className="flex gap-4">
              <select 
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Messages</option>
                <option value="students">From Students</option>
                <option value="teachers">From Teachers</option>
              </select>
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md transition-all">
                New Message
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Message List */}
          <div className="space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  message.unread ? 'bg-blue-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-medium">{message.from}</span>
                    <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                      message.role === 'Student' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {message.role}
                    </span>
                    {message.unread && (
                      <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{message.time}</span>
                </div>
                <div className="font-medium text-gray-800 mb-1">{message.subject}</div>
                <p className="text-gray-600 text-sm">{message.preview}</p>
              </div>
            ))}
          </div>

          {/* Message View/Reply */}
          <div className="border rounded-lg p-4">
            <div className="h-full flex flex-col">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg">Selected Message Subject</h3>
                  <span className="text-sm text-gray-500">Time</span>
                </div>
                <div className="mb-2">
                  <span className="font-medium">Sender Name</span>
                </div>
                <p className="text-gray-700 mb-6">Message content will appear here</p>
              </div>
              <div className="mt-auto">
                <textarea
                  placeholder="Type your reply..."
                  className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                />
                <button 
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md transition-all"
                >
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;