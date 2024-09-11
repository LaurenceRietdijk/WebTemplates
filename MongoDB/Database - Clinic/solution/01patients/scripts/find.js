const { MongoClient } = require('mongodb');
async function run() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('clinic');
        const collection = database.collection('patients');

        // Find a patient by PatientID
        const patientID = "10000";
        const patient = await collection.findOne({ PatientID: patientID });

        console.log('Patient found:', patient);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
