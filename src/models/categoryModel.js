const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'userall',
    strictPopulate: false,
 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('category', categorySchema);