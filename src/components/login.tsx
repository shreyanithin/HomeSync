// src/components/Login.tsx
import React from 'react';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';

interface LoginProps {
  onSubmit: (data: { username: string; password: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        navigate('/home');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.homebg}>
      <div>
      <h1 className={styles.logo}>HomeSync</h1>
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