
// 1. Insert a new document
db.patients.insertOne({
    "PatientID": "10011",
    "Title": "Ms",
    "firstname": "Alexandra",
    "Initial": "R",
    "lastname": "Smith",
    "lotno": "45",
    "street": "Ocean Street",
    "suburb": "Bondi",
    "state": "NSW",
    "postcode": "2026",
    "phone": "0298765432",
    "mobile": "0481234567",
    "medcareno": "1234567890123456",
    "dob": "10/10/1988",
    "gender": "female"
});

// 2. Find a document by PatientID
db.patients.find({ "PatientID": "10000" }).pretty();

// 3. Update a patient's phone number
db.patients.updateOne(
    { "PatientID": "10001" },
    { $set: { "phone": "0299887766" } }
);

// 4. Delete a document by PatientID
db.patients.deleteOne({ "PatientID": "10002" });

// 5. Find all patients with a specific last name
db.patients.find({ "lastname": "Brown" }).pretty();

// 6. Count the number of patients in the collection
db.patients.countDocuments();

// 7. Find all patients from a specific suburb
db.patients.find({ "suburb": "Chatswood" }).pretty();

// 8. Find all male patients
db.patients.find({ "gender": "male" }).pretty();

// 9. Find all patients born before a certain date
db.patients.find({ "dob": { $lt: "01/01/1980" } }).pretty();
// replace with:
db.patients.find({ "dob": { $lt: ISODate("1980-01-01T00:00:00Z") } }).pretty();
// or 
db.patients.find({ "dob": { $lt: ISODate("1980-01-01") } }).pretty();



// 10. Update the suburb of a specific patient
db.patients.updateOne(
    { "PatientID": "10003" },
    { $set: { "suburb": "Newtown" } }
);

// 11. Find all patients with a certain postcode
db.patients.find({ "postcode": "2069" }).pretty();

// 12. Delete all patients with a specific last name
db.patients.deleteMany({ "lastname": "Barrette" });

// 13. Find patients with a specific title (e.g., "Dr")
db.patients.find({ "Title": "Dr" }).pretty();

// 14. Insert multiple new patient documents
db.patients.insertMany([
    {
        "PatientID": "10012",
        "Title": "Mr",
        "firstname": "David",
        "Initial": "L",
        "lastname": "Thompson",
        "lotno": "12",
        "street": "Main Road",
        "suburb": "Epping",
        "state": "NSW",
        "postcode": "2121",
        "phone": "0299887767",
        "mobile": "0488765432",
        "medcareno": "9876543210987654",
        "dob": "01/01/1990",
        "gender": "male"
    },
    {
        "PatientID": "10013",
        "Title": "Mrs",
        "firstname": "Sarah",
        "Initial": "M",
        "lastname": "Johnson",
        "lotno": "33",
        "street": "King Street",
        "suburb": "Randwick",
        "state": "NSW",
        "postcode": "2031",
        "phone": "0299887768",
        "mobile": "0481234543",
        "medcareno": "0987654321098765",
        "dob": "15/07/1985",
        "gender": "female"
    }
]);

// 15. Find all patients with a certain Medicare number
db.patients.find({ "medcareno": "1234567890123456" }).pretty();

// 16. Update multiple documents based on a condition
db.patients.updateMany(
    { "state": "NSW" },
    { $set: { "state": "New South Wales" } }
);

// 17. Find patients by their mobile number
db.patients.find({ "mobile": "0465375486" }).pretty();

// 18. Find patients with an Initial
db.patients.find({ "Initial": "D" }).pretty();

// 19. Delete all documents from the collection
db.patients.deleteMany({});

// 20. Insert a bulk of documents for testing
db.patients.insertMany([
    {
      "PatientID": "10000",
      "Title": "Mr",
      "firstname": "Mackenzie",
      "Initial": "J",
      "lastname": "Fleetwood",
      "lotno": "233",
      "street": "Dreaming Street",
      "suburb": "Roseville",
      "state": "NSW",
      "postcode": "2069",
      "phone": "0298654743",
      "mobile": "0465375486",
      "medcareno": "7253418356478253",
      "dob": "12/03/2000",
      "gender": "male"
    },
    {
      "PatientID": "10001",
      "Title": "Ms",
      "firstname": "Jane",
      "Initial": "P",
      "lastname": "Killingsworth",
      "lotno": "34",
      "street": "Southern Road",
      "suburb": "Yarramundi",
      "state": "NSW",
      "postcode": "2753",
      "phone": "0234654345",
      "mobile": "0342134679",
      "medcareno": "9365243640183640",
      "dob": "8/04/1943",
      "gender": "female"
    },
    {
      "PatientID": "10002",
      "Title": "Mr",
      "firstname": "Peter",
      "Initial": "D",
      "lastname": "Leons",
      "lotno": "21",
      "street": "Constitution Drive",
      "suburb": "West Hoxton",
      "state": "NSW",
      "postcode": "2171",
      "phone": "0276539183",
      "mobile": "0125364927",
      "medcareno": "1873652945578932",
      "dob": "8/07/1962",
      "gender": "male"
    },
    {
      "PatientID": "10003",
      "Title": "Mr",
      "firstname": "Phill",
      "Initial": "B",
      "lastname": "Greggan",
      "lotno": "42",
      "street": "Donn Lane",
      "suburb": "Killara",
      "state": "NSW",
      "postcode": "2071",
      "phone": "0276548709",
      "mobile": "1234326789",
      "medcareno": "6473645782345678",
      "dob": "31/08/1971",
      "gender": "male"
    },
    {
      "PatientID": "10004",
      "Title": "Dr",
      "firstname": "John",
      "Initial": "W",
      "lastname": "Ward",
      "lotno": "332",
      "street": "Tomorrow Road",
      "suburb": "Chatswood",
      "state": "NSW",
      "postcode": "2488",
      "phone": "4847383848",
      "mobile": "4838382728",
      "medcareno": "4738294848484838",
      "dob": "12/02/1978",
      "gender": "male"
    }
]);


// 21. Find all patients Dob: (Filter by dob and phone
db.patients.find({}, { _id: 0, dob: 1 , phone: 1})
