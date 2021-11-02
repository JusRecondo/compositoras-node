const setMongoDbClient = require( '../../utils/MongoDB' );
const { ObjectId } = require( 'mongodb' );
const client = setMongoDbClient();
const dbName = "compositoras";

async function controller(req, res) {

    try {

      await client.connect();
         console.log("Connected correctly to server 2");

         const db = client.db(dbName);

         // Use the collection "compositoras"
         const collection = db.collection("profiles");

         const query = { "_id": ObjectId(req.params.id) };

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