import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Smart Project Management",
      description: "Browse, apply, and track Master's thesis projects with our intuitive platform designed for academic excellence.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Enhanced Collaboration",
      description: "Form teams effortlessly and collaborate with professors through our streamlined communication system.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Real-time Progress Tracking",
      description: "Stay updated with instant notifications and monitor your project's progress in real-time.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center space-x-5">
              <img 
                src="/src/assets/logo.png" 
                alt="Logo" 
                className="h-20 w-20 object-contain"
              />
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                DZTUDIANT education
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => navigate('/login')}
                className="px-6 py-3 text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg"
              >
                Sign In
              </button>
              <button 
                onClick={() => navigate('/register')}
                className="px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all font-medium text-lg shadow-sm hover:shadow-md hover:scale-105 duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-44 pb-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.blue.50),transparent_70%)] opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,theme(colors.blue.50),transparent_70%)] opacity-40"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 mb-8 leading-tight">
              Transform Your Academic Journey
            </h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Connect with professors, discover groundbreaking research opportunities, and take control of your Master's thesis project at Constantine 2 University.
            </p>
            <button 
              onClick={() => navigate('/register')}
              className="group px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center mx-auto"
            >
              Begin Your Journey
              <svg className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
              <div className="mb-6 p-4 bg-blue-50 rounded-xl w-fit group-hover:bg-blue-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            {[
              { number: "500+", label: "Active Projects" },
              { number: "2000+", label: "Students Enrolled" },
              { number: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="p-8 bg-white/50 rounded-2xl backdrop-blur-sm">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Constantine 2 University – Abdelhamid Mehri
            </h2>
            <p className="text-gray-300 text-xl">
              Faculty of New Information and Communication Technologies
            </p>
            <div className="mt-10 text-sm text-gray-400">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
