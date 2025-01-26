// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with MySQL
const sequelize = new Sequelize('testdb', 'root', 'Shreya@2004', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM('female', 'male', 'other'),
    allowNull: false
  }
});

// Sync database
sequelize.sync();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { username, email, password, phoneNumber, gender } = req.body;
  console.log('Received signup request:', { username, email, password, phoneNumber, gender });

  try {
    const newUser = await User.create({ username, email, password, phoneNumber, gender });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error during signup:', error.message);
    res.status(400).json({ error: error.message });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username, password } });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});