const express = require('express');
const router = new express.Router();
const AdvertisementController = require('../controllers/advertisement.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post("/", authMiddleware, AdvertisementController.createAdvertisement);
router.get("/", AdvertisementController.showAdvertisements);
router.get("/:id", AdvertisementController.showAdvertisement);
router.post("/:id/comments", authMiddleware, AdvertisementController.addComment);

module.exports = router;