//Count Total Practitioners:

db.practitioners.aggregate([
  { $count: "totalPractitioners" }
]);

//List Practitioners with Specific title:


db.practitioners.aggregate([
  { $match: { "title": "Ms" } }
]);

// Extract all Appointments for a Specific Date:


db.practitioners.aggregate([
  { $unwind: "$appointments" },
  { $match: { "appointments.date": "2024-01-16" } },
  { $project: { "firstname": 1, "lastname": 1, "appointments": 1 } }
]);


//List Practitioners and Their Appointments Count:

db.practitioners.aggregate([
  { $project: { "firstname": 1, "lastname": 1, "appointmentsCount": { $size: "$appointments" } } }
]);

//Sort Practitioners by Last Name:

db.practitioners.aggregate([
  { $sort: { "lastname": 1 } }
]);


//Calculate the Average Number of Appointments per Practitioner:

db.practitioners.aggregate([
  { $group: { _id: null, averageAppointments: { $avg: { $size: "$appointments" } } } }
]);

//List All Practitioners Who Have Seen a Specific Patient:

db.practitioners.aggregate([
  { $unwind: "$appointments" },
  { $match: { "appointments.patient.PatientID": "10000" } },
  { $project: { "firstname": 1, "lastname": 1 } }
]);

//Group by Date and List All Practitioners Who Have Appointments:

db.practitioners.aggregate([
  { $unwind: "$appointments" },
  { $group: { _id: "$appointments.date", practitioners: { $addToSet: "$firstname" } } },
  { $sort: { "_id": 1 } }
]);