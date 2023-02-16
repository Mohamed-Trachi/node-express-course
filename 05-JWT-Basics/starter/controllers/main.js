const { BadRequest } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest("please provide username and password");
  }
  const id = new Date().getTime();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(StatusCodes.OK).json({ msg: "user created", token });
};
const dashboard = async (req, res) => {
  console.log(req.user);
  res.status(StatusCodes.OK).json({
    msg: `hello ${req.user.username}`,
    secret: `here is your authorized data, your secret id is: ${req.user.id}`,
  });
};
module.exports = { login, dashboard };
