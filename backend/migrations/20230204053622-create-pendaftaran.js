"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Pendaftaran",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        uuid: {
          type: Sequelize.STRING,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
        },
        nama: {
          type: Sequelize.STRING,
        },
        jenjang: {
          type: Sequelize.STRING,
        },
        nisn: {
          type: Sequelize.INTEGER,
        },
        nik: {
          type: Sequelize.INTEGER,
        },
        tempat_lahir: {
          type: Sequelize.STRING,
        },
        dob: {
          type: Sequelize.DATE,
        },
        j_kelamin: {
          type: Sequelize.ENUM("perempuan", "laki-laki"),
          defaultValue: "laki-laki",
        },
        alamat: {
          type: Sequelize.TEXT,
        },
        agama: {
          type: Sequelize.STRING,
        },
        kewarganegaraan: {
          type: Sequelize.ENUM("wni", "wna"),
          defaultValue: "wni",
        },
        email: {
          type: Sequelize.STRING,
        },
        no_hp: {
          type: Sequelize.INTEGER,
        },
        asal_sekolah: {
          type: Sequelize.STRING,
        },
        no_ijazah: {
          type: Sequelize.STRING,
        },
        nama_ayah: {
          type: Sequelize.STRING,
        },
        nik_ayah: {
          type: Sequelize.INTEGER,
        },
        dob_ayah: {
          type: Sequelize.INTEGER,
        },
        pend_ayah: {
          type: Sequelize.STRING,
        },
        pek_ayah: {
          type: Sequelize.STRING,
        },
        peng_ayah: {
          type: Sequelize.STRING,
        },
        disabilitas_ayah: {
          type: Sequelize.STRING,
        },
        nama_ibu: {
          type: Sequelize.STRING,
        },
        nik_ibu: {
          type: Sequelize.INTEGER,
        },
        dob_ibu: {
          type: Sequelize.INTEGER,
        },
        pend_ibu: {
          type: Sequelize.STRING,
        },
        pek_ibu: {
          type: Sequelize.STRING,
        },
        peng_ibu: {
          type: Sequelize.STRING,
        },
        disabilitas_ibu: {
          type: Sequelize.STRING,
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
    await queryInterface.dropTable("Pendaftaran");
  },
};
