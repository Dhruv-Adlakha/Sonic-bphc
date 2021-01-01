const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  body: {
    required: true,
    type: String,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
