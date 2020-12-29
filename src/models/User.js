const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  name: {
    required: true,
    type: String,
    trim: true,
  },
  status: {
    required: true,
    type: String,
    trim: true,
  },
  age: {
    required: true,
    type: Number,
  },
  hometown: {
    type: String,
  },
});

module.exports = User;
