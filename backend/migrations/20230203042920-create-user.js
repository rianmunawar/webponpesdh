"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "User",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1,
          allowNull: false,
          primaryKey: true,
          validate: {
            isUUID: 1,
          },
        },
        name: {
          type: Sequelize.STRING(65),
        },
        email: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        isAdmin: {
          type: Sequelize.ENUM("true", "false"),
          defaultValue: "false",
        },
        createdAt: {
          type: "TIMESTAMP",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        updatedAt: {
          type: "TIMESTAMP",
          defaultValue: Sequelize.literal(
            "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
          ),
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("User");
  },
};
