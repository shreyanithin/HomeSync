import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './roomie.css';

interface Roommate {
  name: string;
  age: number;
  gender: string;
  city: string;
  occupation: string;
  description: string;
  email: string;
}

const RoomieListing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();  // Ensure navigate is correctly imported

  const [roommates] = useState<Roommate[]>([
    {
      name: 'John Doe',
      age: 25,
      gender: 'Male',
      city: 'New York',
      occupation: 'Software Engineer',
      description: 'Looking for a clean and quiet environment.',
      email: 'johndoe@example.com',
    },
    {
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      city: 'San Francisco',
      occupation: 'Designer',
      description: 'Prefer a roommate who is friendly and social.',
      email: 'janesmith@example.com',
    },
    {
      name: 'Sam Williams',
      age: 30,
      gender: 'Male',
      city: 'Chicago',
      occupation: 'Teacher',
      description: 'Looking for someone responsible and respectful.',
      email: 'samwilliams@example.com',
    },
  ]);

  // Filter roommates based on the search query
  const filteredRoommates = roommates.filter(
    (roommate) =>
      roommate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      roommate.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      roommate.occupation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (roommate: Roommate) => {
    console.log('Navigating to roommate-detail with:', roommate);
    navigate('/roommate-detail', { state: roommate });
  };

  return (
    <div className="roommate-listing-container">
      <h1 className="title">Find a Roommate</h1>
      <input 
        type="text"
        placeholder="Search by name, city, or occupation"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="roommate-list">
        {filteredRoommates.length > 0 ? (
          filteredRoommates.map((roommate, index) => (
            <div
              key={index}
              className="roommate-card"
              onClick={() => handleCardClick(roommate)}  // Ensure onClick is working
            >
              <h3 className="roommate-name">{roommate.name}</h3>
              <p><strong>Age:</strong> {roommate.age}</p>
              <p><strong>Gender:</strong> {roommate.gender}</p>
              <p><strong>City:</strong> {roommate.city}</p>
              <p><strong>Occupation:</strong> {roommate.occupation}</p>
              <p><strong>Description:</strong> {roommate.description}</p>
            </div>
          ))
        ) : (
          <p>No roommates found. Try a different search query.</p>
        )}
      </div>
    </div>
  );
};

export default RoomieListing;
