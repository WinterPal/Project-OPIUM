const express = require('express');
const router = new express.Router();
const AuctionController = require('../controllers/auction.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post("/", authMiddleware, AuctionController.createAuction);
router.get("/", AuctionController.showAuctions);
router.get("/:id", AuctionController.showAuction);
router.post("/:id/comments", authMiddleware, AuctionController.addComment);


module.exports = router;