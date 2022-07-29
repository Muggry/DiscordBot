const mongoose = require('mongoose');
require(`dotenv`).config;

module.exports = (client) => {
    client.dbHandler = async () => {
        mongoose.Promise = global.Promise
        await mongoose.connect(process.env.MONGO_TOKEN, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    };
};