import React, { useState } from 'react';

const Messages = () => {
  // Sample data for messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'John Doe',
      to: 'Professor Bouramoul',
      message: 'Hello Professor, I would like to know more about the project on Web Development with React.',
      timestamp: '2024-12-28 10:30',
    },
    {
      id: 2,
      from: 'Professor Bouramoul',
      to: 'John Doe',
      message: 'Hi John, please refer to the project details page for more information.',
      timestamp: '2024-12-28 11:00',
    },
    {
      id: 3,
      from: 'Jane Smith',
      to: 'Professor Bouramoul',
      message: 'I have completed the Data Science project and would like feedback.',
      timestamp: '2024-12-27 15:45',
    },
  ]);

  // State to hold the new message input
  const [newMessage, setNewMessage] = useState('');

  // Function to send a new message
  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          from: 'You',
          to: 'Professor Bouramoul', // You can replace this with the recipient dynamically
          message: newMessage,
          timestamp: new Date().toLocaleString(),
        },
      ]);
      setNewMessage(''); // Reset message input field
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Messages</h1>

      {/* Message List */}
      <div className="space-y-4 mb-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className="bg-white p-4 rounded-lg shadow-md border border-blue-200"
          >
            <p className="text-sm text-gray-500">{message.timestamp}</p>
            <p className="font-semibold text-blue-700">{message.from} to {message.to}</p>
            <p className="text-gray-700">{message.message}</p>
          </div>
        ))}
      </div>

      {/* Message Input and Send Button */}
      <div className="flex flex-col space-y-4">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
          className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Messages;
