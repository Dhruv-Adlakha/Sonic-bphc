const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true,
    //unique: true,
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
    //unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Enter another email');
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = await jwt.sign({ _id: user._id.toString() }, 'SecretKeyDhruv', {
    expiresIn: 120000,
  });
  user.tokens = await user.tokens.concat({ token });
  await user.save();
  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
