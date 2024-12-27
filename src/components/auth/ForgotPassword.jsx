import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot Password:', email);
    // Add your forgot password logic here
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/src/assets/NTIC(1).jpg')` }}
    >
      <div className="w-[28rem] p-10 rounded-3xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center hover:text-blue-500 cursor-default">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold uppercase tracking-wide shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
