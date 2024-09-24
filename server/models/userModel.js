const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String },
  googleId: { type: String },
  picture: { type: String },
  name: { type: String },
  displayName: { type: String }
});

module.exports = mongoose.model("User", userSchema, 'users');