// Import MongoDB package
const { MongoClient } = require('mongodb');

// Connection URI and Database setup
const uri = 'mongodb+srv://<username>:<password>@cluster.mongodb.net/mydatabase';
const client = new MongoClient(uri);

async function updateStock() {
  // Start a session for the transaction
  const session = client.startSession();

  try {
    // Start a transaction with read and write concern
    session.startTransaction({
      readConcern: { level: 'majority' },
      writeConcern: { w: 'majority', j: true }
    });

    // Connect to the database
    await client.connect();
    const db = client.db('mydatabase');

    // Step 1: Read current stock with read concern
    const product = await db.collection('inventory').findOne(
      { productId: 12345 },
      { session }  // Use the transaction session
    );

    // Step 2: Check if enough stock is available
    if (product && product.stock > 0) {
      // Step 3: Update stock with write concern
      await db.collection('inventory').updateOne(
        { productId: 12345 },
        { $inc: { stock: -1 } },  // Decrease stock by 1
        { session }  // Use the transaction session
      );
    } else {
      throw new Error('Insufficient stock');
    }

    // Commit the transaction
    await session.commitTransaction();
    console.log('Transaction committed successfully');
  } catch (error) {
    console.error('Transaction aborted due to error:', error);

    // Abort the transaction in case of error
    await session.abortTransaction();
  } finally {
    // End the session
    session.endSession();
    
    // Close the client connection
    await client.close();
  }
}

// Run the function
updateStock().catch(console.error);
