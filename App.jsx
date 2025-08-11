import React from 'react'
import{ BrowserRouter as Router, Routes, Route } from "react-router-dom";
import{Toaster} from "react-hot-toast";

import Login from './pages/auth/Login';
import Signup from './pages/auth/SignUp';
import LandingPage from './pages/LandingPage';
import Interviewprep from './pages/interview/Interviewprep';

import Dashboard from './pages/home/Dashboard';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/interviewprep/:sessionId" element={<Interviewprep />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      
      <Toaster
      toastOptions={{
        className:"",
        style:{
          fontSize:"13px",
            
          },
        }
      }
      />
    </div>
  )
}

export default App
