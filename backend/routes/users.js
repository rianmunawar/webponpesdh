const express = require("express");
const userController = require("../controllers/userController");
const { authUser } = require("../middleware/authUser");
const router = express.Router();

const { register, getAllUser, login, logout, refreshToken } = userController;
/* GET users listing. */
router.get("/", authUser, getAllUser);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/token", refreshToken);

module.exports = router;
