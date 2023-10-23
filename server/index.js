const app = require('./app')
const { config } = require('./config')

app.listen(config.PORT, () => {
    console.log(`app is running at port ${PORT}`);
})