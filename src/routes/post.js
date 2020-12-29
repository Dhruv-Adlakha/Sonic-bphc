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

module.exports = router;
