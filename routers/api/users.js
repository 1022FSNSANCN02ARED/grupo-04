const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');



//Agregar una usuario
router.post('/create', usersAPIController.create);

module.exports = router;