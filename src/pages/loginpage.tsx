// src/pages/LoginPage.tsx
import React from 'react';
import Login from '../components/login';

const LoginPage: React.FC = () => {
  const handleLoginSubmit = (data: { username: string; password: string }) => {
    console.log('Login data:', data);
    // Add your login logic here, e.g., API call to authenticate user
  };

  return (
    <div>
      <Login onSubmit={handleLoginSubmit} />
    </div>
  );
};

export default LoginPage;