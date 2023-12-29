const express = require('express');
const { PORT } = require('./config.js');

const app = express();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const auctionRoutes = require('./routes/auctionRoutes');
const advertisementRoutes = require('./routes/advertisementRoutes');

app.use(express.json());
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Origin', '*');
    next();
})
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auctions", auctionRoutes);
app.use("/api/v1/advertisements", advertisementRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})