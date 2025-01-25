import React from 'react';
import './App.css';
// Import React Router and Home component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';  // Make sure the Home component is correctly imported

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page route */}
        {/* You can add more routes here for other pages */}
      </Routes>
      
      
    </Router>
  );
};

export default App;
