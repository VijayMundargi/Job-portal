const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // ✅ recommended
  },
  email: {
    type: String,
    unique: true,
    required: true,  // ✅ recommended
  },
  password: {
    type: String,
    required: true,  // ✅ recommended
  },
  phoneNumber: {
    type: String,  // ⚠️ better as String to preserve leading zeros, etc.
    unique: true,
    required: true,
  },
  isSubscribed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('User', UserSchema);
