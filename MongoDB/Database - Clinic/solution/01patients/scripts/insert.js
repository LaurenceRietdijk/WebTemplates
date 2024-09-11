const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('clinic');
        const collection = database.collection('patients');

        // Insert a new patient
        const newPatient = {
            "PatientID": "10011",
            "Title": "Mr",
            "firstname": "Alex",
            "Initial": "R",
            "lastname": "Johnson",
            "lotno": "12",
            "street": "River Street",
            "suburb": "Manly",
            "state": "NSW",
            "postcode": "2095",
            "phone": "0298765432",
            "mobile": "0481234567",
            "medcareno": "1234567890123456",
            "dob": "15/05/1990",
            "gender": "male"
        };

        const result = await collection.insertOne(newPatient);
        console.log(`New patient inserted with _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
