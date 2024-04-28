const Section = require("../db/Models/Section");
const Link = require("../db/Models/Link");

const findSections = async (...args) => {
  let findby = {};
  findby[args[0]] = args[1];
  let res = await Section.findAll({
    include: [
      {
        model: Link,
        as: Link.tableName,
      },
    ],
  });
  //console.log(res);
  if (res) return res;
  else return false;
};

const deleteSection = async (section) => {
  if (section.name !== "General") {
    //await section.links.map((link) => deleteLink(link)); //remove all links in secction first
    await Section.destroy({ where: { id: section.id } }); //next remove section
    return true;
  } else return false;
};

const updateSection = async (section) => {
  await Section.create({ where: { name: section.name } });
};

const deleteLink = async (link) => {
  let res = await Link.destroy({ where: { id: link.id } });
  return res;
};

const updateLink = async (data) => {
  const newLink = data.link;
  let link = null;
  if (newLink?.id) link = await Link.findOne({ where: { id: newLink.id } });
  let res = null;
  if (!link)
    res = await Link.create({
      name: newLink.name,
      image: newLink.image,
      url: newLink.url,
      sectionId: data.section.id,
    });
  else {
    link.name = newLink.name;
    link.image = newLink.image;
    link.url = newLink.url;
    await link.save();
  }
  return res;
};
module.exports = {
  findSections,
  updateLink,
  deleteLink,
  deleteSection,
  updateSection,
};
