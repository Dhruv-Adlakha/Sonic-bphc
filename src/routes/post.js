const express = require('express');
const Post = require('../models/Post');
const User = require('../models/User');
const auth = require('../middleware/auth');
const router = express.Router();

//route for getting all the posts
router.get('/posts', auth, async (req, res) => {
  try {
    const posts = await Post.find({});
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

//route for getting a post by id
router.get('/posts/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

//route for creating a post
router.post('/posts', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const post = new Post({
      ...req.body,
      creator: req.user._id,
      createdBy: user.name,
    });
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

//route for deleting a post
router.delete('/posts/:id', auth, async (req, res) => {
  const userCreator = req.user._id;
  try {
    const postCreator = await Post.findById(req.params.id);
    if (!postCreator) {
      return res.status(404).send();
    }
    if (JSON.stringify(postCreator.creator) !== JSON.stringify(userCreator)) {
      return res.status(500).send('You are not allowed to delete this post');
    }
    const post = await Post.findByIdAndDelete(req.params.id);

    res.send(post);
  } catch (error) {
    //console.log(error);
    res.status(501).send(error);
  }
});

//route for updating a post
router.patch('/posts/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    if (JSON.stringify(post.creator) != JSON.stringify(req.user._id)) {
      return res.status(500).send('You are not allowed to update this post');
    }
    updates.forEach((update) => {
      post[update] = req.body[update];
    });
    await post.save();
    res.send(post);
  } catch (error) {
    //console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
