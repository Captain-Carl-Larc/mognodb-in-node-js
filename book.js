// Import the connectToMongoDB function
const { connectToMongoDB } = require('./database');

// Async function to perform CRUD operations on the 'books' collection
async function runCRUD() {
    // Connect to the database
    const db = await connectToMongoDB();
    if (!db) return;
    const books = db.collection('books');

    // CREATE: Insert a new book
    const newBook = { title: 'Node.js Basics', author: 'John Doe', year: 2024 };
    const insertResult = await books.insertOne(newBook);
    console.log('Inserted book with _id:', insertResult.insertedId);

    // READ: Find all books
    const allBooks = await books.find().toArray();
    console.log('All books:', allBooks);

    // UPDATE: Update a book's year by title
    const updateResult = await books.updateOne(
        { title: 'Node.js Basics' },
        { $set: { year: 2025 } }
    );
    console.log('Number of books updated:', updateResult.modifiedCount);

    // DELETE: Delete a book by title
    // const deleteResult = await books.deleteOne({ title: 'Node.js Basics' });
    // console.log('Number of books deleted:', deleteResult.deletedCount);

    // Close the database connection
    await db.client.close();
}

// Run the CRUD operations
runCRUD().catch(console.error);

// Each step is explained with comments above. You can modify the data and queries as needed for practice.
