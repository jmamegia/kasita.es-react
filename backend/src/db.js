const mongoose = require("mongoose");
const Section = require("./Models/Section");
const {
  chargeLinks,
  addAdminUser,
} = require("./Controllers/ChargeDefaultsController");

const connectDb = async function () {
  try {
    await mongoose.connect("mongodb://db:27017/kasita", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    await createDefaultSection();
    await addAdminUser();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const createDefaultSection = async function () {
  await Section.findOneAndUpdate(
    { name: "General" },
    { name: "General" },
    { new: true, upsert: true },
    (error, result) => {
      if (error) return false;
      else {
        chargeLinks();
        return true;
      }
    }
  );
};

module.exports = { connectDb, mongoose };
