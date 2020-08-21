const Section = require("../Models/Section");

const findSections = async (...args) => {
  let findby = {};
  findby[args[0]] = args[1];
  let res = await Section.find(findby);
  if (res) return res;
  else return false;
};
module.exports = { findSections };
