const isGoodPassword = require('../utils/validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserAllSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 8,
    trim: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/,
    unique: true,
  },
  password: {
    type: String,
    validate: {
      validator: function (value) {
        return isGoodPassword(value);
      },
      message:
        "The password must be between 6 and 12 characters, one numeric digit, one lowercase letter and one uppercase letter",
    },
  },
  mobile: String,
  address: String,
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'UserAll' },
  active: Boolean,
});


UserAllSchema.pre("save", function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  });

module.exports = mongoose.model('UserAll', UserAllSchema);