const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000; // Change to your preferred port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'user_profiles'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err);
  } else {
    console.log('Connected to the database');
  }
});

app.post('/api/save-profile', (req, res) => {
  const profileData = req.body;
  // Insert user profile data into the database
  db.query('INSERT INTO user_profiles SET ?', profileData, (err, results) => {
    if (err) {
      console.error('Error saving profile:', err);
      res.status(500).json({ message: 'Profile could not be saved' });
    } else {
      res.status(200).json({ message: 'Profile saved successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});