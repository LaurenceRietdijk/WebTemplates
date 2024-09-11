db.Appointments.find({ "appointments.patient.PatientID": "10000" });


db.Appointments.updateOne(
    { "practiceID": "10000", "appointments.patient.PatientID": "10000" },
    { $set: { "appointments.$.date": "2024-01-16" } }
  );
  
  db.Appointments.updateOne(
    { practiceID: "10000" },
    { $pull: { appointments: { "patient.PatientID": "10000" } } }
  );
  