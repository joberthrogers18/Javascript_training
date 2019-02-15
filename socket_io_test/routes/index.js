const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.send({response: "I am alive"}).status(200);
});

module.exports = route;