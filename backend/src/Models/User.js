const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    password: String,
    token: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", User);
