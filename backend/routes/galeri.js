const express = require("express");
const galeriController = require("../controllers/galeriController");
const router = express.Router();
const { getAllGaleri, getGaleriById, postGaleri, updateGaleri, deleteGaleri } =
  galeriController;

router.get("/", getAllGaleri);
router.get("/:id", getGaleriById);
router.patch("/:id", updateGaleri);
router.delete("/:id", deleteGaleri);
router.post("/", postGaleri);

module.exports = router;
