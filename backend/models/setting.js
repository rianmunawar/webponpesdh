"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Setting extends Model {
    static associate(models) {}
  }
  Setting.init(
    {
      uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      visi: DataTypes.STRING,
      misi: DataTypes.STRING,
      tahun_berdiri: DataTypes.INTEGER,
      jumlah_pegawai: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Setting",
      freezeTableName: true,
    }
  );
  return Setting;
};
