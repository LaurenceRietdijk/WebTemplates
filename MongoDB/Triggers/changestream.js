const { MongoClient } = require('mongodb');

// Connection URL from Compass Connection
const url = 'mongodb+srv://jawdatjm:mR1GG4uU6GAaDvaq@cluster0.uzx8v.mongodb.net/?tls=true';
// Database and Collection
const dbName = 'SALESDB2024';
const collName = 'orders';

async function main() {
  // Create a new MongoClient
  const client = new MongoClient(url);

  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas server");

    // Get the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collName);

    // Open a Change Stream on the collection
    const changeStream = collection.watch();

    // Set up the listener
    changeStream.on('change', (next) => {
      console.log("Received a change to the collection: ", next);
    });
  } catch (err) {
    console.error(err);
  }
}

main();
/*
Trigger: When a document in the collection undergoes an insert, update, delete, or replace operation, 
MongoDB triggers a 'change' event.
Capture: The changeStream object captures this event and passes the information about the change as an argument 
to the callback function.
Logging: The callback function logs the change details to the console using console.log. 
This can include the entire change event document, showing you exactly what was changed in the collection.
*/
