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

  const [newMessage, setNewMessage] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('');

  const recipients = ['Admin', 'John Doe', 'Jane Smith']; // List of potential recipients

  // Function to send a new message
  const sendMessage = () => {
    if (newMessage.trim() && selectedRecipient) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          from: 'Professor Bouramoul',
          to: selectedRecipient,
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
            className={`p-4 rounded-lg shadow-md border ${
              message.from === 'Professor Bouramoul' ? 'bg-blue-100' : 'bg-white'
            }`}
          >
            <p className="text-sm text-gray-500">{message.timestamp}</p>
            <p className="font-semibold text-blue-700">
              {message.from} to {message.to}
            </p>
            <p className="text-gray-700">{message.message}</p>
          </div>
        ))}
      </div>

      {/* Recipient Selection */}
      <div className="mb-4">
        <label htmlFor="recipient" className="block text-sm font-medium text-gray-700">
          Select Recipient
        </label>
        <select
          id="recipient"
          value={selectedRecipient}
          onChange={(e) => setSelectedRecipient(e.target.value)}
          className="w-full mt-2 p-3 border rounded-lg bg-gray-100 text-gray-700"
        >
          <option value="" disabled>
            Choose a recipient
          </option>
          {recipients.map((recipient, index) => (
            <option key={index} value={recipient}>
              {recipient}
            </option>
          ))}
        </select>
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
          disabled={!newMessage.trim() || !selectedRecipient}
          className={`px-4 py-2 rounded-lg transition ${
            !newMessage.trim() || !selectedRecipient
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Messages;
