const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

const { createUser, getAllUser } = userController;
/* GET users listing. */
router.get("/", getAllUser);
router.post("/register", createUser);

module.exports = router;
