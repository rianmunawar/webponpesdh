const jwt = require("jsonwebtoken");
const response = require("../response");

const authUser = (req, res, next) => {
  try {
    const token = req.header("authorization");
    if (!token) response(401, {}, "Token not found, Access denied", res);
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.email = decoded.email;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = { authUser };
