// src/pages/SignupPage.tsx
import React from 'react';
import Signup from '../components/signup';

const signuppage: React.FC = () => {
  const handleSignupSubmit = (data: { username: string; email: string; password: string;  }) => {
    console.log('Signup data:', data);
    // Add your signup logic here, e.g., API call to register user
  };

  return (
    <div>
      <Signup onSubmit={handleSignupSubmit} />
    </div>
  );
};

export default signuppage;