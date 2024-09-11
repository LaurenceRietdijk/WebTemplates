const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/clinic', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected to the database!");
});

// Define a schema for Patients
const patientSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  dob: Date,
  gender: String,
  // add other fields as necessary
});

// Create a model from the schema
const Patient = mongoose.model('Patient', patientSchema);

// Routes
app.post('/patients', (req, res) => {
  const newPatient = new Patient(req.body);
  newPatient.save()
    .then(patient => res.status(201).send(patient))
    .catch(err => res.status(400).send(err));
});

app.get('/patients/:id', (req, res) => {
  Patient.findById(req.params.id)
    .then(patient => {
      if (patient) {
        res.send(patient);
      } else {
        res.status(404).send({ message: "Patient not found!" });
      }
    })
    .catch(err => res.status(500).send(err));
});

app.put('/patients/:id', (req, res) => {
  Patient.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(patient => res.send(patient))
    .catch(err => res.status(400).send(err));
});

app.delete('/patients/:id', (req, res) => {
  Patient.findByIdAndDelete(req.params.id)
    .then(patient => res.send({ message: "Patient deleted." }))
    .catch(err => res.status(500).send(err));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}`);
});

