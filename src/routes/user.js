const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const auth = require('../middleware/auth');
const router = express.Router();

//Route for getting all the users
router.get('/users', auth, async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Route for getting a user
router.get('/users/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//Route for creating a user
router.post('/users', async (req, res) => {
  const newUser = new User(req.body);

  try {
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 8);
    newUser.password = hashedPassword;
    await newUser.save();
    const token = await newUser.generateAuthToken();

    res.status(201).send({ newUser, token });
  } catch (error) {
    //console.log(error);
    res.status(500).send(error);
  }
});

//Route for logging out a user
router.post('/users/logout', auth, async (req, res) => {
  try {
    // console.log(req.header);
    const token = req.header('Authorization').replace('Bearer ', '');
    //console.log(token);
    req.user.tokens = req.user.tokens.filter((usertoken) => {
      return usertoken.token !== token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    //console.log(error);
    res.status(500).send(error);
  }
});

//Route for updating a user
router.patch('/users/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const user = await User.findById(req.params.id);
    updates.forEach((update) => {
      user[update] = req.body[update];
    });
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Route for deleting a user
router.delete('/users/:id', auth, async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
