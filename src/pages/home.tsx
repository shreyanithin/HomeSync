// src/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h1>What are you looking for?</h1><br />
      <h2>Find a roomie</h2><br />
        <h2>Find an apartment</h2>
    </div>
  );
};

export default Home;
