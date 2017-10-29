var express = require("express");
var Webtask = require("webtask-tools");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

app.get("/users", (req, res) => {
  console.log(req.webtaskContext);
  res.status(200).send({ res: req.webtaskContext.data });
});

app.post("/users/:id", function (req, res) {
    /**
     * TODO:
     * Create a User in the DB
     */
});

app.delete("/users/:id", function (req, res) {
  /**
   * TODO:
   * Delete a User from the DB
   */
});

app.put("/users/:id", function (req, res) {
  /**
   * TODO:
   * Update a User in the DB
   */
});

module.exports = Webtask.fromExpress(app);
