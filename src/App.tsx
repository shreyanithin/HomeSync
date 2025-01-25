import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';  // Ensure you have a home component in the `pages` folder
import RoomieListing from './pages/roomie';  // This imports RoomieListing from roomie.tsx
import RoommateDetail from './pages/roommate-detail';  // This imports RoommateDetail from roommate-detail.tsx
import Apartment from './pages/apartment';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />

          {/* Route for RoomieListing (roomie.tsx) */}
          <Route path="/roommate-listing" element={<RoomieListing />} />

          {/* Route for RoommateDetail (roommate-detail.tsx) */}
          <Route path="/roommate-detail" element={<RoommateDetail />} />

          <Route path="/apartment" element={<Apartment />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
