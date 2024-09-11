// appointmentsQueries.js for MongoDB shell

// Find all appointments
db.appointments.find().pretty();

// Find appointments on a specific date
db.appointments.find({ "date": ISODate("2024-01-15T00:00:00Z") }).pretty();

// Find appointments for a specific patient XX
db.appointments.find({ "PatientID": "10000" }).pretty();

// Get the latest appointment first
db.appointments.find().sort({ "date": -1 }).limit(1).pretty();

// Count appointments by date
db.appointments.aggregate([
    { $group: { _id: "$date", count: { $sum: 1 } } }
]);

// Update the time of an appointment
db.appointments.updateOne(
    { "appointmentID": "A1000" },
    { $set: { "time": "11:00 AM" } }
);

// Delete an appointment
db.appointments.deleteOne({ "appointmentID": "A1000" });

// Aggregate: List appointments grouped by practitioner
db.appointments.aggregate([
    { $group: { _id: "$practitionerID", appointments: { $push: "$$ROOT" } } }
]);

// Find appointments that include a certain procedure
db.appointments.find({ "procedure": "Dental Checkup" }).pretty();

// Find all appointments scheduled after a certain date
db.appointments.find({ "date": { $gt: ISODate("2024-01-01T00:00:00Z") } }).pretty();

// Count the number of appointments per practitioner
db.appointments.aggregate([
    { $group: { _id: "$practitionerID", totalAppointments: { $sum: 1 } } }
]);

// Find appointments within a certain time range
db.appointments.find({
    "date": {
        $gte: ISODate("2024-01-01T00:00:00Z"),
        $lt: ISODate("2024-01-31T00:00:00Z")
    }
}).pretty();

// Update all appointments for a specific practitioner to a new date
db.appointments.updateMany(
    { "practitionerID": "10000" },
    { $set: { "date": ISODate("2024-02-01T00:00:00Z") } }
);

// Delete all appointments for a specific patient
db.appointments.deleteMany({ "patient.PatientID": "10010" });

// Aggregate: Calculate the average number of appointments per day
db.appointments.aggregate([
    { $group: { _id: "$date", dailyCount: { $sum: 1 } } },
    { $group: { _id: null, averageCount: { $avg: "$dailyCount" } } }
]);

// Find appointments for a specific practitioner and sort by time
db.appointments.find({ "practitionerID": "10001" }).sort({ "time": 1 }).pretty();

// Increment the duration of all appointments by 15 minutes
db.appointments.updateMany(
    {},
    { $inc: { "duration": 15 } }
);



// Run this script in a MongoDB shell or a compatible interface.
