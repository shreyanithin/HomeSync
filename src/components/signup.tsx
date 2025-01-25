// src/components/Signup.tsx
import React from 'react';
import styles from './Signup.module.css';

interface SignupProps {
  onSubmit: (data: { username: string; email: string; password: string; phoneNumber: string; gender: string }) => void;
}

const Signup: React.FC<SignupProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const gender = formData.get('gender') as string;

    onSubmit({ username, email, password, phoneNumber, gender });
  };

  return (
    <div className={styles.homebg }>
        <div>
      <h1 className={styles.homeh1}>Signup</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" required>
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;