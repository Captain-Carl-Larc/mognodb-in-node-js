// Import the MongoClient class from the mongodb package
const { MongoClient } = require('mongodb');

// Connection URI. Replace <username>, <password>, and <your-cluster-url> with your MongoDB Atlas details or use 'mongodb://localhost:27017' for local MongoDB
const uri = 'mongodb://localhost:27017'; // Use your MongoDB URI here

// Name of the database you want to use
const dbName = 'books';

// Create a new MongoClient instance
const client = new MongoClient(uri);

// Async function to connect to MongoDB
async function connectToMongoDB() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected successfully to MongoDB');
        // Get the database object
        const db = client.db(dbName);
        console.log(db);
        
        console.log(`Using database: ${db.databaseName}`);
        // You can perform database operations here
        return db;
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

// Export the connect function for use in other files
module.exports = { connectToMongoDB };
