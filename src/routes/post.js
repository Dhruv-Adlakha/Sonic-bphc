const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

//route for getting all the posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

//route for getting a post by id
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

//route for creating a post
router.post('/posts', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

//route for deleting a post
router.delete('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.send(post);
  } catch (error) {
    console.log(error);
    res.status(501).send(error);
  }
});

module.exports = router;
