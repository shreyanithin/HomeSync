// src/App.tsx
import React from 'react';
import Apartment from './pages/apartment';
import Home from './pages/home';  // Home page component
import RoommateListings from './pages/roomie';  // Roommate listing page
import RoommateDetail from './pages/roommate-detail';  // Roommate detail page
import ChatPage from './pages/ChatPage';  // Chat page

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import OpenPage from './pages/open';
import LoginPage from './pages/loginpage';
import SignupPage from './pages/signuppage';
import Navigation from './components/navigation';


const NavigationWrapper: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';

  return (
    <Navigation showLoginButton={!isLoginPage && !isSignupPage} />
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <NavigationWrapper/>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<OpenPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Route for Roommate Listings */}
        <Route path="/roommate-listing" element={<RoommateListings />} />

        <Route path="/apartment" element={<Apartment />} />

        {/* Route for Roommate Detail */}
        <Route path="/roommate-detail" element={<RoommateDetail />} />

        {/* Route for Chat Page */}
        <Route path="/chat" element={<ChatPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;