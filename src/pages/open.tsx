// src/pages/OpenPage.tsx
import React from 'react';
import styles from '../styles/Open.module.css';

const OpenPage: React.FC = () => {
  return (
    <div className={styles.homebg}>
      <div className={styles.content}>
        <h1 className={styles.logo}>HomeSync</h1>
        <p>Welcome to our website.</p>
      </div>
    </div>
  );
};

export default OpenPage;