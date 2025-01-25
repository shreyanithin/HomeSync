import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './roommate-detail.css';

interface RoommateDetailProps {
  name: string;
  age: number;
  gender: string;
  city: string;
  occupation: string;
  description: string;
  email: string;
}

const RoommateDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const roommate = location.state as RoommateDetailProps;

  const handleChat = () => {
    alert(`Starting chat with ${roommate.name}`);
    // Implement actual chat functionality here
  };

  return (
    <div className="roommate-detail-container">
      <h1>Roommate Details</h1>
      <p><strong>Name:</strong> {roommate.name}</p>
      <p><strong>Age:</strong> {roommate.age}</p>
      <p><strong>Gender:</strong> {roommate.gender}</p>
      <p><strong>City:</strong> {roommate.city}</p>
      <p><strong>Occupation:</strong> {roommate.occupation}</p>
      <p><strong>Description:</strong> {roommate.description}</p>
      <p><strong>Email:</strong> {roommate.email}</p>
      <div className="button">
      <button onClick={handleChat} className="chat-button">Chat</button>
      <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
      </div>
    </div>
  );
};

export default RoommateDetail;
