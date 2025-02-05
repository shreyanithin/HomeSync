import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import userImage from '../assets/user.png';

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
      </button><br /><br />

      {/* Profile Icon to navigate to Profile Page */}
      <div className="profile-icon" onClick={() => navigate('/profile')}>
      <img src={userImage} alt="Profile" className="profile-image" />
      <p>User Details</p>
      </div>
    </div>
  );
};

export default Home;

