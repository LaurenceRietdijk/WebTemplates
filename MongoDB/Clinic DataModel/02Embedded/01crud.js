// Adding appointments to a practitioner
db.practitioners.updateOne(
    { practiceID: "10000" },
    { $set: {
        appointments: [
          {
            date: "2024-01-15",
            time: "10:00 AM",
            patient: {
              PatientID: "10000",
              firstname: "Mackenzie",
              lastname: "Fleetwood"
            }
          },
          {
            date: "2024-01-20",
            time: "02:00 PM",
            patient: {
              PatientID: "10001",
              firstname: "Jane",
              lastname: "Killingsworth"
            }
          }
        ]
      }
    }
  );

  db.practitioners.updateOne(
    { practiceID: "10000" },
    { $push: {
        appointments: {
          $each: [
            { date: "2024-02-20", time: "09:00 AM", patient: { PatientID: "10003", firstname: "Phill", lastname: "Greggan" }},
            { date: "2024-02-25", time: "10:00 AM", patient: { PatientID: "10004", firstname: "John", lastname: "Ward" }},
            { date: "2024-03-01", time: "11:00 AM", patient: { PatientID: "10005", firstname: "Mary", lastname: "Brown" }},
            { date: "2024-03-05", time: "01:00 PM", patient: { PatientID: "10006", firstname: "Terrence", lastname: "Hill" }},
            { date: "2024-03-10", time: "02:00 PM", patient: { PatientID: "10007", firstname: "Adrian", lastname: "Tamerkand" }}
          ]
        }
      }
    }
  );
  
  // Retrieving Appointments with their appointments for a specific patient
  db.practitioners.find({ "appointments.patient.PatientID": "10000" }).pretty();
  
  // Modifying an appointment date for a specific patient
  db.practitioners.updateOne(
    { "practiceID": "10000", "appointments.patient.PatientID": "10000" },
    { $set: { "appointments.$.date": "2024-01-16" } }
  );
  
  // Removing an appointment from a practitioner's schedule
  db.practitioners.updateOne(
    { practiceID: "10000" },
    { $pull: { appointments: { "patient.PatientID": "10000" } } }
  );
  
  // List all Appointments with their appointments
  db.practitioners.find({}, { appointments: 1 }).pretty();
  
  // Add more Appointments and their appointments
  db.practitioners.insertMany([
    {
      practiceID: "10006",
      title: "Dr",
      firstname: "Anne",
      lastname: "Funsworth",
      appointments: [
        {
          date: "2024-02-05",
          time: "09:00 AM",
          patient: {
            PatientID: "10005",
            firstname: "Mary",
            lastname: "Brown"
          }
        }
      ]
    }
  ]);
  
// Find appointments on a specific date
  db.practitioners.find({ "appointments.date": "2024-01-15" }).pretty();

// Find appointments on a specific Patient
  db.practitioners.find({ "appointments.patient.PatientID": "10000" });


// Update appointments on a specific date (for paractitioner / patient doc)
  db.practitioners.updateOne(
      { "practiceID": "10000", "appointments.patient.PatientID": "10000" },
      { $set: { "appointments.$.date": "2024-01-16" } }
    );

    // remove appointments for  a specific patient
    db.practitioners.updateOne(
      { practiceID: "10000" },
      { $pull: { appointments: { "patient.PatientID": "10000" } } }
    );


  
  // Update multiple appointments' times
  db.practitioners.updateMany(
    {},
    { $set: { "appointments.$[].time": "11:00 AM" } }
  );
  
  // Remove all appointments for all Appointments
  db.practitioners.updateMany(
    {},
    { $set: { appointments: [] } }
  );
  

 
  