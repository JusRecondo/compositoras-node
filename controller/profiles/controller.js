const setMongoDbClient = require( '../../utils/MongoDB' );
const client = setMongoDbClient();

const dbName = "compositoras";

async function controller(req, res) {

    try {
        
         await client.connect();
         console.log("Connected correctly to server");

         const db = client.db(dbName);

         // Use the collection "compositoras"
         const collection = db.collection("profiles");

         // Find all 
         const cursor = await collection.find();

        if ( (await cursor.count() ) === 0) {
          res.send("No documents found!");
        } else {
          const profiles = await cursor.toArray();  
          res.json(profiles);
        }


    } catch (err) {
         console.log(err.stack);
    } 
    finally {
      await client.close();
    }   
}

module.exports = controller;