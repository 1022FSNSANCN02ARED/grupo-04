const express = require('express');
const router = express.Router();
const path = require('path');
const productsAPIController = require('../../controllers/api/productsAPIController');
const multer = require ('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '..','..', 'public', 'images'),
    filename: (req, file, cb) => {
        cb(null, "image-" + Date.now() + path.extname(file.originalname));
    },
});


const upload = multer({
    storage,
});

var auth = function(req, res, next) {
    if (req.session.userid)
      return next();
    else
      return res.send('Usted no se encuentra logeado');
  };


router.get("/tienda",productsAPIController.tienda);
router.post("/create",auth, upload.single("image"), productsAPIController.create);
router.put("/:id", productsAPIController.update);
router.delete("/:id",auth,productsAPIController.destroy);
router.get("/:id",productsAPIController.detail);
router.get("/:id/edit",auth,productsAPIController.edit);



module.exports = router;