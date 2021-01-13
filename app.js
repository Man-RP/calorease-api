const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var logger = require("morgan");
require("dotenv").config();

var indexRouter = require("./routes");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("App is working"));

app.use("/api", indexRouter);

app.listen(3000, () => console.log("App listening on port 3000!"));

module.exports = app;
