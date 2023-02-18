const express = require("express");
// const multer = require("multer");
const galeriController = require("../controllers/galeriController");
const uploadSingleImage = require("../utils/uploadFile");
const router = express.Router();
const { getAllGaleri, getGaleriById, postGaleri, updateGaleri, deleteGaleri } =
  galeriController;

// // image upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/images");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${new Date().getTime()}-${file.originalname}`);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const limits = {
//   fileSize: 1024 * 1024 * 3,
// };

// const upload = multer({
//   storage: storage,
//   limits: limits,
//   fileFilter: fileFilter,
// });

router.get("/", getAllGaleri);
router.get("/:id", getGaleriById);
router.patch("/:id", updateGaleri);
router.delete("/:id", deleteGaleri);
router.post("/", postGaleri);

module.exports = router;
