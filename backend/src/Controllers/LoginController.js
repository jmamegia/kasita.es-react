const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const login = async (data) => {
  try {
    let user = await User.findOne({ name: data.name });
    if (user.password === data.password) {
      let token = await jwt.sign(
        { user: data.name, _id: user._id },
        process.env.SECRET
      );
      user.token = token;
      await user.save();
      return token;
    } else return false;
  } catch {
    return false;
  }
};

const auth = async (req, res, next) => {
  let token = req.headers.authorization;
  try {
    let user_id = jwt.verify(token, process.env.SECRET)._id;
    let user = await User.findOne({ _id: user_id });
    if (user.token === token) next();
  } catch {
    res.status(500).send(false);
  }
};

module.exports = { login, auth };
