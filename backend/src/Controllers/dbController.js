const Section = require("../Models/Section");
const Link = require("../Models/Link");

const findSections = async (...args) => {
  let findby = {};
  findby[args[0]] = args[1];
  let res = await Section.find(findby);
  console.log(res);
  if (res) return res;
  else return false;
};
module.exports = { findSections };
