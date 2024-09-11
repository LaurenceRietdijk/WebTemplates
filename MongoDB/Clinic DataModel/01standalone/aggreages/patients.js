// Patients Aggregation Examples

// 1. Count Total Patients
db.patients.aggregate([
    { $count: "totalPatients" }
  ]);
  
  // 2. Group by Gender and Count
  db.patients.aggregate([
    { $group: { _id: "$gender", count: { $sum: 1 } } }
  ]);
  
  // 3. Calculate Average Age of Patients
  /*
  age: { 
  $floor: { 
    $divide: [
      { $subtract: [new Date(), "$dob"] }, 
      (365 * 24 * 60 * 60 * 1000)
    ] 
  } 
}

*/
  db.patients.aggregate([
    {
      $project: {
        age: { $floor: { $divide: [{ $subtract: [new Date(), "$dob"] }, (365 * 24*60*60*1000)] } }
      }
    },
    {
      $group: {
        _id: null,
        averageAge: { $avg: "$age" }
      }
    }
  ]);
  
  // 4. List Patients Older Than 50 Years
  db.patients.aggregate([
    {
      $project: {
        fullName: { $concat: ["$firstname", " ", "$lastname"] },
        age: { $floor: { $divide: [{ $subtract: [new Date(), "$dob"] }, (365 * 24*60*60*1000)] } }
      }
    },
    { $match: { age: { $gt: 50 } } }
  ]);
  
  // 5. Find Max and Min Ages
  db.patients.aggregate([
    {
      $project: {
        // Calculate age based on dob assuming dob is stored as ISODate
        age: {
          $floor: {
            $divide: [
              { $subtract: [new Date(), "$dob"] },
              (365 * 24 * 60 * 60 * 1000) // Milliseconds in a year
            ]
          }
        }
      }
    },
    {
      $group: {
        _id: null, // Grouping without a specific field, aggregates all documents
        maxAge: { $max: "$age" },
        minAge: { $min: "$age" }
      }
    }
  ]);

// 5. Find Max and Min Ages - exclude age: 0
  db.patients.aggregate([
    {
      $project: {
        // Calculate age based on dob assuming dob is stored as ISODate
        age: {
          $floor: {
            $divide: [
              { $subtract: [new Date(), "$dob"] },
              (365 * 24 * 60 * 60 * 1000) // Milliseconds in a year
            ]
          }
        }
      }
    },
    {
      $match: {
        age: { $gt: 0 } // Exclude documents where age is 0
      }
    },
    {
      $group: {
        _id: null, // Grouping without a specific field, aggregates all documents
        maxAge: { $max: "$age" },
        minAge: { $min: "$age" }
      }
    }
  ]);
  


  
  // 6. Sort Patients by Last Name Ascending
  db.patients.aggregate([
    { $sort: { lastname: 1 } }
  ]);
  
  // 7. Count Patients by State
  db.patients.aggregate([
    { $group: { _id: "$state", count: { $sum: 1 } } }
  ]);
  
  // 8. Filter by State and Count Genders
  db.patients.aggregate([
    { $match: { state: "NSW" } },
    { $group: { _id: "$gender", count: { $sum: 1 } } }
  ]);
  
  // 9. List All Unique Genders
  db.patients.aggregate([
    { $group: { _id: null, genders: { $addToSet: "$gender" } } }
  ]);
  
 // 10. Aggregate Total Mobile Contacts Collected
db.patients.aggregate([
    { $match: { mobile: { $exists: true } } },
    { $count: "mobileContacts" }
  ]);
  
  // 11. Find Patients without Mobile Numbers
  db.patients.aggregate([
    { $match: { mobile: { $exists: false } } }
  ]);
  
  // 12. Patients Registered Each Year
  db.patients.aggregate([
    {
      $group: {
        _id: { $year: "$registrationDate" },
        count: { $sum: 1 }
      }
    },
    { $sort: { "_id": 1 } }
  ]);
  
  // 13. Highest Number of Patients from Any Zip Code
  db.patients.aggregate([
    { $group: { _id: "$postcode", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 1 }
  ]);
  
  // 14. Average Number of Conditions per Patient
  db.patients.aggregate([
    { $unwind: "$conditions" },
    { $group: { _id: "$PatientID", numConditions: { $sum: 1 } } },
    { $group: { _id: null, averageConditions: { $avg: "$numConditions" } } }
  ]);
  
  // 15. Extract Year of Birth from DOB
  db.patients.aggregate([
    {
      $project: {
        yearOfBirth: { $year: "$dob" }
      }
    }
  ]);
  
  // 16. Combine First and Last Name
  db.patients.aggregate([
    {
      $project: {
        fullName: { $concat: ["$firstname", " ", "$lastname"] }
      }
    }
  ]);
  
  // 17. Find Patients by Partial Name Match
  db.patients.aggregate([
    { $match: { firstname: { $regex: "Jo", $options: 'i' } } }
  ]);
  
  // 18. List Patients and Remove Unwanted Fields
  db.patients.aggregate([
    { $project: { medcareno: 0, mobile: 0 } }
  ]);
  
  // 19. List Newest 10 Patients
  db.patients.aggregate([
    { $sort: { registrationDate: -1 } },
    { $limit: 10 }
  ]);
  
  // 20. Patients with Specific Title
  db.patients.aggregate([
    { $match: { Title: "Mr" } }
  ]);