import React from 'react';
import Apartment from './pages/apartment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';  // Home page component
import RoommateListings from './pages/roomie';  // Roommate listing page
import RoommateDetail from './pages/roommate-detail';  // Roommate detail page
import ChatPage from './pages/ChatPage';  // Chat page


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<Home />} />

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
