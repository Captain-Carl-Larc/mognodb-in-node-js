// Import the connectToMongoDB function from database.js
const { connectToMongoDB } = require('./database');

// Call the function to test the connection
connectToMongoDB()
  .then(db => {
    // If connection is successful, this block runs
    // You can perform further DB operations here if you want
    // For now, just close the connection
    db.client.close();
  })
  .catch(err => {
    // If there is an error, it will be logged here
    console.error('Failed to connect:', err);
  });
