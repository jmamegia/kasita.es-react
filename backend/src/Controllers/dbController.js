const Section = require("../Models/Section");
const ObjectId = require("mongodb").ObjectID;
const Link = require("../Models/Link");

const findSections = async (...args) => {
  let findby = {};
  findby[args[0]] = args[1];
  let res = await Section.find(findby);
  if (res) return res;
  else return false;
};

const deleteSection = async (section) => {
  if (section.name !== "General") {
    await section.links.map((link) => deleteLink(link)); //remove all links in secction first
    let res = await Section.findOneAndDelete({ _id: section._id }); //next remove section
    return true;
  } else return false;
};

const updateSection = async (section) => {
  if (!section._id) section._id = new ObjectId();
  await Section.findOneAndUpdate(
    { name: section.name },
    section,
    { new: true, upsert: true },
    (error, result) => {
      if (error) return false;
      else {
        return result;
      }
    }
  );
};

const deleteLink = async (link) => {
  let res = await Link.findOneAndDelete({ _id: link._id });
  return res;
};

const updateLink = async (data) => {
  let link = data.link;
  if (!link._id) link._id = new ObjectId(); //_if not _id=null, no automatic set
  await Link.findOneAndUpdate(
    { _id: link._id },
    link,
    { new: true, upsert: true, setDefaultsOnInsert: true },
    async (error, result) => {
      if (error) return false;
      if (data.section) {
        await Section.findOneAndUpdate(
          { _id: data.section },
          { $addToSet: { links: result } },
          { new: true, upsert: true },
          (error, result) => {
            if (error) return false;
            else return true;
          }
        );
        return result;
      }
    }
  );
};
module.exports = {
  findSections,
  updateLink,
  deleteLink,
  deleteSection,
  updateSection,
};
