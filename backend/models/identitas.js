"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Identitas extends Model {
    static associate(models) {}
  }
  Identitas.init(
    {
      uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      nama: DataTypes.STRING,
      ketua_yayasan: DataTypes.STRING,
      tahun_berdiri: DataTypes.INTEGER,
      alamat: DataTypes.TEXT,
      sejarah: DataTypes.TEXT,
      jumlah_pegawai: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Identitas",
      freezeTableName: true,
    }
  );
  return Identitas;
};
