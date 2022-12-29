const mongoose = require("mongoose");

const addTaskSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  createdAt: {
    type: Date,
    required: [true, "please enter appointment time"],
    default: Date.now,
  },
});

module.exports = mongoose.model("Tasks", addTaskSchema);

// todo:
// add seller name
