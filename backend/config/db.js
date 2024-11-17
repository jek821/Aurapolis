const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jacobkriss2001:cWeEE00aiuPj48xb@cluster1.7ylam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Function to connect to the database
async function connectToDB() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB!");
    // Return the database instance for further use
    return client.db("your-database-name"); // Replace "your-database-name" with the name of your database
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
}

module.exports = connectToDB;
