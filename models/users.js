const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: {
    type: String,
  },
  password: {
    type: String,
  },
  last_name: {
    type: String,
  },
  user_name: {
    type: String,
  },
  mob_no: {
    type: String,
  }
});

module.exports = mongoose.model('User', userSchema);
