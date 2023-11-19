const bcryptjs = require('bcryptjs');
const { User} = require('../models');

class UserController {

    async registerUser (req, res, next) {

        const { personalData, contactData, password } = req.body;

        try {
            const existingUser = await User.findOne(({ 'contactData.email': contactData.email }));

            if (existingUser)
                throw "Użytkownik o podanym email już istnieje."

            const hashedPassword = await bcryptjs.hash(password, 10);

            const newUser = new User({
                personalData,
                contactData,
                password: hashedPassword
            });

            await newUser.save();

            res.status(201).json({ newUser });


        } catch (err) {
            return res.status(500).json({ error: err });
        }
    }
    async showUser (req, res) {

        const userId = req.params.id;

        try {
            const user = await User.findById(userId);

            res.status(200).json({ user });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }


}

module.exports = new UserController();