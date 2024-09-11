const moment = require('moment');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function updateDates() {
  try {
    await client.connect();
    const database = client.db("clinic");
    const patients = database.collection("patients");

    const cursor = patients.find({});
    while (await cursor.hasNext()) {
      const doc = await cursor.next();
      const isoDate = moment(doc.dob, "DD/MM/YYYY").toDate();
      await patients.updateOne(
        { _id: doc._id },
        { $set: { dob: isoDate } }
      );
    }
  } finally {
    await client.close();
  }
}

updateDates().catch(console.error);
