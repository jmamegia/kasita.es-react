const { Model, DataTypes } = require("sequelize");
const sequelize = require("../index");
const Section = require("./Section");

class Link extends Model {}
Link.init(
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:
        "https://img.icons8.com/officel/40/000000/cloud-link--v1.png",
    },
    url: DataTypes.STRING,
  },

  { sequelize, modelName: "link" }
);
Link.Section = Link.belongsTo(Section);
Section.hasMany(Link);

module.exports = Link;
