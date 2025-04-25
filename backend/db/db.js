const mongoose = require('mongoose');
require('dotenv').config();
const db = async () => {
    try {
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB CONNECTED')
    } catch (error) {
        console.log('DB CONNECTION ERROR')
        console.log(process.env.MONGO_URL)
        console.log(error)
    }
}

module.exports = {db}