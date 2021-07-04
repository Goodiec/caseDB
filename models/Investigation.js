const mongoose = require('mongoose');

const InvestigationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  inspector_name: {
    type: String,
    required: true
  },
  investigation_description: {
    type: String
  },
  investigation_date: {
    type: Date
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Investigation = mongoose.model('investigation', InvestigationSchema);