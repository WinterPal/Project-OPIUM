const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { ACCESS_TOKEN, REFRESH_TOKEN } = require("../config");
const mongoose = require('../database/database');

class AuthController {

    async login (req, res) {

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ 'contactData.email': email });

            if (!user || !(await bcryptjs.compare(password, user.password)))
                throw "Nieprawidłowy email lub hasło";

            const tokenPayload = {
                sub: user._id,
                email: user.email,
            };

            const accessToken = jwt.sign(tokenPayload, ACCESS_TOKEN, { expiresIn: '30s' });
            const refreshToken = jwt.sign(tokenPayload, REFRESH_TOKEN);

            user.refreshToken = refreshToken;
            user.save();

            res.status(200).json({ accessToken, refreshToken });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }
    async refresh_token (req, res) {

        const { token } = req.body;

        try {
            const decoded = jwt.verify(token, REFRESH_TOKEN);

            const user = await User.findOne({ _id: decoded.sub });

            if (!user || user.refreshToken !== token)
                throw "Nieprawidłowy RefreshTeoken"

            const tokenPayload = {
                sub: user._id,
                email: user.email,
            };

            const newAccessToken = jwt.sign(tokenPayload, ACCESS_TOKEN, { expiresIn: '30s' })

            res.status(200).json({ newAccessToken });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

}

module.exports = new AuthController();