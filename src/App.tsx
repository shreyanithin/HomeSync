import React from 'react';
import './App.css';
import './pages/roomie.css'; // Correct path to roomie.css
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';  // Ensure that the Home component is correctly imported
import RoomieListing from './pages/roomie'; // Import RoomieListing from the pages folder

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<Home />} />
          
          {/* Route for the Roommate Listing page */}
          <Route path="/roommate-listing" element={<RoomieListing />} />
          
          {/* You can add more routes here for other pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
