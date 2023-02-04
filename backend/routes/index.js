var express = require("express");
const response = require("../response");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  response(200, "api-ponpesdh-v1", "api ready to use", res);
});

module.exports = router;
