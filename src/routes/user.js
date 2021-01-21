const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const auth = require('../middleware/auth');
const router = express.Router();

//Route for getting all the users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    //console.log(users);
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
    //console.log(error);
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
    const token = await newUser.generateAuthToken();
    await newUser.save();

    res.status(201).send({ newUser, token });
  } catch (error) {
    //console.log(error);
    res.status(500).send(error);
  }
});

//Route for logging in a user
router.post('/users/login', async (req, res) => {
  try {
    const passwordEntered = req.body.password;
    const hashedPasswordEntered = await bcrypt.hash(
      JSON.stringify(passwordEntered),
      8
    );
    const user = await User.findOne({ name: req.body.name });

    await bcrypt.compare(passwordEntered, user.password, (err, res) => {
      if (err) {
        return res.status(404).send('Invalid credentials');
      }
    });
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//Route for logging out a user
router.post('/users/logout', auth, async (req, res) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log(token);
    req.user.token = undefined;
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

//Route for updating a user
router.patch('/users', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const user = await User.findById(req.user._id);
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
router.delete('/users', auth, async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.user._id });
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
