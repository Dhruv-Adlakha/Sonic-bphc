const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    required: true,
    type: String,
  },
});

const comment = mongoose.model('Comment', commentSchema);

module.exports = comment;
