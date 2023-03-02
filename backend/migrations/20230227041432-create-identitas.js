"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Identitas",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        uuid: {
          type: Sequelize.STRING,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
        },
        nama: {
          type: Sequelize.STRING,
        },
        ketua_yayasan: {
          type: Sequelize.STRING,
        },
        tahun_berdiri: {
          type: Sequelize.INTEGER,
        },
        alamat: {
          type: Sequelize.TEXT,
        },
        sejarah: {
          type: Sequelize.TEXT,
        },
        jumlah_pegawai: {
          type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Identitas");
  },
};
