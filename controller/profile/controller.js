const setMongoDbClient = require( '../../utils/MongoDB' );
const client = setMongoDbClient();
const dbName = "compositoras";

async function controller(req, res) {

    try {
      console.log("ProfileController");

         await client.connect();
         console.log("Connected correctly to server 2");

         const db = client.db(dbName);

         // Use the collection "compositoras"
         const collection = db.collection("profiles");

         const query = { name: req.params.name };

         // Find all 
         const profile = await collection.findOne( query );

        if ( profile === null ) {
          res.send("No documents found!");
        } else {
          res.json(profile);
        }


    } catch (err) {
         console.log(err.stack);
    } 
    finally {
      await client.close();
    }   
}

module.exports = controller;