//Count Total Appointments

db.appointments.aggregate([
  { $count: "totalAppointments" }
]);

//Group by Purpose and Count Each


db.appointments.aggregate([
  { $group: { _id: "$purpose", count: { $sum: 1 } } }
]);

//List All Appointments for Each Practitioner

db.appointments.aggregate([
  { $group: { _id: "$practitionerID", appointments: { $push: "$$ROOT" } } }
]);

//Count Appointments by Date

db.appointments.aggregate([
  { $group: { _id: "$date", count: { $sum: 1 } } }
]);


//List Unique Purposes


db.appointments.aggregate([
  { $group: { _id: null, uniquePurposes: { $addToSet: "$purpose" } } }
]);

//Average Number of Appointments per Practitioner


db.appointments.aggregate([
  { $group: { _id: "$practitionerID", count: { $sum: 1 } } },
  { $group: { _id: null, avgAppointments: { $avg: "$count" } } }
]);

//Find Appointments After a Specific Date

db.appointments.aggregate([
  { $match: { date: { $gt: new Date("2024-01-20T00:00:00.000Z") } } }
]);

//Sort Appointments by Date

db.appointments.aggregate([
  { $sort: { date: 1 } }
]);

//Count Appointments by Month


db.appointments.aggregate([
  {
    $group: {
      _id: { month: { $month: "$date" }, year: { $year: "$date" } },
      count: { $sum: 1 }
    }
  }
]);

//Join Appointments with Practitioner Details

db.appointments.aggregate([
  {
    $lookup: {
      from: "practitioners",
      localField: "practitionerID",
      foreignField: "practiceID",
      as: "practitionerDetails"
    }
  },
  { $unwind: "$practitionerDetails" },
  { $project: { "practitionerDetails.firstname": 1, "practitionerDetails.lastname": 1, "practitionerDetails.speciality": 1, "date": 1, "purpose": 1 } }
]);

//Join Appointments with Patients Details

db.appointments.aggregate([
    {
      $lookup: {
        from: "patients",
        localField: "patientID",
        foreignField: "PatientID",
        as: "patientDetails"
      }
    },
    { $unwind: "$patientDetails" },
    { $project: {
      "patientDetails.firstname": 1,
      "patientDetails.lastname": 1,
      "patientDetails.dob": 1,
      "patientDetails.gender": 1,
      "date": 1,
      "purpose": 1,
      "notes": 1
    } }
  ]);
  