// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Replace <password> with your actual password and <cluster-url> with your cluster URL
const mongoURI = 'mongodb+srv://shreya:shreya@cluster0.0shmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  gender: { type: String, enum: ['female', 'male', 'other'], required: true }
});

// Create User model
const User = mongoose.model('User', userSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { username, email, password, phoneNumber, gender } = req.body;
  console.log('Received signup request:', { username, email, password, phoneNumber, gender });

  if (!username || !email || !password || !phoneNumber || !gender) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newUser = new User({ username, email, password, phoneNumber, gender });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error during signup:', error.message);
    console.error('Error details:', error);
    
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).json({ error: 'Username or email already exists' });
    }
    
    res.status(400).json({ error: error.message });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Received login request:', { username, password });

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});