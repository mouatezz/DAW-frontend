import React, { useState } from 'react';

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Teacher',
      content: 'Hello, if you have any questions about the project, feel free to ask!',
      time: new Date().toLocaleString(),
    },
  ]);
  
  const [newMessage, setNewMessage] = useState(''); // Input field for sending a message

  // Handle message sending
  const handleSendMessage = () => {
    if (!newMessage.trim()) return; // Prevent sending empty messages

    const newMessageObject = {
      id: messages.length + 1, // Generate a new ID for the message
      sender: 'Student',
      content: newMessage,
      time: new Date().toLocaleString(),
    };

    setMessages([...messages, newMessageObject]);
    setNewMessage(''); // Clear the input field after sending the message
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Messages with Teacher</h2>

      {/* Display Messages */}
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
              <p className="text-sm">{message.content}</p>
              <span className="text-xs text-gray-400 mt-2">{message.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input for sending new messages */}
      <div className="flex flex-col space-y-3">
        <textarea
          className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700 resize-none"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Messages;
