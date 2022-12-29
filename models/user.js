const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please email address"],
    trim: true,
  },
  createdAt: {
    type: Date,
    required: [true, "please enter appointment time"],
    default: Date.now,
  },
});

module.exports = mongoose.model("Users", userSchema);
