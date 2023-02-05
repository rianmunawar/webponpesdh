const { Pendaftaran } = require("../models");
const Validator = require("fastest-validator");
const response = require("../response");

const v = new Validator();
// Get all data pendaftaran
const getAllPendaftaran = async (req, res) => {
  try {
    const pendaftaran = await Pendaftaran.findAll();
    response(200, pendaftaran, "get all data successfuly", res);
  } catch (err) {
    response(500, err.message, "internal server error", res);
  }
};

const getPendaftaranById = async (req, res) => {
  try {
    const id = req.params.id;
    const pendaftaran = await Pendaftaran.findByPk(id);
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
    const dataPendaftar = await Pendaftaran.create(req.body);
    response(200, dataPendaftar, "Daftar berhasil", res);
  } catch (error) {
    response(500, error, error.message, res);
  }
};

module.exports = {
  getAllPendaftaran,
  getPendaftaranById,
  createDataPendaftaran,
};
