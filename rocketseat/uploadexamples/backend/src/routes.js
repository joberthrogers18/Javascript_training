const routes = require("express").Router();
const multer = require("multer");
const multerConfig =  require("./config/multer");

routes.post("/pots", multer(multerConfig).single('file'), (req, res) => {
    res.json({ hello: "World" });
});

module.exports = routes;

