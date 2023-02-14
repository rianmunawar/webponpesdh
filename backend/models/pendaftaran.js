"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pendaftaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pendaftaran.init(
    {
      uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      nama: DataTypes.STRING,
      jenjang: DataTypes.STRING,
      nisn: DataTypes.NUMBER,
      nik: DataTypes.NUMBER,
      tempat_lahir: DataTypes.STRING,
      dob: DataTypes.DATE,
      j_kelamin: {
        type: DataTypes.ENUM("perempuan", "laki-laki"),
        defaultValue: "laki-laki",
      },
      alamat: DataTypes.TEXT,
      agama: DataTypes.STRING,
      kewarganegaraan: {
        type: DataTypes.ENUM("wni", "wna"),
        defaultValue: "wni",
      },
      email: DataTypes.STRING,
      no_hp: DataTypes.NUMBER,
      asal_sekolah: DataTypes.STRING,
      no_ijazah: DataTypes.STRING,
      nama_ayah: DataTypes.STRING,
      nik_ayah: DataTypes.NUMBER,
      dob_ayah: DataTypes.DATE,
      pend_ayah: DataTypes.STRING,
      pek_ayah: DataTypes.STRING,
      peng_ayah: DataTypes.STRING,
      disabilitas_ayah: DataTypes.STRING,
      nama_ibu: DataTypes.STRING,
      nik_ibu: DataTypes.NUMBER,
      dob_ibu: DataTypes.DATE,
      pend_ibu: DataTypes.STRING,
      pek_ibu: DataTypes.STRING,
      peng_ibu: DataTypes.STRING,
      disabilitas_ibu: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pendaftaran",
      freezeTableName: true,
    }
  );
  return Pendaftaran;
};
