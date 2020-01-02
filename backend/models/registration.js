const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registration = new Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Registration', registration);
