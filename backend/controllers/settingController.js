const { Setting } = require("../models");
const response = require("../response");
const Validator = require("fastest-validator");

const v = new Validator();

const getAllSetting = async (req, res) => {
  try {
    const setting = await Setting.findAll({
      attributes: {
        exclude: ["id"],
      },
    });
    response(200, setting, "get all data successfuly", res);
  } catch (err) {
    response(404, {}, err.message, res);
  }
};

const getSettingById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const setting = await Setting.findOne({
      attributes: {
        exclude: ["id"],
      },
      where: {
        uuid: id,
      },
    });
    if (!setting) response(404, {}, "data not found", res);
    response(200, setting, "get data by id successfuly", res);
  } catch (err) {
    response(500, err.message, "internal server error", res);
  }
};

const createDataSetting = async (req, res) => {
  try {
    const schema = {
      visi: "string",
      misi: "string",
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
      const setting = await Setting.create(data);
      const storedData = await Setting.findOne({
        where: { uuid: setting.uuid },
        attributes: {
          exclude: ["id"],
        },
      });
      response(200, storedData, "create data successfuly", res);
    }
  } catch (err) {
    response(500, err.message, "internal server error", res);
  }
};

const updateDataSetting = async (req, res) => {
  try {
    const id = req.params.id;
    const data = {
      ...req.body,
    };
    const setting = await Setting.update(data, {
      where: {
        uuid: id,
      },
    });
    response(200, setting, "update data successfuly", res);
  } catch (err) {
    response(500, err.message, "internal server error", res);
  }
};

const deleteDataSetting = async (req, res) => {
  try {
    const id = req.params.id;
    const setting = await Setting.destroy({
      where: {
        uuid: id,
      },
    });
    response(200, setting, "delete data successfuly", res);
  } catch (err) {
    response(500, err.message, "internal server error", res);
  }
};

module.exports = {
  getAllSetting,
  getSettingById,
  createDataSetting,
  updateDataSetting,
  deleteDataSetting,
};
