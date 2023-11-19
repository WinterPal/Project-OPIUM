const { Auction } = require('../models');

class AuctionController {

    async createAuction (req, res) {

        const {
            title,
            description,
            image,
            startTime,
            endTime,
            startingPrice,
            auctionDuration,
            auctionType
        } = req.body;

        try {
            const newAuction = new Auction({
                title,
                description,
                image,
                startTime,
                endTime,
                startingPrice,
                owner: req.user.sub,
                auctionType,
                auctionDuration,
            });

            await newAuction.save();

            res.status(201).json({ newAuction });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }
    async showAuctions (req, res) {
        try {
            const auctions = await Auction.find();

            res.status(200).json({ auctions });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }
    async showAuction (req, res) {

        const auctionId = req.params.id;

        try {
            const auction = await Auction.findById(auctionId);

            res.json({ auction });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }
    async addComment (req, res) {

        const auctionId = req.params.id;
        const { text } = req.body;

        try {
            const auction = await Auction.findByIdAndUpdate(
                auctionId,
                { $push: { comments: { author: req.user.sub, text: text, date: new Date() } } },
                { new: true }
            );

            if (!auction)
                throw "Aukcja nie została znaleziona."

            res.status(200).json({ auction });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }

}

module.exports = new AuctionController();