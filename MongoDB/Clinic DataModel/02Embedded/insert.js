db.practitioners.insertMany([
  {
    "practiceID": "10010",
    "title": "Dr",
    "firstname": "Mark",
    "lastname": "Huston",
    "Appointments": [
      {
        "date": "2024-01-15",
        "time": "10:00 AM",
        "patient": {
          "PatientID": "10000",
          "firstname": "Mackenzie",
          "lastname": "Fleetwood"
        }
      },
      {
        "date": "2024-01-20",
        "time": "02:00 PM",
        "patient": {
          "PatientID": "10001",
          "firstname": "Jane",
          "lastname": "Killingsworth"
        }
      }
    ]
  },
  {
    "practiceID": "10011",
    "title": "Ms",
    "firstname": "Laura",
    "lastname": "Green",
    "appointments": [
      {
        "date": "2024-02-05",
        "time": "11:00 AM",
        "patient": {
          "PatientID": "10003",
          "firstname": "Phill",
          "lastname": "Greggan"
        }
      },
      {
        "date": "2024-02-10",
        "time": "03:00 PM",
        "patient": {
          "PatientID": "10005",
          "firstname": "Mary",
          "lastname": "Brown"
        }
      }
    ]
  },
  {
    "practiceID": "10012",
    "title": "Dr",
    "firstname": "Sarah",
    "lastname": "Taylor",
    "appointments": [
      {
        "date": "2024-03-15",
        "time": "09:00 AM",
        "patient": {
          "PatientID": "10006",
          "firstname": "Terrence",
          "lastname": "Hill"
        }
      },
      {
        "date": "2024-03-20",
        "time": "01:00 PM",
        "patient": {
          "PatientID": "10007",
          "firstname": "Adrian",
          "lastname": "Tamerkand"
        }
      }
    ]
  }
]);



db.practitioners.insertOne(
  {
    "practiceID": "10011",
    "title": "Dr",
    "firstname": "Mark",
    "lastname": "Huston",
    "appointments": [
      {
        "date": "2024-01-15",
        "time": "10:00 AM",
        "patient": {
          "PatientID": "10000",
          "firstname": "Mackenzie",
          "lastname": "Fleetwood"
        }
      },
      {
        "date": "2024-01-20",
        "time": "02:00 PM",
        "patient": {
          "PatientID": "10001",
          "firstname": "Jane",
          "lastname": "Killingsworth"
        }
      }
    ]
  }
  );
  
  db.practitioners.insertOne(
    {
      "practiceID": "10000",
      "title": "Dr",
      "firstname": "Mark",
      "lastname": "Huston",
      "appointments": [
        {
          "date": "2024-01-15",
          "time": "10:00 AM",
          "patient": {
            "PatientID": "10000",
            "firstname": "Mackenzie",
            "lastname": "Fleetwood"
          }
        },
        {
          "date": "2024-01-20",
          "time": "02:00 PM",
          "patient": {
            "PatientID": "10001",
            "firstname": "Jane",
            "lastname": "Killingsworth"
          }
        }
      ]
    }
    );
    