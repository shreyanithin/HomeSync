import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  // Import useNavigate
import './roomie.css';
import Navigation from '../components/navigation2';

interface RoommateListingDetails {
  name: string;
  city: string;
  occupation: string;
  requirements: string;
}

const RoommateListing: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Initialize navigate
  const [roommateDetails, setRoommateDetails] = useState<RoommateListingDetails | null>(null);

  // Static (default) roommate data
  const defaultRoommates = [
    {
      name: 'John Doe',
      city: 'New York',
      occupation: 'Software Engineer',
      requirements: 'Looking for a clean and quiet environment.'
    },
    {
      name: 'Jane Smith',
      city: 'San Francisco',
      occupation: 'Designer',
      requirements: 'Looking for someone who is friendly and social.'
    },
    {
      name: 'Sam Williams',
      city: 'Chicago',
      occupation: 'Teacher',
      requirements: 'Looking for someone responsible and respectful.'
    }
  ];

  useEffect(() => {
    // Check if roommate details are passed in the state
    if (location.state) {
      setRoommateDetails(location.state);
    }
  }, [location.state]);

  // Handle click event to navigate to Roommate Detail page
  const handleCardClick = (roommate: RoommateListingDetails) => {
    navigate('/roommate-detail', { state: roommate });  // Pass the roommate details
  };

  return (
    <div>    
      <Navigation />
      <div className="roommate-listing-container">
        <h1>Roommate Listings</h1>

        {/* Display default roommates */}
        <div className="roommate-list">
          {defaultRoommates.map((roommate, index) => (
            <div 
              key={index} 
              className="roommate-card" 
              onClick={() => handleCardClick(roommate)}  // Add onClick to navigate
            >
              <h3>{`Name: ${roommate.name}`}</h3>
              <p><strong>City:</strong> {roommate.city}</p>
              <p><strong>Occupation:</strong> {roommate.occupation}</p>
              <p><strong>Requirements:</strong> {roommate.requirements}</p>
            </div>
          ))}
        </div>

        {/* Display newly submitted roommate details if available */}
        {roommateDetails && (
          <div className="roommate-card">
            <h3>{`Name: ${roommateDetails.name}`}</h3>
            <p><strong>City:</strong> {roommateDetails.city}</p>
            <p><strong>Occupation:</strong> {roommateDetails.occupation}</p>
            <p><strong>Requirements:</strong> {roommateDetails.requirements}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoommateListing;
