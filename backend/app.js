const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const logger = require("morgan");

// routes location
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const emailRouter = require("./routes/email");
const pendaftaranRouter = require("./routes/pendaftaran");
const galeriRouter = require("./routes/galeri");
const settingRouter = require("./routes/setting");

// app config middleware
const app = express();
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// routes
app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/send-email", emailRouter);
app.use("/pendaftaran", pendaftaranRouter);
app.use("/galeri", galeriRouter);
app.use("/setting", settingRouter);

module.exports = app;
