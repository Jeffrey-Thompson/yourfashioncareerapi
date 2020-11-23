const express = require("express");
const router = express.Router();
const controller = require("../controllers");
const authRequired = require("../middleware/authRequired");

router.get("/", authRequired, controller.user.show);

module.exports = router;