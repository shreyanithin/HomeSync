// src/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

// import Apartment from './pages/Apartment';  // Correct path to Apartment component
// import RoomieListing from './pages/roomie';


const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <h1>What are you looking for?</h1><br />
      <button className="navigate-btn" onClick={() => navigate('/roommate-listing')}>
        Find a Roomie
      </button><br /><br />

      {/* Button to navigate to Apartment page */}
      <button className="navigate-btn" onClick={() => navigate('/apartment')}>
        Find an Apartment
      </button>
    </div>
  );
};

export default Home;
