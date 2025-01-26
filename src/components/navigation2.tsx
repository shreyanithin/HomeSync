// src/components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Open.module.css';

const Navigation: React.FC= ( )=> {
  return (
    <nav className={styles.navbar}>
      <button className={styles.navButton}>
        <Link to="/home" className={styles.navLink}>Home</Link>
      </button>
      {/* Add more buttons here as you develop more pages */}
    </nav>
  );
};

export default Navigation;