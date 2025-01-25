import React, { useState } from 'react';
import './roomie.css'; // Correct path from roomie.tsx in src/pages folder

interface Roommate {
  name: string;
  age: number;
  gender: string;
  city: string;
  occupation: string;
  description: string;
}

const RoomieListing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [roommates, setRoommates] = useState<Roommate[]>([
    {
      name: 'John Doe',
      age: 25,
      gender: 'Male',
      city: 'New York',
      occupation: 'Software Engineer',
      description: 'Looking for a clean and quiet environment.',
    },
    {
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      city: 'San Francisco',
      occupation: 'Designer',
      description: 'Prefer a roommate who is friendly and social.',
    },
    {
      name: 'Sam Williams',
      age: 30,
      gender: 'Male',
      city: 'Chicago',
      occupation: 'Teacher',
      description: 'Looking for someone responsible and respectful.',
    },
  ]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredRoommates = roommates.filter(
    (roommate) =>
      roommate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      roommate.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      roommate.occupation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="roommate-listing-container">
      <h1 className="title">Find a Roommate</h1>
      <input
        type="text"
        placeholder="Search by name, city, or occupation"
        value={searchQuery}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="roommate-list">
        {filteredRoommates.length > 0 ? (
          filteredRoommates.map((roommate, index) => (
            <div key={index} className="roommate-card">
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
