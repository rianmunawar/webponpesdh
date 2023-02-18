"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Galeri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Galeri.init(
    {
      uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      label: {
        type: DataTypes.ENUM("mak", "mts", "ra", "ponpes"),
        defaultValue: "ponpes",
      },
    },
    {
      sequelize,
      modelName: "Galeri",
      freezeTableName: true,
    }
  );
  return Galeri;
};
