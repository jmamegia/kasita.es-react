const mongoose = require("mongoose");

const Link = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    image: {
      type: String,
      default: "https://img.icons8.com/officel/40/000000/cloud-link--v1.png",
      //<a href="https://icons8.com/icon/R4WtEnhhcg55/cloud-link">Cloud Link icon by Icons8</a>
    },
    url: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Link", Link);
