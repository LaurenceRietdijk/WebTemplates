const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('clinic');
        const collection = database.collection('patients');

        // Update a patient's phone number
        const patientID = "10001";
        const updatedInfo = {
            $set: {
                phone: "0298765432"
            }
        };

        const result = await collection.updateOne({ PatientID: patientID }, updatedInfo);
        console.log(`${result.matchedCount} document(s) matched the query criteria.`);
        console.log(`${result.modifiedCount} document(s) was/were updated.`);

        // Retrieve and display the updated document
        const updatedDocument = await collection.findOne({ PatientID: patientID });
        console.log('Updated Document:', updatedDocument);

    } finally {
        await client.close();
    }
}

run().catch(console.dir);
