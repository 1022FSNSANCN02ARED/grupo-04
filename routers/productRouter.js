const express = require ('express');
const path = require ('path');
const router = express.Router();
const productsControllers = require("../controllers/productsController");
const multer = require ('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../public/images"),
    filename: (req, file, cb) => {
        cb(null, "image-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
});



router.get("/create",productsControllers.create);
router.get("/list",productsControllers.allProducts);
router.get("/dashboard", productsControllers.dashboard);
router.get("/:id", productsControllers.detail);
router.post("/create", upload.single("image"), productsControllers.store);
router.get("/:id/edit", productsControllers.edit);
router.put("/:id", productsControllers.update);
router.delete("/:id", productsControllers.destroy);


module.exports = router;