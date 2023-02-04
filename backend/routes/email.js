var express = require("express");
const emailController = require("../controllers/emailController");
var router = express.Router();

router.post("/", emailController);

module.exports = router;
