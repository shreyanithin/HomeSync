import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';

interface UserDetails {
  name: string;
  email: string;
  phone: string;
  gender: string;
}

interface RoommateListingDetails {
  name: string;  // Add name to RoommateListingDetails
  city: string;
  occupation: string;
  requirements: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [roommateDetails, setRoommateDetails] = useState<RoommateListingDetails>({
    name: '', // Prepopulate name with a value (can be dynamic as per your logic)
    city: '',
    occupation: '',
    requirements: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+1234567890',
        gender: 'Male'
      };
      setUser(userData);
    };

    fetchUserData();
  }, []);

  // Handle the changes in the roommate details form
  const handleRoommateDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRoommateDetails({
      ...roommateDetails,
      [name]: value
    });
  };

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pass roommate details to the RoommateListing page via navigate
    navigate('/roommate-listing', { state: roommateDetails });
  };

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      {user ? (
        <div className="user-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}

      <h2>Looking for a roommate?</h2>
      <form onSubmit={handleFormSubmit} className="roommate-details-form">
        <div className="form-group">
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={roommateDetails.name}
            onChange={handleRoommateDetailsChange}
            required
          />
        </div><br />
        <div className="form-group">
          <label>City:</label><br />
          <input
            type="text"
            name="city"
            value={roommateDetails.city}
            onChange={handleRoommateDetailsChange}
            required
          />
        </div><br />
        <div className="form-group">
          <label>Occupation:</label><br />
          <input
            type="text"
            name="occupation"
            value={roommateDetails.occupation}
            onChange={handleRoommateDetailsChange}
            required
          />
        </div><br />
        <div className="form-group">
          <label>Requirements:</label><br />
          <textarea
            name="requirements"
            value={roommateDetails.requirements}
            onChange={handleRoommateDetailsChange}
            required
          />
        </div><br />
        <button type="submit" className="submit-btn">Submit</button><br />
      </form>

      <button onClick={() => navigate('/roommate-listing')} className="roomie-listing-btn">
        Go to Roommate Listings
      </button>
    </div>
  );
};

export default ProfilePage;
