const { Galeri } = require("../models");
const response = require("../response");
const uploadSingleImage = require("../utils/uploadFile");

const getAllGaleri = async (req, res) => {
  try {
    const data = await Galeri.findAll({
      attributes: ["uuid", "title", "image", "label"],
    });
    response(200, data, "Menampilkan Semua Data Galeri", res);
  } catch (err) {
    response(404, "not found", err.message, res);
  }
};

const getGaleriById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Galeri.findOne({
      where: { uuid: id },
      attributes: ["uuid", "title", "image", "label"],
    });
    response(200, data, "Menampilkan Galeri Berdasarkan Id", res);
  } catch (err) {
    response(404, "not found", err.message, res);
  }
};

const postGaleri = (req, res) => {
  uploadSingleImage(req, res, async (err) => {
    try {
      if (err) response(400, "no data created", err.message, res);
      if (!req.file)
        return response(400, "no data created", "image is required", res);
      if (!req.body.title)
        return response(400, "no data created", "title is required", res);

      const { title, label } = req.body;
      const imagePath = req.file.path;
      const image = imagePath.substr(7);
      await Galeri.create({
        title,
        image,
        label,
      })
        .then((data) => {
          response(201, data, "Berhasil Menambahkan Galeri", res);
        })
        .catch((err) => {
          response(500, "no data created", err.message, res);
        });
    } catch (err) {
      response(500, "no data created", err.message, res);
    }
  });
};

const updateGaleri = async (req, res) => {
  uploadSingleImage(req, res, async (err) => {
    const id = req.params.id;
    try {
      if (err) response(400, "no data created", err.message, res);

      const { title, label } = req.body;
      const imagePath = req.file.path;
      const image = imagePath.substr(7);
      await Galeri.update(
        {
          title,
          image,
          label,
        },
        {
          where: { uuid: id },
        }
      ).then((data) => {
        response(200, data, "Berhasil Update Data Galeri", res);
      });
    } catch (err) {
      response(500, "no data created", err.message, res);
    }
  });
  // try {
  //   const { id } = req.params;
  //   const { title } = req.body;
  //   console.log(req.body);
  //   const imagePath = req.file.path;
  //   const image = imagePath.substr(7);
  //   const data = await Galeri.update(
  //     {
  //       title,
  //       image,
  //     },
  //     {
  //       where: { uuid: id },
  //     }
  //   );
  //   response(200, data, "Berhasil Update Data Galeri", res);
  // } catch (err) {
  //   response(404, "not found", err.message, res);
  // }
};

const deleteGaleri = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Galeri.destroy({
      where: { uuid: id },
    });
    response(200, data, "Berhasil Menghapus Data Galeri", res);
  } catch (err) {
    response(404, "not found", err.message, res);
  }
};

module.exports = {
  getAllGaleri,
  getGaleriById,
  postGaleri,
  updateGaleri,
  deleteGaleri,
};
