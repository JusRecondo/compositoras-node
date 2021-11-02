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

        let cursor; 
         
        if( req.query.name ) {
          const search = req.query.name;
          console.log(search);
          const query = { name: new RegExp(search,'i') };
          // Find search
          cursor = await collection.find( query );
        } else {
          // Find all 
          cursor = await collection.find();
        }

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