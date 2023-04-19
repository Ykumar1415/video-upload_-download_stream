const router  = require("express").Router();
const {streamcontroller} = require("../controllers/stream");
router.get("/:videoName",streamcontroller);
module.exports = router;