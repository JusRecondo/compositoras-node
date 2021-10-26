 
const { MongoClient } = require("mongodb");

function setMongoDbClient() {
    let mongoDb;

    const url = "mongodb+srv://admin:test@cluster0.dnkkc.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

    mongoDb = new MongoClient(url);

    return mongoDb;
}

module.exports = setMongoDbClient;

