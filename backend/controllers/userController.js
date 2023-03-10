const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Validator = require("fastest-validator");
const { User } = require("../models");
const response = require("../response");

const v = new Validator();

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = process.env.SALT_ROUND;
  const schema = {
    name: "string|required",
    email: "email|required",
    password: "string|min:8",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    response(400, validate, "Bad Request | semua field harus di isi", res);
  }
  await bcrypt.hash(password, parseInt(salt)).then(async (hash) => {
    await User.create({
      name: name,
      email: email,
      password: hash,
    })
      .then((users) => {
        const user = {
          uuid: users.uuid,
          name: users.name,
          email: users.email,
        };
        response(200, user, "Register succesfully", res);
      })
      .catch((err) => {
        response(500, "no data created", err.message, res);
      });
  });
};

const getAllUser = async (req, res) => {
  try {
    const data = await User.findAll({
      attributes: ["uuid", "name", "email"],
    });
    response(200, data, "Menampilkan Semua Data User", res);
  } catch (err) {
    response(404, "not found", err.message, res);
  }
};

const login = async (req, res) => {
  try {
    const schema = {
      email: "email|required",
      password: "string|min:8",
    };
    const validate = v.validate(req.body, schema);
    if (validate.length)
      response(
        400,
        validate,
        "Bad Request | isi semua field dengan benar",
        res
      );
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) response(404, {}, "user dengan email ini tidak ada", res);
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) response(404, {}, "password salah", res);
    const loginUser = {
      userId: user.uuid,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    const accessToken = jwt.sign(loginUser, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15s",
    });
    const refreshToken = jwt.sign(loginUser, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    await User.update(
      { refresh_token: refreshToken },
      { where: { uuid: loginUser.userId } }
    );
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    response(200, { token: accessToken }, "Login Success", res);
  } catch (err) {
    response(401, {}, err.message, res);
  }
};
const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) response(400, {}, "Bad request", res);
    const user = await User.findOne({
      where: { refresh_token: refreshToken },
    });
    if (!user) response(404, {}, "User not found", res);
    await User.update({ refresh_token: null }, { where: { uuid: user.uuid } });
    res.clearCookie("refresh_token");
    response(200, {}, "Logout success", res);
  } catch (err) {
    response(401, {}, err.message, res);
  }
};
const refreshToken = async (req, res) => {
  console.log(req.cookies);
  try {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) response(403, {}, "Forbiden access", res);
    const user = await User.findOne({
      where: { refresh_token: refreshToken },
    });
    if (!user) response(404, {}, "User not found", res);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) response(403, {}, "Forbidden access", res);
      const accessToken = jwt.sign(
        {
          userId: user.userId,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15s" }
      );
      response(200, { token: accessToken }, "Refresh token success", res);
    });
  } catch (err) {
    response(401, {}, err.message, res);
  }
};

module.exports = { register, getAllUser, login, logout, refreshToken };
