const express = require('express');
const router = express.Router();
const path = require('path');
const productsAPIController = require('../../controllers/api/productsAPIController');
const multer = require ('multer');

const storage = multer.diskStorage({
    destination: path.resolve("/public/images"),
    filename: (req, file, cb) => {
        cb(null, "image-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
});


/*router.get("/list",productsAPIController.list)*/
router.post("/create", upload.single("image"), productsAPIController.create);
router.put("/:id", productsAPIController.update);
router.delete("/:id",productsAPIController.destroy);


module.exports = router;