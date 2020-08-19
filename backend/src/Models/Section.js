const mongoose = require("mongoose");
const LinkSchmema = require("./Link");
const Link = mongoose.model("Link", LinkSchmema.Schema);

const Section = new mongoose.Schema(
  {
    name: String,
    links: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Link",
        autopopulate: true,
      },
    ],
  },
  { timestamps: true }
);

Section.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Section", Section);
