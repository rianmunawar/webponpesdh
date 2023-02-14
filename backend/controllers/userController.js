const bcrypt = require("bcrypt");
const { User } = require("../models");
const response = require("../response");

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const salt = process.env.SALT_ROUND;
  await bcrypt.hash(password, parseInt(salt)).then(async (hash) => {
    await User.create({
      name: name,
      email: email,
      password: hash,
      role: role,
    })
      .then((users) => {
        const user = {
          uuid: users.uuid,
          name: users.name,
          email: users.email,
        };
        response(200, user, "Create new user succesfully", res);
      })
      .catch((err) => {
        response(400, "no data created", err.message, res);
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

module.exports = { createUser, getAllUser };
