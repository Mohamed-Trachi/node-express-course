const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "you must provide a name"],
    trim: true,
    maxlenght: [20, "name can't be more the 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Task", TaskSchema);
