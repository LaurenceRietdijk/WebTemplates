const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017'; // Update if your MongoDB server is running elsewhere
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    // Connect to the MongoDB client
    await client.connect();
    
    // Select the database
    const database = client.db('clinic');
    
    // Select the collections
    const patientsCollection = database.collection('patients');
    const practitionersCollection = database.collection('practitioners');
    
    // Patient record
    const patientRecord = {
      PatientID: 10000,
      Title: 'Mr',
      firstname: 'Mackenzie',
      Initial: 'J',
      lastname: 'Fleetwood',
      lotno: '233',
      street: 'Dreaming Street',
      suburb: 'Roseville',
      state: 'NSW',
      postcode: '2069',
      phone: '0298654743',
      mobile: '0465375486',
      medcareno: '7253418356478253',
      dob: '12/03/2000',
      gender: 'male'
    };
    
    // Practitioner record
    const practitionerRecord = {
      parctID: 10000,
      Tilte: 'Dr',
      firstname: 'Mark',
      initial: 'P',
      lastname: 'Huston',
      lotno: '21',
      street: 'Fuller Street',
      suburb: 'Sunshine',
      state: 'NSW',
      postcode: '2343',
      phone: '287657483',
      mobile: '476352638',
      practiceLicno: '63738',
      Dob: '7/07/1975',
      Gender: 'male',
      specaility: 'Medical Practitioner (Doctor or GP)'
    };
    
    // Insert the patient record
    const patientResult = await patientsCollection.insertOne(patientRecord);
    console.log(`Patient inserted with _id: ${patientResult.insertedId}`);
    
    // Insert the practitioner record
    const practitionerResult = await practitionersCollection.insertOne(practitionerRecord);
    console.log(`Practitioner inserted with _id: ${practitionerResult.insertedId}`);
    
  } finally {
    // Close the client connection
    await client.close();
  }
}

// Run the script
run().catch(console.dir);
