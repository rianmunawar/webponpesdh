"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "User",
      [
        {
          name: "admin",
          email: "makdhiproject@gmail.com",
          password: await bcrypt.hash("admin123", 10),
          role: "admin",
        },
        {
          name: "John Doe",
          email: "jhon@gmail.com",
          password: await bcrypt.hash("jhon123", 10),
          role: "user",
        },
        {
          name: "Dion die",
          email: "dion@gmail.com",
          password: await bcrypt.hash("dion123", 10),
          role: "user",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("User", null, {});
  },
};
