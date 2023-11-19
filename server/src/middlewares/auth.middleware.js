const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN } = require('../config');

const authMiddleware = (req, res, next) => {

    const token = req.headers['authorization']?.split(' ')[1];

    if (!token)
        return res.status(401);

    jwt.verify(token, ACCESS_TOKEN, (err, data) => {
        if (err)
            return res.status(403).json({ error: err });

        req.user = data;
        next();
    })

}

module.exports = authMiddleware;