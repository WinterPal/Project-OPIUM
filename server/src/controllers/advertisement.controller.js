const { Advertisement, Auction} = require('../models');

class AdvertisementController {

    async createAdvertisement (req, res) {

        const { title, content, image, expirationDate } = req.body;

        try {
            const newAdvertisement = new Advertisement({
                title,
                content,
                image,
                expirationDate,
                owner: req.user.sub
            });

            await newAdvertisement.save();

            res.status(201).json({ newAdvertisement });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async showAdvertisements (req, res) {
        try {
            const advertisements = await Advertisement.find();

            res.status(200).json({ advertisements });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }
    async showAdvertisement (req, res) {

        const advertisementId = req.params.id;

        try {
            const advertisement = await Advertisement.findById(advertisementId);

            res.status(200).json({ advertisement });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }
    async addComment (req, res) {

        const advertisementId = req.params.id;
        const { text } = req.body;

        try {
            const advertisement = await Advertisement.findByIdAndUpdate(
                advertisementId,
                { $push: { comments: { author: req.user.sub, text: text, date: new Date() } } },
                { new: true }
            );

            if (!advertisement)
                throw "Aukcja nie została znaleziona."

            res.status(200).json({ advertisement });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }

}

module.exports = new AdvertisementController();