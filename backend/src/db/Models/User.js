const { Model, DataTypes } = require("sequelize");
const sequelize = require("../index");

class User extends Model {}
User.init(
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  },
  { sequelize, modelName: "user" }
);

module.exports = User;
