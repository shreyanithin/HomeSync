// src/pages/OpenPage.tsx
import React from 'react';
import styles from '../styles/Open.module.css';
import Navigation from '../components/navigation'

const OpenPage: React.FC = () => {
  return (
    <div>
    <Navigation/>
    <div className={styles.homebg}>
      <div className={styles.content}>
        <h1 className={styles.logo}>HomeSync</h1>
        <p>Welcome to our website.</p>
      </div>
    </div>
    </div>
  );
};

export default OpenPage;