
// Insert practitioners records into the collection
db.practitioners.insertMany([
    {
      "parctID": "10011",
      "Tilte": "Dr",
      "firstname": "Mark",
      "initial": "P",
      "lastname": "Huston",
      "lotno": "21",
      "street": "Fuller Street",
      "suburb": "Sunshine",
      "state": "NSW",
      "postcode": "2343",
      "phone": "287657483",
      "mobile": "476352638",
      "practiceLicno": "63738",
      "Dob": "7/07/1975",
      "Gender": "male",
      "specaility": "Medical Practitioner (Doctor or GP)"
    },
    {
      "parctID": "10012",
      "Tilte": "Mrs",
      "firstname": "Hilda",
      "initial": "D",
      "lastname": "Brown",
      "lotno": "32",
      "street": "Argyle Street",
      "suburb": "Bonnels Bay",
      "state": "NSW",
      "postcode": "2264",
      "phone": "249756544",
      "mobile": "318466453",
      "practiceLicno": "37876",
      "Dob": "3/12/1993",
      "Gender": "female",
      "specaility": "Registered nurse"
    },
    // More practitioners as specified
  ]);
  
  // Find all practitioners
  db.practitioners.find().pretty();
  
  // Find practitioner by parctID
  db.practitioners.findOne({ parctID: "10011" });
  
  // Update a practitioner's phone number
  db.practitioners.updateOne(
    { parctID: "10000" },
    { $set: { phone: "2999999999" }}
  );
  
  // Delete a practitioner by parctID
  db.practitioners.deleteOne({ parctID: "10009" });
  
  // Count all practitioners in the collection
  db.practitioners.countDocuments();
  
  // Find practitioners with a specific specialty
  db.practitioners.find({ specaility: "Medical Practitioner (Doctor or GP)" }).pretty();
  
  // Update multiple practitioners' state
  db.practitioners.updateMany(
    { state: "NSW" },
    { $set: { state: "New South Wales" }}
  );
  
  // Add a new field 'yearsOfExperience' to all documents
  db.practitioners.updateMany(
    {},
    { $set: { yearsOfExperience: 10 }}
  );
  
  // Rename a field from 'Dob' to 'DateOfBirth'
  db.practitioners.updateMany(
    {},
    { $rename: { "Dob": "DateOfBirth" }}
  );
  
  // Remove the 'mobile' field from all documents
  db.practitioners.updateMany(
    {},
    { $unset: { mobile: "" }}
  );
  
  // Sort practitioners by last name
  db.practitioners.find().sort({ lastname: 1 }).pretty();
  
  // Limit the query result to 5 documents
  db.practitioners.find().limit(5).pretty();
  
  // Find practitioners older than a specific date
  db.practitioners.find({ DateOfBirth: { $lt: "01/01/1980" }}).pretty();
  
  // Add multiple new practitioners using insertMany
  db.practitioners.insertMany([
    // Additional practitioners as similar to the initial batch
  ]);
  
  // Delete all practitioners who are nurses
  db.practitioners.deleteMany({ specaility: "nurse" });
  
  // Find and modify a practitioner, increasing their yearsOfExperience by 5
  db.practitioners.updateOne(
    { parctID: "10003" },
    { $inc: { yearsOfExperience: 5 }}
  );
  
  // Find practitioners from a specific postcode and sort by firstname
  db.practitioners.find({ postcode: "2343" }).sort({ firstname: 1 }).pretty();
  
  // Using aggregation to count practitioners by specialty
  db.practitioners.aggregate([
    { $group: { _id: "$specaility", count: { $sum: 1 }}}
  ]).pretty();
  
  // Use a regex to find practitioners with a firstname starting with 'A'
  db.practitioners.find({ firstname: { $regex: '^A' }}).pretty();
  
  // Upsert a practitioner, creating a new document if no match found 
  db.practitioners.updateOne(
    { parctID: "10010" },
    {
      $set: {
        "Tilte": "Dr",
        "firstname": "New",
        "lastname": "Doctor",
        "specaility": "Surgeon"
      }
    },
    { upsert: true /*(update found , create new if not found) */}
  );
  