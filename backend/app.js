const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config({ path: `${process.cwd()}/.env` });
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const emailRouter = require("./routes/email");
const pendaftaranRouter = require("./routes/pendaftaran");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/send-email", emailRouter);
app.use("/pendaftaran", pendaftaranRouter);

module.exports = app;
