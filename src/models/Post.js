const mongoose = require('mongoose');

const Post = mongoose.model('Post', {
  title: {
    required: true,
    type: String,
  },
  body: {
    required: true,
    type: String,
  },
});

module.exports = Post;
