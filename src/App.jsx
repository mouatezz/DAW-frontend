import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import TeacherDashboard from './Teacher/TeacherDashboard';
import StudentDashboard from './Student/StudentDashboard';
import ProjectManagement from './Teacher/ProjectManagement';
import ApplicationManagement from './Teacher/ApplicationManagement';
import StudentExplorer from './Teacher/StudentExplorer'; // Make sure this path is correct
import Messages from './Teacher/Messages';
import Profile from './Teacher/Profile';
import LandingPage from './LandingPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          
          {/* Teacher Dashboard and nested routes */}
          <Route path="/TeacherDashboard/*" element={<TeacherDashboard />}>
            <Route path="studentExplorer" element={<StudentExplorer />} /> {/* Add this route */}
            <Route path="projectManagement" element={<ProjectManagement />} />
            <Route path="applicationManagement" element={<ApplicationManagement />} />
            <Route path="messages" element={<Messages />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Student Dashboard */}
          <Route path="/StudentDashboard" element={<StudentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
