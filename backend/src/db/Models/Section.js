const { Model, DataTypes } = require("sequelize");
const sequelize = require("../index");
class Section extends Model {}
Section.init(
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { sequelize, modelName: "section" }
);

module.exports = Section;
