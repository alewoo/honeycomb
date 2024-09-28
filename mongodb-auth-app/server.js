const express = require('express');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables from .env

const app = express();
app.use(express.json());

const uri = 'mongodb://localhost:27017'; // Connection URI
const client = new MongoClient(uri);

const dbName = 'HackGtDatabase';
let db;

// Connect to MongoDB
async function connectToDB() {
  await client.connect();
  db = client.db(dbName);
  console.log('Connected to MongoDB');
}

connectToDB();

// Middleware for authenticating token
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied.');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET); // Use .env for secret key
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
}

// Sign-up route
app.post('/signup', async (req, res) => {
  const { firstname, lastname, email, password, year, major, skills, companies, careers } = req.body;

  // Check if the user exists
  const user = await db.collection('users').findOne({ email });
  if (user) return res.status(400).send('User already exists.');

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user
  await db.collection('users').insertOne({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    year,
    major
  });

  res.send('User created successfully');
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await db.collection('users').findOne({ email });
  if (!user) return res.status(400).send('User not found.');

  // Validate password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password.');

  // Generate token
  const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.header('Authorization', token).send('Logged in successfully');
});

// Protected route (example)
app.get('/dashboard', authenticateToken, (req, res) => {
  res.send(`Welcome, ${req.user._id}. Role: ${req.user.role}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
