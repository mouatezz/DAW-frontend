import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import TeacherDashboard from './components/Teacher/TeacherDashboard';
import StudentDashboard from './components/Student/StudentDashboard';
import ProjectManagement from './components/Teacher/ProjectManagement';
import ApplicationManagement from './components/Teacher/ApplicationManagement';
import StudentExplorer from './components/Teacher/StudentExplorer'; // Make sure this path is correct
import Messages from './components/Teacher/Messages';
import Profile from './components/Teacher/Profile';
import LandingPage from './LandingPage';
import AdminLayout from './components/admin/AdminLayout';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/AdminLayout" element={<AdminLayout />} />
          {/* Teacher Dashboard and nested routes */}
          <Route path="/TeacherDashboard/*" element={<TeacherDashboard />}>
            <Route path="studentExplorer" element={<StudentExplorer />} />
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
