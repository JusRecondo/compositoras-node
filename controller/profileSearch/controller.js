const setMongoDbClient = require( '../../utils/MongoDB' );
const client = setMongoDbClient();
const dbName = "compositoras";

async function controller(req, res) {

  try {
      console.log("ProfileSearchController");
      
       await client.connect();
       console.log("Connected correctly to server");

       const db = client.db(dbName);

       // Use the collection "compositoras"
       const collection = db.collection("profiles");

       let search = req.query.name;
       
       const query = { name: new RegExp(search,'i') };
            
       // Find 
       const cursor = await collection.find( query );

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