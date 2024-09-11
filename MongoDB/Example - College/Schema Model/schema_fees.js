const mongoose = require('mongoose');

const feesSchema = new mongoose.Schema({
  student: {
    type: String,
    required: true
  },
  semester: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Fees', feesSchema);
