const express = require ('express');
const router = express.Router();

const mainController = require("../controllers/main-controller.js")

router.get("/", mainController.home),
router.get("/login",mainController.login),



module.exports = router;