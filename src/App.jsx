import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import TeacherDashboard from './Teacher/TeacherDashboard';
import StudentDashboard from './Student/StudentDashboard';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/ForgotPassword" element={<ForgotPassword />} />
                    <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
                    <Route path="/StudentDashboard" element={<StudentDashboard />} />
                 
                </Routes>
            </div>
        </Router>
    );
};

export default App;