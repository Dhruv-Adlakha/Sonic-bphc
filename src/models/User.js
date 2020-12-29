const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  name: {
    required: true,
    type: String,
    trim: true,
    unique: true,
  },
  status: {
    required: true,
    type: String,
    trim: true,
  },
  password: {
    required: true,
    type: String,
    trim: true,
    validate(value) {
      if (value.includes('password')) {
        throw new Error("Password cannot contain the string 'password'");
      }
      if (value.length <= 6) {
        throw new Error('Enter a password of length greater than 6');
      }
    },
  },
  age: {
    required: true,
    type: Number,
  },
  hometown: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Enter another email');
      }
    },
  },
});

module.exports = User;
