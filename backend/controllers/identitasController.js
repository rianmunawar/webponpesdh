const { Identitas } = require("../models");
const response = require("../response");
const Validator = require("fastest-validator");

const v = new Validator();

const getAllIdentitas = async (req, res) => {
  try {
    const identitas = await Identitas.findAll({
      attributes: {
        exclude: ["id"],
      },
    });
    response(200, identitas, "get all data successfuly", res);
  } catch (err) {
    response(404, {}, err.message, res);
  }
};

const getIdentitasById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const identitas = await Identitas.findOne({
      attributes: {
        exclude: ["id"],
      },
      where: {
        uuid: id,
      },
    });
    if (!identitas) response(404, {}, "data not found", res);
    response(200, identitas, "get data by id successfuly", res);
  } catch (err) {
    response(500, err.message, "internal server error", res);
  }
};

const createDataIdentitas = async (req, res) => {
  try {
    const schema = {
      nama: "string",
      ketua_yayasan: "string",
      alamat: "string",
      sejarah: "string",
      tahun_berdiri: "number|integer|positive",
      jumlah_pegawai: "number|integer|positive",
    };
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      response(400, validate, "Bad Request", res);
    } else {
      const data = {
        ...req.body,
      };
      const identitas = await Identitas.create(data);
      const resData = await Identitas.findOne({
        where: { uuid: identitas.uuid },
        attributes: {
          exclude: ["id"],
        },
      });
      response(200, resData, "create data successfuly", res);
    }
  } catch (err) {
    response(500, err.message, "internal server error", res);
  }
};

const updateDataIdentitas = async (req, res) => {
  try {
    const id = req.params.id;
    const data = {
      ...req.body,
    };
    const identitas = await Identitas.update(data, {
      where: {
        uuid: id,
      },
    });
    response(200, identitas, "update data successfuly", res);
  } catch (err) {
    response(500, err.message, "internal server error", res);
  }
};

const deleteDataIdentitas = async (req, res) => {
  try {
    const id = req.params.id;
    const identitas = await Identitas.destroy({
      where: {
        uuid: id,
      },
    });
    response(200, identitas, "delete data successfuly", res);
  } catch (err) {
    response(500, err.message, "internal server error", res);
  }
};

module.exports = {
  getAllIdentitas,
  getIdentitasById,
  createDataIdentitas,
  updateDataIdentitas,
  deleteDataIdentitas,
};
