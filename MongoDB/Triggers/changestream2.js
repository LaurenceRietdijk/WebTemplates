const { MongoClient } = require('mongodb');

// Connection URL and Database settings
const url = 'mongodb+srv://jawdatjm:mR1GG4uU6GAaDvaq@cluster0.uzx8v.mongodb.net/?tls=true';
const client = new MongoClient(url);

// Database and Collection
const dbName = 'SALESDB2024';
const collectionName = 'orders';

async function main() {
    try {
        await client.connect();
        console.log("Connected correctly ATLAS to server");
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Define the change stream, filtering for insert operations only
        const changeStream = collection.watch([
            { $match: { 'operationType': 'insert' } }
        ]);

        // Start listening to changes
        changeStream.on('change', (next) => {
            const customer = next.fullDocument.customer;
            console.log(`New order inserted for customer: ${customer.firstName} ${customer.lastName}`);
            // Additional logic can be added here, e.g., sending notifications, processing data, etc.
        });
    } catch (err) {
        console.error(err);
    }
}

main().catch(console.error);
