const mongoose = require("mongoose");
const Section = require("./Models/Section");
const Link = require("./Models/Link");

const connectDb = async function () {
  try {
    await mongoose.connect("mongodb://db:27017/kasita", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    await createDefaultSection();
    await createTestIconLink();
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
      else return true;
    }
  );
};

const createTestIconLink = async () => {
  let testIconLink = {
    name: "test",
    url: "www.goolge.es",
  };
  await Link.findOneAndUpdate(
    { name: testIconLink.name },
    testIconLink,
    { new: true, upsert: true },
    async (error, result) => {
      if (error) return false;
      else {
        await Section.findOneAndUpdate(
          { name: "General" },
          { links: [result] },
          { new: true, upsert: true },
          (error, result) => {
            if (error) return false;
            else return true;
          }
        );

        return true;
      }
    }
  );
};

module.exports = { connectDb, mongoose };
