 
const { MongoClient } = require("mongodb");
require('dotenv').config();


function setMongoDbClient() {
    let mongoDb;

    const url = process.env.MONGO_URI;

    mongoDb = new MongoClient(url);

    return mongoDb;
}

module.exports = setMongoDbClient;

