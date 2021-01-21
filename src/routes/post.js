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
    console.log(user);
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
router.delete('/posts', auth, async (req, res) => {
  const userCreator = req.user._id;
  try {
    console.log(req.body);
    const postCreator = await Post.findById(req.body._id);
    console.log(userCreator, postCreator);
    if (!postCreator) {
      return res.status(404).send();
    }

    if (JSON.stringify(postCreator.creator) !== JSON.stringify(userCreator)) {
      return res.status(500).send('You are not allowed to delete this post');
    }
    const post = await Post.findByIdAndDelete(req.body._id);

    res.send(post);
  } catch (error) {
    //console.log(error);
    res.status(501).send(error);
  }
});

//route for liking a post
router.patch('/posts/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    if (post.likes.indexOf(req.user._id) === -1) {
      post.likes.push(req.user._id);
      await post.save();
    }
    res.send(post);
  } catch (error) {
    res.status(501).send(error);
  }
});

//route for disliking a post
router.patch('/posts/dislike/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    if (post.dislikes.indexOf(req.user._id) === -1) {
      post.dislikes.push(req.user._id);
      await post.save();
    }
    res.send(post);
  } catch (error) {
    res.status(501).send(error);
  }
});

//route for commenting on a post
router.patch('/posts/comment/:id', auth, async (req, res) => {
  try {
    const commentContent = req.body.content;
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    const comment = {
      createdBy: req.user.name,
      content: commentContent,
    };
    post.comments.push(comment);
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(501).send(error);
  }
});

//route for fetching all the comments
router.get('/posts/comment/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send();
    }
    console.log(post);
    const comments = post.comments;
    res.send(comments);
  } catch (error) {
    res.status(501).send();
  }
});

module.exports = router;
