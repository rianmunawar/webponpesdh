const bcrypt = require("bcrypt");
const { User } = require("../models");
const response = require("../response");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const saltRounds = 10;
  await bcrypt.hash(password, saltRounds).then(async (hash) => {
    await User.create(
      {
        name: name,
        email: email,
        password: hash,
      },
      { fields: ["name", "email", "password"] }
    )
      .then((data) => {
        response(200, data, "Create new user succesfully", res);
      })
      .catch((err) => {
        response(400, "no data created", err.message, res);
      });
  });
};

const getAllUser = async (req, res) => {
  try {
    const data = await User.findAll();
    if (data === null)
      response(200, "data belum ada", "Data belum tersedia", res);

    response(200, data, "Menampilkan Semua Data User", res);
  } catch (error) {
    response(404, "not found", err.message, res);
  }
};

module.exports = { createUser, getAllUser };
