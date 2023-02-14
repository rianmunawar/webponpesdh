const { Pendaftaran } = require("../models");
const Validator = require("fastest-validator");
const response = require("../response");
const { where } = require("sequelize");

const v = new Validator();
// Get all data pendaftaran
const getAllPendaftaran = async (req, res) => {
  try {
    const pendaftaran = await Pendaftaran.findAll({
      attributes: {
        exclude: ["id"],
      },
    });
    response(200, pendaftaran, "get all data successfuly", res);
  } catch (err) {
    response(500, err.message, "internal server error", res);
  }
};

const getPendaftaranById = async (req, res) => {
  try {
    const id = req.params.id;
    const pendaftaran = await Pendaftaran.findOne({
      attributes: {
        exclude: ["id"],
      },
      where: {
        uuid: id,
      },
    });
    response(200, pendaftaran, "get data by id successfuly", res);
  } catch (err) {
    response(500, err.message, "internal server error", res);
  }
};

// Create data
const createDataPendaftaran = async (req, res) => {
  try {
    const schema = {
      nama: "string",
      jenjang: "string",
      nisn: "number|integer|positive",
      nik: "number|integer|positive",
      tempat_lahir: "string",
      dob: "date|convert:true",
      j_kelamin: { type: "enum", values: ["perempuan", "laki-laki"] },
      alamat: "string",
      agama: "string",
      kewarganegaraan: { type: "enum", values: ["wni", "wna"] },
      email: "email",
      no_hp: "number|integer",
      asal_sekolah: "string|optional",
      no_ijazah: "string|optional",
      nama_ayah: "string",
      nik_ayah: "number|integer|positive",
      dob_ayah: "number|integer|positive",
      pend_ayah: "string",
      pek_ayah: "string",
      peng_ayah: "string",
      disabilitas_ayah: "string|optional",
      nama_ibu: "string",
      nik_ibu: "number|integer|positive",
      dob_ibu: "number|integer|positive",
      pend_ibu: "string",
      pek_ibu: "string",
      peng_ibu: "string|optional",
      disabilitas_ibu: "string|optional",
    };
    const validate = v.validate(req.body, schema);
    if (!validate) response(400, validate, "bad request", res);
    await Pendaftaran.create(req.body)
      .then((data) => {
        const responseData = ({
          uuid,
          nama,
          jenjang,
          nisn,
          nik,
          tempat_lahir,
          dob,
          j_kelamin,
          alamat,
          agama,
          kewarganegaraan,
          email,
          no_hp,
          asal_sekolah,
          no_ijazah,
          nama_ayah,
          nik_ayah,
          dob_ayah,
          pend_ayah,
          pek_ayah,
          peng_ayah,
          disabilitas_ayah,
          nama_ibu,
          nik_ibu,
          dob_ibu,
          pend_ibu,
          pek_ibu,
          peng_ibu,
          disabilitas_ibu,
        } = data);
        response(200, responseData, "Selamat anda behasil daftar", res);
      })
      .catch((error) => response(400, error, "Bad request", res));
  } catch (error) {
    response(500, error, error.message, res);
  }
};

module.exports = {
  getAllPendaftaran,
  getPendaftaranById,
  createDataPendaftaran,
};
