// src/components/Login.tsx
import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

interface LoginProps {
  onSubmit: (data: { username: string; password: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    onSubmit({ username, password });
  };

  return (
    <div className={styles.homebg}>
      <div>
      <h1 className={styles.homeh1}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      
      <div className={styles.signupLink}>
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </div>
      </form>
    </div>
    </div>
  );
};

export default Login;