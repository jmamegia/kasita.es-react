const User = require("../db/Models/User");
const jwt = require("jsonwebtoken");
const login = async (data) => {
  try {
    let user = await User.findOne({ where: { name: data.name } });
    if (user.password === data.password) {
      let token = jwt.sign(
        { user: data.name, _id: user._id },
        process.env.SECRET
      );
      return token;
    } else return false;
  } catch {
    return false;
  }
};

const auth = async (req, res, next) => {
  let token = req.headers.authorization;
  try {
    let user = jwt.verify(token, process.env.SECRET);
    if (user) next();
  } catch {
    res.status(500).send(false);
  }
};

module.exports = { login, auth };
