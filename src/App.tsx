// src/App.tsx
import React from 'react';
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
      <div className="App">
        <NavigationWrapper />
        <Routes>
          <Route path="/" element={<OpenPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Add more routes here as you develop more pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;