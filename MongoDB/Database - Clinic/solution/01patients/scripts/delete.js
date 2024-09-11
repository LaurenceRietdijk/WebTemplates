const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('clinic');
        const collection = database.collection('patients1');

        // PatientID to be deleted
        const patientID = "10002";

        // Check if the patient exists
        const patient = await collection.findOne({ PatientID: patientID });

        if (patient) {
            // If the patient exists, delete the document
            const result = await collection.deleteOne({ PatientID: patientID });
            console.log(`Patient with ID ${patientID} was found and deleted.`);
            console.log(`${result.deletedCount} document(s) was/were deleted.`);
        } else {
            // If the patient does not exist
            console.log(`Patient with ID ${patientID} does not exist.`);
        }
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
