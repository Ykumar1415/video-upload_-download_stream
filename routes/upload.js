const router = require("express").Router();
const { uploadcontroller } = require("../controllers/upload");
  router.post("/", uploadcontroller);
module.exports = router;