const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      maxlength: 200,
      required: true,
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt
  }
);

const Prompt = mongoose.model("Prompt", promptSchema);
module.exports = Prompt;
