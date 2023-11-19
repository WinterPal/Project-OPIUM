const mongoose = require('mongoose');
const { DB_URL } = require('../config');

console.log('test')
const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('Połączono z bazą danych MongoDB!');
    } catch (error) {
        console.error('Błąd połączenia z MongoDB:', error);
    }
};

connectToDatabase();

module.exports = mongoose;