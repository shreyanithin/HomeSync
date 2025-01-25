// src/components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Open.module.css';

interface NavigationProps {
  showLoginButton?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ showLoginButton = true }) => {
  return (
    <nav className={styles.navbar}>
      <button className={styles.navButton}>
        <Link to="/" className={styles.navLink}>Home</Link>
      </button>
      {showLoginButton && (
        <button className={styles.navButton}>
          <Link to="/login" className={styles.navLink}>Login</Link>
        </button>
      )}
      {/* Add more buttons here as you develop more pages */}
    </nav>
  );
};

export default Navigation;