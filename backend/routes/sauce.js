const express = require("express");
const router = express.Router();
const sauceCtrl = require("../controllers/sauce");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.get("/", auth, sauceCtrl.getAllSauces); //renvoie toutes les sauces
router.get("/:id", auth, sauceCtrl.getOneSauce); //renvoie une sauce spécifique
router.post("/", auth, multer, sauceCtrl.createSauce); //enregistre une sauce
router.put("/:id", auth, multer, sauceCtrl.updateSauce); //modifie une sauce
router.delete("/:id", auth, sauceCtrl.deleteSauce); //supprime une sauce
router.post("/:id/like", auth, sauceCtrl.likeOrDislike); //like ou dislike une sauce

module.exports = router;
