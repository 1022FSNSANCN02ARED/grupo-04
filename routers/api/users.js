const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');


//Ver usuarios
router.get('/list', usersAPIController.list);
//Agregar un usuario
router.post('/create', usersAPIController.create);

module.exports = router;