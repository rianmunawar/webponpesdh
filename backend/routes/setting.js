const express = require("express");
const identitasController = require("../controllers/identitasController");
const router = express.Router();
const {
  getAllIdentitas,
  getIdentitasById,
  createDataIdentitas,
  updateDataIdentitas,
  deleteDataIdentitas,
} = identitasController;

router.get("/", getAllIdentitas);
router.get("/:id", getIdentitasById);
router.post("/", createDataIdentitas);
router.patch("/:id", updateDataIdentitas);
router.delete("/:id", deleteDataIdentitas);

module.exports = router;
