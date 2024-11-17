const express = require('express');
const connectToDB = require('./config/db.js'); // Import your db.js

const app = express();
const PORT = 3000;

// Named async IIFE
(async function testDBConnection() {
  try {
    const db = await connectToDB(); // Establish the database connection
    console.log('Database connection successful!');

    // Just a test endpoint to ensure the server runs
    app.get('/', (req, res) => {
      res.send('Database connection verified!');
    });

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the app if the database connection fails
  }
})();
