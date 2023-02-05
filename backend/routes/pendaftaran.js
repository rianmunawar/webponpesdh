const express = require("express");
const pendaftaranController = require("../controllers/pendaftaranController");
const router = express.Router();
const { getAllPendaftaran, getPendaftaranById, createDataPendaftaran } =
  pendaftaranController;

// router
router.get("/", getAllPendaftaran);
router.get("/:id", getPendaftaranById);
router.post("/", createDataPendaftaran);

module.exports = router;
