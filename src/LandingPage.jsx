import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-50 to-white">
      {/* Enhanced Fixed Header with Blur */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-blue-100">
            <div className="flex items-center justify-between px-8 py-6">
              <div className="flex items-center gap-5">
                <img src="/src/assets/logo.png" alt="DZTUDIANT Logo" className="h-14 w-14 object-contain" />
                <div className="border-l-2 border-blue-200 pl-5">
                  <h1 className="text-3xl font-extrabold text-blue-950">DZTUDIANT</h1>
                  <p className="text-sm font-medium text-blue-600 tracking-wide">education</p>
                </div>
              </div>
              <Link
                to="/login"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md text-sm"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-28">
        {/* Hero Section */}
        <section className="pt-20 pb-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200/50 via-blue-100/30 to-blue-50/40"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-extrabold text-blue-950 mb-8 leading-tight">
                Streamline Your <br className="hidden md:block" />
                <span className="text-blue-600">Academic Journey</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-800 mb-12 max-w-3xl mx-auto leading-relaxed">
                Connect with professors, manage projects, and simplify your entire Master's thesis management process in one place.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-lg group"
              >
                Get Started
                <svg 
                  className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <FeatureHighlight
                title="Project Management"
                description="Easily manage and track your thesis projects from start to finish"
              />
              <FeatureHighlight
                title="Team Collaboration"
                description="Work seamlessly with professors and fellow students"
              />
              <FeatureHighlight
                title="Progress Tracking"
                description="Monitor your project milestones and deadlines efficiently"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-blue-950 py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-center gap-4">
            <img src="/src/assets/logo.png" alt="DZTUDIANT Logo" className="h-10 w-10 object-contain brightness-200" />
            <div className="pl-4">
              <h3 className="text-xl font-bold text-white">DZTUDIANT</h3>
              <p className="text-sm text-blue-300">education</p>
            </div>
          </div>
          <div className="text-center text-blue-400 text-sm mt-4">
            &copy; {new Date().getFullYear()} DZTUDIANT education. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureHighlight = ({ title, description }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
      <h4 className="text-xl font-bold text-blue-950 mb-3">{title}</h4>
      <p className="text-blue-700">{description}</p>
    </div>
  );
};

export default LandingPage;