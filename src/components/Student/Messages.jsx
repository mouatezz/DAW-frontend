import React, { useState } from 'react';

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Teacher (John Doe)',
      content: 'Hello, if you have any questions about the project, feel free to ask!',
      time: new Date().toLocaleString(),
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('');

  const recipients = ['Admin', 'Teacher (John Doe)', 'Teacher (Jane Smith)', 'Teacher (Alice Brown)'];

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedRecipient) return;

    const newMessageObject = {
      id: messages.length + 1,
      sender: 'Student',
      recipient: selectedRecipient,
      content: newMessage,
      time: new Date().toLocaleString(),
    };

    setMessages([...messages, newMessageObject]);
    setNewMessage('');
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Messages</h2>

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

      <div className="space-y-4 mb-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'Student' ? 'justify-end' : 'justify-start'} items-start space-x-4`}
          >
            <div
              className={`flex flex-col max-w-xs sm:max-w-md px-4 py-3 rounded-lg shadow-sm ${
                message.sender === 'Student' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <p className="font-semibold">{message.sender}</p>
              {message.recipient && (
                <p className="text-sm text-gray-400">To: {message.recipient}</p>
              )}
              <p className="text-sm">{message.content}</p>
              <span className="text-xs text-gray-400 mt-2">{message.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col space-y-3">
        <textarea
          className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700 resize-none"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          disabled={!selectedRecipient || !newMessage.trim()}
          className={`px-6 py-2 text-white rounded-md transition ${
            !selectedRecipient || !newMessage.trim()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Messages;
