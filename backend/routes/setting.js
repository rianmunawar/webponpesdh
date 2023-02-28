const express = require("express");
const settingController = require("../controllers/settingController");
const router = express.Router();
const {
  getAllSetting,
  getSettingById,
  createDataSetting,
  updateDataSetting,
  deleteDataSetting,
} = settingController;

router.get("/", getAllSetting);
router.get("/:id", getSettingById);
router.post("/", createDataSetting);
router.patch("/:id", updateDataSetting);
router.delete("/:id", deleteDataSetting);

module.exports = router;
