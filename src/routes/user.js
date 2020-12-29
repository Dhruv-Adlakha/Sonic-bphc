const express = require('express');
const User = require('../models/User');
const router = express.Router();

//Route for getting all the users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Route for creating a user
router.post('/users', async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    console.log(newUser);
    res.send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Route for deleting a user
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
