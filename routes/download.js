const {downloadcontroller} = require("../controllers/download");
const router = require("express").Router();
  router.get("/:videoName",downloadcontroller);
  module.exports = router;