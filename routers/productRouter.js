const express = require ('express');
const router = express.Router();
const productsControllers = require("../controllers/productsController");

router.get("/create",productsControllers.create);
router.get("/list",productsControllers.allProducts);
router.get("/new", productsControllers.new);

module.exports = router;