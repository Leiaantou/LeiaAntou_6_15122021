const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");

const sauceCtrl = require("../controllers/sauce");

router.get("/", auth, sauceCtrl.getAllSauces); //renvoie toutes les sauces
router.get("/:id", auth, sauceCtrl.getOneSauce); //renvoie une sauce spécifique
router.post("/", auth, multer, sauceCtrl.createSauce); //enregistre une sauce
router.put("/:id", auth, multer, sauceCtrl.updateSauce); //modifier une sauce
router.delete("/:id", auth, multer, sauceCtrl.deleteSauce); //supprimer une sauce
router.post("/:id/like", auth, sauceCtrl.likeOrDislike); //like ou dislike

module.exports = router;
